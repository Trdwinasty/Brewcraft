'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ProcessSection() {
    const steps = [
        {
            title: 'Understand the Method',
            description: 'I break down each brewing technique into core components: grind size, brew ratio, timing, water temperature, and equipment needs. This ensures every recipe is grounded in consistent fundamentals.',
            icon: '🔍',
        },
        {
            title: 'Structure Before Writing',
            description: 'Every recipe follows a standardized layout: overview, ingredients, ratio, equipment, and step-by-step instructions. This makes the site predictable, usable, and easy to expand as new content is added.',
            icon: '📐',
        },
        {
            title: 'Validate & Refine',
            description: 'Each guide is tested for clarity and readability. If a step feels ambiguous, too long, or incomplete, I refine it until it’s concise and beginner-friendly. The goal is to help users brew confidently without needing prior experience.',
            icon: '✅',
        },
    ];

    return (
        <section className="py-24 bg-cream border-t border-coffee-100">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-brand-accent uppercase tracking-widest text-sm font-semibold mb-3 block">My Methodology</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-primary mb-6">How I Design Recipe Experiences</h2>
                    <p className="text-xl text-coffee-700 leading-relaxed font-light">
                        Clear, structured, and easy-to-follow content — inspired by my documentation-first approach as a Technical Writer.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {steps.map((step, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 hover:border-brand-accent/30 transition-colors group">
                            <div className="w-16 h-16 bg-coffee-50 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-brand-accent/10 transition-colors">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-serif font-bold text-brand-primary mb-4">{step.title}</h3>
                            <p className="text-coffee-600 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Button asChild size="lg" className="bg-brand-primary hover:bg-brand-primary/90 text-white rounded-lg px-8 py-6 text-lg">
                        <Link href="/case-study">Read Full Case Study</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
