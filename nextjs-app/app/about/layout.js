import Link from "next/link";

export default function AboutLayout({ children }) {
  return (
    <html lang="en" className="p-6">
      <body className="p-10">
        <ul className="flex gap-6">
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
          <li>
            <Link href="/about/vision">Vision</Link>
          </li>
        </ul>
        <hr />
        {children}
      </body>
    </html>
  );
}
