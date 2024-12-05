export default function About() {
    return(
        <>
        <div className="container-xxl py-5" id="aboutSection">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6">
                        <div className="row g-3">
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="images/about2.jpg" />
                            </div>
                            <div className="col-6 text-start">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src="images/about1.jpg" style={{"marginTop": "25%"}} />
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src="images/about4.jpg" />
                            </div>
                            <div className="col-6 text-end">
                                <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="images/about3.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h5 className="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
                        <h1 className="mb-4">Welcome to <i className="fa fa-utensils text-primary me-2"></i>Spicy Bazzar</h1>
                        <p className="mb-4">At <a href="#" title="Spicy Bazzar, Online Catering Service">Spicy Bazzar</a>, we bring the rich flavors and traditions of India to your celebrations. From fragrant spices to handcrafted delicacies, our curated menus offer a journey through India’s diverse culinary heritage. Whether it's a festive gathering or an intimate event, we deliver an unforgettable experience infused with warmth, authenticity, and cultural charm.</p>
                        <p className="mb-4">Rooted in India’s rich culinary heritage, we craft vibrant, flavorful menus that bring the essence of tradition to your table.</p>
                        <div className="row g-4 mb-4">
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">15</h1>
                                    <div className="ps-4">
                                        <p className="mb-0">Years of</p>
                                        <h6 className="text-uppercase mb-0">Experience</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                                    <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">50</h1>
                                    <div className="ps-4">
                                        <p className="mb-0">Popular</p>
                                        <h6 className="text-uppercase mb-0">Master Chefs</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}