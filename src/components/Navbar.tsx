
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scrolling for navbar background change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-serif text-tahfidz-800">
          Tahfidz<span className="text-primary">Online</span>
        </a>
        
        {/* Desktop menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-tahfidz-700 hover:text-primary transition-colors">Beranda</a>
          <a href="#program" className="text-tahfidz-700 hover:text-primary transition-colors">Program</a>
          <a href="#features" className="text-tahfidz-700 hover:text-primary transition-colors">Keunggulan</a>
          <a href="#testimonials" className="text-tahfidz-700 hover:text-primary transition-colors">Testimoni</a>
          <a href="#teachers" className="text-tahfidz-700 hover:text-primary transition-colors">Pengajar</a>
          <a href="#pricing" className="text-tahfidz-700 hover:text-primary transition-colors">Biaya</a>
          <Button className="button-hover bg-primary hover:bg-primary/90 text-white">Daftar Sekarang</Button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-tahfidz-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 flex flex-col space-y-4 animate-fade-in">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="text-tahfidz-700 hover:text-primary transition-colors py-2">Beranda</a>
          <a href="#program" onClick={() => setIsMobileMenuOpen(false)} className="text-tahfidz-700 hover:text-primary transition-colors py-2">Program</a>
          <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-tahfidz-700 hover:text-primary transition-colors py-2">Keunggulan</a>
          <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-tahfidz-700 hover:text-primary transition-colors py-2">Testimoni</a>
          <a href="#teachers" onClick={() => setIsMobileMenuOpen(false)} className="text-tahfidz-700 hover:text-primary transition-colors py-2">Pengajar</a>
          <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-tahfidz-700 hover:text-primary transition-colors py-2">Biaya</a>
          <Button className="button-hover bg-primary hover:bg-primary/90 text-white w-full">Daftar Sekarang</Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
