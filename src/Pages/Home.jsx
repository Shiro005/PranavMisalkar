import React from 'react'
import ContactForm from '../Components/ContactForm'

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section with Image */}
      <section id="home" className="relative bg-gradient-to-r from-navy-800 to-navy-900 text-white py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-navy-900/70 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/30">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium">Trusted by 1000+ Clients</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your Trusted
              <span className="block text-orange-400 mt-2">Real Estate Partner</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed">
              Premium Plots & Land Deals in Prime Locations with 
              <span className="font-semibold text-orange-300"> Guaranteed Returns</span>
            </p>

            {/* Stats Bar */}
            <div className="flex justify-center items-center space-x-8 mb-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-400">50+</div>
                <div className="text-sm opacity-90">Projects Completed</div>
              </div>
              <div className="w-px h-8 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-400">1000+</div>
                <div className="text-sm opacity-90">Happy Clients</div>
              </div>
              <div className="w-px h-8 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-orange-400">₹50Cr+</div>
                <div className="text-sm opacity-90">Property Value</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="group bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center">
                <span>View Properties</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="group border-2 border-white hover:bg-white hover:text-navy-800 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm flex items-center">
                <span>Get Free Consultation</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
            </div>
            
            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce">
              <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center mx-auto">
                <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-orange-100 rounded-full -translate-y-36 translate-x-36 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy-100 rounded-full translate-y-48 -translate-x-48 opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About PropertyWala</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Building dreams with trust, transparency, and exceptional service since inception
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl font-bold">P</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">Pranav Misalkar</h4>
                    <p className="text-orange-600 font-semibold mb-3">Co-Founder & CEO</p>
                    <p className="text-gray-700 leading-relaxed">
                      With over 15 years in real estate development, Pranav leads our strategic vision 
                      and drives business growth through innovative solutions and market expertise.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-navy-600 to-navy-800 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl font-bold">A</span>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">Anil Misalkar</h4>
                    <p className="text-navy-600 font-semibold mb-3">Co-Founder & COO</p>
                    <p className="text-gray-700 leading-relaxed">
                      Anil ensures seamless project execution and maintains our commitment to 
                      customer satisfaction through operational excellence and quality control.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/90 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Our Mission & Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                At PropertyWala, we're committed to revolutionizing real estate with 
                <span className="font-semibold text-orange-600"> transparency, integrity, and customer-first approach</span>. 
                We specialize in premium land and plot deals that promise exceptional returns and lasting value.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                  <div className="text-3xl font-bold text-orange-600 mb-2">50+</div>
                  <div className="text-gray-700 font-medium">Projects Completed</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-navy-50 to-navy-100 rounded-xl border border-navy-200">
                  <div className="text-3xl font-bold text-navy-600 mb-2">1000+</div>
                  <div className="text-gray-700 font-medium">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                  <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
                  <div className="text-gray-700 font-medium">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-navy-50 to-navy-100 rounded-xl border border-navy-200">
                  <div className="text-3xl font-bold text-navy-600 mb-2">₹50Cr+</div>
                  <div className="text-gray-700 font-medium">Property Value</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Services</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Comprehensive real estate solutions tailored to meet your investment goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                ),
                title: "Land Selling",
                description: "Premium land parcels in developing areas with excellent growth potential and clear titles.",
                borderColor: "border-navy-700",
                bgColor: "bg-navy-100"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                ),
                title: "Plot Development",
                description: "Well-planned residential and commercial plots with all necessary amenities and infrastructure.",
                borderColor: "border-orange-500",
                bgColor: "bg-orange-100"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Real Estate Consulting",
                description: "Expert advice on property investment, market trends, and legal documentation support.",
                borderColor: "border-navy-700",
                bgColor: "bg-navy-100"
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 hover:-translate-y-2 transform"
                style={{ borderTopColor: service.borderColor.replace('border-', '') }}
              >
                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                <button className="mt-6 text-navy-700 font-semibold flex items-center group-hover:text-orange-600 transition-colors duration-300">
                  Learn more
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Case Studies Section */}
      <section id="case-studies" className="py-24 bg-gradient-to-br from-gray-50 to-navy-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Success Stories</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Discover how we've helped clients achieve their real estate dreams
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: "Green Valley Township",
                description: "Developed 50+ residential plots with modern amenities including water supply, electricity, and proper drainage system. Completed within 18 months with 100% customer satisfaction.",
                date: "June 2023",
                stats: "50+ Plots | 18 Months | 100% Satisfaction"
              },
              {
                title: "Commercial Hub Project",
                description: "Successfully developed and sold commercial plots in prime business location, generating 40% ROI for investors within 2 years. Strategic location with excellent connectivity.",
                date: "December 2022",
                stats: "40% ROI | Prime Location | 2 Years"
              }
            ].map((project, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold text-navy-700">{project.title}</h3>
                  <div className="flex items-center text-orange-600 bg-orange-50 px-3 py-1 rounded-full text-sm font-semibold">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Completed
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex items-center text-gray-500 mb-4">
                  <svg className="w-5 h-5 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="font-medium">Completed: {project.date}</span>
                </div>
                
                <div className="bg-gradient-to-r from-navy-50 to-orange-50 p-4 rounded-xl border border-navy-100">
                  <div className="text-sm font-semibold text-navy-700">{project.stats}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Get In Touch</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Ready to start your real estate journey? Contact us today for a free consultation
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-3xl font-bold text-navy-700 mb-8">Let's Connect</h3>
              
              <div className="space-y-8">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    title: "Phone",
                    content: "+91 9022153595",
                    subcontent: "Mon-Sat: 9AM - 7PM"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    title: "Office Address",
                    content: "Manisha Apartment, Infront ST Office",
                    subcontent: "Mangrulpir Road, Kaulkhed, Akola - 444001"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: "Business Hours",
                    content: "Monday - Saturday: 9:00 AM - 7:00 PM",
                    subcontent: "Sunday: Closed"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start space-x-6 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-navy-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h4>
                      <p className="text-gray-700 font-medium">{item.content}</p>
                      <p className="text-gray-600 mt-1">{item.subcontent}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-2xl border border-gray-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home