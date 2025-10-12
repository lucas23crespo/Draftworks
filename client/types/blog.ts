export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  tags: string[];
  category: string;
  cover: string;
  date: string;
  published: boolean;
  featured: boolean;
  content?: string;
  readingTime?: number;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  role: string;
  social?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
  };
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  count: number;
}
