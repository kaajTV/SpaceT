'use client';

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { exploreTechs } from '../constants';

const StartTech = () => {
    const [currentTab, setCurrentTab] = useState('tech-1');

    const tabs = exploreTechs;

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    }

    return (
        <motion.div
            variants={fadeIn('right', 'spring', 0.5, 0.75)}
            className="container mx-auto"
        >
            <div>
                {tabs.map((tab, i) =>
                    <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={(handleTabClick)}>{tab.tabTitle}</button>
                )}
            </div>
            <div className="my-6">
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
        </motion.div>
    );
};

export default StartTech;