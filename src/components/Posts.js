import PostCard from "./PostCard";

const posts = [
  {
    id: 1,
    username: "Black Goku",
    avatar: "https://forum.ngocrongonline.com/avatar/6101.gif",
    time: "9 giờ trước",
    title: "SỰ KIỆN TRUNG THU 2",
    image: "https://forum.ngocrongonline.com/app/view/forum/196e1fac53.png",
    likes: 79,
    comments: 513,
    pinned: true,
  },
  {
    id: 2,
    username: "Goten",
    avatar: "https://forum.ngocrongonline.com/avatar/5211.gif",
    time: "19 ngày trước",
    title: "[GIẢI ĐẤU] NGỌC RỒNG SAO ĐEN ĐẶC BIỆT",
    likes: 101,
    comments: 308,
    pinned: true,
  },
  {
    id: 3,
    username: "c2p3qq4u",
    avatar: "https://forum.ngocrongonline.com/avatar/small3932.png",
    time: "1 giờ trước",
    title: "thành cổ",
    likes: 0,
    comments: 4,
    star: "6 Sao",
  },
  {
    id: 4,
    username: "xxcauamxx",
    avatar: "https://forum.ngocrongonline.com/avatar/small3897.png",
    time: "3 ngày trước",
    title: "Góp ý vấn đề tool R11",
    likes: 3,
    comments: 7,
    star: "3 Sao",
  },
  {
    id: 5,
    username: "",
    avatar: "https://forum.ngocrongonline.com/avatar/small1474.png",
    time: "13 giờ trước",
    title: "Nạp sv15",
    likes: 0,
    comments: 6,
    star: "1 Sao",
  },
  {
    id: 6,
    username: "anhthai421",
    avatar: "https://forum.ngocrongonline.com/avatar/small3897.png",
    time: "4 giờ trước",
    title: "mới chơi lại game sau 9 năm xa cách",
    likes: 1,
    comments: 2,
    star: "2 Sao",
  },
  {
    id: 7,
    username: "xxcauamxx",
    avatar: "https://forum.ngocrongonline.com/avatar/small3897.png",
    time: "3 ngày trước",
    title: "Góp ý vấn đề giao dịch",
    likes: 0,
    comments: 10,
    star: "3 Sao",
  },
  {
    id: 8,
    username: "o0nuki0o",
    avatar: "https://forum.ngocrongonline.com/avatar/small1365.png",
    time: "3 giờ trước",
    title: "Mình mới quay lại game xin phép hỏi chút",
    likes: 0,
    comments: 1,
    star: "1 Sao",
  },
  {
    id: 9,
    username: "x7xpocollo",
    avatar: "https://forum.ngocrongonline.com/avatar/small3932.png",
    time: "2 ngày trước",
    title: "Về đổi mật khẩu của game",
    likes: 1,
    comments: 11,
    star: "5 Sao ☆",
  },
  {
    id: 10,
    username: "hazasa1",
    avatar: "https://forum.ngocrongonline.com/avatar/small3897.png",
    time: "1 ngày trước",
    title: "Hello ae lại là mình đây",
    likes: 0,
    comments: 1,
    star: "3 Sao",
  },
  {
    id: 11,
    username: "xxcauamxx",
    avatar: "https://forum.ngocrongonline.com/avatar/small3897.png",
    time: "1 ngày trước",
    title: "ae oi vao day",
    likes: 2,
    comments: 12,
    star: "3 Sao ☆",
  },
  {
    id: 12,
    username: "danlang8s_8",
    avatar: "https://forum.ngocrongonline.com/avatar/small2249.png",
    time: "1 ngày trước",
    title: "Nạp sms như nào vậy???",
    likes: 2,
    comments: 8,
    star: "8 Sao",
  },
];

export default function Posts() {
  return (
    <div className="d-flex flex-column gap-3">
      {/* POSTS */}
      <div className="d-flex flex-column gap-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>

      {/* PAGINATION */}
      <div className="d-flex justify-content-center gap-2 mt-2">
        <button className="pagination-btn active">1</button>
        <button className="pagination-btn">2</button>
        <button className="pagination-btn">3</button>
        <button className="pagination-btn">›</button>
      </div>
    </div>
  );
}
