"use client";

import React, { useState, FormEvent, useEffect } from "react";

interface ContactFormProps {
  defaultMessage?: string;
}

// Strict email regex requiring a valid TLD (domain extension of at least 2 chars, e.g. .ru, .com)
const isValidEmail = (emailStr: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(emailStr.trim());
};

export const ContactForm = ({ defaultMessage }: ContactFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(defaultMessage || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Email validation state
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  useEffect(() => {
    if (defaultMessage) {
      setMessage(defaultMessage);
    }
  }, [defaultMessage]);

  const handleEmailChange = (val: string) => {
    setEmail(val);
    if (isEmailTouched) {
      if (!val.trim()) {
        setEmailError("Укажите ваш email");
      } else if (!isValidEmail(val)) {
        setEmailError("Укажите верный email с доменной зоной (например, example@mail.ru)");
      } else {
        setEmailError(null);
      }
    }
  };

  const handleEmailBlur = () => {
    setIsEmailTouched(true);
    if (!email.trim()) {
      setEmailError("Укажите ваш email");
    } else if (!isValidEmail(email)) {
      setEmailError("Укажите верный email с доменной зоной (например, example@mail.ru)");
    } else {
      setEmailError(null);
    }
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    // Validate email strictly before submission
    setIsEmailTouched(true);
    if (!isValidEmail(email)) {
      setEmailError("Укажите верный email с доменной зоной (например, example@mail.ru)");
      return;
    }
    setEmailError(null);

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: "31736206-741a-4808-a284-d19e067cdc6c",
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
          subject: "Новая заявка с сайта Traffic63",
          from_name: "Traffic63 Website",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setName("");
        setEmail("");
        setMessage("");
        setIsEmailTouched(false);
        setEmailError(null);
        setIsSuccess(true);

        setTimeout(() => {
          setIsSuccess(false);
        }, 6000);
      } else {
        setErrorMessage(
          data.message || "Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз."
        );
      }
    } catch (error) {
      console.error("Web3Forms submit error:", error);
      setErrorMessage("Не удалось отправить форму. Проверьте подключение к интернету.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      id="contactForm"
      onSubmit={handleFormSubmit}
      className="w-full text-left space-y-6"
    >
      {/* Hidden Web3Forms Access Key */}
      <input type="hidden" name="access_key" value="31736206-741a-4808-a284-d19e067cdc6c" />
      <input type="hidden" name="subject" value="Новая заявка с сайта Traffic63" />
      <input type="hidden" name="from_name" value="Traffic63 Website" />

      {/* Honeypot Spam Protection */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      {/* Row 1: Name and Email side-by-side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {/* Name Input */}
        <div className="relative flex flex-col items-start w-full">
          <label
            htmlFor="name"
            className="font-heading text-[10px] font-extrabold tracking-widest text-pencil/60 uppercase mb-1 select-none"
          >
            Ваше имя
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Как вас зовут?"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b border-line-blue/70 rounded-none px-0 py-2 text-ink-dark placeholder:text-pencil/35 focus:border-coral focus:ring-0 focus:outline-none transition-all duration-300 font-body text-base"
          />
        </div>

        {/* Email Input */}
        <div className="relative flex flex-col items-start w-full">
          <label
            htmlFor="email"
            className="font-heading text-[10px] font-extrabold tracking-widest text-pencil/60 uppercase mb-1 select-none"
          >
            Ваш Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@mail.ru"
            required
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            onBlur={handleEmailBlur}
            className={`w-full bg-transparent border-t-0 border-l-0 border-r-0 border-b rounded-none px-0 py-2 text-ink-dark placeholder:text-pencil/35 focus:ring-0 focus:outline-none transition-all duration-300 font-body text-base ${
              emailError
                ? "border-rose-500 focus:border-rose-500"
                : "border-line-blue/70 focus:border-coral"
            }`}
          />
          {emailError && (
            <span className="text-[11px] text-rose-500 font-medium mt-1 select-none animate-fadeIn">
              {emailError}
            </span>
          )}
        </div>
      </div>

      {/* Row 2: Message Input */}
      <div className="relative flex flex-col items-start w-full">
        <label
          htmlFor="message"
          className="font-heading text-[10px] font-extrabold tracking-widest text-pencil/60 uppercase mb-1 select-none"
        >
          Сообщение
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Чем занимается ваш бизнес? Какие задачи хотите решить?"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full min-h-[100px] bg-transparent border-t-0 border-l-0 border-r-0 border-b border-line-blue/70 rounded-none px-0 py-2 text-ink-dark placeholder:text-pencil/35 focus:border-coral focus:ring-0 focus:outline-none transition-all duration-300 font-body text-base resize-none"
        />
      </div>

      {/* Success Notification */}
      {isSuccess && (
        <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-sm font-medium text-center animate-fadeIn">
          ✓ Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
        </div>
      )}

      {/* Error Notification */}
      {errorMessage && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-sm font-medium text-center animate-fadeIn">
          ✕ {errorMessage}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting || isSuccess}
        className={`px-8 py-3.5 rounded-full text-white font-heading text-xs font-extrabold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed mx-auto mt-8 active:scale-95 hover:shadow-lg group ${
          isSuccess
            ? "bg-emerald-600 hover:bg-emerald-600 shadow-md"
            : "bg-ink-dark hover:bg-coral hover:shadow-coral/20"
        }`}
      >
        {isSubmitting && (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Отправка...
          </>
        )}
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


