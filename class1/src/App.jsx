import React from 'react'

const App = () => {
  return (
    <div className="page">

      {/* NAVBAR */}
      <nav className="nav">
        <div className="logo">
        <img id= "logo" src="./src/assets/logo.png" alt="logo" />
        </div>

        <div className="links">
          <a>About Me</a>
          <a>Portfolio</a>
          <a>Services</a>
          <a>Blog</a>
        </div>

        <button>Book A Call ↗</button>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">

        {/* LEFT */}
        <div className="left">
          <div className="stats">
            <div>
              <h3>+200</h3>
              <p>Project completed</p>
            </div>

            <div>
              <h3>+50</h3>
              <p>Startup raised</p>
            </div>
          </div>

          <h1>Hello</h1>
          <p>— It’s D.Nova a design wizard</p>

          <span>Scroll down ↓</span>
        </div>

        {/* RIGHT */}
        <div className="right">
          <img src="./public/images/men.png" alt="profile" />
        </div>

      </section>

    </div>
  );
};

export default App;
