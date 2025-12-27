import MainHeader from "@/components/main-header/main-header";
import "./globals.css";
// 루트 레이아웃 -> 전역적으로 적용됨

/**
 * Global metadata for this layout.
 * These values serve as the default for all child pages.
 * If a child page defines its own metadata, it will overwrite or merge with these defaults.
 */
export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
