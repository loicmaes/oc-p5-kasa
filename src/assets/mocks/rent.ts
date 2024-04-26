export type Owner = {
  firstName: string;
  lastName: string;
  avatar?: string;
}
export type Rent = {
  id: string;
  title: string;
  location: string;
  tags: string[];
  description: string;
  equipments: string[];
  gallery: string[];
  mark: number;
  owner: Owner;
}

export const rents: (Rent | undefined)[] = [
  {
    id: 'loft_cozy_sur_le_canal_saint-martin',
    title: 'Loft cozy sur le Canal Saint-Martin',
    description: 'À venir...',
    gallery: [
        'cozy_loft_sur_le_canal_saint-martin.png',
        'cozy_loft-2.webp'
    ],
    location: 'Paris, Île-de-France',
    tags: [
        'Cozy',
        'Canal',
        'Paris 10'
    ],
    equipments: [
        'Climatisation',
        'Wifi',
        'Cuisine',
        'Espace de travail',
        'Fer à repasser',
        'Sèche-Cheveux',
        'Cintres',
    ],
    mark: 3,
    owner: {
      firstName: 'Alexandre',
      lastName: 'DUMAS',
    }
  },
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
];
