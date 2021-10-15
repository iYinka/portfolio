import React from "react";
import CardComp from "./_card";

const Card = () => {
    const cardDetails = [
        {
            title: "Covid-19 Tracker",
            logo: "https://covid19-c4740.web.app/static/media/covid.49d29253.png",
            desc: "Covid tracker",
            link: "https://covid19-c4740.web.app/",
            repo: "https://github.com/iYinka/covid19-tracer",
        },
        {
            title: "Amazon(clone)",
            logo: "http://pngimg.com/uploads/amazon/amazon_PNG11.png",
            desc: "Amazon here",
            link: "https://clone-bbef4.web.app/",
            repo: "https://github.com/iYinka/amazon-clone-React-with-Firebase",
        },
        {
            title: "Netflix(clone)",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png",
            desc: "Netflix here",
            link: "https://netflix-clone-d50d5.web.app/",
            repo: "https://github.com/iYinka/Netflix-clone-React-with-Firebase",
        },
    ];
    return (
        <div className="flex justify-between items-center p-2">
            {cardDetails.map((detail) => (
                <CardComp
                    title={detail.title}
                    imgSrc={detail.logo}
                    text={detail.desc}
                    link={detail.link}
                    github={detail.repo}
                />
            ))}
        </div>
    );
};

export default Card;
