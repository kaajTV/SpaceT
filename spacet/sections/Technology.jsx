'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/app";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "../components";
import { exploreTechs } from "../constants";
import Image from "next/image";

const Feature = () => {
    const [currentTab, setCurrentTab] = useState('tech-1');

    const tabs = exploreTechs;

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <section className="flex md:justify-center justify-start md:items-center items-start pt-12 md:pt-0 w-screen min-h-screen z-0"> {/* xl:mt-[175px] lg:mt-[135px] mt-[65px] // xl:top-[212px] md:top-[136px] top-[88px] */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.interWidth} mx-auto flex lg:flow-row flex-col`}
            >
                <div className="flex flex-row md:justify-start justify-center md:items-start items-center md:px-8 xl:gap-6 gap-4 font-[barlow-condensed] xl:text-[28px] md:text-[20px] text-[16px] xl:tracking-[4.72px] md:tracking-[3.38px] tracking-[2.7px] leading-[19.2px]">
                    <p className="text-white font-bold opacity-25">03</p>
                    <TypingText title="Space Launch 101" textStyles="font-normal uppercase" />
                </div>

                <motion.div
                    variants={fadeIn('left', 'tween', 0.2, 1)}
                    className="flex xl:justify-evenly justify-between flex-col md:flex-row w-full md:mt-[0px] mt-[25px] md:py-6"
                >
                    {/* List */}
                    <div className="flex flex-1 xl:flex-row flex-col xl:justify-evenly justify-center items-center"> {/* add a flex-row at desktop */}

                        <div className="xl:hidden flex flex-auto">
                            {tabs.map((tab, i) =>
                                <div key={i}>
                                    {currentTab === `${tab.id}` &&
                                        <div>
                                            <img src={tab.imgUrl} alt={tab.title} />
                                        </div>
                                    }
                                </div>
                            )}
                        </div>

                        <div className="flex xl:flex-col flex-row justify-center xl:items-start items-center xl:w-[50px] w-full h-full md:gap-10 gap-4 xl:mt-0 mt-[25px]"> {/* add a flex-col at desktop */}
                            {tabs.map((tab, i) =>
                                <button
                                    key={i}
                                    id={tab.id}
                                    disabled={currentTab === `${tab.id}`}
                                    onClick={(handleTabClick)}
                                    className="xl:w-[80px] md:w-[60px] w-[40px] xl:h-[80px] md:h-[60px] h-[40px] rounded-full disabled:bg-white disabled:text-black bg-transparent border border-gray-600 text-white xl:text-[32px] md:text-[24px] text-[16px]"
                                >
                                    {tab.tabTitle}
                                </button>
                            )}
                        </div>

                        <div>
                            {tabs.map((tab, i) =>
                                <div key={i}>
                                    {currentTab === `${tab.id}` &&
                                        <div className="flex flex-col justify-center items-center text-center py-6 xl:px-0 px-8">
                                            <p className="text-[14px] tracking-[2.36px] leading-[16.8px] text-[#d0d6f9] font-[barlow-condensed]">{tab.subtitle}</p>
                                            <h2 className="mt-4 xl:text-[56px] md:text-[40px] text-[24px] xl:leading-[64.18px] md:leading-[45.84px] leading-[27.5px] text-white font-[bellefair]">{tab.title}</h2>
                                            <p className="lg:max-w-[40%] mt-6 xl:text-[18px] md:text-[16px] text-[15px] xl:leading-[32px] md:leading-[28px] leading-[25px] text-[#d0d6f9] font-[barlow]">{tab.text}</p>
                                        </div>}
                                </div>
                            )}
                        </div>

                        <div className="xl:flex hidden flex-auto h-full w-full">
                            {tabs.map((tab, i) =>
                                <div key={i}>
                                    {currentTab === `${tab.id}` &&
                                        <div>
                                            <Image src={tab.imgUrlDesktop} alt={tab.title} width={500} height={500} />
                                        </div>
                                    }
                                </div>
                            )}
                        </div>

                    </div>

                </motion.div>
            </motion.div>
        </section>
    );
};

export default Feature;