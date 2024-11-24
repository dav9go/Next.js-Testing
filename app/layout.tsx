export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ backgroundColor: "black", color: "white" }}>
      <body>{children}</body>
    </html>
  );
}
