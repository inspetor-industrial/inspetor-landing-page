import { Button } from './ui/button'

export function PublicFooter() {
  const now = new Date()

  function handleRedirect(elementId: string) {
    const element = document.querySelector(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        &copy; {now.getFullYear()} Inspetor Industrial. Todos os direitos
        reservados.
      </p>
      <nav className="sm:ml-auto flex gap-4">
        <Button
          variant="link"
          className="text-xs hover:underline underline-offset-4 !w-fit !p-0"
          rel="noreferrer"
          onClick={() => handleRedirect('#about')}
        >
          Sobre
        </Button>
        <Button
          variant="link"
          className="text-xs hover:underline underline-offset-4 !w-fit !p-0"
          rel="noreferrer"
          onClick={() => handleRedirect('#pricing')}
        >
          Planos
        </Button>
        <Button
          variant="link"
          className="text-xs hover:underline underline-offset-4 !w-fit !p-0"
          rel="noreferrer"
          onClick={() => handleRedirect('#contact')}
        >
          Contato
        </Button>
        <Button
          variant="link"
          className="text-xs hover:underline underline-offset-4 !w-fit !p-0"
          rel="noreferrer"
          onClick={() => handleRedirect('#privacy')}
        >
          Política de Privacidade
        </Button>
      </nav>
    </footer>
  )
}
