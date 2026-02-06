'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MapPin,
    Building2,
    Calendar,
    Users,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    X,
    Link,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { createPageUrl } from "@/utils";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navBar";

/* ---------------------------
   TYPES
--------------------------- */
interface Project {
    id: number;
    title: string;
    location: string;
    category: string;
    year: string;
    client: string;
    description: string;
    scope: string[];
    image: string;
    gallery: string[];
}

/* ---------------------------
   DATA
--------------------------- */
const projects: Project[] = [
    {
        id: 1,
        title: "Barberyn Beach Ayurveda Resort",
        location: "Weligama, Sri Lanka",
        category: "Fire Safety",
        year: "2023",
        client: "Southern Fire Pvt Ltd",
        description:
            "Supply Installation Testing and Commissioning of Wireless Fire Detection System for this premium resort property.",
        scope: [
            "Wireless Fire Detection",
            "System Integration",
            "Testing & Commissioning",
        ],
        image:
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
            "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
        ],
    },
    {
        id: 2,
        title: "Grand Hyatt Colombo",
        location: "Colombo, Sri Lanka",
        category: "Multiple Systems",
        year: "2023",
        client: "Direct",
        description:
            "Comprehensive supply and installation of multiple safety systems including automatic smoke curtains, GI pipes, and high-pressure valves.",
        scope: [
            "Smoke Curtain Systems",
            "GI Pipes & Fittings",
            "High Pressure Valves",
            "Fire System Components",
        ],
        image:
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80",
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80",
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80",
        ],
    },
    {
        id: 3,
        title: "Pearson Lanka - MAGA ONE",
        location: "Narahenpitiya, Sri Lanka",
        category: "Water Safety",
        year: "2022",
        client: "Maga Engineering Pvt Ltd",
        description:
            "Complete water leak detection system installation for this modern commercial complex.",
        scope: [
            "Water Leak Detection",
            "Sensor Installation",
            "Monitoring System",
        ],
        image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
        ],
    },
    {
        id: 4,
        title: "Radisson City Hotel",
        location: "Colombo, Sri Lanka",
        category: "Plumbing",
        year: "2022",
        client: "Tudawe Engineering Pvt Ltd",
        description:
            "Supply of high-quality valves for the complete plumbing system of this luxury hotel.",
        scope: ["Plumbing Valves", "Quality Testing", "Technical Support"],
        image:
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80",
        ],
    },
];

const categoryColors: Record<string, string> = {
    "Fire Safety": "#E91E63",
    "Water Safety": "#00A3E0",
    Plumbing: "#00D4AA",
    "Multiple Systems": "#F5A623",
};


export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [filter, setFilter] = useState<string>("all");
    const [galleryIndex, setGalleryIndex] = useState<number>(0);

    const filteredProjects =
        filter === "all"
            ? projects
            : projects.filter((p) => p.category === filter);

    const categories = ["all", ...new Set(projects.map((p) => p.category))];

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
                        <source src="/vedio/Projects.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* Dark Overlay for legibility */}
                    <div className="absolute inset-0 bg-[#0A1628]/70" />
                </div>

                <div className="container mx-auto px-6 lg:px-12 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="inline-block px-4 py-2 rounded-full bg-[#00A3E0]/10 text-[#00A3E0] text-sm font-medium mb-6">
                            Our Projects
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Engineering Excellence
                            <span className="text-[#00A3E0]"> Delivered</span>
                        </h1>
                        <p className="text-xl text-gray-300">
                            From luxury hotels to commercial complexes, we deliver quality engineering
                            solutions across Sri Lanka.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="sticky top-20 z-30 bg-white border-b shadow-sm">
                <div className="container mx-auto px-6 lg:px-12 py-4">
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${filter === category
                                    ? 'bg-[#00A3E0] text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {category === 'all' ? 'All Projects' : category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => {
                                        setSelectedProject(project);
                                        setGalleryIndex(0);
                                    }}
                                    className="group cursor-pointer"
                                >
                                    <div className="relative h-80 rounded-2xl overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/30 to-transparent" />

                                        {/* Category Badge */}
                                        <Badge
                                            className="absolute top-4 left-4"
                                            style={{
                                                backgroundColor: categoryColors[project.category] || '#00A3E0',
                                                color: 'white'
                                            }}
                                        >
                                            {project.category}
                                        </Badge>

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6">
                                            <div className="flex items-center gap-2 text-white/70 text-sm mb-2">
                                                <MapPin className="w-4 h-4" />
                                                {project.location}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00A3E0] transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-white/60 text-sm line-clamp-2">{project.description}</p>
                                        </div>

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-[#00A3E0]/0 group-hover:bg-[#00A3E0]/20 transition-colors flex items-center justify-center">
                                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center">
                                                    <ArrowRight className="w-6 h-6 text-[#0A1628]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* PROJECT MODAL */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            {/* Gallery */}
                            <div className="relative h-80 md:h-96">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={galleryIndex}
                                        src={selectedProject.gallery[galleryIndex]}
                                        alt={selectedProject.title}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="w-full h-full object-cover"
                                    />
                                </AnimatePresence>

                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                {/* Gallery Navigation */}
                                {selectedProject.gallery.length > 1 && (
                                    <>
                                        <button
                                            onClick={() => setGalleryIndex((prev) => (prev === 0 ? selectedProject.gallery.length - 1 : prev - 1))}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                                        >
                                            <ChevronLeft className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={() => setGalleryIndex((prev) => (prev === selectedProject.gallery.length - 1 ? 0 : prev + 1))}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                                        >
                                            <ChevronRight className="w-5 h-5" />
                                        </button>
                                    </>
                                )}

                                {/* Gallery Dots */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                    {selectedProject.gallery.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setGalleryIndex(i)}
                                            className={`w-2 h-2 rounded-full transition-all ${i === galleryIndex ? 'bg-white w-6' : 'bg-white/50'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <Badge
                                    className="mb-4"
                                    style={{
                                        backgroundColor: `${categoryColors[selectedProject.category]}20`,
                                        color: categoryColors[selectedProject.category]
                                    }}
                                >
                                    {selectedProject.category}
                                </Badge>

                                <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mb-4">
                                    {selectedProject.title}
                                </h2>

                                <div className="flex flex-wrap gap-6 mb-6 text-gray-500">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-5 h-5 text-[#00A3E0]" />
                                        {selectedProject.location}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-5 h-5 text-[#00A3E0]" />
                                        {selectedProject.year}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users className="w-5 h-5 text-[#00A3E0]" />
                                        {selectedProject.client}
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-6">{selectedProject.description}</p>

                                <div>
                                    <h4 className="font-bold text-[#0A1628] mb-3">Project Scope</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.scope.map((item, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t">
                                    <Link to={createPageUrl('Contact')}>
                                        <Button className="bg-[#00A3E0] hover:bg-[#0091c8] text-white rounded-full">
                                            Start Your Project
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Stats Section */}
            <section className="py-16 bg-[#0A1628]">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { value: '500+', label: 'Projects Completed' },
                            { value: '100+', label: 'Happy Clients' },
                            { value: '15+', label: 'Years Experience' },
                            { value: '24/7', label: 'Support Available' }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-[#00A3E0] mb-2">{stat.value}</div>
                                <div className="text-gray-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
