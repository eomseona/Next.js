import MainHeader from "@/components/main-header/main-header";
import "./globals.css";
// 루트 레이아웃 -> 전역적으로 적용됨

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
