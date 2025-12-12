import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-amber-200/50 bg-coffee-900 text-cream">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <span className="text-2xl">☕</span>
                            <span className="text-xl font-bold">BrewCraft</span>
                        </Link>
                        <p className="text-amber-200/80 max-w-md">
                            Curated coffee recipes and brewing guides — clear steps, ratios, and tips for better coffee at home.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-amber-400 mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/recipes" className="text-amber-200/80 hover:text-amber-100 transition-colors">
                                    All Recipes
                                </Link>
                            </li>
                            <li>
                                <Link href="/methods" className="text-amber-200/80 hover:text-amber-100 transition-colors">
                                    Brewing Methods
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-amber-200/80 hover:text-amber-100 transition-colors">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h3 className="font-semibold text-amber-400 mb-4">Categories</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/recipes?category=pour-over" className="text-amber-200/80 hover:text-amber-100 transition-colors">
                                    Pour Over
                                </Link>
                            </li>
                            <li>
                                <Link href="/recipes?category=espresso" className="text-amber-200/80 hover:text-amber-100 transition-colors">
                                    Espresso
                                </Link>
                            </li>
                            <li>
                                <Link href="/recipes?category=cold-brew" className="text-amber-200/80 hover:text-amber-100 transition-colors">
                                    Cold Brew
                                </Link>
                            </li>
                            <li>
                                <Link href="/recipes?category=milk-coffee" className="text-amber-200/80 hover:text-amber-100 transition-colors">
                                    Milk Coffee
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-amber-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-amber-200/60 text-sm">
                        © {currentYear} BrewCraft by Tricha Dwinasty. All rights reserved.
                    </p>
                    <p className="text-amber-200/60 text-sm">
                        Built with ☕ and Next.js
                    </p>
                </div>
            </div>
        </footer>
    );
}
