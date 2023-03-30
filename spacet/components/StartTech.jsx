'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { exploreTech } from "../constants";

const StartTech = ({ exploreTech }) => {
    const [selectedItem, setSelectedItem] = useState(exploreTech);

    return (
        <motion.div
            variants={fadeIn('right', 'spring', 0.5, 0.75)}
            className="container mx-auto"
        >
            {/* <ul className="list-none flex justify-center">
                {exploreTech.map((item) => (
                    <li key={item.id} className="mx-4 cursor-pointer">
                        <button
                            onClick={() => setSelectedItem(item)}
                        >
                            {item.title}
                        </button>
                    </li>
                ))}
            </ul> */}
            <div className="my-6">
                <h3>{selectedItem.subtitle}</h3>
                <h2>{selectedItem.title}</h2>
                <p>{selectedItem.content}</p>
                <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="w-full max-w-lg mt-4"
                />
            </div>
        </motion.div>
    );
};

export default StartTech;

{/* <p>{number}</p>
        {active !== id ? (
            <h3>
                {title}
            </h3>
        ) : (
            <div className="flex-[0.75] flex justify-between lg:flex-row flex-col w-full">
                <div className="flex flex-col w-[40%] gap-[24px]">
                    <h3>{subtitle}</h3>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <div className="flex w-[40%] max-h-[600px] h-auto">
                    {imgUrl}
                </div>
            </div>
        )} */}