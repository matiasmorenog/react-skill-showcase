export const metadata = {
  title: "React Skill Showcase",
  description: "Portfolio project built with React + Material UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
