
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 overflow-hidden bg-gradient-to-b from-secondary/50 to-background"
    >
      <div className="absolute top-32 right-10 w-64 h-64 bg-accent/30 rounded-full blur-3xl -z-10 animate-float"></div>
      <div className="absolute bottom-32 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={heroRef} className="animate-on-scroll">
            <span className="inline-block text-sm font-medium py-1 px-3 rounded-full bg-primary/10 text-primary mb-4">
              Program Tahfidz Online #1
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-tahfidz-800 leading-tight mb-4">
              Menghafal Al-Qur'an <span className="text-primary">Lebih Mudah</span> & Menyenangkan
            </h1>
            <p className="text-lg text-tahfidz-600 mb-8 max-w-lg">
              Program tahfidz online dengan metode modern, dibimbing langsung oleh para hafidz dan hafidzah terbaik. Belajar kapan saja, di mana saja.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="button-hover bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg">
                Mulai Sekarang
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="button-hover border-tahfidz-300 text-tahfidz-700 hover:bg-tahfidz-50 px-6 py-6 text-lg rounded-lg">
                <PlayCircle className="mr-2 h-5 w-5" />
                Tonton Video
              </Button>
            </div>
            
            <div className="mt-10 flex items-center space-x-6">
              <div className="flex -space-x-2">
                <img 
                  src="https://i.pravatar.cc/100?img=1" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover" 
                  alt="User" 
                />
                <img 
                  src="https://i.pravatar.cc/100?img=2" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover" 
                  alt="User" 
                />
                <img 
                  src="https://i.pravatar.cc/100?img=3" 
                  className="w-10 h-10 rounded-full border-2 border-white object-cover" 
                  alt="User" 
                />
              </div>
              <div>
                <div className="text-tahfidz-800 font-semibold">1,200+ Penghafal</div>
                <div className="text-tahfidz-500 text-sm">Telah bergabung</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-3 scale-105"></div>
            <div className="glass relative rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1609599006475-712929680a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Tahfidz Online" 
                className="w-full h-full object-cover object-center" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tahfidz-900/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-lg font-medium mb-1">Program Unggulan</div>
                <h3 className="text-2xl font-serif font-bold mb-2">Tahfidz 30 Juz</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-sm opacity-90">Daftar Sekarang</span>
                  <ChevronRight className="h-4 w-4 opacity-90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
