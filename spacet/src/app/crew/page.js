'use client';

import { Navbar } from "../../../components";
import styles from "..";
import { CrewSection } from "../../../sections";

export default function Crew() {
    return (
        <div className={`${styles.crewBg} absolute top-0 left-0 overflow-hidden`}>
            <div className="z-99">
                <Navbar />
            </div>
            <div>
                <CrewSection />
            </div>
        </div >
    )
}