/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  Home, 
  TrendingUp, 
  ShieldCheck, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  Users, 
  Handshake, 
  Building2, 
  FileText, 
  Briefcase,
  Star,
  CheckCircle2,
  ArrowUpRight,
  Globe,
  DollarSign
} from 'lucide-react';

// --- Types ---
interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  type: string;
  image: string;
  category: 'Residensial' | 'Komersial' | 'Eksklusif';
}

interface Testimonial {
  name: string;
  text: string;
  role: string;
}

// --- Data ---
const properties: Property[] = [
  { id: '1', title: 'Vidaview Apartments', location: 'Makassar', price: 'Mulai 800jt', type: 'Apartement', category: 'Eksklusif', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000' },
  { id: '2', title: 'CitraLand Celebes', location: 'Makassar', price: 'Mulai 2M', type: 'Rumah Mewah', category: 'Residensial', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000' },
  { id: '3', title: 'Harvest Mansion', location: 'Gowa City', price: 'Mulai 1.2M', type: 'Smart Home', category: 'Residensial', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000' },
  { id: '4', title: 'Summarecon Mutiara', location: 'Makassar', price: 'Mulai 1.5M', type: 'Modern House', category: 'Residensial', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000' }
];

const testimonials: Testimonial[] = [
  { name: 'S**** A****', role: 'Home Buyer', text: 'Pengalaman buat cari properti rumah akhirnya di tahun 2024 ketemu dengan agen properti dari X-Pro yang sangat komunikatif. Senang banget bisa kenal dan kerjasamanya.' },
  { name: 'L*** T*****', role: 'Property Owner', text: 'Dari awal saya titipkan unit ke Executive Property, pelayanannya profesional, cepat, dan rapi. Unit saya berhasil tersewa dalam waktu kurang dari 1 bulan. Sangat recommended!' },
  { name: 'R*** C*********', role: 'Investor', text: 'Pelayanan luar biasa dari pencarian rumah sampai proses akad. Dibantu maksimal, cak cek, sat set, efisien, dan sangat memudahkan investor seperti saya.' }
];

const coreValues = [
  { title: 'LEADERSHIP', desc: 'Memimpin pasar properti dengan visi strategis dan sistem terstruktur.', icon: Award },
  { title: 'INTEGRITY', desc: 'Menjalankan setiap transaksi dengan transparansi, akurasi, dan etika.', icon: ShieldCheck },
  { title: 'STRATEGIC VALUE', desc: 'Menciptakan nilai optimal melalui analisis pasar yang presisi.', icon: TrendingUp },
  { title: 'WIN-WIN SOLUTION', desc: 'Mewujudkan kesepakatan yang adil dan berkelanjutan bagi seluruh pihak.', icon: Handshake },
  { title: 'INNOVATION', desc: 'Mengintegrasikan teknologi dan data marketing untuk pemasaran unggul.', icon: Globe },
  { title: 'NATIONAL NETWORK', desc: 'Membangun jaringan dan kolaborasi strategis di seluruh wilayah Indonesia.', icon: MapPin }
];

import { RecruitmentPage } from './RecruitmentPage';

// --- Components ---

interface NavbarProps {
  currentPage: 'home' | 'recruitment';
  onNavigate: (page: 'home' | 'recruitment', sectionId?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Projects', 'Services', 'About', 'Team', 'Recruitment'];

  const handleItemClick = (e: React.MouseEvent, item: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (item.toLowerCase() === 'recruitment') {
      onNavigate('recruitment');
    } else {
      onNavigate('home', item.toLowerCase());
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled || currentPage === 'recruitment' ? 'bg-[#0F0F0F]/95 backdrop-blur-md py-4 shadow-xl border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-4 text-left group focus:outline-none"
        >
          <div className="relative w-14 h-14 overflow-hidden rounded-xl border border-gold/30 bg-black/40 group-hover:border-gold transition-colors">
            <img 
              src="/logo/logoexecutiveproperty.jpg" 
              alt="Executive Property Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tighter block leading-none text-white group-hover:text-gold transition-colors">X-PRO</span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-400">Executive Property</span>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isRecruitment = item === 'Recruitment';
            const isActive = isRecruitment && currentPage === 'recruitment';
            return (
              <button
                key={item}
                onClick={(e) => handleItemClick(e, item)}
                className={`text-sm font-medium tracking-wide transition-all relative py-1 flex items-center gap-1.5 ${
                  isActive 
                    ? 'text-gold font-bold' 
                    : isRecruitment 
                    ? 'text-yellow-300 hover:text-gold font-semibold' 
                    : 'text-gray-300 hover:text-gold'
                }`}
              >
                {item}
                {isRecruitment && (
                  <span className="px-2 py-0.5 rounded-full text-[9px] uppercase font-bold tracking-wider bg-gold text-black shadow-sm">
                    New
                  </span>
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold rounded-full"></span>
                )}
              </button>
            );
          })}
          <button 
            onClick={() => onNavigate('recruitment')}
            className="bg-gold hover:bg-gold-light text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-gold/20 flex items-center gap-1.5"
          >
            <span>Join as Agent</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <button className="md:hidden text-gold p-2 rounded-lg bg-white/5 border border-white/10" onClick={() => setMobileMenuOpen(true)}>
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-[#0F0F0F] z-[60] flex flex-col p-8 justify-between overflow-y-auto"
          >
            <div>
              <div className="flex justify-between items-center pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <img src="/logo/logoexecutiveproperty.jpg" alt="Logo" className="w-10 h-10 rounded-lg object-cover" />
                  <span className="text-lg font-serif font-bold text-white">X-PRO PROPERTY</span>
                </div>
                <button className="p-2 text-white/80 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                  <X className="w-7 h-7" />
                </button>
              </div>

              <div className="flex flex-col gap-6 mt-8">
                {navItems.map((item) => {
                  const isRecruitment = item === 'Recruitment';
                  return (
                    <button
                      key={item}
                      onClick={(e) => handleItemClick(e, item)}
                      className={`text-2xl font-serif text-left flex items-center justify-between py-2 border-b border-white/5 ${
                        item === 'Recruitment' ? 'text-gold font-bold' : 'text-white hover:text-gold'
                      }`}
                    >
                      <span>{item}</span>
                      {isRecruitment && (
                        <span className="text-xs font-sans uppercase tracking-widest bg-gold text-black px-2.5 py-0.5 rounded-full font-bold">
                          Halaman Baru
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 space-y-4">
              <button 
                onClick={() => { setMobileMenuOpen(false); onNavigate('recruitment'); }}
                className="w-full bg-gold text-black text-center py-4 rounded-xl text-base font-bold shadow-xl flex items-center justify-center gap-2"
              >
                <span>Halaman Rekrutmen Agen</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <a 
                href="https://wa.me/6285168622208" 
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#25D366] text-white text-center py-4 rounded-xl text-base font-bold flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" /> Chat WhatsApp: 0851-6862-2208
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onNavigate }: { onNavigate: (page: 'home' | 'recruitment') => void }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect or just high qual img */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=2000" 
          alt="Premium Cityscape" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gold uppercase tracking-[0.4em] font-bold text-sm mb-6 block">Premium Real Estate Solutions</span>
          <h1 className="text-5xl md:text-8xl text-white font-serif leading-tight mb-8">
            Unlocking <span className="text-gold italic font-light italic">Premium</span> Opportunities
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Mitra strategis Anda dalam investasi properti mewah di seluruh Indonesia. Berdedikasi menghadirkan strategi penjualan profesional, inovatif, dan berorientasi pada nilai.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
             <a href="#projects" className="bg-white text-premium-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-gold hover:text-white transition-all transform hover:scale-105">
               Explore Projects <ChevronRight className="w-4 h-4" />
             </a>
             <button 
               onClick={() => onNavigate('recruitment')} 
               className="bg-gold/20 hover:bg-gold text-white hover:text-black border border-gold/40 px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2 shadow-lg backdrop-blur-sm cursor-pointer"
             >
               <Users className="w-4 h-4" /> Recruitment Agen X-Pro
             </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent"></div>
      </div>
    </section>
  );
};

const AdvancedSearch = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 -mt-16 relative z-30">
      <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl gold-border grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-wider font-bold text-gray-500">Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
            <select className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-gold appearance-none">
              <option>Semua Lokasi</option>
              <option>Makassar</option>
              <option>Bali</option>
              <option>Surabaya</option>
              <option>Jakarta</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-wider font-bold text-gray-500">Property Category</label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
            <select className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-gold appearance-none">
              <option>Semua Kategori</option>
              <option>Residensial</option>
              <option>Komersial</option>
              <option>Eksklusif</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] uppercase tracking-wider font-bold text-gray-500">Price Range</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
            <select className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-gold appearance-none">
              <option>Semua Harga</option>
              <option>Dibawah 500jt</option>
              <option>500jt - 1.5M</option>
              <option>1.5M - 5M</option>
              <option>Diatas 5M</option>
            </select>
          </div>
        </div>

        <button className="bg-premium-black text-white w-full py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gold transition-colors font-bold group shadow-xl">
          <Search className="w-5 h-5 group-hover:scale-110 transition-transform" /> Cari Properti
        </button>
      </div>
    </div>
  );
};

const SectionHeader = ({ title, subtitle, centered = false }: { title: string, subtitle: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <span className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-3 block">{subtitle}</span>
    <h2 className="text-4xl md:text-5xl font-serif text-premium-black">{title}</h2>
    <div className={`h-1 w-20 bg-gold mt-6 ${centered ? 'mx-auto' : ''}`}></div>
  </div>
);

const About = () => (
  <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl"></div>
        <img 
          src="https://images.unsplash.com/photo-1560520663-95d997637f9e?auto=format&fit=crop&q=80&w=1000" 
          alt="Modern Architecture" 
          className="rounded-[40px] shadow-2xl relative z-10 gold-border"
          referrerPolicy="no-referrer"
        />
        <div className="absolute -bottom-12 -right-12 bg-premium-black p-10 rounded-3xl text-white z-20 shadow-2xl hidden md:block">
          <div className="text-5xl font-serif text-gold mb-2">9+ Thn</div>
          <div className="uppercase tracking-widest text-xs font-bold text-gray-400">Pengalaman Pasar Properti</div>
        </div>
      </div>
      
      <div className="space-y-8">
        <SectionHeader subtitle="About Us" title="Pionir Solusi Pemasaran Properti Premium" />
        <p className="text-gray-600 leading-relaxed text-lg">
          <span className="font-bold text-premium-black italic">EXECUTIVE PROPERTY</span> adalah pionir dalam solusi pemasaran properti premium, didedikasikan untuk menghadirkan strategi penjualan yang profesional, inovatif, dan berorientasi pada nilai.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          Kami memahami dinamika pasar properti modern dan berkomitmen untuk menghubungkan investor dengan peluang terbaik, serta properti berkualitas tinggi dengan pembeli yang tepat melalui analisis pasar mendalam.
        </p>
        
        <div className="grid grid-cols-2 gap-8 pt-6">
          <div className="space-y-2">
            <h4 className="text-3xl font-serif text-premium-black">Visi</h4>
            <p className="text-sm text-gray-500 leading-relaxed">Menjadi pemimpin terdepan dalam industri properti Indonesia, dikenal atas profesionalisme dan kepercayaan.</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-3xl font-serif text-premium-black">Misi</h4>
            <p className="text-sm text-gray-500 leading-relaxed">Memberdayakan ekonomi melalui industri properti yang dinamis dan berintegritas tinggi.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    { title: 'Jual, Beli & Sewa', desc: 'Membantu transaksi residensial, komersial hingga eksklusif.', icon: Home },
    { title: 'Penilaian Properti', desc: 'Menilai properti secara akurat untuk menentukan nilai pasar.', icon: FileText },
    { title: 'Take Over KPR', desc: 'Memfasilitasi pengalihan kredit KPR dengan mudah.', icon: ShieldCheck },
    { title: 'Investment Advisory', desc: 'Konsultasi strategi investasi properti yang menguntungkan.', icon: TrendingUp },
    { title: 'Legal & Perizinan', desc: 'Mengurus dokumen hukum secara profesional dan sah.', icon: ShieldCheck },
    { title: 'Inhouse Marketing', desc: 'Mengelola pemasaran proyek properti eksklusif secara strategis.', icon: Building2 },
    { title: 'Market Analysis', desc: 'Analisis mendalam tren properti untuk keputusan cerdas.', icon: Search },
    { title: 'Property Management', desc: 'Pengelolaan aset properti untuk hasil maksimal.', icon: Briefcase }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader centered subtitle="Our Services" title="Layanan Profesional Terintegrasi" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 card-hover group"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 text-gold group-hover:bg-gold group-hover:text-white transition-colors">
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-serif mb-4 group-hover:text-gold transition-colors">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center space-y-10">
          <p className="text-sm uppercase tracking-widest font-bold text-gray-400">Kerjasama dengan Bank Terkemuka</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
             {['BCA', 'BNI', 'BRI', 'BTN', 'MANDIRI', 'PANIN', 'OCBC'].map(bank => (
               <span key={bank} className="text-2xl font-black text-premium-gray tracking-tighter">{bank}</span>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => (
  <section id="projects" className="py-24 px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-16">
        <div>
           <SectionHeader subtitle="Portfolio" title="Proyek Unggulan Kami" />
           <p className="text-gray-500 max-w-xl text-lg">Bekerjasama dengan developer besar nasional hingga lokal untuk memberikan layanan terbaik.</p>
        </div>
        <button className="text-gold flex items-center gap-2 font-bold group">
          View All Projects <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {properties.map((p, i) => (
          <motion.div 
            key={p.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group relative h-[500px] overflow-hidden rounded-[40px] gold-border cursor-pointer"
          >
            <img 
              src={p.image} 
              alt={p.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-10 left-10 p-2">
              <span className="bg-gold text-white text-[10px] uppercase tracking-widest font-bold px-4 py-2 rounded-full mb-4 inline-block">
                {p.category}
              </span>
              <h3 className="text-4xl text-white font-serif mb-2">{p.title}</h3>
              <div className="flex items-center gap-6 text-white/70 text-sm">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-gold" /> {p.location}</span>
                <span className="flex items-center gap-1 font-bold text-gold">{p.price}</span>
              </div>
            </div>
            
            <div className="absolute top-10 right-10 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="text-white w-6 h-6" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Team = () => (
    <section id="team" className="py-24 bg-premium-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-3 block">Expert Team</span>
          <h2 className="text-5xl font-serif mb-6">Mitra Terpercaya Anda</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Dipimpin oleh profesional berpengalaman dengan jaringan luas di pasar properti Indonesia.</p>
        </div>

        <div className="flex flex-col items-center mb-20">
           <div className="w-72 h-80 rounded-[40px] overflow-hidden gold-border mb-6">
             <img src="/foto/misaeltheoaditya.jpg" alt="Misael Theo Aditya" className="w-full h-full object-cover" />
           </div>
           <h3 className="text-3xl font-serif text-gold">Misael Theo Aditya</h3>
           <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mt-2">Direktur Utama / Principal - X-Pro Makassar</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center px-4">
            {[
              { name: 'Arfan Syaputra', role: 'Koordinator Agent Makassar', img: '/foto/arfansyaputra.jpg' },
              { name: 'Randy Heinrich', role: 'Principal Agent Bali', img: '/foto/randyheinrich.jpg' },
              { name: 'Dian Rini', role: 'Principal Agent Surabaya', img: '/foto/dianrini.jpg' },
              { name: 'Daniella Leonard', role: 'Digital Marketing & Creator', img: '/foto/daniellaleonard.jpg' },
              { name: 'Muh. Vhauzy', role: 'Koordinator Developer', img: '/foto/muhamadvhauzy.jpg' }
            ].map((m, i) => (
              <div key={i} className="space-y-4 group">
                <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 border border-white/5">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                </div>
                <div>
                   <h4 className="text-lg font-serif text-white">{m.name}</h4>
                   <p className="text-[10px] text-gold uppercase tracking-tighter mt-1">{m.role}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
);

const Testimonials = ({ onNavigate }: { onNavigate: (page: 'home' | 'recruitment') => void }) => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <SectionHeader centered subtitle="Testimonials" title="Kisah Sukses Klien Kami" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-gray-50 p-10 rounded-[40px] relative border border-gold/5 flex flex-col justify-between">
          <div className="flex gap-1 mb-6">
            {[1,2,3,4,5].map(star => <Star key={star} className="w-4 h-4 fill-gold text-gold" />)}
          </div>
          <p className="text-gray-600 italic leading-relaxed mb-10">"{t.text}"</p>
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-white font-bold text-xl uppercase">
               {t.name.split('')[0]}
             </div>
             <div>
                <h4 className="font-bold text-premium-black">{t.name}</h4>
                <p className="text-xs text-gray-500">{t.role}</p>
             </div>
          </div>
        </div>
      ))}
    </div>

    {/* CTA Recruitment */}
    <div className="mt-32 luxury-gradient rounded-[40px] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-[120px]"></div>
        <div className="relative z-10 max-w-2xl">
          <span className="text-gold uppercase tracking-[0.3em] font-bold text-xs mb-3 block">
            KARIR & KELUARGA BESAR X-PRO
          </span>
          <h2 className="text-4xl md:text-6xl text-white font-serif mb-6 leading-tight">Wujudkan Karir <span className="text-gold italic font-light italic">Impian</span> Bersama X-Pro</h2>
          <p className="text-gray-400 text-lg mb-8">Dapatkan dukungan pemasaran digital terbaik, pelatihan intensif dari nol, dan jaringan listing properti paling eksklusif di Indonesia.</p>
          <div className="flex flex-wrap gap-6">
             <div className="flex items-center gap-2 text-white/70">
                <CheckCircle2 className="w-5 h-5 text-gold" />
                <span>Support Marketing Digital</span>
             </div>
             <div className="flex items-center gap-2 text-white/70">
                <CheckCircle2 className="w-5 h-5 text-gold" />
                <span>Training & Mentoring Intensif</span>
             </div>
             <div className="flex items-center gap-2 text-white/70">
                <CheckCircle2 className="w-5 h-5 text-gold" />
                <span>Potensi Komisi Ratusan Juta</span>
             </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
          <button 
            onClick={() => onNavigate('recruitment')}
            className="bg-gold hover:bg-white text-black hover:text-premium-black px-10 py-5 rounded-full font-black text-lg transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-95 cursor-pointer"
          >
            <span>Pelajari Karir & Benefit</span> <ArrowUpRight className="w-5 h-5" />
          </button>
          <a 
            href="https://wa.me/6285168622208" 
            target="_blank"
            rel="noreferrer"
            className="bg-[#25D366] hover:bg-[#1ebd59] text-white px-8 py-5 rounded-full font-bold text-lg transition-all shadow-xl flex items-center justify-center gap-3 active:scale-95"
          >
            <Phone className="w-5 h-5" /> Chat WA Rekrutmen
          </a>
        </div>
    </div>
  </section>
);

const Footer = ({ onNavigate }: { onNavigate: (page: 'home' | 'recruitment', sectionId?: string) => void }) => (
  <footer className="bg-premium-black pt-24 pb-10 border-t border-white/5 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
        <div className="space-y-8">
           <div className="flex flex-col gap-6">
             <div className="flex items-center gap-4">
               <img src="/logo/logoexecutiveproperty.jpg" alt="Executive Property Logo" className="h-16 rounded-lg object-contain" />
               <img src="/logo/arebi.png" alt="AREBI Logo" className="h-12 object-contain opacity-80" />
             </div>
             <span className="text-2xl font-serif text-white tracking-widest uppercase">X-PRO</span>
           </div>
           <p className="text-gray-500 leading-relaxed font-light">Membangun ekosistem properti yang terintegrasi dan berkelanjutan di seluruh Indonesia.</p>
           <div className="flex flex-col gap-3">
             <a href="mailto:info@executiveproperti.com" className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors">
               <Mail className="w-5 h-5 text-gold" />
               <span>info@executiveproperti.com</span>
             </a>
             <a href="https://wa.me/6285168622208" className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors">
               <Phone className="w-5 h-5 text-gold" />
               <span>0851-6862-2208 (Rekrutmen Surabaya)</span>
             </a>
             <a href="https://wa.me/6282234837411" className="flex items-center gap-3 text-gray-400 hover:text-gold transition-colors">
               <Phone className="w-5 h-5 text-gold" />
               <span>+62 822 3483 7411 (Kantor Pusat)</span>
             </a>
           </div>
           <div className="flex gap-4">
              {['FB', 'IG', 'LI', 'TT'].map(social => (
                <div key={social} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-xs font-bold text-gray-500 hover:border-gold hover:text-gold cursor-pointer transition-colors">
                  {social}
                </div>
              ))}
           </div>
        </div>

        <div>
          <h4 className="text-white font-serif text-xl mb-8">Head Office</h4>
          <p className="text-gray-400 leading-relaxed">
            Jl. Jendral Sudirman No. 72, <br />
            Makassar, Sulawesi Selatan.
          </p>
        </div>

        <div>
          <h4 className="text-white font-serif text-xl mb-8">Branch Offices</h4>
          <div className="space-y-6">
            <div>
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">Surabaya (Pusat Rekrutmen)</p>
              <p className="text-gray-400 text-sm">Jl. Raya Jemursari 76, Blok B-3, Surabaya</p>
            </div>
            <div>
              <p className="text-gold text-xs font-bold uppercase tracking-widest mb-1">Bali</p>
              <p className="text-gray-400 text-sm">Jln. Taman Pancing Barat Blok R No.1, Pemogan - Denpasar</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-white font-serif text-xl mb-8">Newsletter & Karir</h4>
          <p className="text-gray-500 text-sm mb-4">Dapatkan info properti eksklusif & info rekrutmen agen baru.</p>
          <div className="relative mb-6">
             <input type="email" placeholder="Email Anda" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-gold transition-colors" />
             <button className="absolute right-2 top-2 w-10 h-10 bg-gold rounded-full flex items-center justify-center hover:bg-gold-light">
               <ChevronRight className="w-5 h-5 text-black" />
             </button>
          </div>
          <button 
            onClick={() => onNavigate('recruitment')}
            className="w-full bg-gold/15 hover:bg-gold text-gold hover:text-black border border-gold/40 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
          >
            <span>Halaman Rekrutmen Agen</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Pendaftaran & Rekrutmen Member/Agen */}
      <div className="bg-white/5 border border-gold/20 rounded-2xl p-6 md:p-8 mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <h4 className="text-gold font-serif text-lg md:text-xl font-bold">
              Pendaftaran Agen & Member Executive Property
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed mt-1">
              Cara bergabung menjadi agen atau member di Executive Property (X-Pro Property Surabaya) dapat dilakukan melalui kontak resmi dan alamat kantor berikut:
            </p>
          </div>
          <button 
            onClick={() => onNavigate('recruitment')}
            className="self-start md:self-auto shrink-0 bg-gold hover:bg-gold-light text-black px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-lg"
          >
            <span>Buka Halaman Recruitment</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-black/40 rounded-xl p-5 border border-white/5">
          <p className="text-xs font-bold uppercase tracking-widest text-gold mb-3">Kontak Person & Pendaftaran</p>
          <ul className="space-y-2.5 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-gold font-bold">•</span>
              <span>
                <strong className="text-white">Nomor Telepon / WhatsApp Rekrutmen:</strong>{' '}
                <a href="https://wa.me/6285168622208" target="_blank" rel="noreferrer" className="text-gold hover:underline font-medium">0851-6862-2208</a>{' '}
                atau{' '}
                <a href="https://wa.me/6282234837411" target="_blank" rel="noreferrer" className="text-gold hover:underline font-medium">+62 822-3483-7411</a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold font-bold">•</span>
              <span>
                <strong className="text-white">Website Resmi:</strong> Executive Property Surabaya :{' '}
                <a href="https://www.executiveproperti.com" target="_blank" rel="noreferrer" className="text-gold hover:underline font-medium">www.executiveproperti.com</a>
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gold font-bold">•</span>
              <span>
                <strong className="text-white">Instagram Resmi:</strong>{' '}
                <a href="https://instagram.com/executiveproperty.surabaya" target="_blank" rel="noreferrer" className="text-gold hover:underline font-medium">@executiveproperty.surabaya</a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
        <p className="text-gray-600 text-xs text-center">
          &copy; 2024 Executive Property (X-Pro). All rights reserved. <br className="md:hidden" /> Member of AREBI & Perdagangan Indonesia.
        </p>
        <div className="flex gap-8 text-[10px] uppercase font-bold text-gray-600">
           <button onClick={() => onNavigate('home')} className="hover:text-gold transition-colors">Home</button>
           <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
           <button onClick={() => onNavigate('recruitment')} className="text-gold hover:underline transition-colors">Recruitment / Karir</button>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'recruitment'>(() => {
    if (typeof window !== 'undefined' && window.location.hash.toLowerCase().includes('recruitment')) {
      return 'recruitment';
    }
    return 'home';
  });

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash.toLowerCase().includes('recruitment')) {
        setCurrentPage('recruitment');
      } else if (window.location.hash === '' || window.location.hash === '#') {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page: 'home' | 'recruitment', sectionId?: string) => {
    setCurrentPage(page);
    if (page === 'recruitment') {
      window.location.hash = '#recruitment';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (sectionId) {
        window.location.hash = `#${sectionId}`;
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.location.hash = '#';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="scroll-smooth bg-white">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      
      {currentPage === 'recruitment' ? (
        <RecruitmentPage onBackToHome={() => handleNavigate('home')} />
      ) : (
        <>
          <Hero onNavigate={handleNavigate} />
          <AdvancedSearch />
          <About />
          <Services />
          <Projects />
          <Team />
          <Testimonials onNavigate={handleNavigate} />
        </>
      )}

      <Footer onNavigate={handleNavigate} />
      
      {/* Floating WA CTA */}
      <motion.a 
        href="https://wa.me/6285168622208?text=Halo%20X-Pro%2C%20saya%20tertarik%20bergabung%20menjadi%20agent%20property." 
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-colors"
        title="Chat WhatsApp Rekrutmen"
      >
        <div className="relative">
           <Phone className="w-7 h-7" />
           <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
        </div>
      </motion.a>
    </div>
  );
}
