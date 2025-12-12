import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'About BrewCraft | Tricha Dwinasty',
    description: 'The story behind BrewCraft — a documentation-first approach to better coffee brewing.',
};

export default function AboutPage() {
    return (
        <div className="animate-fade-in bg-stone-50 min-h-screen">
            {/* Editorial Hero */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1600&q=80"
                    alt="Coffee shop background"
                    fill
                    priority
                    className="object-cover grayscale-[30%]"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 text-center text-white px-4 max-w-3xl">
                    <span className="uppercase tracking-widest text-amber-200 text-sm font-semibold mb-4 block animate-slide-up">The Mission</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-slide-up text-white">About BrewCraft</h1>
                    <p className="text-xl md:text-2xl text-stone-200 font-light max-w-2xl mx-auto leading-relaxed animate-slide-up">
                        Where precise technical documentation meets the soulful art of artisanal coffee.
                    </p>
                </div>
            </section>

            <div className="container mx-auto max-w-5xl px-6 py-16 md:py-24">
                <Breadcrumbs
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'About' },
                    ]}
                />

                <div className="mt-16 space-y-24">
                    {/* Main Story */}
                    <section className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-serif font-bold text-coffee-900">Documentation as a Design System</h2>
                            <div className="prose prose-lg text-coffee-700">
                                <p className="lead text-xl text-coffee-600">
                                    BrewCraft started with a simple observation: most coffee recipes are either too vague ("add some water") or too chemically complex for the average enthusiast.
                                </p>
                                <p>
                                    As a Technical Writer & Document Engineer, I believe structure creates clarity. By treating coffee brewing guides as <strong>technical documentation</strong>, we can standardize variables—grind size, temperature, ratios—into a format that is universally reproducible.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-[400px] bg-stone-200 rounded-sm overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1541167760496-1628856ab772?w=800&q=80"
                                alt="Coffee shop atmosphere"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </section>

                    {/* Philosophy Grid */}
                    <section className="bg-white p-12 border border-stone-200 shadow-sm">
                        <h2 className="text-3xl font-serif font-bold text-center text-coffee-900 mb-12">The Methodology</h2>
                        <div className="grid md:grid-cols-3 gap-12">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 text-amber-600">📝</div>
                                <h3 className="font-bold text-lg mb-3">Structured Data</h3>
                                <p className="text-coffee-600 leading-relaxed">Every recipe is defined by strict metadata schemas, ensuring consistent and machine-readable brewing instructions.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-coffee-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 text-coffee-600">🎨</div>
                                <h3 className="font-bold text-lg mb-3">Visual Clarity</h3>
                                <p className="text-coffee-600 leading-relaxed">Design that gets out of the way. High contrast, clear typography, and step-by-step visual hierarchy.</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 text-stone-600">🚀</div>
                                <h3 className="font-bold text-lg mb-3">Static Performance</h3>
                                <p className="text-coffee-600 leading-relaxed">Built on Next.js for instant page loads. No database queries, just pure static HTML and JSON-LD for SEO.</p>
                            </div>
                        </div>
                    </section>

                    {/* Tech Stack */}
                    <section className="text-center max-w-4xl mx-auto">
                        <h2 className="text-2xl font-serif font-bold text-coffee-900 mb-8">Technical Implementation</h2>
                        <div className="inline-flex flex-wrap justify-center gap-4">
                            {['Next.js 14', 'TypeScript', 'Tailwind CSS v4', 'shadcn/ui', 'JSON-LD', 'Static Export'].map((tech) => (
                                <span key={tech} className="px-6 py-2 bg-stone-100 text-coffee-800 rounded-full font-medium border border-stone-200">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="relative bg-coffee-900 text-white rounded-sm overflow-hidden p-16 text-center">
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        <div className="relative z-10">
                            <h2 className="text-4xl font-serif font-bold mb-6 text-white">Open Source & Brewable</h2>
                            <p className="text-xl text-amber-100/80 mb-10 max-w-2xl mx-auto">
                                This project is a portfolio showcase. Feel free to inspect the code or contact me for collaboration.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white rounded-none px-10 py-6 text-lg">
                                    <Link href="https://github.com/trdwi">GitHub Profile</Link>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="border-white hover:bg-white hover:text-brand-primary text-white rounded-none px-10 py-6 text-lg">
                                    <Link href="mailto:contact@tricha.com">Contact Me</Link>
                                </Button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
