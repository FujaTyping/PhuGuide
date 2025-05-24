"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, DollarSign, Star, Users, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ActivitiesPage() {
  const activities = [
    {
      id: 1,
      title: "Khao Sok National Park Tour",
      description: "Guided tour through ancient rainforest with wildlife spotting opportunities",
      location: "Khao Sok National Park",
      duration: "8 hours",
      price: "$$",
      category: "Nature",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      groupSize: "2-12 people",
      includes: ["Transportation", "Guide", "Lunch", "Park entrance"],
      bestTime: "Nov-Apr",
    },
    {
      id: 2,
      title: "Tapi River Boat Tour",
      description: "Scenic cruise through mangroves with stops at local fishing villages",
      location: "Tapi River",
      duration: "3 hours",
      price: "$",
      category: "Activities",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.6,
      groupSize: "1-20 people",
      includes: ["Boat ride", "Local guide", "Refreshments"],
      bestTime: "Year round",
    },
    {
      id: 3,
      title: "Street Food Walking Tour",
      description: "Explore local night markets and taste authentic Southern Thai cuisine",
      location: "Night Market",
      duration: "3 hours",
      price: "$",
      category: "Food",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      groupSize: "2-8 people",
      includes: ["Food tastings", "Local guide", "Market tour"],
      bestTime: "Evening",
    },
    {
      id: 4,
      title: "Temple Hopping Tour",
      description: "Visit historic Buddhist temples and learn about local culture",
      location: "Various Temples",
      duration: "4 hours",
      price: "$",
      category: "Culture",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      groupSize: "1-15 people",
      includes: ["Transportation", "Guide", "Temple donations"],
      bestTime: "Morning",
    },
    {
      id: 5,
      title: "Sea Kayaking Adventure",
      description: "Paddle through limestone karsts and hidden lagoons",
      location: "Coastal Areas",
      duration: "6 hours",
      price: "$$",
      category: "Activities",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.5,
      groupSize: "2-10 people",
      includes: ["Kayak equipment", "Guide", "Lunch", "Safety gear"],
      bestTime: "Nov-Apr",
    },
    {
      id: 6,
      title: "Thai Cooking Workshop",
      description: "Learn to prepare traditional Southern Thai dishes from local chefs",
      location: "Cooking School",
      duration: "4 hours",
      price: "$$",
      category: "Food",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      groupSize: "2-12 people",
      includes: ["Ingredients", "Recipes", "Meal", "Certificate"],
      bestTime: "Morning",
    },
  ]

  const categories = ["All", "Nature", "Food", "Culture", "Activities"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredActivities = activities.filter(
    (activity) => selectedCategory === "All" || activity.category === selectedCategory,
  )

  const getPriceRange = (price: string) => {
    switch (price) {
      case "$":
        return "500-1,000 THB"
      case "$$":
        return "1,000-2,500 THB"
      case "$$$":
        return "2,500+ THB"
      default:
        return "Free"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 font-poppins">Activities & Tours</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover exciting activities and guided tours to make the most of your Surat Thani experience
          </p>
        </div>

        {/* Category Filters */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-5">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="text-sm">
                {category === "Nature" && "🏞️"}
                {category === "Food" && "🍜"}
                {category === "Culture" && "🛕"}
                {category === "Activities" && "🛶"}
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredActivities.map((activity) => (
            <Card key={activity.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/3 relative">
                  <Image
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    width={300}
                    height={200}
                    className="w-full h-48 md:h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-emerald-500">{activity.category}</Badge>
                  <div className="absolute bottom-4 left-4 flex items-center bg-white/90 rounded-full px-2 py-1">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-sm font-semibold">{activity.rating}</span>
                  </div>
                </div>

                <div className="md:w-2/3 p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl mb-2">{activity.title}</CardTitle>
                    <CardDescription className="text-base">{activity.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="p-0 space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {activity.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {activity.duration}
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-2" />
                        {getPriceRange(activity.price)}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {activity.groupSize}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Includes:</h4>
                      <div className="flex flex-wrap gap-1">
                        {activity.includes.map((item) => (
                          <Badge key={item} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-1" />
                        Best: {activity.bestTime}
                      </div>
                      <div className="flex gap-2">
                        <Link href={`/activities/${activity.id}`}>
                          <Button variant="outline">Details</Button>
                        </Link>
                        <Button className="bg-emerald-500 hover:bg-emerald-600">Book Now</Button>
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Booking Information */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Booking Information</CardTitle>
            <CardDescription>Important details for booking activities in Surat Thani</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Advance Booking</h4>
                <p className="text-sm text-gray-600">
                  Book 1-3 days in advance during peak season (Nov-Apr). Same-day booking often available during low
                  season.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Cancellation Policy</h4>
                <p className="text-sm text-gray-600">
                  Most tours offer free cancellation 24 hours before the activity. Weather-related cancellations are
                  fully refundable.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">What to Bring</h4>
                <p className="text-sm text-gray-600">
                  Comfortable shoes, sun protection, insect repellent, and a waterproof bag for water activities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
