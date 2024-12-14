'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { Loader2 } from 'lucide-react'

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      })
    }, 2000)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2">
        <Input
          id="name"
          placeholder="Your Name"
          required
          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
        />
      </div>
      <div className="space-y-2">
        <Input
          id="email"
          placeholder="Your Email"
          required
          type="email"
          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
        />
      </div>
      <div className="space-y-2">
        <Textarea
          id="message"
          placeholder="Your Message"
          required
          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 min-h-[100px]"
        />
      </div>
      <Button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  )
}

