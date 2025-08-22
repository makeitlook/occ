import { Venue } from "@/types/venue";

export const venues: Venue[] = [
  {
    id: 1,
    name: "The Royal Observatory",
    location: "Greenwich, London",
    category: "wedding",
    type: "Historic Landmark",
    capacity: "150 guests",
    description:
      "A magnificent historic venue offering breathtaking views across London, perfect for sophisticated weddings and celebrations.",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f29c1fe8ea?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1519167758481-83f29c1fe8ea?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
    ],
    amenities: [
      "Professional catering kitchen",
      "Audio/visual equipment",
      "Dedicated parking",
      "Climate control",
      "Security systems",
      "Bridal preparation room",
    ],
    pricing: {
      baseRate: "£3,500 - £5,500",
      includes: "Venue hire, basic lighting, security, cleaning",
    },
  },
  {
    id: 2,
    name: "Riverside Manor Estate",
    location: "Surrey Countryside",
    category: "wedding",
    type: "Country Estate",
    capacity: "200 guests",
    description:
      "An enchanting riverside estate combining elegant interiors with stunning natural surroundings.",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571055107734-8039dc1cb326?w=1200&h=800&fit=crop",
    ],
    amenities: [
      "Historic manor house",
      "Landscaped gardens",
      "Riverside location",
      "On-site accommodation",
      "Private dock",
      "Event coordination",
    ],
    pricing: {
      baseRate: "£4,500 - £7,000",
      includes: "Venue hire, garden access, basic setup, security",
    },
  },
  {
    id: 3,
    name: "The Modern Gallery",
    location: "Shoreditch, London",
    category: "corporate",
    type: "Contemporary Space",
    capacity: "100 guests",
    description:
      "A sleek contemporary venue perfect for corporate events, product launches, and modern celebrations.",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=1200&h=800&fit=crop",
    ],
    amenities: [
      "Modern architecture",
      "AV equipment included",
      "High-speed WiFi",
      "Flexible layout",
      "Natural lighting",
      "Breakout rooms",
    ],
    pricing: {
      baseRate: "£2,500 - £4,000",
      includes: "Venue hire, AV equipment, WiFi, basic setup",
    },
  },
  {
    id: 4,
    name: "Heritage Hall",
    location: "Central London",
    category: "corporate",
    type: "Historic Building",
    capacity: "300 guests",
    description:
      "A prestigious historic venue offering grandeur and elegance for the most important corporate gatherings.",
    image:
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1519167758481-83f29c1fe8ea?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=800&fit=crop",
    ],
    amenities: [
      "Grand ballroom",
      "Ornate architecture",
      "Crystal chandeliers",
      "Valet parking",
      "Professional lighting",
      "Green rooms",
    ],
    pricing: {
      baseRate: "£5,000 - £8,500",
      includes: "Venue hire, professional lighting, valet service, security",
    },
  },
  {
    id: 5,
    name: "Garden Pavilion",
    location: "Richmond, London",
    category: "private",
    type: "Garden Venue",
    capacity: "80 guests",
    description:
      "An elegant glass pavilion nestled in beautiful gardens, perfect for intimate celebrations and private gatherings.",
    image:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571055107734-8039dc1cb326?w=1200&h=800&fit=crop",
    ],
    amenities: [
      "Glass pavilion design",
      "Beautiful gardens",
      "Natural lighting",
      "Built-in bar",
      "Sound system",
      "Outdoor space",
    ],
    pricing: {
      baseRate: "£1,800 - £3,200",
      includes: "Venue hire, garden access, sound system, basic setup",
    },
  },
  {
    id: 6,
    name: "The Artisan Loft",
    location: "Clapham, London",
    category: "private",
    type: "Industrial Chic",
    capacity: "120 guests",
    description:
      "A stylish converted warehouse offering industrial elegance with modern amenities for unique celebrations.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=1200&h=800&fit=crop",
    ],
    amenities: [
      "Exposed brick walls",
      "High ceilings",
      "Rooftop terrace",
      "Industrial kitchen",
      "Flexible seating",
      "Artistic lighting",
    ],
    pricing: {
      baseRate: "£2,800 - £4,500",
      includes:
        "Venue hire, rooftop access, kitchen facilities, basic lighting",
    },
  },
];

export const venuesCTAData = {
  backgroundImage: "/images/cta-background.jpg",
  heading: {
    preface: "Need Help Finding the Perfect",
    highlight: "Venue?",
  },
  description:
    "Our venue specialists can help you discover unique locations that perfectly match your vision and requirements.",
  primaryAction: {
    label: "Request Venue Consultation",
    href: "/contact",
    type: "elegant-secondary",
  },
};
