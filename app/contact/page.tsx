"use client"

import { motion, Variants } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare, Navigation, Map, Globe, Mountain } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import UltimateCTASection from "@/components/home/ultimate-cta-section"

// Tipando corretamente as variantes
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    },
  },
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // Map States
  const [mapType, setMapType] = useState<"m" | "k" | "p">("k")
  const [userLocation, setUserLocation] = useState("")
  const [showDirections, setShowDirections] = useState(false)

  const handleTraceRoute = () => {
    if (userLocation.trim()) {
      setShowDirections(true)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Montar o corpo do email
    const emailBody = `Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Assunto: ${formData.subject}

Mensagem:
${formData.message}`;

    // Codificar o assunto e corpo
    const subject = encodeURIComponent(formData.subject || "Novo Contacto")
    const body = encodeURIComponent(emailBody)

    // Abrir Gmail com os parâmetros preenchidos
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=geral@optima.co.ao&subject=${subject}&body=${body}`
    
    window.open(gmailLink, "_blank")

    setSubmitStatus("success")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })

    setTimeout(() => {
      setSubmitStatus("idle")
      setIsSubmitting(false)
    }, 3000)
  }

  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="py-12 md:py-20 bg-[rgb(230,235,221)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#1D285E] mb-6">Entre em Contacto</h1>
            <p className="text-xl text-[#1D285E]/70">
              Estamos aqui para ajudar. Contacte-nos através do meio que preferir
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário de Contacto */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-[#676B49] rounded-full flex items-center justify-center">
                  <MessageSquare size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[#1D285E]">Envie-nos uma mensagem</h2>
                  <p className="text-[#1D285E]/70">Preencha o formulário abaixo</p>
                </div>
              </div>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <p className="text-green-700 font-medium">✓ Mensagem enviada com sucesso!</p>
                  <p className="text-green-600 text-sm mt-1">Entraremos em contacto em breve.</p>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <p className="text-red-700 font-medium">✗ Erro ao enviar mensagem</p>
                  <p className="text-red-600 text-sm mt-1">Por favor, tente novamente mais tarde.</p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#1D285E] mb-2">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full bg-white focus:border-[#676B49] focus:ring-2 focus:ring-[#676B49]/20 focus:outline-none transition"
                        placeholder="Seu nome"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1D285E] mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full bg-white focus:border-[#676B49] focus:ring-2 focus:ring-[#676B49]/20 focus:outline-none transition"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#1D285E] mb-2">
                      Telefone
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full bg-white focus:border-[#676B49] focus:ring-2 focus:ring-[#676B49]/20 focus:outline-none transition"
                        placeholder="+244 923 456 789"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#1D285E] mb-2">
                      Assunto *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-full bg-white focus:border-[#676B49] focus:ring-2 focus:ring-[#676B49]/20 focus:outline-none transition"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="informacao">Informação Geral</option>
                      <option value="suporte">Suporte Técnico</option>
                      <option value="parceria">Parcerias</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1D285E] mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:border-[#676B49] focus:ring-2 focus:ring-[#676B49]/20 focus:outline-none transition resize-none"
                    placeholder="Descreva a sua questão ou necessidade..."
                  />
                </div>

                <div className="text-sm text-gray-600">
                  <p>* Campos obrigatórios</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#676B49] text-white font-semibold rounded-full hover:bg-[#5a5d3d] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      A enviar...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Informações de Contacto */}
            <div>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Email */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 bg-[#676B49] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1D285E] mb-3">Email</h3>
                  <p className="text-[#1D285E]/70 mb-4">Enviamos resposta em até 24 horas</p>
                  <a
                    href="mailto:geral@optima.co.ao"
                    className="inline-block text-[#676B49] font-semibold hover:opacity-70 transition-opacity"
                  >
                    geral@optima.co.ao
                  </a>
                </motion.div>

                {/* Phone */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-16 h-16 bg-[#676B49] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1D285E] mb-3">Telefone</h3>
                  <p className="text-[#1D285E]/70 mb-4">Disponível de segunda a sexta</p>
                  <div className="space-y-2">
                    <a
                      href="tel:+244933040182"
                      className="block text-[#676B49] font-semibold hover:opacity-70 transition-opacity"
                    >
                      +244 933 040 182
                    </a>
                    <a
                      href="tel:+244933043525"
                      className="block text-[#676B49] font-semibold hover:opacity-70 transition-opacity"
                    >
                      +244 933 043 525
                    </a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Localização */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg p-8 mb-12 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#676B49] rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1D285E] mb-2">Localização</h3>
                    <p className="text-[#1D285E]/70 mb-4">Visite-nos em Luanda </p>
                    <address className="not-italic text-[#1D285E]">
                      <p className="font-semibold text-[#676B49]">Óptima-Corretora de Seguros SA</p>
                    </address>
                  </div>
                </div>
              </motion.div>

              {/* Horário */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[#1D285E]/5 border border-[#1D285E]/10 rounded-lg p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#676B49] rounded-full flex items-center justify-center shrink-0">
                    <Clock size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1D285E] mb-2">Horário de Atendimento</h3>
                    <p className="text-[#1D285E]/70">Telefone, email e chat em tempo real</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <h4 className="font-semibold text-[#1D285E] mb-3">Segunda a Sexta</h4>
                    <ul className="space-y-2 text-[#1D285E]/70">
                      <li>09:00 - 13:00</li>
                      <li>14:00 - 18:00</li>
                    </ul>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <h4 className="font-semibold text-[#1D285E] mb-3">Fim de Semana</h4>
                    <ul className="space-y-2 text-[#1D285E]/70">
                      <li>Sábado: 09:00 - 13:00</li>
                      <li>Domingo: Fechado</li>
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Map Controls Toolbar */}
          <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-8">
            {/* Search / Trace Route */}
            <div className="w-full max-w-md bg-white p-2 rounded-xl shadow-sm border border-gray-200 flex gap-2">
              <div className="relative grow">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Digite sua localização para traçar rota..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#676B49] text-[#1D285E] text-sm transition-all"
                  value={userLocation}
                  onChange={(e) => {
                    setUserLocation(e.target.value)
                    if (!e.target.value) setShowDirections(false)
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && handleTraceRoute()}
                />
              </div>
              <button
                onClick={handleTraceRoute}
                className="bg-[#676B49] text-white px-4 py-2 rounded-lg hover:bg-[#5a5d3d] transition-colors flex items-center gap-2 text-sm font-medium"
                title="Traçar Rota"
              >
                <Navigation size={16} />
                <span className="hidden sm:inline">Ir</span>
              </button>
            </div>

            {/* Map Type Controls */}
            <div className="flex bg-white p-1.5 rounded-xl shadow-sm border border-gray-200 gap-1 overflow-x-auto max-w-full">
              <button
                onClick={() => setMapType("m")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 shrink-0 ${mapType === 'm' ? 'bg-[#1D285E] text-white shadow-sm' : 'hover:bg-gray-50 text-[#1D285E]/70'}`}
              >
                <Map size={16} />
                <span className="hidden sm:inline">Mapa</span>
              </button>
              <button
                onClick={() => setMapType("k")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 shrink-0 ${mapType === 'k' ? 'bg-[#1D285E] text-white shadow-sm' : 'hover:bg-gray-50 text-[#1D285E]/70'}`}
              >
                <Globe size={16} />
                <span className="hidden sm:inline">Satélite</span>
              </button>
              <button
                onClick={() => setMapType("p")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 shrink-0 ${mapType === 'p' ? 'bg-[#1D285E] text-white shadow-sm' : 'hover:bg-gray-50 text-[#1D285E]/70'}`}
              >
                <Mountain size={16} />
                <span className="hidden sm:inline">Terreno</span>
              </button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-gray-200 rounded-3xl overflow-hidden h-[400px] md:h-[600px] shadow-2xl"
          >

            <iframe
              src={`https://maps.google.com/maps?${showDirections && userLocation
                ? `saddr=${encodeURIComponent(userLocation)}&daddr=Óptima-Corretora+de+Seguros+SA,+Edificio+154,+R.+Cmte.+Kwenha,+Luanda`
                : `q=Óptima-Corretora+de+Seguros+SA,+Edificio+154,+R.+Cmte.+Kwenha,+Luanda`
                }&t=${mapType}&z=${showDirections ? 13 : 17}&ie=UTF8&iwloc=A&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Extraordinary CTA */}
      <UltimateCTASection hideSecondaryAction={true} />
    </div>
  )
}