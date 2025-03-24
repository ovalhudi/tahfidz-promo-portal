
import React, { useEffect, useRef } from 'react';
import { Award, BookOpen, Clock, Globe, User, Video } from 'lucide-react';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    const elements = document.querySelectorAll('.feature-item');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const features = [
    {
      icon: <BookOpen className="h-12 w-12 text-primary p-2 bg-primary/10 rounded-xl" />,
      title: 'Kurikulum Terstruktur',
      description: 'Metode pembelajaran yang disusun oleh para ahli tahfidz dengan pengalaman bertahun-tahun.'
    },
    {
      icon: <User className="h-12 w-12 text-primary p-2 bg-primary/10 rounded-xl" />,
      title: 'Pengajar Berpengalaman',
      description: 'Dibimbing langsung oleh para hafidz dan hafidzah dengan sanad keilmuan yang terpercaya.'
    },
    {
      icon: <Video className="h-12 w-12 text-primary p-2 bg-primary/10 rounded-xl" />,
      title: 'Kelas Virtual Interaktif',
      description: 'Pembelajaran online dengan interaksi langsung antara peserta dan pengajar.'
    },
    {
      icon: <Globe className="h-12 w-12 text-primary p-2 bg-primary/10 rounded-xl" />,
      title: 'Belajar di Mana Saja',
      description: 'Akses materi pembelajaran dan melakukan setoran kapan saja dan di mana saja.'
    },
    {
      icon: <Clock className="h-12 w-12 text-primary p-2 bg-primary/10 rounded-xl" />,
      title: 'Jadwal Fleksibel',
      description: 'Pilih jadwal belajar yang sesuai dengan kesibukan Anda sehari-hari.'
    },
    {
      icon: <Award className="h-12 w-12 text-primary p-2 bg-primary/10 rounded-xl" />,
      title: 'Sertifikat Resmi',
      description: 'Dapatkan sertifikat resmi setelah menyelesaikan program tahfidz.'
    },
  ];

  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="container mx-auto px-4" ref={featuresRef}>
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block text-sm font-medium py-1 px-3 rounded-full bg-primary/10 text-primary mb-4">
            Keunggulan Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-tahfidz-800 mb-4">
            Mengapa Memilih Tahfidz Online?
          </h2>
          <p className="text-tahfidz-600">
            Program tahfidz yang dirancang untuk memudahkan Anda menghafal Al-Qur'an dengan metode 
            yang efektif dan bimbingan intensif dari para pengajar berpengalaman.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-item animate-on-scroll" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-start">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-serif font-semibold text-tahfidz-800 mb-2">{feature.title}</h3>
                <p className="text-tahfidz-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
