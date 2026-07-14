/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import logodapurica from '../assets/images/logo_dapurbuica.png';
import sambel1 from '../assets/images/sambel1.jpeg';
import sambel2 from '../assets/images/sambel2.jpeg';
import sambel3 from '../assets/images/sambel3.jpeg';
import sambel4 from '../assets/images/sambel4.jpeg';
import tumpeng1 from '../assets/images/tumpeng1.jpeg';
import tumpeng2 from '../assets/images/tumpeng2.jpeg';
import kue1 from '../assets/images/kue1.jpeg';

import sepatu1 from '../assets/images/sepatu1.jpg';
import sepatu2 from '../assets/images/sepatu2.jpg';
import pisau1 from '../assets/images/pisau1.jpg';
import pisau2 from '../assets/images/pisau2.jpg';
import rokok1 from '../assets/images/rokok1.jpg';
import rokok2 from '../assets/images/rokok2.jpg';
import sangkar1 from '../assets/images/sangkar1.jpg';

import logoyoulisprat from '../assets/images/logo_youlisprat.png';
import katalogbatik from '../assets/images/katalogbatik.png';
import batik1 from '../assets/images/batik1.jpg';
import batik2 from '../assets/images/batik2.jpg';
import batik3 from '../assets/images/batik3.jpeg';
import batik4 from '../assets/images/batik4.jpeg';

import logokimchastik from '../assets/images/logo_kimchastik.png';
import kimchastik1 from '../assets/images/kimchastik1.jpeg';
import kimchastik2 from '../assets/images/kimchastik2.jpg';

import kuerasmi1 from '../assets/images/kuerasmi1.jpg';
import kuerasmi2 from '../assets/images/kuerasmi2.jpg';
import boneka1 from '../assets/images/boneka1.jpg';
import boneka2 from '../assets/images/boneka2.jpg';
import tasrajut1 from '../assets/images/tasrajut1.jpg';
import tasrajut2 from '../assets/images/tasrajut2.jpg';
import tasrajut3 from '../assets/images/tasrajut3.jpg';

import seragam1 from '../assets/images/seragam1.jpg';
import seragam2 from '../assets/images/seragam2.jpg';
import seragam3 from '../assets/images/seragam3.jpg';
import seragam4 from '../assets/images/seragam4.jpg';

export interface UmkmItem {
  id: string;
  name: string;
  owner: string;
  category: string | string[];
  description: string;
  address: string;
  phone: string; // WhatsApp number
  image: string;
  images: string[];
  products: {name: string}[];
  featured: boolean;
}

export const umkmList: UmkmItem[] = [
  {
    id: 'umkm-1',
    name: 'Dapur Bu Ica',
    owner: 'Bu Fariza',
    category: 'Kuliner',
    description: 'Memproduksi berbagai olahan makanan, mulai dari abon, jamu, pastel kering, hingga sambal dengan berbagai varian yang menjadi produk unggulan.',
    address: 'Jln. Kolonel Sugiono GG 2 no 56, RT.02/RW.03',
    phone: '6281252626066',
    image: logodapurica,
    images: [
      logodapurica,
      sambel1,
      sambel2,
      sambel3,
      sambel4,
      tumpeng1,
      tumpeng2,
      kue1
    ],
    products: [
      { name: 'Berbagai Varian Sambal'},
      { name: 'Abon Daging Sapi'},
      { name: 'Pastel Kering'},
      { name: 'Jamu Tradisional'},
      { name: 'Nasi Tumpeng'},
      { name: 'Kue Basah'}
    ],
    featured: true,
  },
  {
    id: 'umkm-2',
    name: 'Batik Youlisprat',
    owner: 'Kak Yulia',
    category: 'Fashion',
    description: 'Memproduksi batik tulis dan batik ciprat, serta produk jadi seperti dompet, pouch dari kain batik.',
    address: 'Jln. Kolonel Sugiono GG X no 64, RT.14/RW.01',
    phone: '6285869247232',
    image: logoyoulisprat,
    images: [
      logoyoulisprat,
      katalogbatik,
      batik1,
      batik2,
      batik3,
      batik4
    ],
    products: [
      { name: 'Kain Batik Tulis'},
      { name: 'Kain Batik Ciprat'},
      { name: 'Pouch Serut Batik'},
      { name: 'Dompet Koin Batik'}
    ],
    featured: true,
  },
  {
    id: 'umkm-3',
    name: 'Kimchastik',
    owner: 'Bu Yunica',
    category: 'Kuliner',
    description: 'Memproduksi camilan berupa stik sayur dan cookies.',
    address: 'Jln. Kolonel Sugiono GG X no 12, RT.14/RW.01',
    phone: '6282141642248',
    image: logokimchastik,
    images: [
      kimchastik1,
      kimchastik2
    ],
    products: [
      { name: 'Kimchastik - Stik Sayur'},
      { name: 'Kimchacookies - Homemade Cookies'},
    ],
    featured: true,
  },
  {
    id: 'umkm-4',
    name: 'Sepatu Samba',
    owner: 'Pak Imam',
    category: ['Fashion', 'Kriya & Logam'],
    description: 'Memproduksi sepatu dan sandal kulit sesuai pemesanan konsumen, serta produk kerajinan lain seperti pipa rokok, pisau, dan sangkar burung.',
    address: 'Jln. Kolonel Sugiono GG 8, RT.06/RW.01',
    phone: '6285815146529',
    image: sepatu1,
    images: [
      sepatu1,
      sepatu2,
      pisau1,
      pisau2,
      rokok1,
      rokok2,
      sangkar1
    ],
    products: [
      { name: 'Sepatu Kulit'},
      { name: 'Sandal Kulit'},
      { name: 'Berbagai Ukuran Pisau'},
      { name: 'Pipa Rokok Kayu'},
      { name: 'Sangkar Burung'}
    ],
    featured: false,
  },
  {
    id: 'umkm-5',
    name: 'Rasafi',
    owner: 'Bu Rasmi',
    category: ['Fashion', 'Kriya & Logam', 'Kuliner'],
    description: 'Memproduksi kerajinan rajut seperti boneka, makram (tas rajut), dan kue basah seperti wajik, madu mongso, ketan hitam.',
    address: 'Jln. Kolonel Sugiono GG 2 no 10, RT.05/RW.03',
    phone: '6285706821785',
    image: boneka1,
    images: [
      kuerasmi1,
      kuerasmi2,
      boneka1,
      boneka2,
      tasrajut1,
      tasrajut2,
      tasrajut3
    ],
    products: [
      { name: 'Tas Selempang Rajut'},
      { name: 'Boneka Rajut'},
      { name: 'Kue Wajik'},
      { name: 'Madu Mongso'},
      { name: 'Ketan Hitam'}
    ],
    featured: false,
  },
  {
    id: 'umkm-6',
    name: 'Sita Collection',
    owner: 'Bu Suri',
    category: 'Fashion',
    description: 'Memproduksi seragam sekolah mulai dari TK sampai SMA.',
    address: 'Jln. Kolonel Sugiono GG VI no 20',
    phone: '62816558929',
    image: seragam1,
    images: [
      seragam1,
      seragam2,
      seragam3,
      seragam4
    ],
    products: [
      { name: 'Seragam Batik Sekolah'},
      { name: 'Seragam Olahraga Sekolah'},
      { name: 'Seragam Nasional Sekolah'},
    ],
    featured: false,
  }
];
