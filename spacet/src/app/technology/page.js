'use client';

import { Navbar } from "../../../components";
import { Feature } from "../../../sections";
import styles from "..";

export default function Technology() {
    return (
        <div className={`${styles.technologyBg} absolute top-0 left-0 overflow-hidden flex flex-col`}>
            <div className="z-10">
                <Navbar />
            </div>
            <Feature />
        </div>
    )
}