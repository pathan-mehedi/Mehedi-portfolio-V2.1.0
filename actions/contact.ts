"use server"

import { Resend } from "resend"
import { contactFormSchema, type ContactFormData } from "@/lib/validations"

interface ContactState {
  success: boolean
  message: string
  errors?: Record<string, string[]>
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContact(prevState: ContactState, formData: FormData): Promise<ContactState> {
  try {
    // Parse and validate form data
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    }

    const validationResult = contactFormSchema.safeParse(rawData)

    if (!validationResult.success) {
      return {
        success: false,
        message: "Please fix the validation errors below.",
        errors: validationResult.error.flatten().fieldErrors,
      }
    }

    const { name, email, message } = validationResult.data

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Using Resend's sandbox domain
      to: ["eity.mehedipathan@gmail.com"], // Replace with your Gmail address
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">New Contact Form Submission</h2>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e293b; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #2563eb;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <div style="margin-top: 20px; padding: 15px; background-color: #fef3c7; border-radius: 4px;">
            <p style="margin: 0; color: #92400e;">
              <strong>Note:</strong> This message was sent from your portfolio contact form.
            </p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Message: ${message}

This message was sent from your portfolio contact form.
      `,
    })

    if (error) {
      console.error("Email sending failed:", error)
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      }
    }

    console.log("Contact form submission sent successfully:", { name, email, message, emailId: data?.id })

    return {
      success: true,
      message: `Thank you ${name}! Your message has been sent successfully. I'll get back to you soon.`,
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
