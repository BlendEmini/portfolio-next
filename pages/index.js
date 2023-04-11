import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { pdfjs } from "react-pdf";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { FaSmileBeam } from "react-icons/fa";
import Blendi from "../public/MyAvatar.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web11 from "../public/web11.png";
import nfters from "../public/nfters.png";
import web22 from "../public/web22.png";
import web33 from "../public/web33.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";

import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const [darkMode, setDarkMode] = useState(true);
    const [emailAlert, setEmailAlert] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_md20w0s",
                "template_jls7xq5",
                form.current,
                "FgZw1iF1rmSp0Y5FY"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setEmailAlert(true);
                    setTimeout(() => {
                        setEmailAlert(false);
                    }, 5000);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <>
            <div className={darkMode ? "dark" : ""}>
                <Head>
                    <title>BlendEmini-Portfolio</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                </Head>
                <main className="bg-white px-10 md:px20 lg:px-40 dark:bg-gray-900">
                    <section className="min-h-screen">
                        <nav className="py-10 mb-12 flex justify-between">
                            <h1 className="text-4xl font-header dark:text-white ">
                                Blend Emini - Portfolio
                            </h1>
                            <ul className="flex items-center">
                                <li>
                                    {" "}
                                    <BsFillMoonStarsFill
                                        onClick={() => setDarkMode(!darkMode)}
                                        className="cursor-pointer text-2xl dark:text-white"
                                    />{" "}
                                </li>
                                <li>
                                    {" "}
                                    <a
                                        className="flex flex-col lg:flex-row lg:gap-2 bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2  lg:px-8 lg:py-4 adding-border dark:border-white rounded-md ml-8"
                                        href="https://drive.google.com/file/d/1e7Q2D1m6nUzIw-ftTAbNsSKceCIg1zwq/view?usp=sharing"
                                    >
                                        <h6>Download</h6>
                                        <h6>Resume</h6>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="lg:flex justify-center align-middle">
                            <div className="text-center lg:p-10 pb-10 ">
                                <h2 className="text-5xl  py-2 text-teal-600 font-medium md:text-6xl ">
                                    Blend Emini
                                </h2>
                                <h3 className="text-2xl py-2 md:text-3xl dark:text-teal-300">
                                    Frontend Developer
                                </h3>
                                <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
                                    {" "}
                                    Experienced frontend developer with a
                                    passion for creating intuitive and
                                    user-friendly interfaces. Proficient in
                                    HTML5, CSS, JavaScript, and various frontend
                                    frameworks and Libraries such as React,
                                    Next.Js,Tailwind and Bootstrap.
                                </p>
                            </div>
                            <div className="relative mx-auto bg-gradient-to-b from-slate-800 dark:from-teal-500 rounded-full overflow-hidden -mt-5 w-80 h-80 mt-15 md:h-96 md:w-96 ">
                                <Image
                                    src={Blendi}
                                    // layout="fill"
                                    // objectFit="cover"
                                />
                            </div>
                        </div>
                        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-700 dark:text-white   ">
                            <a href="https://www.linkedin.com/in/blend-emini-0b175125b/">
                                <AiFillLinkedin />
                            </a>
                            <a href="https://github.com/BlendEmini">
                                <AiFillGithub />
                            </a>

                            <a href="">
                                <AiOutlineMail />
                            </a>
                        </div>
                    </section>
                    <section className="md:flex adding-border-white lg:-mt-5 md:flex-col md:gap-10">
                        <div className="text-center mt-8 ">
                            <h3 className="text-3xl py-1 dark:text-white ">
                                About Me
                            </h3>
                            <p className="text-md py-2 leading-8 dark:text-white text-gray-800">
                                Hi, I'm Blend Emini,im 21 Years Old and I study
                                Computer Science (Bachelor Degree) and i started
                                learning Html,Css and Js when i had practical
                                work (from faculty) to do in local companies and
                                since then i started focusing more and more in
                                Frontend Development.Recently I successfully
                                graduated in Frontend course at Jagaad Academy.
                                For the last 12Months, I had the chance to work
                                on variety of technologies on a daily basis,
                                especially in the last 6 months since i got
                                accepted in Jagaad Academy where i had a great
                                chance to practice a large number of modern
                                technologies and also lately i started learning
                                Node.js,MongoDB and Express.
                            </p>
                            <p className="text-md py-2 leading-8 dark:text-white text-gray-800">
                                {" "}
                                My current skills (for now) : ⚪ HTML ⚪ CSS ⚪
                                SASS ⚪ Tailwind ⚪ Bootstrap ⚪ Javascript ⚪
                                TypeScript ⚪ React ⚪ Redux ⚪ Next.js ⚪
                                Docker.
                            </p>
                        </div>
                    </section>
                    <section className="adding-border-white">
                        <div className="py-3">
                            <h3 className="text-3xl text-center font-header dark:text-white py-1">
                                Portfolio
                            </h3>
                            <p className="text-md py-2 leading-8 text-center dark:text-white text-gray-800">
                                Skilled in collaborating with cross-functional
                                teams to deliver high-quality products that meet
                                user needs and business goals.
                            </p>
                        </div>
                        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                            <div className="basis-1/3 flex-1 gap-1 flex flex-col">
                                <Image
                                    src={web11}
                                    className="rounded-lg object-cover"
                                    width={"100%"}
                                    height={"100%"}
                                />
                                <a
                                    href="https://github.com/BlendEmini/nfters"
                                    className="py-2 rounded-lg px-4 w-48 text-center text-white text-xl button-border "
                                >
                                    Project in Github
                                </a>
                            </div>
                            <div className="basis-1/3 flex-1 gap-3 flex flex-col">
                                <Image
                                    src={web22}
                                    className="rounded-lg object-cover"
                                    width={"100%"}
                                    height={"100%"}
                                />
                                <div className="flex gap-2">
                                    <a
                                        href="https://github.com/BlendEmini/ecommerce-shop"
                                        className="py-2 rounded-lg px-4 w-48 text-center text-white text-sm lg:text-xl button-border "
                                    >
                                        Project in Github
                                    </a>
                                    <a
                                        href="https://ecommerce-fe6-final.netlify.app/"
                                        className="py-2 rounded-lg px-4 w-48 text-center bg-gradient-to-r  from-cyan-500 to-teal-500  text-black text-xl button-border "
                                    >
                                        Live Project
                                    </a>
                                </div>
                            </div>
                            <div className="basis-1/3 flex-1 flex flex-col gap-2">
                                <Image
                                    src={web33}
                                    className="rounded-lg object-cover"
                                    width={"100%"}
                                    height={"100%"}
                                />
                                <a
                                    href="https://github.com/BlendEmini/shapevoice-landingpage"
                                    className="py-2 rounded-lg px-4 w-48 text-center text-white text-xl button-border "
                                >
                                    Project in Github
                                </a>
                            </div>

                            <div className="basis-1/3 flex-1">
                                <Image
                                    src={web5}
                                    className="rounded-lg object-cover"
                                    width={"100%"}
                                    height={"100%"}
                                />
                            </div>
                        </div>
                    </section>
                    {emailAlert ? (
                        <span className="text-white p-4 bg-green-400 fixed-position ">
                            Email Has Been Send Successfully{" "}
                        </span>
                    ) : null}
                    <section className="w-75 h-50 border-radius-section-sm border1pxw bg-slate-900  md:border-radius-section flex  align-center-items justify-center ">
                        <div className="">
                            <form
                                ref={form}
                                onSubmit={sendEmail}
                                className="p-7  md:px-24 radius-form flex flex-col align-middle justify-center gap-2"
                            >
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    name="user_name"
                                    className="py-2  adding-border-black  px-4 w-70 rounded-xl "
                                ></input>

                                <input
                                    type="text"
                                    name="user_lastname"
                                    placeholder="Last Name"
                                    className="py-2 px-4 w-70  adding-border-black  rounded-xl"
                                ></input>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="user_email"
                                    className="py-2 px-4 w-70  adding-border-black rounded-xl"
                                ></input>
                                <textarea
                                    id="story"
                                    name="message"
                                    rows="5"
                                    cols="33"
                                    placeholder="Your Message"
                                    className="py-2 px-4 w-70  adding-border-black  rounded-xl"
                                ></textarea>
                                <input
                                    type="submit"
                                    className="py-1 bg-white adding-border-black  px-4 w-70 rounded-xl"
                                />
                            </form>
                        </div>
                        <div className="h-96 p-3 pr-24 w-auto radius-from-txt  md:flex flex-col gap-5 justify-center hidden ">
                            {" "}
                            <h2 className="text-white text-3xl ">
                                SEND ME AN EMAIL !
                            </h2>{" "}
                            <p className="text-xl w-72 text-white ">
                                If your interested in me or want to know more
                                about me free to contact !
                            </p>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
