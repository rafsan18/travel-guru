import React, { useState } from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData/data";
import Header from "../Header/Header";
import Itinerary from "../Itinerary/Itinerary";
import "./DestinationDetails.css";

const DestinationDetails = () => {
    const { destinationName } = useParams();
    const destinationData = fakeData.find(
        (destination) => destination.name === destinationName
    );
    const [destinationDetail, setDestinationDetail] = useState(destinationData);
    const { name, detailInfo } = destinationDetail;

    return (
        <div className="hero-element ">
            <Header></Header>
            <div className="container ">
                <div className="row   align-items-center details-container ">
                    <div className="col-md-5 destination-detail">
                        <h1>{name.toUpperCase()}</h1>
                        <p>{detailInfo}</p>
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-5 itinerary">
                        <Itinerary name={name}></Itinerary>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationDetails;
