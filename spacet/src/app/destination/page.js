'use client';

import { Navbar } from "../../../components";
import { DestinationSection } from "../../../sections";
import styles from "..";

export default function Destination() {
    return (
        <div className={`${styles.destinationBg} absolute top-0 left-0 overflow-hidden`}>
            <div className="z-10">
                <Navbar />
            </div>
            <div className="z-0">
                <DestinationSection />
            </div>
        </div>
    )
}