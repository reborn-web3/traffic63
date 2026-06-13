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
  const [isSuccess, setIsSuccess] = useState(false);

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
    if (isSubmitting || isSuccess) return;

    setIsSubmitting(true);

    // Simulate async request (replace with real API call if needed)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Reset form and UI
    formRef.current?.reset();
    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
    }, 4000);
  };

  return (
    <form
      className="contact-form"
      id="contactForm"
      ref={formRef}
      onSubmit={handleFormSubmit}
    >
      <div className="form-group">
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Как вас зовут?"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Телефон</label>
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
        <label htmlFor="message">Расскажите о проекте</label>
        <textarea
          id="message"
          name="message"
          placeholder="Чем занимается ваш бизнес? Какие задачи хотите решить?"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting || isSuccess}
        className={`w-full py-4 rounded-xl text-white font-heading text-xs font-extrabold uppercase tracking-widest transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed group ${
          isSuccess 
            ? "bg-emerald-600 hover:bg-emerald-600 shadow-md" 
            : "bg-coral hover:bg-coral-dark hover:-translate-y-0.5"
        }`}
        style={{ width: "100%" }}
      >
        {isSubmitting && "Отправка..."}
        {isSuccess && "Заявка отправлена!"}
        {!isSubmitting && !isSuccess && (
          <>
            Отправить заявку
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
};
