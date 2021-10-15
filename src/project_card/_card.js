import React from "react";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

const CardComp = ({ title, imgSrc, text, link, github }) => {
    return (
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-sm">
            <div class="md:flex flex-col justify-between p-5">
                <div class=" tracking-wide text-sm text-indigo-500 font-semibold">
                    {title}
                </div>
                {/* <div class="md:flex-shrink-0">
                    {" "}
                    <img src="" alt="logo" />
                </div> */}
            </div>
            <div>
                <div class="flex justify-evenly gap-3 p-3">
                    <img src={imgSrc} alt="logo" class="w-1/4 h-1/4" />
                    <p class="mt-2 text-gray-500">{text}</p>
                </div>
                <Link href={{ pathname: `${link}` }}>
                    <a>
                        <FiLink
                            size={25}
                            color="#"
                            className="cursor-pointer float-right m-4"
                        />
                    </a>
                </Link>

                <Link href={{ pathname: `${github}` }}>
                    <a>
                        <FaGithub
                            size={25}
                            color="#"
                            className="cursor-pointer float-right m-4"
                        />
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default CardComp;
