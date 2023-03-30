'use client';

import styles from "@/app";

const StartSteps = ({ number, text }) => (
    <div className={`${styles.flexCenter} flex-row`}>
        <div className={`${styles.flexCenter} w-[70px] h-[70px] rounded-full active:bg-white border border-white/25`}>
            <p className="font-bold text-[20px] text-white active:text-black">
                {number}
            </p>
        </div>
        <p className="flex-1 ml-[30px] font-normal text-[18px] text-white leading-[32.4px]">
            {text}
        </p>
    </div>
);

export default StartSteps;