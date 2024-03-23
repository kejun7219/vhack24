
import React from "react";
import "./CommunityPage.css"; // Import the CSS file
import friend1Image from './picture/pro1.jpeg'; 
import friend2Image from './picture/pro2.jpeg'; 
import friend3Image from './picture/pro3.jpg'; 
import friend4Image from './picture/pro4.jpg'; 
import friend5Image from './picture/pro5.jpg'; 
import friend6Image from './picture/pro6.png'; 

const Community = () => {
    return (
        <div class="Community">
            <div class="Community-container">
                <div class= "community-names">
                <h2>Communities</h2>
                    <p>computer science</p>
                    <p>engineering</p>
                    <p>Law</p>
                    <p>Fine arts</p>
                    <p>education</p>
                    <p>Languages and literacies</p>
                    <p>Marketing</p>
                    <p>medicine</p>
                </div>    
                <div class="frame">
                    <div class="profile-container">
                        <div class="profile">
                            <img src={friend5Image} alt="Profile" class="profile-picture" />
                        </div>
                        <div class="profileName">
                            <h2>John Doe</h2>
                            <p>Computer Science Student</p>
                        </div>
                    <p class="date">3 days ago</p>
                    </div>
                        <div className="content">
                            <div className="post">
                                <p> for those who have pursued a CS degree, what advice would you give to someone like me who is considering alternative paths into the field? What are the pros and cons of self-learning versus formal education when it comes to landing a job in computer science?

    Any insights, personal experiences, or resources you could share would be immensely appreciated. Thank you in advance for your help! </p>
                                <div className="comments">
                                    <h3>comments</h3>
                                    <div classname="comment-user">
                                        <div class="container">
                                            <div class="comment-profile">
                                                <img src={friend6Image} alt="Profile" class="profile-picture" />
                                            </div>
                                            <p>Jason</p>
                                        </div>
                                        <div className="comment">
                                            <p>CS Degree: Pros - Solid theoretical foundation, widely recognized by employers. Cons - Time-consuming, expensive.</p>
                                        </div>
                                        <div class="container">
                                            <div class="comment-profile">
                                                <img src={friend6Image} alt="Profile" class="profile-picture" />
                                            </div>
                                            <p>Muhd Ali</p>
                                        </div>
                                        <div className="comment">
                                            <p>Self-learning: Pros - Flexible, cost-effective, focuses on practical skills. Cons - Lack of formal credentials may limit opportunities, requires strong self-discipline.</p>
                                        </div>
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
        </div>
    );
};

export default Community;
