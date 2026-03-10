export interface Testimonial {
  id: string;
  author: string;
  date: string;
  rating: number;
  body: string;
  source: 'google' | 'facebook' | 'direct';
  location?: string;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: 'darren-bent',
    author: 'Darren Bent',
    date: '2023-06-15',
    rating: 5,
    body: 'Absolutely fantastic job from RMD Flooring. Ryan and his team fitted Karndean throughout my home and the finish is incredible. Highly professional, clean and tidy workers. Would recommend to anyone looking for quality flooring.',
    source: 'google',
    location: 'Sutton Coldfield',
    featured: true,
  },
  {
    id: 'review-2',
    author: 'Sarah M.',
    date: '2024-01-20',
    rating: 5,
    body: 'We had Amtico fitted in our hallway and kitchen by RMD Flooring. The attention to detail was second to none. Ryan talked us through every option and the end result is stunning. Really pleased we chose a specialist installer over a big box store.',
    source: 'google',
    location: 'Lichfield',
  },
];
