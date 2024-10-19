import "../styles/globals.css";

export default function RootLayout({
  item,
}: Readonly<{
  item: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {item}
      </body>
    </html>
  );
}
