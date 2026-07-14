/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Landmark, Users, Home, Wrench, Award, Sparkles, MapPin, FileText, User } from 'lucide-react';
import { creativeEconomyStats, generalStats } from '../data/statsData';
import lurahImg from '../assets/images/lurah.png';
import bg2 from '../assets/images/bg2.jpg';

export default function ProfileSection() {
  const [activeStatTab, setActiveStatTab] = useState<'sector' | 'establishedYear' | 'workforce'>('sector');

  const statTabs = [
    { id: 'sector', label: 'Jumlah RT dan RW', icon: Home },
    { id: 'establishedYear', label: 'Sebaran Jenis Kelamin', icon: Users },
    { id: 'workforce', label: 'Penyerapan Tenaga Kerja', icon: Wrench },
  ];

  const colors = ['#10b981', '#3b82f6', '#ec4899', '#8b5cf6', '#f59e0b', '#14b8a6', '#f43f5e'];

  return (
    <div className="space-y-12 pb-24 md:pb-12">
      {/* HEADER SECTION */}
      <section className="text-center space-y-3 max-w-2xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Profil Kelurahan
        </h2>
        <p className="text-lg sm:text-xl font-medium text-slate-600 italic font-sans tracking-wide">
          Ciptomulyo Diciptakno Dadi Mulyo
        </p>
      </section>

      {/* Video Profil Kelurahan */}
      <section id="home-video-profile-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-8 shadow-sm space-y-6">
          <div id="video-iframe-container" className="aspect-video w-full rounded-2xl overflow-hidden border-0 border-slate-200 shadow-md">
            <iframe
              id="youtube-profile-iframe"
              className="w-full h-full"
              src="https://www.youtube.com/embed/vGSi9pYnZk4"
              title="Video Profil Kelurahan Ciptomulyo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* SAMBUTAN LURAH & BRIEF INTRODUCTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 border-2 border-blue-600 shadow-md">
            <img
              src={lurahImg}
              alt="Dedi Surfianto, SE"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-3 flex-grow">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans italic">
              &ldquo;Di Kelurahan Ciptomulyo, kami senantiasa berupaya mewujudkan lingkungan yang sehat, berbudaya, asri, dan aman melalui semangat kebersamaan serta partisipasi aktif masyarakat. Melalui peningkatan kualitas pelayanan, kesehatan masyarakat, serta pembangunan yang ramah lingkungan, kami berkomitmen menciptakan lingkungan yang nyaman dan meningkatkan kesejahteraan masyarakat. Terima kasih atas perhatian dan dukungan seluruh pihak dalam membangun Kelurahan Ciptomulyo.&rdquo;
            </p>
            <div className="pt-2">
              <p className="text-sm font-bold text-slate-900 font-sans">Dedi Surfianto, SE</p>
              <p className="text-xs sm:text-sm text-slate-500 font-sans">Lurah Ciptomulyo, Kecamatan Sukun, Kota Malang</p>
            </div>
          </div>
        </div>
      </section>

      {/* EKONOMI KREATIF CIPTOMULYO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          {/* Decorative visual on the left for history */}
          <div className="lg:col-span-4 bg-blue-900 text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 bg-cover bg-center" style={{ backgroundImage: `url("${bg2}")` }} />
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-bold tracking-tight">Kilas Potensi Ciptomulyo</h3>
              <p className="text-blue-200 text-xs sm:text-sm leading-relaxed font-sans">
                Sejak dekade silam, Kelurahan Ciptomulyo dikenal sebagai episentrum kerajinan logam, fabrikasi besi hias, dan industri rumahan kuliner berskala mikro di Kecamatan Sukun, Kota Malang.
              </p>
            </div>
          </div>

          {/* Deskripsi */}
          <div className="lg:col-span-8 p-6 sm:p-8 space-y-4">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              Terletak strategis di koridor perlintasan utama Malang, Kelurahan Ciptomulyo dianugerahi oleh SDM yang memiliki daya juang serta keterampilan teknis yang tinggi. Kegiatan pengerjaan logam di wilayah ini diturunkan lintas generasi, menghasilkan kontribusi signifikan pada penyerapan tenaga kerja lokal.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              Seiring dengan berjalannya program digitalisasi ekonomi kreatif, para pelaku UMKM kuliner, busana jahit, serta layanan desain kreatif lokal kian bertransformasi melahirkan inovasi produk bernilai jual tinggi demi kemakmuran bersama masyarakat Kelurahan Ciptomulyo.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-100">
              <div className="p-3 bg-slate-50 rounded-xl flex items-center space-x-2.5">
                <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs text-slate-400 uppercase font-sans leading-none">Jumlah Keluarga</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 font-mono mt-1">{generalStats.totalkk} Keluarga</p>
                </div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl flex items-center space-x-2.5">
                <div className="w-8 h-8 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs text-slate-400 uppercase font-sans leading-none">Jumlah Penduduk</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 font-mono mt-1">{generalStats.totalcitizens} Orang</p>
                </div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl flex items-center space-x-2.5">
                <div className="w-8 h-8 bg-rose-50 text-rose-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-rose-600" />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs text-slate-400 uppercase font-sans leading-none">Luas Wilayah</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 font-mono mt-1">{generalStats.areaSize}</p>
                </div>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl flex items-center space-x-2.5">
                <div className="w-8 h-8 bg-amber-50 text-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs text-slate-400 uppercase font-sans leading-none">Kode Pos</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 font-mono mt-1">{generalStats.postalcode}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISI & MISI KELURAHAN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Visi Card */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white/10 rounded-xl">
                <Sparkles className="w-5 h-5 text-blue-200" />
              </div>
              <h3 className="text-lg font-bold font-sans uppercase tracking-wider">Visi</h3>
            </div>
            <p className="text-blue-50 text-base font-bold font-sans leading-relaxed pt-2">
              &ldquo;Terwujudnya Ciptomulyo Sebagai Kelurahan Sehat, Berbudaya, Asri dan Aman Dalam Rangka Menuju Masyarakat yang Bermartabat.&rdquo;
            </p>
          </div>

          {/* Misi Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center space-x-3 text-blue-700">
              <div className="p-2 bg-blue-50 rounded-xl">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-sans uppercase tracking-wider">Misi</h3>
            </div>
            <div className="space-y-6 pt-2">
              {/* Misi 1 */}
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold font-mono mt-0.5">
                    1
                  </span>
                  <p className="font-bold text-slate-900 text-sm sm:text-base font-sans">
                    Mewujudkan Peningkatan Kesehatan Masyarakat
                  </p>
                </div>
                <ul className="pl-9 space-y-1.5 list-disc list-outside text-slate-600 text-sm font-sans leading-relaxed">
                  <li>Peningkatan kualitas dan kuantitas sarana/prasarana kesehatan</li>
                  <li>Peningkatan kualitas kesehatan Balita</li>
                  <li>Peningkatan perilaku hidup sehat</li>
                  <li>Peningkatan kualitas kesehatan lingkungan</li>
                </ul>
              </div>

              {/* Misi 2 */}
              <div className="space-y-2">
                <div className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xs font-bold font-mono mt-0.5">
                    2
                  </span>
                  <p className="font-bold text-slate-900 text-sm sm:text-base font-sans">
                    Mewujudkan Penyelenggaraan Pembangunan Yang Ramah Lingkungan
                  </p>
                </div>
                <ul className="pl-9 space-y-1.5 list-disc list-outside text-slate-600 text-sm font-sans leading-relaxed">
                  <li>Peningkatan perencanaan, penataan dan pengendalian tata ruang</li>
                  <li>Perencanaan pembangunan berbasis masyarakat</li>
                  <li>Peningkatan kualitas air, tanah dan udara</li>
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
              <h3 className="text-lg font-bold text-slate-900 font-sans">Dasbor Statistik Sektoral</h3>
              <p className="text-sm text-slate-500 font-sans">Statistik kuantitatif jumlah RT dan RW, jumlah sebaran jenis kelamin, serta jumlah penyerapan tenaga kerja Kelurahan Ciptomulyo.</p>
            </div>
            <div className="bg-slate-100 p-1 rounded-xl flex items-center space-x-1.5 self-start">
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
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-sans transition-all whitespace-nowrap border ${
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
                <p className="text-sm text-slate-500 font-sans mt-1">
                  {creativeEconomyStats[activeStatTab].description}
                </p>
              </div>

              {/* Total Summary */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400 font-sans uppercase tracking-wider">Metrik Total</p>
                  <p className="text-xl font-extrabold text-slate-900 font-mono mt-0.5">
                    {activeStatTab === 'sector' 
                      ? `${creativeEconomyStats.sector.items.reduce((acc, curr) => acc + curr.value, 0)} RT`
                      : activeStatTab === 'establishedYear'
                      ? `${creativeEconomyStats.establishedYear.items.reduce((acc, curr) => acc + curr.value, 0)} Jiwa`
                      : `${creativeEconomyStats.workforce.items.reduce((acc, curr) => acc + curr.value, 0)} Jiwa`
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
                  <div key={idx} className="flex items-center justify-between text-sm font-sans">
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
                    <div className="flex items-center justify-between text-sm font-sans">
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
