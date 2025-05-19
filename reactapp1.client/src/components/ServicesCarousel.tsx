
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const serviceItems = [
  {
    title: "Strategic Consulting",
    description: "Expert guidance to help you define and achieve your business goals.",
    icon: "📊",
  },
  {
    title: "Digital Transformation",
    description: "Modernize your business with cutting-edge digital solutions.",
    icon: "🚀",
  },
  {
    title: "Process Optimization",
    description: "Streamline your operations for maximum efficiency and productivity.",
    icon: "⚙️",
  },
  {
    title: "Data Analytics",
    description: "Turn your data into actionable insights for better decision-making.",
    icon: "📈",
  },
  {
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure for your business needs.",
    icon: "☁️",
  },
];

const ServicesCarousel = () => {
  return (
    <Carousel className="w-full max-w-5xl mx-auto">
      <CarouselContent>
        {serviceItems.map((service, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="h-full">
                <CardContent className="flex flex-col justify-between h-full p-6">
                  <div>
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                  {/* Removed the "Learn More" button as requested */}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="bg-primary text-primary-foreground hover:bg-primary/90 left-0 -translate-x-1/2" />
      <CarouselNext className="bg-primary text-primary-foreground hover:bg-primary/90 right-0 translate-x-1/2" />
    </Carousel>
  );
};

export default ServicesCarousel;
