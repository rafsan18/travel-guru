import React, { useState } from "react";
import Destination from "../Destination/Destination";
import Header from "../Header/Header";
import fakeData from "../../fakeData/data";
import "./Home.css";
import bgImage from "../../image/bg-1.png";

const Home = () => {
    const data = fakeData;
    // destination data
    const destinationData = data.filter(
        (destination) => destination.category === "destination"
    );
    const [destinations, setDestinations] = useState(destinationData);
    console.log(destinations);
    return (
        <div
            className="home-container container-fluid"
            style={{
                backgroundImage: `linear-gradient(
    to bottom,
    rgba(35, 35, 36, 0.7) 100%,
    rgba(112, 112, 112, 0.7) 10%
  ),url(${bgImage})`,
            }}
        >
            <Header></Header>
            <div className="row">
                <div className="col-md-5 col-sm-12"></div>
                <div className="col-md-7 col-sm-12 row">
                    {destinations.map((destination) => (
                        <Destination
                            key={destination.id}
                            destination={destination}
                        ></Destination>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
