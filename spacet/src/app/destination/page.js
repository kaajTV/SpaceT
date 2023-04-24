'use client';

import { Navbar } from "../../../components";
import { DestinationSection } from "../../../sections";
import styles from "..";

export default function Destination() {
    return (
        <div className={`${styles.destinationBg} overflow-hidden`}>
            <div className="relative">
                <Navbar />
            </div>
            <DestinationSection />
        </div>
    )
}