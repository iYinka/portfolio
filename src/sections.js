import React, { useState } from "react";

const Sections = () => {
    const [showText, setShowText] = useState("Victor");

    setTimeout(() => {
        setShowText();
    }, 2000);

    return (
        <div>
            <section
                id="#skills"
                className="flex justify-evenly items-center h-full"
            >
                <h1 className=" text-7xl font-extrabold font-raleway">
                    <div>Hi...</div>
                    <div>I</div>
                    <div>Am</div>
                    <div>{showText ? "Victor" : "Yinka"}</div>
                </h1>
                <img
                    src="/images/image-4.webp"
                    className="object-contain  w-1/2"
                />
            </section>
            {/* <section id="#projects">
                <h1>PROJECTS</h1>{" "}
            </section> */}
        </div>
    );
};

export default Sections;
