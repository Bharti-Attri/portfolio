import React from 'react'

const About = () => {
  return (
    <div>
      <style jsx="true">{`
        .about-container{
          padding: 2rem 1rem;
          background-color: #fff;
          }
          h1{
            font-size: 2rem;
            text-align: center;
            padding: 1rem;
          }
        .content{
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem 6%;
          background-color: #f7f7f7;
          gap: 2rem;
        }
        .image{
          width: 220px;  
        }
        .about-text{
          margin: auto;
          color: #433e3ef2;
          font-size: clamp(14px,2.25vw,1rem);
        }
        h2{
          font-size: 1.25rem;
          padding: 2rem;
          color: #433e3ef2;
        }
        .skill-set{
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          padding: 0 2rem;
          gap: 4%;
        }
        .skill{
          color: #433e3ef2;
          margin-bottom: 1rem;
          p{
            font-size: 13px;
          }
        }
        @media (min-width: 480px){
          .image{
            width: clamp(110px,15vw,220px);
          }
          .content{
            flex-direction: row;
          }
          .skill{
            width: 48%;
            height: 120px;
            margin-bottom: 0px;
          }
        }

      `}</style>
      <section className="about-container" id='about'>
        <h1>About Me</h1>
        <div className="content">
        <img className='image' src="./girl.avif" alt="image of girl" />
          
          <p className='about-text'>Hi, I'm Bharti, a passionate MERN Stack Developer with a love for creating dynamic and user-friendly web applications. With expertise in MongoDB, Express.js, React.js, and Node.js, I build scalable, responsive, and high-performance applications that deliver seamless user experiences.</p>
        </div>
          <h2>My Skills</h2>
          <div className="skill-set">
            <div className="skill">
              <h4>Frontend Development</h4>
              <p>Crafting interactive, responsive, and modern UIs using React.js, Redux, and Tailwind CSS.</p>
            </div>
            <div className="skill">
              <h4>Backend Development</h4>
              <p>Building RESTful APIs with Express.js, handling authentication, and optimizing performance.
              </p>
            </div>
            <div className="skill">
              <h4>Database Management</h4>
              <p>Designing efficient database schemas and managing data with MongoDB and Mongoose.</p>
            </div>
            <div className="skill">
              <h4>Clean & Maintainable Code</h4>
              <p>Writing readable, scalable, and efficient code  for better performance and maintainability.</p>
            </div>
          </div>
      </section>
    </div>
  )
}

export default About
