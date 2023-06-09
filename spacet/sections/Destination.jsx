'use client';

import { useState } from "react";
import { motion } from "framer-motion";

import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "../components";
import { explorePlanets } from "../constants";
import Image from "next/image";

// Destination Section/Components
const DestinationSection = () => {
    const [currentTab, setCurrentTab] = useState('planet-1');

    const tabs = explorePlanets;

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        // Main Container
        <section className="flex md:justify-center justify-start md:items-center items-start pt-12 md:pt-0 w-screen min-h-screen z-0">
            {/* Container w/Animation */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className="mx-auto flex flex-col"
            >
                {/* Animated Text Container */}
                <div className="flex flex-row md:justify-start justify-center md:items-start items-center lg:pl-[224px] md:px-8 lg:gap-6 gap-4 font-[barlow-condensed] lg:text-[28px] md:text-[20px] text-[16px] lg:tracking-[4.72px] md:tracking-[3.38px] tracking-[2.7px] leading-[19.2px]">
                    <p className="text-white font-bold opacity-25">01</p>
                    <TypingText title="Pick Your Destination" textStyles="font-normal uppercase" />
                </div>

                {/* Animated Container for Main Content */}
                <motion.div
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    className="flex"
                >
                    {/* Main Content w/Tab-List */}
                    <div className="flex flex-1 lg:flex-row flex-col lg:justify-evenly justify-center items-center lg:px-[128px]">

                        {/* Image */}
                        <div className="w-1/2 lg:p-12 md:p-12 p-6">
                            {tabs.map((tab, i) =>
                                <motion.div variants={fadeIn('right', 'tween', 0.2, 1)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.25 }} key={i}>
                                    {currentTab === `${tab.id}` &&
                                        <Image src={tab.imgUrl} alt={tab.title} width={500} height={500} />
                                    }
                                </motion.div>
                            )}
                        </div>

                        {/* Tab-List */}
                        <motion.div variants={fadeIn('left', 'tween', 0.2, 1)} initial="hidden" whileInView="show" className="lg:w-1/2 inline-block text-center"> {/* Add line below active tab and a hover */}
                            {tabs.map((tab, i) =>
                                <button
                                    key={i}
                                    id={tab.id}
                                    disabled={currentTab === `${tab.id}`}
                                    onClick={(handleTabClick)}
                                    className="disabled:underline disabled:underline-offset-[12.5px] disabled:decoration-[3px] hover:underline hover:underline-offset-[12.5px] hover:decoration-[3px] hover:decoration-[#97979750] md:px-4 px-2 md:text-[16px] text-[14px] font-normal md:tracking-[2.7px] tracking-[2.3625px] md:leading-[19.2px] leading-[16.8px] font-[barlow-condensed] text-white uppercase"
                                >
                                    {tab.title}
                                </button>
                            )}

                            {/* Content from data-list that shows only when the id equals data-list id */}
                            <div className="flex flex-col justify-center items-center">
                                {tabs.map((tab, i) =>
                                    <div key={i}>
                                        {currentTab === `${tab.id}` &&
                                            <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} initial="hidden" whileInView="show" className="flex flex-col justify-center items-center py-2">
                                                <h2 className="pt-2 lg:text-[100px] md:text-[80px] text-[56px] font-normal lg:leading-[114.6px] md:leading-[91.68px] leading-[64.18px] font-[bellefair] text-white uppercase">{tab.title}</h2>
                                                <p className="lg:max-w-[60%] md:max-w-[80%] md:pt-4 pb-4 px-2 lg:text-[18px] md:text-[16px] text-[15px] font-normal lg:leading-[32px] md:leading-[28px] leading-[25px] font-[barlow] text-[#d0d6f9]">{tab.text}</p>
                                                <div className="inline-block my-6 mx-auto max-w-[473px] w-[90%] h-[1px] opacity-[25.15%] bg-[#979797]" />
                                                <div className="flex md:flex-row flex-col gap-12 pt-4">
                                                    <div>
                                                        <p className="text-[14px] font-normal leading-[16.8px] tracking-[2.3265px] font-[barlow] text-[#d0d6f9] uppercase">{tab.distanceTitle}</p>
                                                        <p className="pt-2 text-[28px] font-normal leading-[32.09px] font-[bellefair] text-white uppercase">{tab.distance}</p>
                                                    </div>
                                                    <div>
                                                        <p className="md:pt-0 pt-6 text-[14px] font-normal leading-[16.8px] tracking-[2.3265px] font-[barlow] text-[#d0d6f9] uppercase">{tab.timeTitle}</p>
                                                        <p className="pt-2 text-[28px] font-normal leading-[32.09px] font-[bellefair] text-white uppercase">{tab.time}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        }
                                    </div>
                                )}
                            </div>
                        </motion.div>

                    </div>
                </motion.div>

            </motion.div>
        </section>
    )
}

export default DestinationSection;