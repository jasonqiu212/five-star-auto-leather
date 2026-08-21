import { Carousel } from '@mantine/carousel';
import { MantineProvider } from '@mantine/core';
import type { EmblaCarouselType } from 'embla-carousel';
import { useEffect, useState } from 'react';
import { TestimonialCard, type Testimonial } from './TestimonialCard';

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  rotationInterval?: number;
}

export const TestimonialsCarousel = ({
  testimonials,
  rotationInterval = 6500,
}: TestimonialsCarouselProps) => {
  const [embla, setEmbla] = useState<EmblaCarouselType | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!embla || isPaused || reducedMotion || testimonials.length < 2) return undefined;

    const timer = window.setInterval(() => embla.scrollNext(), rotationInterval);
    return () => window.clearInterval(timer);
  }, [embla, isPaused, rotationInterval, testimonials.length]);

  return (
    <MantineProvider>
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setIsPaused(false);
          }
        }}
      >
        <Carousel
          height={520}
          slideSize={{ base: '100%', sm: '50%', lg: '33.333333%' }}
          slideGap={{ base: 0, sm: 'md', lg: 'lg' }}
          withControls
          controlSize={48}
          controlsOffset="sm"
          getEmblaApi={setEmbla}
          emblaOptions={{ loop: true, align: 'start' }}
          aria-label="Customer testimonials"
        >
          {testimonials.map((testimonial) => (
            <Carousel.Slide key={testimonial.name}>
              <TestimonialCard testimonial={testimonial} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </MantineProvider>
  );
};
