import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, MapPin, Phone, Mail, MessageCircle, Award, Users, Zap, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import ahmadImanuddin from "../images/ahmad-imanuddin.jpg";
import zaidan from "../images/zaidan.jpg";
import excellentLogo from "../images/excellent.png";
import proxmoxLogo from "../images/proxmox.png";
import trainingSession from "../images/training-session.jpg";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-2 py-1 flex items-center justify-between">
          <div className="flex items-center gap-4">
          <img
            src={excellentLogo}
            alt="Excellent"
            className="h-30 w-auto object-contain"
          />

          <img
            src={proxmoxLogo}
            alt="Proxmox"
            className="h-7 w-auto object-contain"
          />
        </div>
          <nav className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-700 hover:text-[#00D9FF] transition-colors font-medium">About</a>
            <a href="#benefits" className="text-gray-700 hover:text-[#FF6B35] transition-colors font-medium">Benefits</a>
            <a href="#trainers" className="text-gray-700 hover:text-[#00FF88] transition-colors font-medium">Trainers</a>
            <a href="#contact" className="text-gray-700 hover:text-[#0F3A7D] transition-colors font-medium">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F3A7D] via-[#1A4D9E] to-[#0F3A7D] min-h-screen flex items-center pb-32">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D9FF] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0s" }}></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-[#00FF88] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>

        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 animate-fade-in">
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 hover:border-[#00D9FF]/50 transition-all">
                <span className="text-sm font-semibold text-[#00D9FF]">✨ Proxmox VE Training</span>
              </div>
              <h1 className="heading-display text-white leading-tight text-5xl md:text-6xl font-black">
                High Availability & Efficient Infrastructure Solution
              </h1>
              <p className="text-lg text-gray-100 leading-relaxed max-w-xl font-light">
                Master Proxmox VE virtualization platform dengan hands-on training dari Certified Experts di PT Excellent Infotama Kreasindo.
              </p>
              <div className="flex gap-4 pt-6">
                <Button size="lg" className="bg-[#00D9FF] text-[#0F3A7D] hover:bg-white font-bold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                  Daftar Sekarang <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold backdrop-blur-sm">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </div>
            <div className="relative h-96 md:h-full animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D9FF] to-[#FF6B35] rounded-3xl blur-2xl opacity-30"></div>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663553572073/bKhfGp3EaE9B6EKtMAzAnQ/hero-proxmox-datacenter-3kvPLayCP7mbj9u9pbLTUi.webp"
                alt="Data Center Infrastructure"
                className="w-full h-full object-cover rounded-3xl shadow-2xl border-2 border-white/20 hover:border-[#00D9FF]/50 transition-all"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F3A7D] via-transparent to-transparent rounded-3xl opacity-30"></div>
            </div>
          </div>
        </div>

        {/* Wavy divider */}
        <svg className="absolute bottom-0 w-full h-32 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </section>

      {/* About Proxmox Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D9FF]/10 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D9FF] to-[#FF6B35] rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663553572073/bKhfGp3EaE9B6EKtMAzAnQ/proxmox-virtualization-concept-TqxzfXxCFFU2MMgbkTQb8k.webp"
                alt="Virtualization Concept"
                className="w-full rounded-3xl shadow-2xl border-2 border-gray-200 group-hover:border-[#00D9FF]/50 transition-all"
              />
            </div>
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-12 bg-gradient-to-b from-[#00D9FF] to-[#FF6B35] rounded-full"></div>
                  <h2 className="heading-lg text-[#0F3A7D] text-4xl font-black">Apa itu Proxmox VE?</h2>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg font-light">
                Proxmox VE adalah platform untuk menjalankan Virtual Machine (VM). Proxmox dapat menjalankan dua teknologi virtualisasi, Kernel based Virtual Machine (KVM) dan Linux Container (LXC). Proxmox VE adalah Baremetal Hypervisor, dapat diinstal langsung pada hardware fisik tanpa memerlukan sistem operasi tambahan.
              </p>
              <div className="pt-4 space-y-4">
                <div className="flex gap-4 p-4 bg-gradient-to-r from-[#00D9FF]/10 to-transparent rounded-2xl border border-[#00D9FF]/20 hover:border-[#00D9FF]/50 transition-all">
                  <div className="w-12 h-12 rounded-full bg-[#00D9FF]/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-[#00D9FF]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Teknologi Terdepan</h3>
                    <p className="text-gray-600 text-sm">KVM dan LXC untuk virtualisasi optimal</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 bg-gradient-to-r from-[#FF6B35]/10 to-transparent rounded-2xl border border-[#FF6B35]/20 hover:border-[#FF6B35]/50 transition-all">
                  <div className="w-12 h-12 rounded-full bg-[#FF6B35]/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-[#FF6B35]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Baremetal Hypervisor</h3>
                    <p className="text-gray-600 text-sm">Instalasi langsung tanpa OS tambahan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Training Section */}
      <section className="py-24 bg-gradient-to-b from-[#E8F0F8] to-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00FF88]/10 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="heading-lg text-[#0F3A7D] mb-6 text-4xl font-black">Mengapa Anda Harus Mengikuti Training Ini?</h2>
            <p className="text-gray-700 text-lg font-light">Program training Proxmox ini ditujukan bagi praktisi IT yang ingin meningkatkan kemampuan dalam pengelolaan infrastruktur server dan virtualisasi.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, color: "#00D9FF", title: "Pembelajaran Interaktif", desc: "Didukung praktik langsung agar materi lebih mudah dipahami dan langsung bisa diterapkan." },
              { icon: Zap, color: "#FF6B35", title: "Materi Menyeluruh", desc: "Mencakup instalasi, konfigurasi, hingga pengelolaan sistem secara lengkap." },
              { icon: Award, color: "#00FF88", title: "Bimbingan Ahli", desc: "Didampingi instruktur berpengalaman yang siap membantu selama proses belajar." }
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 bg-white p-8 rounded-3xl group">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all group-hover:scale-110" style={{ backgroundColor: `${item.color}20` }}>
                  <item.icon className="w-8 h-8" style={{ color: item.color }} />
                </div>
                <h3 className="text-xl font-bold text-[#0F3A7D] mb-3">{item.title}</h3>
                <p className="text-gray-700 font-light">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Excellent Section */}
      <section className="py-14 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#0F3A7D] via-[#1A4D9E] to-[#0F3A7D] rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D9FF]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6">
                <h2 className="heading-lg text-white mb-4 text-4xl font-black">Mengapa Harus Training Proxmox di Excellent?</h2>
                <p className="text-gray-100 leading-relaxed text-lg font-light">
                  Excellent merupakan partner Proxmox level <span className="font-bold bg-gradient-to-r from-[#00D9FF] to-[#FF6B35] bg-clip-text text-transparent" style={{color: '#ffffff'}}>Gold Partner</span> dengan pengalaman lebih dari 15 tahun di bidang infrastruktur IT. Didukung oleh engineer tersertifikasi dan berpengalaman, training disusun secara praktis dan aplikatif sesuai kebutuhan dunia kerja.
                </p>
                <p className="text-gray-100 leading-relaxed text-lg font-light">
                  Materi tidak hanya teori, tetapi fokus pada implementasi nyata seperti virtualisasi, backup, dan manajemen infrastruktur agar peserta siap langsung diterapkan di lingkungan kerja.
                </p>
              </div>
              <div className="flex justify-center relative group">
                <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30 group-hover:opacity-30 transition-opacity"></div>
                <img 
                  src={trainingSession}
                  alt="Training Session"
                  className="w-full max-w-xl rounded-3xl shadow-2xl border-2 border-white/20 group-hover:border-[#00D9FF]/50 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-4 bg-gradient-to-b from-white to-[#F8FAFB] relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-[#0F3A7D] mb-4 text-4xl font-black">Benefits</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00D9FF] to-[#FF6B35] rounded-full mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              "Mampu melakukan instalasi dan konfigurasi Proxmox",
              "Mengelola dan membangun sistem virtualisasi terpusat",
              "Memahami teknik troubleshooting untuk mengatasi kendala",
              "Mengoperasikan dan mengoptimalkan fitur Proxmox secara efektif"
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-[#00D9FF] hover:shadow-lg transition-all hover:-translate-y-1 group">
                <CheckCircle2 className="w-6 h-6 text-[#00FF88] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <p className="text-gray-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Syllabus Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Facilities */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-10 bg-gradient-to-b from-[#00D9FF] to-transparent rounded-full"></div>
                <h3 className="heading-md text-[#0F3A7D] text-3xl font-black">Fasilitas</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Buku Materi Training",
                  "Sertifikat Resmi",
                  "Lunch & Coffee Break",
                  "Akses Internet",
                  "Kaos Eksklusif Training",
                  "Konsultasi Teknis dengan Trainer",
                  "Notebook dan alat tulis",
                  "Hands-on Lab Praktik Langsung"
                ].map((facility, idx) => (
                  <div key={idx} className="flex gap-3 bg-gradient-to-br from-[#00D9FF]/10 to-transparent p-4 rounded-2xl border border-[#00D9FF]/20 hover:border-[#00D9FF]/50 transition-all hover:shadow-md">
                    <div className="w-5 h-5 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <p className="text-gray-700 text-sm font-medium">{facility}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Syllabus */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-10 bg-gradient-to-b from-[#FF6B35] to-transparent rounded-full"></div>
                <h3 className="heading-md text-[#0F3A7D] text-3xl font-black">Silabus</h3>
              </div>
              <div className="space-y-3">
                {[
                  "Instalasi & Manajemen Standalone",
                  "Konsep dasar KVM dan LXC",
                  "Instalasi & Akses Web Interface Baremetal Proxmox VE",
                  "Implementasi VM & Container",
                  "Optimasi & Tips Praktis",
                  "Proxmox VE Clustering",
                  "Manajemen Shared Storage",
                  "Live Migration & High Availability",
                  "Backup, Restore & Keamanan"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4 bg-gradient-to-r from-[#E8F0F8] to-transparent rounded-2xl border-l-4 border-[#00D9FF] hover:shadow-md transition-all hover:translate-x-1">
                    <span className="text-[#0F3A7D] font-bold text-sm flex-shrink-0 w-6 text-center bg-[#00D9FF]/20 rounded-full h-6 flex items-center justify-center">{idx + 1}</span>
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Details Section */}
      <section className="py-14 bg-gradient-to-b from-[#E8F0F8] to-white relative">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#00FF88]/10 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto px-4">
          <h2 className="heading-lg text-[#0F3A7D] text-center mb-16 text-4xl font-black">Pelaksanaan Training</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {[
              { icon: Clock, color: "#00D9FF", title: "Hari & Tanggal", desc: "Sabtu, 20 Juni 2026 – Minggu, 21 Juni 2026" },
              { icon: Clock, color: "#FF6B35", title: "Waktu Pelaksanaan", desc: "09.00 s.d. 15.00 WIB" },
              { icon: MapPin, color: "#00FF88", title: "Lokasi", desc: "PT. Excellent Infotama Kreasindo, Ruko Premier Serenity Blok J12, Jl. KH. Agus Salim No. 40E, Bekasi Jaya, Bekasi Timur, Bekasi 17112, Jawa Barat, Indonesia" }
            ].map((item, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all bg-white p-8 rounded-3xl text-center group">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${item.color}20` }}>
                  <item.icon className="w-8 h-8" style={{ color: item.color }} />
                </div>
                <h3 className="font-bold text-[#0F3A7D] mb-3 text-lg">{item.title}</h3>
                <p className="text-gray-700 text-sm font-light">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-14 bg-white relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto px-2">
          <h2 className="heading-lg text-[#0F3A7D] text-center mb-16 text-4xl font-black">Trainer Berpengalaman</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              { 
                name: "Ahmad Imanudin", 
                title: (<>
                Lead Engineer Excellent
                <br />
                Certified Proxmox Technical Professional
              </>),
                image: ahmadImanuddin
              },
              { 
                name: "Muhammad Zaidan", 
                title: "Certified Proxmox Technical Professional",
                image: zaidan
              }
            ].map((trainer, idx) => (
              <div key={idx} className="text-center group">
                <div className="mb-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00D9FF] to-[#FF6B35] rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity scale-110"></div>
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 shadow-lg group-hover:shadow-2xl transition-all group-hover:scale-105" style={{ borderColor: idx === 0 ? "#00D9FF" : "#FF6B35" }}>
                    <img 
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#0F3A7D] mb-2">{trainer.name}</h3>
                <p className="text-gray-700 font-light">{trainer.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0F3A7D] via-[#1A4D9E] to-[#0F3A7D] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D9FF] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="heading-lg text-white mb-4 text-4xl font-black">Biaya Training</h2>
          <div className="flex items-end justify-center gap-2 mb-8">
            <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-[#00D9FF] via-[#00FF88] to-[#FF6B35] bg-clip-text text-transparent">
              Rp3.250.000,-
            </div>

            <p className="text-gray-100 text-2xl mb-2">/orang</p>
          </div>
          
          <h3 className="text-3xl font-black mb-6 mt-12">Mulai Sekarang!</h3>
          <p className="text-gray-100 text-lg mb-12 max-w-2xl mx-auto font-light">
            Hubungi tim kami terkait layanan Proxmox VE. Dapatkan solusi virtualisasi terbaik untuk infrastruktur IT Anda.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center mb-3">
            <Button size="lg" className="bg-[#00D9FF] text-[#0F3A7D] hover:bg-white font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
              Daftar Sekarang <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg backdrop-blur-sm">
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto px-4">
          <h2 className="heading-lg text-[#0F3A7D] text-center mb-16 text-4xl font-black">Hubungi Kami</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Mail, color: "#00D9FF", title: "Email", value: "sales@excellent.co.id", link: "mailto:sales@excellent.co.id" },
              { icon: Phone, color: "#FF6B35", title: "Telepon", value: "021 8267 8811", link: "tel:+62218267881" },
              { icon: MessageCircle, color: "#00FF88", title: "WhatsApp", value: "0813 1730 0101", link: "https://wa.me/6281317300101" }
            ].map((contact, idx) => (
              <a key={idx} href={contact.link} className="flex flex-col items-center text-center p-8 bg-gradient-to-br from-white to-[#F8FAFB] rounded-3xl hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-gray-200 hover:border-gray-300 group">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform" style={{ backgroundColor: `${contact.color}20` }}>
                  <contact.icon className="w-8 h-8" style={{ color: contact.color }} />
                </div>
                <h3 className="font-bold text-[#0F3A7D] mb-2 text-lg">{contact.title}</h3>
                <p className="text-gray-700 font-medium">{contact.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#0F3A7D] to-[#1A4D9E] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#footer-grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold mb-4 text-lg">PT Excellent Infotama Kreasindo</h4>
              <p className="text-gray-300 text-sm font-light">Proxmox VE Gold Partner dengan pengalaman lebih dari 15 tahun di bidang infrastruktur IT.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-2 text-gray-300 text-sm font-light">
                <li><a href="#about" className="hover:text-[#00D9FF] transition-colors">About</a></li>
                <li><a href="#benefits" className="hover:text-[#00D9FF] transition-colors">Benefits</a></li>
                <li><a href="#trainers" className="hover:text-[#00D9FF] transition-colors">Trainers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Contact</h4>
              <ul className="space-y-2 text-gray-300 text-sm font-light">
                <li>Email: sales@excellent.co.id</li>
                <li>Phone: 021 8267 8811</li>
                <li>WhatsApp: 0813 1730 0101</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Location</h4>
              <p className="text-gray-300 text-sm font-light">Ruko Premier Serenity Blok J12, Bekasi Jaya, Bekasi Timur, Bekasi 17112, Jawa Barat, Indonesia</p>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center text-gray-300 text-sm font-light">
            <p>&copy; 2026 PT Excellent Infotama Kreasindo. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* CSS for animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
