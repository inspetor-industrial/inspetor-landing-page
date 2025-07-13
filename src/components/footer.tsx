export function PublicFooter() {
  const now = new Date()

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        &copy; {now.getFullYear()} Inspetor Industrial. Todos os direitos
        reservados.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a
          href="#about"
          className="text-xs hover:underline underline-offset-4"
          rel="noreferrer"
        >
          Sobre
        </a>
        <a
          href="#"
          className="text-xs hover:underline underline-offset-4"
          rel="noreferrer"
        >
          Contato
        </a>
        <a
          href="#"
          className="text-xs hover:underline underline-offset-4"
          rel="noreferrer"
        >
          Política de Privacidade
        </a>
      </nav>
    </footer>
  )
}
