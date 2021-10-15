import React, { useState } from "react";
var ReactRotatingText = require("react-rotating-text");
import Card from "./project_card/card";

const Sections = () => {
    const [showText, setShowText] = useState("Victor");

    setTimeout(() => {
        setShowText();
    }, 7000);

    return (
        <div>
            <section
                id="#skills"
                className="flex justify-evenly items-center h-full p-20"
            >
                <h1 className="w-1/4 text-7xl font-extrabold font-raleway">
                    <div>Hi...</div>
                    <div>I</div>
                    <div>Am</div>
                    <div className="text-red">
                        <ReactRotatingText items={["Victor", "Yinka"]} />
                    </div>
                </h1>
                <img
                    src="/images/image-4.webp"
                    className="object-contain  w-1/2"
                />
            </section>

            <section id="#projects">
                <h2 className="text-center text-3xl">Projects</h2>
                <Card />
            </section>
            <section className="h-30">hello</section>
        </div>
    );
};

export default Sections;
