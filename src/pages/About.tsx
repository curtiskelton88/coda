
import { Users, Target, Eye, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Community-Centered',
      description: 'We believe in empowering communities to lead their own development journey.'
    },
    {
      icon: Target,
      title: 'Sustainable Impact',
      description: 'Our programs are designed to create lasting change that benefits future generations.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We maintain open communication and accountability in all our operations.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do.'
    }
  ];

  const team = [
    {
      name: 'James Chuol',
      role: 'Executive Director',
      bio: 'With over 15 years of experience in international development, James leads CODA with passion and dedication.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Simon Mamuch',
      role: 'Program Director',
      bio: 'Simon oversees all program implementation and ensures quality delivery of services to our communities.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Mary Akech',
      role: 'Community Outreach Manager',
      bio: 'Mary works directly with communities to understand their needs and build lasting partnerships.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-unicef-blue to-unicef-blue-dark text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-fade-in">About CODA</h1>
            <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
              Community Organization for Development Agency - Empowering Communities, Transforming Lives
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Our Story</h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-600">
                <p>
                  Founded in 2019, the Community Organization for Development Agency (CODA) was born out of 
                  a deep commitment to address the challenges facing marginalized communities in South Sudan. 
                  Our organization emerged from the recognition that sustainable development can only be achieved 
                  through community-led initiatives and comprehensive support systems.
                </p>
                <p>
                  Since our inception, we have worked tirelessly to bridge the gap between communities and 
                  essential services, focusing on areas where need is greatest and impact can be most meaningful. 
                  Our approach combines local knowledge with international best practices to create solutions 
                  that are both effective and sustainable.
                </p>
                <p>
                  Today, CODA stands as a beacon of hope for thousands of families across South Sudan, 
                  demonstrating that with the right support and partnership, communities can overcome 
                  even the most challenging circumstances.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative group">
              <div className="overflow-hidden rounded-lg shadow-xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80" 
                  alt="South Sudan community" 
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <Card className="group p-6 sm:p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-unicef-blue rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Mission</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  To empower marginalized communities in South Sudan by providing comprehensive 
                  development programs that promote sustainable livelihoods, quality education, 
                  healthcare access, and community resilience.
                </p>
              </CardContent>
            </Card>

            <Card className="group p-6 sm:p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
              <CardContent className="p-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-6 w-6 sm:h-8 sm:w-8 text-black" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Our Vision</h3>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  A South Sudan where every community has the resources, knowledge, and 
                  opportunities needed to achieve sustainable development and improved 
                  quality of life for all its members.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Values</h2>
            <p className="text-lg sm:text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center p-4 sm:p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-unicef-blue to-gold rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                  <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 group-hover:text-unicef-blue transition-colors duration-300">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Leadership Team</h2>
            <p className="text-lg sm:text-xl text-gray-600">Meet the dedicated professionals driving our mission forward</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white">
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2 group-hover:text-unicef-blue transition-colors duration-300">{member.name}</h3>
                  <p className="text-unicef-blue font-medium mb-2 sm:mb-3 text-sm sm:text-base">{member.role}</p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 lg:py-20 bg-unicef-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Ready to Make a Difference?</h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
            Join us in our mission to empower communities and create lasting change across South Sudan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#contact" 
              className="w-full sm:w-auto bg-gold hover:bg-gold-dark text-black font-semibold px-6 sm:px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center"
            >
              Get Involved
            </a>
            <a 
              href="/programs" 
              className="w-full sm:w-auto border-white border-2 hover:bg-white hover:text-unicef-blue px-6 sm:px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105 text-center"
            >
              Learn About Our Programs
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
