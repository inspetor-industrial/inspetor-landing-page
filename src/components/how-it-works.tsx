import { CalendarClock, FileUp, ListPlus, Send } from 'lucide-react'

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full scroll-mt-16 py-12 md:py-24 lg:py-32 flex items-center justify-center"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Como Funciona
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Um fluxo de trabalho simplificado.
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Em poucos passos, você organiza suas inspeções e digitaliza seus
              relatórios.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-10">
          <div className="relative flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <ListPlus className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">1. Cadastre</h3>
            <p className="text-center text-sm text-muted-foreground">
              Cadastre seus equipamentos industriais.
            </p>
          </div>
          <div className="relative flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <CalendarClock className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">2. Agende</h3>
            <p className="text-center text-sm text-muted-foreground">
              Agende inspeções e receba lembretes.
            </p>
          </div>
          <div className="relative flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <FileUp className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">3. Preencha</h3>
            <p className="text-center text-sm text-muted-foreground">
              Preencha relatórios direto do seu dispositivo.
            </p>
          </div>
          <div className="relative flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Send className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">4. Gere Laudos</h3>
            <p className="text-center text-sm text-muted-foreground">
              Gere laudos e compartilhe com sua equipe.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
