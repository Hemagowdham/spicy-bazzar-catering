import {Link} from 'react-router-dom';

export default function HomeMenu() {
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
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="images/puttu.jpeg" alt="" style={{"width": "200px", "height": "200px"}} />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Puttu</span>
                                                <span className="text-primary">₹200</span>
                                            </h5>
                                            <small className="fst-italic">Traditional South Indian dish made from steamed rice flour and grated coconut, served with curry or sugar.</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="images/puri.jpg" alt="" style={{"width": "200px", "height": "200px"}} />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chole Poori</span>
                                                <span className="text-primary">₹200</span>
                                            </h5>
                                            <small className="fst-italic">Traditional Indian deep-fried bread, served with curry or chutney.</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="images/chickenbiryani.jpeg" alt="" style={{"width": "200px", "height": "200px"}} />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Chicken Biryani</span>
                                                <span className="text-primary">₹250</span>
                                            </h5>
                                            <small className="fst-italic">Aromatic Indian chicken biryani: tender chicken, spices, and fragrant basmati rice cooked to perfection.</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="images/north thali.jpg" alt="" style={{"width": "200px", "height": "200px"}} />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>North Indian Thali</span>
                                                <span className="text-primary">₹200</span>
                                            </h5>
                                            <small className="fst-italic">Vibrant platter featuring a variety of traditional dishes, including rice, dal, vegetables, roti, and curd, offering a balanced meal.</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="images/karidosa.jpg" alt="" style={{"width": "200px", "height": "200px"}} />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Kari dosa</span>
                                                <span className="text-primary">₹200</span>
                                            </h5>
                                            <small className="fst-italic">A crispy dosa stuffed with spiced mutton curry for a delicious fusion of textures and tastes.</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex align-items-center">
                                        <img className="flex-shrink-0 img-fluid rounded" src="images/rotipaneer.jpeg" alt="" style={{"width": "200px", "height": "200px"}} />
                                        <div className="w-100 d-flex flex-column text-start ps-4">
                                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                <span>Roti with Paneer tikka</span>
                                                <span className="text-primary">₹200</span>
                                            </h5>
                                            <small className="fst-italic">Soft roti paired with creamy paneer gravy for a deliciously satisfying  dinner.</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <h1 className="my-5 justify-content-center logo-text">Discover more delicious dishes on Spicy Bazzar.</h1>
            <Link to="/signup" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">SignUp</Link>
        </div>
        </>
    );
}