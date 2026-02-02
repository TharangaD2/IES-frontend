'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import {
    Flame,
    Droplet,
    Wind,
    Shield,
    Settings,
    Truck
} from 'lucide-react'

type Service = {
    icon: LucideIcon
    title: string
    description: string
    color: string
}

const services: Service[] = [
    {
        icon: Flame,
        title: 'Fire Detection Systems',
        description:
            'Wireless and conventional fire detection solutions for all building types.',
        color: '#E91E63'
    },
    {
        icon: Droplet,
        title: 'Water Leak Detection',
        description:
            'Advanced sensors and monitoring systems to prevent water damage.',
        color: '#00A3E0'
    },
    {
        icon: Wind,
        title: 'Smoke Curtain Systems',
        description:
            'Automatic smoke curtains for improved fire safety and evacuation.',
        color: '#F5A623'
    },
    {
        icon: Shield,
        title: 'Safety Equipment',
        description:
            'Complete range of safety products for commercial and industrial use.',
        color: '#00D4AA'
    },
    {
        icon: Settings,
        title: 'Installation & Commissioning',
        description:
            'Professional installation, testing, and commissioning services.',
        color: '#9C27B0'
    },
    {
        icon: Truck,
        title: 'Product Supply',
        description:
            'Nationwide supply of electrical, mechanical, and plumbing products.',
        color: '#FF5722'
    }
]

const ServicesSection: React.FC = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        Upcoming events
                    </h2>
                    <div className="w-16 h-1 bg-[#0084CA]" />
                </motion.div>

                {/* Events Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.slice(0, 3).map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-start gap-3 mb-4">
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ backgroundColor: `${service.color}20` }}
                                >
                                    <service.icon
                                        className="w-6 h-6"
                                        style={{ color: service.color }}
                                    />
                                </div>

                                <div>
                                    <div className="text-sm text-gray-500 mb-1">
                                        Jan 2025 • Event
                                    </div>
                                    <h3 className="font-bold text-gray-900">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>

                            <p className="text-gray-600 text-sm">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* View All Events */}
                <div className="text-center mt-12">
                    <button className="border-2 border-[#0084CA] text-[#0084CA] hover:bg-[#0084CA] hover:text-white px-8 py-3 rounded-full font-medium transition-colors">
                        Show all events
                    </button>
                </div>

            </div>
        </section>
    )
}

export default ServicesSection
