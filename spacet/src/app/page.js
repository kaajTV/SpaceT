'use client';

import { Navbar } from "../../components";
import { About } from "../../sections";
import styles from ".";

export default function Home() {
  return (
    <div className={`${styles.homeBg} absolute top-0 left-0 overflow-hidden`}>
      <div className="z-10">
        <Navbar />
      </div>
      <About />
    </div>
  )
}
