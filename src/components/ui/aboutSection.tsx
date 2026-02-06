'use client'

import React, { useState } from 'react'
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
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <section className="py-12 lg:py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* Left - Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-2 lg:gap-4">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="rounded-lg lg:rounded-2xl overflow-hidden"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"
                                    alt="Engineering"
                                    className="w-full h-32 lg:h-64 object-cover"
                                />
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="rounded-lg lg:rounded-2xl overflow-hidden lg:mt-8"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80"
                                    alt="Construction"
                                    className="w-full h-32 lg:h-64 object-cover"
                                />
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="rounded-lg lg:rounded-2xl overflow-hidden lg:-mt-8"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80"
                                    alt="Electrical"
                                    className="w-full h-32 lg:h-64 object-cover"
                                />
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="rounded-lg lg:rounded-2xl overflow-hidden"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80"
                                    alt="Mechanical"
                                    className="w-full h-32 lg:h-64 object-cover"
                                />
                            </motion.div>
                        </div>

                        {/* Experience Badge */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: 'spring' }}
                            className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-20 h-20 lg:w-32 lg:h-32 rounded-full bg-[#00A3E0] flex flex-col items-center justify-center text-white shadow-2xl"
                        >
                            <span className="text-xl lg:text-3xl font-bold">15+</span>
                            <span className="text-[10px] lg:text-xs">Years</span>
                        </motion.div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
                            Delivering Excellence in Engineering Solutions
                        </h2>

                        <p className="text-gray-700 text-sm lg:text-lg mb-4 lg:mb-6 leading-relaxed">
                            No matter how many hours we're in the field, the magic never fades.
                            Nothing compares to the satisfaction of completing a project that
                            exceeds expectations. From day one, we have put our passion for
                            engineering and quality into finding ever-better solutions.
                        </p>

                        <div className="mb-4 lg:mb-8">
                            <p className={`text-gray-600 text-xs lg:text-base ${!isExpanded ? 'line-clamp-2 lg:line-clamp-none' : ''}`}>
                                We have built – and continue to create – solutions that push the
                                boundaries of engineering performance to take the customer
                                experience to the next level. The requirements for engineering
                                continue to evolve. They need to be more efficient, sustainable,
                                and reliable while delivering superior performance.
                            </p>
                            {/* Read More button - only visible on mobile */}
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-[#0084CA] text-xs font-medium mt-2 lg:hidden hover:underline"
                            >
                                {isExpanded ? 'Read Less' : 'Read More'}
                            </button>
                        </div>

                        <Link href={createPageUrl('About')}>
                            <button className="bg-[#0084CA] hover:bg-[#006BA6] text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-medium flex items-center gap-2 transition-colors text-sm lg:text-base">
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