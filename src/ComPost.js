import React, { useState } from 'react';
import './ComPost.css';

function ComPost() {
  const [community, setCommunity] = useState('');
  const [question, setQuestion] = useState('');

  const handleCommunityChange = (e) => {
    setCommunity(e.target.value);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('community', community);
    formData.append('question', question);
    
    // Handle form submission, e.g., make API call to backend
  };

  return (
    <div className="com-post">
    <h1>Feel Free to Ask Your Questions</h1>
    <form className="blog-post-form" onSubmit={handleSubmit}>
<div>
  <label>Select Community:</label>
  <select value={community} onChange={handleCommunityChange} className="community-select">
    <option value="">Select a Community</option>
    <option value="Computer Science">Computer Science</option>
    <option value="Engineering">Engineering</option>
    <option value="Law">Law</option>
    <option value="Fine Arts">Fine Arts</option>
    <option value="Education">Education</option>
    <option value="Language and Literacies">Language and Literacies</option>
    <option value="Marketing">Marketing</option>
    <option value="Medicine">Medicine</option>
    {/* Add more options as needed */}
  </select>
</div>
<div>
  <label className="question-label">Question:</label>
  <textarea 
    value={question} 
    onChange={handleQuestionChange} 
    className="question-textarea"
    placeholder="What's your question?"
  />
</div>

      <div className = "submit-row">
        <button type="submit">Post</button>
      </div>
    </form>
  </div>
  );
}


export default ComPost;

