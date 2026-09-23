"use client";

import { useState } from "react";

export default function ChangePasswordPage() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      currentPass: formData.get("currentPass"),
      newPass: formData.get("newPass"),
      confirmPass: formData.get("confirmPass"),
    };

    console.log(data);
  };

  return (
    <div className="w-100">
      <div className="nro-card">
        <form className="p-4 p-md-5" onSubmit={handleSubmit}>
          {/* Tiêu đề */}
          <div className="text-center mb-4">
            <h2 className="fs-5 fw-bold text-nro-brown mb-1">Đổi mật khẩu</h2>
          </div>

          {/* Form */}
          <div className="d-flex flex-column gap-3">
            {/* Mật khẩu hiện tại */}
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock"></i>
              </span>

              <input type={showCurrentPassword ? "text" : "password"} name="currentPass" placeholder="Mật khẩu hiện tại" className="form-control" maxLength={20} required />

              <button type="button" className="btn btn-secondary" onClick={() => setShowCurrentPassword(!showCurrentPassword)} aria-label={showCurrentPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}>
                <i className={showCurrentPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
              </button>
            </div>

            {/* Mật khẩu mới */}
            <div>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-lock"></i>
                </span>

                <input type={showNewPassword ? "text" : "password"} name="newPass" placeholder="Mật khẩu mới" className="form-control" maxLength={20} required />

                <button type="button" className="btn btn-secondary" onClick={() => setShowNewPassword(!showNewPassword)} aria-label={showNewPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}>
                  <i className={showNewPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                </button>
              </div>

              <div className="form-text">Chỉ dùng ký tự thường, không ký tự đặc biệt, không viết hoa, tối đa 20 ký tự.</div>
            </div>

            {/* Nhập lại mật khẩu mới */}
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock-fill"></i>
              </span>

              <input type={showConfirmPassword ? "text" : "password"} name="confirmPass" placeholder="Nhập lại mật khẩu mới" className="form-control" maxLength={20} required />

              <button type="button" className="btn btn-secondary" onClick={() => setShowConfirmPassword(!showConfirmPassword)} aria-label={showConfirmPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}>
                <i className={showConfirmPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
              </button>
            </div>

            {/* Đổi mật khẩu */}
            <button type="submit" className="btn btn-danger w-100 fw-bold py-3 mt-1">
              ĐỔI MẬT KHẨU
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
