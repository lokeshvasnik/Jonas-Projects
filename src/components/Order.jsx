import React from "react";

const Order = ({ closeHour }) => {
    return (
        <div className="order">
            <h1>We are open until {closeHour} pm</h1>
            <button className="btn">Order Now</button>
        </div>
    );
};

export default Order;
