'use client';

import { useState } from "react";
import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "../components";
import { sliderCrew } from "../constants";
import Image from "next/image";

// Crew Section/Components
const CrewSection = () => {
    const [currentTab, setCurrentTab] = useState('crew-1');

    const tabs = sliderCrew;

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        // Main Container
        <section className="flex md:justify-center justify-start md:items-center items-start pt-12 w-screen min-h-screen z-0">
            {/* Container w/Animation */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="mx-auto flex flex-col"
            >
                {/* Animated Text Container */}
                <div className="flex flex-row md:justify-start justify-center md:items-start items-center xl:pl-[224px] md:px-8 xl:gap-6 gap-4 font-[barlow-condensed] xl:text-[28px] md:text-[20px] text-[16px] xl:tracking-[4.72px] md:tracking-[3.38px] tracking-[2.7px] leading-[19.2px]">
                    <p className="text-white font-bold opacity-25">02</p>
                    <TypingText title="Meet Your Crew" textStyles="font-normal uppercase" />
                </div>

                {/* Animated Container for Main Content */}
                <motion.div
                    variants={fadeIn('right', 'spring', 0.2, 1)}
                >
                    {/* Main Content w/Tab-List */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-2 xl:grid-flow-col justify-center items-center">


                        {/* Tab-List */}
                        <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} initial="hidden" whileInView="show" className="xl:row-start-2 xl:row-end-2 xl:col-start-1 xl:col-end-2 xl:pb-48 flex flex-1 flex-row justify-center xl:place-items-start items-center md:gap-4 gap-1 md:pt-4 lg:pb-2 md:order-8 z-1">
                            {tabs.map((tab, i) =>

                                <button
                                    key={i}
                                    id={tab.id}
                                    disabled={currentTab === `${tab.id}`}
                                    onClick={(handleTabClick)}
                                    className="w-[15px] h-[15px] rounded-full border-none disabled:bg-white bg-[#979797] disabled:opacity-[100%] opacity-[18%] z-10"
                                >
                                </button>

                            )}
                        </motion.div>

                        {/* Content from data-list that shows only when the id equals data-list id */}
                        <div className="xl:row-start-1 xl:row-end-2 xl:col-start-1 xl:col-end-2 flex flex-1 flex-col justify-center text-center pt-6">
                            {tabs.map((tab, i) =>
                                <div key={i}>
                                    {currentTab === `${tab.id}` &&
                                        <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} initial="hidden" whileInView="show">
                                            <p className="md:pt-2 xl:text-[32px] md:text-[24px] text-[16px] xl:leading-[36.67px] md:leading-[27.5px] leading-[18.34px] font-bellefair font-normal text-white mix-blend-normal opacity-50">{tab.title}</p>
                                            <h2 className="md:pt-2 pt-1 xl:text-[56px] md:text-[40px] text-[24px] xl:leading-[64.18px] md:leading-[45.84px] leading-[27.5px] font-bellefair font-normal text-white">{tab.name}</h2>
                                            <p className="pt-2 mx-auto md:w-2/3 sm:w-4/5 md:pt-5 px-4 xl:text-[18px] md:text-[16px] text-[15px] xl:leading-[32px] md:leading-[28px] leading-[25px] font-barlow font-normal text-[#d0d6f9]">{tab.text}</p>
                                        </motion.div>
                                    }
                                </div>
                            )}
                        </div>

                        {/* Image */}
                        {tabs.map((tab, i) =>
                            <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} initial="hidden" whileInView="show" className="items-end xl:row-start-1 xl:row-end-3 xl:col-start-2 xl:col-end-3 flex lg:w-1/2 md:w-full h-auto mx-auto md:pt-0 pt-4 xl:order-8 md:order-last order-first z-0" key={i}>
                                {currentTab === `${tab.id}` &&
                                    <Image src={tab.imgUrl} alt={tab.title} width={500} height={500} className="lg:w-[450px] md:w-[375px] w-[250px] h-auto mx-auto md:object-cover border-b xl:border-[#525668] border-[#383b4b] z-0" />
                                }
                            </motion.div>
                        )}


                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}

export default CrewSection;