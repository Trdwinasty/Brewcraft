const siteUrl = 'https://trdwi.vercel.app';

const seoConfig = {
    title: 'BrewCraft — Coffee Recipes & Brewing Guides | Tricha Dwinasty',
    description: 'Curated coffee recipes and brewing techniques — clear steps, ratios, and tips for better coffee at home.',
    canonical: siteUrl,
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteUrl,
        siteName: 'BrewCraft',
        title: 'BrewCraft — Coffee Recipes & Brewing Guides',
        description: 'Curated coffee recipes and brewing techniques — clear steps, ratios, and tips for better coffee at home.',
        images: [
            {
                url: `${siteUrl}/og-default.png`,
                width: 1200,
                height: 630,
                alt: 'BrewCraft Coffee Recipes',
            },
        ],
    },
    twitter: {
        handle: '@trdwi',
        site: siteUrl,
        cardType: 'summary_large_image',
    },
};

export default seoConfig;
export { siteUrl };
