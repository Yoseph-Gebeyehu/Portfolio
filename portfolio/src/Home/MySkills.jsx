import data from "../Data/index.json";
export default function MySkills() {
  return (
    <section className="my--skill--section" id="mySkill">
      <div className="my--skill--title">
        <p>My Skills</p>
      </div>
      <div className="my--skill--heading">
        <h2>My Expertise</h2>
      </div>

      <div className="my--skill--lists">
        {data.skills.map((item, index) => (
          <div className="my--skill--lists--items">
            <img
              className="my--skill--lists--items--pic"
              src={item.src}
              alt="Placeholder"
            />
            <h1 className="my--skill--lists--items--title">{item.title}</h1>
            <h4 className="my--skill--lists--items--description">
              {item.description}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
}
