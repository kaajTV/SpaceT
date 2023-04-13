'use client';

import { Navbar } from "../../../components";
import { Feature } from "../../../sections";
import styles from "..";

export default function Technology() {
    return (
        <div className={`${styles.technologyBg} overflow-hidden flex flex-col`}>
            <div className="relative">
                <Navbar />
            </div>
            <Feature />
        </div>
    )
}