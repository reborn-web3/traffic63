"use client";

import React from "react";

import { useState, useRef, FormEvent } from "react";

/**
 * ContactForm component
 *
 * Handles phone input masking, validation, and simulated submit feedback.
 * All logic runs on the client side.
 */
export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [originalBtnHTML, setOriginalBtnHTML] = useState<string>("");

  // Phone input mask – formats Russian phone numbers as +7 (___) ___-__-__
  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    let value = input.value.replace(/\D/g, "");

    if (!value.length) {
      input.value = "";
      return;
    }

    // Ensure number starts with 7 (Russian country code)
    if (value[0] === "8") value = "7" + value.slice(1);
    if (value[0] !== "7") value = "7" + value;

    let formatted = "+7";
    if (value.length > 1) formatted += " (" + value.slice(1, 4);
    if (value.length > 4) formatted += ") " + value.slice(4, 7);
    if (value.length > 7) formatted += "-" + value.slice(7, 9);
    if (value.length > 9) formatted += "-" + value.slice(9, 11);
    input.value = formatted;
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    // Simulate async request (replace with real API call if needed)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form and UI
    formRef.current?.reset();
    setIsSubmitting(false);
    
    // Show temporary success state
    const originalText = "Отправить заявку ✉️";
    const btn = formRef.current?.querySelector('button[type="submit"]');
    if (btn) {
      const prevText = btn.innerHTML;
      btn.innerHTML = "✅ Заявка отправлена!";
      btn.classList.add("bg-green-500");
      setTimeout(() => {
        btn.innerHTML = prevText;
        btn.classList.remove("bg-green-500");
      }, 3000);
    }
  };

  return (
    <form
      className="contact-form"
      id="contactForm"
      ref={formRef}
      onSubmit={handleFormSubmit}
    >
      <div className="form-group">
        <label htmlFor="name">Ваше имя ✍️</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Как вас зовут?"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Телефон 📱</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="+7 (___) ___-__-__"
          required
          onChange={handlePhoneInput}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Расскажите о проекте 💬</label>
        <textarea
          id="message"
          name="message"
          placeholder="Чем занимается ваш бизнес? Какие задачи хотите решить?"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full justify-center flex items-center py-3 rounded-full bg-coral text-white font-bold transition-colors hover:bg-coral-dark"
        style={{ width: "100%" }}
      >
        Отправить заявку ✉️
      </button>
    </form>
  );
};
