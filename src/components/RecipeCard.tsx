import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import type { Recipe } from '@/data/recipes';

interface RecipeCardProps {
    recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
    return (
        <Link href={`/recipes/${recipe.slug}`} className="block group relative bg-white rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="relative aspect-[3/4] overflow-hidden rounded-t-sm bg-stone-200">
                <Image
                    src={recipe.image}
                    alt={recipe.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />

                {/* Floating Badge */}
                <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-coffee-900 text-xs font-bold px-3 py-1 uppercase tracking-wider">
                        {recipe.difficulty}
                    </span>
                </div>
            </div>

            <div className="pt-4">
                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-coffee-900 group-hover:text-coffee-600 transition-colors mb-2">
                    {recipe.title}
                </h3>

                <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                    {recipe.description}
                </p>

                {/* Minimal Meta */}
                <div className="flex items-center gap-3 text-sm text-coffee-600/80 mb-2">
                    <span>{recipe.brewTime}</span>
                    <span className="w-1 h-1 rounded-full bg-coffee-300" />
                    <span>{recipe.yield}</span>
                </div>

                {/* Tags - subtle */}
                <div className="flex flex-wrap gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    {recipe.flavorTags.slice(0, 2).map((tag) => (
                        <span key={tag} className="text-xs text-coffee-500 uppercase tracking-wide">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
}
