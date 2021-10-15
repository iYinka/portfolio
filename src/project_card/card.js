import React from "react";
import CardComp from "./_card";

const Card = () => {
    return (
        <div className="flex justify-between items-center p-2">
            <CardComp />
            <CardComp /> <CardComp />
        </div>
    );
};

export default Card;
