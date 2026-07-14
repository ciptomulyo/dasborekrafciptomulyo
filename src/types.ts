/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface StatGroup {
  title: string;
  description: string;
  items: {
    label: string;
    value: number;
    percentage?: number;
    color?: string;
  }[];
}

