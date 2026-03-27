import { useState } from "react";
import { Link } from "react-router";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-muted to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-primary mb-6">Contact Us</h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            We're here to answer your questions and provide support. Reach out to learn more about our
            programs or how you can get involved.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex p-3 bg-primary/10 rounded-lg">
                        <MapPin size={24} className="text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-primary">Address</h3>
                      <p className="text-sm text-foreground/80">
                        123 Aspen Drive
                        <br />
                        Salt Lake City, UT 84101
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex p-3 bg-primary/10 rounded-lg">
                        <Phone size={24} className="text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-primary">Phone</h3>
                      <p className="text-sm text-foreground/80">
                        Main: (801) 555-0100
                        <br />
                        Crisis Line: (801) 555-0200
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex p-3 bg-primary/10 rounded-lg">
                        <Mail size={24} className="text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-primary">Email</h3>
                      <p className="text-sm text-foreground/80">
                        General: info@aspenhouseslc.org
                        <br />
                        Admissions: admissions@aspenhouseslc.org
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex p-3 bg-primary/10 rounded-lg">
                        <Clock size={24} className="text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-primary">Office Hours</h3>
                      <p className="text-sm text-foreground/80">
                        Monday - Friday: 9:00 AM - 5:00 PM
                        <br />
                        24/7 Crisis Support Available
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-primary/10">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="(801) 555-0100"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2 text-foreground">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full min-h-[150px]"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 w-full md:w-auto">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            Quick answers to common questions about our programs and services.
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-primary">
                  How do I apply for the residential program?
                </h3>
                <p className="text-foreground/80">
                  Contact our admissions team at (801) 555-0100 or email admissions@aspenhouseslc.org to
                  schedule an initial consultation. We'll discuss your needs and walk you through the
                  application process.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-primary">Is there a cost for your services?</h3>
                <p className="text-foreground/80">
                  Our residential program is provided at no cost to participants. We're funded through
                  donations, grants, and community support to ensure financial barriers don't prevent women
                  from accessing our services.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-primary">
                  Can I tour the facility before applying?
                </h3>
                <p className="text-foreground/80">
                  Yes! We offer tours by appointment. Please call us to schedule a visit and learn more about
                  our facilities and programs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-primary">
                  How can I support your organization?
                </h3>
                <p className="text-foreground/80">
                  There are many ways to help! You can make a financial donation, volunteer your time, donate
                  items from our wish list, or help spread awareness about our mission. Visit our{" "}
                  <Link to="/get-involved" className="text-primary font-medium underline underline-offset-2 hover:text-primary/80">
                    Get Involved
                  </Link>{" "}
                  page to learn more.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="border-2 border-destructive/30 bg-destructive/5">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold text-destructive mb-4">Need Immediate Help?</h2>
              <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
                If you're in crisis or need immediate assistance, please call our 24/7 crisis line.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-destructive hover:bg-destructive/90">
                  <Phone className="mr-2" size={20} />
                  Crisis Line: (801) 555-0200
                </Button>
                <Button size="lg" variant="outline" className="border-destructive text-destructive hover:bg-destructive hover:text-white">
                  National Hotline: 1-800-799-7233
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
