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
    name: "Matthew Valero",
    bio: "Editor and writer focused on clarity, craft, and practical writing advice.",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets%2F8bc7a632da45401e992b4965a5d2c233%2Fcfbace838d1e4637be774003b87f6e99",
    role: "Writer",
    social: {
      twitter: "https://twitter.com/matthewvalero",
    },
  },
  {
    id: "lucas-crespo",
    name: "Lucas Crespo",
    bio: "Writer and editor working on craft, close reading, and essays about writing.",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets%2F8bc7a632da45401e992b4965a5d2c233%2F26386550c46d46119b041e03fd795048",
    role: "Writer",
    social: {
      twitter: "",
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
  {
    id: "matthew-valero",
    name: "Matthew Valero",
    bio: "Editor and writer focused on clarity, craft, and practical writing advice.",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets%2F8bc7a632da45401e992b4965a5d2c233%2Fcfbace838d1e4637be774003b87f6e99",
    role: "Writer",
    social: {
      twitter: "https://twitter.com/matthewvalero",
    },
  },
];

export const getAuthorById = (id: string) => authors.find((a) => a.id === id);
