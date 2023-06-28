import React from "react";

export const Pizza = ({ data }) => {
    return (
        <>
            {data.map((item, index) => (
                <div
                    className={`pizza ${item.soldOut ? "sold-out" : ""}`}
                    key={index}
                >
                    <img src={item.photoName} alt="" />
                    <div>
                        <h3>{item.name}</h3>
                        <p>{item.ingredients}</p>
                        <span>{item.soldOut ? "SOLD OUT" : item.price}</span>
                    </div>
                </div>
            ))}
        </>
    );
};
