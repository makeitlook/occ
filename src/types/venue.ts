// types/venue.ts (Updated with Modal Data)
export interface Venue {
  id: number;
  name: string;
  location: string;
  type: string;
  capacity: string;
  description: string;
  image: string;
  // Additional data for modal
  gallery: string[];
  amenities: string[];
}

export interface VenueCategory {
  id: string;
  label: string;
}
