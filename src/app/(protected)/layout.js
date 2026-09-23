import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({ children }) {
  const session = await auth();

  if (!session?.user) {
    redirect("/dang-nhap");
  }

  return children;
}
