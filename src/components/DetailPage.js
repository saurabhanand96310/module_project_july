import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === parseInt(id))
  );

  if (!post) return <div>Post not found</div>;

  return (
    <div className="detail-page">
      <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
      <p>User ID: {post.userId}</p>
      <h4>Title: {post.title}</h4>
      <p>Body: {post.body}</p>
      {/* <p>User ID: {post.userId}</p> */}
    </div>
  );
};

export default DetailPage;
