import React from "react";
import "./Destination.css";

const Destination = (props) => {
    const { name, img } = props.destination;

    console.log(name, img);
    return (
        <div className="col-md-4 col-sm-4 ">
            <div className="card text-white bg-transparent border-0">
                <img src={img} className="card-img destination-img" alt="..." />
                <div className="card-img-overlay d-flex align-items-end">
                    <h6 className="card-title">{name.toUpperCase()}</h6>
                </div>
            </div>
        </div>
    );
};

export default Destination;
