'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { Shield, Award, Clock, Users } from 'lucide-react'
import Link from 'next/link'
import { createPageUrl } from '@/utils'

type Stat = {
    icon: LucideIcon
    value: string
    label: string
    color: string
}

const stats: Stat[] = [
    { icon: Shield, value: '100%', label: 'Quality Assured', color: '#00A3E0' },
    { icon: Award, value: '15+', label: 'Years Experience', color: '#F5A623' },
    { icon: Clock, value: '24/7', label: 'Support Available', color: '#00D4AA' },
    { icon: Users, value: '100+', label: 'Happy Clients', color: '#E91E63' }
]

const AboutSection: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left - Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="rounded-2xl overflow-hidden"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"
                                    alt="Engineering"
                                    className="w-full h-64 object-cover"
                                />
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="rounded-2xl overflow-hidden mt-8"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80"
                                    alt="Construction"
                                    className="w-full h-64 object-cover"
                                />
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="rounded-2xl overflow-hidden -mt-8"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80"
                                    alt="Electrical"
                                    className="w-full h-64 object-cover"
                                />
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="rounded-2xl overflow-hidden"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80"
                                    alt="Mechanical"
                                    className="w-full h-64 object-cover"
                                />
                            </motion.div>
                        </div>

                        {/* Experience Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: 'spring' }}
                            className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#00A3E0] flex flex-col items-center justify-center text-white shadow-2xl"
                        >
                            <span className="text-3xl font-bold">15+</span>
                            <span className="text-xs">Years</span>
                        </motion.div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                            Delivering Excellence in Engineering Solutions
                        </h2>

                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                            No matter how many hours we're in the field, the magic never fades.
                            Nothing compares to the satisfaction of completing a project that
                            exceeds expectations. From day one, we have put our passion for
                            engineering and quality into finding ever-better solutions.
                        </p>

                        <p className="text-gray-600 mb-8">
                            We have built – and continue to create – solutions that push the
                            boundaries of engineering performance to take the customer
                            experience to the next level. The requirements for engineering
                            continue to evolve. They need to be more efficient, sustainable,
                            and reliable while delivering superior performance.
                        </p>

                        <Link href={createPageUrl('About')}>
                            <button className="bg-[#E30613] hover:bg-[#C00510] text-white px-8 py-4 rounded-full font-medium transition-colors">
                                Learn More About Us
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection