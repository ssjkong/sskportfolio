import type { Metadata } from "next";
import { DM_Sans, DM_Mono, Bitter } from "next/font/google";
import "./globals.css";

const dmSans  = DM_Sans ({ subsets: ["latin"], weight: ["400","500","700"], style: ["normal","italic"], variable: "--font-dm-sans"  });
const dmMono  = DM_Mono ({ subsets: ["latin"], weight: ["400","500"],       style: ["normal","italic"], variable: "--font-dm-mono"  });
const bitter  = Bitter  ({ subsets: ["latin"], weight: ["400","500"],       style: ["normal","italic"], variable: "--font-bitter"   });

export const metadata: Metadata = {
  metadataBase: new URL("https://sskportfolio.com"),
  title: "Sharon S Kong — Product Designer",
  description: "Design leader and strategist specializing in complex systems, design systems, and teams. Based in the SF Bay Area.",
  openGraph: {
    title: "Sharon S Kong — Product Designer",
    description: "Design leader and strategist specializing in complex systems, design systems, and teams.",
    images: [{ url: "/images/ssk-og-img.png" }],
  },
  icons: { icon: "/images/ssk-favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable} ${bitter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
