import Link from 'next/link';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.label,
            item: item.href ? `https://trdwi.vercel.app${item.href}` : undefined,
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-coffee-600">
                {items.map((item, index) => (
                    <span key={index} className="flex items-center gap-2">
                        {index > 0 && (
                            <span className="text-coffee-400">/</span>
                        )}
                        {item.href ? (
                            <Link
                                href={item.href}
                                className="hover:text-coffee-800 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <span className="text-coffee-800 font-medium">{item.label}</span>
                        )}
                    </span>
                ))}
            </nav>
        </>
    );
}
