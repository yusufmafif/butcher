'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface BannerItem {
  id: number
  title: string
  description: string
  imageUrl: string
}

interface BannerSlideProps {
  items: BannerItem[]
  interval?: number
}

export default function Component({
  items = [
    { id: 1, title: "Summer Sale", description: "Up to 50% off on selected items", imageUrl: "/placeholder.svg?height=400&width=800" },
    { id: 2, title: "New Arrivals", description: "Check out our latest collection", imageUrl: "/placeholder.svg?height=400&width=800" },
    { id: 3, title: "Free Shipping", description: "On orders over $100", imageUrl: "/placeholder.svg?height=400&width=800" }
  ],
  interval = 5000
}: BannerSlideProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }, [items.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
  }, [items.length])

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, interval)
    return () => clearInterval(slideInterval)
  }, [nextSlide, interval])

  return (
    <div className="relative max-w-[1080px] mx-auto overflow-hidden rounded-lg shadow-md">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item) => (
          <div key={item.id} className="w-full flex-shrink-0">
            <div className="relative h-64 md:h-70">
              <Link href="/produk" >
                <img
                  src={item.imageUrl}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-4">
                  {/* <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">{item.title}</h2> */}
                  {/* <p className="text-sm md:text-lg text-white">{item.description}</p> */}
                </div>
              </Link>

            </div>
          </div>
        ))}
      </div>
      <button
        // variant="outline"
        // size="icon"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 hover:scale-125 transition-transform" />
      </button>
      <button
        // variant="outline"
        // size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 hover:scale-125 transition-transform  " />
      </button>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}