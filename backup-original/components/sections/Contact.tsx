'use client'

import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/toast/toast-context"
import { ContactSectionProps, ContactFormData } from "@/types"
import { Mail, Phone } from "lucide-react"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export function Contact({ email, phone }: ContactSectionProps) {
  const { addToast } = useToast()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Here you would typically send the data to your API
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
      
      addToast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        type: "success",
      })
      
      reset()
    } catch (error) {
      addToast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        type: "error",
      })
    }
  }

  return (
    <section id="contact" className="w-full max-w-5xl mx-auto py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-12"
      >
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Email</h3>
                <a
                  href={`mailto:${email}`}
                  className="text-gray-300 hover:text-blue-500 transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>

            {phone && (
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Phone className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <a
                    href={`tel:${phone}`}
                    className="text-gray-300 hover:text-green-500 transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>
            )}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <div className="space-y-2">
              <Input
                {...register("name")}
                placeholder="Your Name"
                error={errors.name?.message}
                className="bg-gray-800/50 border-gray-700"
              />
            </div>

            <div className="space-y-2">
              <Input
                {...register("email")}
                type="email"
                placeholder="Your Email"
                error={errors.email?.message}
                className="bg-gray-800/50 border-gray-700"
              />
            </div>

            <div className="space-y-2">
              <Textarea
                {...register("message")}
                placeholder="Your Message"
                error={errors.message?.message}
                className="bg-gray-800/50 border-gray-700 min-h-[120px]"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}
