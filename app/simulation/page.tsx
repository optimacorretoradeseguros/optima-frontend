"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, AlertCircle } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function SimulationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "individual",
    insuranceType: "auto",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório"
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email é obrigatório"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone é obrigatório"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    // Simulate form submission
    console.log("Form submitted:", formData)
    setIsSubmitted(true)

    // Reset after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        type: "individual",
        insuranceType: "auto",
        message: "",
      })
    }, 5000)
  }

  return (
    <div className="w-full pt-16">
      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Simulação Gratuita</h1>
            <p className="text-xl text-foreground/70">
              Receba uma proposta personalizada em minutos, sem qualquer compromisso
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-card border border-border rounded-lg p-8 md:p-12"
            >
              {/* Name */}
              <motion.div variants={itemVariants} className="mb-6">
                <label className="block text-sm font-semibold text-primary mb-2">Nome Completo *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary ${
                    errors.name ? "border-red-500" : "border-border"
                  }`}
                  placeholder="Seu nome completo"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                    <AlertCircle size={16} />
                    {errors.name}
                  </p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants} className="mb-6">
                <label className="block text-sm font-semibold text-primary mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary ${
                    errors.email ? "border-red-500" : "border-border"
                  }`}
                  placeholder="seu.email@exemplo.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                    <AlertCircle size={16} />
                    {errors.email}
                  </p>
                )}
              </motion.div>

              {/* Phone */}
              <motion.div variants={itemVariants} className="mb-6">
                <label className="block text-sm font-semibold text-primary mb-2">Telefone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary ${
                    errors.phone ? "border-red-500" : "border-border"
                  }`}
                  placeholder="+351 912 345 678"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                    <AlertCircle size={16} />
                    {errors.phone}
                  </p>
                )}
              </motion.div>

              {/* Type Selection */}
              <motion.div variants={itemVariants} className="mb-6">
                <label className="block text-sm font-semibold text-primary mb-2">Tipo de Cliente</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, type: "individual" }))}
                    className={`px-4 py-3 rounded-lg border-2 font-medium transition-colors ${
                      formData.type === "individual"
                        ? "border-secondary bg-secondary/10 text-secondary"
                        : "border-border text-foreground hover:border-secondary"
                    }`}
                  >
                    Particular
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, type: "company" }))}
                    className={`px-4 py-3 rounded-lg border-2 font-medium transition-colors ${
                      formData.type === "company"
                        ? "border-secondary bg-secondary/10 text-secondary"
                        : "border-border text-foreground hover:border-secondary"
                    }`}
                  >
                    Empresa
                  </button>
                </div>
              </motion.div>

              {/* Insurance Type */}
              <motion.div variants={itemVariants} className="mb-6">
                <label className="block text-sm font-semibold text-primary mb-2">Tipo de Seguro</label>
                <select
                  name="insuranceType"
                  value={formData.insuranceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-white"
                >
                  {formData.type === "individual" ? (
                    <>
                      <option value="auto">Seguro de Automóvel</option>
                      <option value="health">Seguro de Saúde</option>
                      <option value="life">Seguro de Vida</option>
                      <option value="travel">Seguro de Viagem</option>
                      <option value="home">Seguro de Habitação</option>
                    </>
                  ) : (
                    <>
                      <option value="liability">Responsabilidade Civil</option>
                      <option value="property">Seguro de Bens</option>
                      <option value="employees">Proteção de Colaboradores</option>
                      <option value="transport">Seguro de Transporte</option>
                      <option value="other">Outro</option>
                    </>
                  )}
                </select>
              </motion.div>

              {/* Message */}
              <motion.div variants={itemVariants} className="mb-8">
                <label className="block text-sm font-semibold text-primary mb-2">Detalhes Adicionais (Opcional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                  placeholder="Conte-nos mais sobre o que procura..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={itemVariants}
                type="submit"
                className="w-full px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Receber Simulação Gratuita
              </motion.button>

              <motion.p variants={itemVariants} className="text-center text-xs text-foreground/50 mt-4">
                Seus dados são confidenciais e serão usados apenas para processar sua simulação.
              </motion.p>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border-2 border-green-200 rounded-lg p-8 md:p-12 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-green-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-green-900 mb-4">Simulação Recebida com Sucesso!</h2>
              <p className="text-green-800 mb-6">
                Obrigado! Em breve um dos nossos consultores entrará em contacto consigo com uma proposta personalizada.
              </p>
              <p className="text-sm text-green-700">Redirecionando em breve...</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Por que Fazer uma Simulação</h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Sem Compromisso",
                description: "Receba propostas sem obrigação de contratação",
              },
              {
                title: "Gratuito",
                description: "Análise e simulação totalmente grátis",
              },
              {
                title: "Rápido",
                description: "Receba respostas em menos de 24 horas",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white border border-border rounded-lg p-6 text-center"
              >
                <h3 className="text-lg font-bold text-primary mb-2">{benefit.title}</h3>
                <p className="text-foreground/70">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
