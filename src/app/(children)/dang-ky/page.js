"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      user: formData.get("user"),
      pass: formData.get("pass"),
      confirmPass: formData.get("confirmPass"),
      email: formData.get("email"),
    };

    console.log(data);
  };

  return (
    <div className="w-100">
      <div className="nro-card">
        <form className="p-4 p-md-5" onSubmit={handleSubmit}>
          {/* Tiêu đề */}
          <div className="text-center mb-4">
            <h2 className="fs-5 fw-bold text-nro-brown mb-1">Đăng ký tài khoản</h2>
          </div>

          {/* Form */}
          <div className="d-flex flex-column gap-3">
            {/* Tài khoản */}
            <div>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-person"></i>
                </span>

                <input type="text" name="user" placeholder="Tài khoản" className="form-control" maxLength={20} required />
              </div>

              <div className="form-text">Chỉ dùng ký tự thường, không ký tự đặc biệt, không viết hoa, tối đa 20 ký tự.</div>
            </div>

            {/* Mật khẩu */}
            <div>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-lock"></i>
                </span>

                <input type={showPassword ? "text" : "password"} name="pass" placeholder="Mật khẩu" className="form-control" maxLength={20} required />

                <button type="button" className="btn btn-secondary" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}>
                  <i className={showPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                </button>
              </div>

              <div className="form-text">Chỉ dùng ký tự thường, không ký tự đặc biệt, không viết hoa, tối đa 20 ký tự.</div>
            </div>

            {/* Nhập lại mật khẩu */}
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock-fill"></i>
              </span>

              <input type={showConfirmPassword ? "text" : "password"} name="confirmPass" placeholder="Nhập lại mật khẩu" className="form-control" maxLength={20} required />

              <button type="button" className="btn btn-secondary" onClick={() => setShowConfirmPassword(!showConfirmPassword)} aria-label={showConfirmPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}>
                <i className={showConfirmPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
              </button>
            </div>

            {/* Email */}
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-envelope"></i>
              </span>

              <input type="email" name="email" placeholder="Email" className="form-control" required />
            </div>

            {/* Đăng ký */}
            <button type="submit" className="btn btn-danger w-100 fw-bold py-3 mt-1">
              ĐĂNG KÝ NGAY
            </button>
          </div>

          {/* Hoặc */}
          <div className="d-flex align-items-center gap-3 my-4">
            <hr className="flex-grow-1 m-0" />
            <span className="small text-muted">Hoặc</span>
            <hr className="flex-grow-1 m-0" />
          </div>

          {/* Đăng nhập */}
          <Link href="/dang-nhap" className="btn btn-outline-secondary w-100 py-2 fw-bold">
            <i className="bi bi-box-arrow-in-right me-2"></i>
            Đăng nhập tài khoản
          </Link>
        </form>
      </div>
    </div>
  );
}
