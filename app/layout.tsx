import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Subscription Health Score Calculator",
  description: "Analyze your bank statements to identify unused subscriptions and calculate your subscription health score."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c305b5cc-09cc-44a1-939a-86f672ae3312"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
