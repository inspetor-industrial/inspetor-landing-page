'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  CheckCircle,
  Mail,
  Phone,
  SendHorizontal,
  User,
  Wrench,
} from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  name: z.string().min(3, {
    message: 'O nome deve ter pelo menos 3 caracteres.',
  }),
  email: z.email({
    message: 'Por favor, insira um endereço de e-mail válido.',
  }),
  phone: z.string().min(10, {
    message: 'O telefone deve ter pelo menos 10 dígitos.',
  }),
  service: z.string(),
  description: z
    .string()
    .min(10, {
      message: 'A descrição deve ter pelo menos 10 caracteres.',
    })
    .max(500, {
      message: 'A descrição não pode ter mais de 500 caracteres.',
    }),
})

export function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      service: '',
      description: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Implementar a lógica de envio do formulário
    console.log(values)
  }

  return (
    <div
      id="contact"
      className="w-full scroll-mt-16 bg-background py-12 md:py-24 lg:py-32 flex items-center justify-center"
    >
      <div className="container grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Fale com um Especialista
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Nossa equipe está pronta para oferecer soluções personalizadas
              para garantir a segurança e a eficiência dos seus equipamentos
              industriais.
            </p>
          </div>
          <ul className="grid gap-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold">Soluções Sob Medida</h3>
                <p className="text-sm text-muted-foreground">
                  Analisamos suas necessidades para oferecer o serviço ideal.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold">Equipe Qualificada</h3>
                <p className="text-sm text-muted-foreground">
                  Profissionais com vasta experiência de mercado.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="mt-1 size-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold">Orçamento Rápido</h3>
                <p className="text-sm text-muted-foreground">
                  Receba uma proposta detalhada e transparente em pouco tempo.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <Card className="w-full bg-card text-card-foreground shadow-lg border-border">
          <CardHeader className="items-center space-y-4 text-center">
            <div className="space-y-2">
              <CardTitle className="text-3xl font-bold">
                Entre em Contato
              </CardTitle>
              <CardDescription>
                Preencha o formulário e nossa equipe responderá em breve.
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-2 grid-cols-1 md:grid-cols-2"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="col-span-1 max-md:col-span-2">
                      <FormLabel className="flex items-center">
                        <User className="size-4" /> Nome
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Seu nome completo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="col-span-1 max-md:col-span-2">
                      <FormLabel className="flex items-center">
                        <Mail className="size-4" /> E-mail
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="seu.email@exemplo.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="col-span-1 max-md:col-span-2">
                      <FormLabel className="flex items-center">
                        <Phone className="size-4" /> Telefone
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="(99) 99999-9999"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem className="col-span-1 max-md:col-span-2">
                      <FormLabel className="flex items-center">
                        <Wrench className="size-4" /> Serviço
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Selecione o tipo de serviço" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="boiler-inspection">
                            Inspeção de Caldeiras
                          </SelectItem>
                          <SelectItem value="integrity-inspection">
                            Inspeção de Integridade
                          </SelectItem>
                          <SelectItem value="pipe-inspection">
                            Inspeção de Tubulações
                          </SelectItem>
                          <SelectItem value="pressure-vessel-inspection">
                            Inspeção de Vasos de Pressão
                          </SelectItem>
                          <SelectItem value="automotive-elevator-inspection">
                            Inspeção de Elevadores Automotivos
                          </SelectItem>
                          <SelectItem value="fuel-tanks-inspection">
                            Inspeção de Tanques de Combustível
                          </SelectItem>
                          <SelectItem value="safety-valve-calibration">
                            Calibração de Válvulas de Segurança
                          </SelectItem>
                          <SelectItem value="manometer-calibration">
                            Calibração de Manômetros
                          </SelectItem>
                          <SelectItem value="others">Outros</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem className="col-span-2">
                      <FormLabel>Descrição</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Descreva em detalhes a sua necessidade..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Seja breve e direto.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <CardFooter className="px-0 pt-6 col-span-2 flex items-center justify-end">
                  <Button type="submit" className="font-bold">
                    Enviar Mensagem
                    <SendHorizontal className="size-4" />
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
