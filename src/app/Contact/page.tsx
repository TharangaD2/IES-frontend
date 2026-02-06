'use client'
import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    CheckCircle2,
    Building2,
    MessageSquare,
    LucideIcon
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textArea';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/ui/navBar';
import Footer from '@/components/ui/footer';

/* ----------------------- Types ------------------------ */

interface ContactCard {
    icon: LucideIcon;
    title: string;
    details: string[];
    color: string;
    action?: string;
}

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    service: string;
    message: string;
}

/* ----------------------- Data ------------------------- */

const contactInfo: ContactCard[] = [
    {
        icon: Phone,
        title: 'Call Us',
        details: ['+94 77 755 4994', '+94 11 271 0458'],
        color: '#00A3E0',
        action: 'tel:+94777554994'
    },
    {
        icon: Mail,
        title: 'Email Us',
        details: ['Info@ies.lk'],
        color: '#F5A623',
        action: 'mailto:Info@ies.lk'
    },
    {
        icon: MapPin,
        title: 'Visit Us',
        details: ['118G, Abeysekara Road', 'Dehiwala, Sri Lanka'],
        color: '#00D4AA',
        action: 'https://maps.google.com/?q=118G,Abeysekara+Road,Dehiwala,Sri+Lanka'
    },
    {
        icon: Clock,
        title: 'Working Hours',
        details: ['Mon - Fri: 8:30 AM - 5:30 PM', 'Sat: 8:30 AM - 1:00 PM'],
        color: '#E91E63'
    }
];

const services: string[] = [
    'Fire Detection Systems',
    'Water Leak Detection',
    'Smoke Curtain Systems',
    'Plumbing Solutions',
    'Electrical Products',
    'Mechanical Products',
    'Other'
];

/* ----------------------- Component ------------------------ */

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                service: '',
                message: ''
            });
        }, 3000);
    };

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
                        <source src="/vedio/ContactUs.mp4" type="video/mp4" />
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
                            Contact Us
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Let's Build Something
                            <span className="text-[#00A3E0]"> Amazing Together</span>
                        </h1>
                        <p className="text-xl text-gray-300">
                            Have a project in mind? We're here to help. Reach out to us and let's
                            discuss how we can meet your engineering needs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 -mt-24 relative z-10">
                        {contactInfo.map((info, index) => {
                            const Icon = info.icon;

                            return (
                                <motion.a
                                    key={index}
                                    href={info.action}
                                    target={info.action?.startsWith('http') ? '_blank' : undefined}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="p-6 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all group cursor-pointer"
                                >
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                                        style={{ backgroundColor: `${info.color}15` }}
                                    >
                                        <Icon className="w-7 h-7" style={{ color: info.color }} />
                                    </div>
                                    <h3 className="font-bold text-[#0A1628] text-lg mb-2">{info.title}</h3>
                                    {info.details.map((detail, i) => (
                                        <p key={i} className="text-gray-500">
                                            {detail}
                                        </p>
                                    ))}
                                </motion.a>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Contact Form & Map */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-10 rounded-3xl shadow-sm"
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-[#00A3E0]/10 flex items-center justify-center">
                                    <MessageSquare className="w-6 h-6 text-[#00A3E0]" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-[#0A1628]">Request a Quote</h2>
                                    <p className="text-gray-500">Fill in the form and we'll get back to you</p>
                                </div>
                            </div>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-16"
                                >
                                    <div className="w-20 h-20 rounded-full bg-[#00D4AA]/20 flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-10 h-10 text-[#00D4AA]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#0A1628] mb-2">Thank You!</h3>
                                    <p className="text-gray-500">Your message has been sent. We'll get back to you soon.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name *</Label>
                                            <Input
                                                id="name"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, name: e.target.value })
                                                }
                                                required
                                                className="rounded-xl"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email Address *</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                value={formData.email}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, email: e.target.value })
                                                }
                                                required
                                                className="rounded-xl"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone Number *</Label>
                                            <Input
                                                id="phone"
                                                placeholder="+94 XX XXX XXXX"
                                                value={formData.phone}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, phone: e.target.value })
                                                }
                                                required
                                                className="rounded-xl"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="company">Company Name</Label>
                                            <Input
                                                id="company"
                                                placeholder="Your Company"
                                                value={formData.company}
                                                onChange={(e) =>
                                                    setFormData({ ...formData, company: e.target.value })
                                                }
                                                className="rounded-xl"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Service Required *</Label>

                                        <Select
                                            value={formData.service}
                                            onValueChange={(value) =>
                                                setFormData({ ...formData, service: value })
                                            }
                                            required
                                        >
                                            <SelectTrigger className="rounded-xl">
                                                <SelectValue placeholder="Select a service" />
                                            </SelectTrigger>

                                            <SelectContent>
                                                {services.map((service) => (
                                                    <SelectItem key={service} value={service}>
                                                        {service}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Project Details *</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us about your project requirements..."
                                            value={formData.message}
                                            onChange={(e) =>
                                                setFormData({ ...formData, message: e.target.value })
                                            }
                                            required
                                            className="rounded-xl min-h-[120px]"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-[#00A3E0] hover:bg-[#0091c8] text-white rounded-full py-6"
                                    >
                                        {isSubmitting ? (
                                            <span className="flex items-center gap-2">
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                />
                                                Sending...
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                <Send className="w-5 h-5" />
                                                Send Message
                                            </span>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </motion.div>

                        {/* Map & Additional Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="rounded-3xl overflow-hidden h-80 shadow-sm">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.484856555889!2d79.86424!3d6.8456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTAnNDQuMiJOIDc5wrA1MScyNy4zIkU!5e0!3m2!1sen!2slk!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale"
                                />
                            </div>

                            <div className="p-8 rounded-3xl bg-[#0A1628]">
                                <h3 className="text-xl font-bold text-white mb-6">Why Choose IES?</h3>
                                <div className="space-y-4">
                                    {[
                                        { icon: Building2, text: 'Nationwide coverage across Sri Lanka' },
                                        { icon: Clock, text: 'Quick response and delivery times' },
                                        { icon: CheckCircle2, text: 'Certified and quality-tested products' },
                                        { icon: Phone, text: '24/7 support for urgent requirements' }
                                    ].map((item, i) => {
                                        const Icon = item.icon;

                                        return (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                                    <Icon className="w-5 h-5 text-[#00A3E0]" />
                                                </div>
                                                <span className="text-gray-300">{item.text}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-[#0A1628] mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-500">Quick answers to common questions</p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto grid gap-4">
                        {[
                            {
                                q: 'What areas do you serve in Sri Lanka?',
                                a: 'We provide nationwide coverage across Sri Lanka, with our main office located in Dehiwala, Colombo.'
                            },
                            {
                                q: 'Do you offer installation services?',
                                a: 'Yes, we provide complete supply, installation, testing, and commissioning services for all our products.'
                            },
                            {
                                q: 'What is the typical lead time for products?',
                                a: 'Lead times vary by product. Standard items are typically available within 1-2 weeks, while specialized products may take 3-4 weeks.'
                            },
                            {
                                q: 'Do you provide warranty on products?',
                                a: 'Yes, all our products come with manufacturer warranties. Warranty periods vary by product type.'
                            }
                        ].map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
                            >
                                <h4 className="font-bold text-[#0A1628] mb-2">{faq.q}</h4>
                                <p className="text-gray-500">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
}
