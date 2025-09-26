"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

interface AthletePhoto {
  src: string;
  alt: string;
  title: string;
}

const athletePhotos: AthletePhoto[] = [
  {
    src: "/athlete-photos/box-jump.jpg",
    alt: "Athlete performing box jumps during competition",
    title: "Box Jump",
  },
  {
    src: "/athlete-photos/muscle-up.jpg",
    alt: "Athlete completing muscle-ups on rings",
    title: "Muscle Up",
  },
  {
    src: "/athlete-photos/oh-lunge.jpg",
    alt: "Athlete performing overhead lunges with weights",
    title: "Overhead Lunge",
  },
  {
    src: "/athlete-photos/pull-up.jpg",
    alt: "Athlete doing pull-ups during workout",
    title: "Pull Up",
  },
  {
    src: "/athlete-photos/ropeclimb.jpg",
    alt: "Athlete climbing rope in competition",
    title: "Rope Climb",
  },
  {
    src: "/athlete-photos/thruster.jpg",
    alt: "Athlete executing thrusters in competition",
    title: "Thruster",
  },
  {
    src: "/athlete-photos/sandbag-lunge.jpg",
    alt: "Athlete performing lunges with sandbag",
    title: "Sandbag Lunge",
  },
  {
    src: "/athlete-photos/squat.jpg",
    alt: "Athlete performing squats with barbell",
    title: "Squat",
  },
];

export default function AthleteCarousel() {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => new Set(prev).add(src));
  };

  const autoplayPlugin = Autoplay({
    delay: 3000,
    stopOnInteraction: true,
    stopOnMouseEnter: true,
  });

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Carousel
        plugins={[autoplayPlugin]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {athletePhotos.map((photo, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
            >
              <Card className="overflow-hidden bg-gray-900/50 border-gray-700">
                <CardContent className="p-0">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className={`object-cover transition-opacity duration-300 ${
                        loadedImages.has(photo.src)
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                      onLoad={() => handleImageLoad(photo.src)}
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {!loadedImages.has(photo.src) && (
                      <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-sunrise-gold border-t-transparent rounded-full animate-spin" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-8 gap-4">
          <CarouselPrevious className="relative left-0 top-0 translate-y-0 bg-sunrise-gold text-black hover:bg-sunrise-gold/90 border-none" />
          <CarouselNext className="relative right-0 top-0 translate-y-0 bg-sunrise-gold text-black hover:bg-sunrise-gold/90 border-none" />
        </div>
      </Carousel>
    </div>
  );
}
