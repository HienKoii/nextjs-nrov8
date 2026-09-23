"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function LoginBox() {
  const { data: session, status } = useSession();

  // Đang kiểm tra session
  if (status === "loading") {
    return (
      <div className="nro-card p-3">
        <div className="sidebar-title">
          <i className="bi bi-person-circle"></i>
          <h3>Đang tải...</h3>
        </div>

        <div className="text-center py-2">
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Đang tải...</span>
          </div>
        </div>
      </div>
    );
  }

  const user = session?.user || null;
  const player = user?.player || null;

  return (
    <div className="nro-card p-3">
      <div className="sidebar-title">
        <i className="bi bi-person-circle"></i>
        <h3>
          {user ? (
            <>
              Xin chào: <span className="text-primary">{user.username}</span>
            </>
          ) : (
            "Đăng nhập hệ thống"
          )}
        </h3>
      </div>

      {!user ? (
        <>
          <Link href="/dang-nhap" className="btn btn-danger w-100 mb-2">
            <i className="bi bi-box-arrow-in-right me-2"></i>
            Đăng nhập
          </Link>

          <Link href="/dang-ky" className="btn btn-primary w-100">
            <i className="bi bi-person-plus me-2"></i>
            Đăng ký
          </Link>
        </>
      ) : (
        <>
          {/* PERSONAL */}
          <Link href="/thong-tin-ca-nhan" className="btn btn-primary w-100 mb-2">
            <i className="bi bi-person me-2"></i>
            Thông tin cá nhân
          </Link>

          {/* CHANGE PASSWORD */}
          <Link href="/doi-mat-khau" className="btn btn-secondary w-100 mb-2">
            <i className="bi bi-key me-2"></i>
            Đổi mật khẩu
          </Link>

          {/* LOGOUT */}
          <button
            type="button"
            className="btn btn-danger w-100"
            onClick={() =>
              signOut({
                callbackUrl: "/",
              })
            }
          >
            <i className="bi bi-box-arrow-right me-2"></i>
            Đăng xuất
          </button>
        </>
      )}
    </div>
  );
}
