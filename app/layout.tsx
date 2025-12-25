import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Llamune Code - 完全クローズド環境で動作するローカルLLMコーディング支援",
  description: "データは一切外部に送信されません。エンタープライズグレードのセキュリティと生成AIの力を、あなたの手元に。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
