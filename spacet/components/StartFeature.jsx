'use client';

import styles from "@/app";

const StartFeature = ({ subtitle, title, text, imgUrl }) => (
    <div className={`${styles.flexCenter} flex-row`}>
        <div>
            <h3 className="font-bold text-[20px] text-white">{subtitle}</h3>
            <h2 className="font-bold text-[20px] text-white">
                {title}
            </h2>
        </div>
        <p className="flex-1 ml-[30px] font-normal text-[18px] text-white leading-[32.4px]">
            {text}
        </p>
        <div>
            <img src={imgUrl} alt={title} className="h-500 w-500" />
        </div>
    </div>
);

export default StartFeature;