
import { Users, Heart, TrendingUp, MapPin, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/Layout';

const Beneficiaries = () => {
  const impactStats = [
    {
      icon: Users,
      number: '14,300+',
      label: 'Total Beneficiaries',
      description: 'Individuals directly impacted by our programs'
    },
    {
      icon: Heart,
      number: '3,200',
      label: 'Families Supported',
      description: 'Households receiving comprehensive support'
    },
    {
      icon: TrendingUp,
      number: '85%',
      label: 'Improvement Rate',
      description: 'Of beneficiaries report improved quality of life'
    },
    {
      icon: MapPin,
      number: '65',
      label: 'Communities Served',
      description: 'Villages and settlements across South Sudan'
    }
  ];

  const successStories = [
    {
      name: 'Nyabol Garang',
      age: 34,
      location: 'Yei River State',
      program: 'Food Security & Livelihoods',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80',
      story: 'Through CODA\'s agricultural training program, I learned modern farming techniques and received seeds and tools. My harvest has increased by 300%, and I can now feed my family and sell surplus crops in the market. I\'ve become a lead farmer in my community, training other women in sustainable agriculture practices.',
      impact: 'Now feeding 8 family members and earning $200 monthly income'
    },
    {
      name: 'John Deng',
      age: 28,
      location: 'Central Equatoria',
      program: 'Education',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      story: 'CODA supported my teacher training and provided me with resources to establish a community school. I now teach 120 children who previously had no access to education. The school has become a center of learning and hope for our entire community.',
      impact: 'Teaching 120 children and training 5 community volunteers'
    },
    {
      name: 'Rebecca Achol',
      age: 45,
      location: 'Lakes State',
      program: 'WASH',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
      story: 'Before CODA drilled our borehole, women and children walked 6 hours daily to fetch water. Now we have clean water just 10 minutes from our homes. My daughters can attend school instead of collecting water, and waterborne diseases have reduced dramatically in our community.',
      impact: 'Serving 800 community members with clean water access'
    }
  ];

  const communityTestimonials = [
    {
      quote: 'CODA doesn\'t just bring aid; they bring hope and empower us to build our own future. They work with us, not for us.',
      author: 'Chief Michael Mayen',
      location: 'Bor Community',
      role: 'Community Leader'
    },
    {
      quote: 'My children are healthy, educated, and have dreams for the future. This transformation wouldn\'t be possible without CODA\'s comprehensive support.',
      author: 'Grace Nyandeng',
      location: 'Juba County',
      role: 'Mother of 4'
    },
    {
      quote: 'The healthcare clinic has saved countless lives in our remote village. We no longer lose mothers during childbirth or children to preventable diseases.',
      author: 'Pastor David Kuol',
      location: 'Upper Nile State',
      role: 'Religious Leader'
    }
  ];

  const programBeneficiaries = [
    {
      program: 'Food Security & Livelihoods',
      beneficiaries: '3,500+',
      description: 'Farmers, pastoralists, and vulnerable households',
      outcomes: [
        '70% increase in crop yields',
        '1,200 people trained in modern agriculture',
        '45 farmer cooperatives established',
        '2,800 people receiving emergency food assistance'
      ]
    },
    {
      program: 'Water, Sanitation & Hygiene',
      beneficiaries: '2,800+',
      description: 'Rural communities lacking water access',
      outcomes: [
        '15 boreholes providing clean water',
        '200 latrines constructed',
        '90% reduction in waterborne diseases',
        '1,500 people trained in hygiene practices'
      ]
    },
    {
      program: 'Education',
      beneficiaries: '2,200+',
      description: 'Children and adults seeking education',
      outcomes: [
        '5 schools constructed and equipped',
        '30 teachers trained and certified',
        '1,800 children enrolled in school',
        '400 adults completed literacy programs'
      ]
    },
    {
      program: 'Healthcare',
      beneficiaries: '1,800+',
      description: 'Remote communities needing medical care',
      outcomes: [
        '3 health clinics operational',
        '25 community health workers trained',
        '95% vaccination coverage achieved',
        '150 safe deliveries conducted'
      ]
    },
    {
      program: 'Community Development',
      beneficiaries: '4,000+',
      description: 'Communities building local capacity',
      outcomes: [
        '20 community organizations supported',
        '150 leaders trained in governance',
        '8 peace dialogues conducted',
        '500 women participating in leadership roles'
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-unicef-blue to-unicef-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Beneficiaries</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Meet the people whose lives have been transformed through CODA's programs 
              and discover the real impact of community-centered development
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Reach & Impact</h2>
            <p className="text-xl text-gray-600">
              Real numbers that represent real lives changed across South Sudan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-unicef-blue to-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-unicef-blue mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Stories of Transformation</h2>
            <p className="text-xl text-gray-600">
              Personal journeys that showcase the power of community-centered development
            </p>
          </div>

          <div className="space-y-16">
            {successStories.map((story, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative">
                    <img 
                      src={story.image} 
                      alt={story.name}
                      className="rounded-lg shadow-xl w-full h-96 object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg p-4">
                      <div className="font-semibold text-gray-900">{story.name}, {story.age}</div>
                      <div className="text-sm text-gray-600">{story.location}</div>
                      <div className="text-sm font-medium text-unicef-blue">{story.program}</div>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="mb-6">
                    <Quote className="h-12 w-12 text-gold mb-4" />
                    <p className="text-lg text-gray-700 italic leading-relaxed">{story.story}</p>
                  </div>
                  
                  <div className="bg-unicef-blue/10 rounded-lg p-6">
                    <h4 className="font-semibold text-unicef-blue mb-2">Impact Achieved:</h4>
                    <p className="text-gray-700">{story.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Beneficiaries Breakdown */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Beneficiaries by Program</h2>
            <p className="text-xl text-gray-600">
              Detailed breakdown of how our programs serve different community needs
            </p>
          </div>

          <div className="space-y-8">
            {programBeneficiaries.map((program, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.program}</h3>
                      <div className="text-3xl font-bold text-unicef-blue mb-2">{program.beneficiaries}</div>
                      <p className="text-gray-600">{program.description}</p>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Outcomes:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {program.outcomes.map((outcome, outcomeIndex) => (
                          <div key={outcomeIndex} className="flex items-start">
                            <div className="w-3 h-3 bg-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Testimonials */}
      <section className="py-20 bg-unicef-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Community Voices</h2>
            <p className="text-xl text-blue-100">
              Hear directly from community leaders and beneficiaries about CODA's impact
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {communityTestimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/10 border-white/20">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-gold mb-4" />
                  <p className="text-lg mb-6 italic">{testimonial.quote}</p>
                  <div className="border-t border-white/20 pt-4">
                    <div className="font-semibold">{testimonial.author}</div>
                    <div className="text-sm text-blue-100">{testimonial.role}</div>
                    <div className="text-sm text-blue-100">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Be Part of Our Impact</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Every beneficiary represents a life changed, a family empowered, and a community strengthened. 
            Join us in expanding our reach and deepening our impact across South Sudan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/partners" className="bg-unicef-blue hover:bg-unicef-blue-dark text-white font-semibold px-8 py-3 rounded-md transition-colors">
              Partner With Us
            </a>
            <a href="/programs" className="border-unicef-blue border-2 text-unicef-blue hover:bg-unicef-blue hover:text-white px-8 py-3 rounded-md transition-colors">
              Learn About Our Programs
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Beneficiaries;
