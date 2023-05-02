'use client';

import { Navbar } from "../../components";
import { About } from "../../sections";
import styles from ".";

export default function Home() {
  return (
    <div className={`${styles.homeBg} overflow-hidden`}>
      <div className="relative z-10">
        <Navbar />
      </div>
      <About />
    </div>
  )
}
