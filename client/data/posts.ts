import { Post } from '@/types/blog';

export const posts: Post[] = [
  {
    slug: 'mastering-the-art-of-storytelling',
    title: 'Mastering the Art of Storytelling in Modern Writing',
    excerpt: 'Exploring how contemporary writers blend traditional narrative techniques with innovative approaches to captivate readers in the digital age.',
    author: 'Sarah Mitchell',
    tags: ['Storytelling', 'Creative Writing', 'Narrative'],
    category: 'Craft',
    cover: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop',
    date: '2024-01-15',
    published: true,
    featured: true,
    readingTime: 8,
    content: `# Mastering the Art of Storytelling

The art of storytelling has evolved dramatically in the digital age, yet its core principles remain timeless. Great stories still require compelling characters, engaging plots, and emotional resonance.

## The Evolution of Narrative

Modern writers face unique challenges and opportunities. The digital landscape has shortened attention spans while simultaneously creating new avenues for storytelling through interactive media, serialized content, and multimedia integration.

## Key Elements of Compelling Stories

1. **Character Development**: Create multi-dimensional characters that readers can relate to
2. **Authentic Voice**: Develop a unique narrative voice that stands out
3. **Emotional Arc**: Guide readers through a transformative journey
4. **Pacing**: Balance action with reflection to maintain engagement

## Conclusion

The future of storytelling lies in embracing both tradition and innovation, crafting narratives that honor the past while boldly stepping into the future.`
  },
  {
    slug: 'the-power-of-minimalist-writing',
    title: 'The Power of Minimalist Writing: Less is More',
    excerpt: 'Discover how stripping away unnecessary words can amplify your message and create more impactful prose.',
    author: 'James Chen',
    tags: ['Minimalism', 'Style', 'Editing'],
    category: 'Technique',
    cover: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=800&auto=format&fit=crop',
    date: '2024-01-10',
    published: true,
    featured: true,
    readingTime: 6,
    content: `# The Power of Minimalist Writing

Ernest Hemingway once said, "Write hard and clear about what hurts." This philosophy embodies the essence of minimalist writing—conveying maximum meaning with minimum words.

## Why Less is More

Every word should earn its place on the page. Minimalist writing forces authors to distill their ideas to their purest form, creating prose that resonates more deeply with readers.

## Practical Techniques

- Remove redundant modifiers
- Use strong, specific verbs
- Eliminate filler words
- Trust your reader's intelligence

The art of omission is often more powerful than the art of inclusion.`
  },
  {
    slug: 'building-authentic-dialogue',
    title: 'Building Authentic Dialogue That Brings Characters to Life',
    excerpt: 'Learn the secrets to crafting dialogue that sounds natural, reveals character, and advances your plot seamlessly.',
    author: 'Sarah Mitchell',
    tags: ['Dialogue', 'Character', 'Fiction'],
    category: 'Craft',
    cover: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=800&auto=format&fit=crop',
    date: '2024-01-05',
    published: true,
    featured: false,
    readingTime: 7,
    content: `# Building Authentic Dialogue

Dialogue is one of the most powerful tools in a writer's arsenal. When done well, it reveals character, advances plot, and creates rhythm in your narrative.

## The Art of Listening

The best dialogue writers are keen observers of real conversation. They notice speech patterns, verbal tics, and the way people really talk—not how we think they talk.

## Key Principles

1. Each character should have a distinct voice
2. Subtext is often more important than the actual words
3. Conflict drives compelling dialogue
4. Read it aloud to test authenticity

Remember: people rarely say exactly what they mean.`
  },
  {
    slug: 'the-writers-guide-to-research',
    title: "The Writer's Guide to Effective Research",
    excerpt: 'Master the research techniques that will add depth, authenticity, and credibility to your writing projects.',
    author: 'Emily Rodriguez',
    tags: ['Research', 'Non-fiction', 'Process'],
    category: 'Process',
    cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&auto=format&fit=crop',
    date: '2023-12-28',
    published: true,
    featured: false,
    readingTime: 9,
    content: `# The Writer's Guide to Effective Research

Research is the foundation of credible, engaging writing. Whether you're writing fiction or non-fiction, thorough research adds layers of authenticity that readers can feel.

## Research Strategies

- Start broad, then narrow your focus
- Use primary sources when possible
- Interview experts in the field
- Visit locations if feasible
- Keep meticulous notes

## Balancing Research and Writing

The challenge is knowing when to stop researching and start writing. Research should inform your work, not paralyze it.`
  },
  {
    slug: 'overcoming-writers-block',
    title: "Overcoming Writer's Block: Proven Strategies",
    excerpt: "Practical techniques to break through creative barriers and reignite your passion for writing.",
    author: 'James Chen',
    tags: ['Productivity', 'Creativity', 'Mental Health'],
    category: 'Process',
    cover: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=800&auto=format&fit=crop',
    date: '2023-12-20',
    published: true,
    featured: false,
    readingTime: 5,
    content: `# Overcoming Writer's Block

Every writer faces the dreaded blank page. The key is having strategies to push through these creative dry spells.

## Understanding the Block

Writer's block isn't laziness—it's often perfectionism, fear, or creative exhaustion in disguise.

## Proven Techniques

1. **Free Writing**: Write without stopping for 10 minutes
2. **Change Your Environment**: New settings spark new ideas
3. **Read Voraciously**: Fill the creative well
4. **Set Small Goals**: 100 words is better than zero
5. **Exercise**: Physical movement unlocks mental creativity

Remember: writing is a practice, not a performance.`
  },
  {
    slug: 'the-revision-process',
    title: 'The Revision Process: Transforming Drafts into Masterpieces',
    excerpt: 'Explore systematic approaches to revision that will elevate your writing from good to exceptional.',
    author: 'Emily Rodriguez',
    tags: ['Editing', 'Revision', 'Craft'],
    category: 'Technique',
    cover: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=800&auto=format&fit=crop',
    date: '2023-12-15',
    published: true,
    featured: false,
    readingTime: 10,
    content: `# The Revision Process

Writing is rewriting. The first draft is just the beginning of the creative journey, not the end.

## Layers of Revision

1. **Structural Edit**: Does the overall architecture work?
2. **Content Edit**: Are ideas clear and well-developed?
3. **Line Edit**: Is every sentence as strong as it can be?
4. **Copy Edit**: Grammar, spelling, punctuation

## The Cooling Period

Always let your work rest before revising. Distance provides perspective that immediate review cannot.

## Getting Feedback

Trusted readers can spot issues you're too close to see. Choose them wisely and listen with an open mind.`
  }
];

export const getFeaturedPosts = () => posts.filter(p => p.featured);
export const getLatestPosts = (limit = 6) => posts.slice(0, limit);
export const getPostBySlug = (slug: string) => posts.find(p => p.slug === slug);
