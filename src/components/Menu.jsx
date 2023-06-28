import React from "react";
import { Pizza } from "./Pizza";

const Menu = ({ data }) => {
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <ul className="pizzas">
                <Pizza data={data} />
            </ul>
        </main>
    );
};

export default Menu;
