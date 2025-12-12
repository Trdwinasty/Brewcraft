import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import RecipeCard from '@/components/RecipeCard';
import ProcessSection from '@/components/ProcessSection';
import { recipes, getFeaturedRecipe } from '@/data/recipes';

export default function Home() {
  const featuredRecipe = getFeaturedRecipe();
  const latestRecipes = recipes
    .filter(r => r.slug !== featuredRecipe.slug)
    .slice(0, 4);

  const categories = [
    { name: 'Pour Over', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=800&q=80', slug: 'pour-over' },
    { name: 'Espresso', image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800&q=80', slug: 'espresso' },
    { name: 'Cold Brew', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80', slug: 'cold-brew' },
    { name: 'Milk Based', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80', slug: 'espresso' }, // Logic filters by tags
  ];

  return (
    <div className="bg-stone-50">
      {/* Hero */}
      {/* Hero */}
      <HeroSection
        layout="split"
        title="BrewCraft — Simple, Curated Coffee Recipes"
        subtitle="A collection of beginner-friendly brewing guides with clear ratios, steps, and practical tips. Designed to help anyone brew better coffee at home — one cup at a time."
        backgroundImage="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-brand-primary text-cream hover:bg-brand-primary/90 rounded-lg px-8 py-6 text-lg tracking-wide border-0 shadow-lg">
              <Link href="/recipes">Explore Recipes</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-brand-primary border-brand-primary hover:bg-brand-primary hover:text-white rounded-lg px-8 py-6 text-lg tracking-wide shadow-sm">
              <Link href="/about">About & Process</Link>
            </Button>
          </div>
          <p className="text-sm text-coffee-600 italic mt-2">
            No ads, no clutter — just straightforward brewing instructions with clean visuals and easy-to-follow steps.
          </p>
        </div>
      </HeroSection>

      {/* Categories - Visual Tiles */}
      <section className="py-20 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-coffee-500 uppercase tracking-widest text-sm font-semibold mb-2 block">Curated Collections</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-900">Explore by Category</h2>
          </div>
          <Link href="/recipes" className="text-coffee-600 hover:text-coffee-900 underline decoration-1 underline-offset-4 hidden md:block">
            View all categories
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[500px] md:h-[400px]">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/recipes?category=${cat.name}`}
              className="relative group h-full overflow-hidden block"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-white font-serif text-2xl font-bold tracking-tight">{cat.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Recipe - Split Layout */}
      <section className="bg-brand-primary text-cream">
        <div className="grid md:grid-cols-2 min-h-[600px]">
          <div className="relative min-h-[400px]">
            <Image
              src={featuredRecipe.image}
              alt={featuredRecipe.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center p-12 md:p-20">
            <span className="text-amber-400 uppercase tracking-widest text-sm font-semibold mb-4">Recipe of the Week</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight text-white">
              {featuredRecipe.title}
            </h2>
            <p className="text-xl text-cream/90 mb-8 max-w-md font-light">
              {featuredRecipe.description}
            </p>
            <div className="flex gap-8 mb-10 text-stone-300">
              <div>
                <div className="text-2xl font-serif text-white">{featuredRecipe.brewTime}</div>
                <div className="text-xs uppercase tracking-wider">Time</div>
              </div>
              <div>
                <div className="text-2xl font-serif text-white">{featuredRecipe.difficulty}</div>
                <div className="text-xs uppercase tracking-wider">Level</div>
              </div>
            </div>
            <Button asChild size="lg" className="self-start bg-amber-600 hover:bg-amber-700 text-white rounded-none px-8 py-6">
              <Link href={`/recipes/${featuredRecipe.slug}`}>View Recipe</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Recipes - Editorial Grid */}
      <section className="py-24 px-6 max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-coffee-500 uppercase tracking-widest text-sm font-semibold">Fresh From The Bar</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-coffee-900 mt-3">Latest Brew Guides</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {latestRecipes.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild variant="outline" size="lg" className="border-coffee-900 text-coffee-900 hover:bg-coffee-900 hover:text-white rounded-none px-10">
            <Link href="/recipes">View Archive</Link>
          </Button>
        </div>
      </section>

      {/* Process Documentation */}
      <ProcessSection />
    </div>
  );
}
