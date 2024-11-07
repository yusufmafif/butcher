'use client'

import React, { useState, useEffect, useCallback, useRef, ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from "next/link";

interface BannerItem {
  title: string,
  id: number
  name: string
  description: string
  imageUrl: string
}

interface BannerSlideProps {
  items: BannerItem[]
  interval?: number
}

export default function Component({
  items = [],
  interval = 5000
}: BannerSlideProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [startX, setStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const slideRef = useRef<HTMLDivElement>(null)

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

  const handleDragStart = (clientX: number) => {
    setStartX(clientX)
    setIsDragging(true)
    setDragOffset(0)
  }

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return
    const diff = startX - clientX
    setDragOffset(diff)
  }

  const handleDragEnd = () => {
    if (!isDragging) return
    const threshold = window.innerWidth * 0.15 // 15% of screen width

    if (dragOffset > threshold) {
      nextSlide()
    } else if (dragOffset < -threshold) {
      prevSlide()
    }

    setIsDragging(false)
    setDragOffset(0)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.targetTouches[0].clientX)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX)
  }

  const handleMouseUp = () => {
    handleDragEnd()
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd()
    }
  }

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      if (isDragging) {
        handleDragEnd()
      }
    }

    document.addEventListener('mouseup', handleGlobalMouseUp)
    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp)
    }
  }, [isDragging])

  const getSlideStyle = () => {
    const baseTransform = `translateX(-${currentIndex * 100}%)`
    if (isDragging) {
      const dragPercentage = (dragOffset / window.innerWidth) * 100
      return {
        transform: `${baseTransform} translateX(-${dragPercentage}%)`,
        transition: 'none'
      }
    }
    return {
      transform: baseTransform,
      transition: 'transform 300ms ease-in-out'
    }
  }

  return (
    <div className="relative max-w-[1080px] mx-auto overflow-hidden rounded-lg shadow-md">
      <div
        ref={slideRef}
        className="flex cursor-grab active:cursor-grabbing"
        style={getSlideStyle()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleDragEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {items.map((item) => (
          <div key={item.id} className="w-full flex-shrink-0">

            <div className="relative h-64 md:h-80">
              <Link href="/produk" className="w-full">
                <img
                  src={item.imageUrl}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </Link>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center p-4">
                {/* <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">{item.name}</h2> */}
                {/* <p className="text-sm md:text-lg text-white">{item.description}</p> */}
              </div>
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
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        // variant="outline"
        // size="icon"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
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