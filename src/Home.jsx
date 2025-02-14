import React from 'react'

const Home = () => {
  return (
    <div>
      <style jsx="true">{`
        .home-container{
            padding: 1rem 2rem;
            background-color: #f4f4f4;
            height: 85vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .home-image{
            width: 250px;
        }
        .name{
            font-size: clamp(4rem,12vw,6rem);
            font-weight: 700;
        }
        .role{
            font-size: clamp(1rem,4vw,2rem);
            font-weight: 500;
        }
        @media (min-width: 480px) {
            .home-container{
                flex-direction: row-reverse;
                justify-content: center;
                padding: 5rem 6%;
            }
            .text-container{
                width: 60%;
            }
            .home-image{
                width: 40%;
            }
        }

      `}</style>
      <section className="home-container" id='home'>
        <img className='home-image' src="./girl.avif" alt="image of girl" />
        <div className="text-container">
            <div className="name">Bharti</div>
            <div className="role">MERN Stack Web Developer</div>
        </div>
      </section>
    </div>
  )
}

export default Home
