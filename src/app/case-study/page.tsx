import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Case Study | BrewCraft',
    description: 'The design and development process behind BrewCraft.',
};

export default function CaseStudyPage() {
    return (
        <article className="animate-fade-in bg-white min-h-screen pb-20">
            {/* Header */}
            <header className="bg-brand-primary text-cream py-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <Link href="/" className="text-brand-accent hover:text-white mb-6 inline-block font-medium">← Back to Home</Link>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">BrewCraft Project Case Study</h1>
                    <p className="text-xl md:text-2xl text-stone-300 font-light max-w-2xl">
                        A documentation-first approach to better coffee brewing.
                    </p>
                </div>
            </header>

            {/* Content */}
            <div className="container mx-auto max-w-3xl px-6 py-16 space-y-16">

                {/* Overview */}
                <section>
                    <h2 className="text-2xl font-serif font-bold text-brand-primary mb-4">Overview</h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                        BrewCraft is a static web project designed to present curated coffee recipes in a clean, structured, and documentation-friendly format. The goal was to create a simple, fast, and visually consistent website that demonstrates my front-end capabilities while applying the same structured approach I use in technical documentation.
                    </p>
                </section>

                {/* Problem Statement */}
                <section>
                    <h2 className="text-2xl font-serif font-bold text-brand-primary mb-4">Problem Statement</h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-4">
                        Most recipe sites are cluttered, text-heavy, or overloaded with ads. New coffee hobbyists often struggle to understand the fundamentals: grind size, brew ratios, steps, and method differences. I wanted a site that:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600 text-lg">
                        <li>Is simple to navigate</li>
                        <li>Presents recipes in a consistent format</li>
                        <li>Loads quickly on any device</li>
                        <li>Focuses purely on clarity and usability</li>
                    </ul>
                </section>

                {/* Objectives */}
                <section>
                    <h2 className="text-2xl font-serif font-bold text-brand-primary mb-4">Objectives</h2>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600 text-lg">
                        <li>Build a clean, static recipe site with a documentation-first structure.</li>
                        <li>Provide beginner-friendly coffee recipes with practical ratios and step-by-step instructions.</li>
                        <li>Apply SEO best practices (metadata, JSON-LD, alt text, semantic structure).</li>
                        <li>Keep UI minimal, predictable, and easy to scan.</li>
                    </ul>
                </section>

                {/* My Role */}
                <section>
                    <h2 className="text-2xl font-serif font-bold text-brand-primary mb-4">My Role</h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-4">I handled the project end-to-end:</p>
                    <ul className="list-disc pl-5 space-y-2 text-slate-600 text-lg">
                        <li>Information architecture</li>
                        <li>Copywriting and content structure</li>
                        <li>UX writing and recipe standardization</li>
                        <li>Front-end development</li>
                        <li>SEO optimization</li>
                        <li>Deployment to Vercel</li>
                    </ul>
                </section>

                {/* Approach & Design Decisions */}
                <section>
                    <h2 className="text-2xl font-serif font-bold text-brand-primary mb-8">Approach & Design Decisions</h2>

                    <div className="space-y-10">
                        <div>
                            <h3 className="text-xl font-bold text-brand-primary mb-3">1. Documentation-First Structure</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-3">
                                Borrowing from my Technical Writer background, every recipe follows a strict template:
                            </p>
                            <ul className="list-circle pl-5 space-y-1 text-slate-600">
                                <li>Overview</li>
                                <li>Ingredients</li>
                                <li>Ratio & grind size</li>
                                <li>Equipment</li>
                                <li>Time & difficulty</li>
                                <li>Step-by-step instructions</li>
                                <li>Tips & notes</li>
                            </ul>
                            <p className="text-slate-600 text-lg leading-relaxed mt-3">This ensures consistent reading experience.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-brand-primary mb-3">2. Minimal Visual System</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-3">
                                I used a warm, coffee-inspired palette with:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-slate-600">
                                <li>Cream backgrounds</li>
                                <li>Dark brown headings</li>
                                <li>Subtle amber accents</li>
                            </ul>
                            <p className="text-slate-600 text-lg leading-relaxed mt-3">Typography follows a clean hierarchy to guide users through content without distractions.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-brand-primary mb-3">3. Static Architecture for Speed</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-3">
                                The entire site is fully static for:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-slate-600">
                                <li>Instant load time</li>
                                <li>Zero backend maintenance</li>
                                <li>High reliability on free hosting</li>
                            </ul>
                            <p className="text-slate-600 text-lg leading-relaxed mt-3">Next.js static export + Vercel deployment keeps performance strong even on mobile.</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-brand-primary mb-3">4. SEO & Accessibility</h3>
                            <p className="text-slate-600 text-lg leading-relaxed mb-3">
                                Each page includes:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-slate-600">
                                <li>Unique titles and meta descriptions</li>
                                <li>Proper alt attributes</li>
                                <li>JSON-LD Recipe schema</li>
                                <li>Mobile-first responsive layout</li>
                            </ul>
                            <p className="text-slate-600 text-lg leading-relaxed mt-3">This increases discoverability and demonstrates SEO competence.</p>
                        </div>
                    </div>
                </section>

                {/* Footer Quote */}
                <section className="bg-coffee-50 p-8 rounded-xl border border-coffee-100 italic text-coffee-800 text-lg text-center">
                    "From bean to brew — designing clarity into every cup."
                </section>

            </div>
        </article>
    );
}
