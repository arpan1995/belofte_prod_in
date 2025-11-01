import React from "react";
import "./News.css";

// Import images properly
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";

const newsData = [
  {
    id: 1,
    title: "Belofte Launches Women Empowerment Drive",
    description:
      "Belofte Foundation initiated a new campaign to support rural women with skill training and employment programs.",
    image: news1,
    date: "October 15, 2025",
  },
  {
    id: 2,
    title: "Youth Education Workshop Held in Bangalore",
    description:
      "A full-day interactive workshop for underprivileged students focused on career guidance and personal development.",
    image: news2,
    date: "September 30, 2025",
  },
  {
    id: 3,
    title: "Health Awareness Camp for Local Communities",
    description:
      "Our volunteers conducted a free medical check-up camp and distributed health kits to over 200 families.",
    image: news3,
    date: "August 12, 2025",
  },
];

const News: React.FC = () => {
  return (
    <section className="news-section" id="news">
      <h2 className="section-title">Latest Updates</h2>
      <div className="news-grid">
        {newsData.map((news) => (
          <div key={news.id} className="news-card">
            <img src={news.image} alt={news.title} className="news-image" />
            <div className="news-content">
              <span className="news-date">{news.date}</span>
              <h3 className="news-title">{news.title}</h3>
              <p className="news-description">{news.description}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
