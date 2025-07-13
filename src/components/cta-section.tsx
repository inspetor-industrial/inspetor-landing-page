import { Button } from './ui/button'

export function CtaSection() {
  return (
    <section
      id="cta"
      className="w-full scroll-mt-16 flex items-center justify-center py-12 md:py-24 lg:py-32"
    >
      <div className="container flex flex-col items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Pronto para transformar sua rotina de inspeção?
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Comece a usar agora e veja como a tecnologia pode simplificar seu
            dia a dia.
          </p>
        </div>
        <div className="mt-6">
          <Button size="lg">Comece agora gratuitamente</Button>
        </div>
      </div>
    </section>
  )
}
