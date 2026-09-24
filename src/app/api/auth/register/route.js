import { prisma } from "@/lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();

    const user = String(body.user || "").trim();
    const pass = String(body.pass || "");
    const confirmPass = String(body.confirmPass || "");
    const email = String(body.email || "").trim();

    // =========================
    // VALIDATE
    // =========================

    if (!user || !pass || !confirmPass || !email) {
      return Response.json(
        {
          success: false,
          message: "Vui lòng nhập đầy đủ thông tin.",
        },
        { status: 400 },
      );
    }

    // Username: chỉ chữ thường và số
    if (!/^[a-z0-9]+$/.test(user)) {
      return Response.json(
        {
          success: false,
          message: "Tài khoản chỉ được chứa chữ thường và số.",
        },
        { status: 400 },
      );
    }

    if (user.length < 3 || user.length > 20) {
      return Response.json(
        {
          success: false,
          message: "Tài khoản phải từ 3 đến 20 ký tự.",
        },
        { status: 400 },
      );
    }

    // Password
    if (!/^[a-z0-9]+$/.test(pass)) {
      return Response.json(
        {
          success: false,
          message: "Mật khẩu chỉ được chứa chữ thường và số.",
        },
        { status: 400 },
      );
    }

    if (pass.length < 6 || pass.length > 20) {
      return Response.json(
        {
          success: false,
          message: "Mật khẩu phải từ 6 đến 20 ký tự.",
        },
        { status: 400 },
      );
    }

    // Confirm password
    if (pass !== confirmPass) {
      return Response.json(
        {
          success: false,
          message: "Mật khẩu nhập lại không khớp.",
        },
        { status: 400 },
      );
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return Response.json(
        {
          success: false,
          message: "Email không hợp lệ.",
        },
        { status: 400 },
      );
    }

    // =========================
    // KIỂM TRA TÀI KHOẢN
    // =========================

    const existingAccount = await prisma.account.findFirst({
      where: {
        OR: [
          {
            username: user,
          },
          {
            email: email,
          },
          {
            gmail: email,
          },
        ],
      },
      select: {
        id: true,
        username: true,
        email: true,
        gmail: true,
      },
    });

    if (existingAccount) {
      if (existingAccount.username === user) {
        return Response.json(
          {
            success: false,
            message: "Tên tài khoản đã tồn tại.",
          },
          { status: 409 },
        );
      }

      return Response.json(
        {
          success: false,
          message: "Email đã được sử dụng.",
        },
        { status: 409 },
      );
    }

    // =========================
    // TẠO ACCOUNT
    // =========================

    const account = await prisma.account.create({
      data: {
        username: user,
        password: pass,
        email: email,
      },
      select: {
        id: true,
        username: true,
        email: true,
      },
    });

    return Response.json(
      {
        success: true,
        message: "Đăng ký tài khoản thành công.",
        data: account,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("[REGISTER ERROR]", error);

    return Response.json(
      {
        success: false,
        message: "Lỗi server, vui lòng thử lại.",
      },
      { status: 500 },
    );
  }
}
