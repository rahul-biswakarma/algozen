import './globals.css';

import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { type ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Algorithm Visualizer platform',
  title: 'algoZEN',
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }): ReactNode {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'bg-layer-00 text-primary')}>{children}</body>
    </html>
  );
}
