import React from "react";

export default function DonatePage() {
  const qrUrl = "https://img.vietqr.io/image/VCB-1059896787-compact.png?addInfo=lion%2012345";

  return (
    <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
      <div className="card-body p-4">
        <div className="row g-4 align-items-center">
          {/* QR */}
          <div className="col-12 col-md-5 text-center">
            <div className=" rounded-4 p-3 d-inline-block">
              <img
                src={qrUrl}
                alt="QR chuyển khoản"
                className="img-fluid"
                style={{
                  maxWidth: "280px",
                  width: "100%",
                }}
              />
            </div>

            <p className="text-muted small mt-3 mb-0">Quét mã QR để chuyển khoản</p>
          </div>

          {/* Thông tin */}
          <div className="col-12 col-md-7">
            <div className="mb-3">
              <div className="text-muted small">Ngân hàng</div>
              <div className="fw-semibold">Vietcombank</div>
            </div>

            <div className="mb-3">
              <div className="text-muted small">Số tài khoản</div>
              <div className="fw-semibold">1059896787</div>
            </div>

            <div className="mb-3">
              <div className="text-muted small">Chủ tài khoản</div>
              <div className="fw-semibold">Nguyen Duc Chat</div>
            </div>

            <div className="mb-3">
              <div className="text-muted small">Nội dung chuyển khoản</div>
              <div className="fw-semibold text-primary">lion 12345</div>
            </div>
            <div className="mb-3">
              <div className="text-muted small">Số tiền</div>
              <div className="fw-semibold text-danger">Tối thiểu 10.000 vnđ</div>
            </div>
          </div>
        </div>
        <div className="alert alert-info rounded-3 mb-0">
          <div className="fw-bold mb-2">Lưu ý</div>
          <div className="small">
            Sau khi chuyển khoản thành công, hệ thống sẽ tự động cộng tiền vào tài khoản của bạn trong khoảng <strong>5 phút</strong>.
          </div>
          <div className="small mt-2">
            Nếu sau <strong>5 phút</strong> tiền vẫn chưa được cộng, vui lòng liên hệ Admin qua Zalo để được hỗ trợ.
          </div>
        </div>
      </div>
    </div>
  );
}
