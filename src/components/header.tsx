import {
  ArrowRight,
  Briefcase,
  CreditCard,
  Factory,
  Mail,
  Menu,
  NotebookPen,
  Users,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

const navLinks = [
  { href: '/#benefits', label: 'Benefícios', icon: Briefcase },
  { href: '/#how-it-works', label: 'Como Funciona', icon: NotebookPen },
  { href: '/#contact', label: 'Contato', icon: Mail },
  { href: '/#pricing', label: 'Planos', icon: CreditCard },
  { href: '/#about', label: 'Sobre Nós', icon: Users },
]

export function Header() {
  return (
    <header className="sticky px-4 flex items-center justify-center top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <Factory className="h-7 w-7 text-primary" />
          <span className="hidden font-bold lg:inline-block">
            Inspetor Industrial
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* CTA Button - Desktop */}
          <div className="hidden md:flex">
            <Button className="bg-yellow-400 text-slate-900 hover:bg-yellow-500">
              Experimente Grátis
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="size-4" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex items-center gap-2">
                  <Factory className="size-6 text-primary" />
                  <span className="font-bold">Inspetor Industrial</span>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                {navLinks.map((link) => (
                  <DropdownMenuItem key={link.href}>
                    <link.icon className="size-5" />
                    {link.label}
                  </DropdownMenuItem>
                ))}

                <DropdownMenuSeparator />

                <DropdownMenuItem className="w-full bg-yellow-400 text-slate-900 hover:!bg-yellow-500 flex items-center justify-center">
                  Experimente Grátis
                  <ArrowRight className="size-4" />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  )
}
