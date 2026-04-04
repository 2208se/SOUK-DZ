/** Major cities / wilayas for listing location filter (SRS FR-03.2). */
export const LISTING_LOCATIONS = [
  "Algiers",
  "Oran",
  "Constantine",
  "Annaba",
  "Blida",
  "Sétif",
  "Tizi Ouzou",
  "Béjaïa",
  "Mostaganem",
  "Other",
] as const;

export type ListingLocation = (typeof LISTING_LOCATIONS)[number];
