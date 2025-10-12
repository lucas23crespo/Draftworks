import { Author } from "@/types/blog";

export const authors: Author[] = [
  {
    id: "sarah-mitchell",
    name: "Sarah Mitchell",
    bio: "Award-winning fiction writer and creative writing instructor with over 15 years of experience. Passionate about helping writers find their unique voice.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop",
    role: "Fiction Writer & Instructor",
    social: {
      twitter: "https://twitter.com/sarahmitchell",
      linkedin: "https://linkedin.com/in/sarahmitchell",
    },
  },
  {
    id: "james-chen",
    name: "James Chen",
    bio: "Minimalist writer and editor specializing in clarity and concision. Former journalist turned creative writing coach.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop",
    role: "Editor & Writing Coach",
    social: {
      twitter: "https://twitter.com/jameschen",
      github: "https://github.com/jameschen",
    },
  },
  {
    id: "emily-rodriguez",
    name: "Emily Rodriguez",
    bio: "Non-fiction author and researcher with a focus on narrative journalism. Published author of three critically acclaimed books.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop",
    role: "Non-fiction Author",
    social: {
      twitter: "https://twitter.com/emilyrodriguez",
      linkedin: "https://linkedin.com/in/emilyrodriguez",
      github: "https://github.com/emilyrodriguez",
    },
  },
];

export const getAuthorById = (id: string) => authors.find((a) => a.id === id);
