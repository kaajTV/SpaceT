'use client';

import { Navbar } from "../../../components";
import styles from "..";

export default function Destination() {
    return (
        <div className={`${styles.destinationBg} overflow-hidden`}>
            <div className="relative">
                <Navbar />
            </div>
        </div>
    )
}