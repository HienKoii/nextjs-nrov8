import Link from "next/link";

export default function BackButton({ href = "/", text = "Quay lại" }) {
  return (
    <Link href={href} className="post-back-wrapper font-bold text-decoration-none">
      <span className="post-back-btn" aria-label={text}>
        <i className="bi bi-arrow-left"></i>
      </span>

      <span className="post-back-text">{text}</span>
    </Link>
  );
}
