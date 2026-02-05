"use client";

import { useState, useEffect, useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useInView,
} from "framer-motion";




export default function Partners() {

    const { scrollY } = useScroll();



    const techRef = useRef(null);



    const techInView = useInView(techRef, { once: true, margin: "-100px" });


    const partners = [
        { name: "bec", logo: "/img/bec.png" },
        { name: "axis", logo: "/img/axis.png" },
        { name: "niedax", logo: "/img/niedax.png" },
        { name: "tecofi", logo: "/img/tecofi.png" }
    ];

    const duplicatedPartners = [...partners, ...partners, ...partners];


    return (
        <main className="w-full overflow-hidden">


            <section
                id="technologies"
                ref={techRef}
                className="relative py-20 overflow-hidden"
            >
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={techInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="container mx-auto px-6"
                >
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-4xl font-bold">
                            Our Partners
                        </h2>


                    </div>


                    {/* Scrolling Logos */}
                    <div className="py-8 overflow-hidden">
                        <motion.div
                            className="flex gap-12"
                            animate={{
                                x: [0, -1 * partners.length * (120 + 48)],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 30,
                                    ease: "linear",
                                },
                            }}
                        >
                            {duplicatedPartners.map((tech, idx) => (
                                <motion.div
                                    key={`${tech.name}-${idx}`}
                                    className="flex-shrink-0 group"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="relative w-[80px] h-[80px] md:w-[120px] md:h-[120px] rounded-2xl bg-card border border-border flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
                                        {/* Glow */}
                                        <motion.div
                                            className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
                                            style={{
                                                background:
                                                    "radial-gradient(circle at 50% 50%, oklch(0.62 0.18 195 / 0.1), transparent 70%)",
                                            }}
                                        />

                                        {/* Logo */}
                                        {tech.logo ? (
                                            <motion.img
                                                src={tech.logo}
                                                alt={tech.name}
                                                className="relative z-10 object-contain w-10 h-10 md:w-16 md:h-16 transition-all duration-300 filter  group-hover:grayscale-0"
                                                whileHover={{ filter: "grayscale(0%)" }}
                                            />
                                        ) : null}

                                        {/* Name */}
                                        <motion.div
                                            className="absolute left-0 right-0 text-center transition-opacity duration-300 opacity-0 bottom-2 group-hover:opacity-100"
                                            initial={{ y: 10 }}
                                            whileHover={{ y: 0 }}
                                        >
                                            <span className="text-xs font-semibold bg-linear-to-r from-[oklch(0.62_0.18_195)] to-[oklch(0.55_0.15_200)] bg-clip-text text-transparent">
                                                {tech.name}
                                            </span>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                </motion.div>
            </section>



        </main>
    );
}