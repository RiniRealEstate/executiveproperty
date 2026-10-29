import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  Clock, 
  GraduationCap, 
  Users, 
  Gem, 
  DollarSign, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  Send,
  Building,
  Globe,
  Maximize2,
  X,
  Briefcase,
  Layers,
  ChevronRight
} from 'lucide-react';

interface RecruitmentPageProps {
  onBackToHome: () => void;
}

export const RecruitmentPage: React.FC<RecruitmentPageProps> = ({ onBackToHome }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Surabaya',
    experience: 'Pemula (Fresh Graduate / Belum Berpengalaman)',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  // Success story testimonials from reference image 1
  const successStories = [
    {
      name: 'Atha Ghani',
      role: 'Agent X-Pro',
      quote: 'Closing 1,3M dalam 2 minggu bergabung dan dapat pendapatan 32 juta di bulan pertama.',
      highlight: 'Closing 1,3M & 32 Jt',
      accent: 'border-amber-400/40 bg-amber-950/20',
      image: '/assets/aistudio/photo_2026-10-29_23-55-13_99654608.jpg'
    },
    {
      name: 'Winda',
      role: 'Agent X-Pro',
      quote: 'Saya bisa dapat penghasilan 25 juta dalam 1 bulan bergabung.',
      highlight: 'Penghasilan 25 Jt / Bulan',
      accent: 'border-emerald-400/40 bg-emerald-950/20',
      image: '/assets/aistudio/winda_8c58bc86.jpg'
    },
    {
      name: 'Ditto',
      role: 'Agent X-Pro',
      quote: 'Dalam 2 minggu bergabung, saya sudah terbayang potensi income ratusan juta. Saya pasti menekuni bidang ini dengan X-Pro sebagai tempat saya berlabuh.',
      highlight: 'Potensi Ratusan Juta',
      accent: 'border-yellow-400/40 bg-yellow-950/20',
      image: '/assets/aistudio/ditto_xpro_6938e4c0.jpg'
    }
  ];

  // Benefits from reference image 1
  const benefits = [
    {
      icon: DollarSign,
      title: 'POTENSI INCOME RATUSAN JUTA',
      desc: 'Tanpa batas komisi. Semakin giat Anda melayani klien, semakin melimpah hasil yang Anda peroleh.',
      badge: 'Tanpa Batas'
    },
    {
      icon: TrendingUp,
      title: 'TANPA BATAS PENSIUN',
      desc: 'Semakin berkarya, semakin besar peluang. Jaringan dan reputasi Anda terus bertumbuh seumur hidup.',
      badge: 'Masa Depan Pasti'
    },
    {
      icon: Clock,
      title: 'WAKTU KERJA FLEKSIBEL',
      desc: 'Atur sendiri waktu kerja Anda. Anda adalah penentu prioritas antara karir, keluarga, dan waktu luang.',
      badge: 'Fleksibel & Mandiri'
    },
    {
      icon: GraduationCap,
      title: 'TRAINING & MENTORING LENGKAP',
      desc: 'Didampingi dari nol sampai profesional. Modul komprehensif dari legalitas, negosiasi, hingga digital marketing.',
      badge: 'Full Mentoring'
    },
    {
      icon: Users,
      title: 'BERGABUNG DENGAN TIM PROFESIONAL',
      desc: 'Lingkungan kerja supportif, positif, dan berintegritas tinggi yang saling mendorong menuju kesuksesan.',
      badge: 'Ekosistem Kuat'
    },
    {
      icon: Gem,
      title: 'PELUANG KARIR JANGKA PANJANG',
      desc: 'Bangun aset berharga dan bangun masa depan finansial yang kokoh melalui instrumen properti premium.',
      badge: 'Aset Berkelanjutan'
    }
  ];

  // Activities from reference image 1
  const activities = [
    {
      title: 'Training Rutin',
      desc: 'Pelatihan rutin teknik listing, pitching klien, market insight, dan closing techniques bersama trainer profesional.',
      tag: 'Edukatif'
    },
    {
      title: 'Mentoring Bersama Mentor Berpengalaman',
      desc: 'Pendampingan langsung one-on-one dari Principal dan Top Leader berpengalaman untuk memastikan closing pertama Anda.',
      tag: 'Bimbingan Nyata'
    },
    {
      title: 'Pemasaran Proyek Langsung',
      desc: 'Terjun langsung memasarkan proyek-proyek prestisius bersama developer ternama dengan dukungan sarana promo premium.',
      tag: 'Akses Eksklusif'
    },
    {
      title: 'Team Gathering',
      desc: 'Mempererat tali kekeluargaan dan soliditas tim melalui gathering seru, makan malam, dan perayaan achievement bersama.',
      tag: 'Solid & Hangat'
    }
  ];

  // Steps to join
  const steps = [
    {
      step: '1',
      title: 'Ketik JOIN via DM / WA',
      desc: 'Kirim pesan pendaftaran ke WhatsApp resmi X-Pro di 0851-6862-2208 atau 0822-3483-7411.'
    },
    {
      step: '2',
      title: 'Isi Data Singkat',
      desc: 'Lengkapi formulir singkat pendaftaran agen dan jadwalkan sesi perkenalan bersama tim HR/Leader kami.'
    },
    {
      step: '3',
      title: 'Ikuti Briefing & Training',
      desc: 'Dapatkan materi fundamental, cara promosi, sistem komisi transparan, dan katalog listing properti.'
    },
    {
      step: '4',
      title: 'Mulai Berkarir Bersama X-Pro',
      desc: 'Mulai pasarkan listing, raih closing pertama Anda, dan nikmati penghasilan tanpa batas!'
    }
  ];

  // 5 Core Values from reference
  const values = [
    { title: 'RESPECT', sub: 'Saling Menghargai', desc: 'Menghormati setiap rekan kerja, klien, dan mitra dengan penuh ketulusan.' },
    { title: 'RESPONSIBILITY', sub: 'Bertanggung Jawab', desc: 'Menjunjung amanah dan komitmen dalam setiap proses transaksi properti.' },
    { title: 'RESULT', sub: 'Berorientasi Hasil', desc: 'Fokus pada pencapaian terbaik yang memuaskan pembeli, penjual, dan tim.' },
    { title: 'RELIABLE', sub: 'Dapat Diandalkan', desc: 'Menjadi konsultan properti yang akurat, terpercaya, dan solutif.' },
    { title: 'PROFESSIONAL', sub: 'Bekerja Profesional', desc: 'Menerapkan standar kerja etis, rapi, dan terstruktur sesuai kaidah AREBI.' }
  ];

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const message = encodeURIComponent(
      `Halo Tim Rekrutmen X-Pro Executive Property Surabaya!\n\nSaya ingin mendaftar menjadi agen/member:\n` +
      `• Nama: ${formData.name}\n` +
      `• No. WA/HP: ${formData.phone}\n` +
      `• Kota/Domisili: ${formData.city}\n` +
      `• Pengalaman: ${formData.experience}\n` +
      `• Catatan/Motivasi: ${formData.notes || '-'}\n\n` +
      `Mohon informasi langkah selanjutnya untuk briefing & training. Terima kasih!`
    );
    window.open(`https://wa.me/6285168622208?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0A0D0B] text-white selection:bg-gold selection:text-black">
      {/* Top Banner Navigation */}
      <div className="sticky top-0 z-40 bg-[#0F1410]/90 backdrop-blur-md border-b border-gold/20 py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={onBackToHome}
            className="flex items-center gap-3 text-gold hover:text-white transition-colors group"
          >
            <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-black transition-all">
              <ChevronRight className="w-5 h-5 rotate-180" />
            </div>
            <div className="text-left">
              <span className="text-xs uppercase tracking-widest text-gray-400 block">Kembali ke</span>
              <span className="text-sm font-bold text-white font-serif">Beranda X-Pro</span>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#alasan" className="text-gray-300 hover:text-gold transition-colors">Kenapa X-Pro</a>
            <a href="#testimoni" className="text-gray-300 hover:text-gold transition-colors">Kisah Sukses</a>
            <a href="#poster" className="text-gray-300 hover:text-gold transition-colors">Poster Rekrutmen</a>
            <a href="#benefit" className="text-gray-300 hover:text-gold transition-colors">Benefit</a>
            <a href="#kegiatan" className="text-gray-300 hover:text-gold transition-colors">Kegiatan</a>
            <a href="#cara-gabung" className="text-gray-300 hover:text-gold transition-colors">Cara Bergabung</a>
          </div>

          <a 
            href="#daftar-sekarang"
            className="bg-gold hover:bg-gold-light text-black px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-gold/20"
          >
            Daftar Sekarang
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-[0.2em] mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Karir di Dunia Properti
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.15] mb-6">
            PENUH PELUANG <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-200 to-gold italic font-light">
              DAN MASA DEPAN
            </span>
          </h1>

          <div className="max-w-3xl mx-auto bg-gradient-to-r from-transparent via-gold/10 to-transparent p-1 rounded-2xl mb-8">
            <h2 className="text-2xl md:text-4xl font-serif text-white tracking-wide">
              LET'S JOIN US BERSAMA X-PRO
            </h2>
            <p className="text-gold uppercase tracking-[0.25em] text-xs md:text-sm font-bold mt-2">
              Executive Property Surabaya
            </p>
          </div>

          <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed italic">
            "Wujudkan Karir dan Penghasilan Besar Bersama Kami. Lebih dari sekedar pekerjaan, ini adalah peluang untuk hidup lebih baik."
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#daftar-sekarang"
              className="w-full sm:w-auto bg-gold hover:bg-gold-light text-black px-8 py-4 rounded-full font-black text-base flex items-center justify-center gap-3 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-gold/20"
            >
              <Send className="w-5 h-5" /> Isi Form Pendaftaran
            </a>
            <a 
              href="https://wa.me/6285168622208?text=Halo%20X-Pro%20Surabaya%2C%20saya%20ingin%20bergabung%20menjadi%20agen%20properti." 
              target="_blank" 
              rel="noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1ebd59] text-white px-8 py-4 rounded-full font-black text-base flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-xl"
            >
              <Phone className="w-5 h-5" /> Chat WA: 0851-6862-2208
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-gray-400">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-gold" /> Gratis Pendaftaran</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-gold" /> Tanpa Pengalaman Boleh Daftar</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-gold" /> Modul Training Disediakan</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-gold" /> Komisi Transparan & Cepat Cair</span>
          </div>
        </div>
      </section>

      {/* SECTION: 2 GAMBAR POSTER REKRUTMEN */}
      <section id="poster" className="py-20 px-6 bg-gradient-to-b from-[#0A0D0B] via-[#0E1510] to-[#0A0D0B] border-y border-gold/15">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-gold uppercase tracking-[0.3em] font-bold text-xs block mb-3">
              POSTER REKRUTMEN RESMI
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
              Poster Rekrutmen
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto items-start">
            {/* Poster 1: Join Us Agent */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="relative aspect-[9/16] w-full rounded-3xl overflow-hidden border border-gold/30 shadow-2xl bg-black cursor-pointer group"
              onClick={() => setSelectedImage('/assets/aistudio/join_us_agent_executive_property_085168622208_ea7ce5f1.jpg')}
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage('/assets/aistudio/join_us_agent_executive_property_085168622208_ea7ce5f1.jpg');
                }}
                className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-gold text-white hover:text-black backdrop-blur-md border border-white/20 hover:border-gold transition-all flex items-center justify-center shadow-lg"
                title="Perbesar Gambar"
                aria-label="Perbesar Gambar"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
              <img 
                src="/assets/aistudio/join_us_agent_executive_property_085168622208_ea7ce5f1.jpg" 
                alt="Poster Join Us Agent Executive Property Surabaya" 
                className="w-full h-full object-cover block group-hover:scale-[1.02] transition-transform duration-500"
              />
            </motion.div>

            {/* Poster 2: Recruitment Agent Team (Pink Team - Foto Referensi Terbaru) */}
            <motion.div 
              whileHover={{ y: -6 }}
              className="relative aspect-[9/16] w-full rounded-3xl overflow-hidden border border-gold/30 shadow-2xl bg-black cursor-pointer group"
              onClick={() => setSelectedImage('/assets/aistudio/photo_2026-10-29_23-55-05_a127d277.jpg')}
            >
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage('/assets/aistudio/photo_2026-10-29_23-55-05_a127d277.jpg');
                }}
                className="absolute top-4 right-4 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-gold text-white hover:text-black backdrop-blur-md border border-white/20 hover:border-gold transition-all flex items-center justify-center shadow-lg"
                title="Perbesar Gambar"
                aria-label="Perbesar Gambar"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
              <img 
                src="/assets/aistudio/photo_2026-10-29_23-55-05_a127d277.jpg" 
                alt="Poster Recruitment Agent Executive Property Surabaya" 
                className="w-full h-full object-cover block group-hover:scale-[1.02] transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION: KENAPA HARUS BERGABUNG DENGAN X-PRO? */}
      <section id="alasan" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold uppercase tracking-[0.3em] font-bold text-xs block mb-3">
            PELUANG EMAS
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-4 leading-tight">
            Kenapa Harus Bergabung Dengan X-Pro?
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl font-serif text-yellow-100/90 italic">
            "Lebih Dari Sekedar Pekerjaan, Ini Adalah Peluang Untuk Hidup Lebih Baik"
          </p>
        </div>

        {/* SECTION: TESTIMONI & KISAH SUKSES (Atha Ghani, Winda, Ditto - Gambar 1) */}
        <div id="testimoni" className="mb-24">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">Bukti Nyata Rekan Agen</span>
            <h3 className="text-2xl md:text-3xl font-serif text-white mt-1">Kisah Sukses Nyata Rekan Agen X-Pro</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                className={`p-8 rounded-3xl border ${story.accent} relative flex flex-col justify-between shadow-xl backdrop-blur-sm`}
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-gold/15 border border-gold/30 text-gold text-xs font-bold uppercase tracking-wider mb-6">
                    {story.highlight}
                  </div>
                  <div className="text-5xl font-serif text-gold/30 leading-none mb-4">“</div>
                  <p className="text-gray-200 text-base md:text-lg italic leading-relaxed mb-8">
                    {story.quote}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {story.image ? (
                      <div 
                        className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold shadow-lg shadow-gold/20 shrink-0 bg-black cursor-pointer group/img"
                        onClick={() => setSelectedImage(story.image)}
                        title="Klik untuk melihat foto"
                      >
                        <img 
                          src={story.image} 
                          alt={story.name} 
                          className="w-full h-full object-cover object-top group-hover/img:scale-110 transition-transform"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center text-gold font-serif font-bold text-lg shrink-0">
                        {story.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h4 className="text-lg font-serif text-white font-bold leading-tight">{story.name}</h4>
                      <p className="text-xs text-gold uppercase tracking-wider font-semibold mt-0.5">{story.role}</p>
                    </div>
                  </div>
                  {story.image && (
                    <span className="text-[10px] text-gold/80 font-mono uppercase bg-gold/10 px-2.5 py-1 rounded-full border border-gold/20">
                      AREBI
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION: BENEFIT YANG KAMU DAPATKAN (6 Benefit - Gambar 1) */}
        <div id="benefit" className="mb-24">
          <div className="text-center mb-14">
            <span className="text-gold uppercase tracking-[0.3em] font-bold text-xs block mb-2">BENEFIT</span>
            <h3 className="text-3xl md:text-4xl font-serif text-white">Benefit Yang Kamu Dapatkan</h3>
            <div className="h-1 w-20 bg-gold mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -6 }}
                className="bg-[#111712] border border-gold/20 p-8 rounded-3xl hover:border-gold/60 transition-all shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                      <b.icon className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gold">
                      {b.badge}
                    </span>
                  </div>

                  <h4 className="text-xl font-serif text-white mb-3 group-hover:text-gold transition-colors leading-snug">
                    {b.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION: KEGIATAN KAMI (4 Kegiatan - Gambar 1) */}
        <div id="kegiatan" className="mb-24">
          <div className="text-center mb-14">
            <span className="text-gold uppercase tracking-[0.3em] font-bold text-xs block mb-2">AKTIVITAS & BUDAYA</span>
            <h3 className="text-3xl md:text-4xl font-serif text-white">Kegiatan Kami</h3>
            <p className="text-gray-400 text-sm mt-3 max-w-xl mx-auto">
              Kami tidak membiarkan Anda berjuang sendirian. Komunitas X-Pro aktif mendukung perkembangan setiap agen setiap minggunya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((act, i) => (
              <div 
                key={i}
                className="bg-[#101612] border border-white/10 hover:border-gold/40 p-6 rounded-2xl transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-gold bg-gold/10 px-2.5 py-1 rounded mb-4">
                    {act.tag}
                  </span>
                  <h4 className="text-lg font-serif text-white mb-2">{act.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{act.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-gold text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4" /> Terjadwal & Terstruktur
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: 4 LANGKAH MUDAH BERGABUNG */}
        <div id="cara-gabung" className="mb-24 bg-[#0F1611] border border-gold/20 rounded-3xl p-8 md:p-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-gold uppercase tracking-[0.3em] font-bold text-xs block mb-2">PROSES REKRUTMEN</span>
            <h3 className="text-3xl md:text-4xl font-serif text-white">Langkah Mudah Bergabung</h3>
            <div className="h-1 w-20 bg-gold mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((s, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold to-yellow-600 text-black font-black text-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform">
                  {s.step}
                </div>
                <h4 className="text-lg font-serif text-white font-bold mb-2 group-hover:text-gold transition-colors">
                  {s.title}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: 5 CORE VALUES (Respect, Responsibility, Result, Reliable, Professional) */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <span className="text-gold uppercase tracking-[0.3em] font-bold text-xs block mb-2">NILAI KAMI</span>
            <h3 className="text-2xl md:text-3xl font-serif text-white">5 Pilar Nilai X-Pro</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {values.map((v, i) => (
              <div key={i} className="bg-white/5 border border-white/10 hover:border-gold/30 p-5 rounded-2xl text-center transition-all">
                <h5 className="text-base font-serif text-gold font-bold">{v.title}</h5>
                <p className="text-xs text-white font-medium mt-1 mb-2">{v.sub}</p>
                <p className="text-[11px] text-gray-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION: FORM PENDAFTARAN & KONTAK RESMI */}
        <div id="daftar-sekarang" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Office & Contacts */}
          <div className="lg:col-span-5 space-y-8 bg-[#0F1611] p-8 md:p-10 rounded-3xl border border-gold/20">
            <div>
              <span className="text-gold uppercase tracking-[0.2em] font-bold text-xs block mb-2">HUBUNGI KAMI</span>
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">
                Kantor & Kontak Resmi Rekrutmen
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Kami menyambut Anda untuk berkunjung ke kantor kami atau berkonsultasi secara online melalui WhatsApp.
              </p>
            </div>

            <div className="space-y-6 text-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Kantor X-Pro Executive Property Surabaya</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Jl. Raya Jemursari 76 Blok B-3, Surabaya, Jawa Timur
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Hotline / WhatsApp Rekrutmen</h4>
                  <p className="text-gray-300">
                    <a href="https://wa.me/6285168622208" target="_blank" rel="noreferrer" className="text-gold hover:underline font-bold block">
                      0851-6862-2208 (Rekrutmen Surabaya)
                    </a>
                    <a href="https://wa.me/6282234837411" target="_blank" rel="noreferrer" className="text-gold hover:underline font-bold block mt-1">
                      +62 822-3483-7411 (Hotline Utama)
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">Website & Media Sosial</h4>
                  <p className="text-gray-400">
                    Website: <a href="https://www.executiveproperti.com" target="_blank" rel="noreferrer" className="text-gold hover:underline">www.executiveproperti.com</a>
                  </p>
                  <p className="text-gray-400 mt-1">
                    Instagram: <a href="https://instagram.com/executiveproperty.surabaya" target="_blank" rel="noreferrer" className="text-gold hover:underline">@executiveproperty.surabaya</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <a 
                href="https://wa.me/6285168622208?text=Halo%20X-Pro%2C%20saya%20ingin%20jadwalkan%20kunjungan%20ke%20kantor%20Jemursari%20untuk%20tanya%20tentang%20agen." 
                target="_blank"
                rel="noreferrer"
                className="w-full bg-white/10 hover:bg-gold hover:text-black text-white py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 border border-white/15"
              >
                <Phone className="w-4 h-4" /> Buat Janji Konsultasi di Kantor
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Online Registration Form */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#121A14] to-[#0D130F] p-8 md:p-10 rounded-3xl border border-gold/30 shadow-2xl">
            <div className="mb-6">
              <span className="text-gold uppercase tracking-[0.2em] font-bold text-xs block mb-1">DAFTAR ONLINE</span>
              <h3 className="text-2xl md:text-3xl font-serif text-white">Formulir Pendaftaran Agen Baru</h3>
              <p className="text-gray-400 text-xs mt-1">
                Isi data di bawah ini, tim rekrutmen kami akan segera menghubungi Anda melalui WhatsApp untuk briefing training.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-950/40 border border-emerald-500/40 rounded-2xl p-6 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-serif text-white">Terima Kasih!</h4>
                <p className="text-sm text-gray-300">
                  Data Anda telah dialihkan ke WhatsApp Resmi Tim Rekrutmen X-Pro. Jika pesan belum terkirim otomatis, silakan klik tombol di bawah.
                </p>
                <a 
                  href="https://wa.me/6285168622208" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-bold text-sm"
                >
                  <Phone className="w-4 h-4" /> Buka WhatsApp Kembali
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmitForm} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-gray-300 mb-1.5">
                    Nama Lengkap <span className="text-gold">*</span>
                  </label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Contoh: Rian Pratama"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-gray-300 mb-1.5">
                      Nomor WhatsApp / HP <span className="text-gold">*</span>
                    </label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="08123456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-gray-300 mb-1.5">
                      Kota / Domisili <span className="text-gold">*</span>
                    </label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Contoh: Surabaya / Sidoarjo"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-gray-300 mb-1.5">
                    Pengalaman di Bidang Properti / Marketing
                  </label>
                  <select 
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full bg-[#1A241C] border border-white/15 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold text-sm"
                  >
                    <option value="Pemula (Fresh Graduate / Belum Berpengalaman)">Pemula (Fresh Graduate / Baru Memulai)</option>
                    <option value="Pernah Jadi Agen Properti 1-2 Tahun">Pernah Jadi Agen Properti 1-2 Tahun</option>
                    <option value="Agen Properti Berpengalaman > 3 Tahun">Agen Properti Senior &gt; 3 Tahun</option>
                    <option value="Sales / Marketing Bidang Lain (Otomotif, Finansial, Asuransi)">Sales Marketing Bidang Lain (Otomotif/Bank/Asuransi)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-gray-300 mb-1.5">
                    Motivasi / Pertanyaan Tambahan (Opsional)
                  </label>
                  <textarea 
                    rows={3}
                    placeholder="Ceritakan sedikit target penghasilan atau pertanyaan Anda..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors text-sm resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-gold via-yellow-400 to-gold text-black font-black py-4 rounded-xl text-base uppercase tracking-wider hover:opacity-95 transition-all shadow-xl flex items-center justify-center gap-2 transform active:scale-98"
                >
                  <Send className="w-5 h-5" /> Kirim Pendaftaran via WhatsApp
                </button>

                <p className="text-[11px] text-gray-400 text-center">
                  Data Anda dijaga kerahasiaannya dan hanya digunakan untuk proses rekrutmen resmi Executive Property (X-Pro).
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL FOR ZOOMING POSTERS */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:-right-12 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-gold hover:text-black transition-all"
              >
                <X className="w-6 h-6" />
              </button>
              <img 
                src={selectedImage} 
                alt="Enlarged Poster" 
                className="max-h-[82vh] w-auto rounded-2xl shadow-2xl border border-gold/40 object-contain"
              />
              <div className="mt-3 text-center">
                <span className="text-xs text-gold uppercase tracking-widest font-mono">
                  Official Asset • Executive Property Surabaya
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
