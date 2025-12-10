"use client";  // Diretriz para garantir que este componente seja renderizado no cliente

import type React from "react";
import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { CheckCircle2, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

// Variantes para animação (motion)
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

export default function SimulationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "individual",
    insuranceType: "auto",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSending, setIsSending] = useState(false);

  // Função para tratar as mudanças nos inputs do formulário
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Função para validar os dados do formulário
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

  // Função para submeter o formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSending(true);

    try {
      await emailjs.send(
        "service_mvwnm67",   // ID do serviço
        "template_uk94aha",   // ID do template
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          type: formData.type,
          insuranceType: formData.insuranceType,
          message: formData.message,
        },
        "VkpjXmrL4ruzk8sjk"  // Sua chave pública
      );

      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          type: "individual",
          insuranceType: "auto",
          message: "",
        });
      }, 5000);
    } catch (error) {
      alert("Erro ao enviar a simulação. Tente novamente.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="w-full pt-16">
      {/* Hero */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-[#1D285E]/5 to-[#676B49]/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#1D285E] mb-6">Simulação Gratuita</h1>
            <p className="text-xl text-[#1D285E]/70">
              Receba uma proposta personalizada em minutos, sem qualquer compromisso
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isSubmitted ? (
            <motion.form
              onSubmit={handleSubmit}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-white border border-gray-200 rounded-lg p-8 md:p-12"
            >
              {/* Nome */}
              <motion.div variants={itemVariants} className="mb-6">
                <label className="block text-sm font-semibold text-[#1D285E] mb-2">Nome Completo *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-full focus:ring-2 focus:ring-[#676B49] ${errors.name ? "border-red-500" : "border-gray-300"}`}
                  placeholder="Seu nome completo"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                    <AlertCircle size={16} /> {errors.name}
                  </p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants} className="mb-6">
                <label className="block text-sm font-semibold text-[#1D285E] mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-full focus:ring-2 focus:ring-[#676B49] ${errors.email ? "border-red-500" : "border-gray-300"}`}
                  placeholder="seu.email@exemplo.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                    <AlertCircle size={16} /> {errors.email}
                  </p>
                )}
              </motion.div>

              {/* Telefone */}
              <motion.div variants={itemVariants} className="mb-6">
                <label className="block text-sm font-semibold text-[#1D285E] mb-2">Telefone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-full focus:ring-2 focus:ring-[#676B49] ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                  placeholder="+244 912 345 678"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-2 flex items-center gap-2">
                    <AlertCircle size={16} /> {errors.phone}
                  </p>
                )}
              </motion.div>

              {/* Tipo cliente */}
              <motion.div variants={itemVariants} className="mb-6">
                <label className="block text-sm font-semibold text-[#1D285E] mb-2">Tipo de Cliente</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, type: "individual" }))}

                    className={`px-4 py-3 rounded-full border-2 font-medium ${formData.type === "individual" ? "border-[#676B49] bg-[#676B49]/10 text-[#676B49]" : "border-gray-300 text-[#1D285E]"}`}
                  >
                    Particular
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, type: "company" }))}

                    className={`px-4 py-3 rounded-full border-2 font-medium ${formData.type === "company" ? "border-[#676B49] bg-[#676B49]/10 text-[#676B49]" : "border-gray-300 text-[#1D285E]"}`}
                  >
                    Empresa
                  </button>
                </div>
              </motion.div>

              {/* Tipo de seguro */}
              <motion.div variants={itemVariants} className="mb-6">
                <label className="block text-sm font-semibold text-[#1D285E] mb-2">Tipo de Seguro</label>

                <select
                  name="insuranceType"
                  value={formData.insuranceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#676B49]"
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

              {/* Mensagem */}
              <motion.div variants={itemVariants} className="mb-8">
                <label className="block text-sm font-semibold text-[#1D285E] mb-2">Detalhes Adicionais</label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#676B49]"
                  placeholder="Conte-nos mais sobre o que procura..."
                />
              </motion.div>

              {/* Botão */}
              <motion.button
                variants={itemVariants}
                type="submit"
                disabled={isSending}
                className="w-full px-8 py-4 bg-[#676B49] text-white rounded-full font-semibold hover:bg-[#5a5d3d] transition-colors disabled:opacity-50"
              >
                {isSending ? "A enviar..." : "Receber Simulação Gratuita"}
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-green-600" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-green-900 mb-4">
                Simulação enviada com sucesso!
              </h2>

              <p className="text-green-800 mb-6">
                Em breve um consultor entrará em contacto consigo.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
