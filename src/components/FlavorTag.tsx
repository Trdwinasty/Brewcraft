'use client';

interface FlavorTagProps {
    tag: string;
    isActive?: boolean;
    onClick?: () => void;
}

export default function FlavorTag({ tag, isActive, onClick }: FlavorTagProps) {
    return (
        <button
            onClick={onClick}
            className={`
        px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
        ${isActive
                    ? 'bg-coffee-700 text-white shadow-md scale-105'
                    : 'bg-amber-100 text-coffee-700 hover:bg-amber-200 hover:shadow'
                }
      `}
        >
            {tag}
        </button>
    );
}
