export default function Hero() {
    return(
        <>
        <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container my-5 py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br/>Delicious Flavors</h1>
                            <p className="text-white animated slideInLeft mb-4 pb-2">
                                Discover the true essence of Indian cuisine with rich, aromatic flavors and traditional dishes.
                                Customize your menu to suit any occasion, from grand celebrations to intimate gatherings.
                                Bring the warmth of Indian culture to your event with every bite."
                            </p>
                            <a href="" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Reserve Now</a>
                        </div>
                        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img className="img-fluid side-img" src="images/img1.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}