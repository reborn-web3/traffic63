"use client";

import React, { useState, useRef, FormEvent, useEffect } from "react";

interface ContactFormProps {
  defaultMessage?: string;
}

export const ContactForm = ({ defaultMessage }: ContactFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState(defaultMessage || "");

  useEffect(() => {
    if (defaultMessage) {
      setMessage(defaultMessage);
    }
  }, [defaultMessage]);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting || isSuccess) return;

    setIsSubmitting(true);

    try {
      const formData = new FormData(formRef.current!);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";
      const response = await fetch(`${apiUrl}/api/v1/submit/74dd9c86-572c-42dd-aef0-3877e2c7e63e`, {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      });

      if (response.ok) {
        formRef.current?.reset();
        setMessage("");
        setIsSuccess(true);

        setTimeout(() => {
          setIsSuccess(false);
        }, 4000);
      } else {
        alert("Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.");
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Не удалось отправить форму. Проверьте соединение с интернетом.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      id="contactForm"
      ref={formRef}
      onSubmit={handleFormSubmit}
      className="w-full text-left space-y-6"
    >
      {/* Защита от спама (Honeypot). Невидима для людей */}
      <input type="text" name="_gotcha" style={{ display: "none" }} />

      {/* Название темы письма/уведомления */}
      <input type="hidden" name="_subject" value="Новая заявка с сайта!" />

      {/* Row 1: Name and Email side-by-side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {/* Name Input */}
        <div className="relative flex flex-col items-start w-full">
          <label
            htmlFor="name"
            className="font-heading text-[10px] font-extrabold tracking-widest text-pencil/50 uppercase mb-1 select-none"
          >
            Ваше имя
          </label>
          <input
            type="text"
            id="name"
            name="Имя"
            placeholder="Как вас зовут?"
            required
            className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-line-blue/70 dark:border-slate-800 rounded-none px-0 py-2 text-ink-dark dark:text-white placeholder:text-pencil/25 focus:border-coral focus:ring-0 focus:outline-none transition-all duration-300"
          />
        </div>

        {/* Email Input */}
        <div className="relative flex flex-col items-start w-full">
          <label
            htmlFor="email"
            className="font-heading text-[10px] font-extrabold tracking-widest text-pencil/50 uppercase mb-1 select-none"
          >
            Ваш Email
          </label>
          <input
            type="email"
            id="email"
            name="Email"
            placeholder="example@mail.ru"
            required
            className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-line-blue/70 dark:border-slate-800 rounded-none px-0 py-2 text-ink-dark dark:text-white placeholder:text-pencil/25 focus:border-coral focus:ring-0 focus:outline-none transition-all duration-300"
          />
        </div>
      </div>

      {/* Row 2: Message Input */}
      <div className="relative flex flex-col items-start w-full">
        <label
          htmlFor="message"
          className="font-heading text-[10px] font-extrabold tracking-widest text-pencil/50 uppercase mb-1 select-none"
        >
          Сообщение
        </label>
        <textarea
          id="message"
          name="Сообщение"
          placeholder="Чем занимается ваш бизнес? Какие задачи хотите решить?"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full min-h-[100px] bg-transparent border-t-0 border-l-0 border-r-0 border-b border-line-blue/70 dark:border-slate-800 rounded-none px-0 py-2 text-ink-dark dark:text-white placeholder:text-pencil/25 focus:border-coral focus:ring-0 focus:outline-none transition-all duration-300 resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || isSuccess}
        className={`px-8 py-3 rounded-full text-white font-heading text-xs font-extrabold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed mx-auto mt-8 active:scale-95 hover:shadow-lg group ${
          isSuccess
            ? "bg-emerald-600 hover:bg-emerald-600 shadow-md"
            : "bg-ink-dark hover:bg-coral hover:shadow-coral/20"
        }`}
      >
        {isSubmitting && "Отправка..."}
        {isSuccess && "Заявка отправлена!"}
        {!isSubmitting && !isSuccess && (
          <>
            Отправить форму
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </>
        )}
      </button>
    </form>
  );
};
