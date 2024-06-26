import data from "../Data/index.json";
export default function Portfolio() {
  return (
    <section className="portfolio--section" id="portfolio">
      <div className="portfolio--content">
        <div className="portfolio">
          <div className="portfolio--title">Recent Projects</div>
          <div className="portfolio--heading">My Portfolio</div>
        </div>
        <div className="portfolio--github">
          <a
            href="https://github.com/Yoseph-Gebeyehu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="portfolio--btn--primary">Visit My GitHub</button>
          </a>
        </div>
      </div>

      <div className="portfolio--lists">
        {data.portfolio.map((item, index) => (
          <div className="portfolio--lists--cotainer">
            <img src={item.src} alt="" />
            <h4 className="portfolio--lists--title">{item.title}</h4>
            <h4 className="portfolio--lists--description">
              {item.description}
            </h4>
            <a
              href={item.link}
              className="portfolio--link--text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              View In Github
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
                  strokeWidth="2.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
