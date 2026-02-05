'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createPageUrl } from '@/utils'
import { Menu, X, MapPin } from 'lucide-react'
import { Button } from './button'

type NavLink = {
    name: string
    path: string
}

const navLinks: NavLink[] = [
    { name: 'Home', path: 'Home' },
    { name: 'Products', path: 'Products' },
    { name: 'Projects', path: 'Projects' },
    { name: 'About', path: 'About' },
    { name: 'Contact', path: 'Contact' }
]

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isActive = (path: string): boolean => {
        const currentPage =
            pathname?.split('/').pop() || 'Home'

        return currentPage.toLowerCase() === path.toLowerCase()
    }

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
                    }`}
            >
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link
                            href={createPageUrl('Home')}
                            className="flex items-center gap-3"
                        >
                            <img
                                src="/img/IES-LOGO.png"
                                alt="IES Logo"
                                className="h-15 w-auto"
                            />
                            <div>
                                <div className={`font-bold text-lg transition-colors ${isScrolled ? 'text-[#0084CA]' : 'text-white'}`}>
                                    Infinity
                                </div>
                                <div className={`text-xs transition-colors ${isScrolled ? 'text-gray-600' : 'text-white/80'}`}>
                                    Engineering Solutions (Pvt) Ltd.
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    href={createPageUrl(link.path)}
                                    className={`px-4 py-2 text-sm font-medium transition-all ${isActive(link.path)
                                        ? (isScrolled ? 'text-[#0084CA]' : 'text-white border-b-2 border-white')
                                        : (isScrolled ? 'text-gray-700 hover:text-[#0084CA]' : 'text-white/90 hover:text-white')
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="hidden lg:flex items-center gap-2">
                            <Link
                                href={createPageUrl('Contact')}
                                className={`flex items-center gap-2 text-sm font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-[#0084CA]' : 'text-white/90 hover:text-white'}`}
                            >
                                <MapPin className={`w-4 h-4 transition-colors ${isScrolled ? 'text-[#0084CA]' : 'text-white'}`} />
                                Find Local Partners
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen((prev) => !prev)
                            }
                            className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-0 top-20 z-40 bg-white shadow-2xl lg:hidden"
                    >
                        <div className="container mx-auto px-6 py-6">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.path}
                                        href={createPageUrl(link.path)}
                                        onClick={() =>
                                            setIsMobileMenuOpen(false)
                                        }
                                        className={`py-3 px-4 rounded-xl font-medium transition-colors ${isActive(link.path)
                                            ? 'bg-[#00A3E0]/10 text-[#00A3E0]'
                                            : 'text-[#0A1628] hover:bg-gray-50'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                <Link
                                    href={createPageUrl('Contact')}
                                    onClick={() =>
                                        setIsMobileMenuOpen(false)
                                    }
                                >
                                    <Button className="w-full bg-[#00A3E0] hover:bg-[#0091c8] text-white rounded-full mt-4">
                                        Request a Quote
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
