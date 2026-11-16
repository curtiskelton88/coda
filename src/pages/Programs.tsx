
import { Heart, Droplets, GraduationCap, Stethoscope, Home, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const Programs = () => {
  const programs = [
    {
      icon: Heart,
      title: 'Food Security and Livelihoods',
      description: 'Comprehensive programs addressing hunger and poverty through sustainable agriculture and income generation.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80',
      details: [
        'Agricultural training and support for smallholder farmers',
        'Seed distribution and farming equipment provision',
        'Livestock management and veterinary services',
        'Market linkage programs and cooperative formation',
        'Nutrition education and cooking demonstrations',
        'Food distribution during emergency situations'
      ],
      impact: {
        beneficiaries: '3,500+',
        communities: '15',
        projects: '8'
      }
    },
    {
      icon: Droplets,
      title: 'Water, Sanitation, and Hygiene (WASH)',
      description: 'Ensuring access to clean water, proper sanitation facilities, and promoting hygiene practices.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      details: [
        'Borehole drilling and water point construction',
        'Latrine construction and maintenance',
        'Hygiene education and behavior change campaigns',
        'Water quality testing and treatment',
        'Formation of water management committees',
        'Emergency water and sanitation response'
      ],
      impact: {
        beneficiaries: '2,800+',
        communities: '12',
        projects: '6'
      }
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Building educational infrastructure and capacity to ensure quality education for all children.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      details: [
        'School construction and rehabilitation',
        'Teacher training and capacity building',
        'Provision of learning materials and textbooks',
        'Adult literacy programs',
        'Scholarship programs for vulnerable children',
        'Early childhood development programs'
      ],
      impact: {
        beneficiaries: '2,200+',
        communities: '10',
        projects: '5'
      }
    },
    {
      icon: Stethoscope,
      title: 'Healthcare',
      description: 'Providing essential healthcare services and building community health capacity.',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80',
      details: [
        'Primary healthcare clinic establishment',
        'Community health worker training',
        'Maternal and child health programs',
        'Vaccination and immunization campaigns',
        'Health education and awareness programs',
        'Emergency medical response and referrals'
      ],
      impact: {
        beneficiaries: '1,800+',
        communities: '8',
        projects: '4'
      }
    },
    {
      icon: Home,
      title: 'Community Development',
      description: 'Strengthening community structures and building local capacity for sustainable development.',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&q=80',
      details: [
        'Community leadership training',
        'Infrastructure development projects',
        'Conflict resolution and peacebuilding',
        'Women and youth empowerment programs',
        'Community-based organization support',
        'Disaster preparedness and response'
      ],
      impact: {
        beneficiaries: '4,000+',
        communities: '20',
        projects: '10'
      }
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-unicef-blue to-unicef-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Programs</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive development programs designed to address the most pressing needs 
              of communities across South Sudan
            </p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transforming Lives Through Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our five core program areas work together to create sustainable change and 
              improve the quality of life for thousands of families across South Sudan.
            </p>
          </div>

          <div className="space-y-20">
            {programs.map((program, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-unicef-blue to-gold rounded-full flex items-center justify-center mr-4">
                      <program.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{program.title}</h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6">{program.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Activities:</h4>
                    <ul className="space-y-2">
                      {program.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <ArrowRight className="h-5 w-5 text-unicef-blue mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-unicef-blue">{program.impact.beneficiaries}</div>
                      <div className="text-sm text-gray-600">Beneficiaries</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gold">{program.impact.communities}</div>
                      <div className="text-sm text-gray-600">Communities</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">{program.impact.projects}</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                  </div>

                  <Button className="bg-unicef-blue hover:bg-unicef-blue-dark">
                    Learn More About This Program
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="rounded-lg shadow-xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Collective Impact</h2>
            <p className="text-xl text-gray-600">
              Together, our programs have created meaningful change across South Sudan
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-unicef-blue mb-2">14,300+</div>
              <div className="text-lg text-gray-600">Total Beneficiaries</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gold mb-2">65</div>
              <div className="text-lg text-gray-600">Communities Served</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900 mb-2">33</div>
              <div className="text-lg text-gray-600">Active Projects</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-unicef-blue mb-2">5</div>
              <div className="text-lg text-gray-600">Program Areas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-unicef-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Support Our Programs</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your partnership can help us expand our reach and deepen our impact in communities 
            across South Sudan. Together, we can build a brighter future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold hover:bg-gold-dark text-black font-semibold">
              Become a Partner
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-unicef-blue">
              View Our Impact Stories
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
