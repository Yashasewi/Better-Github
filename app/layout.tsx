import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/Theme";

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
                <meta name="twitter:title" content={metadata.title} />
                <meta
                    name="twitter:description"
                    content={metadata.description}
                />
                <meta
                    name="twitter:image"
                    content="/public/images/profile.png"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://better-github.vercel.app"
                />
                <meta property="og:title" content={metadata.title} />
                <meta
                    property="og:description"
                    content={metadata.description}
                />
                <meta
                    property="og:image"
                    content="/public/images/profile.png"
                />
            </Head>

            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
