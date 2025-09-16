import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import { 
  Mail, 
  MessageSquare, 
  Phone, 
  MapPin, 
  Send,
  Clock,
  Users,
  TrendingUp
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      duration: 5000,
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'support@jennytrading.com',
      note: 'Response within 2-4 hours'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Available 24/5',
      note: 'Instant support during market hours'
    },
    {
      icon: Phone,
      title: 'VIP Phone Support',
      description: '+1 (555) 123-4567',
      note: 'Available for VIP members only'
    }
  ];

  const faqs = [
    {
      question: 'How quickly will I see results?',
      answer: 'Most students see positive results within their first week of following our signals and strategies.'
    },
    {
      question: 'What is your win rate?',
      answer: 'We maintain a consistent 95%+ win rate across all our signal categories and trading strategies.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with our services.'
    },
    {
      question: 'Can beginners use your services?',
      answer: 'Absolutely! We have educational resources and support specifically designed for beginner traders.'
    }
  ];

  const stats = [
    { icon: Users, value: '3,800+', label: 'Active Traders' },
    { icon: TrendingUp, value: '95%+', label: 'Win Rate' },
    { icon: Clock, value: '24/5', label: 'Support Available' },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-accent mb-4">
            <MessageSquare className="w-5 h-5" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Start <span className="text-accent">Your Journey?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our services? Want to discuss your trading goals? Let's connect and accelerate your path to trading success.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="flex justify-center mb-16">
          <div className="grid grid-cols-3 gap-8 lg:gap-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-2">
                  <stat.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="text-2xl font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Send Message</h3>
              <p className="text-muted-foreground">
                Fill out the form below and I'll get back to you as soon as possible.
              </p>
            </div>

            <Card className="p-6 trading-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>
                
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-background/50"
                />
                
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-background/50"
                />
                
                <Button type="submit" size="lg" className="w-full bg-gradient-accent text-accent-foreground hover:shadow-glow">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-4 trading-card">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-accent font-medium">{info.description}</p>
                      <p className="text-xs text-muted-foreground">{info.note}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h3>
              <p className="text-muted-foreground">
                Quick answers to common questions about our trading services.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-6 trading-card">
                  <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                </Card>
              ))}
            </div>

            {/* CTA Card */}
            <Card className="p-6 bg-gradient-accent text-accent-foreground">
              <div className="text-center">
                <h4 className="text-xl font-bold mb-2">Ready to Start Trading?</h4>
                <p className="mb-4 opacity-90">Join thousands of successful traders today</p>
                <Button variant="secondary" size="lg" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  Get Started Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;