'use client';

import { useState, useMemo } from 'react';
import type { Metadata } from 'next';
import RecipeCard from '@/components/RecipeCard';
import FlavorTag from '@/components/FlavorTag';
import Breadcrumbs from '@/components/Breadcrumbs';
import { recipes, flavorTags, categories } from '@/data/recipes';

export default function RecipesPage() {
    const [selectedFlavor, setSelectedFlavor] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredRecipes = useMemo(() => {
        return recipes.filter((recipe) => {
            const matchesFlavor = !selectedFlavor || recipe.flavorTags.includes(selectedFlavor);
            const matchesCategory = !selectedCategory || recipe.category === selectedCategory;
            const matchesSearch = !searchQuery || recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) || recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesFlavor && matchesCategory && matchesSearch;
        });
    }, [selectedFlavor, selectedCategory, searchQuery]);

    const clearFilters = () => {
        setSelectedFlavor(null);
        setSelectedCategory(null);
        setSearchQuery('');
    };

    return (
        <div className="animate-fade-in">
            {/* Header */}
            {/* Hero */}
            <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600&q=80"
                        alt="Pour over coffee"
                        className="w-full h-full object-cover grayscale-[30%]"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 animate-fade-in-up">
                        Coffee Recipes
                    </h1>
                    <p className="text-xl text-stone-200 max-w-2xl mx-auto font-light animate-fade-in-up delay-100">
                        Curated recipes with standard variables for reproducible excellence.
                    </p>
                </div>
            </div>

            {/* Breadcrumbs */}
            <div className="bg-stone-50 border-b border-stone-200">
                <div className="container mx-auto px-4 py-4">
                    <Breadcrumbs
                        items={[
                            { label: 'Home', href: '/' },
                            { label: 'Recipes' },
                        ]}
                    />
                </div>
            </div>

            {/* Filters */}
            <section className="py-8 px-4 border-b border-amber-200/50">
                <div className="container mx-auto max-w-6xl">

                    {/* Search Input */}
                    <div className="mb-8 max-w-md mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search recipes..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-3 pl-12 rounded-full border border-stone-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all placeholder:text-stone-400 text-coffee-800"
                            />
                            <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 justify-center">
                        {/* Category Filter */}
                        <div className="mb-6 md:mb-0">
                            <h3 className="text-sm font-medium text-coffee-700 mb-3 text-center md:text-left">Filter by Category</h3>
                            <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.slug}
                                        onClick={() => setSelectedCategory(selectedCategory === cat.slug ? null : cat.slug)}
                                        className={`
                    px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2
                    ${selectedCategory === cat.slug
                                                ? 'bg-coffee-700 text-white shadow-md'
                                                : 'bg-amber-100 text-coffee-700 hover:bg-amber-200'
                                            }
                  `}
                                    >
                                        <span>{cat.icon}</span>
                                        {cat.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Flavor Filter */}
                        <div>
                            <h3 className="text-sm font-medium text-coffee-700 mb-3 text-center md:text-left">Filter by Flavor</h3>
                            <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                {flavorTags.map((tag) => (
                                    <FlavorTag
                                        key={tag}
                                        tag={tag}
                                        isActive={selectedFlavor === tag}
                                        onClick={() => setSelectedFlavor(selectedFlavor === tag ? null : tag)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Active Filters */}
                    {(selectedFlavor || selectedCategory || searchQuery) && (
                        <div className="mt-8 flex items-center justify-center gap-4">
                            <span className="text-sm text-coffee-600">
                                Showing {filteredRecipes.length} of {recipes.length} recipes
                            </span>
                            <button
                                onClick={clearFilters}
                                className="text-sm text-amber-700 hover:text-amber-800 underline"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Recipe Grid */}
            <section className="py-12 px-4">
                <div className="container mx-auto max-w-6xl">
                    {filteredRecipes.length > 0 ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredRecipes.map((recipe) => (
                                <RecipeCard key={recipe.slug} recipe={recipe} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <span className="text-6xl mb-4 block">🔍</span>
                            <h3 className="text-xl font-semibold text-coffee-800 mb-2">
                                No recipes found
                            </h3>
                            <p className="text-coffee-600 mb-4">
                                Try adjusting your filters to find more recipes
                            </p>
                            <button
                                onClick={clearFilters}
                                className="text-amber-700 hover:text-amber-800 underline"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
