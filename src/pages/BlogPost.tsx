
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';

const BlogPost = () => {
  const { slug } = useParams();

  const blogPosts = {
    'transforming-education-rural-south-sudan': {
      title: 'Transforming Education in Rural South Sudan: A Community-Led Approach',
      content: `
        <p class="text-lg mb-6">Education is the cornerstone of development, yet in rural South Sudan, access to quality education remains a significant challenge. At CODA, we believe that sustainable change comes from within communities themselves.</p>
        
        <h2 class="text-2xl font-bold mb-4">The Challenge</h2>
        <p class="mb-6">Many communities in South Sudan lack basic educational infrastructure. Schools are often far from villages, teachers are undertrained, and learning materials are scarce. Children, especially girls, face additional barriers including early marriage, household responsibilities, and cultural attitudes toward education.</p>
        
        <h2 class="text-2xl font-bold mb-4">Our Community-Led Approach</h2>
        <p class="mb-6">CODA's education programs are built on the principle that communities know their needs best. We work directly with local leaders, parents, and educators to develop solutions that are culturally appropriate and sustainable.</p>
        
        <h3 class="text-xl font-semibold mb-3">Key Components:</h3>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Community school construction using local materials and labor</li>
          <li>Teacher training programs conducted in local languages</li>
          <li>Parent education sessions to promote girls' education</li>
          <li>School feeding programs to address hunger and improve attendance</li>
          <li>Adult literacy classes for parents</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4">Impact Stories</h2>
        <p class="mb-6">In Jonglei State, we partnered with the Anyuak community to establish three schools serving over 800 children. Previously, children had to walk 15 kilometers to the nearest school. Now, attendance has increased by 300%, with girls' enrollment rising by 400%.</p>
        
        <p class="mb-6">Mary Akech, a local teacher trained through our program, shares: "Before CODA's training, I struggled to engage my students. Now I use local stories and examples that connect with their experiences. Learning has become joyful."</p>
        
        <h2 class="text-2xl font-bold mb-4">Challenges and Solutions</h2>
        <p class="mb-6">Weather-related disruptions during the rainy season affect school attendance. We've addressed this by establishing temporary learning centers in higher ground areas and providing waterproof learning materials.</p>
        
        <h2 class="text-2xl font-bold mb-4">Looking Forward</h2>
        <p class="mb-6">Our goal is to establish 50 community schools by 2025, reaching 10,000 children across South Sudan. We're also developing a digital learning platform that can function offline to support remote learning during disruptions.</p>
        
        <p class="mb-6">Education transforms not just individuals but entire communities. When children learn, they become agents of change, carrying new ideas and skills back to their families and communities.</p>
      `,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
      author: 'Dr. Sarah Mabior',
      date: 'December 15, 2024',
      category: 'Education',
      readTime: '8 min read'
    },
    'clean-water-changes-everything': {
      title: 'Clean Water Changes Everything: Impact of Our WASH Programs',
      content: `
        <p class="text-lg mb-6">Access to clean water is a basic human right, yet millions in South Sudan lack this fundamental necessity. Our Water, Sanitation, and Hygiene (WASH) programs are transforming communities by providing sustainable water solutions.</p>
        
        <h2 class="text-2xl font-bold mb-4">The Water Crisis in South Sudan</h2>
        <p class="mb-6">Only 41% of South Sudan's population has access to basic water services. In rural areas, this figure drops to just 26%. Women and children often walk hours daily to collect water from unsafe sources, limiting time for education and economic activities.</p>
        
        <h2 class="text-2xl font-bold mb-4">Our WASH Approach</h2>
        <p class="mb-6">CODA's WASH programs focus on three key areas: Water access, Sanitation facilities, and Hygiene education. We believe in creating systems that communities can maintain independently.</p>
        
        <h3 class="text-xl font-semibold mb-3">Water Access Solutions:</h3>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Borehole drilling and rehabilitation</li>
          <li>Solar-powered water pumping systems</li>
          <li>Rainwater harvesting systems</li>
          <li>Community water management training</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Sanitation Improvements:</h3>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Household latrine construction</li>
          <li>School toilet facilities</li>
          <li>Waste management systems</li>
          <li>Menstrual hygiene management</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4">Community Impact</h2>
        <p class="mb-6">In Unity State, our intervention in Mayom County has provided clean water access to 15,000 people across 25 villages. Water-related diseases have decreased by 60%, and school attendance has increased by 40% as children no longer need to spend hours collecting water.</p>
        
        <p class="mb-6">Grace Nyong, a community health worker, reports: "Since the borehole was installed, mothers bring their children for regular check-ups instead of treating water-borne illnesses. We're preventing disease rather than just treating it."</p>
        
        <h2 class="text-2xl font-bold mb-4">Sustainable Solutions</h2>
        <p class="mb-6">All our WASH projects include community ownership components. Local water committees are trained in maintenance, financial management, and conflict resolution. This ensures long-term sustainability beyond our direct involvement.</p>
        
        <h2 class="text-2xl font-bold mb-4">Health and Economic Benefits</h2>
        <p class="mb-6">Clean water access creates ripple effects throughout communities. Women can start small businesses with time previously spent collecting water. Children attend school regularly. Healthcare costs decrease as preventable diseases are eliminated.</p>
        
        <p class="mb-6">Our economic impact studies show that every dollar invested in WASH programming yields $4.30 in economic benefits through improved health, time savings, and increased productivity.</p>
      `,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      author: 'James Garang',
      date: 'December 10, 2024',
      category: 'WASH',
      readTime: '6 min read'
    },
    'building-resilient-food-systems': {
      title: 'Building Resilient Food Systems in Post-Conflict Communities',
      content: `
        <p class="text-lg mb-6">Food insecurity affects 7.76 million people in South Sudan. Our comprehensive food security programs address immediate needs while building long-term resilience through sustainable agriculture and livelihood diversification.</p>
        
        <h2 class="text-2xl font-bold mb-4">Understanding Food Insecurity</h2>
        <p class="mb-6">South Sudan faces complex food security challenges stemming from conflict, climate change, economic instability, and limited infrastructure. Traditional farming practices have been disrupted, and many communities lack access to improved seeds, tools, and technical knowledge.</p>
        
        <h2 class="text-2xl font-bold mb-4">Our Integrated Approach</h2>
        <p class="mb-6">CODA's food security programs combine emergency response with long-term development, ensuring communities can both meet immediate needs and build resilience for the future.</p>
        
        <h3 class="text-xl font-semibold mb-3">Agricultural Development:</h3>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Distribution of drought-resistant seeds</li>
          <li>Farmer field schools and training</li>
          <li>Irrigation system development</li>
          <li>Post-harvest handling and storage</li>
          <li>Climate-smart agriculture techniques</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Livelihood Diversification:</h3>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Livestock vaccination and breeding programs</li>
          <li>Fish farming initiatives</li>
          <li>Beekeeping and honey production</li>
          <li>Small business development</li>
          <li>Village savings and loan associations</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4">Success in Warrap State</h2>
        <p class="mb-6">In Warrap State, our integrated program has reached 12,000 households. Participating farmers have increased their crop yields by an average of 150%. The introduction of drought-resistant sorghum varieties has been particularly successful, providing stable harvests even during dry seasons.</p>
        
        <p class="mb-6">Peter Deng, a farmer from Kuajok, shares: "Before CODA's program, my family struggled to have enough food for six months of the year. Now, we not only feed ourselves year-round but also sell surplus crops in the market."</p>
        
        <h2 class="text-2xl font-bold mb-4">Nutrition and Health Integration</h2>
        <p class="mb-6">Our programs emphasize nutrition education alongside food production. We promote kitchen gardens with nutrient-rich vegetables and train community members on proper nutrition practices, especially for pregnant women and children under five.</p>
        
        <h2 class="text-2xl font-bold mb-4">Climate Resilience</h2>
        <p class="mb-6">Climate change poses significant challenges to food security in South Sudan. Our programs include climate-smart practices such as conservation agriculture, agroforestry, and water conservation techniques that help communities adapt to changing weather patterns.</p>
        
        <p class="mb-6">We also establish community-managed seed banks to preserve local varieties and ensure farmers have access to quality seeds regardless of external disruptions.</p>
        
        <h2 class="text-2xl font-bold mb-4">Looking Ahead</h2>
        <p class="mb-6">Our goal is to reach 50,000 households by 2025, focusing on the most food-insecure communities. We're also developing digital platforms to connect farmers with markets and provide real-time weather and agricultural information.</p>
      `,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1200&q=80',
      author: 'Mary Akech',
      date: 'December 5, 2024',
      category: 'Food Security',
      readTime: '7 min read'
    },
    'healthcare-access-remote-areas': {
      title: 'Healthcare Access in Remote Areas: Overcoming Challenges',
      content: `
        <p class="text-lg mb-6">Healthcare delivery in South Sudan's remote areas requires innovative approaches and dedicated commitment. Our healthcare programs bring essential medical services to the most underserved communities.</p>
        
        <h2 class="text-2xl font-bold mb-4">Healthcare Challenges</h2>
        <p class="mb-6">South Sudan has one of the world's weakest health systems, with only 44% of the population having access to basic healthcare services. In remote areas, the nearest health facility can be days away by foot, and many lack trained medical personnel and essential medicines.</p>
        
        <h2 class="text-2xl font-bold mb-4">Our Healthcare Strategy</h2>
        <p class="mb-6">CODA's healthcare programs focus on bringing services directly to communities while building local capacity for sustainable health improvements.</p>
        
        <h3 class="text-xl font-semibold mb-3">Mobile Health Services:</h3>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Mobile medical clinics reaching remote villages</li>
          <li>Vaccination campaigns for children and livestock</li>
          <li>Maternal health services including prenatal and postnatal care</li>
          <li>Emergency medical referral systems</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Community Health Workers:</h3>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Training local community health workers</li>
          <li>Establishing community health committees</li>
          <li>Health education and disease prevention programs</li>
          <li>Treatment of common illnesses at community level</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4">Maternal and Child Health Focus</h2>
        <p class="mb-6">South Sudan has one of the world's highest maternal mortality rates. Our programs prioritize maternal and child health through skilled birth attendance, family planning services, and nutrition support for pregnant and breastfeeding mothers.</p>
        
        <p class="mb-6">In Central Equatoria, our maternal health program has reduced maternal deaths by 40% in participating communities. We've trained 150 traditional birth attendants and established birthing centers in 20 villages.</p>
        
        <h2 class="text-2xl font-bold mb-4">Disease Prevention and Treatment</h2>
        <p class="mb-6">Our healthcare programs address both communicable and non-communicable diseases. We focus on malaria prevention, tuberculosis treatment, HIV/AIDS awareness, and increasingly, managing diabetes and hypertension in urban areas.</p>
        
        <h3 class="text-xl font-semibold mb-3">Key Interventions:</h3>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Distribution of insecticide-treated bed nets</li>
          <li>Malaria case management training</li>
          <li>TB screening and treatment support</li>
          <li>HIV testing and counseling services</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4">Success Story: Lakes State</h2>
        <p class="mb-6">In Lakes State, our integrated healthcare program serves 25,000 people across 40 villages. We've established 8 health posts staffed by trained community health workers and conduct monthly mobile clinic visits to remote areas.</p>
        
        <p class="mb-6">Dr. Samuel Mayik, our field coordinator, notes: "The impact is remarkable. Child mortality has decreased by 35%, and more women are seeking skilled care during pregnancy and childbirth."</p>
        
        <h2 class="text-2xl font-bold mb-4">Technology and Innovation</h2>
        <p class="mb-6">We leverage technology to overcome geographic barriers. Our telemedicine program connects community health workers with doctors in urban centers, enabling remote consultation and diagnosis for complex cases.</p>
        
        <p class="mb-6">Solar-powered refrigeration units ensure vaccines remain effective even in areas without electricity, while mobile phone-based data collection helps track health indicators and disease outbreaks in real-time.</p>
        
        <h2 class="text-2xl font-bold mb-4">Building Health System Capacity</h2>
        <p class="mb-6">Long-term health improvements require strong health systems. We work with government partners to strengthen health facilities, train healthcare workers, and improve supply chain management for essential medicines.</p>
      `,
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=1200&q=80',
      author: 'Dr. Samuel Mayik',
      date: 'November 28, 2024',
      category: 'Healthcare',
      readTime: '5 min read'
    },
    'empowering-women-community-development': {
      title: 'Empowering Women Through Community Development Programs',
      content: `
        <p class="text-lg mb-6">Women are the backbone of South Sudanese communities, yet they face significant barriers to participation in economic and social activities. Our community development programs prioritize women's empowerment as a pathway to sustainable development.</p>
        
        <h2 class="text-2xl font-bold mb-4">Understanding Gender Barriers</h2>
        <p class="mb-6">Cultural norms, limited access to education, early marriage, and lack of economic opportunities constrain women's participation in community development. Many women lack access to land ownership, credit, and decision-making processes.</p>
        
        <h2 class="text-2xl font-bold mb-4">Our Women's Empowerment Strategy</h2>
        <p class="mb-6">CODA's approach to women's empowerment is holistic, addressing economic, social, and political dimensions while respecting cultural values and working with traditional leaders.</p>
        
        <h3 class="text-xl font-semibold mb-3">Economic Empowerment:</h3>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Village Savings and Loan Associations (VSLAs)</li>
          <li>Skills training in tailoring, hairdressing, and food processing</li>
          <li>Support for women's cooperatives and market groups</li>
          <li>Access to microfinance and business development services</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Social Empowerment:</h3>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Women's leadership training programs</li>
          <li>Adult literacy classes for women</li>
          <li>Gender-based violence prevention and response</li>
          <li>Reproductive health education and services</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4">Success in Upper Nile State</h2>
        <p class="mb-6">In Upper Nile State, our women's empowerment program has reached 5,000 women across 30 communities. We've established 150 VSLAs with a combined savings of over $200,000. Women are using these savings to start businesses, pay school fees, and invest in healthcare.</p>
        
        <p class="mb-6">Grace Nyong, a VSLA member from Malakal, shares: "Through our savings group, I was able to start a small shop. Now I can provide for my children's education and have a voice in family decisions. Other women see my success and want to join our group."</p>
        
        <h2 class="text-2xl font-bold mb-4">Leadership and Decision-Making</h2>
        <p class="mb-6">Our programs actively promote women's participation in community leadership. We provide training on public speaking, project management, and conflict resolution, enabling women to take on leadership roles in community committees and local government structures.</p>
        
        <p class="mb-6">Currently, 40% of our community development committees are led by women, compared to less than 10% before our intervention. These women leaders are driving change in their communities, advocating for girls' education, better healthcare, and improved water services.</p>
        
        <h2 class="text-2xl font-bold mb-4">Addressing Gender-Based Violence</h2>
        <p class="mb-6">Gender-based violence remains a significant challenge in South Sudan. Our programs include GBV prevention through community awareness campaigns, training of traditional leaders, and establishment of safe spaces for women and girls.</p>
        
        <h3 class="text-xl font-semibold mb-3">GBV Prevention Activities:</h3>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Community dialogues on harmful traditional practices</li>
          <li>Training male champions and allies</li>
          <li>Establishing women's protection committees</li>
          <li>Referral systems for GBV survivors</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4">Youth and Women's Programs</h2>
        <p class="mb-6">We specifically target young women and girls through mentorship programs, life skills training, and educational support. Our scholarship program has enabled 200 girls to complete secondary education, with 80% pursuing further studies or starting businesses.</p>
        
        <h2 class="text-2xl font-bold mb-4">Impact on Families and Communities</h2>
        <p class="mb-6">When women are empowered, entire communities benefit. Studies show that women reinvest 90% of their earnings in their families and communities, compared to 35% for men. Our programs are creating positive ripple effects across generations.</p>
        
        <h2 class="text-2xl font-bold mb-4">Sustainable Change</h2>
        <p class="mb-6">True empowerment requires systemic change. We work with traditional leaders, religious organizations, and government institutions to create enabling environments for women's participation and leadership.</p>
        
        <p class="mb-6">Our goal is to create a South Sudan where women and girls have equal opportunities to participate in and benefit from development processes, contributing to more peaceful, prosperous, and equitable communities.</p>
      `,
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80',
      author: 'Grace Nyong',
      date: 'November 22, 2024',
      category: 'Community Development',
      readTime: '6 min read'
    },
    'youth-leadership-future-south-sudan': {
      title: 'Youth Leadership: The Future of South Sudan',
      content: `
        <p class="text-lg mb-6">Young people constitute 72% of South Sudan's population, yet they often lack platforms for meaningful participation in development processes. Our youth programs focus on building leadership capacity and creating opportunities for young people to drive positive change.</p>
        
        <h2 class="text-2xl font-bold mb-4">Youth Challenges and Opportunities</h2>
        <p class="mb-6">South Sudanese youth face unemployment, limited educational opportunities, and marginalization from decision-making processes. However, they also represent tremendous potential for innovation, energy, and positive change.</p>
        
        <h2 class="text-2xl font-bold mb-4">Our Youth Development Strategy</h2>
        <p class="mb-6">CODA's youth programs are designed to develop leadership skills, create economic opportunities, and engage young people as active participants in community development.</p>
        
        <h3 class="text-xl font-semibold mb-3">Leadership Development:</h3>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Youth leadership training and mentorship programs</li>
          <li>Peace-building and conflict resolution skills</li>
          <li>Public speaking and advocacy training</li>
          <li>Project management and organizational skills</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Skills and Employment:</h3>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Vocational training in high-demand skills</li>
          <li>Entrepreneurship development programs</li>
          <li>Technology and digital literacy training</li>
          <li>Job placement and internship opportunities</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4">Youth-Led Initiatives</h2>
        <p class="mb-6">Our most successful programs are those initiated and led by young people themselves. We provide funding, technical support, and mentorship while allowing youth to design and implement their own community development projects.</p>
        
        <p class="mb-6">In Juba, a group of young entrepreneurs we supported has established a waste management cooperative that employs 50 youth while addressing environmental challenges. Their success has inspired similar initiatives in other states.</p>
        
        <h2 class="text-2xl font-bold mb-4">Peace and Reconciliation</h2>
        <p class="mb-6">Young people are often most affected by conflict but can also be powerful agents of peace. Our peace-building programs train young leaders in conflict resolution, inter-community dialogue, and reconciliation processes.</p>
        
        <p class="mb-6">Peter Deng, a youth peace ambassador from Jonglei State, explains: "Our generation didn't choose the conflicts that divided our communities, but we can choose to build bridges. Through CODA's training, I've learned to facilitate dialogue between communities that have been in conflict for years."</p>
        
        <h3 class="text-xl font-semibold mb-3">Peace-building Activities:</h3>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Inter-community sports and cultural exchanges</li>
          <li>Joint development projects between conflicting groups</li>
          <li>Youth peace clubs in schools and communities</li>
          <li>Media and advocacy campaigns for peace</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4">Education and Skills Development</h2>
        <p class="mb-6">Many young people lack formal education due to conflict and poverty. Our programs provide second-chance education, vocational training, and scholarship opportunities to help youth acquire the skills needed for employment and leadership.</p>
        
        <p class="mb-6">Our vocational training centers have graduated 1,200 young people in skills ranging from carpentry and welding to computer programming and digital marketing. The employment rate among graduates is 85%.</p>
        
        <h2 class="text-2xl font-bold mb-4">Technology and Innovation</h2>
        <p class="mb-6">Young South Sudanese are eager to embrace technology and innovation. Our digital literacy programs and innovation hubs provide platforms for young people to develop tech solutions to local challenges.</p>
        
        <p class="mb-6">The Juba Innovation Hub, supported by CODA, has incubated 15 tech startups focusing on solutions for agriculture, healthcare, education, and financial services. These young entrepreneurs are creating jobs while addressing community needs.</p>
        
        <h2 class="text-2xl font-bold mb-4">Cultural Preservation and Arts</h2>
        <p class="mb-6">Our youth programs also emphasize cultural preservation through arts, music, and traditional crafts. Young people are using creative expression to tell their stories, preserve cultural heritage, and promote unity among diverse communities.</p>
        
        <h2 class="text-2xl font-bold mb-4">Future Vision</h2>
        <p class="mb-6">Our vision is a South Sudan where young people are recognized as valuable contributors to development, not just beneficiaries. We're working to create systems that support youth participation in all aspects of society.</p>
        
        <p class="mb-6">By 2025, we aim to train 5,000 young leaders, support 1,000 youth-led enterprises, and establish youth development programs in all 10 states of South Sudan.</p>
        
        <p class="mb-6">The future of South Sudan depends on its young people. By investing in their development today, we're building the foundation for a more prosperous, peaceful, and united nation tomorrow.</p>
      `,
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80',
      author: 'Peter Deng',
      date: 'November 15, 2024',
      category: 'Community Development',
      readTime: '4 min read'
    },
    'partnership-success-collaborating-impact': {
      title: 'Partnership Success: Collaborating for Greater Impact',
      content: `
        <p class="text-lg mb-6">Sustainable development requires collaborative effort. CODA's strategic partnerships with international organizations, government agencies, and local communities are amplifying our impact across South Sudan and creating lasting change.</p>
        
        <h2 class="text-2xl font-bold mb-4">The Power of Partnership</h2>
        <p class="mb-6">No single organization can address the complex development challenges facing South Sudan. Through strategic partnerships, we leverage diverse expertise, resources, and networks to create synergies that benefit communities more effectively than working in isolation.</p>
        
        <h2 class="text-2xl font-bold mb-4">Types of Partnerships</h2>
        <p class="mb-6">CODA engages in various partnership models, each designed to maximize impact while respecting the unique strengths and mandates of our partners.</p>
        
        <h3 class="text-xl font-semibold mb-3">International Development Partners:</h3>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>UN agencies (UNICEF, WFP, WHO, UNDP)</li>
          <li>International NGOs and humanitarian organizations</li>
          <li>Bilateral development agencies</li>
          <li>Faith-based organizations</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-3">Government Partnerships:</h3>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Ministry of Health collaboration on healthcare delivery</li>
          <li>Ministry of Education partnerships on school construction</li>
          <li>Local government coordination on community projects</li>
          <li>Policy dialogue and advocacy initiatives</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4">Partnership Success Stories</h2>
        <p class="mb-6">Our partnership with UNICEF has been particularly impactful in the education sector. Together, we've constructed 25 schools, trained 300 teachers, and provided learning materials to 8,000 children across three states.</p>
        
        <p class="mb-6">John Machar, our Partnership Coordinator, notes: "The UNICEF partnership allowed us to scale our education programs rapidly while maintaining quality. Their technical expertise combined with our community knowledge created programs that are both effective and sustainable."</p>
        
        <h2 class="text-2xl font-bold mb-4">Community-Led Partnerships</h2>
        <p class="mb-6">Our most important partnerships are with the communities we serve. These relationships are built on mutual respect, shared decision-making, and community ownership of development processes.</p>
        
        <h3 class="text-xl font-semibold mb-3">Community Partnership Principles:</h3>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Communities identify their own priorities and needs</li>
          <li>Local knowledge and practices are valued and integrated</li>
          <li>Community members contribute labor, materials, and oversight</li>
          <li>Capacity building ensures long-term sustainability</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4">Private Sector Engagement</h2>
        <p class="mb-6">We're increasingly partnering with private sector organizations to create economic opportunities and leverage business expertise for development outcomes.</p>
        
        <p class="mb-6">Our partnership with a telecommunications company has enabled mobile money services in remote areas, allowing farmers to receive payments for their produce without traveling to urban centers. This has increased incomes by an average of 30% while reducing transaction costs.</p>
        
        <h2 class="text-2xl font-bold mb-4">Academic and Research Partnerships</h2>
        <p class="mb-6">Partnerships with universities and research institutions strengthen our programs through evidence-based approaches and continuous learning. We collaborate with the University of Juba and international universities on research projects that inform our programming.</p>
        
        <h2 class="text-2xl font-bold mb-4">Challenges and Solutions</h2>
        <p class="mb-6">Effective partnerships require ongoing investment in relationship building, clear communication, and alignment of objectives. We've learned that successful partnerships require:</p>
        
        <h3 class="text-xl font-semibold mb-3">Key Success Factors:</h3>
        <ul class="list-disc list-inside mb-6 space-y-2">
          <li>Shared vision and common objectives</li>
          <li>Clear roles and responsibilities</li>
          <li>Regular communication and coordination</li>
          <li>Mutual respect and trust</li>
          <li>Learning and adaptation mechanisms</li>
        </ul>
        
        <h2 class="text-2xl font-bold mb-4">Coordinated Response to Emergencies</h2>
        <p class="mb-6">During the 2023 flooding crisis, our partnership network enabled rapid response and coordination. Within 48 hours, we mobilized resources from five partner organizations to provide emergency assistance to 15,000 affected people.</p>
        
        <p class="mb-6">This coordinated approach prevented duplication of efforts, ensured comprehensive coverage, and maximized the impact of available resources.</p>
        
        <h2 class="text-2xl font-bold mb-4">Building Local Partnerships</h2>
        <p class="mb-6">We prioritize partnerships with South Sudanese organizations, recognizing that local ownership is essential for sustainable development. Our mentorship program supports emerging local NGOs through capacity building, funding, and technical assistance.</p>
        
        <h2 class="text-2xl font-bold mb-4">Future Partnership Vision</h2>
        <p class="mb-6">Looking ahead, we're expanding our partnership network to include more South Sudanese diaspora organizations, regional partnerships with neighboring countries, and innovative partnerships with technology companies.</p>
        
        <p class="mb-6">Our goal is to create a robust ecosystem of partnerships that can address development challenges comprehensively while building local capacity for long-term sustainability.</p>
        
        <p class="mb-6">Through strategic partnerships, we're not just implementing programs – we're building a movement for sustainable development that will outlast any single organization or project.</p>
      `,
      image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=1200&q=80',
      author: 'John Machar',
      date: 'November 8, 2024',
      category: 'Partnerships',
      readTime: '7 min read'
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <Layout>
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Back to Blog */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="text-unicef-blue hover:text-unicef-blue-dark">
            <Link to="/blog" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <span className="bg-unicef-blue text-white px-3 py-1 rounded-full text-sm font-semibold mr-4">
                {post.category}
              </span>
              <span className="text-sm text-gray-500">{post.readTime}</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center text-gray-600 mb-8">
              <User className="h-5 w-5 mr-2" />
              <span className="mr-6">{post.author}</span>
              <Calendar className="h-5 w-5 mr-2" />
              <span>{post.date}</span>
            </div>
            
            <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share and Back Navigation */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex justify-between items-center">
              <Button variant="outline" asChild>
                <Link to="/blog" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
              
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Share this article:</span>
                <div className="flex space-x-2">
                  <Tag className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-500">{post.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
