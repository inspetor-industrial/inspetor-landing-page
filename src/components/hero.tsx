import { Button } from './ui/button'

export function Hero() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 xl:py-32 flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Inspeção industrial sem papelada, sem complicação.
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Modernize o controle de inspeções em caldeiras e equipamentos
                industriais.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg">Experimente grátis</Button>
            </div>
          </div>
          <img
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square grayscale-100"
            height="550"
            src="/application-background.png"
            width="550"
          />
        </div>
      </div>
    </section>
  )
}
