import React from "react";

const Itinerary = (props) => {
    return (
        <form>
            <div className="form-group">
                <label>Origin</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Current Location..."
                />
            </div>
            <div className="form-group">
                <label>Destination</label>
                <input
                    type="text"
                    className="form-control"
                    value={props.name}
                />
            </div>
            <div className="form-row ">
                <div className="form-group col-md-6 col-sm-6">
                    <label>From</label>
                    <input type="date" className="form-control" />
                </div>

                <div className="form-group col-md-6 col-sm-6">
                    <label>To</label>
                    <input type="date" className="form-control" />
                </div>
            </div>

            <button type="submit" className="btn btn-warning  btn-block">
                Start Booking
            </button>
        </form>
    );
};

export default Itinerary;
