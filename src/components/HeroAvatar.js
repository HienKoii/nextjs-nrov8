import Link from "next/link";
import { auth } from "@/auth";
export default async function HeroAvatar() {
  const session = await auth();
  console.log("session", session);
  const player = session?.user?.player;
  const isLoggedIn = !!session?.user;
  const avatar = player ? `/imgs/avatar/${player.gender}.png` : "/imgs/login_icon.png";
  return (
    <div className="hero-avatar-wrapper">
      {" "}
      <div className="hero-avatar-pulse" />{" "}
      <div className="hero-avatar">
        {" "}
        <Link href={isLoggedIn ? "/thong-tin-ca-nhan" : "/dang-nhap"}>
          {" "}
          <img src={avatar} alt={isLoggedIn ? "Avatar" : "Đăng nhập"} />{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
}
