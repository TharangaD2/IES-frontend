'use client'

import React from 'react'
import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { ArrowRight, Zap, Wrench, Droplets } from 'lucide-react'
import Link from 'next/link'
import { createPageUrl } from '@/utils'

type Product = {
    id: string
    title: string
    description: string
    icon: LucideIcon
    image: string
    color: string
    features: string[]
}

const products: Product[] = [
    {
        id: 'electrical',
        title: 'Electrical',
        description:
            'Advanced electrical systems, fire detection, and safety solutions for commercial and industrial applications.',
        icon: Zap,
        image:
            'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80',
        color: '#00A3E0',
        features: ['Fire Detection Systems', 'Electrical Panels', 'Safety Equipment']
    },
    {
        id: 'mechanical',
        title: 'Mechanical',
        description:
            'Complete mechanical solutions including HVAC, smoke curtains, and ventilation systems.',
        icon: Wrench,
        image:
            'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
        color: '#F5A623',
        features: ['Smoke Curtains', 'HVAC Systems', 'Ventilation']
    },
    {
        id: 'plumbing',
        title: 'Plumbing',
        description:
            'High-quality plumbing products including pipes, fittings, valves, and water leak detection systems.',
        icon: Droplets,
        image:
            'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80',
        color: '#00D4AA',
        features: ['Water Leak Detection', 'Valves & Fittings', 'GI Pipes']
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 }
    }
}

const ProductsSection: React.FC = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        BRING YOUR CHALLENGES.
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-light text-gray-700">
                        WE&apos;VE GOT THE SOLUTIONS.
                    </h3>
                    <div className="w-16 h-1 bg-[#0084CA] mt-6" />
                </motion.div>

                {/* Products Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={itemVariants}
                            className="group"
                        >
                            <Link
                                href={`${createPageUrl('Products')}?category=${product.id}`}
                            >
                                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                    {/* Image */}
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0084CA] transition-colors">
                                            {product.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            {product.description}
                                        </p>
                                        <div className="flex items-center text-[#0084CA] font-medium group-hover:gap-3 transition-all gap-2">
                                            <span>Learn more</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default ProductsSection
