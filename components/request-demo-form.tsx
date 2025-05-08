"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RequestDemoForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, age: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        age: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div>
      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 text-green-700 rounded-lg p-4 text-center">
          <h3 className="font-semibold text-lg mb-2">Thank you for your interest!</h3>
          <p>We've received your request for a demo class. Our team will contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formState.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age">Child's Age Group</Label>
              <Select value={formState.age} onValueChange={handleSelectChange} required>
                <SelectTrigger id="age">
                  <SelectValue placeholder="Select age group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="8-10">8-10 years</SelectItem>
                  <SelectItem value="11-13">11-13 years</SelectItem>
                  <SelectItem value="14-16">14-16 years</SelectItem>
                  <SelectItem value="17+">17+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your child's interests or any specific programs you're interested in"
              value={formState.message}
              onChange={handleChange}
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-600" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Request Free Demo Class"}
          </Button>
        </form>
      )}
    </div>
  )
}
