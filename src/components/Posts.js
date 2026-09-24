"use client";

import { useEffect, useState } from "react";
import PostCard from "./PostCard";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);

  const getPosts = async (pageNumber) => {
    try {
      setLoading(true);

      const response = await fetch(`/api/posts?page=${pageNumber}`);

      const result = await response.json();

      if (result.success) {
        setPosts(result.data);
        setPagination(result.pagination);
      }
    } catch (error) {
      console.error("Lỗi lấy bài viết:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts(page);
  }, [page]);

  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (pagination?.hasNextPage) {
      setPage(page + 1);
    }
  };

  return (
    <div className="posts-list">
      {loading ? (
        <div className="text-center py-4">Đang tải bài viết...</div>
      ) : posts.length === 0 ? (
        <div className="text-center py-4">Chưa có bài viết nào.</div>
      ) : (
        <>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}

          {/* PAGINATION */}
          {pagination && pagination.totalPages > 1 && (
            <div className="pagination-wrapper">
              <button type="button" className="pagination-btn" onClick={handlePrevious} disabled={!pagination.hasPrevPage || loading}>
                ←
              </button>

              <div className="pagination-info">
                <span>Trang</span>
                <strong>{pagination.page}</strong>
                <span>/</span>
                <span>{pagination.totalPages}</span>
              </div>

              <button type="button" className="pagination-btn" onClick={handleNext} disabled={!pagination.hasNextPage || loading}>
                →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
