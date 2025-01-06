"use client"

import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { Input } from "@/components/ui/input"
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField, FormItem, FormControl, Form } from "@/components/ui/form"


const formSchema = z.object({
  input: z.string().min(2).max(50),
});

function SearchInput() {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(`/desney/search/${values.input}`);
    form.reset()
  }

  return (
    <div className=" py-3 px-3 border-r border-black">
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="input"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Search " {...field} className="border-black" />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
    </div>
  );
}

export default SearchInput;