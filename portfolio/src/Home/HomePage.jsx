export default function HomePage() {
  return (
    <section className="home--section" id="home">
      <div className="home--container">
        <div className="home--contents">
          <p className="home--title">Hey I'm Yoseph</p>
          <h2 className="home--heading">Software Engineer</h2>
          <p className="home--description">
            I am a passionate Software Engineer specializing in modern web and
            mobile application development. With extensive experience in Flutter
            and Dart for crafting high-quality, cross-platform mobile apps, and
            expertise in React.js for building responsive, user-friendly web
            interfaces, I strive to deliver seamless user experiences.
            <br />
            Leveraging Firebase for robust backend services, I ensure secure and
            scalable solutions. Let's build something amazing together!
          </p>
          <button className="home--btn--primary">Get In Touch</button>
        </div>
        <div className="home--pic">
          <img src="./img/home.png" alt="Yoseph's portrait" />
        </div>
      </div>
    </section>
  );
}
