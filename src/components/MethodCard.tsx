import Link from 'next/link';
import Image from 'next/image';
import type { BrewingMethod } from '@/data/methods';

interface MethodCardProps {
    method: BrewingMethod;
}

export default function MethodCard({ method }: MethodCardProps) {
    return (
        <Link href={`/methods/${method.slug}`} className="group block relative overflow-hidden">
            {/* Image Background with Overlay */}
            <div className="relative aspect-square overflow-hidden bg-stone-200">
                <Image
                    src={method.image}
                    alt={method.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
                    <span className="text-4xl mb-3 transform transition-transform duration-500 group-hover:-translate-y-2 opacity-90">
                        {method.icon}
                    </span>
                    <h3 className="text-2xl font-serif font-bold tracking-tight mb-2 transform transition-transform duration-500 group-hover:-translate-y-1">
                        {method.name}
                    </h3>
                    <span className="inline-block h-px w-12 bg-white/60 mb-3" />
                    <p className="text-sm text-stone-100 font-light opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 max-w-[200px] line-clamp-3">
                        {method.description}
                    </p>
                </div>
            </div>
        </Link>
    );
}
