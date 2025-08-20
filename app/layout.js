export const metadata = {
  title: "Kristiawan Devianto — Portfolio",
  description: "Embedded systems engineer • AI/Robotics enthusiast • J1939/UDS specialist"
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-950 text-slate-50 antialiased">{children}</body>
    </html>
  );
}
