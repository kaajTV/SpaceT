'use client';

import { Navbar } from "../../../components";
import styles from "..";
import { CrewSection } from "../../../sections";

export default function Crew() {
    return (
        <div className={`${styles.crewBg} overflow-hidden`}>
            <div className="relative z-10">
                <Navbar />
            </div>
            <CrewSection />
        </div>
    )
}