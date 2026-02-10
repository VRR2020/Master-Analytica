import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Mensagem é obrigatória";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
            Entre em Contato
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos conversar sobre como podemos
            ajudá-lo.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 items-start">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a
                  href="mailto:victor.have@gmail.com"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  victor.have@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Localização
                </h3>
                <p className="text-foreground/70">Rio de Janeiro, Brasil</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent/10">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  Disponibilidade
                </h3>
                <p className="text-foreground/70">
                  Disponível para projetos e consultoria
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formsubmit.co/victor.have@gmail.com"
            method="POST"
            onSubmit={(e) => {
              if (!validateForm()) {
                e.preventDefault();
              }
            }}
            className="space-y-6"
          >
            <input
              type="hidden"
              name="_subject"
              value="Nova Solicitação de Contato - Portal Master Analytica"
            />
            <div>
              <label
                htmlFor="name"
                className="block font-medium text-foreground mb-2"
              >
                Nome *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Seu nome"
                required
              />
              {errors.name && (
                <p className="text-destructive text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-medium text-foreground mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="seu@email.com"
                required
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="company"
                className="block font-medium text-foreground mb-2"
              >
                Empresa
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Nome da sua empresa"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block font-medium text-foreground mb-2"
              >
                Telefone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="(21) 9999-9999"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-medium text-foreground mb-2"
              >
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full rounded-lg border border-input bg-background px-4 py-2 text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Descreva seu projeto ou demanda..."
                required
              />
              {errors.message && (
                <p className="text-destructive text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-accent px-6 py-3 text-accent-foreground hover:opacity-90 transition-opacity font-semibold"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
