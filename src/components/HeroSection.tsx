import Image from 'next/image';

interface HeroSectionProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
    children?: React.ReactNode;
}

export default function HeroSection({ title, subtitle, backgroundImage, children, layout = 'immersive' }: HeroSectionProps & { layout?: 'immersive' | 'split' }) {
    if (layout === 'split') {
        return (
            <section className="bg-gradient-to-b from-coffee-50 via-cream to-white py-20 lg:py-32">
                <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 text-center lg:text-left">
                        <h1 className="text-4xl lg:text-6xl font-serif font-bold text-brand-primary mb-6 leading-tight animate-fade-in-up">
                            {title}
                        </h1>
                        {subtitle && (
                            <p className="text-lg lg:text-xl text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed animate-fade-in-up delay-100">
                                {subtitle}
                            </p>
                        )}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-200">
                            {children}
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-reveal delay-100 rotate-1 hover:rotate-0 transition-transform duration-700">
                        <Image
                            src={backgroundImage}
                            alt="Hero visual"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax-like feel (fixed) */}
            <div className="absolute inset-0">
                <Image
                    src={backgroundImage}
                    alt=""
                    fill
                    priority
                    className="object-cover animate-reveal scale-105"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto flex flex-col items-center">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 tracking-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] opacity-0 animate-fade-in-up delay-100">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-xl md:text-2xl text-stone-100 max-w-2xl mx-auto font-light leading-relaxed mb-10 opacity-0 animate-fade-in-up delay-200 drop-shadow-md">
                        {subtitle}
                    </p>
                )}
                {children && (
                    <div className="opacity-0 animate-fade-in-up delay-300">
                        {children}
                    </div>
                )}
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
