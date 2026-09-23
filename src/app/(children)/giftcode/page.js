const giftcodes = [
  {
    id: 1,
    code: "NRO2026",
  },
  {
    id: 2,
    code: "GIFTCODE01",
  },
  {
    id: 3,
    code: "TANBINH2026",
  },
  {
    id: 4,
    code: "EVENT2026",
  },
];

export default function GiftcodePage() {
  return (
    <div className="nro-card p-4">
      <h1 className="fs-5 fw-bold mb-4">
        <i className="bi bi-gift me-2"></i>
        Giftcode
      </h1>

      <div className="row g-2">
        {giftcodes.map((item) => (
          <div key={item.id} className="col-12 col-md-6">
            <div className="border rounded p-3 fw-bold">{item.code}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
