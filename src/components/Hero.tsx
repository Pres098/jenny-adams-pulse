import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Play, Star, Users, DollarSign, TrendingUp, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You'll receive free signals shortly.",
        duration: 3000,
      });
      setEmail('');
    }
  };

  const stats = [
    { icon: TrendingUp, value: '95%+', label: 'Win Rate' },
    { icon: Users, value: '3.8K+', label: 'Subscribers' },
    { icon: DollarSign, value: '$50K+', label: 'Monthly Profits' },
  ];

  const todayPerformance = [
    { pair: 'EUR/USD', profit: '+$2,450' },
    { pair: 'GBP/JPY', profit: '+$1,875' },
    { pair: 'USD/CAD', profit: '+$3,120' },
  ];

  return (
    <section id="home" className="min-h-screen bg-gradient-hero relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left Column - Main Content */}
          <div className="space-y-8 animate-slide-up">
            {/* Trust Badge */}
            <div className="flex items-center space-x-2 text-accent">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium">Trusted by 3,800+ Traders</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Master Binary Trading with{' '}
                <span className="text-accent">Jenny's Signals</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                Join thousands of successful traders earning consistent profits with my proven 
                binary options strategies. Get real-time signals, expert analysis, and step-by-step guidance.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-accent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Email Signup */}
            <Card className="p-6 trading-card">
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email for free signals"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-background/50 border-border/30"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-gradient-accent text-accent-foreground hover:shadow-glow font-semibold"
                  >
                    Get Free Signals
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  No spam. Get instant access to profitable trading signals.
                </p>
              </form>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-accent text-accent-foreground hover:shadow-glow font-semibold"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Free Signals
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                Join Telegram
              </Button>
            </div>
          </div>

          {/* Right Column - Performance Card */}
          <div className="lg:pl-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="trading-card p-6 animate-float">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Today's Performance</h3>
              </div>
              
              <div className="space-y-4">
                {todayPerformance.map((trade, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-border/20 last:border-b-0">
                    <span className="text-muted-foreground font-medium">{trade.pair}</span>
                    <span className="text-success font-bold text-lg">{trade.profit}</span>
                  </div>
                ))}
                
                <div className="flex justify-between items-center pt-4 mt-4 border-t border-accent/20">
                  <span className="text-foreground font-semibold">Total Today:</span>
                  <span className="text-2xl font-bold text-success">+$7,445</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-success-bg rounded-lg">
                <div className="text-center">
                  <div className="text-sm text-success-foreground/80 mb-1">Live Win Rate</div>
                  <div className="text-3xl font-bold text-success">95.7%</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;