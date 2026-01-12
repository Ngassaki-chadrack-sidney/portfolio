"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone, Loader2 } from "lucide-react";
import CopyText from "../animations/CopyText";

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailtoLink = `mailto:jrh3948@gmail.com?subject=Message de ${encodeURIComponent(name)}&body=${encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    window.location.href = mailtoLink;

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section
      id="contact"
      className="w-full py-24 px-6 md:px-12 lg:px-24 bg-black relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-blue-600/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* --- INFO DE CONTACT --- */}
          <div className="space-y-12">
            <div className="space-y-4">
              <CopyText delay={0.1}>
                <span className="text-blue-500 font-bold tracking-widest uppercase text-xs">
                  Contact
                </span>
              </CopyText>
              <CopyText delay={0.2}>
                <h2 className="text-4xl md:text-4xl font-black text-white leading-tight">
                  Parlons de votre{" "}
                  <span className="text-blue-600">Prochain Projet</span>
                </h2>
              </CopyText>
            </div>

            <div className="space-y-8">
              <ContactLink
                icon={<Mail className="text-blue-500" />}
                title="Email"
                value="jrh3948@gmail,com"
                href="mailto:jrh3948@gmail,com"
              />
              <ContactLink
                icon={<Phone className="text-blue-500" />}
                title="Téléphone"
                value="+242 06 473 29 24"
                href="tel:+242064732923"
              />
              <ContactLink
                icon={<MapPin className="text-blue-500" />}
                title="Localisation"
                value="Brazzaville, Congo"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-xl"
          >
            <form className="space-y-6" onSubmit={(e: any) => handleSubmit(e as any)}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest ml-1">
                    Nom Complet
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest  ml-1">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Décrivez votre projet..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-colors shadow-lg shadow-blue-600/20 ${isLoading && "cursor-not-allowed"}`}
                disabled={isLoading}
              >
                Envoyer le message {isLoading ? <Loader2 className="animate-spin" /> : <Send />}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ icon, title, value, href }: any) {
  const Component = href ? "a" : "div";
  return (
    <Component
      href={href}
      className="group flex items-center gap-6 p-4 rounded-2xl hover:bg-white/5 transition-all"
    >
      <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-widest mb-1">
          {title}
        </p>
        <p className="text-white font-medium text-lg">{value}</p>
      </div>
    </Component>
  );
}
