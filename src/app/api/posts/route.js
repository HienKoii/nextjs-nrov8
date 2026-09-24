import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const page = Math.max(Number(searchParams.get("page")) || 1, 1);

    const limit = 5;

    const skip = (page - 1) * limit;

    const [posts, totalPosts] = await Promise.all([
      prisma.posts.findMany({
        skip,
        take: limit,
        orderBy: [
          {
            ghimbai: "desc",
          },
          {
            created_at: "desc",
          },
        ],
      }),

      prisma.posts.count(),
    ]);

    const totalPages = Math.ceil(totalPosts / limit);

    return NextResponse.json({
      success: true,
      data: posts,
      pagination: {
        page,
        limit,
        totalPosts,
        totalPages,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    });
  } catch (error) {
    console.error("GET /api/posts error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Không thể lấy danh sách bài viết",
      },
      {
        status: 500,
      },
    );
  }
}
