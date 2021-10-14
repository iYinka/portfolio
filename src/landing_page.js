import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Header from "./header";
import Link from "next/link";
import Sections from "./sections";
import { motion } from "framer-motion";

export const Landing_page = () => {
    return (
        <div>
            {/* Header and NavBAr */}
            <motion.div
                className="h-20 border-b flex justify-between p-2"
                initial={{ opacity: 0, y: -180 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 0.8,
                }}
            >
                <Link href={{ pathname: "/" }}>
                    <a>
                        <h1 className="w-1/2 font-gemunu text-7xl text-blue-600 flex items-center cursor-pointer">
                            Victor.
                        </h1>
                    </a>
                </Link>{" "}
                <div className="w-1/2 flex justify-between items-center text-4xl">
                    <Link href={{ pathname: "https://github.com/iYinka" }}>
                        <a>
                            <FaGithub
                                size={25}
                                color="#"
                                className="cursor-pointer"
                            />
                        </a>
                    </Link>
                    <Link
                        href={{
                            pathname:
                                "https://www.linkedin.com/in/olayinka-victor-owolabi-76467871/",
                        }}
                    >
                        <a>
                            <FaLinkedinIn
                                size={25}
                                color="#2867B2"
                                className="cursor-pointer"
                            />
                        </a>
                    </Link>
                    <Link
                        href={{
                            pathname: "https://www.facebook.com/OlayinkaV",
                        }}
                    >
                        <a>
                            <FaFacebookF
                                size={25}
                                color="#3b5998"
                                className="cursor-pointer"
                            />
                        </a>
                    </Link>
                    <Link href={{ pathname: "https://twitter.com/yinka_iam" }}>
                        <a>
                            <FaTwitter
                                size={25}
                                color="#1DA1F2"
                                className="cursor-pointer"
                            />
                        </a>
                    </Link>
                </div>
            </motion.div>
            <Header />
            <Sections />
        </div>
    );
};
