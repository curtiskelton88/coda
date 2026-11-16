
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Users, Droplets, GraduationCap, Stethoscope, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';

const Index = () => {
  const programs = [
    {
      icon: Heart,
      title: 'Food Security & Livelihoods',
      description: 'Empowering communities with sustainable food production and income generation opportunities.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Droplets,
      title: 'Water, Sanitation & Hygiene',
      description: 'Providing clean water access and promoting hygiene practices for healthier communities.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Building educational infrastructure and programs to empower future generations.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Stethoscope,
      title: 'Healthcare',
      description: 'Delivering essential healthcare services and medical support to underserved communities.',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Home,
      title: 'Community Development',
      description: 'Strengthening communities through capacity building and infrastructure development.',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-unicef-blue via-unicef-blue-dark to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Empowering Communities in 
                <span className="text-gold"> South Sudan</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Community Organization for Development Agency (CODA) is a women-led organization committed to creating 
                sustainable change and improving lives through comprehensive development programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gold hover:bg-gold-dark text-black font-semibold">
                  <Link to="/programs" className="flex items-center">
                    Explore Our Programs
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-unicef-blue">
                  <Link to="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80" 
                alt="Landscape photography of mountain hit by sun rays" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold text-black p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">10,000+</div>
                <div className="text-sm">Lives Impacted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work across five key areas to create lasting change and sustainable development 
              in communities throughout South Sudan.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <program.icon className="h-8 w-8 text-gold" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <Button variant="ghost" className="text-unicef-blue hover:text-unicef-blue-dark p-0">
                    <Link to="/programs" className="flex items-center">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-unicef-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100">Creating measurable change in South Sudan communities</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '10,000+', label: 'People Served' },
              { number: '50+', label: 'Communities Reached' },
              { number: '25+', label: 'Projects Completed' },
              { number: '5', label: 'Years of Service' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gold mb-2">{stat.number}</div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Us in Making a Difference</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Together, we can build stronger, more resilient communities across South Sudan. 
            Your support helps us continue our vital work in education, healthcare, and community development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-unicef-blue hover:bg-unicef-blue-dark">
              <Link to="/partners">Become a Partner</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-black">
              <Link to="/beneficiaries">See Our Impact</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
