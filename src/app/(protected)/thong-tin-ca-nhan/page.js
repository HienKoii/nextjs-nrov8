import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { getGenderName, getPlayerAvatar } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    return (
      <div className="d-flex flex-column gap-3">
        <div className="card border-0 shadow-sm profile-card">
          <div className="card-body p-4 text-center">
            <h2 className="fs-5 fw-bold text-nro-brown mb-3">Bạn chưa đăng nhập</h2>

            <a href="/dang-nhap" className="btn btn-primary">
              Đăng nhập
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Lấy dữ liệu mới nhất từ DB
  const account = await prisma.account.findUnique({
    where: {
      id: Number(session.user.id),
    },
    include: {
      player: true,
    },
  });

  if (!account) {
    return <div>Không tìm thấy tài khoản.</div>;
  }

  const player = account.player;

  return (
    <div className="d-flex flex-column gap-3">
      {/* PROFILE CARD */}
      <div className="card border-0 shadow-sm profile-card">
        <div className="card-body p-4">
          <div className="d-flex flex-column align-items-center text-center">
            {/* AVATAR */}
            <div className="profile-avatar-wrapper mb-3">
              <div className="profile-avatar-border">
                <div className="profile-avatar">
                  <img src={getPlayerAvatar(player)} alt="Avatar" />
                </div>
              </div>
            </div>

            {/* USER INFO */}
            <div className="w-100">
              <div className="d-flex align-items-center justify-content-center gap-2 mt-2">
                <h2 className="fs-5 fw-bold text-nro-brown mb-0">{account.username}</h2>

                {account.is_admin === 1 && <span className="badge bg-danger">Admin</span>}
              </div>
            </div>

            <hr className="w-100 my-4 profile-divider" />

            {/* ACCOUNT INFO */}
            <div className="w-100 d-flex flex-column gap-3">
              {/* ACCOUNT ID */}
              <div className="d-flex justify-content-between align-items-center small">
                <span className="text-muted fw-medium">ID tài khoản:</span>

                <span className="text-nro-brown fw-bold">{account.id}</span>
              </div>

              {/* CHARACTER */}
              <div className="d-flex justify-content-between align-items-center small">
                <span className="text-muted fw-medium">Tên nhân vật:</span>

                <span className="text-nro-brown fw-bold">{player?.name || "Chưa có nhân vật"}</span>
              </div>

              {/* GENDER */}
              {player && (
                <div className="d-flex justify-content-between align-items-center small">
                  <span className="text-muted fw-medium">Hành tinh:</span>

                  <span className="text-nro-brown fw-bold">{getGenderName(player.gender)}</span>
                </div>
              )}

              {/* VND */}
              <div className="d-flex justify-content-between align-items-center small">
                <span className="text-muted fw-medium">Số dư:</span>

                <span className="text-success fw-bold">{Number(account.vnd || 0).toLocaleString("vi-VN")} VNĐ</span>
              </div>

              {/* ĐÃ NẠP */}
              <div className="d-flex justify-content-between align-items-center small">
                <span className="text-muted fw-medium">Đã nạp:</span>

                <span className="text-nro-brown fw-bold">{Number(account.danap || 0).toLocaleString("vi-VN")} VNĐ</span>
              </div>

              {/* TRẠNG THÁI */}
              <div className="d-flex justify-content-between align-items-center small">
                <span className="text-muted fw-medium">Trạng thái:</span>

                <span className={account.active ? "text-success fw-bold" : "text-danger fw-bold"}>{account.active ? "Đã kích hoạt" : "Chưa kích hoạt"}</span>
              </div>

              {/* QUYỀN */}
              <div className="d-flex justify-content-between align-items-center small">
                <span className="text-muted fw-medium">Quyền hạn:</span>

                <span className={account.is_admin ? "text-danger fw-bold" : "text-nro-brown fw-bold"}>{account.is_admin ? "Quản trị viên" : "Thành viên"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
