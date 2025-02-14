import React from 'react'

const Portfolio = () => {
  return (
    <div>
      <style jsx='true'>{`
        .project-container{
            padding: 2rem;
            background-color: #f4f4f4;
        }
        .projects{
            display: flex;
            gap: 1rem;
            padding-top: 1rem;
            overflow-x: auto;
            padding-bottom: 1rem;
        }
        .project{
            width: 98%;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            color: #433e3ef2;
            background-color: #fff;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .link{
            font-size: 14px;
            text-decoration: none;
            color: #000;
            font-weight: 500;
        }
            
        .link:hover{
            color: #433e3ef2;
        }
        p{
            font-size: 13px;
        }
        @media (min-width: 480px){
            .project{
                width: 48%;
            }
        }
        @media (min-width: 768px){
            .project{
                width: 32%;
            }
        }
      `}
      </style>
      <section className='project-container' id="portfolio">
        <h1>Portfolio</h1>
        <div className="projects">
            <div className="project">
                <img src="./ecommerce.png" alt="" />
                <a href='https://github.com/Bharti-Attri/e-commerce' className="project-title link">E-Commerce Website for Beauty & Healthcare</a>
                <p className="project-description">Developed a full-featured e-commerce platform with user authentication, product browsing, secure checkout, order tracking, and a personalized shopping experience.</p>
            </div>
            
            <div className="project">
                <img src="./socialmedia.png" alt="" />
                <a href='https://github.com/Bharti-Attri/social-media-platform' className="project-title link">A Social Platform for Photo Sharing</a>
                <p className="project-description">Designed and developed a social media website focused exclusively on photo sharing. Users can upload, like, and comment on pictures, follow other users, and explore trending images. </p>
            </div>
            <div className="project">
                <img src="./editor.png" alt="" />
                <a href='https://github.com/Bharti-Attri/document-editing-tool' className="project-title link">Real-Time Collaborative Text Editor</a>
                <p className="project-description">Built a web-based collaborative text editor with real-time editing, cursor synchronization. Users can create or join rooms, edit documents simultaneously, and track changes in real time.</p>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio
