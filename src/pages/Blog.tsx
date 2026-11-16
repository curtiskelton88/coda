import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const Blog = () => {
  const featuredPost = {
    title: 'Transforming Education in Rural South Sudan: A Community-Led Approach',
    excerpt: 'Discover how CODA is working with local communities to build sustainable education systems that are transforming the lives of children across South Sudan.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    author: 'Dr. Sarah Mabior',
    date: 'December 15, 2024',
    category: 'Education',
    readTime: '8 min read',
    slug: 'transforming-education-rural-south-sudan'
  };

  const blogPosts = [
    {
      title: 'Clean Water Changes Everything: Impact of Our WASH Programs',
      excerpt: 'How access to clean water is transforming health outcomes and empowering communities across South Sudan.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      author: 'James Garang',
      date: 'December 10, 2024',
      category: 'WASH',
      readTime: '6 min read',
      slug: 'clean-water-changes-everything'
    },
    {
      title: 'Building Resilient Food Systems in Post-Conflict Communities',
      excerpt: 'Our comprehensive approach to addressing food insecurity through sustainable agriculture and livelihood programs.',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=600&q=80',
      author: 'Mary Akech',
      date: 'December 5, 2024',
      category: 'Food Security',
      readTime: '7 min read',
      slug: 'building-resilient-food-systems'
    },
    {
      title: 'Healthcare Access in Remote Areas: Overcoming Challenges',
      excerpt: 'The innovative strategies we use to deliver healthcare services to the most remote and underserved communities.',
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=600&q=80',
      author: 'Dr. Samuel Mayik',
      date: 'November 28, 2024',
      category: 'Healthcare',
      readTime: '5 min read',
      slug: 'healthcare-access-remote-areas'
    },
    {
      title: 'Empowering Women Through Community Development Programs',
      excerpt: 'How our community development initiatives are creating opportunities for women to lead and thrive.',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80',
      author: 'Grace Nyong',
      date: 'November 22, 2024',
      category: 'Community Development',
      readTime: '6 min read',
      slug: 'empowering-women-community-development'
    },
    {
      title: 'Youth Leadership: The Future of South Sudan',
      excerpt: 'Investing in young leaders and how they are driving positive change in their communities.',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80',
      author: 'Peter Deng',
      date: 'November 15, 2024',
      category: 'Community Development',
      readTime: '4 min read',
      slug: 'youth-leadership-future-south-sudan'
    },
    {
      title: 'Partnership Success: Collaborating for Greater Impact',
      excerpt: 'How strategic partnerships with international organizations are amplifying our impact across South Sudan.',
      image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=600&q=80',
      author: 'John Machar',
      date: 'November 8, 2024',
      category: 'Partnerships',
      readTime: '7 min read',
      slug: 'partnership-success-collaborating-impact'
    }
  ];

  const categories = ['All', 'Education', 'WASH', 'Healthcare', 'Food Security', 'Community Development', 'Partnerships'];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-unicef-blue to-unicef-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">CODA Blog</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Stories of impact, insights from the field, and updates on our work 
              transforming communities across South Sudan
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Story</h2>
            <Card className="overflow-hidden border-0 shadow-2xl">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-96 lg:h-full">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-600 text-lg mb-6">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <Button className="bg-unicef-blue hover:bg-unicef-blue-dark w-fit" asChild>
                    <Link to={`/blog/${featuredPost.slug}`} className="flex items-center">
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={`${index === 0 ? 'bg-unicef-blue hover:bg-unicef-blue-dark' : 'hover:bg-unicef-blue hover:text-white'}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Stories</h2>
            <p className="text-lg text-gray-600">
              Stay updated with our latest news, impact stories, and insights from the field
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <Link to={`/blog/${post.slug}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-unicef-blue px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-unicef-blue transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <User className="h-4 w-4 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <Button variant="ghost" className="text-unicef-blue hover:text-unicef-blue-dark p-0">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-unicef-blue text-unicef-blue hover:bg-unicef-blue hover:text-white">
              Load More Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-unicef-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Stay Connected</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter to receive the latest stories, updates, and insights 
            from our work across South Sudan directly in your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <Button className="bg-gold hover:bg-gold-dark text-black font-semibold px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
