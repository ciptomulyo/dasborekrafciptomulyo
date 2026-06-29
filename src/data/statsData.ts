/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StatGroup } from '../types';

export const generalStats = {
  totalUmkm: 148,
  totalWorkers: 584,
  totalSectors: 4,
  averageRating: '4.8/5.0',
  areaSize: '234 Ha',
};

export const creativeEconomyStats: { [key: string]: StatGroup } = {
  sector: {
    title: 'Distribusi Sektor Ekraf Kreatif',
    description: 'Proporsi unit usaha berdasarkan fokus sektor ekonomi kreatif di Kelurahan Ciptomulyo.',
    items: [
      { label: 'Kuliner (Kripik, Katering, dsb.)', value: 67, percentage: 45, color: '#10b981' }, // emerald
      { label: 'Kriya & Logam (Bengkel las, Kerajinan bambu)', value: 37, percentage: 25, color: '#3b82f6' }, // blue
      { label: 'Fashion & Butik (Shibori, Jahit custom)', value: 27, percentage: 18, color: '#ec4899' }, // pink
      { label: 'Jasa Kreatif (Desain, Percetakan, dsb.)', value: 17, percentage: 12, color: '#8b5cf6' } // purple
    ],
  },
  workforce: {
    title: 'Tenaga Kerja Kreatif Sektoral',
    description: 'Jumlah pekerja lokal yang terserap di masing-masing sektor ekonomi kreatif.',
    items: [
      { label: 'Kuliner', value: 245, percentage: 42, color: '#10b981' },
      { label: 'Kriya & Logam', value: 164, percentage: 28, color: '#3b82f6' },
      { label: 'Fashion', value: 111, percentage: 19, color: '#ec4899' },
      { label: 'Jasa Kreatif', value: 64, percentage: 11, color: '#8b5cf6' }
    ],
  },
  establishedYear: {
    title: 'Lama Operasional Usaha',
    description: 'Ketahanan dan kelangsungan operasional unit usaha Ekraf di Ciptomulyo.',
    items: [
      { label: 'Kategori Legenda (10+ Tahun)', value: 22, percentage: 15, color: '#f59e0b' }, // amber
      { label: 'Kategori Mapan (5-10 Tahun)', value: 52, percentage: 35, color: '#6366f1' }, // indigo
      { label: 'Kategori Berkembang (2-5 Tahun)', value: 44, percentage: 30, color: '#14b8a6' }, // teal
      { label: 'Rintisan Baru (< 2 Tahun)', value: 30, percentage: 20, color: '#f43f5e' } // rose
    ],
  }
};
