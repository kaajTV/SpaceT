'use client';

import { Navbar } from "../../../components";
import styles from "..";

export default function Crew() {
    return (
        <div className={`${styles.crewBg} overflow-hidden`}>
            <div className="relative">
                <Navbar />
            </div>
        </div>
    )
}