"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link href="./">Florian Desmet</Link>
        </div>
      </nav>
    </header>
  );
}
