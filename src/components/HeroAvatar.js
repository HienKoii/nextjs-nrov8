import Link from "next/link";
import { auth } from "@/auth";
import { getPlayerAvatar } from "@/lib/utils";

export default async function HeroAvatar() {
  const session = await auth();

  const player = session?.user?.player;
  const isLoggedIn = !!session?.user;

  const avatar = getPlayerAvatar(player);

  return (
    <div className="hero-avatar-wrapper">
      {" "}
      <div className="hero-avatar-pulse" />
      <Link href={isLoggedIn ? "/thong-tin-ca-nhan" : "/dang-nhap"} className="hero-avatar d-block">
        <img src={avatar} alt={isLoggedIn ? "Avatar" : "Đăng nhập"} />
      </Link>
    </div>
  );
}
