import React from 'react';
import Post from './Post';
import './Blog.css';

const initialPosts = [
  {
    id: 1,
    user: 'John Doe',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    imageUrl: 'https://via.placeholder.com/150',
    likes: 10,
    comments: [
      { id: 1, user: 'Jane Smith', comment: 'Nice post!' },
      { id: 2, user: 'Alice', comment: 'Great!' }
    ]
  },
  {
    id: 2,
    user: 'Alice',
    content: 'Nulla facilisi. Ut fringilla velit vel nisi consequat.',
    imageUrl: 'https://via.placeholder.com/150',
    likes: 20,
    comments: []
  },
  // Add more posts as needed
];

const Blog = () => {
  return (
    <div className="home-page">
      <h1>Facebook Home Page</h1>
      <div className="posts">
        {initialPosts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
