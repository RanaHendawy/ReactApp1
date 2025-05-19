
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ServicesCarousel from "@/components/ServicesCarousel";

const Index = () => {
  return (
    <Layout>
      <Hero />
      
      {/* Features Section */}
      <div className="py-16 bg-muted/30 dark:bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
              Comprehensive solutions to help your business thrive.
            </p>
          </div>
          
          <div className="mt-12">
            <ServicesCarousel />
          </div>
        </div>
      </div>
      
      {/* About Section */}
      <div className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-4xl">
                About ZFP 
              </h2>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                Founded in 2010, ZFP Inc has been at the forefront of business innovation. 
                Our mission is to empower organizations with strategic solutions that drive 
                sustainable growth and operational excellence.
              </p>
              <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
                With a team of experienced professionals and a client-first approach, 
                we've helped hundreds of businesses across various industries achieve their goals.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden bg-gradient-to-r from-primary/70 to-accent/70">
                <div className="h-full w-full flex items-center justify-center text-white text-opacity-80 text-lg font-medium p-8 text-center">
                  "We believe in creating value through innovation and excellence in everything we do."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
