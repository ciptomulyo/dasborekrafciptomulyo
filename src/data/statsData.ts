/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { StatGroup } from '../types';

export const generalStats = {
  totalkk: 3852,
  totalcitizens: 12939,
  postalcode: 65148,
  areaSize: '234 Ha',
};

export const creativeEconomyStats: { [key: string]: StatGroup } = {
  sector: {
    title: 'Sebaran RT per RW',
    description: 'Jumlah Rukun Tetangga (RT) di masing-masing Rukun Warga (RW) Kelurahan Ciptomulyo (Total terdapat 5 RW).',
    items: [
      { label: 'RW 1', value: 16, percentage: 25.81, color: '#3b82f6' },
      { label: 'RW 2', value: 14, percentage: 22.58, color: '#10b981' },
      { label: 'RW 3', value: 14, percentage: 22.58, color: '#f59e0b' },
      { label: 'RW 4', value: 6, percentage: 9.68, color: '#ec4899' },
      { label: 'RW 5', value: 12, percentage: 19.35, color: '#8b5cf6' }
    ],
  },
  workforce: {
    title: 'Tenaga Kerja',
    description: 'Jumlah tenaga kerja berusia 18-56 tahun berdasarkan jenis kelamin di Ciptomulyo.',
    items: [
      { label: 'Pria yang Bekerja', value: 2475, percentage: 38.72, color: '#10b981' },
      { label: 'Pria yang Tidak Bekerja', value: 1500, percentage: 23.47, color: '#3b82f6' },
      { label: 'Wanita yang Bekerja', value: 635, percentage: 9.93, color: '#ec4899' },
      { label: 'Wanita yang Tidak Bekerja', value: 1782, percentage: 27.88, color: '#8b5cf6' }
    ],
  },
  establishedYear: {
    title: 'Sebaran Jenis Kelamin',
    description: 'Sebaran jumlah penduduk Kelurahan Ciptomulyo berdasarkan jenis kelamin pria dan wanita.',
    items: [
      { label: 'Pria', value: 6713, percentage: 50.27, color: '#3b82f6' },
      { label: 'Wanita', value: 6641, percentage: 49.73, color: '#ec4899' }
    ],
  }
};
