'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/recipes', label: 'Recipes' },
        { href: '/methods', label: 'Brewing Methods' },
        { href: '/about', label: 'About' },
        { href: '/case-study', label: 'Case Study' },
    ];

    return (
        <header
            className={`
        fixed top-0 left-0 right-0 z-[999] transition-all duration-300 border-b
        ${scrolled
                    ? 'bg-cream/95 backdrop-blur-md border-coffee-200/50 py-3 shadow-md text-brand-primary'
                    : 'bg-transparent border-transparent py-6 text-white'
                }
      `}
        >
            <div className="container mx-auto flex items-center justify-between px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group relative z-50">
                    <span className="text-2xl">☕</span>
                    <span className={`text-2xl font-serif font-bold tracking-tight transition-colors ${scrolled ? 'text-coffee-900' : 'text-coffee-900 lg:text-white lg:mix-blend-overlay'}`}>
                        BrewCraft
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`
                text-sm font-medium tracking-wide uppercase transition-colors relative group
                ${scrolled ? 'text-coffee-800 hover:text-coffee-900' : 'text-coffee-900 lg:text-white/90 lg:hover:text-white'}
              `}
                        >
                            {link.label}
                            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-coffee-600' : 'bg-white'}`} />
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className={`md:hidden p-2 z-50 relative ${isMenuOpen ? 'text-coffee-900' : (scrolled ? 'text-coffee-900' : 'text-coffee-900')}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <div
                className={`
          fixed inset-0 bg-white z-[998] flex flex-col items-center justify-center gap-8 transition-all duration-500
          ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
        `}
            >
                <nav className="flex flex-col items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-2xl font-serif text-coffee-900 hover:text-coffee-600 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}
