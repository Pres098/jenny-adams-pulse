import { TrendingUp, Mail, MessageSquare, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Live Trading Signals',
    'Trading Education',
    'VIP Community',
    'Market Analysis',
    'Risk Management',
  ];

  const legal = [
    'Privacy Policy',
    'Terms of Service',
    'Risk Disclosure',
    'Refund Policy',
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-accent-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">JENNY TRADE</span>
                <span className="text-xs text-accent">SIGNALS & EARNINGS</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              Empowering traders worldwide with proven binary options strategies, 
              expert analysis, and consistent profits since 2019.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="w-4 h-4 text-accent" />
                <span>support@jennytrading.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="w-4 h-4 text-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MessageSquare className="w-4 h-4 text-accent" />
                <span>24/5 Live Support</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Performance */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Legal & Info</h4>
            <ul className="space-y-2 mb-6">
              {legal.map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Performance Stats */}
            <div className="bg-primary-dark rounded-lg p-4">
              <h5 className="font-semibold text-accent mb-2">This Month</h5>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Win Rate:</span>
                  <span className="text-accent font-bold">95.7%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Profit:</span>
                  <span className="text-accent font-bold">+$47,230</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Trades:</span>
                  <span className="text-accent font-bold">142</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              <p>© 2024 Jenny Adams Trading. All rights reserved.</p>
              <p className="mt-1">
                <strong>Risk Warning:</strong> Binary options trading involves substantial risk of loss. 
                Past performance does not guarantee future results.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-primary-foreground/60">Powered by</span>
              <div className="flex items-center space-x-1 text-accent">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">Jenny Trading System</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;