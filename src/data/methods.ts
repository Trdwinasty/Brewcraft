export interface BrewingMethod {
    slug: string;
    name: string;
    icon: string;
    description: string;
    whatItIs: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Expert';
    grindSize: string;
    brewTime: string;
    tasteProfile: string;
    pros: string[];
    cons: string[];
    recommendedRecipes: string[]; // slugs
    image: string;
}

export const brewingMethods: BrewingMethod[] = [
    {
        slug: 'pour-over',
        name: 'Pour Over',
        icon: '☕',
        description: 'Manual drip brewing that offers complete control over extraction.',
        whatItIs: 'Pour over is a manual brewing method where hot water is poured over coffee grounds in a filter. The water drains through the coffee and filter into a carafe or cup below. Popular pour over devices include the Hario V60, Chemex, and Kalita Wave. This method gives you complete control over water temperature, pour rate, and brewing time.',
        difficulty: 'Beginner',
        grindSize: 'Medium to Medium-fine',
        brewTime: '2:30 - 4:00',
        tasteProfile: 'Pour over produces a clean, bright cup that highlights the unique characteristics of single-origin beans. Expect clarity, nuanced flavors, and a lighter body compared to immersion methods.',
        pros: [
            'Clean, nuanced cup that highlights origin flavors',
            'Affordable equipment',
            'Full control over brewing variables',
            'Easy to experiment and adjust'
        ],
        cons: [
            'Requires attention and technique',
            'Not ideal for large batches',
            'Paper filters needed (ongoing cost)'
        ],
        recommendedRecipes: ['v60-pour-over'],
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80'
    },
    {
        slug: 'french-press',
        name: 'French Press',
        icon: '🫖',
        description: 'Full-immersion brewing for a rich, full-bodied cup.',
        whatItIs: 'The French Press (also called press pot or plunger pot) is a full-immersion brewing method. Coffee grounds steep directly in hot water for several minutes, then a metal mesh plunger separates the grounds from the liquid. This method has been popular since the early 1900s and remains one of the simplest ways to brew coffee.',
        difficulty: 'Beginner',
        grindSize: 'Coarse',
        brewTime: '4:00',
        tasteProfile: 'French Press coffee is known for its full body, rich mouthfeel, and robust flavor. The metal mesh filter allows oils and fine particles through, creating a heavier cup with more texture.',
        pros: [
            'Simple, forgiving method',
            'Full-bodied, rich flavor',
            'No paper filters needed',
            'Great for multiple cups'
        ],
        cons: [
            'Sediment in cup',
            'Can over-extract if not poured immediately',
            'Harder to clean'
        ],
        recommendedRecipes: ['french-press-classic'],
        image: 'https://images.unsplash.com/photo-1572286258217-40142c1c6a70?w=800&q=80'
    },
    {
        slug: 'espresso',
        name: 'Espresso',
        icon: '⚡',
        description: 'High-pressure extraction for concentrated, intense shots.',
        whatItIs: 'Espresso is a concentrated coffee brewed by forcing hot water through finely-ground coffee under high pressure (typically 9 bars). The result is a small, intense shot with a layer of crema on top. Espresso serves as the foundation for many popular drinks like lattes, cappuccinos, and americanos.',
        difficulty: 'Intermediate',
        grindSize: 'Fine',
        brewTime: '25-30 seconds',
        tasteProfile: 'Espresso delivers an intense, concentrated flavor with notes of chocolate, caramel, and nuts. The high-pressure extraction creates a thick, syrupy body and the characteristic crema layer.',
        pros: [
            'Quick brewing time',
            'Intense, concentrated flavor',
            'Base for many drinks',
            'Beautiful crema'
        ],
        cons: [
            'Expensive equipment',
            'Steep learning curve',
            'Requires fresh beans and good grinder'
        ],
        recommendedRecipes: ['espresso-basic', 'cappuccino'],
        image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800&q=80'
    },
    {
        slug: 'aeropress',
        name: 'AeroPress',
        icon: '🔽',
        description: 'Versatile, portable brewing with air pressure.',
        whatItIs: 'The AeroPress is a manual coffee maker invented in 2005 that uses air pressure to push water through coffee grounds. It\'s beloved by travelers and coffee enthusiasts for its portability, versatility, and ability to produce a clean cup quickly. The device is nearly indestructible and can brew both espresso-style and filter-style coffee.',
        difficulty: 'Beginner',
        grindSize: 'Medium to Fine',
        brewTime: '1:00 - 2:00',
        tasteProfile: 'AeroPress produces a clean, smooth cup with low acidity. Depending on your recipe, you can achieve anything from an espresso-like concentrate to a bright, tea-like brew.',
        pros: [
            'Extremely portable and durable',
            'Fast brew time',
            'Easy cleanup',
            'Very versatile'
        ],
        cons: [
            'Single-cup only',
            'Requires specific filters',
            'Many recipe variations can be confusing'
        ],
        recommendedRecipes: ['aeropress-standard'],
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80'
    },
    {
        slug: 'moka-pot',
        name: 'Moka Pot',
        icon: '🔥',
        description: 'Classic Italian stovetop espresso-style brewing.',
        whatItIs: 'The Moka Pot, invented by Alfonso Bialetti in 1933, is an iconic Italian coffee maker that brews strong, espresso-like coffee on a stovetop. It works by forcing steam pressure through ground coffee from the bottom chamber to the top. Nearly every Italian household has one, and it remains a beloved way to make strong coffee without an espresso machine.',
        difficulty: 'Beginner',
        grindSize: 'Medium-fine (coarser than espresso)',
        brewTime: '4-5 minutes',
        tasteProfile: 'Moka Pot coffee is stronger than drip but less intense than true espresso. Expect a bold, rich flavor with slightly more bitterness. The lack of crema distinguishes it from machine espresso.',
        pros: [
            'No electricity needed',
            'Affordable',
            'Makes strong coffee',
            'Classic, beautiful design'
        ],
        cons: [
            'Can taste bitter if overheated',
            'No true crema',
            'Requires stovetop'
        ],
        recommendedRecipes: ['moka-pot'],
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80'
    },
    {
        slug: 'cold-brew',
        name: 'Cold Brew',
        icon: '❄️',
        description: 'Slow, cold extraction for smooth, low-acid coffee.',
        whatItIs: 'Cold brew is made by steeping coarsely ground coffee in cold or room-temperature water for an extended period (typically 12-24 hours). The slow extraction produces a smooth, sweet concentrate with significantly less acidity than hot-brewed coffee. It\'s perfect for iced drinks and can be stored in the refrigerator for up to two weeks.',
        difficulty: 'Beginner',
        grindSize: 'Extra Coarse',
        brewTime: '12-24 hours',
        tasteProfile: 'Cold brew is characterized by its smooth, mellow flavor with low acidity and natural sweetness. The cold extraction brings out chocolate and caramel notes while reducing bitter compounds.',
        pros: [
            'Smooth, low-acid flavor',
            'Make large batches',
            'Stores well (up to 2 weeks)',
            'No special equipment needed'
        ],
        cons: [
            'Long preparation time',
            'Uses more coffee',
            'Less complex flavors'
        ],
        recommendedRecipes: ['cold-brew-concentrate'],
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80'
    }
];

export function getMethodBySlug(slug: string): BrewingMethod | undefined {
    return brewingMethods.find(m => m.slug === slug);
}
