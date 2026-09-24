import BackButton from "@/components/BackButton";

export default async function PostDetailPage({ params }) {
  const { id } = await params;

  const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/api/posts/${id}`, {
    cache: "no-store",
  });

  const result = await response.json();

  if (!result.success) {
    return (
      <div className="d-flex flex-column gap-3">
        <BackButton href="/" />

        <article className="nro-card p-3 p-md-4">
          <h1 className="fs-5 fw-bold text-danger mb-0">{result.message || "Không tìm thấy bài viết"}</h1>
        </article>
      </div>
    );
  }

  const post = result.data;

  const paragraphs =
    post.noidung
      ?.trim()
      .split(/\n\s*\n/)
      .filter(Boolean) || [];

  return (
    <div className="d-flex flex-column gap-3">
      {/* QUAY LẠI */}
      <BackButton href="/" />

      {/* POST DETAIL */}
      <article className="nro-card p-3 p-md-4">
        {/* AUTHOR */}
        <div className="d-flex gap-3 mb-4">
          <div className="post-avatar">
            <img src="/imgs/avatar/3.png" alt={post.username} />
          </div>

          <div>
            <h1 className="fs-6 fw-bold text-danger mb-1">{post.username}</h1>

            <p className="post-time mb-0">• {new Date(post.created_at).toLocaleString("vi-VN")}</p>
          </div>
        </div>

        {/* TITLE */}
        <h2 className="fs-4 fw-bold mb-4">{post.tieude}</h2>

        {/* CONTENT */}
        <div className="post-detail-content">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* IMAGE */}
        {post.image && (
          <div className="post-image mt-4">
            <img src={post.image} alt={post.tieude} />
          </div>
        )}
      </article>
    </div>
  );
}
