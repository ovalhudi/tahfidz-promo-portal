
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Teachers from '@/components/Teachers';
import Pricing from '@/components/Pricing';
import Registration from '@/components/Registration';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimateOnScroll from '@/components/AnimateOnScroll';

const Index = () => {
  useEffect(() => {
    // Initialize animation observer
    const scrollAnimationScript = () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('visible');
      });
    };

    // For initial animations that should trigger immediately
    const timeout = setTimeout(scrollAnimationScript, 300);
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Programs />
      <Features />
      <Testimonials />
      <Teachers />
      <Pricing />
      <Registration />
      <Footer />
      <ScrollToTop />
      <AnimateOnScroll />
    </div>
  );
};

export default Index;
