"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Search, Star, Clock, DollarSign } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("")

  const destinations = [
    {
      id: 1,
      name: "Khao Sok National Park",
      category: "Nature",
      image: "/placeholder.svg?height=250&width=400",
      description: "Ancient rainforest with limestone cliffs and pristine lakes",
      rating: 4.8,
      duration: "Full Day",
      price: "$$",
      tags: ["Adventure", "Eco-Friendly"],
    },
    {
      id: 2,
      name: "Tapi River Cruise",
      category: "Activities",
      image: "/placeholder.svg?height=250&width=400",
      description: "Scenic boat ride through mangroves and local villages",
      rating: 4.6,
      duration: "3 Hours",
      price: "$",
      tags: ["Relaxing", "Family"],
    },
    {
      id: 3,
      name: "Night Market Food Tour",
      category: "Food",
      image: "/placeholder.svg?height=250&width=400",
      description: "Taste authentic Southern Thai street food and delicacies",
      rating: 4.9,
      duration: "2 Hours",
      price: "$",
      tags: ["Food", "Culture"],
    },
    {
      id: 4,
      name: "Wat Chalong Temple",
      category: "Culture",
      image: "/placeholder.svg?height=250&width=400",
      description: "Historic Buddhist temple with stunning architecture",
      rating: 4.7,
      duration: "2 Hours",
      price: "Free",
      tags: ["Culture", "Spiritual"],
    },
    {
      id: 5,
      name: "Kayaking Adventure",
      category: "Activities",
      image: "/placeholder.svg?height=250&width=400",
      description: "Paddle through hidden lagoons and sea caves",
      rating: 4.5,
      duration: "Half Day",
      price: "$$",
      tags: ["Adventure", "Water Sports"],
    },
    {
      id: 6,
      name: "Local Cooking Class",
      category: "Food",
      image: "/placeholder.svg?height=250&width=400",
      description: "Learn to cook traditional Southern Thai dishes",
      rating: 4.8,
      duration: "4 Hours",
      price: "$$",
      tags: ["Food", "Learning"],
    },
  ]

  const categories = ["All", "Nature", "Food", "Culture", "Activities"]

  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredDestinations = destinations.filter((dest) => {
    const matchesCategory = selectedCategory === "All" || dest.category === selectedCategory
    const matchesSearch =
      dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 font-poppins">Explore Surat Thani</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing destinations and authentic experiences in the heart of Southern Thailand
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="grid w-full grid-cols-5 mb-8">
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
        </div>

        {/* Destinations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination) => (
            <Card
              key={destination.id}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-emerald-500">{destination.category}</Badge>
                <div className="absolute bottom-4 left-4 flex items-center bg-white/90 rounded-full px-2 py-1">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span className="text-sm font-semibold">{destination.rating}</span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{destination.name}</CardTitle>
                <CardDescription>{destination.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {destination.duration}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {destination.price}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {destination.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link href={`/explore/${destination.id}`}>
                      <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                        <MapPin className="h-4 w-4 mr-1" />
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No destinations found matching your criteria.</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
