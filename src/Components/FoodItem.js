import { Link } from "react-router-dom";

export default function FoodItem() {
    return(
        <div className="col-lg-6">
            <div className="d-flex align-items-center">
                <img className="flex-shrink-0 img-fluid rounded" src="images/puttu.jpeg" alt="" style={{"width": "200px", "height": "140px"}} />
                <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Puttu</span>
                            <span className="text-primary">₹200</span>
                        </h5>
                        <small className="fst-italic">Traditional South Indian dish made from steamed rice flour and grated coconut, served with curry or sugar.</small>
                        <Link to="/signup" className="btn btn-primary py-1 px-2 me-2 mt-2" style={{"width": "80px"}}>ADD +</Link>
                </div>
            </div>
        </div>
    );
}