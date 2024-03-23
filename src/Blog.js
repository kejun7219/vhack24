import React from 'react';
// import Post from './Post';
import './Blog.css';
import friend1Image from './picture/pro1.jpeg'; 
import friend2Image from './picture/pro2.jpeg';
import picture from './picture/pro7.png';
import picture2 from './picture/pro8.png';
import add from './picture/add.png'

const Blog = () => {
  return (
    <div className="home-page">
      <h1>BLOG POSTS</h1>

      <div class="blog-picture-button">
            <a href="./BlogPost">
              <button>
                  <img src={add} alt="Add Icon" />
              </button>
            </a>
      </div>

      <div class="blog-frame">
        <div class="profile-container">

          <div class="profile">
            <img src={friend1Image} alt="Profile" class="profile-picture" />
          </div>
          <div class="profileName">
            <h2>Adwin </h2>
            <p>senior software developer</p>
          </div>
          <p class="date">5 days ago</p>
        </div>
        <h2>Title: My Career Journey: Across Borders and Boundaries</h2>
        <h3>Checkpoint 1: New York, USA (2010-2013)</h3>
        <p>My career took flight in the heart of New York City, where I dove headfirst into the realm of marketing as a fresh graduate. At a boutique agency in Manhattan, I cut my teeth on digital campaigns and consumer insights, laying the foundation for my professional trajectory.</p>
        <h3>Checkpoint 2: London, UK (2014-2016)</h3>
        <p>Eager for new challenges, I ventured across the Atlantic to London, immersing myself in the dynamic landscape of international marketing. In the buzzing streets of the British capital, I navigated multicultural campaigns and expanded my horizons.</p>
        <h3>Checkpoint 3: Sydney, Australia (2017-2019)</h3>
        <p>The allure of Sydney's coastal charm beckoned me next, where I embraced a leadership role at a startup poised for growth. Overseeing marketing initiatives in the vibrant Asia-Pacific market, I thrived in an environment fueled by innovation and collaboration.</p>
        <h3>Checkpoint 4: Remote Work (2020-Present)</h3>
        <p>Adapting to the shifting tides of the global landscape, I embraced remote work as a means to stay connected and agile. From my home base, I continue to drive impactful strategies and foster virtual connections across borders.</p>
        <p>Each checkpoint in my career journey has been a stepping stone towards professional growth and personal fulfillment. As I forge ahead into the future, I remain open to new adventures and opportunities, guided by the lessons learned and experiences gained along the way.</p>
        <img src={picture} alt="Profile" class="post-picture" />
      </div>
      <div class="blogger">
        <div class="profile-container">
          <div class="profile">
            <img src={friend2Image} alt="Profile" class="profile-picture" />
          </div>
          <div class="profileName">
            <h2>Rebecca </h2>
            <p>Educator</p>
          </div>
          <p class="date">20 days ago</p>
        </div>
        <h2>Navigating the Path of Education: A Journey of Growth and Inspiration</h2>
        <p>Embarking on a career in education is akin to setting sail on a voyage of discovery, charting a course through the seas of knowledge and inspiration. Join me as I share my personal odyssey, marked by pivotal checkpoints of teaching locations and milestones that have shaped my journey as an educator.</p>
        <h3>Urban Elementary School (2005-2008)</h3>
        <p>My journey began in the heart of the city, where I took my first steps into the classroom as a bright-eyed educator fresh out of university. At an urban elementary school, I embraced the challenge of cultivating young minds, instilling a love for learning through creativity and compassion. Those formative years were a testament to the transformative power of education in shaping the lives of our future generations.</p>
        <h3>Suburban High School (2009-2013)</h3>
        <p>Seeking new horizons and opportunities for growth, I transitioned to a suburban high school setting, where I embraced the role of a mentor and guide to adolescents on the brink of adulthood. In the halls of academia, I witnessed the profound impact of education in empowering students to discover their passions, overcome challenges, and realize their full potential. It was a period of professional evolution and personal fulfillment as I nurtured a community of lifelong learners.</p>
        <h3> International School Abroad (2014-2017)</h3>
        <p>Venturing beyond borders, I embarked on an international teaching assignment, immersing myself in the rich tapestry of cultures and perspectives that make up our global community. At an international school abroad, I celebrated diversity and inclusivity, fostering an environment of mutual respect and understanding among students from diverse backgrounds. It was a humbling experience that broadened my perspective and reaffirmed the universal language of education as a catalyst for positive change.</p>
        <h3>Online Learning Platform (2018-Present)</h3>
        <p>In response to the evolving landscape of education, I embraced the digital realm as a platform for innovation and accessibility. Transitioning to online teaching, I leveraged technology to transcend geographical barriers and reach students around the world. Through virtual classrooms and interactive tools, I continue to inspire and empower learners to embark on their own educational journeys, guided by the belief that knowledge knows no bounds.</p>
        <p>As I reflect on the checkpoints of my career in education, I am filled with gratitude for the experiences that have shaped me into the educator I am today. Each location and milestone has been a stepping stone towards professional growth and personal fulfillment, fueled by a passion for lifelong learning and a commitment to making a difference in the lives of others. As I navigate the ever-evolving landscape of education, I remain steadfast in my dedication to inspiring minds, igniting imaginations, and cultivating a brighter future for generations to come.
</p>
        <img src={picture2} alt="Profile" class="post-picture" />
      </div>
    </div>


    
  );
};

export default Blog;
