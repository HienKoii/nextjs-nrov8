import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

export async function POST(request) {
  try {
    // Kiểm tra đăng nhập
    const session = await auth();

    if (!session?.user?.id) {
      return Response.json(
        {
          success: false,
          message: "Bạn chưa đăng nhập.",
        },
        { status: 401 },
      );
    }

    // Đọc dữ liệu gửi lên
    const body = await request.json();

    const currentPass = String(body.currentPass || "");
    const newPass = String(body.newPass || "");
    const confirmPass = String(body.confirmPass || "");

    // Kiểm tra dữ liệu
    if (!currentPass || !newPass || !confirmPass) {
      return Response.json(
        {
          success: false,
          message: "Vui lòng nhập đầy đủ thông tin.",
        },
        { status: 400 },
      );
    }

    // Kiểm tra mật khẩu mới
    if (newPass !== confirmPass) {
      return Response.json(
        {
          success: false,
          message: "Mật khẩu mới không khớp.",
        },
        { status: 400 },
      );
    }

    // Không cho mật khẩu mới giống mật khẩu cũ
    if (currentPass === newPass) {
      return Response.json(
        {
          success: false,
          message: "Mật khẩu mới phải khác mật khẩu hiện tại.",
        },
        { status: 400 },
      );
    }

    // Chỉ cho ký tự thường + số
    if (!/^[a-z0-9]+$/.test(newPass)) {
      return Response.json(
        {
          success: false,
          message: "Mật khẩu mới chỉ được chứa chữ thường và số.",
        },
        { status: 400 },
      );
    }

    // Kiểm tra độ dài
    if (newPass.length < 6 || newPass.length > 20) {
      return Response.json(
        {
          success: false,
          message: "Mật khẩu mới phải từ 6 đến 20 ký tự.",
        },
        { status: 400 },
      );
    }

    // Lấy tài khoản hiện tại
    const account = await prisma.account.findUnique({
      where: {
        id: Number(session.user.id),
      },
      select: {
        id: true,
        password: true,
      },
    });

    if (!account) {
      return Response.json(
        {
          success: false,
          message: "Không tìm thấy tài khoản.",
        },
        { status: 404 },
      );
    }

    // Kiểm tra mật khẩu hiện tại
    if (currentPass !== account.password) {
      return Response.json(
        {
          success: false,
          message: "Mật khẩu hiện tại không đúng.",
        },
        { status: 400 },
      );
    }

    // Đổi mật khẩu
    await prisma.account.update({
      where: {
        id: account.id,
      },
      data: {
        password: newPass,
      },
    });

    return Response.json({
      success: true,
      message: "Đổi mật khẩu thành công.",
    });
  } catch (error) {
    console.error("[CHANGE PASSWORD ERROR]", error);

    return Response.json(
      {
        success: false,
        message: "Lỗi server, vui lòng thử lại.",
      },
      { status: 500 },
    );
  }
}
