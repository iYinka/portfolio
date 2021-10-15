import React from "react";
import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiLink } from "react-icons/fi";

const CardComp = () => {
    return (
        <div class="max-w-md mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:max-w-sm">
            <div class="md:flex flex-col justify-between p-5">
                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    Titleuytyuftydgd
                </div>
                {/* <div class="md:flex-shrink-0">
                    {" "}
                    <img src="" alt="logo" />
                </div> */}
            </div>
            <div>
                <div class="p-8 flex justify-evenly gap-9">
                    {/* <a
                            href="#"
                            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                        > */}
                    <div class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                        {" "}
                        <img src="" alt="logo" />
                    </div>
                    {/* </a> */}
                    <p class="mt-2 text-gray-500">
                        Getting a new business off the ground is a lot of hard
                        customers.
                    </p>
                </div>
                <Link href={{ pathname: "https://github.com" }}>
                    <a>
                        <FiLink
                            size={25}
                            color="#"
                            className="cursor-pointer float-right m-4"
                        />
                    </a>
                </Link>

                <Link href={{ pathname: "https://github.com/iYinka" }}>
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
