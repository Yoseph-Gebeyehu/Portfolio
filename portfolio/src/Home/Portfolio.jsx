import data from "../Data/index.json";
export default function Portfolio() {
  return (
    <section className="portfolio--section" id="portfolio">
      <div className="portfolio--title">Recent Projects</div>
      <div className="portfolio--heading">My Portfolio</div>
      <div className="portfolio--lists">
        {data.portfolio.map((item, index) => (
          <div className="portfolio--lists--cotainer">
            <img src={item.src} alt="" />
            <h4 className="portfolio--lists--title">{item.title}</h4>
            <h4 className="portfolio--lists--description">
              {item.description}
            </h4>
            <p className="portfolio--link--text-sm">
              {item.link}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 20 19"
                fill="none"
              >
                <path
                  d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                  stroke="currentColor"
                  stroke-width="2.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
