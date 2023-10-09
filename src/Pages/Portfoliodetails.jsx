import React from 'react'
import { Link } from 'react-router-dom'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'

const Portfoliodetails = () => {
    return (
        <>
            <main id="main"> <br />

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <section id="breadcrumbs" className="breadcrumbs">
                    <div className="container">

                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Portfolio Details</h2>
                            <ol>
                                <li><Link to="/">Home</Link></li>
                                <li>Portfolio Details</li>
                            </ol>
                        </div>

                    </div>
                </section>
                {/* <!-- End Breadcrumbs --> */}

                {/* <!-- ======= Portfolio Details Section ======= --> */}
                <section id="portfolio-details" className="portfolio-details" >
                    <div className="container" data-aos="fade-up">
                        <div className="portfolio-details-container">

                            <OwlCarousel className="owl-carousel portfolio-details-carousel" items={1} autoplay={true} loop={true}>
                                <img src="assets/img/portfolio/portfolio-details-1.jpg" className="img-fluid" alt="" />
                                <img src="assets/img/portfolio/portfolio-details-2.jpg" className="img-fluid" alt="" />
                                <img src="assets/img/portfolio/portfolio-details-3.jpg" className="img-fluid" alt="" />
                            </OwlCarousel>

                            <div className="portfolio-info">
                                <h3>Project information</h3>
                                <ul>
                                    <li><strong>Category</strong>: Web design</li>
                                    <li><strong>Client</strong>: ASU Company</li>
                                    <li><strong>Project date</strong>: 01 March, 2020</li>
                                    <li><strong>Project URL</strong>: <a href="#">www.example.com</a></li>
                                </ul>
                            </div>

                        </div>

                        <div className="portfolio-description">
                            <h2>This is an example of portfolio detail</h2>
                            <p>
                                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.
                            </p>
                        </div>

                    </div>
                </section>
                {/* <!-- End Portfolio Details Section --> */}

            </main>
            {/* <!-- End #main --> */}
        </>
    )
}

export default Portfoliodetails