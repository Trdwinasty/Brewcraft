import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Breadcrumbs from '@/components/Breadcrumbs';
import RecipeCard from '@/components/RecipeCard';
import { brewingMethods, getMethodBySlug } from '@/data/methods';
import { getRecipeBySlug } from '@/data/recipes';

interface MethodPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return brewingMethods.map((method) => ({
        slug: method.slug,
    }));
}

export async function generateMetadata({ params }: MethodPageProps): Promise<Metadata> {
    const { slug } = await params;
    const method = getMethodBySlug(slug);

    if (!method) {
        return { title: 'Method Not Found' };
    }

    return {
        title: `${method.name} Guide`,
        description: method.description,
        openGraph: {
            title: `${method.name} Brewing Guide | BrewCraft`,
            description: method.description,
            images: [{ url: method.image }],
        },
    };
}

export default async function MethodPage({ params }: MethodPageProps) {
    const { slug } = await params;
    const method = getMethodBySlug(slug);

    if (!method) {
        notFound();
    }

    // Fetch recommended recipes
    const recommendedRecipes = method.recommendedRecipes
        .map(slug => getRecipeBySlug(slug))
        .filter((r): r is NonNullable<typeof r> => r !== undefined);

    return (
        <article className="min-h-screen bg-stone-50">
            {/* Editorial Header */}
            <header className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
                <Image
                    src={method.image}
                    alt={method.name}
                    fill
                    priority
                    className="object-cover animate-reveal scale-105"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/80" />

                <div className="absolute inset-0 flex flex-col justify-end items-center text-center p-6 md:p-20 text-white max-w-[1000px] mx-auto">
                    <Badge className="bg-amber-500 hover:bg-amber-600 border-none text-white text-lg px-4 py-1 mb-6">
                        {method.difficulty}
                    </Badge>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-xl">{method.name}</h1>
                    <p className="text-xl md:text-2xl text-stone-100 max-w-2xl font-light leading-relaxed mb-6">
                        {method.description}
                    </p>
                </div>
            </header>

            <div className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
                <div className="mb-12 text-center">
                    <Breadcrumbs
                        items={[
                            { label: 'Methods', href: '/methods' },
                            { label: method.name },
                        ]}
                    />
                </div>

                {/* 3-Column Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <div className="bg-white p-8 text-center border-t-4 border-coffee-800 shadow-sm">
                        <span className="block text-4xl mb-4">⚙️</span>
                        <h3 className="font-serif font-bold text-xl text-coffee-900 mb-2">Grind Size</h3>
                        <p className="text-coffee-600">{method.grindSize}</p>
                    </div>
                    <div className="bg-white p-8 text-center border-t-4 border-amber-500 shadow-sm">
                        <span className="block text-4xl mb-4">⏱️</span>
                        <h3 className="font-serif font-bold text-xl text-coffee-900 mb-2">Brew Time</h3>
                        <p className="text-coffee-600">{method.brewTime}</p>
                    </div>
                    <div className="bg-white p-8 text-center border-t-4 border-coffee-800 shadow-sm">
                        <span className="block text-4xl mb-4">👅</span>
                        <h3 className="font-serif font-bold text-xl text-coffee-900 mb-2">Profile</h3>
                        <p className="text-coffee-600">{method.tasteProfile}</p>
                    </div>
                </div>

                {/* Editorial Content */}
                <div className="grid lg:grid-cols-[1fr_350px] gap-16">
                    <div className="space-y-16">
                        <section>
                            <h2 className="text-4xl font-serif font-bold text-coffee-900 mb-8 border-b border-coffee-100 pb-4">
                                The Method
                            </h2>
                            <div className="prose prose-lg prose-stone text-coffee-700 leading-relaxed max-w-none">
                                <p className="text-2xl font-light text-coffee-600 mb-8 leading-normal">
                                    {method.whatItIs}
                                </p>
                                <p>
                                    Looking to master the {method.name}? Understanding the mechanics behind this brewing method is key. {method.description}.
                                </p>
                            </div>
                        </section>

                        <section className="grid md:grid-cols-2 gap-8">
                            <div className="bg-stone-100 p-8 rounded-sm">
                                <h3 className="font-bold text-green-800 mb-6 flex items-center gap-2 text-xl">
                                    <span>✅</span> Why we love it
                                </h3>
                                <ul className="space-y-4">
                                    {method.pros.map((pro, i) => (
                                        <li key={i} className="flex items-start gap-3 text-coffee-800">
                                            <span className="text-green-600 mt-1">•</span>
                                            {pro}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-stone-100 p-8 rounded-sm">
                                <h3 className="font-bold text-red-800 mb-6 flex items-center gap-2 text-xl">
                                    <span>⚠️</span> Considerations
                                </h3>
                                <ul className="space-y-4">
                                    {method.cons.map((con, i) => (
                                        <li key={i} className="flex items-start gap-3 text-coffee-800">
                                            <span className="text-red-500 mt-1">•</span>
                                            {con}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar w/ Recipes */}
                    <aside>
                        <div className="sticky top-24">
                            <div className="bg-coffee-900 text-white p-8 mb-8">
                                <h3 className="font-serif text-2xl font-bold mb-4">Ready to Brew?</h3>
                                <p className="text-stone-300 mb-6">
                                    Try these recommended recipes using the {method.name} method.
                                </p>
                            </div>
                            <div className="space-y-6">
                                {recommendedRecipes.map(recipe => (
                                    <div key={recipe.slug} className="transform hover:translate-x-1 transition-transform">
                                        <RecipeCard recipe={recipe} />
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 text-center">
                                <Button asChild variant="link" className="text-coffee-900 underline">
                                    <Link href="/recipes">See all recipes</Link>
                                </Button>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </article>
    );
}
