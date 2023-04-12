'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/app";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "../components";
import { exploreTechs } from "../constants";

export default function Feature() {
    const [currentTab, setCurrentTab] = useState('tech-1');

    const tabs = exploreTechs;

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <section className={`${styles.paddings} xl:mt-[175px] lg:mt-[135px] mt-[95px] z-10`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex lg:flow-row flex-col`}
            >
                <TypingText title="Space Launch 101" textStyles="block text-start uppercase" />

                <motion.div
                    variants={fadeIn('left', 'tween', 0.2, 1)}
                    className="flex-[0.75] flex justify-between flex-col md:flex-row w-full"
                >
                    {/* List */}
                    <div className="flex flex-1 justify-center items-center">
                        <div>
                            {tabs.map((tab, i) =>
                                <button
                                    key={i}
                                    id={tab.id}
                                    disabled={currentTab === `${tab.id}`}
                                    onClick={(handleTabClick)}
                                >
                                    {tab.tabTitle}
                                </button>
                            )}
                        </div>
                        <div>
                            {tabs.map((tab, i) =>
                                <div key={i}>
                                    {currentTab === `${tab.id}` && <div>
                                        <p>{tab.subtitle}</p>
                                        <h2>{tab.title}</h2>
                                        <p>{tab.text}</p>
                                        <img src={tab.imgUrl} alt={tab.title} />
                                    </div>}
                                </div>
                            )}
                        </div>
                    </div>

                </motion.div>
            </motion.div>
        </section>
    );
};