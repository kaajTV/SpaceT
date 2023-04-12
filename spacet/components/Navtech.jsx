'use client';

import { motion } from "framer-motion";

import { StartFeature } from "../components";
import { exploreTechs } from "../constants";

import { fadeIn } from "../utils/motion";
import styles from "@/app";

const Navtech = ({ exploreTechs, id, title, text, subtitle, active, handleClick }) => (
    <motion.div
        variants={fadeIn('right', 'spring', 0.5, 0.75)}
        className={`relative ${active === id ? 'lg:flex-[0.5] flex-[1]' : 'lg:flex-[0.5] flex-[1]'} flex justify-center items-center`}
        onClick={() => handleClick(id)}
    >
        {active !== id ? (
            <h3 className="text-white">{title}</h3>
        ) : (
            <div className="flex justify-center items-center">
                {exploreTechs?.map((tech) => (
                    <StartFeature
                        key={tech}
                        subtitle={tech.subtitle}
                        title={tech.title}
                        text={tech.text}
                        imgUrl={tech.imgUrl}
                    />
                ))}
            </div>
        )}
    </motion.div>
);

export default Navtech;