'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { createPageUrl } from '@/utils'

type HeroSlide = {
    title: string
    subtitle: string
    tagline: string
    description: string
    image: string
    cta: string
}

const heroSlides: HeroSlide[] = [
    {
        title: 'UNITED BY',
        subtitle: 'EXCELLENCE',
        tagline: 'Our Engineering Story',
        description:
            '100+ commercial and industrial projects trust Infinity Engineering Solutions.',
        image:
            'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1920&q=80',
        cta: 'Meet our products'
    },
    {
        title: 'ENGINEERING',
        subtitle: 'INNOVATION',
        tagline: 'Advanced Solutions',
        description:
            'Delivering cutting-edge fire safety and detection systems nationwide.',
        image:
            'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80',
        cta: 'View our projects'
    },
    {
        title: 'TRUSTED',
        subtitle: 'PARTNERS',
        tagline: 'Quality Assured',
        description:
            'Certified products and professional installation services across Sri Lanka.',
        image:
            'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80',
        cta: 'Contact us today'
    }
]

const HeroSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative mt-20 overflow-hidden bg-white">
            {/* Main Hero Container */}
            <div className="relative h-[600px] md:h-[700px]">
                {/* Background Images */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${heroSlides[currentSlide].image})`
                            }}
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </motion.div>
                </AnimatePresence>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex items-center">
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            {/* Left Side - Text */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 30 }}
                                    transition={{ duration: 0.6 }}
                                    className="text-white"
                                >
                                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 bg-gradient-to-r from-[#00D4AA] to-[#0084CA] bg-clip-text text-transparent">
                                        {heroSlides[currentSlide].title}
                                        <br />
                                        <span>
                                            {heroSlides[currentSlide].subtitle}
                                        </span>
                                    </h1>
                                    <p className="text-xl md:text-2xl font-light mb-8 uppercase tracking-wide bg-gradient-to-r from-[#00D4AA] to-[#0084CA] bg-clip-text text-transparent">
                                        {heroSlides[currentSlide].tagline}
                                    </p>
                                </motion.div>
                            </AnimatePresence>

                            {/* Right Side - Info Card */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentSlide}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.6 }}
                                    className="p-8 ml-auto max-w-md pt-80"
                                >
                                    <p className="text-white text-lg mb-6">
                                        {heroSlides[currentSlide].description}
                                    </p>

                                    <Link href={createPageUrl('Products')}>
                                        <button className="bg-[#0084CA] hover:bg-[#006BA6] text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-colors">
                                            {heroSlides[currentSlide].cta}
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </Link>


                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all ${index === currentSlide
                                ? 'w-8 bg-[#0084CA]'
                                : 'w-2 bg-white/50'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HeroSection
