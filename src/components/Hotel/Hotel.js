import React from "react";
import { useLocation, useParams } from "react-router-dom";
import fakeData from "../../fakeData/data";
import GoogleMap from "../GoogleMap/GoogleMap";
import Header from "../Header/Header";
import HotelDetails from "../HotelDetails/HotelDetails";

const Hotel = () => {
    const hotelData = fakeData.filter(
        (hotelInfo) => hotelInfo.category === "hotelInfo"
    );

    const { destinationName } = useParams();
    return (
        <div className="container-fluid">
            <Header></Header>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <h4>Stay in {destinationName}</h4>
                        {hotelData.map((hotelDetail) => (
                            <HotelDetails
                                key={hotelDetail.id}
                                hotelDetail={hotelDetail}
                            ></HotelDetails>
                        ))}
                    </div>
                </div>
                <div className="col-md-6">
                    <GoogleMap></GoogleMap>
                </div>
            </div>
        </div>
    );
};

export default Hotel;
