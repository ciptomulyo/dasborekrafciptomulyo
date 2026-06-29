/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FileText, Newspaper, User, ChevronRight, Phone, Mail, MapPin, Layers, Award, Star, ArrowUpRight, Youtube } from 'lucide-react';
import { umkmList } from '../data/umkmData';
import heroBanner from '../assets/images/ciptomulyo_hero_banner_1782317770753.jpg';

interface HomeSectionProps {
  setActiveTab: (tab: string) => void;
  setSelectedUmkmId: (id: string | null) => void;
}

export default function HomeSection({ setActiveTab, setSelectedUmkmId }: HomeSectionProps) {
  // Get featured Ekraf articles for preview
  const featuredUmkm = umkmList.filter(item => item.featured).slice(0, 3);

  // Quick link item details for Creative Economy Focus
  const quickLinks = [
    {
      id: 'umkm',
      title: 'Katalog Ekraf',
      desc: 'Jelajahi produk kerajinan logam, kuliner tradisional, butik, dan jasa kreatif.',
      icon: FileText,
      color: 'bg-blue-50 text-blue-600 border-blue-100 hover:bg-blue-100/50',
    },
    {
      id: 'profile',
      title: 'Statistik Sektoral',
      desc: 'Peta sebaran industri kreatif, unit usaha, dan keterserapan tenaga kerja lokal.',
      icon: Layers,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-100/50',
    },
  ];

  const announcements = [
    {
      id: 'umkm-1',
      tag: 'LOGAM & KRIYA',
      title: 'Bengkel Logam Bapak Suparno RW 02 Mendapatkan Sertifikasi Standar Industri',
      date: '26 Juni 2026',
    },
    {
      id: 'umkm-2',
      tag: 'KULINER',
      title: 'Kripik Tempe Rejeki Meluncurkan Varian Rasa Baru Shibori Spicy',
      date: '20 Juni 2026',
    },
  ];

  return (
    <div className="space-y-10 pb-20 md:pb-10">
      {/* 1. HERO SECTION WITH WELCOME */}
      <section className="relative overflow-hidden bg-slate-950 text-white rounded-3xl mx-4 sm:mx-6 md:mx-0">
        {/* Background Image with elegant overlay */}
        <div className="absolute inset-0 z-0">
        <img
          src={heroBanner}
          alt="Kantor Kelurahan Ciptomulyo"
          className="w-full h-full object-cover opacity-55"
          referrerPolicy="no-referrer"
        />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"/>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-20 max-w-5xl space-y-6">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-2 rounded-full text-xs font-semibold font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Dasbor Ekonomi Kreatif Digital</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Selamat Datang di Portal <br className="hidden sm:inline" /> <span className="text-blue-400">Ekonomi Kreatif Kelurahan Ciptomulyo</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed font-sans">
            Sentra digitalisasi industri kreatif lokal, direktori terintegrasi, serta transparansi indikator perkembangan ekonomi mikro Kelurahan Ciptomulyo, Sukun, Kota Malang.
          </p>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => setActiveTab('umkm')}
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-blue-500/20 flex items-center justify-center space-x-2 font-sans cursor-pointer"
            >
              <span>Jelajahi Katalog Ekraf</span>
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className="bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 px-6 py-3 rounded-xl text-sm font-bold transition-colors flex items-center justify-center space-x-2 font-sans cursor-pointer"
            >
              <span>Lihat Statistik Sektoral</span>
              <Layers className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. STATS SUMMARIES BAR */}
      <section id="home-video-profile-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-8 shadow-sm space-y-6">
          <div id="video-profile-header" className="space-y-1.5">
            <div className="inline-flex items-center space-x-2 bg-rose-50 text-rose-600 border border-rose-100 px-3 py-1 rounded-full text-xs font-bold tracking-wider font-sans uppercase">
              <Youtube className="w-3.5 h-3.5 text-rose-500 fill-rose-500/10 animate-pulse" />
              <span>Media & Profil Publik</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight font-sans">
              Video Profil Kelurahan Ciptomulyo
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-sans max-w-3xl leading-relaxed">
              Saksikan tayangan selayang pandang mengenai keindahan wilayah, kearifan kebudayaan lokal, dan geliat dinamis para pelaku Ekonomi Kreatif yang mendefinisikan Kelurahan Ciptomulyo.
            </p>
          </div>
          <div id="video-iframe-container" className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
            <iframe
              id="youtube-profile-iframe"
              className="w-full h-full"
              src="https://www.youtube.com/embed/AgI0DpPR8Mc"
              title="Video Profil Kelurahan Ciptomulyo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* 3. SAMBUTAN LURAH & BRIEF INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 border-2 border-blue-600 shadow-md">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=256"
              alt="Dedi Surfianto, SE"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-3 flex-grow">
            <div className="inline-block text-xs font-extrabold text-blue-600 tracking-wider uppercase font-sans">
              Dukungan Jajaran Kelurahan
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              &ldquo;Bela dan Beli Produk Kreatif Tetangga Sendiri&rdquo;
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-sans italic">
              &ldquo;Kami di Kelurahan Ciptomulyo berkomitmen mendampingi kemandirian ekonomi warga dengan mendedikasikan platform digital ini untuk perluasan branding produk lokal. Menghubungkan langsung pembeli dengan produsen logam, anyaman, maupun kuliner legendaris kami tanpa potongan biaya pihak ketiga. Mari gerakkan ekonomi mikro secara berdaulat.&rdquo;
            </p>
            <div className="pt-2">
              <p className="text-sm font-bold text-slate-900 font-sans">Dedi Surfianto, SE</p>
              <p className="text-xs text-slate-500 font-sans">Lurah Ciptomulyo, Kecamatan Sukun, Kota Malang</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. QUICK ACCESS BUTTONS (Citizen Focused Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold text-slate-900 tracking-tight font-sans">Navigasi Dasbor</h3>
            <p className="text-xs text-slate-500 font-sans">Akses cepat menuju katalog usaha lokal dan pendataan terpadu.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickLinks.map((link: any) => {
              const Icon = link.icon;
              return (
                <button
                  id={`quick-link-${link.id}`}
                  key={link.id}
                  onClick={() => {
                    setActiveTab(link.id);
                  }}
                  className={`flex flex-col text-left p-5 rounded-2xl border transition-all text-slate-800 cursor-pointer ${link.color}`}
                >
                  <div className="p-3 bg-white rounded-xl shadow-sm inline-block self-start mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm font-sans">{link.title}</h4>
                  <p className="text-xs text-slate-500 mt-1 font-sans leading-relaxed flex-grow">
                    {link.desc}
                  </p>
                  <div className="flex items-center space-x-1 text-xs font-bold text-slate-900 mt-4">
                    <span>Akses Menu</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. ANNOUNCEMENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <h3 className="text-base font-bold text-slate-900 font-sans">Sorotan Aktivitas Usaha Warga</h3>
            </div>
            <button
              onClick={() => setActiveTab('umkm')}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 font-sans cursor-pointer"
            >
              Lihat Semua Katalog
            </button>
          </div>
          <div className="space-y-4">
            {announcements.map((ann) => (
              <div
                id={`announcement-${ann.id}`}
                key={ann.id}
                onClick={() => {
                  setSelectedUmkmId(ann.id);
                  setActiveTab('umkm');
                }}
                className="group flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-50 hover:bg-blue-50/50 rounded-xl border border-slate-100 cursor-pointer transition-colors"
              >
                <div className="space-y-1">
                  <span className="inline-block text-[9px] font-extrabold bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-sans tracking-wide">
                    {ann.tag}
                  </span>
                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors font-sans leading-snug">
                    {ann.title}
                  </h4>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-400 mt-2 sm:mt-0 font-sans flex-shrink-0">
                  <span>{ann.date}</span>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LATEST FEATURED EKRAF PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight font-sans">Ekraf Unggulan Kelurahan</h3>
              <p className="text-xs text-slate-500 font-sans">Pelaku ekonomi kreatif pilihan dengan rekam jejak mutu terbaik.</p>
            </div>
            <button
              onClick={() => setActiveTab('umkm')}
              className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center space-x-1 font-sans cursor-pointer"
            >
              <span>Lihat Semua Ekraf</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredUmkm.map((item) => (
              <div
                id={`umkm-card-${item.id}`}
                key={item.id}
                onClick={() => {
                  setSelectedUmkmId(item.id);
                  setActiveTab('umkm');
                }}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full"
              >
                <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-extrabold bg-blue-600 text-white px-2.5 py-1 rounded-md font-sans uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-grow space-y-2">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-sans font-medium">
                    <span>Pemilik: {item.owner}</span>
                    <span className="flex items-center text-amber-600 font-bold">
                      <Star className="w-3 h-3 text-amber-500 fill-amber-500 mr-0.5" />
                      {item.rating}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-950 text-sm leading-snug group-hover:text-blue-600 transition-colors font-sans line-clamp-1">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed line-clamp-2 flex-grow">
                    {item.description}
                  </p>
                  <div className="pt-4 flex items-center text-xs font-bold text-blue-600 group-hover:text-blue-700 font-sans">
                    <span>Eksplor Detail & Kontak</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. DETAILED CONTACT INFO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8" id="footer-kontak">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-sans">Sekretariat Ekraf Kelurahan</h4>
            <div className="space-y-3 text-xs text-slate-600 font-sans leading-relaxed">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Kantor Kelurahan Ciptomulyo, Jl. Kolonel Sugiono VIII / No.1 Ciptomulyo Sukun Malang</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>(0341) 322175 (Seksi Pemberdayaan Masyarakat)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>kel-ciptomulyo@malangkota.go.id</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-sans">Lokasi Wilayah Ciptomulyo</h4>
            <div className="w-full h-44 rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              <iframe
                title="Peta Kantor Kelurahan Ciptomulyo"
                src="https://maps.google.com/maps?q=Kantor%20Kelurahan%20Ciptomulyo%20Malang&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
