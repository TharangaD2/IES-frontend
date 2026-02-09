'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Shield,
    Award,
    Target,
    Users,
    CheckCircle2,
    Building2,
    Lightbulb,
    Handshake,
    ArrowRight,
    LucideIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { createPageUrl } from '@/utils';
import Navbar from '@/components/ui/navBar';
import Footer from '@/components/ui/footer';

// ---------- Types ----------
interface ValueItem {
    icon: LucideIcon;
    title: string;
    description: string;
    color: string;
}

interface MilestoneItem {
    year: string;
    title: string;
    description: string;
}

// ---------- Data ----------
const values: ValueItem[] = [
    {
        icon: Shield,
        title: 'Quality Assurance',
        description: 'We never compromise on quality, sourcing only the best products from certified manufacturers.',
        color: '#00A3E0'
    },
    {
        icon: Lightbulb,
        title: 'Innovation',
        description: 'Staying ahead with the latest technology and engineering solutions in the market.',
        color: '#F5A623'
    },
    {
        icon: Handshake,
        title: 'Reliability',
        description: 'Building long-term relationships through consistent service and trustworthiness.',
        color: '#00D4AA'
    },
    {
        icon: Target,
        title: 'Excellence',
        description: 'Striving for excellence in every project, big or small, across all sectors.',
        color: '#E91E63'
    }
];

const milestones: MilestoneItem[] = [
    { year: '2008', title: 'Company Founded', description: 'Started operations in Dehiwala, Sri Lanka' },
    { year: '2012', title: 'First Major Project', description: 'Completed first large-scale hotel installation' },
    { year: '2016', title: 'Expanded Product Line', description: 'Added mechanical and plumbing solutions' },
    { year: '2020', title: '500+ Projects', description: 'Milestone of 500 successful project completions' },
    { year: '2023', title: 'Market Leader', description: 'Recognized as a leading engineering solutions provider' }
];

const certifications: string[] = [
    'ISO 9001:2015 Certified',
    'Fire Safety Standards Compliant',
    'Authorized Distributor Network',
    'Professional Engineering Association Member'
];

