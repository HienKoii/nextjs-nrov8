"use client";
import { usePathname } from "next/navigation";
import LoginBox from "./LoginBox";
import CommunityBox from "./CommunityBox";
import DownloadGame from "./DownloadGame";
export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="d-flex flex-column gap-3">
      <LoginBox />
      <CommunityBox />
      {pathname !== "/tai-game" && <DownloadGame />}
    </div>
  );
}
