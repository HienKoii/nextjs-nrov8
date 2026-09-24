"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ChangePasswordPage() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(form);

    const currentPass = String(formData.get("currentPass") || "");
    const newPass = String(formData.get("newPass") || "");
    const confirmPass = String(formData.get("confirmPass") || "");

    // Kiểm tra mật khẩu mới
    if (!/^[a-z0-9]+$/.test(newPass)) {
      toast.error("Mật khẩu mới chỉ được chứa chữ thường và số.");
      return;
    }

    if (newPass.length < 6 || newPass.length > 20) {
      toast.error("Mật khẩu mới phải từ 6 đến 20 ký tự.");
      return;
    }

    if (newPass !== confirmPass) {
      toast.error("Mật khẩu mới không khớp.");
      return;
    }

    if (currentPass === newPass) {
      toast.error("Mật khẩu mới phải khác mật khẩu hiện tại.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/auth/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          currentPass,
          newPass,
          confirmPass,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        toast.error(result.message || "Đổi mật khẩu thất bại.");
        return;
      }

      toast.success(result.message || "Đổi mật khẩu thành công.");

      form.reset();

      setShowCurrentPassword(false);
      setShowNewPassword(false);
      setShowConfirmPassword(false);

      setTimeout(() => {
        signOut({
          callbackUrl: "/dang-nhap",
        });
      }, 1200);
    } catch (error) {
      console.error("[CHANGE PASSWORD]", error);

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
            <h2 className="fs-5 fw-bold text-nro-brown mb-1">Đổi mật khẩu</h2>
          </div>

          {/* Form */}
          <div className="d-flex flex-column gap-3">
            {/* Mật khẩu hiện tại */}
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock"></i>
              </span>

              <input type={showCurrentPassword ? "text" : "password"} name="currentPass" placeholder="Mật khẩu hiện tại" className="form-control" maxLength={20} required disabled={loading} />

              <button type="button" className="btn btn-secondary" onClick={() => setShowCurrentPassword(!showCurrentPassword)} aria-label={showCurrentPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"} disabled={loading}>
                <i className={showCurrentPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
              </button>
            </div>

            {/* Mật khẩu mới */}
            <div>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-lock"></i>
                </span>

                <input type={showNewPassword ? "text" : "password"} name="newPass" placeholder="Mật khẩu mới" className="form-control" maxLength={20} required disabled={loading} />

                <button type="button" className="btn btn-secondary" onClick={() => setShowNewPassword(!showNewPassword)} aria-label={showNewPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"} disabled={loading}>
                  <i className={showNewPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
                </button>
              </div>

              <div className="form-text">Chỉ dùng ký tự thường và số, không ký tự đặc biệt, tối đa 20 ký tự.</div>
            </div>

            {/* Nhập lại mật khẩu mới */}
            <div className="input-group">
              <span className="input-group-text">
                <i className="bi bi-lock-fill"></i>
              </span>

              <input type={showConfirmPassword ? "text" : "password"} name="confirmPass" placeholder="Nhập lại mật khẩu mới" className="form-control" maxLength={20} required disabled={loading} />

              <button type="button" className="btn btn-secondary" onClick={() => setShowConfirmPassword(!showConfirmPassword)} aria-label={showConfirmPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"} disabled={loading}>
                <i className={showConfirmPassword ? "bi bi-eye-slash" : "bi bi-eye"}></i>
              </button>
            </div>

            {/* Đổi mật khẩu */}
            <button type="submit" className="btn btn-danger w-100 fw-bold py-3 mt-1" disabled={loading}>
              {loading ? "ĐANG ĐỔI MẬT KHẨU..." : "ĐỔI MẬT KHẨU"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
