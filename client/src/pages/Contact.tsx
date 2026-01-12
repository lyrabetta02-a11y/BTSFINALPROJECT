import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/LanguageContext";
import emailjs from '@emailjs/browser';

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const { t } = useLanguage();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Replace with your EmailJS service ID, template ID, and public key
      await emailjs.send(
        'your_service_id', // e.g., 'service_abc123'
        'your_template_id', // e.g., 'template_xyz789'
        {
          from_name: values.name,
          from_email: values.email,
          company: values.company,
          message: values.message,
          to_email: 'benuatekniksolusindo@gmail.com',
        },
        'your_public_key' // e.g., 'abc123def456'
      );

      toast({
        title: "Message Sent",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (error) {
      console.error("Email send error:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <div className="bg-primary pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            {t("nav.contact")}
          </h1>
          <p className="text-white/70 max-w-2xl text-lg">
            {t("contact.subtitle")}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-2 block">
              {t("contact.badge")}
            </span>
            <h2 className="text-3xl font-heading font-bold text-primary mb-8">
              {t("contact.title")}
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-1">
                    {t("contact.office")}
                  </h3>
                  <p className="text-gray-600">
                    Jl. Melati Raya, Gunung Sindur
                    <br />
                    Bogor, Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-1">
                    {t("contact.phone")}
                  </h3>
                  <p className="text-gray-600">+62 821-3082-0228 (WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-1">
                    {t("contact.email")}
                  </h3>
                  <p className="text-gray-600">benuatekniksolusindo@gmail.com</p>
                  <p className="text-gray-600"></p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-1">
                    {t("contact.hours")}
                  </h3>
                  <p className="text-gray-600">
                    {t("contact.days.weekdays")}: 08:00 - 17:00
                  </p>
                  <p className="text-gray-600">
                    {t("contact.days.weekend")}: Closed (Emergency Only)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 shadow-lg border border-gray-100 h-fit">
            <h3 className="text-2xl font-heading font-bold text-primary mb-6">
              {t("contact.formTitle")}
            </h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.name")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                          className="h-12 bg-gray-50 border-gray-200 focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.email")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="john@company.com"
                          {...field}
                          className="h-12 bg-gray-50 border-gray-200 focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.company")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Company Name"
                          {...field}
                          className="h-12 bg-gray-50 border-gray-200 focus:border-primary"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.form.message")}</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="How can we help you?"
                          className="min-h-[150px] bg-gray-50 border-gray-200 focus:border-primary resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-medium text-lg rounded-none"
                >
                  {t("contact.form.submit")}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
