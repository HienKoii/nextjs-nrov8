import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <article className={`post-card ${post.pinned ? "post-pinned" : ""} nro-card`}>
      {post.pinned && <div className="pinned-label">📌 GHIM BỞI ADMIN</div>}

      <div className="d-flex justify-content-between">
        <div className="d-flex gap-3">
          <img src={post.avatar} alt={post.username} className="post-avatar" />

          <div>
            <h3 className="post-username">
              {post.username}

              {post.star && <span className="post-star">({post.star})</span>}
            </h3>

            <p className="post-time">• {post.time}</p>
          </div>
        </div>
      </div>

      <div className="post-content">
        <Link href={`/post/${post.id}`} className="post-title text-decoration-none">
          {post.title}
        </Link>

        {post.image && (
          <div className="post-image">
            <img src={post.image} alt={post.title} />
          </div>
        )}
      </div>
    </article>
  );
}
