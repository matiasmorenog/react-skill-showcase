import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";

export const metadata = {
  metadataBase: new URL("https://react-skill-showcase.vercel.app"),
  title: "Matias Moreno | React Frontend Developer",
  description:
    "Frontend Developer specialized in React, JavaScript, UI architecture, and web performance. Experience in banking and product teams.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Matias Moreno | React Frontend Developer",
    description:
      "Portfolio focused on React frontend development, architecture, performance, and real project demos.",
    url: "https://react-skill-showcase.vercel.app",
    siteName: "Matias Moreno Portfolio",
    type: "website",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Matias Moreno - React Frontend Developer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matias Moreno | React Frontend Developer",
    description:
      "Portfolio focused on React frontend development, architecture, performance, and real project demos.",
    images: ["/og"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <style>{`
          .skip-link {
            position: absolute;
            left: -9999px;
            top: 8px;
            z-index: 2000;
            padding: 8px 12px;
            border-radius: 8px;
            background: #0a7f78;
            color: #ffffff;
            font-family: sans-serif;
            font-size: 14px;
            text-decoration: none;
          }
          .skip-link:focus {
            left: 8px;
          }
        `}</style>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
