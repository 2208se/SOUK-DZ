import type {
  Conversation,
  Message,
  Product,
  Review,
  UserProfile,
} from "@/types";

const img = (photoSlug: string) =>
  `https://images.unsplash.com/${photoSlug}?auto=format&fit=crop&w=800&q=80`;

export const mockUsers: UserProfile[] = [
  {
    id: "u1",
    name: "Amel K.",
    avatar: img("photo-1494790108377-be9c29b29330"),
    location: "Algiers",
    bio: "Curating pre-loved pieces. Fast replies · ships within 48h.",
    rating: 4.9,
    reviewCount: 127,
    memberSince: "2023-04",
  },
  {
    id: "u2",
    name: "Yacine M.",
    avatar: img("photo-1507003211169-0a1dd7228f2d"),
    location: "Oran",
    bio: "Streetwear & sneakers. Bundle deals welcome.",
    rating: 4.7,
    reviewCount: 54,
    memberSince: "2024-01",
  },
  {
    id: "u3",
    name: "Sara B.",
    avatar: img("photo-1438761681033-6461ffad8d80"),
    location: "Constantine",
    bio: "Minimal wardrobe rotation. Everything steamed before shipping.",
    rating: 5,
    reviewCount: 89,
    memberSince: "2022-11",
  },
];

export const mockProducts: Product[] = [
  {
    id: "p1",
    title: "Oversized linen shirt — sage",
    description:
      "Worn twice, perfect for summer heat. Breathable linen blend, relaxed fit. No stains or pulls.",
    price: 2800,
    currency: "DZD",
    size: "M",
    brand: "COS",
    condition: "like_new",
    category: "women",
    images: [
      img("photo-1594633312681-425c7b97ccd1"),
      img("photo-1515372039744-b8f02a3ae446"),
    ],
    sellerId: "u1",
    location: "Algiers",
    createdAt: "2026-03-28T10:00:00Z",
  },
  {
    id: "p2",
    title: "Vintage denim jacket",
    description:
      "Classic mid-wash denim. Light fading on cuffs. Fits true to size.",
    price: 4500,
    currency: "DZD",
    size: "L",
    brand: "Levi's",
    condition: "good",
    category: "men",
    images: [img("photo-1576995853123-5a10305d93c0")],
    sellerId: "u2",
    location: "Oran",
    createdAt: "2026-03-25T14:30:00Z",
  },
  {
    id: "p3",
    title: "Merino crewneck — oatmeal",
    description:
      "Soft merino wool, no pilling. Ideal for layering in spring or office AC.",
    price: 3200,
    currency: "DZD",
    size: "S",
    brand: "& Other Stories",
    condition: "like_new",
    category: "women",
    images: [img("photo-1576566588028-4147f3842f27")],
    sellerId: "u3",
    location: "Constantine",
    createdAt: "2026-03-22T09:15:00Z",
  },
  {
    id: "p4",
    title: "Kids' puffer jacket",
    description:
      "Warm, lightweight. Worn one season. Reflective zip pull still intact.",
    price: 1900,
    currency: "DZD",
    size: "8Y",
    brand: "Zara Kids",
    condition: "good",
    category: "kids",
    images: [img("photo-1519238268790-75b65e03388d")],
    sellerId: "u1",
    location: "Algiers",
    createdAt: "2026-03-20T16:00:00Z",
  },
  {
    id: "p5",
    title: "Leather crossbody bag",
    description:
      "Structured mini bag, adjustable strap. Minor corner wear, priced accordingly.",
    price: 5200,
    currency: "DZD",
    size: "One size",
    brand: "Mango",
    condition: "acceptable",
    category: "accessories",
    images: [img("photo-1548036328-c9fa89d128fa")],
    sellerId: "u2",
    location: "Oran",
    createdAt: "2026-03-18T11:45:00Z",
  },
  {
    id: "p6",
    title: "Wide-leg trousers — black",
    description:
      "High-rise, pressed crease. Professional look, comfortable stretch waistband.",
    price: 2400,
    currency: "DZD",
    size: "M",
    brand: "Massimo Dutti",
    condition: "like_new",
    category: "women",
    images: [img("photo-1594938298603-c8148c4dae35")],
    sellerId: "u3",
    location: "Constantine",
    createdAt: "2026-03-15T08:20:00Z",
  },
  {
    id: "p7",
    title: "Running sneakers — white",
    description:
      "Light daily use, soles have plenty of life. Cleaned and deodorized.",
    price: 4100,
    currency: "DZD",
    size: "42",
    brand: "Nike",
    condition: "good",
    category: "men",
    images: [img("photo-1542291026-7eec264c27ff")],
    sellerId: "u1",
    location: "Algiers",
    createdAt: "2026-03-12T19:00:00Z",
  },
  {
    id: "p8",
    title: "Silk scarf — geometric print",
    description:
      "100% silk feel (label says polyester blend). Vibrant print, no snags.",
    price: 900,
    currency: "DZD",
    size: "One size",
    brand: "Local boutique",
    condition: "new",
    category: "accessories",
    images: [img("photo-1584917865442-de89df76afd3")],
    sellerId: "u3",
    location: "Sétif",
    createdAt: "2026-03-10T12:00:00Z",
  },
];

