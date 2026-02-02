'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { createPageUrl } from '@/utils'

const CTASection: React.FC = () => {
    return (
        <section className="py-20 bg-gray-900 relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Left - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80"
                            alt="Products"
                            className="rounded-lg w-full h-80 object-cover"
                        />
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            IES genuine parts
                        </h2>

                        <h3 className="text-xl text-gray-300 mb-6">
                            Don&apos;t settle for less.
                        </h3>

                        <Link href={createPageUrl('Products')}>
                            <button className="bg-[#0084CA] hover:bg-[#006BA6] text-white px-8 py-4 rounded-full font-medium transition-colors">
                                Spare parts
                            </button>
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default CTASection
