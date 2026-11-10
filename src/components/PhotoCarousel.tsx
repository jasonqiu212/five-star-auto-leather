import { Carousel } from '@mantine/carousel';
import { MantineProvider } from '@mantine/core';

export interface CarouselPhoto {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface PhotoCarouselProps {
  photos: CarouselPhoto[];
  label?: string;
}

export const PhotoCarousel = ({ photos, label = 'Our latest works' }: PhotoCarouselProps) => (
  <MantineProvider>
    <Carousel
      slideSize={{ base: '100%', sm: '50%', lg: '33.333333%' }}
      slideGap={{ base: 'sm' }}
      withControls={photos.length > 1}
      controlSize={48}
      controlsOffset="sm"
      emblaOptions={{ loop: true, align: 'start' }}
      aria-label={label}
      previousControlProps={{ 'aria-label': 'Previous photo' }}
      nextControlProps={{ 'aria-label': 'Next photo' }}
    >
      {photos.map((photo) => (
        <Carousel.Slide key={photo.src}>
          <img
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading="lazy"
            decoding="async"
            className="w-full rounded-lg object-cover"
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  </MantineProvider>
);
