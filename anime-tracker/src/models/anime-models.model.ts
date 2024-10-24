export interface Anime {
  id: string;
  type: string;
  links: {
    self: string;
  };
  attributes: {
    createdAt: string;
    updatedAt: string;
    slug: string;
    synopsis: string;
    description: string;
    coverImageTopOffset: number;
    titles: {
      en: string;
      en_jp: string;
      en_us: string;
      ja_jp: string;
    };
    canonicalTitle: string;
    abbreviatedTitles: string[];
    averageRating: string;
    ratingFrequencies: {
      [key: string]: string;
    };
    userCount: number;
    favoritesCount: number;
    startDate: string;
    endDate: string;
    nextRelease: string | null;
    popularityRank: number;
    ratingRank: number;
    ageRating: string;
    ageRatingGuide: string;
    subtype: string;
    status: string;
    tba: string | null;
    posterImage: Image;
    coverImage: Image;
    episodeCount: number;
    episodeLength: number;
    totalLength: number;
    youtubeVideoId: string;
    showType: string;
    nsfw: boolean;
  };
  relationships: {
    genres: RelationshipLinks;
    categories: RelationshipLinks;
    castings: RelationshipLinks;
    installments: RelationshipLinks;
    mappings: RelationshipLinks;
    reviews: RelationshipLinks;
    mediaRelationships: RelationshipLinks;
    characters: RelationshipLinks;
    staff: RelationshipLinks;
    productions: RelationshipLinks;
    quotes: RelationshipLinks;
    episodes: RelationshipLinks;
    streamingLinks: RelationshipLinks;
    animeProductions: RelationshipLinks;
    animeCharacters: RelationshipLinks;
    animeStaff: RelationshipLinks;
  };
}

export interface Image {
  tiny: string;
  large: string;
  small: string;
  medium: string;
  original: string;
  meta: {
    dimensions: {
      tiny: {
        width: number;
        height: number;
      };
      large: {
        width: number;
        height: number;
      };
      small: {
        width: number;
        height: number;
      };
      medium: {
        width: number;
        height: number;
      };
    };
  };
}

export interface RelationshipLinks {
  links: {
    self: string;
    related: string;
  };
}
