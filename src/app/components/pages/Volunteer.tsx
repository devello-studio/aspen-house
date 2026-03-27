import React, { useState, useRef, useCallback, type ChangeEvent, type FormEvent } from "react";
import { Link } from "react-router";
import { Calendar, Heart, Loader2 } from "lucide-react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { TurnstileSetupAlert } from "../TurnstileSetupAlert";
import { TURNSTILE_SITE_KEY } from "../../../constants/env";

export function Volunteer() {
  const turnstileRef = useRef<TurnstileInstance>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    consultationDate: "",
  });
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ variant: "success" | "destructive"; message: string } | null>(
    null,
  );

  const handleTurnstileSuccess = useCallback((token: string) => {
    setTurnstileToken(token);
    setFeedback(null);
  }, []);

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken(null);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    if (!TURNSTILE_SITE_KEY) {
      setFeedback({
        variant: "destructive",
        message: "Form is not configured (missing VITE_TURNSTILE_SITE_KEY).",
      });
      return;
    }

    if (!turnstileToken) {
      setFeedback({
        variant: "destructive",
        message: "Please complete the verification challenge before sending.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "volunteer",
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          consultationDate: formData.consultationDate,
          turnstileToken,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string };

      if (!res.ok) {
        setFeedback({
          variant: "destructive",
          message: data.message ?? "Could not send your request. Please try again.",
        });
        turnstileRef.current?.reset();
        setTurnstileToken(null);
        return;
      }

      setFeedback({
        variant: "success",
        message: data.message ?? "Thank you! We will reach out about your consultation.",
      });
      setFormData({ name: "", email: "", phone: "", consultationDate: "" });
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    } catch {
      setFeedback({
        variant: "destructive",
        message: "Network error. Is the API running? Try: npm run dev:all",
      });
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <section className="py-16 md:py-20 bg-gradient-to-b from-muted to-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6">
            <Heart size={40} className="text-primary" strokeWidth={1.5} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Working together for your better life!
          </h1>
          <p className="text-xl text-foreground/80">Sign up for a consultation right now!</p>
        </div>
      </section>

      <section className="py-12 pb-20">
        <div className="container mx-auto px-4 max-w-xl">
          <Card className="border-2 border-primary/10">
            <CardContent className="p-8">
              {feedback && (
                <Alert
                  variant={feedback.variant === "destructive" ? "destructive" : "default"}
                  className={
                    feedback.variant === "success"
                      ? "mb-6 border-green-600/50 bg-green-50 text-green-900 dark:bg-green-950/30 dark:text-green-100"
                      : "mb-6"
                  }
                >
                  <AlertTitle>{feedback.variant === "success" ? "Received" : "Could not send"}</AlertTitle>
                  <AlertDescription>{feedback.message}</AlertDescription>
                </Alert>
              )}

              <TurnstileSetupAlert className="mb-6" />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="vol-name">
                    Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="vol-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vol-phone">
                    Phone <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="vol-phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(801) 555-0100"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vol-email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="vol-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vol-date">
                    Preferred date for a call <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="vol-date"
                    name="consultationDate"
                    type="date"
                    required
                    value={formData.consultationDate}
                    onChange={handleChange}
                    className="w-full"
                  />
                  <p className="text-xs text-muted-foreground">
                    Choose a day you&apos;re available for a call.
                  </p>
                </div>

                {TURNSTILE_SITE_KEY ? (
                  <div className="flex justify-start pt-2">
                    <Turnstile
                      ref={turnstileRef}
                      siteKey={TURNSTILE_SITE_KEY}
                      onSuccess={handleTurnstileSuccess}
                      onExpire={handleTurnstileExpire}
                      options={{ theme: "light" }}
                    />
                  </div>
                ) : null}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting || !TURNSTILE_SITE_KEY}
                >
                  {isSubmitting ? (
                    <Loader2 size={18} className="mr-2 animate-spin" />
                  ) : (
                    <Calendar size={18} className="mr-2" />
                  )}
                  Schedule a Call
                </Button>
              </form>

              <p className="text-sm text-muted-foreground text-center mt-8">
                Prefer to reach us another way?{" "}
                <Link to="/contact" className="text-primary font-medium underline underline-offset-2">
                  Contact us
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
