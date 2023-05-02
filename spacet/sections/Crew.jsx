'use client';

import { useState } from "react";
import { motion } from "framer-motion";

import styles from "@/app";

import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "../components";
import { sliderCrew } from "../constants";

const CrewSection = () => {
    const [currentTab, setCurrentTab] = useState('crew-1');

    const tabs = sliderCrew;

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <section className="xl:mt-[175px] md:mt-[140px] mt-[120px] z-10">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="mx-auto"
            >

                <div className="flex flex-row md:justify-start justify-center md:items-start items-center xl:pl-[224px] md:px-8 xl:gap-6 gap-4 font-[barlow-condensed] xl:text-[28px] md:text-[20px] text-[16px] xl:tracking-[4.72px] md:tracking-[3.38px] tracking-[2.7px] leading-[19.2px]">
                    <p className="text-white font-bold opacity-25">02</p>
                    <TypingText title="Meet Your Crew" textStyles="font-normal uppercase" />
                </div>

                <motion.div
                    variants={fadeIn('right', 'spring', 0.2, 1)}
                >
                    {/* Container Div */}
                    <div className="flex flex-1 xl:flex-row flex-col xl:justify-evenly justify-center items-center xl:px-[128px]">

                        <div className="w-4/6 xl:p-12 md:p-12 p-6">
                            {tabs.map((tab, i) =>
                                <div className="w-full border-b-[1px] border-[#383b4b]" key={i}>
                                    {currentTab === `${tab.id}` &&
                                        <img src={tab.imgUrl} alt={tab.title} />
                                    }
                                </div>
                            )}
                        </div>

                        <div className="xl:w-1/2 inline-block text-center">
                            {tabs.map((tab, i) =>
                                <button
                                    key={i}
                                    id={tab.id}
                                    disabled={currentTab === `${tab.id}`}
                                    onClick={(handleTabClick)}
                                    className="w-[15px] h-[15px] rounded-full border-none disabled:bg-white bg-[#979797] disabled:opacity-[100%] opacity-[18%]"
                                >
                                </button>
                            )}

                            <div className="grid">
                                {tabs.map((tab, i) =>
                                    <div key={i}>
                                        {currentTab === `${tab.id}` &&
                                            <div>
                                                <p className="xl:text-[32px] md:text-[24px] text-[16px] xl:leading-[36.67px] md:leading-[27.5px] leading-[18.34px] font-[bellefair] font-normal text-white mix-blend-normal opacity-50">{tab.title}</p>
                                                <h2 className="xl:text-[56px] md:text-[40px] text-[24px] xl:leading-[64.18px] md:leading-[45.84px] leading-[27.5px] font-[bellefair] font-normal text-white">{tab.name}</h2>
                                                <p className="xl:text-[18px] md:text-[16px] text-[15px] xl:leading-[32px] md:leading-[28px] leading-[25px] font-[barlow] font-normal text-[#d0d6f9]">{tab.text}</p>
                                            </div>
                                        }
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default CrewSection;