"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function LayoutAnimation() {
  return (
    <>
      <div className="w-full h-56 text-center text-6xl leading-[1.5] mt-28">
        <motion.h1
          initial={{ scale: 1, y: 0 }}
          animate={{ scale: [1, 0.8, 0.8], y: [0, -40, -100] }}
          transition={{ duration: 1.4, times: [0, 0.5, 1] }}
        >
          The Animation
        </motion.h1>
        <motion.div
          initial={{ scale: 0, display: "none" }}
          animate={{ scale: 1, display: "block" }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            className="mx-auto"
            src="/Screenshot.png"
            alt="test"
            width={500}
            height={100}
          ></Image>
        </motion.div>
        <motion.h1
          initial={{ scale: 1, y: 0 }}
          animate={{ scale: [1, 0.8, 0.8], y: [0, 40, 100] }}
          transition={{ duration: 1.4, times: [0, 0.5, 1] }}
        >
          Is Started
        </motion.h1>
      </div>
    </>
  );
}
