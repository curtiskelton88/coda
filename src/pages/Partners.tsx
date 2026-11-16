import { Handshake, Globe, Users, Target, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';

const Partners = () => {
  const partnerTypes = [
    {
      icon: Globe,
      title: 'International Organizations',
      description: 'UN agencies, international NGOs, and development organizations',
      partners: ['UNICEF', 'World Food Programme', 'UNHCR', 'Oxfam', 'Save the Children']
    },
    {
      icon: Handshake,
      title: 'Government Partners',
      description: 'National and local government entities',
      partners: ['Ministry of Health', 'Ministry of Education', 'Local Government Bodies', 'County Commissioners']
    },
    {
      icon: Users,
      title: 'Community Partners',
      description: 'Local organizations and community groups',
      partners: ['Community Based Organizations', 'Women Groups', 'Youth Associations', 'Religious Organizations']
    },
    {
      icon: Target,
      title: 'Private Sector',
      description: 'Businesses and corporate partners',
      partners: ['Local Businesses', 'Telecommunications Companies', 'Financial Institutions', 'Agricultural Suppliers']
    }
  ];

  const partnerBenefits = [
    'Collaborative program design and implementation',
    'Shared resources and expertise',
    'Enhanced community reach and impact',
    'Capacity building and knowledge transfer',
    'Sustainable development outcomes',
    'Regular reporting and transparency'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-unicef-blue to-unicef-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Partners</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Building strong partnerships to create lasting change and sustainable development 
              in South Sudan communities
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Philosophy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Partnership Approach</h2>
              <p className="text-lg text-gray-600 mb-6">
                At CODA, we believe that meaningful partnerships are the cornerstone of effective 
                development work. We collaborate with diverse organizations and stakeholders to 
                leverage collective strengths, share resources, and amplify our impact across 
                South Sudan.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our partnership approach is built on mutual respect, transparency, and shared 
                commitment to improving the lives of marginalized communities. We work closely 
                with each partner to ensure that our collaborative efforts are aligned with 
                both community needs and partner objectives.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {partnerBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-unicef-blue mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
                alt="Partnership collaboration" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partner Network</h2>
            <p className="text-xl text-gray-600">
              We work with a diverse range of organizations to maximize our collective impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnerTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-unicef-blue to-gold rounded-full flex items-center justify-center mb-4">
                    <type.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="space-y-2">
                    {type.partners.map((partner, partnerIndex) => (
                      <div key={partnerIndex} className="text-sm text-unicef-blue font-medium">
                        • {partner}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-unicef-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Partnership Success Stories</h2>
            <p className="text-xl text-blue-100">
              Real examples of how partnerships have created lasting impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">UNICEF Water Project</h3>
                <p className="text-blue-100 mb-6">
                  In partnership with UNICEF, we successfully drilled 15 boreholes across 8 communities, 
                  providing clean water access to over 3,000 people. The project included comprehensive 
                  hygiene education and the establishment of water management committees.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gold">15</div>
                    <div className="text-sm text-blue-100">Boreholes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gold">8</div>
                    <div className="text-sm text-blue-100">Communities</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gold">3,000+</div>
                    <div className="text-sm text-blue-100">Beneficiaries</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Education Initiative</h3>
                <p className="text-blue-100 mb-6">
                  Working with Save the Children, we constructed 5 schools and trained 30 teachers, 
                  enabling over 1,200 children to access quality education. The project also 
                  included provision of learning materials and school feeding programs.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gold">5</div>
                    <div className="text-sm text-blue-100">Schools</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gold">30</div>
                    <div className="text-sm text-blue-100">Teachers</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gold">1,200+</div>
                    <div className="text-sm text-blue-100">Students</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Partner with Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join us in creating sustainable change and improving lives across South Sudan. 
            Together, we can achieve more than we ever could alone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@codass.org" className="bg-unicef-blue hover:bg-unicef-blue-dark text-white font-semibold px-8 py-3 rounded-md transition-colors">
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Partners;
