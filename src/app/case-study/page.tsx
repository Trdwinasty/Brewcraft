import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Case Study | BrewCraft',
    description: 'The design and development process behind BrewCraft.',
};

export default function CaseStudyPage() {
    return (
        <article className="animate-fade-in bg-stone-50 min-h-screen pb-24">
            {/* Immersive Case Study Hero */}
            <header className="relative h-[70vh] min-h-[500px] flex items-center bg-coffee-950 text-cream overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=1600&q=80"
                        alt="Case Study Background"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    {/* Solid gradient overlay for text protection */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
                </div>
                <div className="container mx-auto max-w-5xl px-6 relative z-10 pt-20">
                    <Link href="/" className="inline-flex items-center text-amber-500 hover:text-amber-400 mb-8 font-medium transition-colors">
                        <span className="mr-2">←</span> Back to Live Site
                    </Link>
                    <span className="block text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">Project Case Study</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-white leading-tight">
                        Structuring the <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Perfect Pour</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-stone-300 font-light max-w-2xl leading-relaxed">
                        How I used a documentation-first approach to build a high-performance, accessible coffee guide using Next.js and Static Generation.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-10">
                        <span className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm text-white">Next.js 14</span>
                        <span className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm text-white">TypeScript</span>
                        <span className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm text-white">Tailwind CSS</span>
                        <span className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm text-white">JSON-LD</span>
                    </div>
                </div>
            </header>

            {/* Main Content Grid */}
            <div className="container mx-auto px-6 -mt-20 relative z-20">
                <div className="grid md:grid-cols-[1fr_300px] gap-10 max-w-6xl mx-auto">

                    {/* Left Column: Narrative */}
                    <div className="space-y-12">
                        {/* The Challenge */}
                        <section className="bg-white p-8 md:p-12 rounded-xl shadow-xl border border-stone-100">
                            <h2 className="text-3xl font-serif font-bold text-coffee-900 mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-lg">⚠️</span>
                                The Challenge
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                New coffee hobbyists are often overwhelmed by inconsistency. One recipe says "add water," another says "pour 250ml at 93°C."
                                Existing recipe sites are either:
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                                    <h3 className="font-bold text-red-800 mb-2">My Recipe App</h3>
                                    <p className="text-sm text-red-700">Too complex. Requires login, database queries, and tracks user data.</p>
                                </div>
                                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                                    <h3 className="font-bold text-red-800 mb-2">Random Blog</h3>
                                    <p className="text-sm text-red-700">Buried under 5,000 words of SEO fluff and ads before the actual recipe.</p>
                                </div>
                            </div>
                        </section>

                        {/* The Solution */}
                        <section className="bg-white p-8 md:p-12 rounded-xl shadow-xl border border-stone-100">
                            <h2 className="text-3xl font-serif font-bold text-coffee-900 mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-lg">💡</span>
                                The Solution
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-8">
                                I treated coffee brewing as <strong>technical documentation</strong>. By standardizing the data structure, I could generate a consistent, searchable, and performant UI.
                            </p>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-coffee-900 mb-3">1. Structured Data Schema</h3>
                                    <div className="bg-slate-900 rounded-lg p-6 overflow-x-auto">
                                        <pre className="text-sm text-emerald-400 font-mono">
                                            {`type Recipe = {
    slug: string;
    title: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Expert';
    ingredients: string[];
    steps: string[]; // Strict array for step-by-step UI
    ratio: string;   // e.g. "1:16"
    temp: string;    // e.g. "93°C"
}; `}
                                        </pre>
                                    </div>
                                    <p className="text-slate-500 text-sm mt-3">
                                        Type-safety ensures every recipe has the critical data needed for a successful brew.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-coffee-900 mb-3">2. Component Architecture</h3>
                                    <p className="text-slate-600 leading-relaxed mb-4">
                                        I built reusable components like <code className="bg-slate-100 px-2 py-1 rounded text-slate-800">RecipeCard</code> and <code className="bg-slate-100 px-2 py-1 rounded text-slate-800">BrewStats</code> to visualize this data consistently.
                                    </p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="border border-stone-200 p-4 rounded bg-stone-50 text-center">
                                            <span className="block text-2xl mb-2">📱</span>
                                            <span className="font-bold text-coffee-800">Mobile First</span>
                                        </div>
                                        <div className="border border-stone-200 p-4 rounded bg-stone-50 text-center">
                                            <span className="block text-2xl mb-2">⚡</span>
                                            <span className="font-bold text-coffee-800">Zero JS Runtime</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Impact Stats */}
                        <section>
                            <h2 className="text-2xl font-serif font-bold text-coffee-900 mb-6">Performance & Impact</h2>
                            <div className="grid sm:grid-cols-3 gap-6">
                                <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-amber-500 text-center">
                                    <span className="block text-4xl font-bold text-coffee-900 mb-2">100</span>
                                    <span className="text-slate-500 uppercase tracking-wider text-xs font-bold">Lighthouse Score</span>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-amber-500 text-center">
                                    <span className="block text-4xl font-bold text-coffee-900 mb-2">0ms</span>
                                    <span className="text-slate-500 uppercase tracking-wider text-xs font-bold">Database Latency</span>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm border-t-4 border-amber-500 text-center">
                                    <span className="block text-4xl font-bold text-coffee-900 mb-2">SEO</span>
                                    <span className="text-slate-500 uppercase tracking-wider text-xs font-bold">Rich Snippets Ready</span>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Sidebar: Context */}
                    <aside className="space-y-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg border border-stone-100 sticky top-8">
                            <h3 className="font-bold text-coffee-900 mb-4 text-lg border-b border-stone-100 pb-2">Project info</h3>
                            <ul className="space-y-4 text-sm">
                                <div>
                                    <span className="block text-stone-400 text-xs uppercase tracking-wider mb-1">Role</span>
                                    <li className="font-medium text-slate-700">Design, Dev, Content</li>
                                </div>
                                <div>
                                    <span className="block text-stone-400 text-xs uppercase tracking-wider mb-1">Timeline</span>
                                    <li className="font-medium text-slate-700">2 Weeks (Design to Ship)</li>
                                </div>
                                <div>
                                    <span className="block text-stone-400 text-xs uppercase tracking-wider mb-1">Stack</span>
                                    <li className="font-medium text-slate-700">Next.js, React, Tailwind, Vercel</li>
                                </div>
                            </ul>

                            <div className="mt-8 pt-6 border-t border-stone-100">
                                <Button className="w-full bg-coffee-900 hover:bg-coffee-800 text-white" asChild>
                                    <a href="https://github.com/Trdwinasty/Brewcraft" target="_blank" rel="noopener noreferrer">View Source</a>
                                </Button>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Footer Quote */}
                <div className="max-w-4xl mx-auto mt-20 text-center">
                    <p className="text-2xl font-serif italic text-coffee-800 mb-6">"Crafted with the same precision as a perfect pour-over."</p>
                </div>
            </div>
        </article>
    );
}
