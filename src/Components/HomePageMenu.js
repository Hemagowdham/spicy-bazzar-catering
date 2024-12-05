import FoodItem from "./FoodItem";

export default function Menu() {
    return(
        <>
        <div className="container-xxl py-5" id="menuSection">
            <div className="container menu">
                <div className="text-center">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
                    <h1 className="mb-5">Most Popular Items</h1>
                </div>
                <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.1s">
                    <div className="tab-content">
                        <div>
                            <div className="row g-4">
                                <FoodItem />
                                <FoodItem />
                                <FoodItem />
                                <FoodItem />
                                <FoodItem />
                                <FoodItem />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <h1 className="my-5 justify-content-center logo-text">Discover more delicious dishes on Spicy Bazzar.</h1>
            <a href="" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">SignUp</a>
        </div>
        </>
    );
}