
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    age: '',
    program: '',
    experience: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, gender: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Pendaftaran Terkirim!",
      description: "Tim kami akan segera menghubungi Anda untuk informasi lebih lanjut.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      gender: '',
      age: '',
      program: '',
      experience: '',
      message: ''
    });
  };

  return (
    <section id="register" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium py-1 px-3 rounded-full bg-primary/10 text-primary mb-4">
            Daftar Sekarang
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-tahfidz-800 mb-4">
            Mulai Perjalanan Menghafal Al-Qur&apos;an
          </h2>
          <p className="text-tahfidz-600">
            Isi formulir pendaftaran di bawah ini, dan tim kami akan segera menghubungi Anda 
            untuk informasi lebih lanjut tentang program tahfidz online kami.
          </p>
        </div>

        <Card className="max-w-3xl mx-auto border-tahfidz-200">
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Masukkan nama lengkap" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="alamat@email.com" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor Telepon</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    placeholder="08xxxxxxxxxx" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Jenis Kelamin</Label>
                  <RadioGroup 
                    value={formData.gender} 
                    onValueChange={handleRadioChange}
                    className="flex space-x-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Laki-laki" id="male" />
                      <Label htmlFor="male" className="cursor-pointer">Laki-laki</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Perempuan" id="female" />
                      <Label htmlFor="female" className="cursor-pointer">Perempuan</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="age">Usia</Label>
                  <Select 
                    value={formData.age} 
                    onValueChange={(value) => handleSelectChange('age', value)}
                  >
                    <SelectTrigger id="age">
                      <SelectValue placeholder="Pilih rentang usia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Kurang dari 18 tahun">Kurang dari 18 tahun</SelectItem>
                      <SelectItem value="18-25 tahun">18-25 tahun</SelectItem>
                      <SelectItem value="26-35 tahun">26-35 tahun</SelectItem>
                      <SelectItem value="36-45 tahun">36-45 tahun</SelectItem>
                      <SelectItem value="Lebih dari 45 tahun">Lebih dari 45 tahun</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="program">Program yang Diminati</Label>
                  <Select 
                    value={formData.program} 
                    onValueChange={(value) => handleSelectChange('program', value)}
                  >
                    <SelectTrigger id="program">
                      <SelectValue placeholder="Pilih program" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Tahsin">Tahsin</SelectItem>
                      <SelectItem value="Tahfidz Juz 30">Tahfidz Juz 30</SelectItem>
                      <SelectItem value="Tahfidz 30 Juz">Tahfidz 30 Juz</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="experience">Pengalaman Menghafal</Label>
                  <Select 
                    value={formData.experience} 
                    onValueChange={(value) => handleSelectChange('experience', value)}
                  >
                    <SelectTrigger id="experience">
                      <SelectValue placeholder="Pilih pengalaman" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Belum pernah">Belum pernah</SelectItem>
                      <SelectItem value="Kurang dari 1 juz">Kurang dari 1 juz</SelectItem>
                      <SelectItem value="1-5 juz">1-5 juz</SelectItem>
                      <SelectItem value="6-15 juz">6-15 juz</SelectItem>
                      <SelectItem value="16-29 juz">16-29 juz</SelectItem>
                      <SelectItem value="30 juz">30 juz</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Pesan (Opsional)</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tuliskan pesan atau pertanyaan Anda" 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full button-hover bg-primary hover:bg-primary/90 text-white py-6 text-lg"
              >
                Kirim Pendaftaran
              </Button>
              
              <p className="text-tahfidz-500 text-sm text-center">
                Dengan mendaftar, Anda menyetujui <a href="#" className="text-primary hover:underline">syarat dan ketentuan</a> kami.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Registration;
