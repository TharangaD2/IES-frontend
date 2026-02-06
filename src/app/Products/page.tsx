'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Wrench, Droplets, Search, Filter, ChevronDown, ArrowRight, Check, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { createPageUrl } from '@/utils';
import Navbar from '@/components/ui/navBar';
import Footer from '@/components/ui/footer';
import { Textarea } from '@/components/ui/textArea';
import { Label } from '@/components/ui/label';
import { Send, CheckCircle2, MessageSquare } from 'lucide-react';
import Partners from '@/components/ui/partners';

type Category = {
    id: string;
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    color?: string;
    description?: string;
};

type Product = {
    id: number;
    name: string;
    category: string;
    description: string;
    features: string[];
    image: string;
};

const categories: Category[] = [
    {
        id: 'all',
        name: 'All Products',
        icon: Filter,
    },
    {
        id: 'electrical',
        name: 'Electrical',
        icon: Zap,
        color: '#00A3E0',
        description: 'Advanced electrical systems and fire safety solutions',
    },
    {
        id: 'mechanical',
        name: 'Mechanical',
        icon: Wrench,
        color: '#F5A623',
        description: 'HVAC, smoke curtains, and ventilation systems',
    },
    {
        id: 'plumbing',
        name: 'Plumbing',
        icon: Droplets,
        color: '#00D4AA',
        description: 'Pipes, fittings, valves, and water detection',
    },
];

const products: Product[] = [
    {
        id: 1,
        name: 'Wireless Fire Detection System',
        category: 'electrical',
        description: 'Advanced wireless fire detection for commercial buildings',
        features: ['Wireless connectivity', 'Real-time monitoring', 'Easy installation'],
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    },
    {
        id: 2,
        name: 'Conventional Fire Alarm Panel',
        category: 'electrical',
        description: 'Reliable fire alarm control panel for zone-based detection',
        features: ['Multiple zones', 'Battery backup', 'LED indicators'],
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
    },
    {
        id: 3,
        name: 'Smoke Detectors',
        category: 'electrical',
        description: 'High-sensitivity smoke detection units',
        features: ['Optical detection', 'Low power', 'Wide coverage'],
        image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
    },
    {
        id: 4,
        name: 'Heat Detectors',
        category: 'electrical',
        description: 'Temperature-based fire detection systems',
        features: ['Rate-of-rise', 'Fixed temperature', 'Industrial grade'],
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    },
    {
        id: 5,
        name: 'Automatic Smoke Curtains',
        category: 'mechanical',
        description: 'Fire-rated automatic smoke barrier systems',
        features: ['Auto deployment', 'Fire rated', 'Custom sizes'],
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80',
    },
    {
        id: 6,
        name: 'HVAC Components',
        category: 'mechanical',
        description: 'Quality heating, ventilation, and air conditioning parts',
        features: ['Energy efficient', 'Durable', 'Various sizes'],
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
    },
    {
        id: 7,
        name: 'Ventilation Fans',
        category: 'mechanical',
        description: 'Industrial and commercial ventilation solutions',
        features: ['High airflow', 'Low noise', 'Multiple speeds'],
        image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80',
    },
    {
        id: 8,
        name: 'Fire Dampers',
        category: 'mechanical',
        description: 'Automatic fire dampers for duct systems',
        features: ['UL listed', 'Fusible link', 'Manual reset'],
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80',
    },
    {
        id: 9,
        name: 'Water Leak Detection System',
        category: 'plumbing',
        description: 'Advanced sensors for water leak monitoring',
        features: ['Instant alerts', 'Wireless sensors', 'App control'],
        image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80',
    },
    {
        id: 10,
        name: 'High Pressure Valves',
        category: 'plumbing',
        description: 'Industrial-grade valves for fire and water systems',
        features: ['High pressure rated', 'Corrosion resistant', 'Long life'],
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',
    },
    {
        id: 11,
        name: 'Seamless GI Pipes',
        category: 'plumbing',
        description: 'Galvanized iron pipes for fire and plumbing systems',
        features: ['Seamless construction', 'Various diameters', 'Corrosion proof'],
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    },
    {
        id: 12,
        name: 'Pipe Fittings',
        category: 'plumbing',
        description: 'Complete range of pipe fittings and connectors',
        features: ['Multiple materials', 'All sizes', 'Quality tested'],
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80',
    },
];

