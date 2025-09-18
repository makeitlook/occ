"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader/SectionHeader";

// Updated testimonials data structure for videos
const videoTestimonials = [
  {
    id: 1,
    videoUrl: "/testimonials/testimonial-1.mp4",
    author: "Sarah Johnson",
    occasion: "Wedding Reception",
    location: "London, UK",
    rating: 5,
    thumbnail: "/testimonials/thumbnail-1.jpg",
  },
  {
    id: 2,
    videoUrl: "/testimonials/testimonial-2.mp4",
    author: "Michael Chen",
    occasion: "Corporate Event",
    location: "Manchester, UK",
    rating: 5,
    thumbnail: "/testimonials/thumbnail-2.jpg",
  },
  {
    id: 3,
    videoUrl: "/testimonials/testimonial-3.mp4",
    author: "Priya Patel",
    occasion: "Birthday Celebration",
    location: "Birmingham, UK",
    rating: 5,
    thumbnail: "/testimonials/thumbnail-3.jpg",
  },
];

const VideoTestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-rotation for testimonials (pause when video is playing)
  useEffect(() => {
    if (!isAutoPlaying || isVideoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === videoTestimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, isVideoPlaying]);

  // Reset video when testimonial changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setIsVideoPlaying(false);
    }
  }, [currentIndex]);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
    setIsAutoPlaying(false);
  };

  const handleVideoEnded = () => {
    setIsVideoPlaying(false);
    setIsAutoPlaying(true);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const testimonialVariants = {
    enter: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
  };

  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-b from-neutral/5 via-divider-main to-neutral overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-gradient-to-br from-elements-primary-main/4 to-elements-secondary-main/4 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-tl from-elements-secondary-main/4 to-elements-primary-main/4 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Section Header - Left Side */}
          <div className="lg:col-span-5">
            <SectionHeader
              badge="Video Stories"
              title="Real Experiences"
              subtitle="From Real Clients"
              description="Watch our clients share their authentic experiences and discover why they chose OCC Events and Catering for their special moments."
              alignment="left"
              maxWidth="full"
              showDecorator={true}
              itemVariants={itemVariants}
            />

            {/* Client Info Display */}
            <motion.div variants={itemVariants} className="mt-8">
              <div className="bg-card-background/60 backdrop-blur-sm border border-border-dimmed/20 rounded-2xl p-6 space-y-4">
                {/* Star Rating */}
                <div className="flex space-x-1">
                  {[...Array(videoTestimonials[currentIndex].rating)].map(
                    (_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-elements-primary-main fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    )
                  )}
                </div>

                {/* Client Details */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-text-primary text-sm">
                    {videoTestimonials[currentIndex].author}
                  </h4>
                  <p className="text-text-secondary font-medium">
                    {videoTestimonials[currentIndex].occasion}
                  </p>
                  <p className="text-text-tertiary text-sm">
                    {videoTestimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Video Testimonials - Right Side */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div
              className="relative flex justify-center"
              onMouseEnter={() => !isVideoPlaying && setIsAutoPlaying(false)}
              onMouseLeave={() => !isVideoPlaying && setIsAutoPlaying(true)}
            >
              {/* Phone-like Container */}
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-[3rem] p-3 shadow-2xl">
                  {/* Screen */}
                  <div className="relative bg-black rounded-[2.5rem] overflow-hidden w-[280px] h-[500px] lg:w-[320px] lg:h-[570px]">
                    {/* Video Container */}
                    <div className="absolute inset-0">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentIndex}
                          variants={testimonialVariants}
                          initial="enter"
                          animate="center"
                          exit="exit"
                          transition={{
                            duration: 0.6,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                          className="absolute inset-0"
                        >
                          <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            poster={videoTestimonials[currentIndex].thumbnail}
                            onPlay={handleVideoPlay}
                            onEnded={handleVideoEnded}
                            onPause={handleVideoPause}
                            controls
                          >
                            <source
                              src={videoTestimonials[currentIndex].videoUrl}
                              type="video/mp4"
                            />
                            Your browser does not support the video tag.
                          </video>

                          {/* Play Button Overlay */}
                          {!isVideoPlaying && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                              <button
                                onClick={() => videoRef.current?.play()}
                                className="bg-white/90 backdrop-blur-sm rounded-full p-4 hover:bg-white transition-colors duration-300 hover:scale-110 transform"
                              >
                                <svg
                                  className="w-8 h-8 text-neutral-900 ml-1"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </button>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Phone UI Elements */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1.5 bg-white/20 rounded-full"></div>
                  </div>

                  {/* Phone Side Buttons */}
                  <div className="absolute -left-1 top-20 w-1 h-8 bg-neutral-700 rounded-l-lg"></div>
                  <div className="absolute -left-1 top-32 w-1 h-12 bg-neutral-700 rounded-l-lg"></div>
                  <div className="absolute -left-1 top-48 w-1 h-12 bg-neutral-700 rounded-l-lg"></div>
                </div>

                {/* Reflection Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-[3rem] pointer-events-none"></div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-8">
              {videoTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-elements-primary-main scale-125"
                      : "bg-border-dimmed hover:bg-elements-primary-main/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Video Controls Info */}
            <div className="text-center mt-4">
              <p className="text-text-tertiary text-sm">
                {isVideoPlaying
                  ? "Playing testimonial"
                  : "Click play to watch testimonial"}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;
