/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChevronRight, Phone, Mail, MapPin, Layers } from 'lucide-react';
import { umkmList } from '../data/umkmData';
import bg1 from '../assets/images/bg1.jpg';

interface HomeSectionProps {
  setActiveTab: (tab: string) => void;
  setSelectedUmkmId: (id: string | null) => void;
}

export default function HomeSection({ setActiveTab, setSelectedUmkmId }: HomeSectionProps) {
  // Get featured Ekraf articles for preview
  const featuredUmkm = umkmList.filter(item => item.featured).slice(0, 3);

  return (
    <div className="space-y-10 pb-20 md:pb-10">
      {/* HERO SECTION WITH WELCOME */}
      <section className="relative overflow-hidden bg-slate-950 text-white rounded-3xl mx-4 sm:mx-6 md:mx-0">
        <div className="absolute inset-0 z-0">
          <img
            src={bg1}
            alt="Kantor Kelurahan Ciptomulyo"
            className="w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-20 max-w-4xl space-y-6">
               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Selamat Datang di Portal <br className="hidden sm:inline" />
            <span className="text-blue-400 block sm:inline-block mt-1 sm:mt-0">Ekonomi Kreatif Kelurahan Ciptomulyo</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed font-sans">
            Sentra digitalisasi industri kreatif lokal, direktori terintegrasi, serta perkembangan ekonomi mikro Kelurahan Ciptomulyo, Sukun, Kota Malang.
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

      {/* Video Branding Ekraf Kelurahan */}
      <section id="home-video-profile-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-8 shadow-sm space-y-6">
          <div id="video-iframe-container" className="aspect-video w-full rounded-2xl overflow-hidden border-0 border-slate-200 shadow-md">
            <iframe
              id="youtube-profile-iframe"
              className="w-full h-full"
              src="https://www.youtube.com/embed/AgI0DpPR8Mc"
              title="Video Profil Kelurahan Ciptomulyo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* LATEST FEATURED EKRAF PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight font-sans">Ekraf Unggulan Kelurahan</h3>
              <p className="text-sm text-slate-500 font-sans">Pelaku ekonomi kreatif pilihan dengan rekam jejak mutu terbaik.</p>
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
                  <span className="absolute top-3 left-3 text-xs font-extrabold bg-blue-600 text-white px-2.5 py-1 rounded-md font-sans uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-grow space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-sans font-medium">
                    <span>Pemilik: {item.owner}</span>
                  </div>
                  <h4 className="font-bold text-slate-950 text-base leading-snug group-hover:text-blue-600 transition-colors font-sans line-clamp-1">
                    {item.name}
                  </h4>
                  <p className="text-sm text-slate-500 font-sans leading-relaxed line-clamp-2 flex-grow">
                    {item.description}
                  </p>

                  {/* List of Products */}
                  <div className="pt-3 border-t border-slate-100/80 space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block font-sans">Produk & Layanan</span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.products.slice(0, 3).map((prod, idx) => (
                        <span 
                          key={idx} 
                          className="text-xs bg-slate-50 border border-slate-100 text-slate-600 px-2 py-1 rounded-md font-sans font-medium hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 transition-colors"
                        >
                          {prod.name}
                        </span>
                      ))}
                      {item.products.length > 3 && (
                        <span className="text-xs bg-slate-50 border border-slate-100 text-slate-400 px-2 py-1 rounded-md font-sans font-medium">
                          +{item.products.length - 3} lainnya
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center text-sm font-bold text-blue-600 group-hover:text-blue-700 font-sans">
                    <span>Eksplor Detail & Kontak</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED CONTACT INFO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8" id="footer-kontak">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-sans">Sekretariat Kelurahan</h4>
            <div className="space-y-3 text-sm text-slate-600 font-sans leading-relaxed">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Kantor Kelurahan Ciptomulyo, Jl. Kolonel Sugiono VIII / No.1 Ciptomulyo Sukun Malang</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>(0341) 322175</span>
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
                title="Peta Wilayah Kelurahan Ciptomulyo"
                src="https://maps.google.com/maps?q=Kelurahan%20Ciptomulyo%20Malang&t=&z=14&ie=UTF8&iwloc=&output=embed"
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
