import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  BookOpen, 
  Users, 
  MessageCircle, 
  TrendingUp, 
  Shield, 
  Clock, 
  Target,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: 'Live Trading Signals',
      description: 'Real-time binary options signals with entry points, expiry times, and profit targets.',
      features: ['95%+ win rate', 'Real-time alerts', '24/5 market coverage', 'Multi-asset signals'],
      price: '$97/month',
      popular: true,
    },
    {
      icon: BookOpen,
      title: 'Trading Education',
      description: 'Comprehensive courses covering technical analysis, risk management, and psychology.',
      features: ['Video tutorials', 'Strategy guides', 'Market analysis', 'Trading psychology'],
      price: '$197 one-time',
      popular: false,
    },
    {
      icon: Users,
      title: 'VIP Community',
      description: 'Exclusive access to private Telegram group with 24/7 support and advanced signals.',
      features: ['Private community', 'Priority support', 'Advanced signals', 'Weekly webinars'],
      price: '$297/month',
      popular: false,
    },
  ];

  const features = [
    { icon: TrendingUp, title: 'High Win Rate', description: 'Consistently achieve 95%+ success rate' },
    { icon: Shield, title: 'Risk Management', description: 'Advanced strategies to protect capital' },
    { icon: Clock, title: '24/5 Support', description: 'Round-the-clock trading assistance' },
    { icon: Target, title: 'Precise Signals', description: 'Accurate entry and exit points' },
  ];

  const testimonials = [
    {
      name: 'Michael Chen',
      profit: '+$12,450',
      text: 'Jenny\'s signals transformed my trading. Consistent profits every month!',
      timeframe: 'Last 30 days'
    },
    {
      name: 'Sarah Johnson',
      profit: '+$8,920',
      text: 'The education program taught me everything I needed to succeed.',
      timeframe: 'Last 30 days'
    },
    {
      name: 'David Rodriguez',
      profit: '+$15,340',
      text: 'VIP community is worth every penny. Amazing support and signals.',
      timeframe: 'Last 30 days'
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-accent mb-4">
            <Target className="w-5 h-5" />
            <span className="text-sm font-medium">Professional Trading Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose Your <span className="text-accent">Success Path</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From beginner to expert, we have the right service to accelerate your trading journey and maximize your profits.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className={`p-8 trading-card relative ${service.popular ? 'ring-2 ring-accent' : ''}`}>
              {service.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground">
                  Most Popular
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="text-3xl font-bold text-accent">{service.price}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${service.popular 
                  ? 'bg-gradient-accent text-accent-foreground hover:shadow-glow' 
                  : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}
                size="lg"
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Why Choose Our Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Recent Success Stories</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 trading-card">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.timeframe}</p>
                  </div>
                  <div className="text-2xl font-bold text-success">{testimonial.profit}</div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;