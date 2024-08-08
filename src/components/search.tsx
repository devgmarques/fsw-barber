'use client'

import { SearchIcon } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { z } from 'zod'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  search: z.string().trim().min(1, {
    message: 'Digite algo para buscar',
  }),
})

type FormSchema = z.infer<typeof formSchema>

export function Search() {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  const router = useRouter()

  function onSubmit({ search }: FormSchema) {
    router.push(`/barbershops?title=${search}`)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full gap-2"
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Faça sua busca..."
                  {...field}
                  className="w-full"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button size="icon" type="submit">
          <SearchIcon />
        </Button>
      </form>
    </Form>
  )
}
