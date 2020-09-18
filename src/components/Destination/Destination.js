import React from "react";
import { Link } from "react-router-dom";
import "./Destination.css";

const Destination = (props) => {
    const { name, img } = props.destination;

    console.log(name, img);
    return (
        <div className="col-md-4 col-sm-4 ">
            <Link to={`/destination/${name}`}>
                <div className="card text-white bg-transparent border-0">
                    <img
                        src={img}
                        className="card-img destination-img"
                        alt="..."
                    />
                    <div className="card-img-overlay d-flex align-items-end">
                        <h6 className="card-title">{name.toUpperCase()}</h6>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Destination;
