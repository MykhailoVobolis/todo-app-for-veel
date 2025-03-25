import React from 'react';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Providers from '@/components/providers';

import './globals.css';

// Додавання title та description проєкту
export const metadata: Metadata = {
  title: 'Todo App',
  description:
    'Test Task for Veel: Todo App using Next.js and JSONPlaceholder API',
};

// Налаштування шрифту Plus Jakarta Sans на використання латинського набору
const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
