import { AnimatedTestimonials } from "./AnimatedTestimonial";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://i.pinimg.com/736x/09/7b/00/097b00813f63441c5ade7ddf1ad74f4d.jpg",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://i.pinimg.com/736x/b0/1f/02/b01f0251d1c1c99c88a5d42d47e0306b.jpg",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://i.pinimg.com/736x/a4/51/69/a4516986869ec620763d784b47dd76d8.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://i.pinimg.com/736x/51/25/30/5125308d0b86b9dca64acd982d6ecd7d.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://i.pinimg.com/736x/ee/47/ea/ee47eabce22a75ceb8bc69bf809eb13d.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://i.pinimg.com/736x/3a/04/da/3a04dadb0ca5c4c2070cc72c3d3ab8d0.jpg",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}
