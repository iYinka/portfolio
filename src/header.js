import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { motion } from "framer-motion";

const Header = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);

    const navLinks = [
        { link: "Skills", path: "/#skills" },
        { link: "Projects", path: "/#projects" },
        { link: "Let's Talk", path: "/#lets_talk" },
    ];

    return (
        <motion.div
            className={` h-20 border-b flex justify-between bg-white p-2 w-full ${
                show && `top-0 bg-black fixed`
            }`}
            initial={{ opacity: 0, y: -180 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 0.6,
            }}
        >
            <h1 className="font-gemunu text-7xl text-blue-600 w-1/2">V!</h1>
            <Nav className="font-raleway font-light  text-lg flex justify-between items-center w-1/2">
                {navLinks.map((navLink, index) => (
                    <NavItem key={index}>
                        <Link href={navLink.path}>
                            <NavLink className="cursor-pointer ">
                                {navLink.link}
                            </NavLink>
                        </Link>
                    </NavItem>
                ))}
            </Nav>{" "}
        </motion.div>
    );
};

export default Header;
