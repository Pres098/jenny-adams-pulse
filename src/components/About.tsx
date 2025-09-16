import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { User, Play, BookOpen, Trophy, TrendingUp, Users, DollarSign, Star } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Technical Analysis', percentage: 98 },
    { name: 'Risk Management', percentage: 95 },
    { name: 'Market Psychology', percentage: 92 },
    { name: 'Trading Strategies', percentage: 96 },
    { name: 'Mentoring & Teaching', percentage: 94 },
  ];

  const achievements = [
    { icon: TrendingUp, title: '95%+ Win Rate', description: 'Consistently maintained across all signal categories' },
    { icon: Users, title: '3,800+ Students', description: 'Successful traders in our global community' },
    { icon: DollarSign, title: '$2.5M+ Generated', description: 'Total profits generated for our traders' },
    { icon: Star, title: '4.9/5 Rating', description: 'Average satisfaction rating from our traders' },
  ];

  const timeline = [
    { year: '2019', title: 'Started Trading Journey', description: 'Began learning binary options with initial losses and valuable lessons' },
    { year: '2020', title: 'First Profitable Year', description: 'Developed winning strategies and achieved consistent profitability' },
    { year: '2021', title: 'Started Teaching', description: 'Began sharing knowledge with small group of aspiring traders' },
    { year: '2022', title: 'Community Growth', description: 'Expanded to 1,000+ active members with proven track record' },
    { year: '2023', title: 'Major Milestone', description: 'Reached $1M+ in total profits generated for students' },
    { year: '2024', title: 'Current Success', description: 'Leading 3,800+ traders with 95%+ win rate and $2.5M+ generated' },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-accent mb-4">
            <User className="w-5 h-5" />
            <span className="text-sm font-medium">Professional Binary Options Trader</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet <span className="text-accent">Jenny Adams</span>
            <br />Your Trading Mentor
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From losing my first $500 to generating over $2.5 million in profits for my students, 
            my journey in binary options trading has been one of persistence, learning, and ultimately, success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Story */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, I help traders worldwide achieve financial freedom through proven strategies, 
                disciplined risk management, and continuous education. My mission is simple: transform 
                your trading from gambling to a profitable business.
              </p>
              
              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="text-center">
                  <div className="text-sm text-primary mb-2">Current Month Profit:</div>
                  <div className="text-3xl font-bold text-success">+$47,230</div>
                </div>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-accent text-accent-foreground hover:shadow-glow">
                <Play className="w-5 h-5 mr-2" />
                Watch My Story
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <BookOpen className="w-5 h-5 mr-2" />
                Free Trading Guide
              </Button>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Trading Statistics</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-accent font-bold">{skill.percentage}%</span>
                    </div>
                    <Progress value={skill.percentage} className="h-2 bg-muted" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Proven Track Record</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 text-center trading-card hover:shadow-glow transition-all duration-300">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Trading Journey Timeline */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">My Trading Journey</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timeline.map((milestone, index) => (
              <Card key={index} className="p-6 trading-card hover:shadow-soft transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-sm">{milestone.year}</span>
                  </div>
                  <Trophy className="w-5 h-5 text-accent" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{milestone.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;