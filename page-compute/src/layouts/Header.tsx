import Link from "next/link"

const Header = () => {
  return (
    <header>
      <h1>Next.js Page Compute</h1>
      <nav>
        <Link href="/client-side">
          <a>Client Side</a>
        </Link>
        <Link href="/server-side">
          <a>Server Side</a>
        </Link>
        <Link href="/static-site">
          <a>Static Site</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header