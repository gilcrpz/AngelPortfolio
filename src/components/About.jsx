export default function About() {
  return (
    <section id="about" className="about-section section reveal fadeInUp">
      <div className="about">
        <div className="about-header-container">
          <div className="heading">
            <h2>About me</h2>
            <p className="about-subtitle">A summary of what I do</p>
          </div>
        </div>

        <div className="about-content">
          <div className="photo"></div>
          <div className="panels">
            <div className="panel">
              <h3>Who I Am</h3>
              <p>
                I'm Angel, an IT graduate. My journey into tech started with
                hesitation, but curiosity quickly grew into passion. Today, I'm
                focused on building my skills in different areas of web
                development and even on designing. I enjoy exploring web
                development, design, and building systems that reflect both
                creativity and functionality.
              </p>
            </div>

            <div className="panel">
              <h3>Interests & Hobbies</h3>
              <p>
                I’m captivated by the idea of turning challenges into
                opportunities and growing into the developer I want to become.
                I'm particularly interested in front-end development, but I'm
                also exploring back-end technologies to become a well-rounded
                developer. and sometimes I like to dabble in design, as I enjoy
                creating projects that are not only functional but also visually
                appealing.
              </p>
              <p>
                When I’m not coding, I love spending time with my cats and dogs,
                play games, and read books.
              </p>
            </div>

            <div className="panel">
              <h3>Fun Fact</h3>
              <p>
                A fun fact about me: I once thought web development wasn’t for
                me, but now it’s the path I’m most excited to learn and pursue.
              </p>
              <p>
                My personal motto is: “Wanting to be someone else is a waste of
                who you are.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}