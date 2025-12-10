"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"
import { motion, Variants } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const bottomBarVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <footer className="relative bg-[#1D285E] border-t border-[#283373] overflow-hidden">
      
      {/* Imagem de fundo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
        }}
      />

      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-[#1D285E]/80" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <p className="text-sm text-white/90 leading-relaxed mb-4">
              A melhor proteção começa com a escolha certa — e com o parceiro certo.
            </p>
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/">
                <Image
                  src="/logo11.png"
                  alt="Óptima Corretora de Seguros"
                  width={180}
                  height={80}
                  className="h-60 w-auto object-contain"
                />
              </Link>
            </motion.div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4 text-lg">Navegação</h4>
            <ul className="space-y-3">
              {[{ label: "Início", href: "/" },
                { label: "Sobre", href: "/about" },
                { label: "Blog", href: "/blog" },
                { label: "Contactos", href: "/contact" }
              ].map((item) => (
                <li key={item.href}>
                  <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 hover:text-white transition-all duration-300 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-300" />
                      {item.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4 text-lg">Serviços</h4>
            <ul className="space-y-3">
              {[{ label: "Mediação", href: "/services/mediation" },
                { label: "Empresas", href: "/services/companies" },
                { label: "Particulares", href: "/services/individuals" },
                { label: "Parceiros", href: "/partners" }
              ].map((item) => (
                <li key={item.href}>
                  <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <Link
                      href={item.href}
                      className="text-sm text-white/70 hover:text-white transition-all duration-300 flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-300" />
                      {item.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-4 text-lg">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <motion.li className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300" whileHover={{ x: 4 }}>
                <div className="p-2 bg-[#283373] rounded-lg">
                  <Mail size={16} className="text-white" />
                </div>
                <span>info@optima-seguros.ao</span>
              </motion.li>
              
              <motion.li className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300" whileHover={{ x: 4 }}>
                <div className="p-2 bg-[#283373] rounded-lg">
                  <Phone size={16} className="text-white" />
                </div>
                <span>+244 923 456 678</span>
              </motion.li>
              
              <motion.li className="flex items-center gap-3 text-white/70 hover:text-white transition-colors duration-300" whileHover={{ x: 4 }}>
                <div className="p-2 bg-[#283373] rounded-lg">
                  <MapPin size={16} className="text-white" />
                </div>
                <span>Luanda, Angola</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div className="border-t border-[#283373] mt-12 pt-8" variants={bottomBarVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="text-center text-sm text-white/70">
            © {currentYear} Óptima Corretora de Seguros. Todos os direitos reservados. Website for RC Media
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
