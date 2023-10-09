import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  // Sample portfolio items with categories
  const portfolioItems = [
    {
      filter: 'App',
      title: 'App 1',
      imageSrc: 'assets/img/portfolio/portfolio-1.jpg',
      detailsLink: '/portfolio-details',
    },
    {
      filter: 'Web',
      title: 'Web 3',
      imageSrc: 'assets/img/portfolio/portfolio-2.jpg',
      detailsLink: '/portfolio-details',
    },
    {
      filter: 'App',
      title: 'App 2',
      imageSrc: 'assets/img/portfolio/portfolio-3.jpg',
      detailsLink: '/portfolio-details',
    },
    {
      filter: 'Card',
      title: 'Card 2',
      imageSrc: 'assets/img/portfolio/portfolio-4.jpg',
      detailsLink: '/portfolio-details',
    },
    {
      filter: 'Web',
      title: 'Web 2',
      imageSrc: 'assets/img/portfolio/portfolio-5.jpg',
      detailsLink: '/portfolio-details',
    },
    {
      filter: 'App',
      title: 'App 3',
      imageSrc: 'assets/img/portfolio/portfolio-6.jpg',
      detailsLink: '/portfolio-details',
    },
    {
      filter: 'Card',
      title: 'Card 1',
      imageSrc: 'assets/img/portfolio/portfolio-7.jpg',
      detailsLink: '/portfolio-details',
    },
    {
      filter: 'Card',
      title: 'Card 3',
      imageSrc: 'assets/img/portfolio/portfolio-8.jpg',
      detailsLink: '/portfolio-details',
    },
    {
      filter: 'Web',
      title: 'Web 3',
      imageSrc: 'assets/img/portfolio/portfolio-9.jpg',
      detailsLink: '/portfolio-details',
    },
  ];

  return (
    <>
      <main id="main">
        <br />
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Portfolio</h2>
              <ol>
                <li><Link to="/">Home</Link></li>
                <li>Portfolio</li>
              </ol>
            </div>
          </div>
        </section>

        <section id="portfolio" className="portfolio">
          <div className="container">
            <div className="row" data-aos="fade-up">
              <div className="col-lg-12 d-flex justify-content-center">
                <ul id="portfolio-flters">
                  <li
                    onClick={() => handleFilterClick('All')}
                    className={activeFilter === 'All' ? 'filter-active' : ''}
                  >
                    All
                  </li>
                  <li
                    onClick={() => handleFilterClick('App')}
                    className={activeFilter === 'App' ? 'filter-active' : ''}
                  >
                    App
                  </li>
                  <li
                    onClick={() => handleFilterClick('Card')}
                    className={activeFilter === 'Card' ? 'filter-active' : ''}
                  >
                    Card
                  </li>
                  <li
                    onClick={() => handleFilterClick('Web')}
                    className={activeFilter === 'Web' ? 'filter-active' : ''}
                  >
                    Web
                  </li>
                </ul>
              </div>
            </div>

            <div className="row portfolio-container" data-aos="fade-up">
              {portfolioItems.map((item, index) => (
                (activeFilter === 'All' || item.filter === activeFilter) && (
                  <div key={index} className="col-lg-4 col-md-6 portfolio-item">
                    <img src={item.imageSrc} className="img-fluid" alt={item.title} />
                    <div className="portfolio-info">
                      <h4>{item.title}</h4>
                      <p>{item.filter}</p>
                      <Link
                        to={item.imageSrc}
                        data-gall="portfolioGallery"
                        className="venobox preview-link"
                        title={item.title}
                      >
                        <i className="bx bx-plus"></i>
                      </Link>
                      <Link
                        to={item.detailsLink}
                        className="details-link"
                        title="More Details"
                      >
                        <i className="bx bx-link"></i>
                      </Link>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Portfolio;