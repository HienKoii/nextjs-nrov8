export default function DownloadGame() {
  return (
    <div className="nro-card p-3">
      <div className="sidebar-title">
        <i className="bi bi-download"></i>
        <h3>Tải game đa nền tảng</h3>
      </div>

      <div className="d-flex flex-column gap-2">
        {/* PC */}
        <a href="#" className="download-btn download-pc">
          <i className="bi bi-pc-display me-2"></i>
          Tải phiên bản PC (Windows)
        </a>

        {/* Android / iOS */}
        <div className="row g-2">
          <div className="col-6">
            <a href="#" className="download-btn download-android">
              <i className="bi bi-android2 me-1"></i>
              Android (APK)
            </a>
          </div>

          <div className="col-6">
            <a href="#" className="download-btn download-ios">
              <i className="bi bi-apple me-1"></i>
              iPhone (iOS)
            </a>
          </div>
        </div>

        {/* Java / CH Play */}
        <div className="row g-2">
          <div className="col-6">
            <a href="#" className="download-btn download-java">
              <i className="bi bi-filetype-java me-1"></i>
              Java (J2ME)
            </a>
          </div>

          <div className="col-6">
            <a href="#" className="download-btn download-store">
              <i className="bi bi-google-play me-1"></i>
              CH Play
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
