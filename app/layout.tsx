import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Better Github",
  description:
    "A nicer look at GitHub profiles built with Next.js and the GitHub API ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="theme-color" content="#ffff" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@better_github" />
        <meta name="twitter:creator" content="@better_github" />
        <meta property="og:url" content="https://better-github.vercel.app" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
