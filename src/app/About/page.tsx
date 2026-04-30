'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        title: 'Customer Focus',
        description: 'Delivering reliable products and services that exceed client expectations.',
        color: '#00A3E0'
    },
    {
        icon: Lightbulb,
        title: 'Excellence',
        description: 'Striving for high standards in engineering quality, service delivery, and operational performance.',
        color: '#F5A623'
    },
    {
        icon: Handshake,
        title: 'Innovation',
        description: 'Continuously improving technologies and engineering practices to provide better solutions.',
        color: '#00D4AA'
    },
    {
        icon: Target,
        title: 'Partnership',
        description: 'Building long-term relationships with customers, suppliers, and industry partners.',
        color: '#E91E63'
    },
    {
        icon: Handshake,
        title: 'Integrity',
        description: 'Maintaining transparency, professionalism, and ethical standards in all business operations.',
        color: '#00D4AA'
    },
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

interface TeamMember {
    name: string;
    designation: string;
    description: string;
    fullDetails?: React.ReactNode;
}

const teamMembers: TeamMember[] = [
    {
        name: 'Abdul Hardi Jabir',
        designation: 'Director / Chief Business Officer – IES',
        description: 'Abdul Hardi Jabir is the Director and Chief Business Officer of IES',
        fullDetails: (
            <div className="text-gray-300 text-sm space-y-4">
                <p className="text-[#00D4AA] font-semibold text-xs leading-relaxed">
                    DBA,(Reading), MBA, PGDBM, CIM, SLIM, Dip. In Electronics (C&G), NCIT
                </p>
                <p>Abdul Hardi Jabir is the Director and Chief Business Officer of IES, bringing over 20 years of experience in power generation and distribution, lightning protection, earthing, and electrical infrastructure. He has held key positions in both local and international multinational organizations in Sri Lanka, contributing extensive industry expertise and strategic leadership.</p>
                <p>Under his guidance, IES has established strong partnerships with leading global brands, enabling the delivery of reliable, high-performance products and engineering solutions. He is committed to upholding quality, technical excellence, and long-term value for clients.</p>
                <p>Hardi Jabir, holds multiple academic and professional qualifications in Engineering, Business Management, and Marketing from universities locally and internationally, and is currently pursuing a Doctor of Business Administration (DBA) at Asia e University (AeU), Malaysia.</p>
                <p>A successful marketer with over 20 years of experience & proven reputation in Switchgear & Automation products, Industrial Diesel Engine Generators, Cable Management Systems, Lightning Protection & Loss preventive solutions.</p>
                <p>Experienced & Knowledgeable in both Electrical & Mechanical Engineering along with strategic management skills.</p>
                <p>Dynamic, energetic, visionary & team-oriented professional that successfully contributed towards organizational growth.</p>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 mt-4">
                    <h4 className="text-white font-semibold mb-3 text-sm">Professional Academic Summary</h4>
                    <ul className="space-y-2 text-xs text-gray-400">
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" /><span>Doctor of Business Administration (DBA) – Reading, Asia e University – Malaysia – 2021 - 2026</span></li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" /><span>Postgraduate Diploma in Professional Marketing (DipM) – Chartered Institute of Marketing (CIM - UK) – 2019 / 2020</span></li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" /><span>Master of Business Administration in Marketing (MBA) – Cardiff Metropolitan University – UK – 2018 / 2019</span></li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" /><span>Postgraduate Diploma in Business Management (PGDBM) – University of Colombo – 2016 / 2017</span></li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" /><span>Postgraduate Diploma in Marketing – Sri Lanka Institute of Marketing (SLIM) - 2007 / 2008</span></li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" /><span>Diploma in Electronics – City & Guilds Syllabus – Technical Educational Institute -Colombo 2002 / 2003</span></li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#00A3E0] shrink-0 mt-0.5" /><span>National Certificate for Industrial Technicians (NCIT) – Technical College – Ratmalana – 2000 / 2001</span></li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        name: 'Danushka Dhaham Mudalige',
        designation: 'Director – Sales and Marketing - IES',
        description: 'Danushka Dhaham Kuruppu Mudalige is a dynamic sales and marketing professional with a strong academic background.',
        fullDetails: (
            <div className="text-gray-300 text-sm space-y-4">
                <p>Danushka Dhaham Kuruppu Mudalige is a dynamic sales and marketing professional with a strong academic background. He holds an MBA in General from Asia e University, equipping him with strategic and commercial expertise to drive business growth, strengthen client relationships, and deliver high-quality, customer-focused solutions aligned with industry standards.</p>
            </div>
        )
    }
];

// ---------- Component ----------
export default function About() {
    const [missionExpanded, setMissionExpanded] = useState(false)
    const [visionExpanded, setVisionExpanded] = useState(false)
    const [popupMember, setPopupMember] = useState<number | null>(null)

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

            {/* Introduction Section */}
            <section className="py-16 lg:py-24 bg-gray-50 overflow-hidden">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative order-2 lg:order-1"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80" 
                                alt="IES Engineering Team" 
                                className="rounded-3xl shadow-2xl object-cover w-full h-[400px] lg:h-[600px]"
                            />
                            {/* Decorative background blurs */}
                            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#00A3E0]/20 rounded-full blur-3xl -z-10" />
                            <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#F5A623]/20 rounded-full blur-2xl -z-10" />
                            
                            {/* Floating Badge */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="absolute bottom-4 left-4 lg:bottom-8 lg:-left-8 bg-white p-6 rounded-2xl shadow-xl max-w-[220px]"
                            >
                                <div className="text-4xl font-bold text-[#00A3E0] mb-2">15+</div>
                                <div className="text-sm text-gray-600 font-medium leading-snug">Years of Engineering Excellence & Trust</div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-[#00A3E0]/10 text-[#00A3E0] text-sm font-medium mb-6">
                                About Us
                            </span>
                            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0A1628] mb-8 leading-tight">
                                Infinity Engineering Solutions (Pvt) Ltd
                            </h2>
                            
                            <div className="space-y-6 text-gray-600 text-base lg:text-lg leading-relaxed text-justify lg:text-left">
                                <p>
                                    Infinity Engineering Solutions (IES) is a dynamic engineering infrastructure company specializing in mechanical, electrical, and plumbing (MEP) solutions. Established in Sri Lanka, the company provides a comprehensive range of engineering products, services, and solutions to support modern building infrastructure development.
                                </p>
                                <p>
                                    Founded with a vision to deliver professional engineering solutions, IES has grown into a reliable partner for industries requiring high-quality engineering systems and solutions. The company combines technical expertise, strong supplier partnerships, and customer-focused services to deliver efficient and sustainable engineering solutions.
                                </p>
                                <p>
                                    IES focuses on delivering value through quality products, innovative technologies, and  reliable engineering services and solutions.The company continues to support projects across diverse sectors such as commercial, industrial, and construction.
                                </p>
                                <p>
                                    Through continuous innovation and dedication to excellence, IES aims to become a leading MEP solutions provider in the region while maintaining strong relationships across all stakeholders of the industry.
                                </p>
                            </div>
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
                                    Achieve sustainable growth within the MEP engineering industry.
                                    Create value for customers through innovative solutions, products, and services.
                                    Develop employee capabilities to create a high-performing organization.
                                    Continuously improve technologies and operational processes.
                                    Build strong partnerships with stakeholders.
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
                                    To become the most customer-focused and trusted engineering solutions provider in the Asian region, delivering innovative engineering solutions that meet customer needs at the right time, with the right quality and while being socially responsible.
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

                    <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] p-4 lg:p-8 rounded-2xl lg:rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all"
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

            {/* Management Team */}
            <section className="py-24 bg-[#0A1628]">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-[#00A3E0]/10 text-[#00A3E0] text-sm font-medium mb-6">
                            Leadership
                        </span>
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Our Management Team
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Guided by experienced leaders committed to engineering excellence and innovation.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                onMouseEnter={() => member.fullDetails && setPopupMember(index)}
                                onClick={() => member.fullDetails && setPopupMember(index)}
                                className="group relative bg-[#0F223D] border border-white/10 rounded-3xl overflow-hidden hover:border-[#00A3E0]/50 transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-[#00A3E0]/10 cursor-pointer"
                            >
                                {/* Decorative top border */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00A3E0] to-[#00D4AA] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="p-8 sm:p-10 flex flex-col flex-1">
                                    <div className="w-16 h-16 rounded-2xl bg-[#00A3E0]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                        <Users className="w-8 h-8 text-[#00A3E0]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                                    <p className="text-[#00D4AA] font-medium mb-6 text-sm tracking-wide uppercase">{member.designation}</p>
                                    <div className="w-12 h-px bg-white/20 mb-6" />
                                    <p className="text-gray-400 leading-relaxed text-sm sm:text-base flex-1">
                                        {member.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <AnimatePresence>
                        {popupMember !== null && teamMembers[popupMember].fullDetails && (
                            <motion.div
                                className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <div 
                                    className="absolute inset-0 bg-[#0A1628]/60 backdrop-blur-md cursor-pointer"
                                    onClick={() => setPopupMember(null)}
                                />
                                <motion.div
                                    className="relative bg-[#0F223D] border border-white/10 rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-y-auto p-8 shadow-2xl z-10 scrollbar-thin scrollbar-thumb-[#00A3E0]"
                                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                                    onMouseLeave={() => setPopupMember(null)}
                                >
                                    <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                                        <div className="w-16 h-16 rounded-2xl bg-[#00A3E0]/10 flex items-center justify-center shrink-0">
                                            <Users className="w-8 h-8 text-[#00A3E0]" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-white mb-1">{teamMembers[popupMember].name}</h3>
                                            <p className="text-[#00A3E0] font-medium text-sm tracking-wide uppercase">{teamMembers[popupMember].designation}</p>
                                        </div>
                                        <button 
                                            onClick={() => setPopupMember(null)}
                                            className="ml-auto w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                    {teamMembers[popupMember].fullDetails}
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>
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
