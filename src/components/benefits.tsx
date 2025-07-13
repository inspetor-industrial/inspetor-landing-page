import {
  AlertTriangle,
  FileText,
  History,
  Smartphone,
  Tablet,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'

const benefits = [
  {
    icon: Tablet,
    title: 'Controle digital de inspeções',
    description:
      'Abandone as planilhas. Gerencie todas as suas inspeções de forma centralizada e segura.',
  },
  {
    icon: FileText,
    title: 'Relatórios automáticos em PDF',
    description:
      'Gere laudos técnicos profissionais em PDF com um único clique, prontos para compartilhar.',
  },
  {
    icon: AlertTriangle,
    title: 'Alertas de pendências e vencimentos',
    description:
      'Nunca mais perca um prazo. Receba notificações automáticas sobre inspeções futuras e pendentes.',
  },
  {
    icon: Smartphone,
    title: 'Acesse de onde estiver',
    description:
      'O sistema é 100% responsivo. Use seu celular ou tablet para inspecionar em campo.',
  },
  {
    icon: History,
    title: 'Histórico de inspeções em um clique',
    description:
      'Consulte o histórico completo de cada equipamento, facilitando a rastreabilidade e a tomada de decisão.',
  },
]

export function Benefits() {
  return (
    <section
      id="benefits"
      className="w-full scroll-mt-16 py-12 md:py-24 lg:py-32 bg-muted flex items-center justify-center"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted-foreground/10 px-3 py-1 text-sm">
              Benefícios Principais
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Tudo que você precisa, em um só lugar.
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Nosso sistema foi pensado para simplificar cada etapa da inspeção
              industrial, da gestão dos ativos à emissão de laudos.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="h-full">
              <CardHeader>
                <benefit.icon className="size-8 mb-2" />
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
