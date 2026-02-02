import React from 'react';
import HeroSection from './ui/heroSection';
import ProductsSection from './ui/productSection';
import AboutSection from './ui/aboutSection';
import ProjectsSection from './ui/projectSection';
import ServicesSection from './ui/serviceSection';
import CTASection from './ui/CTASection';

export default function Home() {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <ProductsSection />
            <AboutSection />
            <ProjectsSection />
            <ServicesSection />
            <CTASection />
        </div>
    );
} 