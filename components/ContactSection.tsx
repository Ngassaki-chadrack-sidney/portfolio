"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Magnetic } from "./motion-primitives/magnetic";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(contactRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Créer un lien mailto
    const mailtoLink = `mailto:chadrack.ngassaki@gmail.com?subject=Message de ${formData.name}&body=${formData.message}%0D%0A%0D%0ADe: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-18 md:py-32 px-6 md:px-12 lg:px-24 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center"
        >
          Travaillons ensemble
        </h2>

        <div
          ref={contactRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-white mt-8"
        >
          {/* Contact Cards */}
          <div
            className="
           bg-slate-900/50 rounded-lg p-6 border border-slate-800 w-80"
          >
            <div className="flex gap-2 justify-center items-center">
              <Mail className="w-8 h-8 text-wite mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
            </div>
            <a
              href="mailto:chadrack.ngassaki@gmail.com"
              className="text-white text-center"
            >
              chadrack.ngassaki@gmail.com
            </a>
          </div>

          <div
            className="
           bg-slate-900/50 rounded-lg p-6 border border-slate-800 hover:border-wite transition-all duration-300 w-80"
          >
            <div className="flex gap-2 justify-center items-center">
              <Phone className="w-8 h-8 text-wite mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Téléphone
              </h3>
            </div>

            <div className="w-full flex justify-center items-center">
              <a
                href="tel:+242064732923"
                className="text-muted-foreground text-center"
              >
                +242 06 47 32 923
              </a>
            </div>
          </div>

          <div
            className="
           bg-slate-900/50 rounded-lg p-6 border border-slate-800 hover:border-wite transition-all duration-300 "
          >
            <div className="flex gap-2 justify-center items-center">
              <MapPin className="w-8 h-8 text-wite mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Localisation
              </h3>
            </div>
            <p className="text-muted-foreground text-center">
              Brazzaville, Congo
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto p-8"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-foreground placeholder-muted-foreground focus:border-wite focus:outline-none transition-colors"
              placeholder="Votre nom"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-foreground placeholder-muted-foreground focus:border-wite focus:outline-none transition-colors"
              placeholder="votre@email.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-foreground placeholder-muted-foreground focus:border-wite focus:outline-none transition-colors resize-none"
              placeholder="Votre message..."
            />
          </div>

          <Magnetic intensity={0.3} range={60}>
            <button
              type="submit"
              className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Envoyer votre message
              <Send size={18} />
            </button>
          </Magnetic>
        </form>
      </div>
    </section>
  );
}
