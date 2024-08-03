import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="home-page">
      <h1>Posts</h1>
      <div className="posts-list">
        {posts.map((post) => {
          const shortTitle = post.title.length > 20 ? post.title.slice(0, 20) + '...' : post.title;
          const shortBody = post.body.length > 100 ? post.body.slice(0, 100) + '...' : post.body;

          return (
            <div key={post.id} className="post-card">
              <img src={`https://picsum.photos/200?random=${post.id}`} alt={post.title} />
              <p>User ID: {post.userId}</p>
              <h4>Title: {shortTitle}</h4>
              <p>Body: {shortBody}</p>
              {post.body.length > 100 && <Link to={`/item/${post.id}`}>Read More...</Link>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;

