import Link from "next/link"

const navigationList = [
  {
    href: "/",
    text: "Início",
  },
  {
    href: "#",
    text: "Como funciona",
  },
  {
    href: "#",
    text: "Preços",
  },
  {
    href: "#",
    text: "Sobre nós",
  },
]

export default function Nav() {
  return (
    <nav className="flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-center md:gap-12">
      <ul className="flex flex-col gap-6 md:flex-row md:items-center">
        {navigationList.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className="text-primary hover:text-secondary hover:underline transition-all"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-4 border-b-2 pb-6 md:flex-row md:border-b-0 md:pb-0">
        <Link
          href="#"
          className="px-2 py-2 border border-primary hover:border-secondary rounded transition-all md:px-4"
        >
          Login
        </Link>
        <Link
          href="#"
          className="bg-primary text-white px-2 py-2 rounded hover:bg-secondary transition-colors md:px-4"
        >
          Cadastre-se
        </Link>
      </div>
    </nav>
  )
}