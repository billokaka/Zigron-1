import { Header, Footer } from "@/components/layout";
import { Badge, Container, Section } from "@/components/ui";
import {
  Mail,
  Phone,
  Clock,
  MessageSquare,
  Calendar,
} from "lucide-react";
import { ContactForm } from "./ContactForm";

export const metadata = {
  title: "Contact Us | Zigron",
  description: "Get in touch with our engineering team. Book a consultation or send us a message.",
};

const contactMethods = [
  {
    icon: MessageSquare,
    title: "Chat with Sales",
    description: "Speak to our friendly team about your project.",
    action: "Start a conversation",
    href: "#contact-form",
  },
  {
    icon: Calendar,
    title: "Book a Consultation",
    description: "Schedule a call with an engineer.",
    action: "Book a time",
    href: "#contact-form",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime.",
    action: "sales@zigron.com",
    href: "mailto:sales@zigron.com",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <Section background="gradient" padding="hero">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <Badge dot className="mb-6">Get in Touch</Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-black dark:text-white tracking-tight">
                Let&apos;s Build
                <br />
                <span className="text-primary">Something Great</span>
              </h1>

              <p className="text-lg md:text-xl text-text-muted-light dark:text-text-muted-dark mb-10 max-w-2xl mx-auto leading-relaxed">
                Tell us about your project and we&apos;ll connect you with the right engineering team.
              </p>
            </div>
          </Container>
        </Section>

        {/* Contact Methods */}
        <div className="bg-surface-light dark:bg-surface-dark border-y border-gray-200 dark:border-gray-800 py-12">
          <Container>
            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  className="group flex flex-col items-center text-center p-6 bg-white dark:bg-background-dark rounded-xl border border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                    <method.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-black dark:text-white mb-2">{method.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{method.description}</p>
                  <span className="text-primary font-semibold text-sm group-hover:underline">{method.action}</span>
                </a>
              ))}
            </div>
          </Container>
        </div>

        {/* Contact Form & Info */}
        <Section id="contact-form">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold mb-2 text-black dark:text-white">Send us a message</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Fill out the form and we&apos;ll get back to you within 24 hours.
                </p>

                <ContactForm />
              </div>

              {/* Info */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">Get in Touch</h2>

                <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-8 border border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold text-black dark:text-white mb-4">Working Hours</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>Monday - Friday: 9:00 AM - 6:00 PM (EST)</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>sales@zigron.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                      <Phone className="w-4 h-4 text-primary" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20">
                  <h3 className="font-bold text-black dark:text-white mb-2">Looking for support?</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Existing customers can reach our support team directly.
                  </p>
                  <a href="mailto:sales@zigron.com" className="text-primary font-semibold text-sm hover:underline">
                    sales@zigron.com
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
