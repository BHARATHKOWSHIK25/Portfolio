import type { Metadata, Viewport } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgress from '@/components/ui/ScrollProgress';
import PageLoader from '@/components/ui/PageLoader';
import SmoothScroll from '@/components/ui/SmoothScroll';
import Navbar from '@/components/layout/Navbar';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://bharathkowshik.vercel.app'),
  title: 'Bharath Kowshik — Software Engineer | AI Builder | IoT Innovator',
  description:
    'Personal portfolio of Bharath Kowshik Ullangula — a multidisciplinary Software Engineer, AI Builder, IoT Innovator, and Creative Technologist. Building intelligent products that solve real-world problems.',
  keywords: [
    'Bharath Kowshik',
    'Software Engineer',
    'AI Builder',
    'IoT Innovator',
    'Full Stack Developer',
    'Flutter Developer',
    'Next.js',
    'Portfolio',
    'KKR KSR',
  ],
  authors: [{ name: 'Bharath Kowshik Ullangula' }],
  creator: 'Bharath Kowshik Ullangula',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://bharathkowshik.vercel.app',
    title: 'Bharath Kowshik — Software Engineer | AI Builder | IoT Innovator',
    description:
      'Building intelligent products that combine software, AI, IoT, and creativity to solve real-world problems.',
    siteName: 'Bharath Kowshik Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bharath Kowshik Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bharath Kowshik — Software Engineer | AI Builder | IoT Innovator',
    description:
      'Building intelligent products that combine software, AI, IoT, and creativity.',
    creator: '@bharathkowsik25',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#0C0C0C',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <SmoothScroll />
        <PageLoader />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
