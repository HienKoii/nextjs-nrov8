import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const accounts = await prisma.account.findMany({
      take: 5,

      select: {
        id: true,
        username: true,
        is_admin: true,
        active: true,

        player: {
          select: {
            id: true,
            name: true,
            head: true,
            gender: true,
          },
        },
      },
    });

    return Response.json({
      success: true,
      accounts,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Database error",
      },
      {
        status: 500,
      },
    );
  }
}
