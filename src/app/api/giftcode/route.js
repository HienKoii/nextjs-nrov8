import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const giftcodes = await prisma.giftcode.findMany({
      select: {
        id: true,
        code: true,
      },
      orderBy: {
        id: "desc",
      },
    });

    return Response.json({
      success: true,
      data: giftcodes,
    });
  } catch (error) {
    console.error("[GET GIFTCODE ERROR]", error);

    return Response.json(
      {
        success: false,
        message: "Lỗi server, vui lòng thử lại.",
      },
      { status: 500 },
    );
  }
}
