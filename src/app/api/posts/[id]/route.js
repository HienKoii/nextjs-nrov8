import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request, { params }) {
  try {
    const { id } = await params;

    const postId = Number(id);

    if (!Number.isInteger(postId)) {
      return NextResponse.json(
        {
          success: false,
          message: "ID bài viết không hợp lệ",
        },
        {
          status: 400,
        },
      );
    }

    const post = await prisma.posts.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      return NextResponse.json(
        {
          success: false,
          message: "Không tìm thấy bài viết",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json({
      success: true,
      data: post,
    });
  } catch (error) {
    console.error("GET /api/posts/[id] error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể lấy bài viết",
      },
      {
        status: 500,
      },
    );
  }
}
