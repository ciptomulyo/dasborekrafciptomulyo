/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface UmkmItem {
  id: string;
  name: string;
  owner: string;
  category: 'Kuliner' | 'Kriya & Logam' | 'Fashion' | 'Jasa Kreatif';
  description: string;
  address: string;
  rw: string;
  phone: string; // WhatsApp number
  image: string;
  established: string;
  products: { name: string; price: string }[];
  featured: boolean;
  rating: number;
  reviewsCount: number;
}

export const umkmList: UmkmItem[] = [
  {
    id: 'umkm-1',
    name: 'Bengkel Las & Kerajinan Logam Suparno',
    owner: 'Bapak Suparno',
    category: 'Kriya & Logam',
    description: 'Pelopor industri kerajinan logam di Ciptomulyo. Kami memproduksi pagar minimalis, kanopi, railing tangga hias, hingga furnitur estetis berbahan dasar besi dan baja dengan pengerjaan presisi berkualitas tinggi.',
    address: 'Jl. Kolonel Sugiono Gg. 3 No. 4, RT 02/RW 02',
    rw: 'RW 02',
    phone: '6281234567890',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600&h=400',
    established: '2008',
    products: [
      { name: 'Pagar Besi Minimalis (per meter)', price: 'Rp 450.000' },
      { name: 'Kanopi Galvalum (per meter)', price: 'Rp 350.000' },
      { name: 'Rak Bunga Estetik Pot Besi', price: 'Rp 120.000' }
    ],
    featured: true,
    rating: 4.9,
    reviewsCount: 42
  },
  {
    id: 'umkm-2',
    name: 'Kripik Tempe Ciptomulyo Rejeki',
    owner: 'Ibu Erlina Rosita',
    category: 'Kuliner',
    description: 'Sentra produksi keripik tempe legendaris khas Kota Malang dari Ciptomulyo. Dibuat secara higienis menggunakan kedelai pilihan dan resep bumbu rahasia keluarga. Sangat renyah, gurih, dan tersedia dalam aneka varian rasa modern.',
    address: 'Jl. Kolonel Sugiono VIII No. 12, RT 05/RW 04',
    rw: 'RW 04',
    phone: '6281234567891',
    image: 'https://images.unsplash.com/photo-1624462966581-bc6d768cbce5?auto=format&fit=crop&q=80&w=600&h=400',
    established: '2015',
    products: [
      { name: 'Keripik Tempe Original (250g)', price: 'Rp 15.000' },
      { name: 'Keripik Tempe Aneka Rasa (Pedas, Keju, Balado)', price: 'Rp 17.000' },
      { name: 'Paket Oleh-oleh Isi 5 Bungkus', price: 'Rp 75.000' }
    ],
    featured: true,
    rating: 4.8,
    reviewsCount: 56
  },
  {
    id: 'umkm-3',
    name: 'Cipto Craft Mandiri - Kerajinan Bambu',
    owner: 'Bapak Heri Syakir',
    category: 'Kriya & Logam',
    description: 'Kami menyulap bambu lokal menjadi produk dekorasi interior bernilai seni tinggi. Produk unggulan kami meliputi kap lampu anyaman, wadah serbaguna estetis, parsel box, hingga pernak-pernik hiasan meja ramah lingkungan.',
    address: 'Jl. Kolonel Sugiono IX Gg. 2 No. 15, RT 01/RW 09',
    rw: 'RW 09',
    phone: '6281234567892',
    image: 'https://images.unsplash.com/photo-1531971589569-0d93700db185?auto=format&fit=crop&q=80&w=600&h=400',
    established: '2018',
    products: [
      { name: 'Kap Lampu Gantung Bambu Hias', price: 'Rp 85.000' },
      { name: 'Keranjang Parsel Hantaran Premium', price: 'Rp 45.000' },
      { name: 'Tatakan Gelas Anyaman Bambu (Set isi 6)', price: 'Rp 30.000' }
    ],
    featured: true,
    rating: 4.7,
    reviewsCount: 28
  },
  {
    id: 'umkm-4',
    name: 'Zahra Modiste - Busana & Batik Celup',
    owner: 'Ibu Endang Purwati',
    category: 'Fashion',
    description: 'Butik jahit rumahan dan produsen pakaian etnik dengan teknik ikat celup (shibori) dan batik kontemporer. Menerima pesanan pakaian custom untuk seragam kantor, gaun pesta, pakaian anak, hingga kebaya wisuda.',
    address: 'Jl. Kolonel Sugiono X No. 50, RT 03/RW 11',
    rw: 'RW 11',
    phone: '6281234567893',
    image: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&q=80&w=600&h=400',
    established: '2012',
    products: [
      { name: 'Outer Kain Shibori Celup Alami', price: 'Rp 135.000' },
      { name: 'Jasa Jahit Dress Wanita Modern', price: 'Rp 150.000' },
      { name: 'Kemeja Batik Katun Custom', price: 'Rp 180.000' }
    ],
    featured: false,
    rating: 4.9,
    reviewsCount: 37
  },
  {
    id: 'umkm-5',
    name: 'Ciptomulyo Printing & Creative Design',
    owner: 'Mas Adi Wijaya',
    category: 'Jasa Kreatif',
    description: 'Solusi kebutuhan digital branding untuk pelaku usaha kreatif lokal. Kami menyediakan jasa desain logo, pembuatan kemasan produk (packaging), cetak brosur, standing banner, hingga kelola media sosial (social media management).',
    address: 'Jl. Kolonel Sugiono Gg. 3 No. 9, RT 04/RW 02',
    rw: 'RW 02',
    phone: '6281234567894',
    image: 'https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&q=80&w=600&h=400',
    established: '2021',
    products: [
      { name: 'Jasa Desain Logo & Label Kemasan', price: 'Rp 200.000' },
      { name: 'Cetak Banner Promosi (per meter)', price: 'Rp 30.000' },
      { name: 'Paket Foto Produk & Content Creator Feed', price: 'Rp 450.000' }
    ],
    featured: false,
    rating: 4.6,
    reviewsCount: 19
  },
  {
    id: 'umkm-6',
    name: 'Kue Basah & Katering Nyonya Lilik',
    owner: 'Ibu Lilik Suryani',
    category: 'Kuliner',
    description: 'Menyediakan aneka jajanan pasar tradisional premium, kue kotak (snack box) untuk rapat, serta tumpeng tasyakuran. Selalu segar, tanpa bahan pengawet buatan, dan rasa autentik yang memanjakan lidah.',
    address: 'Jl. Kolonel Sugiono Gg. 15 No. 8, RT 02/RW 13',
    rw: 'RW 13',
    phone: '6281234567895',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600&h=400',
    established: '2010',
    products: [
      { name: 'Snack Box Rapat (3 Macam Kue + Air Mineral)', price: 'Rp 12.000' },
      { name: 'Tumpeng Kuning Komplit (Porsi 10 Orang)', price: 'Rp 350.000' },
      { name: 'Aneka Jajan Pasar Tampah Besar', price: 'Rp 180.000' }
    ],
    featured: false,
    rating: 4.8,
    reviewsCount: 65
  }
];
