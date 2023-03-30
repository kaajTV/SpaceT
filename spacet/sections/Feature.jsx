'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/app";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText, StartSteps, StartTech } from "../components";
import { startingFeatures, exploreTech } from "../constants";

export default function Feature({ exploreTech }) {
    const [selectedItem, setSelectedItem] = useState(exploreTech);
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
                    {/* <StartTech data={exploreTech} /> */}

                    <ul className="list-none flex justify-center">
                        {exploreTech.map((item) => (
                            <li key={item.id} className="mx-4 cursor-pointer">
                                <button
                                    onClick={() => setSelectedItem(item)}
                                >
                                    {item.title}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className={`${selectedItem ? "block" : "hidden"}`}>
                        {exploreTech.map((item, index) => (
                            <StartTech
                                key={item.id}
                                {...item}
                                index={index}
                                subtitle={item}
                                title={item}
                                content={item}
                                imgUrl={item}

                            />
                        ))}
                    </div>

                    {/* Image */}
                    {/* <img src="/image-launch-vehicle-portrait.jpg" alt="Launch Vehicle" className="max-h-[500px] h-full max-w-[500px] w-full lg:object-right object-top" /> */}

                </motion.div>
            </motion.div>
        </section>
    );
};

// export default Feature;

// {startingFeatures.map((feature, index) => (
//     <StartSteps
//         key={feature}
//         number={`${index < 10 ? '' : ''} ${index + 1}`}
//         text={feature}
//     />
// ))}