// types/gallery.ts
export type MediaType = "image" | "video";

export interface GalleryItem {
  id: number;
  type: MediaType;
  src: string;
  thumbnail?: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  location?: string;
  date?: string;
}

export interface GalleryCategory {
  id: string;
  label: string;
  count: number;
}
