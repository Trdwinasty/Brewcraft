import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import MethodCard from '@/components/MethodCard';
import { brewingMethods } from '@/data/methods';

export const metadata: Metadata = {
    title: 'Brewing Methods | BrewCraft',
    description: 'Explore different coffee brewing methods and find the perfect one for your taste.',
};

export default function MethodsPage() {
    return (
        <div className="animate-fade-in">
            {/* Header */}
            {/* Hero */}
            <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=1600&q=80"
                        alt="Brewing methods"
                        className="w-full h-full object-cover grayscale-[30%]"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 animate-fade-in-up">
                        Brewing Methods
                    </h1>
                    <p className="text-xl text-stone-200 max-w-2xl mx-auto font-light animate-fade-in-up delay-100">
                        Master the science of extraction with our comprehensive guides.
                    </p>
                </div>
            </div>

            {/* Breadcrumbs */}
            <div className="bg-stone-50 border-b border-stone-200">
                <div className="container mx-auto px-4 py-4">
                    <Breadcrumbs
                        items={[
                            { label: 'Home', href: '/' },
                            { label: 'Brewing Methods' },
                        ]}
                    />
                </div>
            </div>

            {/* Methods Grid */}
            <section className="py-12 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {brewingMethods.map((method) => (
                            <MethodCard key={method.slug} method={method} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
