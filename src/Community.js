import React from "react";
import "./Community.css"; // Import the CSS file
import add from './picture/add.png'
import friend1Image from './picture/pro1.jpeg'; 
import friend6Image from './picture/pro6.png'; 

const Community = () => {

    return (
        <div class="Community">
            <div class="Community-container">
                <div class= "community-names">
                <h2>Communities</h2>
                    <p>Computer Science</p>
                    <p>Engineering</p>
                    <p>Law</p>
                    <p>Fine arts</p>
                    <p>Education</p>
                    <p>Languages and Literacies</p>
                    <p>Marketing</p>
                    <p>Medicine</p>
                </div>

                 <div class="picture-button">
                    <a href="./ComPost">
                        <button>
                            <img src={add} alt="Add Icon" />
                        </button>
                    </a>
                </div>

                <div class="frame">
                    <div class="profile-container">
                        <div class="profile">
                            <img src={friend1Image} alt="Profile" class="profile-picture" />
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
                                    <h3>Comments</h3>
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
