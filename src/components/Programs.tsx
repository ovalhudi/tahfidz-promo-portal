
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ChevronRight } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Program Tahsin",
      description: "Perbaiki bacaan Al-Qur'an dengan tajwid dan makhraj yang benar",
      features: [
        "Belajar dengan metode sistematis",
        "Materi disesuaikan dengan kemampuan",
        "Evaluasi bacaan setiap pekan",
        "Sertifikat bacaan Al-Qur'an"
      ],
      duration: "3 Bulan",
      level: "Pemula - Mahir"
    },
    {
      id: 2,
      title: "Tahfidz Juz 30",
      description: "Program menghafal Juz 30 (Juz 'Amma) dengan pendampingan intensif",
      features: [
        "Metode menghafal cepat dan mudah",
        "Fokus pada surat-surat pendek",
        "Talaqqi bersama pengajar",
        "Muraja'ah terjadwal"
      ],
      duration: "6 Bulan",
      level: "Semua Level"
    },
    {
      id: 3,
      title: "Tahfidz 30 Juz",
      description: "Program menghafal Al-Qur'an 30 juz dengan metode sistematis dan berkelanjutan",
      features: [
        "Target hafalan terukur dan bertahap",
        "Bimbingan intensif dari hafidz/hafidzah",
        "Mutqin (penguatan) hafalan",
        "Sanad keilmuan sampai Rasulullah SAW"
      ],
      duration: "3 Tahun",
      level: "Menengah - Mahir"
    }
  ];

  return (
    <section id="program" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium py-1 px-3 rounded-full bg-primary/10 text-primary mb-4">
            Program Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-tahfidz-800 mb-4">
            Program Tahfidz Unggulan
          </h2>
          <p className="text-tahfidz-600">
            Pilih program yang sesuai dengan kebutuhan dan kemampuan Anda, 
            dengan bimbingan para pengajar berpengalaman dan metode yang telah teruji.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <Card key={program.id} className="card-hover border border-tahfidz-200 overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-serif">{program.title}</CardTitle>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex flex-col space-y-2 mb-6">
                  {program.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
                      <span className="text-tahfidz-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-tahfidz-500">
                  <span>Durasi: {program.duration}</span>
                  <span>Level: {program.level}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full button-hover bg-primary hover:bg-primary/90 text-white">
                  Daftar Program
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
