"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTranslations } from "next-intl";
import { Shield, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  whatsapp: z.string().optional(),
  church: z.string().optional(),
  country: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().min(10),
  // Honeypot — must stay empty (bots fill it).
  botcheck: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/50 transition-colors";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<Status>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    setStatus("submitting");
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New enquiry from ${data.firstName} ${data.lastName} — 190 Nations Office`,
          from_name: "190 Nations Office Website",
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          whatsapp: data.whatsapp || "—",
          church: data.church || "—",
          country: data.country || "—",
          interest: data.interest || "—",
          message: data.message,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center text-center py-12 px-4">
        <CheckCircle2 className="w-14 h-14 text-amber-400 mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">
          {t("successTitle")}
        </h3>
        <p className="text-gray-400 text-sm max-w-sm">{t("successMsg")}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-amber-400 hover:text-amber-300 text-sm underline"
        >
          {t("sendAnother")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Honeypot — hidden from humans, bots fill it. Text input so the
          value is always a string ("" when empty) and passes validation. */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("botcheck")}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">
            {t("firstName")}
          </label>
          <input type="text" className={inputClass} {...register("firstName")} />
          {errors.firstName && (
            <p className="text-xs text-red-400 mt-1">{t("required")}</p>
          )}
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">
            {t("lastName")}
          </label>
          <input type="text" className={inputClass} {...register("lastName")} />
          {errors.lastName && (
            <p className="text-xs text-red-400 mt-1">{t("required")}</p>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1.5">
          {t("email")}
        </label>
        <input type="email" className={inputClass} {...register("email")} />
        {errors.email && (
          <p className="text-xs text-red-400 mt-1">{t("invalidEmail")}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">
            {t("whatsapp")}
          </label>
          <input type="tel" className={inputClass} {...register("whatsapp")} />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">
            {t("church")}
          </label>
          <input type="text" className={inputClass} {...register("church")} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">
            {t("country")}
          </label>
          <input type="text" className={inputClass} {...register("country")} />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1.5">
            {t("interest")}
          </label>
          <select
            className={inputClass}
            defaultValue=""
            {...register("interest")}
          >
            <option value="" className="bg-slate-900">
              Select...
            </option>
            <option value="Weekly Conference" className="bg-slate-900">
              Weekly Conference
            </option>
            <option value="Free Books" className="bg-slate-900">
              Free Books
            </option>
            <option value="Church Partnership" className="bg-slate-900">
              Church Partnership
            </option>
            <option value="Host a Conference" className="bg-slate-900">
              Host a Conference
            </option>
            <option value="Bible School" className="bg-slate-900">
              Bible School
            </option>
            <option value="Donation" className="bg-slate-900">
              Donation
            </option>
            <option value="General Inquiry" className="bg-slate-900">
              General Inquiry
            </option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1.5">
          {t("message")}
        </label>
        <textarea
          rows={5}
          className={`${inputClass} resize-none`}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-red-400 mt-1">{t("messageTooShort")}</p>
        )}
      </div>

      <p className="text-xs text-gray-500 leading-relaxed flex items-start gap-2">
        <Shield className="w-3.5 h-3.5 text-gray-500 flex-shrink-0 mt-0.5" />
        <span>
          {t("privacyNotice")}{" "}
          <a
            href="mailto:allnations@dhmm190.com?subject=Privacy%20policy%20request"
            className="text-amber-400 hover:text-amber-300 underline"
          >
            {t("privacyLink")}
          </a>
          .
        </span>
      </p>

      {status === "error" && (
        <div className="flex items-start gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
          <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
          <span>{t("errorMsg")}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 px-8 py-4 text-base bg-gradient-to-r from-royal to-royal-dark text-white hover:from-royal-dark hover:to-royal-deep shadow-lg shadow-royal/20 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" && (
          <Loader2 className="w-5 h-5 animate-spin" />
        )}
        {status === "submitting" ? t("sending") : t("submit")}
      </button>

      <p className="text-xs text-gray-500 text-center">
        {t("responseTimeNote")}
      </p>
    </form>
  );
}