// ---------- Component ----------
export default function About() {
    const [missionExpanded, setMissionExpanded] = useState(false)
    const [visionExpanded, setVisionExpanded] = useState(false)

    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 bg-[#0A1628] overflow-hidden min-h-screen flex items-center">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/vedio/Newproject.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* Dark Overlay for legibility */}
                    <div className="absolute inset-0 bg-[#0A1628]/70" />
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                        >


                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Engineering Excellence <span className="text-[#00A3E0]">Since 2008</span>
                            </h1>

                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Infinity Engineering Solutions (Pvt) Ltd is a trusted provider of electrical,
                                mechanical, and plumbing solutions across Sri Lanka.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link href={createPageUrl('Contact')}>
                                    <Button className="bg-[#00A3E0] hover:bg-[#0091c8] text-white rounded-full px-8">
                                        Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </Link>

                                <Link href={createPageUrl('Projects')}>
                                    <Button
                                        variant="outline"
                                        className="border-white/30 text-black hover:bg-white/10 rounded-full px-8"
                                    >
                                        View Projects
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>

                        {/* Hero Images */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="relative hidden lg:block"
                        >
                            {/* Grid of images */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80",
                                    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80",
                                    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80",
                                    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80"
                                ].map((src, i) => (
                                    <motion.img
                                        key={i}
                                        whileHover={{ scale: 1.02 }}
                                        src={src}
                                        alt="Engineering"
                                        className={`rounded-2xl h-48 object-cover ${i === 1 ? "mt-8" : ""} ${i === 2 ? "-mt-8" : ""}`}
                                    />
                                ))}
                            </div>

                            {/* Years Badge */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.6, type: "spring" }}
                                className="absolute -bottom-6 -left-6 w-28 h-28 rounded-2xl bg-[#00A3E0] text-white flex flex-col justify-center items-center"
                            >
                                <span className="text-3xl font-bold">15+</span>
                                <span className="text-xs">Years</span>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-12 lg:py-24 bg-white">
                <div className="container mx-auto px-4 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-6 lg:p-10 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-[#00A3E0]/10 to-transparent border border-[#00A3E0]/20"
                        >
                            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-[#00A3E0]/20 flex items-center justify-center mb-4 lg:mb-6">
                                <Target className="w-6 h-6 lg:w-8 lg:h-8 text-[#00A3E0]" />
                            </div>
                            <h3 className="text-lg lg:text-2xl font-bold text-[#0A1628] mb-3 lg:mb-4">Our Mission</h3>
                            <div>
                                <p className={`text-gray-600 leading-relaxed text-xs lg:text-base ${!missionExpanded ? 'line-clamp-3 lg:line-clamp-none' : ''}`}>
                                    To provide an unparalleled customer experience by offering quality products and
                                    customized solutions to meet the specific needs of our clients. We are committed to
                                    delivering exceptional value through competitive pricing, accessibility, quick
                                    response times, and certified products.
                                </p>
                                <button
                                    onClick={() => setMissionExpanded(!missionExpanded)}
                                    className="text-[#00A3E0] text-xs font-medium mt-2 lg:hidden hover:underline"
                                >
                                    {missionExpanded ? 'Read Less' : 'Read More'}
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-6 lg:p-10 rounded-2xl lg:rounded-3xl bg-gradient-to-br from-[#F5A623]/10 to-transparent border border-[#F5A623]/20"
                        >
                            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl bg-[#F5A623]/20 flex items-center justify-center mb-4 lg:mb-6">
                                <Lightbulb className="w-6 h-6 lg:w-8 lg:h-8 text-[#F5A623]" />
                            </div>
                            <h3 className="text-lg lg:text-2xl font-bold text-[#0A1628] mb-3 lg:mb-4">Our Vision</h3>
                            <div>
                                <p className={`text-gray-600 leading-relaxed text-xs lg:text-base ${!visionExpanded ? 'line-clamp-3 lg:line-clamp-none' : ''}`}>
                                    To be the leading engineering solutions provider in Sri Lanka, recognized for
                                    innovation, reliability, and excellence. We aim to expand our reach while maintaining
                                    the highest standards of quality and customer satisfaction that have defined our
                                    success.
                                </p>
                                <button
                                    onClick={() => setVisionExpanded(!visionExpanded)}
                                    className="text-[#F5A623] text-xs font-medium mt-2 lg:hidden hover:underline"
                                >
                                    {visionExpanded ? 'Read Less' : 'Read More'}
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-12 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8 lg:mb-16"
                    >
                        <span className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 rounded-full bg-[#00A3E0]/10 text-[#00A3E0] text-xs lg:text-sm font-medium mb-3 lg:mb-4">
                            Our Values
                        </span>
                        <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-[#0A1628]">
                            What Drives Us Forward
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="p-4 lg:p-8 rounded-2xl lg:rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all"
                            >
                                <div
                                    className="w-10 h-10 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center mb-3 lg:mb-6"
                                    style={{ backgroundColor: `${value.color}15` }}
                                >
                                    <value.icon className="w-5 h-5 lg:w-7 lg:h-7" style={{ color: value.color }} />
                                </div>
                                <h3 className="text-sm lg:text-xl font-bold text-[#0A1628] mb-2 lg:mb-3">{value.title}</h3>
                                <p className="text-gray-500 text-xs lg:text-base">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 bg-[#0A1628]">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-[#00A3E0]/10 text-[#00A3E0] text-sm font-medium mb-4">
                            Our Journey
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Milestones & Achievements
                        </h2>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-[#00A3E0]/30 hidden lg:block" />

                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                            >
                                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                    <div className={`inline-block p-6 rounded-2xl bg-white/5 border border-white/10 ${index % 2 === 0 ? 'lg:ml-auto' : ''
                                        }`}>
                                        <span className="text-[#00A3E0] font-bold text-lg">{milestone.year}</span>
                                        <h4 className="text-xl font-bold text-white mt-2">{milestone.title}</h4>
                                        <p className="text-gray-400 mt-1">{milestone.description}</p>
                                    </div>
                                </div>

                                {/* Center Point */}
                                <div className="hidden lg:flex w-4 h-4 rounded-full bg-[#00A3E0] border-4 border-[#0A1628] z-10" />

                                <div className="flex-1 hidden lg:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-[#00A3E0]/10 text-[#00A3E0] text-sm font-medium mb-6">
                                Certifications
                            </span>
                            <h2 className="text-4xl font-bold text-[#0A1628] mb-6">
                                Certified Excellence
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Our commitment to quality is backed by industry certifications and partnerships
                                with leading manufacturers worldwide.
                            </p>
                            <div className="space-y-4">
                                {certifications.map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-[#00D4AA]/20 flex items-center justify-center">
                                            <CheckCircle2 className="w-5 h-5 text-[#00D4AA]" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{cert}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                                alt="Team"
                                className="rounded-3xl w-full h-[400px] object-cover"
                            />
                            <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-[#00A3E0] text-white max-w-xs">
                                <div className="text-4xl font-bold mb-2">100%</div>
                                <div className="text-white/80">Customer Satisfaction Rate</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl font-bold text-[#0A1628] mb-6">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-gray-600 text-lg mb-8">
                            Partner with IES for reliable engineering solutions backed by years of expertise
                            and a commitment to excellence.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href={createPageUrl('Contact')}>
                                <Button className="bg-[#00A3E0] hover:bg-[#0091c8] text-white rounded-full px-8 py-6">
                                    Contact Us Today
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href={createPageUrl('Products')}>
                                <Button variant="outline" className="border-[#0A1628] text-[#0A1628] hover:bg-[#0A1628] hover:text-white rounded-full px-8 py-6">
                                    Browse Products
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
            <Footer />

        </div>
    );
}
