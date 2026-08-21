export interface Testimonial {
  name: string;
  paragraphs: string[];
  rating?: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const starCount = Math.max(0, Math.min(5, Math.round(testimonial.rating ?? 5)));

  return (
    <article className="relative flex h-full flex-col items-center overflow-hidden bg-white px-6 py-8 text-center">
      <div
        className="absolute -top-20 -right-20 z-0 size-40 rounded-full bg-red-600"
        aria-hidden="true"
      >
        <span className="absolute bottom-2 left-10 font-serif text-6xl text-white">”</span>
      </div>

      <p className="text-2xl" style={{ fontFamily: "'RacingSansOne', sans-serif" }}>
        {testimonial.name}
      </p>

      <div
        className="mt-4 flex items-center gap-1 text-amber-400"
        role="img"
        aria-label={`${starCount} out of 5 stars`}
      >
        {Array.from({ length: starCount }, (_, index) => (
          <svg key={index} viewBox="0 0 24 24" className="size-6 fill-current" aria-hidden="true">
            <path d="m12 2.3 2.95 5.98 6.6.96-4.78 4.66 1.13 6.58L12 17.38l-5.9 3.1 1.13-6.58-4.78-4.66 6.6-.96L12 2.3Z" />
          </svg>
        ))}
      </div>

      <blockquote className="mt-4">
        {testimonial.paragraphs.map((paragraph) => (
          <p key={paragraph} className="not-first:mt-2">
            {paragraph}
          </p>
        ))}
      </blockquote>
    </article>
  );
};
