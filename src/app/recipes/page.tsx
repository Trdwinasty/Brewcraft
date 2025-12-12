'use client';

import { useState, useMemo } from 'react';
import recipesData, { flavorTags, categories } from '@/data/recipes';
import RecipeCard from '@/components/RecipeCard';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function RecipesPage() {
    const [query, setQuery] = useState('');
    const [filter, setFilter] = useState<string | null>(null);

    const tags = useMemo(() => {
        const s = new Set<string>();
        recipesData.forEach(r => r.tags?.forEach(t => s.add(t)));
        return Array.from(s);
    }, []);

    const filtered = useMemo(() => {
        return recipesData.filter(r => {
            const matchQuery =
                r.title.toLowerCase().includes(query.toLowerCase()) ||
                (r.excerpt || '').toLowerCase().includes(query.toLowerCase()) ||
                r.tags?.some(t => t.toLowerCase().includes(query.toLowerCase()));
            const matchFilter = !filter || (r.tags || []).includes(filter);
            return matchQuery && matchFilter;
        });
    }, [query, filter]);

    return (
        <div className="animate-fade-in bg-stone-50 min-h-screen pb-12">
            {/* Hero Header */}
            <div className="relative h-[30vh] min-h-[250px] flex items-center justify-center overflow-hidden mb-8">
                <div className="absolute inset-0 bg-coffee-900" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay" />
                <div className="relative z-10 container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">Recipes</h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto font-light">Curated coffee recipes with clear ratios, steps, and tips.</p>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-6">
                <Breadcrumbs
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Recipes' },
                    ]}
                />

                <div className="mt-8 mb-12">
                    <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
                        {/* Search */}
                        <div className="relative w-full md:max-w-md">
                            <input
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search recipes or tags..."
                                className="w-full pl-12 pr-4 py-3 rounded-full border border-stone-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition shadow-sm"
                            />
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400">🔍</span>
                        </div>

                        {/* Filters */}
                        <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
                            <button
                                onClick={() => setFilter(null)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition whitespace-nowrap ${filter === null ? 'bg-coffee-900 text-white shadow-md' : 'bg-white text-coffee-700 hover:bg-stone-100 border border-stone-200'}`}
                            >
                                All
                            </button>
                            {tags.map(t => (
                                <button
                                    key={t}
                                    onClick={() => setFilter(t)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition whitespace-nowrap ${filter === t ? 'bg-coffee-900 text-white shadow-md' : 'bg-white text-coffee-700 hover:bg-stone-100 border border-stone-200'}`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                    {(query || filter) && (
                        <div className="mt-4 flex items-center gap-2 text-sm text-stone-500">
                            <span>Showing {filtered.length} results</span>
                            <button onClick={() => { setQuery(''); setFilter(null); }} className="text-amber-600 hover:underline font-medium">Clear all</button>
                        </div>
                    )}
                </div>

                <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filtered.map(r => (
                        <RecipeCard key={r.slug} recipe={r} />
                    ))}
                </section>

                {filtered.length === 0 && (
                    <div className="text-center py-24 bg-white rounded-lg border border-dashed border-stone-300">
                        <span className="text-5xl block mb-4">☕</span>
                        <p className="text-xl text-stone-600 font-serif">No recipes match your search.</p>
                        <button onClick={() => { setQuery(''); setFilter(null); }} className="mt-4 text-amber-600 font-medium hover:underline">Reset filters</button>
                    </div>
                )}
            </main>
        </div>
    );
}
