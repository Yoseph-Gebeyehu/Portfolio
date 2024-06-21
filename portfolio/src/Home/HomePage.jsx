export default function HomePage() {
  return (
    <section className="home--section" id="home">
      <div className="home--container">
        <div className="home--contents">
          <p className="home--title">Hey I'm Yoseph</p>
          <h2 className="home--heading">
            <span className="home--heading--span">Full Stack</span> Developer
          </h2>
          <p className="home--description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            nulla.
          </p>
          <button className="home--btn--primary">Get In Touch</button>
        </div>
        <div className="home--pic">
          <img src="./img/home.png" alt="" />
        </div>
      </div>
    </section>
  );
}
