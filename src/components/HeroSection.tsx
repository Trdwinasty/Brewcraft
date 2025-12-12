import Image from 'next/image';

interface HeroSectionProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
    children?: React.ReactNode;
}

export default function HeroSection({ title, subtitle, backgroundImage, children }: HeroSectionProps) {
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
