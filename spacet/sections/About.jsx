'use client';

import { motion } from "framer-motion";
import { TypingText, TitleText } from "../components";

import styles from "@/app";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
    <section className={`${styles.paddings} xl:mt-[175px] lg:mt-[135px] mt-[95px] z-10`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} xl:flex-row flex-col`}
        >
            <div className="flex flex-1 flex-col xl:w-1/2 xl:justify-start justify-center xl:items-start items-center">
                <TypingText title="So, you want to travel to" textStyles="text-center xl:text-start font-barlow-condensed font-normal lg:text-[28px] md:text-[20px] text-[16px] lg:tracking-[4.72px] md:tracking-[3.38px] tracking-[2.7px] lg:leading-[33.6px] md:leading-[24px] leading-[19px] text-[#d0d6f9] uppercase" />

                <TitleText title="Space" textStyles="text-center xl:text-start font-bellefair font-normal md:text-9xl text-[80px] lg:leading-[172px] md:leading-[150px] leading-[100px] uppercase" />

                <motion.p
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    className="md:w-[60%] w-full font-barlow font-normal md:text-[16px] text-[15px] text-center xl:text-start lg:leading-[32px] md:leading-[28px] leading-[25px] text-[#d0d6f9]"
                >
                    Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
                </motion.p>
            </div>
            <div className="block xl:flex xl:w-1/2 xl:justify-end justify-center">
                <motion.span
                    variants={fadeIn('left', 'tween', 0.2, 1)}
                    className="flex items-center justify-center mt-[64px] xl:mt-[0px] xl:h-[274px] lg:h-[242px] h-[210px] xl:w-[274px] lg:w-[242px] w-[210px] text-[20px] lg:text-[32px] lg:tracking-[2px] tracking-[1.25px] font-bellefair font-normal bg-white text-[#0b0d17] rounded-full uppercase"
                >
                    explore
                </motion.span>
            </div>
        </motion.div>
    </section>
);

export default About;