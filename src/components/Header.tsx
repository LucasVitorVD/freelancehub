import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import Nav from "@/components/Nav"
import { Menu } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 h-20 border-b shadow-sm sticky top-0 z-10">
      <h1 className="text-primary font-bold">
        <Link href="/">FreelanceHub</Link>
      </h1>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent className="pt-12">
            <Nav />
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden md:block">
        <Nav />
      </div>
    </header>
  )
}
