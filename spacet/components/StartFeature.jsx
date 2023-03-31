'use client';

import styles from "@/app";

const StartFeature = ({ title, text }) => (
    <div className={`${styles.flexCenter} flex-row`}>
        <div>
            <p className="font-bold text-[20px] text-white active:text-black">
                {title}
            </p>
        </div>
        <p className="flex-1 ml-[30px] font-normal text-[18px] text-white leading-[32.4px]">
            {text}
        </p>
    </div>
);

export default StartFeature;