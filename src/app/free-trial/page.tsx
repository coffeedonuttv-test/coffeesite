"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ScrollProvider } from "@/components/ScrollContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CoffeeProgress } from "@/components/CoffeeProgress";

// --- AWWWARDS UPGRADE: Custom Animated Select Component ---
function CustomSelect({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option"
}: {
  label: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <div className="relative flex flex-col gap-3" ref={dropdownRef}>
      <label className="text-xs tracking-[0.2em] text-muted-foreground uppercase font-medium">
        {label}
      </label>

      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-full text-left px-6 py-4 rounded-2xl border transition-all duration-300 flex justify-between items-center ${isOpen ? "border-primary/50 bg-primary/5" : "border-white/10 bg-black/40 hover:border-white/20 hover:bg-black/60"
          }`}
        whileTap={{ scale: 0.98 }}
      >
        <span className={selectedOption ? "text-foreground font-medium" : "text-muted-foreground"}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-5 h-5 text-muted-foreground"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 w-full mt-2 py-2 bg-[#121212] border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-6 py-3 text-sm transition-colors ${value === option.value
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                  }`}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FreeTrialContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  // Form State
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Data State
  const [device, setDevice] = useState("firestick");
  const [country, setCountry] = useState("");
  const [source, setSource] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isAgreed) return; // Prevent submission if not agreed
    setFormState("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/free-trial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          device: device,
          country: country || "Not specified",
          found_us_via: source || "Not specified",
        }),
      });

      if (response.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const devices = [
    { value: "firestick", label: "Amazon Firestick", icon: "🔥" },
    { value: "android-tv", label: "Android TV", icon: "📺" },
    { value: "smart-tv", label: "Smart TV", icon: "🖥️" },
    { value: "mobile", label: "Mobile / Tablet", icon: "📱" },
  ];

  const countries = [
    { label: "USA", value: "usa" },
    { label: "Canada", value: "canada" },
    { label: "UK", value: "uk" },
    { label: "Australia", value: "australia" },
    { label: "Middle East", value: "middle-east" },
    { label: "Europe", value: "europe" },
    { label: "Other", value: "other" },
  ];

  const sources = [
    { label: "Instagram", value: "instagram" },
    { label: "TikTok", value: "tiktok" },
    { label: "Google Search", value: "google" },
    { label: "Friend Referral", value: "referral" },
    { label: "Other", value: "other" },
  ];

  // Stagger animation variants for form children
  const formVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring" as const, stiffness: 300, damping: 24 } 
    }
  };

  return (
    <>
      <Header />
      <CoffeeProgress />

      <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div ref={containerRef} className="container max-w-3xl relative z-10">

          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_currentColor]" />
              <span className="text-xs tracking-[0.2em] font-medium text-primary uppercase">24-HOUR FREE ACCESS</span>
            </motion.div>

            {/* BUG FIXED: Solid hardware-accelerated color instead of buggy transparent CSS */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Try <span className="text-[#E2955A] drop-shadow-[0_0_25px_rgba(226,149,90,0.5)]">Everything</span> Free
            </h1>

            <p className="text-muted-foreground text-lg max-w-md mx-auto">
              No credit card. No commitment. Instant access to premium cinema and live sports.
            </p>
          </motion.div>

          {/* Form Card container */}
          <div className="relative">
            {/* Glossy backplate glow */}
            <div className="absolute -inset-1 bg-gradient-to-b from-white/5 to-transparent rounded-[2.5rem] blur-xl" />

            <div className="relative p-[1px] rounded-[2rem] bg-gradient-to-b from-white/10 via-white/5 to-transparent shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
              <div className="relative rounded-[calc(2rem-1px)] bg-black/60 backdrop-blur-2xl overflow-hidden min-h-[500px] flex flex-col justify-center">

                <AnimatePresence mode="wait">
                  {formState === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      className="p-12 md:p-20 text-center flex flex-col items-center"
                    >
                      <motion.div
                        className="w-24 h-24 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 relative"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2, stiffness: 200, damping: 20 }}
                      >
                        {/* Success glow ring */}
                        <motion.div
                          className="absolute inset-0 rounded-full border border-primary"
                          animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <motion.path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                          />
                        </svg>
                      </motion.div>
                      <h3 className="text-3xl font-bold mb-4 tracking-tight">Request Received!</h3>
                      <p className="text-muted-foreground text-lg mb-8 max-w-sm">
                        Your credentials are being generated. Check your email inbox (and spam folder) within the next few minutes.
                      </p>
                      <motion.button
                        type="button"
                        onClick={() => {
                          setFormState("idle");
                          setIsAgreed(false);
                        }}
                        className="px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors font-medium text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Submit Another Request
                      </motion.button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      variants={formVariants}
                      initial="hidden"
                      animate="show"
                      exit={{ opacity: 0, y: -20 }}
                      onSubmit={handleSubmit}
                      className="p-8 md:p-12"
                    >
                      <div className="flex flex-col gap-8">

                        {/* Row 1: Contact Info */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <motion.div variants={itemVariants} className="relative flex flex-col gap-3">
                            <label className="text-xs tracking-[0.2em] text-muted-foreground uppercase font-medium">First Name</label>
                            <div className="relative">
                              <input
                                type="text"
                                name="name"
                                required
                                placeholder="John Doe"
                                onFocus={() => setFocusedField("name")}
                                onBlur={() => setFocusedField(null)}
                                className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/10 focus:border-primary/50 text-foreground placeholder:text-white/20 outline-none transition-all duration-300 hover:border-white/20"
                              />
                            </div>
                          </motion.div>

                          <motion.div variants={itemVariants} className="relative flex flex-col gap-3">
                            <label className="text-xs tracking-[0.2em] text-muted-foreground uppercase font-medium">Email Address</label>
                            <div className="relative">
                              <input
                                type="email"
                                name="email"
                                required
                                placeholder="Where should we send login?"
                                onFocus={() => setFocusedField("email")}
                                onBlur={() => setFocusedField(null)}
                                className="w-full px-6 py-4 rounded-2xl bg-black/40 border border-white/10 focus:border-primary/50 text-foreground placeholder:text-white/20 outline-none transition-all duration-300 hover:border-white/20"
                              />
                            </div>
                          </motion.div>
                        </div>

                        {/* Row 2: Device Selection (Icon Grid) */}
                        <motion.div variants={itemVariants} className="flex flex-col gap-3">
                          <label className="text-xs tracking-[0.2em] text-muted-foreground uppercase font-medium">Select Your Device</label>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {devices.map((d) => (
                              <button
                                key={d.value}
                                type="button"
                                onClick={() => setDevice(d.value)}
                                className={`relative p-4 rounded-2xl border transition-all duration-300 overflow-hidden group ${device === d.value
                                    ? "bg-primary/10 border-primary/50"
                                    : "bg-black/40 border-white/10 hover:border-white/20"
                                  }`}
                              >
                                {/* Active indicator gradient */}
                                {device === d.value && (
                                  <motion.div
                                    layoutId="device-active"
                                    className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-50"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                  />
                                )}
                                <div className="relative z-10 flex flex-col items-center gap-2">
                                  <span className={`text-3xl transition-transform duration-300 ${device === d.value ? "scale-110" : "group-hover:scale-110"}`}>
                                    {d.icon}
                                  </span>
                                  <span className={`text-sm font-medium ${device === d.value ? "text-primary" : "text-muted-foreground"}`}>
                                    {d.label}
                                  </span>
                                </div>
                              </button>
                            ))}
                          </div>
                        </motion.div>

                        {/* Row 3: Custom Dropdowns */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <motion.div variants={itemVariants} className="relative z-20">
                            <CustomSelect
                              label="Your Country"
                              options={countries}
                              value={country}
                              onChange={setCountry}
                              placeholder="Select Country"
                            />
                          </motion.div>

                          <motion.div variants={itemVariants} className="relative z-10">
                            <CustomSelect
                              label="How did you find us?"
                              options={sources}
                              value={source}
                              onChange={setSource}
                              placeholder="Select Source"
                            />
                          </motion.div>
                        </div>

                        {/* Row 4: Agreement Checkbox */}
                        <motion.div variants={itemVariants} className="mt-4">
                          <label className="flex items-start gap-4 cursor-pointer group">
                            <div className="relative flex-shrink-0 mt-1">
                              <input
                                type="checkbox"
                                className="peer sr-only"
                                checked={isAgreed}
                                onChange={(e) => setIsAgreed(e.target.checked)}
                                required
                              />
                              <div className="w-6 h-6 rounded border-2 border-white/20 bg-black/40 peer-checked:bg-primary peer-checked:border-primary transition-all duration-300 flex items-center justify-center group-hover:border-primary/50">
                                <AnimatePresence>
                                  {isAgreed && (
                                    <motion.svg
                                      initial={{ scale: 0, opacity: 0 }}
                                      animate={{ scale: 1, opacity: 1 }}
                                      exit={{ scale: 0, opacity: 0 }}
                                      className="w-4 h-4 text-primary-foreground"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth={3}
                                    >
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </motion.svg>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                              I understand this trial is valid for 24 hours and login details will be sent to the email provided above.
                            </span>
                          </label>
                        </motion.div>

                        {/* Submit Error */}
                        <AnimatePresence>
                          {formState === "error" && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-red-400 text-sm font-medium bg-red-400/10 px-4 py-3 rounded-lg border border-red-400/20"
                            >
                              There was an issue submitting your request. Please ensure all fields are filled or contact WhatsApp support.
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Row 5: Submit Button */}
                        <motion.div variants={itemVariants} className="pt-4">
                          <motion.button
                            type="submit"
                            disabled={formState === "submitting" || !isAgreed}
                            className={`w-full py-5 rounded-2xl font-bold tracking-widest uppercase text-sm relative overflow-hidden transition-all duration-300 shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)] ${!isAgreed ? "bg-white/5 text-white/30 cursor-not-allowed border border-white/10" : "bg-primary text-primary-foreground hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.4)]"
                              }`}
                            whileHover={isAgreed && formState !== "submitting" ? { scale: 1.01 } : {}}
                            whileTap={isAgreed ? { scale: 0.98 } : {}}
                          >
                            {/* Animated gradient hover sheen */}
                            {isAgreed && formState !== "submitting" && (
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                                initial={{ x: "-200%" }}
                                whileHover={{ x: "200%" }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                              />
                            )}

                            <span className="relative z-10 flex items-center justify-center gap-3">
                              {formState === "submitting" ? (
                                <>
                                  <motion.span
                                    className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                  />
                                  Processing Request...
                                </>
                              ) : (
                                <>
                                  Get My Free Trial
                                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                  </svg>
                                </>
                              )}
                            </span>
                          </motion.button>
                        </motion.div>

                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default function FreeTrialPage() {
  return (
    <ScrollProvider>
      <FreeTrialContent />
    </ScrollProvider>
  );
}