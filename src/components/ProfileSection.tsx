/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Landmark, Users, TrendingUp, Award, Layers, Sparkles, MapPin, FileText, User } from 'lucide-react';
import { creativeEconomyStats, generalStats } from '../data/statsData';

export default function ProfileSection() {
  const [activeStatTab, setActiveStatTab] = useState<'sector' | 'workforce' | 'establishedYear'>('sector');

  const statTabs = [
    { id: 'sector', label: 'Sektor Usaha', icon: Layers },
    { id: 'workforce', label: 'Penyerapan Tenaga Kerja', icon: Users },
    { id: 'establishedYear', label: 'Ketahanan Usaha', icon: TrendingUp },
  ];

  const colors = ['#10b981', '#3b82f6', '#ec4899', '#8b5cf6', '#f59e0b', '#14b8a6', '#f43f5e'];

  return (
    <div className="space-y-12 pb-24 md:pb-12">
      {/* HEADER SECTION */}
      <section className="text-center space-y-3 max-w-2xl mx-auto px-4">
        <div className="inline-flex items-center space-x-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold font-sans">
          <Landmark className="w-3.5 h-3.5" />
          <span>Profil & Pusat Informasi Kreatif</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Pusat Ekonomi Kreatif Ciptomulyo
        </h2>
        <p className="text-sm text-slate-500 font-sans leading-relaxed">
          Eksplorasi potensi historis industri kreatif, visi pengembangan ekraf lokal, statistik sektoral interaktif, serta jajaran pamong pendukung pelaku usaha.
        </p>
      </section>

      {/* 1. SEJARAH EKONOMI KREATIF CIPTOMULYO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          {/* Decorative visual on the left for history */}
          <div className="lg:col-span-4 bg-blue-900 text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=400')" }} />
            <div className="relative z-10 space-y-4">
              <span className="text-[10px] font-extrabold bg-blue-800 text-blue-300 border border-blue-700 px-2.5 py-1 rounded-md tracking-wider uppercase font-sans">
                Sejarah Sektoral
              </span>
              <h3 className="text-2xl font-bold tracking-tight">Kilas Potensi Ciptomulyo</h3>
              <p className="text-blue-200 text-xs leading-relaxed font-sans">
                Sejak dekade silam, Kelurahan Ciptomulyo dikenal sebagai episentrum kerajinan logam, fabrikasi besi hias, dan industri rumahan kuliner berskala mikro di Kecamatan Sukun, Kota Malang.
              </p>
            </div>
            <div className="relative z-10 pt-8 flex items-center space-x-2 text-xs text-blue-300 font-sans font-medium">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>Sukun, Kota Malang, Jawa Timur</span>
            </div>
          </div>

          {/* History Details */}
          <div className="lg:col-span-8 p-6 sm:p-8 space-y-4">
            <p className="text-slate-600 text-sm leading-relaxed font-sans">
              Terletak strategis di koridor perlintasan utama Malang, Kelurahan Ciptomulyo dianugerahi oleh SDM yang memiliki daya juang serta keterampilan teknis yang tinggi. Kegiatan pengerjaan logam (welding & metal crafts) di wilayah ini diturunkan lintas generasi, menghasilkan kontribusi signifikan pada penyerapan tenaga kerja lokal.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed font-sans">
              Seiring dengan berjalannya program digitalisasi ekonomi kreatif, para pelaku ekraf kuliner keripik tempe khas Malang, busana shibori/butik jahit, serta layanan desain kreatif lokal kian bertransformasi melahirkan inovasi produk bernilai jual tinggi demi kemakmuran bersama masyarakat Kelurahan Ciptomulyo.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100">
              <div className="p-3 bg-slate-50 rounded-xl flex items-center space-x-2.5">
                <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-sans leading-none">Total Ekraf</p>
                  <p className="text-xs font-bold text-slate-800 font-mono mt-1">{generalStats.totalUmkm} Unit</p>
                </div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl flex items-center space-x-2.5">
                <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-sans leading-none">Tenaga Kerja</p>
                  <p className="text-xs font-bold text-slate-800 font-mono mt-1">{generalStats.totalWorkers} Orang</p>
                </div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl flex items-center space-x-2.5">
                <div className="w-8 h-8 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-sans leading-none">Sektor Utama</p>
                  <p className="text-xs font-bold text-slate-800 font-mono mt-1">{generalStats.totalSectors} Bidang</p>
                </div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl flex items-center space-x-2.5">
                <div className="w-8 h-8 bg-rose-50 text-rose-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-rose-600" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-sans leading-none">Luas Wilayah</p>
                  <p className="text-xs font-bold text-slate-800 font-mono mt-1">{generalStats.areaSize}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISI & MISI PENGEMBANGAN EKRAF */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Visi Card */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/10 rounded-xl">
                <Sparkles className="w-5 h-5 text-blue-200" />
              </div>
              <h3 className="text-lg font-bold font-sans uppercase tracking-wider">Visi Ekonomi Kreatif</h3>
            </div>
            <p className="text-blue-50 text-base font-bold font-sans leading-relaxed pt-2">
              &ldquo;Mewujudkan Kelurahan Ciptomulyo yang Berdikari Secara Ekonomi Melalui Akselerasi Transformasi Ekraf yang Unggul, Berdaya Saing Global, dan Ramah Lingkungan.&rdquo;
            </p>
          </div>

          {/* Misi Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center space-x-3 text-blue-700">
              <div className="p-2 bg-blue-50 rounded-xl">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-sans uppercase tracking-wider">Misi Akselerasi Ekonomi</h3>
            </div>
            <div className="space-y-6 pt-2">
              {/* Misi 1 */}
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold font-mono mt-0.5">
                    1
                  </span>
                  <p className="font-bold text-slate-900 text-sm sm:text-base font-sans">
                    Digitalisasi & Perluasan Akses Pasar Ekraf
                  </p>
                </div>
                <ul className="pl-9 space-y-1.5 list-disc list-outside text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                  <li>Penyediaan media promosi katalog interaktif terintegrasi</li>
                  <li>Pelatihan pemasaran digital, pembuatan branding, dan kemasan menarik</li>
                  <li>Fasilitasi pembukuan mandiri digital untuk pengelolaan modal</li>
                </ul>
              </div>

              {/* Misi 2 */}
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold font-mono mt-0.5">
                    2
                  </span>
                  <p className="font-bold text-slate-900 text-sm sm:text-base font-sans">
                    Pemberdayaan SDM Industri Kreatif
                  </p>
                </div>
                <ul className="pl-9 space-y-1.5 list-disc list-outside text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                  <li>Peningkatan kompetensi keahlian pengerjaan logam & anyaman lokal</li>
                  <li>Fasilitasi sertifikasi Halal gratis dan pengurusan izin usaha legal P-IRT</li>
                  <li>Kolaborasi sinergis antar-RW dalam menyelenggarakan pameran Ekraf</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE STATISTICS DASHBOARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-sans">Dasbor Indikator Sektoral</h3>
              <p className="text-xs text-slate-500 font-sans">Statistik kuantitatif unit usaha, ketahanan, dan sebaran penyerapan tenaga kerja Kelurahan Ciptomulyo.</p>
            </div>
            <div className="bg-slate-100 p-1 rounded-xl flex items-center space-x-1.5 self-start">
              <span className="text-[10px] font-extrabold text-blue-600 px-2 py-0.5 bg-blue-50 border border-blue-100 rounded font-sans uppercase tracking-wider flex-shrink-0">
                DATA UPDATE 2026
              </span>
            </div>
          </div>

          {/* Tab Selection */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
            {statTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeStatTab === tab.id;
              return (
                <button
                  id={`stat-tab-${tab.id}`}
                  key={tab.id}
                  onClick={() => setActiveStatTab(tab.id as any)}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-bold font-sans transition-all whitespace-nowrap border ${
                    isActive
                      ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/10'
                      : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Stat Visualizer Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-center">
            {/* Legend & Details */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <h4 className="text-base font-bold text-slate-900 font-sans">
                  {creativeEconomyStats[activeStatTab].title}
                </h4>
                <p className="text-xs text-slate-500 font-sans mt-1">
                  {creativeEconomyStats[activeStatTab].description}
                </p>
              </div>

              {/* Total Summary */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-400 font-sans uppercase tracking-wider">Metrik Total</p>
                  <p className="text-xl font-extrabold text-slate-900 font-mono mt-0.5">
                    {activeStatTab === 'sector' 
                      ? `${generalStats.totalUmkm} Unit Usaha`
                      : activeStatTab === 'workforce'
                      ? `${generalStats.totalWorkers} Jiwa Pekerja`
                      : `${creativeEconomyStats[activeStatTab].items.reduce((acc, curr) => acc + curr.value, 0)} Unit Terdata`
                    }
                  </p>
                </div>
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <Landmark className="w-5 h-5" />
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {creativeEconomyStats[activeStatTab].items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs font-sans">
                    <div className="flex items-center space-x-2">
                      <span 
                        className="w-2.5 h-2.5 rounded-full" 
                        style={{ backgroundColor: item.color || colors[idx % colors.length] }} 
                      />
                      <span className="font-medium text-slate-700">{item.label}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono font-bold text-slate-900">{item.value.toLocaleString('id-ID')}</span>
                      <span className="text-slate-400 ml-1.5 font-mono">({item.percentage}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsive custom-built high-quality SVG/HTML chart */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-200/60 p-6 rounded-2xl flex flex-col justify-center min-h-[250px] space-y-4">
              {creativeEconomyStats[activeStatTab].items.map((item, idx) => {
                const percentage = item.percentage;
                const barColor = item.color || colors[idx % colors.length];
                return (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-sans">
                      <span className="font-bold text-slate-800">{item.label}</span>
                      <span className="font-mono font-bold text-blue-700">{percentage}%</span>
                    </div>
                    <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden relative shadow-inner">
                      <div 
                        className="h-full rounded-full transition-all duration-500 ease-out"
                        style={{ 
                          width: `${percentage}%`,
                          backgroundColor: barColor,
                          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)'
                        }} 
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
