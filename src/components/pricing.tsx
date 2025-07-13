import { Check } from 'lucide-react'
import { Button } from './ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'

export function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full scroll-mt-16 py-12 md:py-24 lg:py-32 flex items-center justify-center"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Planos Flexíveis para Cada Necessidade
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Do hobby ao nível empresarial, temos o plano perfeito para você.
              Comece de graça e evolua conforme sua operação cresce.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid max-w-sm items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader className="pb-4">
              <CardTitle>Hobby</CardTitle>
              <CardDescription>
                Para entusiastas e pequenos projetos que estão começando.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-4xl font-bold">Gratuito</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="size-4 mt-0.5 shrink-0" />
                  Apenas 1 usuário por time
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 mt-0.5 shrink-0" />
                  Cadastro de até 10 equipamentos
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 mt-0.5 shrink-0" />
                  50 relatórios por mês
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 mt-0.5 shrink-0" />
                  Suporte via e-mail
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Começar Agora
              </Button>
            </CardFooter>
          </Card>
          <Card className="relative flex flex-col border-2 border-primary shadow-lg">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-sm text-primary-foreground">
              Mais Popular
            </div>
            <CardHeader className="pb-4">
              <CardTitle>Pro</CardTitle>
              <CardDescription>
                Para profissionais e equipes que buscam eficiência e relatórios
                detalhados.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-4xl font-bold">R$145,90/mês</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="size-4 mt-0.5 shrink-0" />
                  Até 5 usuários por time
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 mt-0.5 shrink-0" />
                  Cadastro de até 100 equipamentos
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 mt-0.5 shrink-0" />
                  1000 relatórios por mês
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 mt-0.5 shrink-0" />
                  Suporte via e-mail e WhatsApp prioritário
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Assinar Pro</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col">
            <CardHeader className="pb-4">
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>
                Para grandes operações com necessidade de integrações e suporte
                dedicado.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="text-4xl font-bold">Customizado</div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Check className="size-4 mt-0.5 shrink-0" />
                  Todos os recursos do plano Pro, com suporte prioritário
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 mt-0.5 shrink-0" />
                  Usuários ilimitados por time
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 mt-0.5 shrink-0" />
                  Equipamentos ilimitados
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 mt-0.5 shrink-0" />
                  Integrações com sistemas ERP/SAP (em breve)
                </li>
                <li className="flex items-start gap-2">
                  <Check className="size-4 mt-0.5 shrink-0" />
                  SLA de suporte e uptime
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">
                Fale com a nossa equipe
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
