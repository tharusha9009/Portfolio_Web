// portfolio-nextjs/src/app/components/Layout.tsx
"use client"; // This component now uses client-side hooks

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname
import ThemeToggleButton from './ThemeToggleButton'; // Import the toggle button

// Removed Image import as it's not used directly here anymore

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname(); // Get current path

  // Define nav links for easier mapping and active state checking
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
  ];

  return (
    <>
      {/* The particles.js container will be handled by a separate client component */}

      <nav>
        <div className="logo">TharushaL.dev</div>
        <div className="nav-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} passHref>
              <span className={`nav-link ${pathname === item.href ? 'active' : ''}`}>
                {item.label}
              </span>
            </Link>
          ))}
          <ThemeToggleButton /> {/* Add the button here */}
        </div>
      </nav>

      <main>{children}</main>

      <footer>
        <p>© <span className="CopyRights">2025 TharushaL.dev</span></p>
      </footer>
    </>
  );
}
