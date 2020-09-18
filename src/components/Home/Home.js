import React, { useState } from "react";
import Destination from "../Destination/Destination";
import Header from "../Header/Header";
import fakeData from "../../fakeData/data";
import "./Home.css";

const Home = () => {
    const data = fakeData;
    // destination data
    const destinationData = data.filter(
        (destination) => destination.category === "destination"
    );
    const [destinations, setDestinations] = useState(destinationData);
    console.log(destinations);
    return (
        <div className="hero-element container-fluid">
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
