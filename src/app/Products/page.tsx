'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Wrench, Droplets, Search, Filter, ChevronDown, ArrowRight, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { createPageUrl } from '@/utils';
import Navbar from '@/components/ui/navBar';
import Footer from '@/components/ui/footer';

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
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

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
            <section className="relative pt-32 pb-20 bg-[#0A1628] overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                'linear-gradient(#00A3E0 1px, transparent 1px), linear-gradient(90deg, #00A3E0 1px, transparent 1px)',
                            backgroundSize: '50px 50px',
                        }}
                    />
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
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredProducts.map((product) => (
                                <motion.div
                                    key={product.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                                    onMouseEnter={() => setHoveredProduct(product.id)}
                                    onMouseLeave={() => setHoveredProduct(null)}
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
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <Button variant="secondary" className="rounded-full bg-white text-[#0A1628] hover:bg-[#00A3E0] hover:text-white transition-colors">
                                                View Details
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <div className="mb-3">
                                            <h3 className="font-bold text-gray-900 group-hover:text-[#00A3E0] transition-colors mb-1">
                                                {product.name}
                                            </h3>
                                            <p className="text-sm text-gray-500 line-clamp-2">
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

                                        <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
                                            <span className="text-xs font-medium text-gray-400">
                                                ID: {product.id.toString().padStart(4, '0')}
                                            </span>
                                            <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#00A3E0] transition-colors">
                                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                                            </div>
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
            <Footer />
        </div>
    );
}
