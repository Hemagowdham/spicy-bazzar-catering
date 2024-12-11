export default function CartItem({item}) {
    return(
        <>
        <div className="col-lg-6 ms-5 my-2">
            <div className="d-flex align-items-center">
                <img className="flex-shrink-0 img-fluid rounded" src={item.image} alt="" style={{"width": "200px", "height": "140px"}} />
                <div className="w-100 d-flex flex-column text-start ps-4">
                    <h5 className="d-flex justify-content-between border-bottom pb-2">
                        <span>{item.name}</span>
                        <span className="text-primary">{item.price}</span>
                    </h5>
                    <small className="fst-italic">{item.description}</small>
                </div>
            </div>
        </div>
        </>
    );
}