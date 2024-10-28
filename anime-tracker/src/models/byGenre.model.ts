export interface byGenre {
  data: Anime[];
}

export interface Anime {
  id: string;
  type: string;
  links: Links;
  attributes: Attributes;
  relationships: Relationships;
}

export interface Links {
  self: string;
}

export interface Attributes {
  createdAt: string;
  updatedAt: string;
  slug: string;
  synopsis: string;
  description: string;
  coverImageTopOffset: number;
  titles: Titles;
  canonicalTitle: string;
  abbreviatedTitles: string[];
  averageRating: string;
  ratingFrequencies: { [key: string]: string };
  userCount: number;
  favoritesCount: number;
  startDate: string;
  endDate: string | null;
  nextRelease: string;
  popularityRank: number;
  ratingRank: number;
  ageRating: string;
  ageRatingGuide: string;
  subtype: string;
  status: string;
  episodeLength: number;
  totalLength: number;
  youtubeVideoId: string;
  showType: string;
  nsfw: boolean;
  posterImage: Image;
  coverImage: Image;
}

export interface Titles {
  en: string;
  en_jp: string;
  ja_jp: string;
}

export interface Image {
  tiny: string;
  large: string;
  small: string;
  medium: string;
  original: string;
}

export interface Relationships {
  genres: RelatedLinks;
  categories: RelatedLinks;
  castings: RelatedLinks;
  installments: RelatedLinks;
  reviews: RelatedLinks;
  episodes: RelatedLinks;
}

export interface RelatedLinks {
  links: {
    self: string;
    related: string;
  };
}
