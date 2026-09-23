"use client";

import { useState } from "react";

const characters = [
  {
    title: "Trái Đất",
    description: "Người trái đất với những kỹ năng đặc biệt khó chịu, và rất mạnh khi đi theo nhóm. Đại diện Gohan, Krillin, Yamcha.",
  },
  {
    title: "Namếc",
    description: "Khả năng tái tạo và hỗ trợ đồng đội đáng kinh ngạc của người Namếc, với đại diện Ốc tiêu, Pocollo và Kami.",
  },
  {
    title: "Xayda",
    description: "Trải nghiệm sức mạnh kinh hoàng khi chiến đấu đơn độc của các chiến binh Xayda với sự đại diện của Cađic, Rađic và Kakalot.",
  },
];

export default function CharacterSlider() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % characters.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + characters.length) % characters.length);
  };

  return (
    <div
      style={{
        maxWidth: "620px",
        height: "384px",
        margin: "0 auto",
      }}
    >
      <div
        className="position-relative d-flex align-items-center justify-content-center"
        style={{
          height: "100%",
          overflow: "hidden",
          background: "#f5f5f5",
          borderRadius: "8px",
        }}
      >
        <button type="button" onClick={prev} className="btn btn-light position-absolute start-0 top-50 translate-middle-y" style={{ zIndex: 2 }}>
          ‹
        </button>

        <div className="text-center px-5">
          <h4 className="mb-3">{characters[current].title}</h4>

          <p className="mb-0">{characters[current].description}</p>
        </div>

        <button type="button" onClick={next} className="btn btn-light position-absolute end-0 top-50 translate-middle-y" style={{ zIndex: 2 }}>
          ›
        </button>

        <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex gap-2" style={{ paddingBottom: "15px" }}>
          {characters.map((_, index) => (
            <button key={index} type="button" onClick={() => setCurrent(index)} className={`btn btn-sm ${current === index ? "btn-primary" : "btn-secondary"}`}>
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
