
import React from "react";
import "./CommunityPage.css"; // Import the CSS file
import profilePicture from './picture/pro5.jpg'; ; // Import profile picture

const Community = () => {
    return (
        <div className="Community">


            {/* Frame */}
            <div className="frame">
                <div class="profile-container">
                     <div class="profile">
                        <img src={profilePicture} alt="Profile" class="profile-picture" />
                     </div>
                <div class="profileName">
                  <h2>John Doe</h2>
                   <p>Computer Science Student</p>
                </div>
            </div>
                    <div className="content">
                        <div className="post">
                            <p>This is a sample post. Feel free to interact with the community!</p>
                            <div className="comments">
                                <div className="comment">
                                    <p>User 1: Nice post!</p>
                                </div>
                                <div className="comment">
                                    <p>User 2: I agree!</p>
                                </div>
                                {/* Add comment form */}
                                <form className="add-comment-form">
                                    <input type="text" placeholder="Add a comment..." />
                                    <button type="submit">Post</button>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Community;
