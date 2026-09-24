import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <article className={`post-card nro-card ${post.ghimbai === 1 ? "post-pinned" : ""}`}>
      {post.ghimbai === 1 && <div className="pinned-label">📌 GHIM BỞI ADMIN</div>}

      <div className="d-flex justify-content-between">
        <div className="d-flex gap-3">
          <div className="post-avatar">
            <img src="/imgs/avatar/3.png" alt={post.username} />
          </div>

          <div>
            <h3 className="post-username">{post.username || "Ẩn danh"}</h3>

            <p className="post-time">• {new Date(post.created_at).toLocaleString("vi-VN")}</p>
          </div>
        </div>
      </div>

      <div className="post-content">
        <Link href={`/post/${post.id}`} className="post-title text-decoration-none">
          {post.tieude}
        </Link>

        {post.image && (
          <div className="post-image">
            <img src={post.image} alt={post.tieude} />
          </div>
        )}
      </div>

    </article>
  );
}
