import Script from 'next/script';
import type { Recipe } from '@/data/recipes';

interface RecipeSEOProps {
    recipe: Recipe;
}

export default function RecipeSEO({ recipe }: RecipeSEOProps) {
    const siteUrl = 'https://trdwi.vercel.app';

    const jsonLd = {
        '@context': 'https://schema.org/',
        '@type': 'Recipe',
        name: recipe.title,
        description: recipe.description,
        image: [recipe.image],
        author: {
            '@type': 'Person',
            name: 'Tricha Dwinasty',
        },
        prepTime: recipe.prepTime,
        totalTime: recipe.totalTime,
        recipeYield: recipe.yield,
        recipeCategory: 'Beverage',
        recipeCuisine: 'Coffee',
        recipeIngredient: recipe.ingredients,
        recipeInstructions: recipe.steps.map((step, index) => ({
            '@type': 'HowToStep',
            position: index + 1,
            text: step,
        })),
        keywords: recipe.flavorTags.join(', '),
        url: `${siteUrl}/recipes/${recipe.slug}`,
    };

    return (
        <Script
            id={`recipe-jsonld-${recipe.slug}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