export default function Products() {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [inquireProduct, setInquireProduct] = useState<Product | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const openInquireModal = (product: Product) => {
        setInquireProduct(product);
        setFormData({
            ...formData,
            message: `I'm interested in ${product.name}...`
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', phone: '', message: '' });
            setInquireProduct(null);
            setSelectedProduct(null);
        }, 3000);
    };

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const category = params.get('category');
        if (category && categories.find((c) => c.id === category)) {
            setActiveCategory(category);
        }
    }, []);

    const filteredProducts = products.filter((product) => {
        const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
        const matchesSearch =
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const getCategoryColor = (categoryId: string): string => {
        const cat = categories.find((c) => c.id === categoryId);
        return cat?.color || '#00A3E0';
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-[#0A1628] overflow-hidden min-h-screen flex items-center">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/vedio/mechanical.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* Dark Overlay for legibility */}
                    <div className="absolute inset-0 bg-[#0A1628]/70" />
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
                        <span className="inline-block px-4 py-2 rounded-full bg-[#00A3E0]/10 text-[#00A3E0] text-sm font-medium mb-6">
                            Our Products
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Quality Engineering <span className="text-[#00A3E0]"> Products</span>
                        </h1>
                        <p className="text-xl text-gray-300">
                            Explore our comprehensive range of electrical, mechanical, and plumbing solutions designed for commercial
                            and industrial applications.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filters Section */}
            <section className="sticky top-20 z-30 bg-white border-b shadow-sm">
                <div className="container mx-auto px-6 lg:px-12 py-4">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Categories */}
                        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                    ${activeCategory === category.id
                                            ? 'bg-[#00A3E0] text-white shadow-lg shadow-[#00A3E0]/30'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    <category.icon className="w-4 h-4" />
                                    {category.name}
                                </button>
                            ))}
                        </div>

                        {/* Search */}
                        <div className="relative w-full md:w-72">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 bg-gray-50 border-gray-200 focus:bg-white transition-all rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-12 bg-gray-50 min-h-[600px]">
                <div className="container mx-auto px-6 lg:px-12">
                    <AnimatePresence mode="popLayout">
                        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
                            {filteredProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer"
                                    onMouseEnter={() => setHoveredProduct(product.id)}
                                    onMouseLeave={() => setHoveredProduct(null)}
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    {/* Image */}
                                    <div className="relative h-48 overflow-hidden bg-gray-100">
                                        <div className="absolute top-3 left-3 z-10">
                                            <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 shadow-sm">
                                                {categories.find(c => c.id === product.category)?.name}
                                            </Badge>
                                        </div>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-3 lg:p-5">
                                        <div className="mb-2 lg:mb-3">
                                            <h3 className="font-bold text-gray-900 group-hover:text-[#00A3E0] transition-colors mb-1 text-sm lg:text-base">
                                                {product.name}
                                            </h3>
                                            <p className="text-xs lg:text-sm text-gray-500 line-clamp-2">
                                                {product.description}
                                            </p>
                                        </div>

                                        <div className="space-y-2 mb-4">
                                            {product.features.slice(0, 2).map((feature, i) => (
                                                <div key={i} className="flex items-center text-xs text-gray-500">
                                                    <Check className="w-3 h-3 text-green-500 mr-2" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-3 lg:pt-4 border-t border-gray-50 flex items-center justify-between">
                                            <span className="text-[10px] lg:text-xs font-medium text-gray-400">
                                                ID: {product.id.toString().padStart(4, '0')}
                                            </span>
                                            <Button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    openInquireModal(product);
                                                }}
                                                size="sm"
                                                className="bg-[#00A3E0] hover:bg-[#0091c8] text-white rounded-full px-3 lg:px-4 text-[10px] lg:text-xs py-1 lg:py-2"
                                            >
                                                Inquire
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Bottom highlight bar */}
                                    <div
                                        className="h-1 w-0 group-hover:w-full transition-all duration-300 ease-out"
                                        style={{ backgroundColor: getCategoryColor(product.category) }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </AnimatePresence>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Search className="w-8 h-8 text-gray-400" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">No products found</h3>
                            <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                            <Button
                                variant="outline"
                                className="mt-4"
                                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                            >
                                Clear filters
                            </Button>
                        </div>
                    )}
                </div>
            </section>

            {/* PRODUCT MODAL */}
            <AnimatePresence>
                {
                    selectedProduct && !inquireProduct && (
                        <motion.div
                            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedProduct(null)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                            >
                                {/* Image Section */}
                                <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
                                    <img
                                        src={selectedProduct.image}
                                        alt={selectedProduct.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10" />

                                    <button
                                        onClick={() => setSelectedProduct(null)}
                                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition-colors md:hidden"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Content Section */}
                                <div className="flex-1 p-8 overflow-y-auto bg-white relative">
                                    <button
                                        onClick={() => setSelectedProduct(null)}
                                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hidden md:flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>

                                    <div className="mb-6">
                                        <Badge
                                            className="mb-3"
                                            style={{
                                                backgroundColor: `${getCategoryColor(selectedProduct.category)}20`,
                                                color: getCategoryColor(selectedProduct.category)
                                            }}
                                        >
                                            {categories.find(c => c.id === selectedProduct.category)?.name}
                                        </Badge>
                                        <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mb-2">
                                            {selectedProduct.name}
                                        </h2>
                                        <p className="text-gray-600 leading-relaxed">
                                            {selectedProduct.description}
                                        </p>
                                    </div>

                                    <div className="mb-8">
                                        <h4 className="font-bold text-[#0A1628] mb-4 flex items-center gap-2">
                                            <Zap className="w-4 h-4 text-[#00A3E0]" />
                                            Key Features
                                        </h4>
                                        <div className="grid gap-3">
                                            {selectedProduct.features.map((feature, i) => (
                                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                                        <Check className="w-3 h-3 text-green-600" />
                                                    </div>
                                                    <span className="text-gray-700 text-sm font-medium">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-gray-100">
                                        <div className="flex flex-col gap-3">
                                            <p className="text-sm text-gray-400 text-center mb-2">
                                                Interested in this product?
                                            </p>
                                            <Button
                                                onClick={() => {
                                                    openInquireModal(selectedProduct);
                                                }}
                                                className="w-full bg-[#00A3E0] hover:bg-[#0091c8] text-white rounded-xl py-6 text-lg font-medium shadow-lg shadow-[#00A3E0]/20 hover:shadow-[#00A3E0]/40 transition-all"
                                            >
                                                Inquire Now
                                                <ArrowRight className="ml-2 w-5 h-5" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )
                }
            </AnimatePresence >

            {/* INQUIRE MODAL */}
            <AnimatePresence>
                {
                    inquireProduct && (
                        <motion.div
                            className="fixed inset-0 bg-black/80 z-[60] flex items-center justify-center p-4"
                            onClick={() => setInquireProduct(null)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                            >
                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-xl bg-[#00A3E0]/10 flex items-center justify-center">
                                                <MessageSquare className="w-6 h-6 text-[#00A3E0]" />
                                            </div>
                                            <div>
                                                <h2 className="text-2xl font-bold text-[#0A1628]">Product Inquiry</h2>
                                                <p className="text-gray-500 text-sm">{inquireProduct.name}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => setInquireProduct(null)}
                                            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
                                        >
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>

                                    {isSubmitted ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-12"
                                        >
                                            <div className="w-20 h-20 rounded-full bg-[#00D4AA]/20 flex items-center justify-center mx-auto mb-6">
                                                <CheckCircle2 className="w-10 h-10 text-[#00D4AA]" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-[#0A1628] mb-2">Thank You!</h3>
                                            <p className="text-gray-500">Your inquiry has been sent successfully.</p>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div className="space-y-1.5">
                                                <Label htmlFor="modal-name" className="text-sm">Full Name *</Label>
                                                <Input
                                                    id="modal-name"
                                                    required
                                                    placeholder="John Doe"
                                                    className="rounded-xl"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-1.5">
                                                    <Label htmlFor="modal-email" className="text-sm">Email *</Label>
                                                    <Input
                                                        id="modal-email"
                                                        type="email"
                                                        required
                                                        placeholder="john@example.com"
                                                        className="rounded-xl"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    />
                                                </div>
                                                <div className="space-y-1.5">
                                                    <Label htmlFor="modal-phone" className="text-sm">Phone *</Label>
                                                    <Input
                                                        id="modal-phone"
                                                        required
                                                        placeholder="+94 XX XXX XXXX"
                                                        className="rounded-xl"
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-1.5">
                                                <Label htmlFor="modal-message" className="text-sm">Message *</Label>
                                                <Textarea
                                                    id="modal-message"
                                                    required
                                                    className="rounded-xl min-h-[100px]"
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                />
                                            </div>
                                            <Button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-[#00A3E0] hover:bg-[#0091c8] text-white rounded-xl py-6 font-medium mt-2"
                                            >
                                                {isSubmitting ? "Sending..." : "Send Inquiry"}
                                            </Button>
                                        </form>
                                    )}
                                </div>
                            </motion.div>
                        </motion.div>
                    )
                }
            </AnimatePresence >
            <Partners />

            <Footer />
        </div >
    );
}
