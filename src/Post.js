import React, { useState } from 'react';
import './Post.css';

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="post">
      <h3>{post.user}</h3>
      <p>{post.content}</p>
      <img src={post.imageUrl} alt="Post" />
      <button onClick={toggleLike}>{liked ? 'Unlike' : 'Like'}</button>
      <span>{post.likes} Likes</span>
      <ul>
        {post.comments.map(comment => (
          <li key={comment.id}>
            <strong>{comment.user}: </strong>
            {comment.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
