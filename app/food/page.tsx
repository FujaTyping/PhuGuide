"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Star, MapPin, Clock, DollarSign, Utensils, Coffee } from "lucide-react"
import Image from "next/image"

export default function FoodGuidePage() {
  const [selectedCategory, setSelectedCategory] = useState("dishes")

  const localDishes = [
    {
      id: 1,
      name: "Gaeng Som",
      description: "Spicy and sour curry with fish, vegetables, and tamarind",
      image: "/placeholder.svg?height=200&width=300",
      spiceLevel: "🌶️🌶️🌶️",
      price: "80-120 THB",
      category: "Main Course",
      ingredients: ["Fish", "Tamarind", "Chili", "Vegetables"],
      whereToFind: "Local restaurants, street stalls",
    },
    {
      id: 2,
      name: "Khanom Jeen Nam Ya",
      description: "Fresh rice noodles with spicy fish curry sauce",
      image: "/placeholder.svg?height=200&width=300",
      spiceLevel: "🌶️🌶️",
      price: "40-80 THB",
      category: "Noodles",
      ingredients: ["Rice noodles", "Fish curry", "Herbs", "Vegetables"],
      whereToFind: "Morning markets, local eateries",
    },
    {
      id: 3,
      name: "Roti Sai Mai",
      description: "Sweet cotton candy wrapped in thin crepe-like bread",
      image: "/placeholder.svg?height=200&width=300",
      spiceLevel: "No spice",
      price: "20-40 THB",
      category: "Dessert",
      ingredients: ["Flour", "Sugar", "Food coloring"],
      whereToFind: "Street vendors, markets",
    },
    {
      id: 4,
      name: "Hoy Tod",
      description: "Crispy oyster pancake with bean sprouts and egg",
      image: "/placeholder.svg?height=200&width=300",
      spiceLevel: "🌶️",
      price: "60-100 THB",
      category: "Snack",
      ingredients: ["Oysters", "Flour", "Egg", "Bean sprouts"],
      whereToFind: "Night markets, street food stalls",
    },
    {
      id: 5,
      name: "Kanom Krok",
      description: "Coconut rice pancakes cooked in special cast iron pan",
      image: "/placeholder.svg?height=200&width=300",
      spiceLevel: "No spice",
      price: "30-50 THB",
      category: "Dessert",
      ingredients: ["Coconut milk", "Rice flour", "Sugar"],
      whereToFind: "Street vendors, afternoon markets",
    },
    {
      id: 6,
      name: "Massaman Curry",
      description: "Rich, mild curry with Persian influences, slow-cooked with meat",
      image: "/placeholder.svg?height=200&width=300",
      spiceLevel: "🌶️",
      price: "100-150 THB",
      category: "Main Course",
      ingredients: ["Beef/Chicken", "Potatoes", "Massaman paste", "Coconut milk"],
      whereToFind: "Restaurants, local eateries",
    },
  ]

  const restaurants = [
    {
      id: 1,
      name: "Krua Chao Wang",
      type: "Traditional Thai",
      rating: 4.8,
      priceRange: "$$",
      image: "/placeholder.svg?height=200&width=300",
      description: "Family-run restaurant serving authentic Southern Thai cuisine for over 30 years",
      specialties: ["Gaeng Som", "Khanom Jeen", "Fresh seafood"],
      location: "Old Town, Surat Thani",
      hours: "10:00 AM - 9:00 PM",
      atmosphere: "Casual, Local",
    },
    {
      id: 2,
      name: "Night Bazaar Food Court",
      type: "Street Food",
      rating: 4.6,
      priceRange: "$",
      image: "/placeholder.svg?height=200&width=300",
      description: "Bustling food court with dozens of vendors offering local specialties",
      specialties: ["Hoy Tod", "Roti Sai Mai", "Fresh fruit"],
      location: "City Center",
      hours: "6:00 PM - 12:00 AM",
      atmosphere: "Lively, Authentic",
    },
    {
      id: 3,
      name: "Riverside Restaurant",
      type: "Seafood",
      rating: 4.7,
      priceRange: "$$$",
      image: "/placeholder.svg?height=200&width=300",
      description: "Upscale dining with river views and fresh seafood daily",
      specialties: ["Grilled fish", "Tom Yum", "Seafood curry"],
      location: "Tapi Riverfront",
      hours: "11:00 AM - 10:00 PM",
      atmosphere: "Upscale, Scenic",
    },
    {
      id: 4,
      name: "Morning Glory Market",
      type: "Market Food",
      rating: 4.5,
      priceRange: "$",
      image: "/placeholder.svg?height=200&width=300",
      description: "Traditional morning market with fresh ingredients and ready-to-eat meals",
      specialties: ["Khanom Jeen", "Fresh fruits", "Local snacks"],
      location: "Central Market",
      hours: "5:00 AM - 11:00 AM",
      atmosphere: "Bustling, Traditional",
    },
  ]

  const foodTips = [
    {
      title: "Best Times to Eat",
      content: "Breakfast: 7-9 AM, Lunch: 11 AM-2 PM, Dinner: 6-8 PM. Many street vendors close early.",
    },
    {
      title: "Spice Levels",
      content: "Southern Thai food is typically spicier than other regions. Ask for 'mai pet' (not spicy) if needed.",
    },
    {
      title: "Food Safety",
      content:
        "Choose busy stalls with high turnover. Look for places where locals eat. Avoid raw vegetables if you have a sensitive stomach.",
    },
    {
      title: "Payment",
      content: "Most street vendors accept cash only. Restaurants may accept cards. Typical meal costs 40-150 THB.",
    },
    {
      title: "Dietary Restrictions",
      content: "Vegetarian options available but may contain fish sauce. Say 'gin jay' for strict vegetarian food.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 font-poppins">Food Guide</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the authentic flavors of Southern Thailand with our comprehensive food guide
          </p>
        </div>

        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="dishes">Local Dishes</TabsTrigger>
            <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
            <TabsTrigger value="tips">Food Tips</TabsTrigger>
          </TabsList>

          {/* Local Dishes Tab */}
          <TabsContent value="dishes">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {localDishes.map((dish) => (
                <Card key={dish.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="relative">
                    <Image
                      src={dish.image || "/placeholder.svg"}
                      alt={dish.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-emerald-500">{dish.category}</Badge>
                    <div className="absolute top-4 right-4 bg-white/90 rounded-full px-2 py-1 text-sm font-semibold">
                      {dish.price}
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">{dish.name}</CardTitle>
                    <CardDescription>{dish.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Spice Level:</span>
                      <span>{dish.spiceLevel}</span>
                    </div>

                    <div>
                      <span className="text-sm font-medium">Ingredients:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {dish.ingredients.map((ingredient) => (
                          <Badge key={ingredient} variant="outline" className="text-xs">
                            {ingredient}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Where to find:</span> {dish.whereToFind}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Restaurants Tab */}
          <TabsContent value="restaurants">
            <div className="grid md:grid-cols-2 gap-6">
              {restaurants.map((restaurant) => (
                <Card key={restaurant.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3 relative">
                      <Image
                        src={restaurant.image || "/placeholder.svg"}
                        alt={restaurant.name}
                        width={300}
                        height={200}
                        className="w-full h-48 md:h-full object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-emerald-500">{restaurant.type}</Badge>
                      <div className="absolute bottom-4 left-4 flex items-center bg-white/90 rounded-full px-2 py-1">
                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-semibold">{restaurant.rating}</span>
                      </div>
                    </div>

                    <div className="md:w-2/3 p-6">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-xl mb-2">{restaurant.name}</CardTitle>
                        <CardDescription>{restaurant.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="p-0 space-y-3">
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {restaurant.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2" />
                            {restaurant.hours}
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-4 w-4 mr-2" />
                            {restaurant.priceRange}
                          </div>
                          <div className="flex items-center">
                            <Utensils className="h-4 w-4 mr-2" />
                            {restaurant.atmosphere}
                          </div>
                        </div>

                        <div>
                          <span className="text-sm font-medium">Specialties:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {restaurant.specialties.map((specialty) => (
                              <Badge key={specialty} variant="outline" className="text-xs">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button className="w-full bg-emerald-500 hover:bg-emerald-600 mt-4">
                          <MapPin className="h-4 w-4 mr-2" />
                          Get Directions
                        </Button>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Food Tips Tab */}
          <TabsContent value="tips">
            <div className="grid md:grid-cols-2 gap-6">
              {foodTips.map((tip, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                        {index === 0 && <Clock className="h-4 w-4 text-emerald-600" />}
                        {index === 1 && <Utensils className="h-4 w-4 text-emerald-600" />}
                        {index === 2 && <Star className="h-4 w-4 text-emerald-600" />}
                        {index === 3 && <DollarSign className="h-4 w-4 text-emerald-600" />}
                        {index === 4 && <Coffee className="h-4 w-4 text-emerald-600" />}
                      </div>
                      {tip.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{tip.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Food Etiquette Card */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Food Etiquette & Cultural Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Dining Etiquette</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Use a spoon and fork (spoon in right hand)</li>
                      <li>• Share dishes when eating in groups</li>
                      <li>• Don't finish everything on your plate</li>
                      <li>• Wait for elders to start eating first</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Useful Phrases</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• "Aroy mak" - Very delicious</li>
                      <li>• "Mai pet" - Not spicy</li>
                      <li>• "Gin jay" - Vegetarian food</li>
                      <li>• "Check bin" - Check please</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
