"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  description: z.string().min(10, "Description must be at least 10 characters"),
})

interface ContactFormValues {
  firstName: string
  lastName: string
  email: string
  description: string
}

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      description: "",
    },
  })

  function onSubmit(values: ContactFormValues) {
    console.log(values)
    alert("Message sent to PhoneHut!")
  }

  return (
    <section className="py-20 p-8 rounded-2xl max-w-5xl mx-auto">
         <h2 className="text-3xl md:text-4xl font-semibold text-[#FF6900] mb-6 text-center">Contact Us</h2>
         <p className="text-white text-center mb-12">Have questions or feedback? We’d love to hear from you!</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-white font-medium">First Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="John" 
                      className="h-[48px] rounded-[8px] border-[#FF6900] bg-transparent text-white focus-visible:ring-[#FF6900]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-white font-medium">Last Name</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Doe" 
                      className="h-[48px] rounded-[8px] border-[#FF6900] bg-transparent text-white focus-visible:ring-[#FF6900]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg text-white font-medium">Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="john@example.com" 
                    className="h-[48px] rounded-[8px] border-[#FF6900] bg-transparent text-white focus-visible:ring-[#FF6900]" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg text-white font-medium">Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="How can PhoneHut help you?" 
                    className="min-h-[120px] rounded-[8px] border-[#FF6900] bg-transparent text-white focus-visible:ring-[#FF6900]" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full bg-[#FF6900] hover:bg-[#e65c00] text-white h-[48px] text-lg font-bold rounded-[8px] transition-all"
          >
            Send Message
          </Button>
        </form>
      </Form>
    </section>
  )
}