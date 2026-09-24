"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function LoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const username = formData.get("user");
    const password = formData.get("pass");

    try {
      const result = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      console.log("[LOGIN RESULT]", result);

      if (result?.error) {
        console.error("[LOGIN ERROR]", result.error);

        if (result.error === "CredentialsSignin") {
          toast.error("Tên đăng nhập hoặc mật khẩu không đúng.");
        } else {
          toast.error("Lỗi server, vui lòng thử lại.");
        }

        return;
      }

      toast.success("Đăng nhập thành công!");

      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("[LOGIN ERROR]", error);

      toast.error("Lỗi server, vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-100">
      <div className="nro-card">
        <form className="p-4 p-md-5" onSubmit={handleSubmit}>
          {/* Tiêu đề */}
          <div className="text-center mb-4">
            <h2 className="fs-5 fw-bold text-nro-brown mb-1">Đăng nhập tài khoản</h2>
          </div>

          {/* Form */}
          <div className="d-flex flex-column gap-3">
            {/* Tài khoản */}
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-person"></i>
              </span>

              <input type="text" name="user" placeholder="Tên tài khoản" className="form-control" required disabled={loading} />
            </div>

            {/* Mật khẩu */}
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock"></i>
              </span>

              <input type={showPassword ? "text" : "password"} name="pass" placeholder="Mật khẩu" className="form-control" required disabled={loading} />

              <button type="button" className="btn btn-secondary" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"} disabled={loading}>
                <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
              </button>
            </div>

            {/* Đăng nhập */}
            <button type="submit" className="btn btn-danger w-100 fw-bold py-3 mt-1" disabled={loading}>
              {loading ? "ĐANG ĐĂNG NHẬP..." : "ĐĂNG NHẬP NGAY"}
            </button>
          </div>

          {/* Hoặc */}
          <div className="d-flex align-items-center gap-3 my-4">
            <hr className="flex-grow-1 m-0" />

            <span className="small text-muted">Hoặc</span>

            <hr className="flex-grow-1 m-0" />
          </div>

          {/* Đăng ký */}
          <Link href="/dang-ky" className="btn btn-outline-secondary w-100 py-2 fw-bold">
            <i className="bi bi-box-arrow-in-right me-2"></i>
            Đăng ký tài khoản mới
          </Link>
        </form>
      </div>
    </div>
  );
}
