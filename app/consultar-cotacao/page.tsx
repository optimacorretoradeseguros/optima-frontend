"use client";

import type React from "react";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";

/* =========================
   ANIMAÇÕES
========================= */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

/* =========================
   ABRIR CLIENTE DE EMAIL
========================= */
const openEmailClient = (subject: string, body: string) => {
  const to = "cotacao@optima.co.ao";

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  const gmailWebLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&subject=${encodedSubject}&body=${encodedBody}`;
  const mailtoLink = `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    // Mobile → app de email padrão (Gmail se for padrão)
    window.location.href = mailtoLink;
  } else {
    // Desktop → Gmail Web
    window.open(gmailWebLink, "_blank");
  }
};

export default function SimulationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "individual",
    insuranceType: "auto-liability",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);

  /* =========================
     OPÇÕES DE SEGURO
  ========================= */
  const individualOptions = [
    { value: "auto-liability", label: "Responsabilidade Civil (Automóvel)" },
    { value: "auto-comprehensive", label: "Contra Todos os Riscos (Automóvel)" },
    { value: "health", label: "Saúde" },
    { value: "travel", label: "Viagem" },
    { value: "home-multi", label: "Multirisco Habitação" },
    { value: "fire-multi", label: "Multirisco Incêndio" },
    { value: "work-accident", label: "Acidente de Trabalho (Individual)" },
  ];

  const companyOptions = [
    { value: "work-accident-group", label: "Acidentes de Trabalho" },
    { value: "personal-accident-group", label: "Acidentes Pessoais (Grupo)" },
    { value: "travel-group", label: "Viagem (Grupo)" },
    { value: "marine", label: "Marítimo / Embarcações" },
    { value: "cargo", label: "Mercadorias Transportadas" },
    { value: "drones", label: "Drones" },
    { value: "liability", label: "Responsabilidade Civil" },
    { value: "business-multi", label: "Multirisco Empresa" },
    { value: "life-group", label: "Vida Grupo" },
    { value: "health-group", label: "Saúde Grupo" },
  ];

  /* =========================
     HANDLERS
  ========================= */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.phone.trim()) newErrors.phone = "Telefone é obrigatório";

    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);

    const emailBody = `Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Tipo de Cliente: ${formData.type === "individual" ? "Particular" : "Empresa"}
Tipo de Seguro: ${formData.insuranceType}

Mensagem:
${formData.message}`;

    openEmailClient("Pedido de Cotação de Seguro", emailBody);

    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        type: "individual",
        insuranceType: "auto-liability",
        message: "",
      });
      setIsSending(false);
    }, 3000);
  };

  /* =========================
     JSX
  ========================= */
  return (
    <div className="w-full pt-16">
      {/* Hero */}
      <section className="py-12 md:py-20 bg-[rgb(230,235,221)]">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl font-bold text-[#1D285E] mb-4">
            Solicite a Sua Cotação!
          </h1>
          <p className="text-[#1D285E]/70">
            Receba uma cotação personalizada dos nossos especialistas
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-white border rounded-lg p-8"
            >
              {/* Nome */}
              <motion.div variants={itemVariants} className="mb-6">
                <input
                  name="name"
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-full"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2 flex gap-2">
                    <AlertCircle size={16} /> {errors.name}
                  </p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants} className="mb-6">
                <input
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-full"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2 flex gap-2">
                    <AlertCircle size={16} /> {errors.email}
                  </p>
                )}
              </motion.div>

              {/* Telefone */}
              <motion.div variants={itemVariants} className="mb-6">
                <input
                  name="phone"
                  placeholder="Telefone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-full"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-2 flex gap-2">
                    <AlertCircle size={16} /> {errors.phone}
                  </p>
                )}
              </motion.div>

              {/* Mensagem */}
              <motion.textarea
                variants={itemVariants}
                name="message"
                rows={4}
                placeholder="Detalhes adicionais"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border rounded-lg mb-6"
              />

              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={isSending}
                className="w-full py-4 bg-[#676B49] text-white rounded-full font-semibold disabled:opacity-50"
              >
                {isSending ? "A enviar..." : "Solicitar Cotação"}
              </motion.button>
            </motion.form>
          ) : (
            <div className="bg-green-50 border p-8 rounded-lg text-center">
              <CheckCircle2 size={40} className="mx-auto text-green-600 mb-4" />
              <h2 className="text-xl font-bold text-green-900">
                Cotação solicitada com sucesso!
              </h2>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
