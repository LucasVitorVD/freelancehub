import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"

const navigationList = [
  {
    href: "/",
    text: "Início",
  },
  {
    href: "#",
    text: "Sobre nós",
  },
  {
    href: "#",
    text: "Projetos",
  },
  {
    href: "#",
    text: "Freelancers",
  },
  {
    href: "#",
    text: "Contato",
  },
]

export default function Nav() {
  return (
    <nav className="flex flex-col-reverse gap-6 lg:flex-row lg:items-center lg:justify-center lg:gap-12">
      <ul className="flex flex-col gap-6 lg:flex-row lg:items-center">
        {navigationList.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className="text-primary hover:text-secondary transition-all"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-4 border-b-2 pb-6 lg:flex-row lg:border-b-0 lg:pb-0">
        <Link
          href="#"
          className={buttonVariants({ variant: "outline" })}
        >
          Login
        </Link>
        <Link
          href="#"
          className={buttonVariants({ variant: "default" })}
        >
          Cadastre-se
        </Link>
      </div>
    </nav>
  )
}