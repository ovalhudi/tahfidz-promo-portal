
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const Pricing = () => {
  const pricingRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.pricing-card');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const plans = [
    {
      id: 1,
      name: "Tahsin",
      description: "Program dasar untuk memperbaiki bacaan Al-Qur'an",
      price: "299.000",
      per: "bulan",
      features: [
        "4 pertemuan virtual per bulan",
        "Materi tahsin lengkap",
        "Evaluasi bacaan mingguan",
        "Akses rekaman pertemuan",
        "Sertifikat tahsin",
        "Konsultasi via grup WhatsApp"
      ],
      popular: false
    },
    {
      id: 2,
      name: "Tahfidz Juz 30",
      description: "Program menghafal Juz 'Amma dengan pendampingan intensif",
      price: "499.000",
      per: "bulan",
      features: [
        "8 pertemuan virtual per bulan",
        "Metode menghafal mudah",
        "Setoran 2x seminggu",
        "Muraja'ah terjadwal",
        "Materi tajwid praktis",
        "Akses rekaman pertemuan",
        "Bimbingan personal",
        "Sertifikat tahfidz"
      ],
      popular: true
    },
    {
      id: 3,
      name: "Tahfidz 30 Juz",
      description: "Program intensif dan berkelanjutan untuk menghafal Al-Qur'an",
      price: "899.000",
      per: "bulan",
      features: [
        "12 pertemuan virtual per bulan",
        "Setoran 3x seminggu",
        "Bimbingan hafalan intensif",
        "Mutqin (penguatan) hafalan",
        "Muraja'ah terjadwal",
        "Materi tajwid komprehensif",
        "Bimbingan personal",
        "Akses rekaman pertemuan",
        "Sertifikat tahfidz bertahap"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4" ref={pricingRef}>
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block text-sm font-medium py-1 px-3 rounded-full bg-primary/10 text-primary mb-4">
            Biaya Program
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-tahfidz-800 mb-4">
            Investasi untuk Al-Qur'an
          </h2>
          <p className="text-tahfidz-600">
            Pilih program yang sesuai dengan kebutuhan dan kemampuan Anda, dengan berbagai fitur dan layanan yang akan membantu perjalanan Anda menghafal Al-Qur'an.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.id} 
              className={`pricing-card card-hover border-tahfidz-200 relative ${
                plan.popular ? 'md:scale-105 md:shadow-lg border-primary/20' : ''
              } animate-on-scroll`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-sm font-medium py-1 px-4 rounded-full">
                  Terpopuler
                </div>
              )}
              
              <CardHeader className="pb-6 pt-8">
                <CardTitle className="text-xl font-serif text-center">{plan.name}</CardTitle>
                <p className="text-tahfidz-600 text-center text-sm mt-2">{plan.description}</p>
                <div className="text-center mt-4">
                  <span className="text-3xl font-bold text-tahfidz-800">Rp {plan.price}</span>
                  <span className="text-tahfidz-500">/{plan.per}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pb-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span className="text-tahfidz-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className={`w-full button-hover ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90 text-white' 
                      : 'bg-tahfidz-100 text-tahfidz-800 hover:bg-tahfidz-200'
                  }`}
                >
                  Daftar Sekarang
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
