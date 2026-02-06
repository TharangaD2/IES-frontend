'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Link from 'next/link'
import { createPageUrl } from '@/utils'

type Project = {
    id: number
    title: string
    location: string
    category: string
    description: string
    client: string
    image: string
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Barberyn Beach Ayurveda Resort',
        location: 'Weligama, Sri Lanka',
        category: 'Fire Safety',
        description:
            'Supply Installation Testing and Commissioning of Wireless Fire Detection System',
        client: 'Southern Fire Pvt Ltd',
        image:
            'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80'
    },
    {
        id: 2,
        title: 'Grand Hyatt Colombo',
        location: 'Colombo, Sri Lanka',
        category: 'Multiple Systems',
        description:
            'Supply Installation Testing and Commissioning of Automatic Smoke Curtains System, Seamless GI Pipes and Fittings, High Pressure Valves',
        client: 'Direct',
        image:
            'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80'
    },
    {
        id: 3,
        title: 'Pearson Lanka - MAGA ONE',
        location: 'Narahenpitiya, Sri Lanka',
        category: 'Water Safety',
        description:
            'Supply Installation Testing and Commissioning of Water Leak Detection System',
        client: 'Maga Engineering Pvt Ltd',
        image:
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80'
    },
    {
        id: 4,
        title: 'Radisson City Hotel',
        location: 'Colombo, Sri Lanka',
        category: 'Plumbing',
        description: 'Supply of Valves for Plumbing System',
        client: 'Tudawe Engineering Pvt Ltd',
        image:
            'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80'
    }
]

const ProjectsSection: React.FC = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [activeProject] = useState<number>(0)

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        Latest news
                    </h2>
                    <div className="w-16 h-1 bg-[#0084CA]" />
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {projects.slice(0, 3).map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
                        >
                            <Link href={`${createPageUrl('Projects')}?id=${project.id}`}>
                                <div className="relative h-64 md:h-80 overflow-hidden bg-gray-900 rounded-lg">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <div className="text-[#0084CA] text-sm font-medium mb-2">
                                            {project.category}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center text-gray-300 text-sm">
                                            <MapPin className="w-4 h-4 mr-1" />
                                            {project.location}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link href={createPageUrl('Projects')}>
                        <button className="border-2 border-[#0084CA] text-[#0084CA] hover:bg-[#0084CA] hover:text-white px-8 py-3 rounded-full font-medium transition-colors">
                            View All Projects
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default ProjectsSection
