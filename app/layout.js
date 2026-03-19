import "./globals.css";

export const metadata = {
  title: "Joseyluvers",
  description: "A modern digital studio crafting conversion-focused product experiences."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