export const mockReviews: Review[] = [
  {
    id: "r1",
    authorId: "ux",
    authorName: "Lina H.",
    rating: 5,
    text: "Item exactly as described, shipped quickly to Bab Ezzouar. Merci!",
    date: "2026-02-14",
  },
  {
    id: "r2",
    authorId: "uy",
    authorName: "Karim D.",
    rating: 5,
    text: "Great communication and careful packaging.",
    date: "2026-01-03",
  },
  {
    id: "r3",
    authorId: "uz",
    authorName: "Nadia F.",
    rating: 4,
    text: "Lovely seller. Minor delay but worth the wait.",
    date: "2025-12-20",
  },
];

export const mockConversations: Conversation[] = [
  {
    id: "c1",
    peerId: "u2",
    peerName: "Yacine M.",
    peerAvatar: mockUsers[1].avatar,
    lastMessage: "Can you hold until Friday?",
    lastMessageAt: "2026-04-04T09:12:00Z",
    unread: 1,
    listingId: "p2",
    listingTitle: "Vintage denim jacket",
    listingImage: mockProducts[1].images[0],
    listingPrice: mockProducts[1].price,
  },
  {
    id: "c2",
    peerId: "u3",
    peerName: "Sara B.",
    peerAvatar: mockUsers[2].avatar,
    lastMessage: "Thanks — sent via Yalidine.",
    lastMessageAt: "2026-04-03T18:40:00Z",
    unread: 0,
    listingId: "p3",
    listingTitle: "Merino crewneck — oatmeal",
    listingImage: mockProducts[2].images[0],
    listingPrice: mockProducts[2].price,
  },
];

export const mockMessagesByConversation: Record<string, Message[]> = {
  c1: [
    {
      id: "m1",
      conversationId: "c1",
      senderId: "u2",
      body: "Hi! Is the jacket still available?",
      sentAt: "2026-04-03T20:00:00Z",
    },
    {
      id: "m2",
      conversationId: "c1",
      senderId: "me",
      body: "Yes, still available. Happy to answer questions.",
      sentAt: "2026-04-03T20:05:00Z",
    },
    {
      id: "m3",
      conversationId: "c1",
      senderId: "u2",
      body: "Can you hold until Friday?",
      sentAt: "2026-04-04T09:12:00Z",
    },
  ],
  c2: [
    {
      id: "m4",
      conversationId: "c2",
      senderId: "me",
      body: "Did you ship the sweater?",
      sentAt: "2026-04-02T10:00:00Z",
    },
    {
      id: "m5",
      conversationId: "c2",
      senderId: "u3",
      body: "Thanks — sent via Yalidine.",
      sentAt: "2026-04-03T18:40:00Z",
    },
  ],
};

export function getUserById(id: string): UserProfile | undefined {
  return mockUsers.find((u) => u.id === id);
}

export function getProductById(id: string): Product | undefined {
  return mockProducts.find((p) => p.id === id);
}

export function getProductsBySeller(sellerId: string): Product[] {
  return mockProducts.filter((p) => p.sellerId === sellerId);
}
