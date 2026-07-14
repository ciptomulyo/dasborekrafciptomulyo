/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Search, ShoppingBag, Phone, MapPin, ArrowLeft, ChevronLeft, ChevronRight, Share2, FileText } from 'lucide-react';
import { umkmList, UmkmItem } from '../data/umkmData';

interface UmkmSectionProps {
  selectedUmkmId: string | null;
  setSelectedUmkmId: (id: string | null) => void;
}

export default function UmkmSection({ selectedUmkmId, setSelectedUmkmId }: UmkmSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [activeUmkm, setActiveUmkm] = useState<UmkmItem | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const categories = ['Semua', 'Kuliner', 'Kriya & Logam', 'Fashion', 'Jasa Kreatif'];

  useEffect(() => {
    if (selectedUmkmId) {
      const found = umkmList.find((item) => item.id === selectedUmkmId);
      if (found) {
        setActiveUmkm(found);
      }
    } else {
      setActiveUmkm(null);
    }
  }, [selectedUmkmId]);

  useEffect(() => {
    setCurrentImgIndex(0);
  }, [activeUmkm?.id]);

  const filteredUmkm = umkmList.filter((item) => {
    const matchesSearch = 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.products.some(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'Semua' || 
      (Array.isArray(item.category) 
        ? item.category.includes(selectedCategory) 
        : item.category === selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const handleUmkmClick = (item: UmkmItem) => {
    setActiveUmkm(item);
    setSelectedUmkmId(item.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setActiveUmkm(null);
    setSelectedUmkmId(null);
  };

  const handleWhatsAppOrder = (item: UmkmItem, productName?: string) => {
    const baseUrl = `https://api.whatsapp.com/send`;
    const text = productName 
      ? `Halo ${item.owner} dari ${item.name}, saya tertarik dengan produk Anda: *${productName}*. Apakah masih tersedia? Saya melihat usaha Anda melalui website Dasbor Ekonomi Kreatif Ciptomulyo.`
      : `Halo ${item.owner} dari ${item.name}, saya ingin bertanya tentang layanan/produk usaha Anda yang terdaftar di Dasbor Ekonomi Kreatif Ciptomulyo.`;
    const encodedText = encodeURIComponent(text);
    window.open(`${baseUrl}?phone=${item.phone}&text=${encodedText}`, '_blank');
  };

  return (
    <div className="space-y-8 pb-24 md:pb-12">
      {activeUmkm ? (
        /* Detailed View of MSME */
        <div className="max-w-4xl mx-auto px-4 space-y-8 animate-fadeIn">
          {/* Back button */}
          <button
            onClick={handleBackToList}
            className="inline-flex items-center space-x-2 text-sm font-bold text-blue-600 hover:text-blue-700 font-sans cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Kembali ke Katalog Ekraf</span>
          </button>

          {/* Business Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Interactive Details */}
            <div className="lg:col-span-7 space-y-6">
              {/* Core info card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-block text-xs font-extrabold bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-md uppercase tracking-wider font-sans">
                    {Array.isArray(activeUmkm.category) ? activeUmkm.category.join(', ') : activeUmkm.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight font-sans">
                    {activeUmkm.name}
                  </h2>
                  <p className="text-sm text-slate-500 font-sans">
                    Dikelola oleh: <span className="font-semibold text-slate-700">{activeUmkm.owner}</span>
                  </p>
                </div>

                {/* Description Block */}
                <div className="pt-4 border-t border-slate-100 flex items-start space-x-3 text-sm text-slate-600">
                  <FileText className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-800 font-sans">Deskripsi Usaha</p>
                    <p className="mt-1 text-slate-600 leading-relaxed font-sans text-sm sm:text-base">
                      {activeUmkm.description}
                    </p>
                  </div>
                </div>

                {/* List of Products (no price) */}
                <div className="pt-4 border-t border-slate-100 flex items-start space-x-3 text-sm text-slate-600">
                  <ShoppingBag className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-grow">
                    <p className="font-bold text-slate-800 font-sans">Daftar Produk / Layanan</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                      {activeUmkm.products.map((prod, idx) => (
                        <div key={idx} className="flex items-center space-x-2.5 text-sm text-slate-600 bg-slate-50 border border-slate-100 rounded-xl px-3.5 py-2.5 font-sans hover:bg-blue-50/20 hover:border-blue-100 transition-all">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                          <span className="font-medium text-slate-700 leading-tight">{prod.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Logistics & Location Block */}
                <div className="pt-4 border-t border-slate-100 flex items-start space-x-3 text-sm text-slate-600">
                  <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-800 font-sans">Alamat Usaha</p>
                    <p className="mt-0.5 font-sans">{activeUmkm.address}</p>
                  </div>
                </div>
              </div>


            </div>

            {/* Right: Media & Direct Action */}
            <div className="lg:col-span-5 space-y-6">
              {/* Business Image Sliding Gallery */}
              <div className="relative aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm group/slider">
                {/* Sliding Track */}
                <div 
                  className="flex w-full h-full transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentImgIndex * 100}%)` }}
                >
                  {(activeUmkm.images && activeUmkm.images.length > 0 ? activeUmkm.images : [activeUmkm.image]).map((imgUrl, idx) => (
                    <div key={idx} className="w-full h-full flex-shrink-0">
                      <img
                        src={imgUrl}
                        alt={`${activeUmkm.name} - Foto ${idx + 1}`}
                        className="w-full h-full object-cover select-none"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>

                {/* Left Navigation Arrow */}
                {activeUmkm.images && activeUmkm.images.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImgIndex((prev) => (prev === 0 ? activeUmkm.images.length - 1 : prev - 1));
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/95 hover:bg-white text-slate-800 rounded-full shadow-md backdrop-blur-xs md:opacity-0 group-hover/slider:opacity-100 transition-all hover:scale-105 active:scale-95 cursor-pointer z-10 border border-slate-100"
                    title="Foto Sebelumnya"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}

                {/* Right Navigation Arrow */}
                {activeUmkm.images && activeUmkm.images.length > 1 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImgIndex((prev) => (prev === activeUmkm.images.length - 1 ? 0 : prev + 1));
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/95 hover:bg-white text-slate-800 rounded-full shadow-md backdrop-blur-xs md:opacity-0 group-hover/slider:opacity-100 transition-all hover:scale-105 active:scale-95 cursor-pointer z-10 border border-slate-100"
                    title="Foto Berikutnya"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}

                {/* Bullet Indicators */}
                {activeUmkm.images && activeUmkm.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-1.5 bg-black/40 backdrop-blur-xs py-1.5 px-3 rounded-full z-10">
                    {activeUmkm.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentImgIndex(idx);
                        }}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                          currentImgIndex === idx ? 'w-5 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
                        }`}
                        title={`Buka foto ke-${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Direct WhatsApp Call to Action card */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-3 opacity-10">
                  <ShoppingBag className="w-16 h-16 text-emerald-400" />
                </div>
                <div className="relative z-10 space-y-1">
                  <span className="inline-block text-[11px] font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded uppercase tracking-wide">
                    Hubungi Langsung
                  </span>
                  <h4 className="text-sm font-bold tracking-wider uppercase font-sans">
                    Transaksi Langsung Tanpa Perantara
                  </h4>
                  <p className="text-sm text-slate-300 font-sans leading-relaxed">
                    Dukung pertumbuhan ekonomi kreatif lokal Ciptomulyo dengan memesan langsung ke pengelola usaha ini via WhatsApp.
                  </p>
                </div>

                <div className="pt-2 space-y-3 relative z-10 font-sans">
                  <button
                    onClick={() => handleWhatsAppOrder(activeUmkm)}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center space-x-2 shadow-lg shadow-emerald-950/50 cursor-pointer"
                  >
                    <Phone className="w-4 h-4 fill-white/10" />
                    <span>Hubungi Pengelola Usaha</span>
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Link katalog Ekraf disalin ke clipboard!');
                    }}
                    className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 py-3 rounded-xl text-sm font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer border border-slate-700"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Bagikan Katalog Ini</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* List View of MSMEs */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-fadeIn">
          {/* Section header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Eksplorasi Katalog Ekraf Ciptomulyo
            </h2>
            <p className="text-sm text-slate-500 font-sans leading-relaxed">
              Mulai dari kreasi kriya logam legendaris, penganan khas yang lezat, busana shibori modern, hingga solusi branding industri kreatif lokal.
            </p>
          </div>

          {/* Filters and Search Bar */}
          <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Input */}
              <div className="relative w-full md:max-w-md">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  id="umkm-search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Cari nama usaha Ekraf, produk unggulan, atau pemilik..."
                  className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm rounded-xl pl-9 pr-4 py-3 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-inner"
                />
              </div>

              {/* Category horizontal filters */}
              <div className="flex items-center space-x-1.5 overflow-x-auto w-full md:w-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    id={`umkm-cat-${cat}`}
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap font-sans border ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/10'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grid of Ekraf Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredUmkm.map((item) => (
              <div
                id={`umkm-card-${item.id}`}
                key={item.id}
                onClick={() => handleUmkmClick(item)}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col h-full"
              >
                <div className="relative aspect-video w-full bg-slate-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-3 left-3 text-xs font-extrabold bg-blue-600 text-white px-2.5 py-1 rounded-md font-sans uppercase tracking-wider">
                    {Array.isArray(item.category) ? item.category.join(', ') : item.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-grow space-y-2">
                  <div className="flex items-center justify-between text-sm text-slate-400 font-sans font-medium">
                    <span>Oleh: <span className="font-semibold text-slate-600">{item.owner}</span></span>
                  </div>
                  <h4 className="font-extrabold text-slate-950 text-base leading-snug group-hover:text-blue-600 transition-colors font-sans line-clamp-1">
                    {item.name}
                  </h4>
                  <p className="text-sm text-slate-500 font-sans leading-relaxed line-clamp-2 flex-grow">
                    {item.description}
                  </p>

                  {/* List of Products (no price) */}
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
                  
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-blue-600 group-hover:text-blue-700 font-sans">
                    <span>Lihat Detail & Kontak</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}

            {filteredUmkm.length === 0 && (
              <div className="col-span-full text-center py-16 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <p className="text-base font-bold text-slate-700 font-sans">Usaha Ekraf Tidak Ditemukan</p>
                <p className="text-sm text-slate-500 font-sans mt-1">Silakan cari menggunakan kata kunci, nama pemilik, produk lain, atau sesuaikan filter kategori Anda.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
