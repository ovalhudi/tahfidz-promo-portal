
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tahfidz-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6">
              Tahfidz<span className="text-primary">Online</span>
            </h3>
            <p className="text-tahfidz-300 mb-6">
              Program tahfidz Al-Qur'an online terbaik dengan metode modern dan bimbingan intensif dari para hafidz dan hafidzah berpengalaman.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors" aria-label="Youtube">
                <Youtube />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Program Kami</h4>
            <ul className="space-y-3">
              <li>
                <a href="#program" className="text-tahfidz-300 hover:text-primary transition-colors">Program Tahsin</a>
              </li>
              <li>
                <a href="#program" className="text-tahfidz-300 hover:text-primary transition-colors">Tahfidz Juz 30</a>
              </li>
              <li>
                <a href="#program" className="text-tahfidz-300 hover:text-primary transition-colors">Tahfidz 30 Juz</a>
              </li>
              <li>
                <a href="#program" className="text-tahfidz-300 hover:text-primary transition-colors">Tahfidz Anak</a>
              </li>
              <li>
                <a href="#program" className="text-tahfidz-300 hover:text-primary transition-colors">Tahfidz Dewasa</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Tautan Penting</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-tahfidz-300 hover:text-primary transition-colors">Keunggulan</a>
              </li>
              <li>
                <a href="#testimonials" className="text-tahfidz-300 hover:text-primary transition-colors">Testimoni</a>
              </li>
              <li>
                <a href="#teachers" className="text-tahfidz-300 hover:text-primary transition-colors">Pengajar</a>
              </li>
              <li>
                <a href="#" className="text-tahfidz-300 hover:text-primary transition-colors">Artikel</a>
              </li>
              <li>
                <a href="#" className="text-tahfidz-300 hover:text-primary transition-colors">Tentang Kami</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                <span className="text-tahfidz-300">+62 812-3456-7890</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                <span className="text-tahfidz-300">info@tahfidzonline.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                <span className="text-tahfidz-300">Jl. Ahmad Yani No. 123, Jakarta Pusat, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-tahfidz-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-tahfidz-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} TahfidzOnline. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-tahfidz-400 hover:text-primary text-sm transition-colors">Kebijakan Privasi</a>
              <a href="#" className="text-tahfidz-400 hover:text-primary text-sm transition-colors">Syarat & Ketentuan</a>
              <a href="#" className="text-tahfidz-400 hover:text-primary text-sm transition-colors">Bantuan</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
