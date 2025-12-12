export type Recipe = {
    slug: string;
    title: string;
    description: string;
    image: string; // public path e.g. /images/recipes/v60.jpg
    excerpt?: string;
    time?: string; // e.g. "PT3M" or human "3 min"
    difficulty?: 'Beginner' | 'Intermediate' | 'Expert' | string;
    tags?: string[];
    yield?: string;
    ingredients: string[];
    instructions: string[];
    // Legacy fields mapping for compatibility
    category?: string;
    flavorTags?: string[];
    prepTime?: string;
    brewTime?: string;
    grindSize?: string;
    totalTime?: string;
    equipment?: string[];
    ratio?: string;
    steps?: string[];
    tips?: string[];
};

export const categories = [
    { name: 'Pour Over', slug: 'pour-over', icon: '💧' },
    { name: 'Immersion', slug: 'immersion', icon: '⚗️' },
    { name: 'Espresso', slug: 'espresso', icon: '☕' },
    { name: 'Cold Brew', slug: 'cold-brew', icon: '❄️' },
];

export const flavorTags = [
    'Fruity', 'Nutty', 'Chocolatey', 'Floral', 'Bold', 'Smooth', 'Clean', 'Intense', 'Sweet', 'Balanced'
];

export const recipes: Recipe[] = [
    {
        slug: 'v60-pour-over',
        title: 'V60 Pour Over',
        description: 'Clean, bright cup using V60 pour-over. Easy to control and great for single-origin beans.',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d72479db0?w=800&q=80',
        excerpt: 'Classic single-cup pour-over with simple pulsed pours for consistent extraction.',
        time: '3 min',
        difficulty: 'Beginner',
        tags: ['pour-over', 'v60', 'bright'],
        yield: '1 cup',
        ingredients: ['15 g coffee (medium-fine)', '250 ml water (92°C)'],
        instructions: [
            'Rinse filter with hot water and discard rinse.',
            'Add ground coffee and level the bed.',
            'Bloom: pour 30 ml water and wait 30 seconds.',
            'Pour remaining water in 2–3 pulses, maintain steady concentric pours.',
            'Let drain, serve immediately.'
        ],
        // Mapping for UI components
        category: 'Pour Over',
        flavorTags: ['Clean', 'Bright', 'Floral'],
        brewTime: '3 min',
        totalTime: '5 min',
        prepTime: '2 min',
        grindSize: 'Medium-Fine',
        equipment: ['V60 Dripper', 'Paper Filter', 'Gooseneck Kettle', 'Scale'],
        ratio: '1:16',
        steps: [
            'Rinse filter with hot water and discard rinse.',
            'Add ground coffee and level the bed.',
            'Bloom: pour 30 ml water and wait 30 seconds.',
            'Pour remaining water in 2–3 pulses, maintain steady concentric pours.',
            'Let drain, serve immediately.'
        ],
        tips: ['Keep water temp stable', 'Don\'t pour on the walls']
    },
    {
        slug: 'french-press',
        title: 'French Press — Classic',
        description: 'Full-bodied cup with more oils and body using French Press.',
        image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80',
        excerpt: 'Robust, full-bodied brew ideal for coarser grinds and relaxed brewing.',
        time: '4 min',
        difficulty: 'Beginner',
        tags: ['french-press', 'full-bodied'],
        yield: '1–2 cups',
        ingredients: ['18 g coffee (coarse)', '300 ml water (93°C)'],
        instructions: [
            'Add grounds to the press.',
            'Pour all water evenly and stir gently.',
            'Place plunger assembly on top but do not plunge; steep 4 minutes.',
            'Slowly press down and serve immediately.'
        ],
        category: 'Immersion',
        flavorTags: ['Bold', 'Full-bodied', 'Rich'],
        brewTime: '4 min',
        totalTime: '6 min',
        prepTime: '2 min',
        grindSize: 'Coarse',
        equipment: ['French Press', 'Kettle', 'Scale'],
        ratio: '1:16',
        steps: [
            'Add grounds to the press.',
            'Pour all water evenly and stir gently.',
            'Place plunger assembly on top but do not plunge; steep 4 minutes.',
            'Slowly press down and serve immediately.'
        ],
        tips: ['Don\'t squeeze the grounds too hard', 'Decant immediately to stop extraction']
    },
    {
        slug: 'espresso-basic-shot',
        title: 'Espresso — Basic Shot',
        description: 'Concentrated shot — focus on dose, tamp, and extraction time.',
        image: 'https://images.unsplash.com/photo-1610889556283-1f19973d421d?w=800&q=80',
        excerpt: 'Short, concentrated, and requires attention to dose and extraction.',
        time: '0.5 min',
        difficulty: 'Intermediate',
        tags: ['espresso', 'machines'],
        yield: '1 shot',
        ingredients: ['18 g coffee (fine)', '36 g yield (1:2)'],
        instructions: [
            'Dose 18 g, distribute and tamp evenly.',
            'Pull the shot aiming for 25–30 seconds to 36 g yield.',
            'Taste and adjust grind/time accordingly.'
        ],
        category: 'Espresso',
        flavorTags: ['Intense', 'Rich', 'Syrupy'],
        brewTime: '30 sec',
        totalTime: '2 min',
        prepTime: '1.5 min',
        grindSize: 'Fine',
        equipment: ['Espresso Machine', 'Tamper', 'Scale'],
        ratio: '1:2',
        steps: [
            'Dose 18 g, distribute and tamp evenly.',
            'Pull the shot aiming for 25–30 seconds to 36 g yield.',
            'Taste and adjust grind/time accordingly.'
        ],
        tips: ['WDT helps distribution', 'Tamp level']
    },
    {
        slug: 'cold-brew',
        title: 'Cold Brew — Easy',
        description: 'Low acidity, smooth cold brew concentrate — makes long-lasting concentrate.',
        image: 'https://images.unsplash.com/photo-1517701604599-bb29b5c7fa69?w=800&q=80',
        excerpt: 'Long steep for a smooth, low-acid concentrate — make ahead and store.',
        time: '12–18 hrs',
        difficulty: 'Beginner',
        tags: ['cold-brew', 'smooth'],
        yield: '1 L concentrate',
        ingredients: ['100 g coffee (coarse)', '1 L cold water'],
        instructions: [
            'Combine grounds and water in a jar and stir to saturate.',
            'Steep in fridge for 12–18 hours.',
            'Filter through a fine mesh or cheesecloth and dilute 1:1 to serve.'
        ],
        category: 'Cold Brew',
        flavorTags: ['Smooth', 'Chocolatey', 'Sweet'],
        brewTime: '12-18h',
        totalTime: '18h',
        prepTime: '5 min',
        grindSize: 'Coarse',
        equipment: ['Mason Jar', 'Cheesecloth', 'Scale'],
        ratio: '1:10',
        steps: [
            'Combine grounds and water in a jar and stir to saturate.',
            'Steep in fridge for 12–18 hours.',
            'Filter through a fine mesh or cheesecloth and dilute 1:1 to serve.'
        ],
        tips: ['Use filtered water', 'Don\'t stir during steeping']
    },
    {
        slug: 'aeropress-basic',
        title: 'AeroPress — Quick & Clean',
        description: 'Versatile, fast, and forgiving — good for travel and experimentation.',
        image: 'https://images.unsplash.com/photo-1589408663845-667cb56eb3b6?w=800&q=80',
        excerpt: 'Short steep and press yields clean, espresso-like concentrate.',
        time: '2 min',
        difficulty: 'Beginner',
        tags: ['aeropress', 'travel'],
        yield: '1 cup',
        ingredients: ['15 g coffee (medium-fine)', '200 ml water (93°C)'],
        instructions: [
            'Insert filter and preheat the chamber and filter.',
            'Add coffee, pour water, stir, and let steep 60 seconds.',
            'Press gently for ~30 seconds and serve.'
        ],
        category: 'Immersion',
        flavorTags: ['Clean', 'Balanced', 'Sweet'],
        brewTime: '2 min',
        totalTime: '3 min',
        prepTime: '1 min',
        grindSize: 'Medium-Fine',
        equipment: ['AeroPress', 'Filter', 'Kettle'],
        ratio: '1:13',
        steps: [
            'Insert filter and preheat the chamber and filter.',
            'Add coffee, pour water, stir, and let steep 60 seconds.',
            'Press gently for ~30 seconds and serve.'
        ],
        tips: ['Inverted method prevents leaks', 'Press gently']
    },
    {
        slug: 'moka-pot',
        title: 'Moka Pot — Stovetop Intensity',
        description: 'Strong flavored coffee similar to espresso using stovetop brewer.',
        image: 'https://images.unsplash.com/photo-1517088455889-bfa75135412c?w=800&q=80',
        excerpt: 'Intense and bold — use medium-fine grind and keep heat steady.',
        time: '5–7 min',
        difficulty: 'Intermediate',
        tags: ['moka-pot', 'stovetop'],
        yield: '200 ml',
        ingredients: ['18 g coffee (medium-fine)', '300 ml water (hot)'],
        instructions: [
            'Fill base with hot water just below safety valve.',
            'Add grounds to filter basket; assemble and place on low-medium heat.',
            'Remove when top chamber is full and pour immediately.'
        ],
        category: 'Espresso',
        flavorTags: ['Strong', 'Bold', 'Bittersweet'],
        brewTime: '5 min',
        totalTime: '7 min',
        prepTime: '2 min',
        grindSize: 'Medium-Fine',
        equipment: ['Moka Pot', 'Stove', 'Grinder'],
        ratio: '1:7',
        steps: [
            'Fill base with hot water just below safety valve.',
            'Add grounds to filter basket; assemble and place on low-medium heat.',
            'Remove when top chamber is full and pour immediately.'
        ],
        tips: ['Use hot water for cleaner taste', 'Cool base under tap to stop brew']
    },
    {
        slug: 'chemex-clean-cup',
        title: 'Chemex — Clean & Bright',
        description: 'Large-format pour-over with thick paper filters for clarity.',
        image: 'https://images.unsplash.com/photo-1544498522-6e27a691350a?w=800&q=80',
        excerpt: 'Thick filter produces very clean cup with bright clarity.',
        time: '4 min',
        difficulty: 'Intermediate',
        tags: ['chemex', 'pour-over'],
        yield: '2–4 cups',
        ingredients: ['30 g coffee (medium)', '480 ml water (92–94°C)'],
        instructions: [
            'Rinse thick filter, add grounds.',
            'Bloom with 60 ml water for 30 seconds.',
            'Pour remaining water in steady concentric moves until 480 ml, total ~3.5–4 min.',
            'Serve and enjoy.'
        ],
        category: 'Pour Over',
        flavorTags: ['Clean', 'Bright', 'Tea-like'],
        brewTime: '4 min',
        totalTime: '6 min',
        prepTime: '2 min',
        grindSize: 'Medium-Coarse',
        equipment: ['Chemex', 'Bonded Filter', 'Gooseneck Kettle'],
        ratio: '1:16',
        steps: [
            'Rinse thick filter, add grounds.',
            'Bloom with 60 ml water for 30 seconds.',
            'Pour remaining water in steady concentric moves until 480 ml, total ~3.5–4 min.',
            'Serve and enjoy.'
        ],
        tips: ['Rinse filter thoroughly', 'Keep filter from sealing pouring spout']
    },
    {
        slug: 'latte-milk-espresso',
        title: 'Latte — Milk & Espresso',
        description: 'Smooth milk-forward drink combining espresso and steamed milk.',
        image: 'https://images.unsplash.com/photo-1570968992193-27c95e9dd5c5?w=800&q=80',
        excerpt: 'Requires milk steaming skill for silky microfoam and latte art.',
        time: '3 min',
        difficulty: 'Intermediate',
        tags: ['latte', 'milk', 'espresso'],
        yield: '1 cup',
        ingredients: ['1 shot espresso', '180 ml steamed milk'],
        instructions: [
            'Pull a shot of espresso.',
            'Steam milk to 60–65°C for microfoam.',
            'Pour milk over espresso, create latte art if desired.'
        ],
        category: 'Espresso',
        flavorTags: ['Creamy', 'Sweet', 'Milky'],
        brewTime: '3 min',
        totalTime: '5 min',
        prepTime: '2 min',
        grindSize: 'Fine',
        equipment: ['Espresso Machine', 'Jug', 'Cup'],
        ratio: '1:4',
        steps: [
            'Pull a shot of espresso.',
            'Steam milk to 60–65°C for microfoam.',
            'Pour milk over espresso, create latte art if desired.'
        ],
        tips: ['Stretch milk early', 'Monitor temp closely']
    },
    {
        slug: 'cold-drip',
        title: 'Cold Drip — Concentrated & Clean',
        description: 'Slow, drop-by-drop extraction producing delicate, clean concentrate.',
        image: 'https://images.unsplash.com/photo-1520623307559-009d73d63b2f?w=800&q=80',
        excerpt: 'Slow extraction with delicate flavors; requires a slow drip setup.',
        time: '4–8 hrs',
        difficulty: 'Expert',
        tags: ['cold-drip', 'concentrate'],
        yield: '500 ml concentrate',
        ingredients: ['100 g coffee (medium-coarse)', '1 L cold water'],
        instructions: [
            'Set up drip tower and add grounds.',
            'Adjust drip rate to ~1 drop/sec and run 4–8 hours.',
            'Store concentrate refrigerated and serve over ice.'
        ],
        category: 'Cold Brew',
        flavorTags: ['Delicate', 'Clean', 'Complex'],
        brewTime: '6h',
        totalTime: '6.5h',
        prepTime: '30 min',
        grindSize: 'Medium',
        equipment: ['Cold Drip Tower', 'Filter', 'Ice'],
        ratio: '1:10',
        steps: [
            'Set up drip tower and add grounds.',
            'Adjust drip rate to ~1 drop/sec and run 4–8 hours.',
            'Store concentrate refrigerated and serve over ice.'
        ],
        tips: ['Use ice water if possible', 'Ensure even drip rate']
    },
    {
        slug: 'turkish-coffee',
        title: 'Turkish Coffee — Traditional',
        description: 'Unfiltered, thick coffee brewed in a cezve; requires fine grind and sugar optional.',
        image: 'https://images.unsplash.com/photo-1563204936-224424388836?w=800&q=80',
        excerpt: 'Traditional unfiltered method producing thick, aromatic cup.',
        time: '5 min',
        difficulty: 'Expert',
        tags: ['turkish', 'traditional'],
        yield: '1 cup',
        ingredients: ['1.5 tsp coffee (extra-fine)', '70 ml water', 'sugar to taste (optional)'],
        instructions: [
            'Add coffee, water, and sugar to cezve.',
            'Heat slowly until foam forms, remove before boil, repeat 2x.',
            'Pour and allow grounds to settle before sipping.'
        ],
        category: 'Immersion',
        flavorTags: ['Thick', 'Strong', 'Aromatic'],
        brewTime: '5 min',
        totalTime: '7 min',
        prepTime: '2 min',
        grindSize: 'Extra-Fine',
        equipment: ['Cezve (Ibrik)', 'Heat Source', 'Spoon'],
        ratio: '1:10',
        steps: [
            'Add coffee, water, and sugar to cezve.',
            'Heat slowly until foam forms, remove before boil, repeat 2x.',
            'Pour and allow grounds to settle before sipping.'
        ],
        tips: ['Don\'t let it boil over', 'Serve with water']
    }
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
    return recipes.find((recipe) => recipe.slug === slug);
}

export function getFeaturedRecipe(): Recipe {
    return recipes[0];
}

export default recipes;
