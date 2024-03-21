import React, { useState, useEffect } from 'react';
import './Chat.css'; // Import CSS file for styling
import friend1Image from './picture/pro1.jpeg'; 
import friend2Image from './picture/pro2.jpeg'; 
import friend3Image from './picture/pro3.jpg'; 
import friend4Image from './picture/pro4.jpg'; 
import friend5Image from './picture/pro5.jpg'; 

const Chat = () => {
  const [friends, setFriends] = useState([]);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [initialized, setInitialized] = useState(false); // New state to track initialization

  useEffect(() => {
    if (!initialized) {
      // Set friends state only once when the component mounts
      setFriends([
        { id: 1, name: 'Adwin', image: friend1Image, messages: [] },
        { id: 2, name: 'Rebecca', image: friend2Image, messages: [] },
        { id: 3, name: 'Dr Lucy', image: friend3Image, messages: [] },
        { id: 4, name: 'Siti', image: friend4Image, messages: [] },
        { id: 5, name: 'Yi Hui', image: friend5Image, messages: [] }
      ]);
      setInitialized(true); // Update initialized state to true
    }
  }, [initialized]); // Run the effect only when initialized state changes

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '' && selectedFriend) {
      const updatedMessages = [...selectedFriend.messages, { text: inputValue, sender: 'user' }];
      const updatedFriend = { ...selectedFriend, messages: updatedMessages };
      const updatedFriends = friends.map(friend =>
        friend.id === selectedFriend.id ? updatedFriend : friend
      );
      setFriends(updatedFriends);
      setInputValue('');
      setSelectedFriend(updatedFriend); // Update selected friend immediately
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleMessageSubmit(e);
    }
  };

  // Render the component only when friends state is initialized
  if (!initialized) {
    return null;
  }

  return (
    <div className="chat-container">
      <div className="friends-list">
        {friends.map(friend => (
          <div
            key={friend.id}
            className={`friend ${selectedFriend && selectedFriend.id === friend.id ? 'selected' : ''}`}
            onClick={() => setSelectedFriend(friend)}
          >
            <img src={friend.image} alt={friend.name} className="friend-image" />
            {friend.name}
          </div>
        ))}
      </div>
      <div className="chat">
        <div className="chat-messages">
          {selectedFriend &&
            selectedFriend.messages.map((message, index) => (
              <div key={index} className={`message ${message.sender === 'user' ? 'user-message' : ''}`}>
                {message.text}
              </div>
            ))}
        </div>
        <form onSubmit={handleMessageSubmit} className="chat-input-form">
          <input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
