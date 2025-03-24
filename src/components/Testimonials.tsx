
import React, { useState, useRef, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      id: 1,
      content: "Alhamdulillah, berkat program Tahfidz Online, saya bisa menghafal Juz 30 dalam waktu 3 bulan meskipun kesibukan sebagai karyawan. Metodenya sangat efektif dan pengajarnya sabar dalam membimbing.",
      name: "Ahmad Fauzi",
      role: "Karyawan Swasta",
      image: "https://i.pravatar.cc/150?img=11",
      rating: 5
    },
    {
      id: 2,
      content: "Program tahfidz online ini sangat membantu saya yang memiliki jadwal kuliah padat. Saya bisa belajar dan setoran hafalan kapan saja. Pengajarnya juga sangat kompeten dan memotivasi.",
      name: "Siti Aminah",
      role: "Mahasiswi",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5
    },
    {
      id: 3,
      content: "Sebagai ibu rumah tangga, program ini sangat membantu saya untuk bisa menghafal Al-Qur'an sambil tetap mengurus keluarga. Metode pembelajarannya mudah diikuti dan tidak memberatkan.",
      name: "Fatimah Azzahra",
      role: "Ibu Rumah Tangga",
      image: "https://i.pravatar.cc/150?img=9",
      rating: 5
    },
    {
      id: 4,
      content: "Awalnya saya ragu untuk ikut program tahfidz online, tapi ternyata kualitasnya sangat baik. Pengajar sangat telaten membantu memperbaiki bacaan dan hafalan saya. Sangat direkomendasikan!",
      name: "Rizky Pratama",
      role: "Wiraswasta",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 4
    },
    {
      id: 5,
      content: "Alhamdulillah, berhasil menyelesaikan program tahfidz 5 juz dalam waktu 1 tahun. Metode pembelajarannya sistematis dan bimbingan dari ustadz sangat membantu proses menghafal saya.",
      name: "Nur Hidayah",
      role: "Guru",
      image: "https://i.pravatar.cc/150?img=6",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }
    
    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  const visibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (activeIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4" ref={testimonialsRef}>
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block text-sm font-medium py-1 px-3 rounded-full bg-primary/10 text-primary mb-4">
            Testimoni
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-tahfidz-800 mb-4">
            Apa Kata Mereka Tentang Kami
          </h2>
          <p className="text-tahfidz-600">
            Dengar langsung dari para peserta yang telah merasakan manfaat program tahfidz online kami.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto animate-on-scroll">
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full shadow-md p-2 button-hover md:block hidden"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-tahfidz-600" />
          </button>
          
          <div className="flex flex-col md:flex-row gap-6 overflow-hidden p-1">
            {visibleTestimonials().map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className={`card-hover border border-tahfidz-200 p-6 md:p-8 flex-1 ${
                  index === 0 ? 'md:translate-x-0 opacity-100' : 
                  index === 1 ? 'hidden md:block md:translate-x-0 opacity-100' : 
                  'hidden md:block md:translate-x-0 opacity-100'
                } transition-all duration-500`}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-tahfidz-300'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-tahfidz-700 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4 border border-tahfidz-200" 
                  />
                  <div>
                    <h4 className="font-medium text-tahfidz-800">{testimonial.name}</h4>
                    <p className="text-sm text-tahfidz-500">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full shadow-md p-2 button-hover md:block hidden"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-tahfidz-600" />
          </button>
          
          <div className="flex justify-center space-x-2 mt-8 md:hidden">
            <button onClick={prevTestimonial} className="p-2 button-hover">
              <ChevronLeft className="h-5 w-5 text-tahfidz-600" />
            </button>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === activeIndex ? 'bg-primary' : 'bg-tahfidz-300'
                } transition-all duration-300`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
            <button onClick={nextTestimonial} className="p-2 button-hover">
              <ChevronRight className="h-5 w-5 text-tahfidz-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
