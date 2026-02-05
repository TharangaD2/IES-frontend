'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { createPageUrl } from '@/utils'
import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Linkedin,
    Instagram
} from 'lucide-react'
import { Input } from './input'
import { Button } from './button'
import type { LucideIcon } from 'lucide-react'
import AnimatedBubbleParticles from './animated-bubble-particles'


type QuickLink = {
    name: string
    path: string
}

const quickLinks: QuickLink[] = [
    { name: 'Home', path: 'Home' },
    { name: 'Products', path: 'Products' },
    { name: 'Projects', path: 'Projects' },
    { name: 'About Us', path: 'About' },
    { name: 'Contact', path: 'Contact' }
]

const products: string[] = [
    'Electrical Systems',
    'Mechanical Products',
    'Plumbing Solutions',
    'Fire Detection',
    'Safety Equipment'
]

const socialIcons: LucideIcon[] = [Facebook, Linkedin, Instagram]

const Footer: React.FC = () => {
    return (
        <footer className="footer-container">
            <AnimatedBubbleParticles
                backgroundColor="#111827" // Matches bg-gray-900
                particleColor="#05a3f93b" // Matches your brand color
                className="pt-12 pb-6"
                spawnInterval={200}
                particleSize={25}
            >
                <div className="container mx-auto px-6 lg:px-12 relative z-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
                        {/* Company Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <img
                                    src="/img/IES-LOGO.png"
                                    alt="IES Logo"
                                    className="h-10 w-auto"
                                />
                                <div>
                                    <div className="font-bold text-white text-lg">
                                        Infinity
                                    </div>
                                    <div className="text-xs text-gray-400">
                                        Engineering Solutions
                                    </div>
                                </div>
                            </div>

                            <p className="text-gray-400 mb-4 leading-relaxed">
                                Providing quality engineering products and customized solutions
                                for contractors, institutions, and commercial properties across
                                Sri Lanka.
                            </p>

                            <div className="flex gap-3">
                                {socialIcons.map((Icon, index) => (
                                    <motion.a
                                        key={index}
                                        href="#"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#0084CA] transition-colors"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Quick Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h4 className="text-white font-bold text-lg mb-4">
                                Quick Links
                            </h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={createPageUrl(link.path)}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Products */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4 className="text-white font-bold text-lg mb-4">
                                Our Products
                            </h4>
                            <ul className="space-y-3">
                                {products.map((product) => (
                                    <li key={product}>
                                        <Link
                                            href={createPageUrl('Products')}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {product}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <h4 className="text-white font-bold text-lg mb-4">
                                Contact Us
                            </h4>
                            <ul className="space-y-4">
                                <li>
                                    <a
                                        href="tel:+94777554994"
                                        className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Phone className="w-5 h-5 text-[#0084CA] mt-0.5" />
                                        <div>
                                            <div>+94 77 755 4994</div>
                                            <div>+94 11 271 0458</div>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="mailto:Info@ies.lk"
                                        className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Mail className="w-5 h-5 text-[#0084CA]" />
                                        Info@ies.lk
                                    </a>
                                </li>

                                <li className="flex items-start gap-3 text-gray-400">
                                    <MapPin className="w-5 h-5 text-[#0084CA] mt-0.5" />
                                    <div>
                                        118G, Abeysekara Road,
                                        <br />
                                        Dehiwala, Sri Lanka
                                    </div>
                                </li>
                            </ul>
                        </motion.div>
                    </div>


                    {/* Copyright */}
                    <div className="border-t border-white/10 pt-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-gray-500 text-sm">
                                © {new Date().getFullYear()} Infinity Engineering Solutions (Pvt)
                                Ltd. All rights reserved.
                            </p>
                            <div className="flex gap-6">
                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-white text-sm transition-colors"
                                >
                                    Privacy Policy
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-500 hover:text-white text-sm transition-colors"
                                >
                                    Terms of Service
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </AnimatedBubbleParticles>
        </footer>
    )
}

export default Footer
