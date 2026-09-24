"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function GiftcodePage() {
  const [giftcodes, setGiftcodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGiftcodes = async () => {
      try {
        const response = await fetch("/api/giftcode");

        const result = await response.json();

        if (!response.ok || !result.success) {
          toast.error(result.message || "Không thể lấy danh sách giftcode.");
          return;
        }

        setGiftcodes(result.data);
      } catch (error) {
        console.error("[GET GIFTCODE]", error);

        toast.error("Lỗi server, vui lòng thử lại.");
      } finally {
        setLoading(false);
      }
    };

    fetchGiftcodes();
  }, []);

  return (
    <div className="nro-card p-4">
      <h1 className="fs-5 fw-bold mb-4">
        <i className="bi bi-gift me-2"></i>
        Giftcode
      </h1>

      {loading ? (
        <div className="text-center py-4 text-muted">Đang tải giftcode...</div>
      ) : giftcodes.length === 0 ? (
        <div className="text-center py-4 text-muted">Hiện chưa có giftcode.</div>
      ) : (
        <div className="row g-2">
          {giftcodes.map((item) => (
            <div key={item.id} className="col-12 col-md-6">
              <div className="border rounded p-3 fw-bold">{item.code}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
