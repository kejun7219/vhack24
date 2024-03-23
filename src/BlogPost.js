import React, { useState } from 'react';
import './BlogPost.css';

function BlogPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
//   const [image, setImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    // formData.append('image', image);
    
    // Handle form submission, e.g., make API call to backend
  };

  return (
    <form className="blog-post-form" onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label>Content:</label>
        <textarea 
          value={content} 
          onChange={handleContentChange} 
          className="content-textarea"
          placeholder="What's on your mind?"
        />
      </div>
      <div className="button-row">
        {/* <label htmlFor="file-upload" className="custom-file-upload">
          <input id="file-upload" type="file" accept="image/*" onChange={handleImageChange} />
        </label> */}
        <button type="button">Photo/Video</button>
        <button type="button">Tag People</button>
        <button type="button">Feeling/Activity</button>
        <button type="button">Check In</button>
      </div>

      <div className = "submit-row">
        <button type="submit">Post</button>
      </div>
    </form>
  );
}

export default BlogPost;

