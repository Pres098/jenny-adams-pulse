import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Play, 
  Download, 
  Clock, 
  Users, 
  Star,
  TrendingUp,
  Shield,
  Brain,
  Target,
  CheckCircle
} from 'lucide-react';

const Education = () => {
  const courses = [
    {
      title: 'Binary Options Fundamentals',
      description: 'Master the basics of binary options trading with comprehensive foundation course.',
      duration: '4 hours',
      students: '1,200+',
      rating: 4.9,
      level: 'Beginner',
      price: 'Free',
      features: [
        'Understanding binary options',
        'Platform navigation',
        'Basic strategies',
        'Risk management basics'
      ]
    },
    {
      title: 'Advanced Technical Analysis',
      description: 'Deep dive into chart patterns, indicators, and advanced analysis techniques.',
      duration: '8 hours',
      students: '850+',
      rating: 4.8,
      level: 'Advanced',
      price: '$97',
      features: [
        'Chart pattern recognition',
        'Advanced indicators',
        'Market structure analysis',
        'Entry/exit strategies'
      ]
    },
    {
      title: 'Psychology & Risk Management',
      description: 'Develop the mental discipline and risk management skills of successful traders.',
      duration: '6 hours',
      students: '950+',
      rating: 4.9,
      level: 'Intermediate',
      price: '$67',
      features: [
        'Trading psychology',
        'Emotional control',
        'Position sizing',
        'Risk/reward ratios'
      ]
    }
  ];

  const resources = [
    {
      icon: Download,
      title: 'Free Strategy Guide',
      description: 'Complete PDF guide with my top 5 binary options strategies',
      action: 'Download Now'
    },
    {
      icon: Play,
      title: 'Video Tutorials',
      description: 'Step-by-step video lessons covering all aspects of trading',
      action: 'Watch Videos'
    },
    {
      icon: TrendingUp,
      title: 'Market Analysis',
      description: 'Daily market analysis and trading opportunities',
      action: 'View Analysis'
    },
    {
      icon: Users,
      title: 'Community Access',
      description: 'Join our community of successful binary options traders',
      action: 'Join Community'
    }
  ];

  const skills = [
    { icon: Target, title: 'Precision Trading', description: 'Learn to identify high-probability setups' },
    { icon: Shield, title: 'Risk Control', description: 'Master capital preservation techniques' },
    { icon: Brain, title: 'Market Psychology', description: 'Understand market sentiment and behavior' },
    { icon: TrendingUp, title: 'Profit Optimization', description: 'Maximize returns with proven strategies' },
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-accent mb-4">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm font-medium">Trading Education</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Master Binary Trading <span className="text-accent">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your trading with comprehensive education designed to take you from beginner to consistent profitability.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {courses.map((course, index) => (
            <Card key={index} className="p-6 trading-card">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant={course.level === 'Beginner' ? 'secondary' : course.level === 'Advanced' ? 'destructive' : 'default'}>
                    {course.level}
                  </Badge>
                  <div className="text-2xl font-bold text-accent">{course.price}</div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{course.title}</h3>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current text-accent" />
                    <span>{course.rating}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${course.price === 'Free' 
                  ? 'bg-gradient-accent text-accent-foreground hover:shadow-glow' 
                  : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}
              >
                {course.price === 'Free' ? 'Start Learning' : 'Enroll Now'}
              </Button>
            </Card>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Skills You'll Master</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{skill.title}</h4>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Free Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="p-6 trading-card text-center hover:shadow-glow transition-all duration-300">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <resource.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{resource.title}</h4>
                <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>
                <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  {resource.action}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;