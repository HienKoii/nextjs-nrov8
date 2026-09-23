import BackButton from "@/components/BackButton";

export default async function PostDetailPage({ params }) {
  const { id } = await params;

  const post = {
    id,
    username: "Black Goku Admin",
    avatar: "https://forum.ngocrongonline.com/avatar/6101.gif",
    time: "2 ngày trước",
    title: "SỰ KIỆN TRUNG THU 2",

    content: `
🎉 SỰ KIỆN TRUNG THU 2 🎉

Nhân dịp Trung Thu, BQT xin gửi tới toàn thể các chiến binh một sự kiện đặc biệt.

Tham gia sự kiện để nhận được nhiều phần quà hấp dẫn.

Chúc các chiến binh có những giây phút vui vẻ cùng Ngọc Rồng Online!

🔥 Thời gian diễn ra sự kiện: ...

🔥 Nội dung sự kiện: ...

🔥 Phần thưởng: ...

Hãy nhanh chóng tham gia để không bỏ lỡ những phần quà đặc biệt nhé!
`,

    image: "https://forum.ngocrongonline.com/app/view/forum/196e1fac53.png",
  };

  const paragraphs = post.content
    .trim()
    .split(/\n\s*\n/)
    .filter(Boolean);

  return (
    <div className="d-flex flex-column gap-3">
      {/* QUAY LẠI */}
      <BackButton href="/" />

      {/* POST DETAIL */}
      <article className="nro-card p-3 p-md-4">
        {/* AUTHOR */}
        <div className="d-flex gap-3 mb-4">
          <img src={post.avatar} alt={post.username} className="post-avatar" />

          <div>
            <h1 className="fs-6 fw-bold text-danger mb-1">{post.username}</h1>

            <p className="post-time mb-0">• {post.time}</p>
          </div>
        </div>

        {/* TITLE */}
        <h2 className="fs-4 fw-bold mb-4">{post.title}</h2>

        {/* CONTENT */}
        <div className="post-detail-content">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* IMAGE */}
        {post.image && (
          <div className="post-image mt-4">
            <img src={post.image} alt={post.title} />
          </div>
        )}
      </article>
    </div>
  );
}
