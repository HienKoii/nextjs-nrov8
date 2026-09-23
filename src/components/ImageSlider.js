"use client";

import { useState } from "react";

export default function ImageSlider({ images }) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="text-center mb-3">
      <img src={images[current]} alt={`Ảnh ${current + 1}`} className="img-fluid" style={{ width: "100%" }} />

      <div className="mt-2">
        {images.map((_, index) => (
          <button key={index} type="button" onClick={() => setCurrent(index)} className={`carousel-2 ${current === index ? "active-2" : ""}`}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
