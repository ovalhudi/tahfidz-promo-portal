
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Award } from 'lucide-react';

const Teachers = () => {
  const teachersRef = useRef<HTMLDivElement>(null);
  
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
    
    const elements = document.querySelectorAll('.teacher-card');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const teachers = [
    {
      id: 1,
      name: "Ustadz Ahmad Fathoni, Lc.",
      role: "Pengajar Tahfidz 30 Juz",
      image: "https://i.pravatar.cc/300?img=60",
      credentials: "Lulusan Al-Azhar University, Hafidz 30 Juz",
      specialty: "Metode Menghafal Cepat & Mudah",
      students: 230
    },
    {
      id: 2,
      name: "Ustadzah Siti Maryam, M.Pd.I.",
      role: "Pengajar Tahsin & Tahfidz",
      image: "https://i.pravatar.cc/300?img=32",
      credentials: "Master Pendidikan Islam, Hafidzah 30 Juz",
      specialty: "Tahsin & Tajwid",
      students: 175
    },
    {
      id: 3,
      name: "Ustadz Zainuddin, S.Pd.I.",
      role: "Pengajar Tahfidz Juz 30",
      image: "https://i.pravatar.cc/300?img=65",
      credentials: "Sarjana Pendidikan Islam, Hafidz 30 Juz",
      specialty: "Metode Talaqqi",
      students: 200
    },
    {
      id: 4,
      name: "Ustadzah Khadijah Nur, S.Q.",
      role: "Pengajar Tahfidz Anak",
      image: "https://i.pravatar.cc/300?img=25",
      credentials: "Sarjana Ilmu Al-Qur'an, Hafidzah 30 Juz",
      specialty: "Pengajaran Anak-Anak",
      students: 150
    }
  ];

  return (
    <section id="teachers" className="py-20 bg-secondary">
      <div className="container mx-auto px-4" ref={teachersRef}>
        <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
          <span className="inline-block text-sm font-medium py-1 px-3 rounded-full bg-primary/10 text-primary mb-4">
            Pengajar Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-tahfidz-800 mb-4">
            Para Pengajar Berpengalaman
          </h2>
          <p className="text-tahfidz-600">
            Belajar langsung dari para Hafidz dan Hafidzah dengan pengalaman mengajar dan sanad keilmuan yang terpercaya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <Card 
              key={teacher.id} 
              className="teacher-card overflow-hidden border-tahfidz-200 card-hover animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-serif font-semibold text-tahfidz-800 mb-1">{teacher.name}</h3>
                <p className="text-primary text-sm mb-3">{teacher.role}</p>
                
                <div className="flex items-start space-x-2 mb-2">
                  <Award className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-tahfidz-600">{teacher.credentials}</span>
                </div>
                
                <div className="flex items-start space-x-2 mb-4">
                  <BookOpen className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-tahfidz-600">{teacher.specialty}</span>
                </div>
                
                <div className="pt-3 border-t border-tahfidz-200">
                  <span className="text-sm text-tahfidz-500">{teacher.students}+ siswa dibimbing</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
