export interface Recipe {
    slug: string;
    title: string;
    description: string;
    image: string;
    category: 'pour-over' | 'espresso' | 'cold-brew' | 'milk-coffee' | 'french-press' | 'aeropress' | 'moka-pot';
    difficulty: 'Beginner' | 'Intermediate' | 'Expert';
    brewTime: string;
    prepTime: string;
    totalTime: string;
    yield: string;
    ratio: string;
    grindSize: string;
    ingredients: string[];
    equipment: string[];
    steps: string[];
    instructions: string[];
    tips: string[];
    flavorTags: string[];
    tags: string[];
    time?: string;
    temp?: string;
    excerpt?: string;
    featured?: boolean;
}

export const recipes: Recipe[] = [
    {
        slug: 'v60-pour-over',
        title: 'V60 Pour Over',
        description: 'A clean, bright cup using a V60 pour-over. Easy to control and great for single-origin coffee.',
        image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80',
        category: 'pour-over',
        difficulty: 'Beginner',
        brewTime: '2:30-3:00',
        prepTime: 'PT2M',
        totalTime: 'PT5M',
        yield: '1 cup',
        ratio: '1:16 (coffee:water)',
        grindSize: 'Medium-fine',
        ingredients: ['15g coffee (medium-fine)', '250ml water (92°C)'],
        equipment: ['V60 dripper', 'V60 paper filter', 'Gooseneck kettle', 'Scale', 'Timer', 'Server or mug'],
        steps: [
            'Rinse the paper filter with hot water to remove paper taste and preheat the dripper.',
            'Add 15g of ground coffee and level the bed with a gentle shake.',
            'Start timer and pour 30ml of water to bloom. Wait 30 seconds.',
            'Pour in slow, circular motions in 2-3 pulses until you reach 250ml.',
            'Let it drain completely. Target finish time: 2:30-3:00.',
            'Remove dripper, swirl server gently, and serve.'
        ],
        instructions: [
            'Rinse the paper filter with hot water to remove paper taste and preheat the dripper.',
            'Add 15g of ground coffee and level the bed with a gentle shake.',
            'Start timer and pour 30ml of water to bloom. Wait 30 seconds.',
            'Pour in slow, circular motions in 2-3 pulses until you reach 250ml.',
            'Let it drain completely. Target finish time: 2:30-3:00.',
            'Remove dripper, swirl server gently, and serve.'
        ],
        tips: [
            'Use a gooseneck kettle for better pour control.',
            'Adjust grind finer if draining too fast, coarser if too slow.',
            'Water temperature between 90-96°C works best.'
        ],
        flavorTags: ['Floral', 'Fruity', 'Clean'],
        tags: ['Floral', 'Fruity', 'Clean'],
        time: '2:30-3:00',
        temp: '92°C',
        featured: true
    },
    {
        slug: 'french-press-classic',
        title: 'French Press — Classic',
        description: 'Full-bodied cup with more oils and body using French Press. Simple and forgiving method.',
        image: 'https://images.unsplash.com/photo-1572286258217-40142c1c6a70?w=800&q=80',
        category: 'french-press',
        difficulty: 'Beginner',
        brewTime: '4:00',
        prepTime: 'PT1M',
        totalTime: 'PT5M',
        yield: '2 cups',
        ratio: '1:15 (coffee:water)',
        grindSize: 'Coarse',
        ingredients: ['30g coffee (coarse)', '450ml water (93°C)'],
        equipment: ['French Press', 'Kettle', 'Scale', 'Timer', 'Spoon'],
        steps: [
            'Preheat the French Press with hot water, then discard.',
            'Add 30g of coarsely ground coffee.',
            'Pour all 450ml of water evenly over the grounds.',
            'Stir gently and place the lid on (without pressing).',
            'Wait 4 minutes.',
            'Press the plunger slowly and steadily.',
            'Pour immediately to avoid over-extraction.'
        ],
        instructions: [
            'Preheat the French Press with hot water, then discard.',
            'Add 30g of coarsely ground coffee.',
            'Pour all 450ml of water evenly over the grounds.',
            'Stir gently and place the lid on (without pressing).',
            'Wait 4 minutes.',
            'Press the plunger slowly and steadily.',
            'Pour immediately to avoid over-extraction.'
        ],
        tips: [
            'Use coarse grind to prevent sediment passing through the mesh.',
            'Pour immediately after pressing to stop extraction.',
            'Clean the mesh filter regularly for best results.'
        ],
        flavorTags: ['Chocolatey', 'Nutty', 'Full-bodied'],
        tags: ['Chocolatey', 'Nutty', 'Full-bodied'],
        time: '4:00',
        temp: '93°C'
    },
    {
        slug: 'espresso-basic',
        title: 'Espresso — Basic Shot',
        description: 'Concentrated shot that forms the base of many coffee drinks. Requires espresso machine.',
        image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=800&q=80',
        category: 'espresso',
        difficulty: 'Intermediate',
        brewTime: '25-30 seconds',
        prepTime: 'PT2M',
        totalTime: 'PT3M',
        yield: '1 shot (36g)',
        ratio: '1:2 (dose:yield)',
        grindSize: 'Fine',
        ingredients: ['18g coffee (fine)', 'Fresh filtered water'],
        equipment: ['Espresso machine', 'Grinder', 'Tamper', 'Scale', 'Timer', 'Espresso cup'],
        steps: [
            'Grind 18g of coffee directly into the portafilter.',
            'Distribute grounds evenly using WDT tool or finger.',
            'Tamp with firm, level pressure (about 15-20kg).',
            'Lock portafilter into the group head.',
            'Start shot and timer simultaneously.',
            'Target 36g output in 25-30 seconds.',
            'Adjust grind finer if too fast, coarser if too slow.'
        ],
        instructions: [
            'Grind 18g of coffee directly into the portafilter.',
            'Distribute grounds evenly using WDT tool or finger.',
            'Tamp with firm, level pressure (about 15-20kg).',
            'Lock portafilter into the group head.',
            'Start shot and timer simultaneously.',
            'Target 36g output in 25-30 seconds.',
            'Adjust grind finer if too fast, coarser if too slow.'
        ],
        tips: [
            'Use fresh beans (7-21 days after roast date).',
            'Keep equipment clean for consistent extraction.',
            'Dial in your grinder with small adjustments.'
        ],
        flavorTags: ['Intense', 'Chocolatey', 'Caramel'],
        tags: ['Intense', 'Chocolatey', 'Caramel'],
        time: '25-30s',
        temp: '90-96°C'
    },
    {
        slug: 'cold-brew-concentrate',
        title: 'Cold Brew Concentrate',
        description: 'Smooth, low-acidity coffee concentrate perfect for iced drinks. Steep overnight.',
        image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80',
        category: 'cold-brew',
        difficulty: 'Beginner',
        brewTime: '12-18 hours',
        prepTime: 'PT5M',
        totalTime: 'PT18H',
        yield: '1L concentrate',
        ratio: '1:8 (coffee:water)',
        grindSize: 'Extra Coarse',
        ingredients: ['100g coffee (extra coarse)', '800ml cold filtered water'],
        equipment: ['Large jar or pitcher', 'Filter or cheesecloth', 'Scale', 'Refrigerator'],
        steps: [
            'Combine 100g coarsely ground coffee with 800ml cold water in a jar.',
            'Stir thoroughly to ensure all grounds are saturated.',
            'Cover and refrigerate for 12-18 hours.',
            'Strain through a fine mesh filter or cheesecloth.',
            'Filter again through paper filter for clarity (optional).',
            'Dilute concentrate 1:1 with water or milk to serve.',
            'Store concentrate in refrigerator up to 2 weeks.'
        ],
        instructions: [
            'Combine 100g coarsely ground coffee with 800ml cold water in a jar.',
            'Stir thoroughly to ensure all grounds are saturated.',
            'Cover and refrigerate for 12-18 hours.',
            'Strain through a fine mesh filter or cheesecloth.',
            'Filter again through paper filter for clarity (optional).',
            'Dilute concentrate 1:1 with water or milk to serve.',
            'Store concentrate in refrigerator up to 2 weeks.'
        ],
        tips: [
            'Longer steep time = stronger, more bitter concentrate.',
            'Use extra coarse grind to make filtering easier.',
            'Add ice cubes made from coffee to avoid dilution.'
        ],
        flavorTags: ['Smooth', 'Chocolatey', 'Low-acid'],
        tags: ['Smooth', 'Chocolatey', 'Low-acid'],
        time: '12-18h',
        temp: 'Cold'
    },
    {
        slug: 'cappuccino',
        title: 'Classic Cappuccino',
        description: 'Perfect balance of espresso, steamed milk, and foam. A café classic you can make at home.',
        image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&q=80',
        category: 'milk-coffee',
        difficulty: 'Intermediate',
        brewTime: '3-4 minutes',
        prepTime: 'PT2M',
        totalTime: 'PT5M',
        yield: '1 cup (150ml)',
        ratio: '1:1:1 (espresso:milk:foam)',
        grindSize: 'Fine (for espresso)',
        ingredients: ['1 shot espresso (30ml)', '60ml whole milk', '60ml milk foam'],
        equipment: ['Espresso machine with steam wand', 'Milk pitcher', 'Thermometer (optional)', 'Cappuccino cup'],
        steps: [
            'Pull a single shot of espresso into a preheated cup.',
            'Pour cold milk into a clean, cold pitcher (about 100ml for one cap).',
            'Purge steam wand, then submerge tip just below milk surface.',
            'Steam milk: stretch for 2-3 seconds, then texture until 60-65°C.',
            'Tap pitcher to remove large bubbles, swirl to polish.',
            'Pour milk into espresso with a steady stream.',
            'Finish with a gentle wiggle for latte art (optional).'
        ],
        instructions: [
            'Pull a single shot of espresso into a preheated cup.',
            'Pour cold milk into a clean, cold pitcher (about 100ml for one cap).',
            'Purge steam wand, then submerge tip just below milk surface.',
            'Steam milk: stretch for 2-3 seconds, then texture until 60-65°C.',
            'Tap pitcher to remove large bubbles, swirl to polish.',
            'Pour milk into espresso with a steady stream.',
            'Finish with a gentle wiggle for latte art (optional).'
        ],
        tips: [
            'Use cold, fresh whole milk for best foam.',
            'Keep steam wand tip at the right depth for microfoam.',
            'Practice makes perfect — latte art comes with time.'
        ],
        flavorTags: ['Creamy', 'Balanced', 'Silky'],
        tags: ['Creamy', 'Balanced', 'Silky'],
        time: '3-4m',
        temp: '60-65°C'
    },
    {
        slug: 'aeropress-standard',
        title: 'AeroPress — Standard',
        description: 'Versatile, portable brewing method. Clean cup with full flavor extraction.',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80',
        category: 'aeropress',
        difficulty: 'Beginner',
        brewTime: '1:30-2:00',
        prepTime: 'PT1M',
        totalTime: 'PT3M',
        yield: '1 cup',
        ratio: '1:12 (coffee:water)',
        grindSize: 'Medium-fine',
        ingredients: ['15g coffee (medium-fine)', '180ml water (85°C)'],
        equipment: ['AeroPress', 'Paper filter', 'Kettle', 'Scale', 'Timer', 'Stirrer'],
        steps: [
            'Insert paper filter and rinse with hot water.',
            'Add 15g of ground coffee to the AeroPress chamber.',
            'Start timer and pour 180ml water at 85°C.',
            'Stir gently for 10 seconds.',
            'Insert plunger to create seal and wait until 1:30.',
            'Press steadily for 20-30 seconds until you hear a hiss.',
            'Dilute with water if desired for Americano-style.'
        ],
        instructions: [
            'Insert paper filter and rinse with hot water.',
            'Add 15g of ground coffee to the AeroPress chamber.',
            'Start timer and pour 180ml water at 85°C.',
            'Stir gently for 10 seconds.',
            'Insert plunger to create seal and wait until 1:30.',
            'Press steadily for 20-30 seconds until you hear a hiss.',
            'Dilute with water if desired for Americano-style.'
        ],
        tips: [
            'Try inverted method for longer steeping without drip.',
            'Lower water temperature reduces bitterness.',
            'Experiment with different grind sizes and ratios.'
        ],
        flavorTags: ['Clean', 'Bright', 'Versatile'],
        tags: ['Clean', 'Bright', 'Versatile'],
        time: '1:30-2:00',
        temp: '85°C'
    },
    {
        slug: 'moka-pot',
        title: 'Moka Pot Stovetop',
        description: 'Classic Italian stovetop brewing. Strong, espresso-like coffee without a machine.',
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80',
        category: 'moka-pot',
        difficulty: 'Beginner',
        brewTime: '4-5 minutes',
        prepTime: 'PT2M',
        totalTime: 'PT7M',
        yield: '2 cups',
        ratio: 'Fill basket fully',
        grindSize: 'Medium-fine (slightly coarser than espresso)',
        ingredients: ['18g coffee (medium-fine)', 'Fresh water to valve line'],
        equipment: ['Moka pot', 'Stovetop', 'Kettle (for preheating)', 'Towel'],
        steps: [
            'Fill bottom chamber with hot water up to the safety valve.',
            'Fill the filter basket with ground coffee, level but don\'t tamp.',
            'Assemble the Moka pot tightly (use towel to avoid burns).',
            'Place on medium-low heat with lid open.',
            'When coffee starts flowing, reduce heat to lowest setting.',
            'Remove from heat when you hear gurgling/sputtering.',
            'Wrap base with cold towel to stop extraction.',
            'Stir the coffee in the upper chamber and serve.'
        ],
        instructions: [
            'Fill bottom chamber with hot water up to the safety valve.',
            'Fill the filter basket with ground coffee, level but don\'t tamp.',
            'Assemble the Moka pot tightly (use towel to avoid burns).',
            'Place on medium-low heat with lid open.',
            'When coffee starts flowing, reduce heat to lowest setting.',
            'Remove from heat when you hear gurgling/sputtering.',
            'Wrap base with cold towel to stop extraction.',
            'Stir the coffee in the upper chamber and serve.'
        ],
        tips: [
            'Use pre-heated water to reduce burn time.',
            'Don\'t tamp the coffee — just level it.',
            'Low heat prevents bitter, burnt flavors.'
        ],
        flavorTags: ['Strong', 'Bold', 'Traditional'],
        tags: ['Strong', 'Bold', 'Traditional'],
        time: '4-5m',
        temp: 'Medium-Low'
    },
    {
        slug: 'iced-latte',
        title: 'Iced Latte',
        description: 'Refreshing cold espresso drink with milk over ice. Perfect for hot days.',
        image: 'https://images.unsplash.com/photo-1517959105821-eaf2591984ca?w=800&q=80',
        category: 'milk-coffee',
        difficulty: 'Beginner',
        brewTime: '2 minutes',
        prepTime: 'PT1M',
        totalTime: 'PT3M',
        yield: '1 tall glass',
        ratio: '1 shot : 200ml milk',
        grindSize: 'Fine (for espresso)',
        ingredients: ['1-2 shots espresso', '200ml cold milk', 'Ice cubes', 'Simple syrup (optional)'],
        equipment: ['Espresso machine or AeroPress', 'Tall glass', 'Spoon'],
        steps: [
            'Pull 1-2 shots of espresso (or brew strong AeroPress).',
            'Fill a tall glass with ice cubes.',
            'Add simple syrup or sweetener if desired.',
            'Pour cold milk over ice.',
            'Pour espresso over the milk for a layered look.',
            'Stir before drinking, or enjoy layered.'
        ],
        instructions: [
            'Pull 1-2 shots of espresso (or brew strong AeroPress).',
            'Fill a tall glass with ice cubes.',
            'Add simple syrup or sweetener if desired.',
            'Pour cold milk over ice.',
            'Pour espresso over the milk for a layered look.',
            'Stir before drinking, or enjoy layered.'
        ],
        tips: [
            'Use coffee ice cubes to prevent dilution.',
            'Try oat milk for a creamy, dairy-free option.',
            'Add vanilla syrup for a vanilla latte twist.'
        ],
        flavorTags: ['Refreshing', 'Creamy', 'Sweet'],
        tags: ['Refreshing', 'Creamy', 'Sweet'],
        time: '2m',
        temp: 'Cold'
    }
];

export function getRecipeBySlug(slug: string): Recipe | undefined {
    return recipes.find(r => r.slug === slug);
}

export function getRecipesByCategory(category: Recipe['category']): Recipe[] {
    return recipes.filter(r => r.category === category);
}

export function getRecipesByFlavorTag(tag: string): Recipe[] {
    return recipes.filter(r => r.flavorTags.includes(tag));
}

export function getFeaturedRecipe(): Recipe {
    return recipes.find(r => r.featured) || recipes[0];
}

export const flavorTags = ['Floral', 'Fruity', 'Chocolatey', 'Nutty', 'Clean', 'Smooth', 'Intense', 'Creamy', 'Bold', 'Refreshing'];

export const categories = [
    { slug: 'pour-over', name: 'Pour Over', icon: '☕', description: 'Clean, bright, and nuanced flavors' },
    { slug: 'espresso', name: 'Espresso', icon: '⚡', description: 'Concentrated and intense shots' },
    { slug: 'cold-brew', name: 'Cold Brew', icon: '❄️', description: 'Smooth, refreshing, low-acid' },
    { slug: 'milk-coffee', name: 'Milk Coffee', icon: '🥛', description: 'Creamy lattes and cappuccinos' },
] as const;

export default recipes;
