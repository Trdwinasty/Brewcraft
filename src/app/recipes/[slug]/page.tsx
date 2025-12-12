import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import Breadcrumbs from '@/components/Breadcrumbs';
import RecipeSEO from '@/components/RecipeSEO';
import RecipeCard from '@/components/RecipeCard';
import { getRecipeBySlug, recipes } from '@/data/recipes';

interface RecipePageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return recipes.map((recipe) => ({
        slug: recipe.slug,
    }));
}

export async function generateMetadata({ params }: RecipePageProps): Promise<Metadata> {
    const { slug } = await params;
    const recipe = getRecipeBySlug(slug);

    if (!recipe) {
        return { title: 'Recipe Not Found' };
    }

    return {
        title: `${recipe.title} Recipe`,
        description: recipe.description,
        openGraph: {
            title: `${recipe.title} | BrewCraft`,
            description: recipe.description,
            images: [{ url: recipe.image }],
        },
        alternates: {
            canonical: `/recipes/${recipe.slug}`,
        },
    };
}

export default async function RecipePage({ params }: RecipePageProps) {
    const { slug } = await params;
    const recipe = getRecipeBySlug(slug);

    if (!recipe) {
        notFound();
    }

    return (
        <>
            <RecipeSEO recipe={recipe} />

            <article className="min-h-screen bg-stone-50">
                {/* Full Screen Header */}
                <header className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
                    <Image
                        src={recipe.image}
                        alt={recipe.title}
                        fill
                        priority
                        className="object-cover animate-reveal scale-105"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />

                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-20 text-white max-w-[1400px] mx-auto">
                        <div className="animate-fade-in-up">
                            <div className="flex flex-wrap gap-3 mb-6">
                                <Badge variant="secondary" className="bg-white/20 backdrop-blur text-white border-none text-sm uppercase tracking-wider px-3 py-1">
                                    {recipe.category}
                                </Badge>
                                <Badge variant="secondary" className="bg-amber-500 text-white border-none text-sm uppercase tracking-wider px-3 py-1">
                                    {recipe.difficulty}
                                </Badge>
                            </div>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-[1.1]">
                                {recipe.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-stone-200 max-w-2xl font-light leading-relaxed mb-8">
                                {recipe.description}
                            </p>
                            <div className="flex gap-4 md:gap-12 text-stone-300 font-serif border-t border-white/20 pt-8">
                                <div>
                                    <div className="text-3xl text-white">{recipe.totalTime}</div>
                                    <div className="text-xs uppercase tracking-wider text-stone-400">Total Time</div>
                                </div>
                                <div>
                                    <div className="text-3xl text-white">{recipe.yield}</div>
                                    <div className="text-xs uppercase tracking-wider text-stone-400">Yield</div>
                                </div>
                                <div>
                                    <div className="text-3xl text-white">{recipe.grindSize}</div>
                                    <div className="text-xs uppercase tracking-wider text-stone-400">Grind</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Content Layout */}
                <div className="max-w-[1400px] mx-auto px-6 py-12 md:py-24 grid lg:grid-cols-[400px_1fr] gap-12 lg:gap-24">
                    {/* Sidebar - Sticky */}
                    <aside className="lg:sticky lg:top-24 h-fit space-y-12">
                        <div className="mb-8">
                            <Breadcrumbs
                                items={[
                                    { label: 'Recipes', href: '/recipes' },
                                    { label: recipe.title },
                                ]}
                            />
                        </div>

                        {/* Ingredients */}
                        <div className="bg-white p-8 rounded-sm shadow-sm border border-stone-200/60">
                            <h3 className="font-serif text-2xl font-bold text-coffee-900 mb-6 flex items-center gap-3">
                                Ingredients
                            </h3>
                            <ul className="space-y-4">
                                {recipe.ingredients.map((ing, i) => (
                                    <li key={i} className="flex items-start gap-4 text-coffee-700 pb-4 border-b border-stone-100 last:border-0 last:pb-0">
                                        <span className="text-amber-500 mt-1.5 text-xs">●</span>
                                        <span className="text-lg">{ing}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Equipment */}
                        <div className="bg-white p-8 rounded-sm shadow-sm border border-stone-200/60">
                            <h3 className="font-serif text-2xl font-bold text-coffee-900 mb-6">Equipment</h3>
                            <ul className="space-y-3">
                                {recipe.equipment.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-coffee-700">
                                        <span className="w-5 h-5 rounded-full border border-stone-300 flex items-center justify-center text-[10px] text-stone-400">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Ratio Stats */}
                        <div className="bg-coffee-900 text-stone-200 p-8 rounded-sm">
                            <h3 className="font-serif text-xl font-bold text-white mb-4">Brew Stats</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                    <span className="text-sm uppercase tracking-widest text-stone-400">Ratio</span>
                                    <span className="font-mono text-lg">{recipe.ratio}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                    <span className="text-sm uppercase tracking-widest text-stone-400">Prep</span>
                                    <span className="font-mono text-lg">{recipe.prepTime}</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                    <span className="text-sm uppercase tracking-widest text-stone-400">Brew</span>
                                    <span className="font-mono text-lg">{recipe.brewTime}</span>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content - Steps */}
                    <main>
                        {/* Instructions */}
                        <div className="space-y-16">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-900 mb-8">Preparation</h2>
                                <div className="prose prose-lg prose-stone text-coffee-700">
                                    <p className="text-xl leading-relaxed font-light">
                                        Before we start, ensure your water is heated to the correct temperature and your beans are ground fresh to a {recipe.grindSize.toLowerCase()} consistency.
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-12">
                                {recipe.steps.map((step, index) => (
                                    <div key={index} className="group relative pl-8 md:pl-12 border-l-2 border-stone-200 hover:border-amber-400 transition-colors duration-300">
                                        <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-100 border-2 border-stone-300 group-hover:border-amber-500 group-hover:bg-amber-500 transition-colors" />
                                        <span className="text-6xl font-serif font-bold text-stone-100 absolute -top-8 -left-12 -z-10 select-none group-hover:text-amber-50 transition-colors">
                                            {index + 1}
                                        </span>
                                        <h3 className="text-2xl font-bold text-coffee-900 mb-4 group-hover:text-amber-700 transition-colors">
                                            Step {index + 1}
                                        </h3>
                                        <p className="text-xl text-coffee-700 leading-relaxed">
                                            {step}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tips */}
                        <div className="mt-20 p-8 md:p-12 bg-amber-50 border-l-4 border-amber-500 rounded-r-sm">
                            <h3 className="text-2xl font-serif font-bold text-coffee-900 mb-6 flex items-center gap-3">
                                <span className="text-amber-600">💡</span> Pro Tips
                            </h3>
                            <ul className="space-y-4">
                                {recipe.tips.map((tip, i) => (
                                    <li key={i} className="flex gap-4 text-coffee-800 text-lg">
                                        <span className="text-amber-400 font-bold">•</span>
                                        {tip}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </main>
                </div>
            </article>

            {/* Related Recipes */}
            <section className="bg-white py-24 px-6 border-t border-stone-200">
                <div className="container mx-auto max-w-[1400px]">
                    <h2 className="text-3xl font-serif font-bold text-coffee-900 mb-12 text-center">You Might Also Like</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {recipes
                            .filter(r => r.category === recipe.category && r.slug !== recipe.slug)
                            .slice(0, 4)
                            .map(related => (
                                <RecipeCard key={related.slug} recipe={related} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}
