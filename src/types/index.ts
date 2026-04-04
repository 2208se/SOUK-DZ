export type ProductCategory = "men" | "women" | "kids" | "accessories";

export type ProductCondition = "new" | "like_new" | "good" | "fair";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  size: string;
  brand: string;
  condition: ProductCondition;
  category: ProductCategory;
  images: string[];
  sellerId: string;
  createdAt: string;
}

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  location: string;
  bio: string;
  rating: number;
  reviewCount: number;
  memberSince: string;
}

export interface Review {
  id: string;
  authorId: string;
  authorName: string;
  rating: number;
  text: string;
  date: string;
}

export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  body: string;
  sentAt: string;
}

export interface Conversation {
  id: string;
  peerId: string;
  peerName: string;
  peerAvatar: string;
  lastMessage: string;
  lastMessageAt: string;
  unread: number;
}
