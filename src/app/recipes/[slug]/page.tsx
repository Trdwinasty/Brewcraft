import recipes, { getRecipeBySlug } from '@/data/recipes';
import RecipeSEO from '@/components/RecipeSEO';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return recipes.map(r => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const recipe = getRecipeBySlug(slug);
    if (!recipe) return { title: 'Recipe Not Found' };

    return {
        title: `${recipe.title} — BrewCraft`,
        description: recipe.description,
        openGraph: {
            title: `${recipe.title} — BrewCraft`,
            description: recipe.description,
            images: [{ url: recipe.image }],
        },
        alternates: { canonical: `https://trdwi.vercel.app/recipes/${recipe.slug}` }
    };
}

export default async function RecipePage({ params }: Props) {
    const { slug } = await params;
    const recipe = getRecipeBySlug(slug);
    if (!recipe) notFound();

    const absoluteImage = recipe.image.startsWith('http') ? recipe.image : `https://trdwi.vercel.app${recipe.image}`;

    return (
        <div className="bg-stone-50 min-h-screen pb-12">
            <RecipeSEO recipe={{
                ...recipe,
                image: absoluteImage,
                url: `https://trdwi.vercel.app/recipes/${recipe.slug}`
            }} />

            {/* Header Image */}
            <header className="relative w-full h-[50vh] min-h-[400px]">
                <Image src={recipe.image} alt={recipe.title} fill className="object-cover" priority sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex gap-2 mb-4">
                            <Badge className="bg-amber-500 text-white border-none">{recipe.difficulty}</Badge>
                            <Badge variant="outline" className="text-stone-200 border-stone-400 backdrop-blur-sm">{recipe.category}</Badge>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 shadow-sm">{recipe.title}</h1>
                        <p className="text-xl text-stone-200 max-w-2xl font-light">{recipe.description}</p>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-6 -mt-8 relative z-10">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
                    <div className="p-6 md:p-8 border-b border-stone-100">
                        <Breadcrumbs
                            items={[
                                { label: 'Recipes', href: '/recipes' },
                                { label: recipe.title },
                            ]}
                        />
                    </div>

                    <article className="grid md:grid-cols-[1fr_300px] gap-8 p-6 md:p-12">
                        <section>
                            <div className="flex flex-wrap gap-2 mb-8">
                                {recipe.tags?.map(t => <span key={t} className="text-xs font-bold uppercase tracking-wider bg-stone-100 px-3 py-1 rounded-sm text-stone-600">#{t}</span>)}
                            </div>

                            <h2 className="text-2xl font-serif font-bold text-coffee-900 mb-6 flex items-center gap-3">
                                <span className="text-amber-600">🥘</span> Ingredients
                            </h2>
                            <ul className="grid sm:grid-cols-2 gap-3 mb-10">
                                {recipe.ingredients.map((i, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-stone-700 bg-stone-50 p-3 rounded-md">
                                        <span className="text-amber-500 mt-1">•</span>
                                        {i}
                                    </li>
                                ))}
                            </ul>

                            <h2 className="text-2xl font-serif font-bold text-coffee-900 mb-6 flex items-center gap-3">
                                <span className="text-amber-600">📝</span> Instructions
                            </h2>
                            <div className="space-y-6">
                                {recipe.instructions.map((s, idx) => (
                                    <div key={idx} className="flex gap-4 group">
                                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-coffee-100 text-coffee-800 font-bold flex items-center justify-center border border-coffee-200 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                            {idx + 1}
                                        </span>
                                        <p className="text-lg text-stone-700 leading-relaxed pt-0.5">{s}</p>
                                    </div>
                                ))}
                            </div>

                            {recipe.tips && recipe.tips.length > 0 && (
                                <div className="mt-12 p-6 bg-blue-50/50 border border-blue-100 rounded-lg">
                                    <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">💡 Pro Tips</h3>
                                    <ul className="space-y-2">
                                        {recipe.tips.map((tip, i) => (
                                            <li key={i} className="text-blue-800 text-sm">• {tip}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </section>

                        <aside className="space-y-6">
                            <div className="bg-stone-50 p-6 rounded-lg border border-stone-200">
                                <h3 className="font-serif font-bold text-coffee-900 mb-4 text-lg">Brew Stats</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                                        <span className="text-sm text-stone-500">Time</span>
                                        <span className="font-medium text-coffee-900">{recipe.time}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                                        <span className="text-sm text-stone-500">Yield</span>
                                        <span className="font-medium text-coffee-900">{recipe.yield}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                                        <span className="text-sm text-stone-500">Difficulty</span>
                                        <span className="font-medium text-coffee-900">{recipe.difficulty}</span>
                                    </div>
                                    {recipe.ratio && (
                                        <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                                            <span className="text-sm text-stone-500">Ratio</span>
                                            <span className="font-medium text-coffee-900">{recipe.ratio}</span>
                                        </div>
                                    )}
                                    {recipe.temp && (
                                        <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                                            <span className="text-sm text-stone-500">Temp</span>
                                            <span className="font-medium text-coffee-900">{recipe.temp}</span>
                                        </div>
                                    )}
                                    {recipe.equipment && (
                                        <div className="pt-2">
                                            <span className="text-sm text-stone-500 block mb-2">Equipment</span>
                                            <div className="flex flex-wrap gap-1">
                                                {recipe.equipment.map(e => <span key={e} className="text-xs bg-white border border-stone-200 px-2 py-1 rounded text-stone-600">{e}</span>)}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <Link href="/recipes" className="block w-full py-3 text-center rounded-lg border-2 border-coffee-200 text-coffee-800 font-medium hover:bg-coffee-50 transition">
                                ← Back to All Recipes
                            </Link>
                        </aside>
                    </article>
                </div>
            </main>
        </div>
    );
}
