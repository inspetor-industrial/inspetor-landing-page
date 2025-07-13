export function About() {
  return (
    <section
      id="about"
      className="w-full scroll-mt-16 py-12 md:py-24 lg:py-32 bg-muted flex items-center justify-center"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Sobre o Inspetor Industrial
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nascemos da necessidade de modernizar e simplificar a rotina dos
              engenheiros de inspeção. Nossa missão é eliminar a papelada,
              reduzir o tempo gasto com burocracia e aumentar a segurança e a
              confiabilidade dos processos industriais.
            </p>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Com uma plataforma intuitiva e poderosa, o Inspetor Industrial
              centraliza todas as informações de equipamentos, agendamentos e
              laudos, permitindo que você e sua equipe foquem no que realmente
              importa: a excelência técnica e a segurança operacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
