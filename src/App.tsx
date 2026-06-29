/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import BottomNavigation from './components/BottomNavigation';
import HomeSection from './components/HomeSection';
import ProfileSection from './components/ProfileSection';
import UmkmSection from './components/UmkmSection';
import { Landmark, ShieldCheck, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import logoMalang from './assets/images/logo_malang.svg';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedUmkmId, setSelectedUmkmId] = useState<string | null>(null);

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomeSection 
            setActiveTab={setActiveTab} 
            setSelectedUmkmId={setSelectedUmkmId} 
          />
        );
      case 'profile':
        return <ProfileSection />;
      case 'umkm':
        return (
          <UmkmSection 
            selectedUmkmId={selectedUmkmId} 
            setSelectedUmkmId={setSelectedUmkmId} 
          />
        );
      default:
        return (
          <HomeSection 
            setActiveTab={setActiveTab} 
            setSelectedUmkmId={setSelectedUmkmId} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans antialiased text-slate-800">
      {/* 1. TOP HEADER NAVIGATION */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 2. MAIN APP CONTENT CANVAS */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {renderActiveSection()}
      </main>

      {/* 3. GOVERNMENT-BACKED CREATIVE FOOTER */}
      <footer className="bg-slate-900 text-slate-400 pt-12 pb-24 md:pb-12 border-t border-slate-800 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
          
          {/* Logo and About */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3 text-white">
              <img 
                src={logoMalang} 
                alt="Lambang Kota Malang" 
                className="w-7 h-9 object-contain" 
              />
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-white">Kelurahan Ciptomulyo</h2>
                <p className="text-xs text-slate-400">Kecamatan Sukun • Kota Malang</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Situs Resmi Dasbor Ekonomi Kreatif menyajikan direktori pelaku usaha lokal, visualisasi statistik keterserapan tenaga kerja sektoral, serta katalog produk unggulan Ciptomulyo untuk mendorong pertumbuhan ekonomi mikro yang mandiri.
            </p>
            <div className="flex items-center space-x-2 text-emerald-400 text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4" />
              <span>Dukung Gerakan Bangga Buatan Indonesia</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Navigasi Dasbor</h3>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'home', label: 'Beranda Utama' },
                { id: 'profile', label: 'Profil & Statistik Sektoral' },
                { id: 'umkm', label: 'Katalog Ekraf' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      setActiveTab(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors flex items-center space-x-1 cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Footer */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Pembinaan Sektoral</h3>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>Kantor Kelurahan Ciptomulyo, Seksi Pemberdayaan Masyarakat. Jl. Kolonel Sugiono VIII / No.1 Ciptomulyo Sukun Malang</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>(0341) 322175 (Hari & Jam Kerja Sekretariat)</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>kel-ciptomulyo@malangkota.go.id</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lower Footer Bottom info */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="flex items-center space-x-1">
            <Landmark className="w-3.5 h-3.5 text-blue-500" />
            <span className="font-semibold text-slate-300">Hak Cipta © 2026 Pemerintah Kelurahan Ciptomulyo Kota Malang</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://malangkota.go.id" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Portal Resmi Kota Malang
            </a>
          </div>
        </div>
      </footer>

      {/* 4. MOBILE-ONLY BOTTOM NAVIGATION */}
      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
