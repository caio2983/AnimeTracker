import { Anime } from './trending-models.model';

export interface Genre {
  id: string;
  type: string;
  links: {
    self: string;
  };
  attributes: {
    createdAt: string;
    updatedAt: string;
    name: string;
    slug: string;
    description: string | null;
  };
  animes: Anime[];
}
