"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Clock, DollarSign, Users, Star, Plus, Trash2 } from "lucide-react"
import Image from "next/image"

export default function TripPlannerPage() {
  const [selectedActivities, setSelectedActivities] = useState<number[]>([])
  const [tripDuration, setTripDuration] = useState("")
  const [groupSize, setGroupSize] = useState("")
  const [budget, setBudget] = useState("")
  const [interests, setInterests] = useState<string[]>([])

  const activities = [
    {
      id: 1,
      name: "Khao Sok National Park",
      category: "Nature",
      duration: "Full Day",
      cost: "$$",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
      description: "Explore ancient rainforest and limestone cliffs",
      tags: ["Adventure", "Wildlife", "Hiking"],
      bestFor: ["Solo", "Couple", "Family"],
      timeNeeded: 8,
    },
    {
      id: 2,
      name: "Tapi River Cruise",
      category: "Activities",
      duration: "3 Hours",
      cost: "$",
      rating: 4.6,
      image: "/placeholder.svg?height=200&width=300",
      description: "Scenic boat ride through mangroves",
      tags: ["Relaxing", "Nature", "Photography"],
      bestFor: ["Couple", "Family", "Friends"],
      timeNeeded: 3,
    },
    {
      id: 3,
      name: "Night Market Food Tour",
      category: "Food",
      duration: "2 Hours",
      cost: "$",
      rating: 4.9,
      image: "/placeholder.svg?height=200&width=300",
      description: "Taste authentic Southern Thai cuisine",
      tags: ["Food", "Culture", "Evening"],
      bestFor: ["Solo", "Couple", "Friends"],
      timeNeeded: 2,
    },
    {
      id: 4,
      name: "Wat Chalong Temple",
      category: "Culture",
      duration: "2 Hours",
      cost: "Free",
      rating: 4.7,
      image: "/placeholder.svg?height=200&width=300",
      description: "Historic Buddhist temple complex",
      tags: ["Culture", "Spiritual", "Architecture"],
      bestFor: ["Solo", "Couple", "Family"],
      timeNeeded: 2,
    },
    {
      id: 5,
      name: "Kayaking Adventure",
      category: "Activities",
      duration: "Half Day",
      cost: "$$",
      rating: 4.5,
      image: "/placeholder.svg?height=200&width=300",
      description: "Paddle through hidden lagoons",
      tags: ["Adventure", "Water Sports", "Nature"],
      bestFor: ["Couple", "Friends"],
      timeNeeded: 4,
    },
    {
      id: 6,
      name: "Cooking Class",
      category: "Food",
      duration: "4 Hours",
      cost: "$$",
      rating: 4.8,
      image: "/placeholder.svg?height=200&width=300",
      description: "Learn traditional Thai cooking",
      tags: ["Food", "Learning", "Hands-on"],
      bestFor: ["Solo", "Couple", "Family"],
      timeNeeded: 4,
    },
  ]

  const interestOptions = ["Adventure", "Culture", "Food", "Nature", "Relaxing", "Photography", "Learning"]

  const handleActivityToggle = (activityId: number) => {
    setSelectedActivities((prev) =>
      prev.includes(activityId) ? prev.filter((id) => id !== activityId) : [...prev, activityId],
    )
  }

  const handleInterestToggle = (interest: string) => {
    setInterests((prev) => (prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]))
  }

  const getFilteredActivities = () => {
    return activities.filter((activity) => {
      if (interests.length === 0) return true
      return activity.tags.some((tag) => interests.includes(tag))
    })
  }

  const getTotalTime = () => {
    return selectedActivities.reduce((total, id) => {
      const activity = activities.find((a) => a.id === id)
      return total + (activity?.timeNeeded || 0)
    }, 0)
  }

  const getEstimatedDays = () => {
    const totalHours = getTotalTime()
    return Math.ceil(totalHours / 8) // Assuming 8 hours of activities per day
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4 font-poppins">Trip Planner</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create your perfect Surat Thani itinerary with personalized recommendations
          </p>
        </div>

        <Tabs defaultValue="preferences" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="preferences">1. Preferences</TabsTrigger>
            <TabsTrigger value="activities">2. Select Activities</TabsTrigger>
            <TabsTrigger value="itinerary">3. Your Itinerary</TabsTrigger>
          </TabsList>

          {/* Preferences Tab */}
          <TabsContent value="preferences">
            <Card>
              <CardHeader>
                <CardTitle>Tell us about your trip</CardTitle>
                <CardDescription>Help us recommend the best activities for you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Trip Duration</Label>
                    <Select value={tripDuration} onValueChange={setTripDuration}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">1-2 Days</SelectItem>
                        <SelectItem value="3-4">3-4 Days</SelectItem>
                        <SelectItem value="5-7">5-7 Days</SelectItem>
                        <SelectItem value="7+">More than a week</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="group">Group Type</Label>
                    <Select value={groupSize} onValueChange={setGroupSize}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select group type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="solo">Solo Traveler</SelectItem>
                        <SelectItem value="couple">Couple</SelectItem>
                        <SelectItem value="family">Family</SelectItem>
                        <SelectItem value="friends">Friends</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select value={budget} onValueChange={setBudget}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="budget">Budget ($)</SelectItem>
                        <SelectItem value="moderate">Moderate ($$)</SelectItem>
                        <SelectItem value="luxury">Luxury ($$$)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>What interests you? (Select all that apply)</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {interestOptions.map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest}
                          checked={interests.includes(interest)}
                          onCheckedChange={() => handleInterestToggle(interest)}
                        />
                        <Label htmlFor={interest} className="text-sm">
                          {interest}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activities Tab */}
          <TabsContent value="activities">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Recommended Activities</CardTitle>
                <CardDescription>Based on your preferences, here are activities perfect for your trip</CardDescription>
              </CardHeader>
            </Card>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredActivities().map((activity) => (
                <Card
                  key={activity.id}
                  className={`overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer ${
                    selectedActivities.includes(activity.id) ? "ring-2 ring-emerald-500 bg-emerald-50" : ""
                  }`}
                  onClick={() => handleActivityToggle(activity.id)}
                >
                  <div className="relative">
                    <Image
                      src={activity.image || "/placeholder.svg"}
                      alt={activity.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-emerald-500">{activity.category}</Badge>
                    <div className="absolute top-4 right-4 bg-white/90 rounded-full p-2">
                      {selectedActivities.includes(activity.id) ? (
                        <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                      ) : (
                        <Plus className="w-4 h-4 text-gray-600" />
                      )}
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center bg-white/90 rounded-full px-2 py-1">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-semibold">{activity.rating}</span>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg">{activity.name}</CardTitle>
                    <CardDescription>{activity.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {activity.duration}
                        </div>
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1" />
                          {activity.cost}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {activity.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-1" />
                        Best for: {activity.bestFor.join(", ")}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Itinerary Tab */}
          <TabsContent value="itinerary">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Custom Itinerary</CardTitle>
                    <CardDescription>
                      {selectedActivities.length} activities selected • Estimated {getEstimatedDays()} days
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {selectedActivities.length === 0 ? (
                      <div className="text-center py-8 text-gray-500">
                        <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>No activities selected yet. Go back to add some activities to your trip!</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {selectedActivities.map((activityId, index) => {
                          const activity = activities.find((a) => a.id === activityId)
                          if (!activity) return null

                          return (
                            <div key={activityId} className="flex items-center gap-4 p-4 border rounded-lg bg-white">
                              <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 font-semibold">
                                {index + 1}
                              </div>
                              <Image
                                src={activity.image || "/placeholder.svg"}
                                alt={activity.name}
                                width={80}
                                height={60}
                                className="w-20 h-15 object-cover rounded"
                              />
                              <div className="flex-1">
                                <h4 className="font-semibold">{activity.name}</h4>
                                <p className="text-sm text-gray-600">{activity.description}</p>
                                <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                                  <span className="flex items-center">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {activity.duration}
                                  </span>
                                  <span className="flex items-center">
                                    <DollarSign className="h-3 w-3 mr-1" />
                                    {activity.cost}
                                  </span>
                                </div>
                              </div>
                              <Button variant="outline" size="icon" onClick={() => handleActivityToggle(activityId)}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Trip Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Total Activities</span>
                      <span className="font-semibold">{selectedActivities.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Time</span>
                      <span className="font-semibold">{getTotalTime()} hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Recommended Days</span>
                      <span className="font-semibold">{getEstimatedDays()} days</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Trip Type</span>
                      <span className="font-semibold capitalize">{groupSize || "Not set"}</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Travel Tips</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <p>Best time to visit is November to April for cooler weather</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <p>Book accommodations in advance during peak season</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <p>Rent a scooter or car for easier transportation between sites</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                      <p>Try local street food but choose busy stalls for freshness</p>
                    </div>
                  </CardContent>
                </Card>

                {selectedActivities.length > 0 && (
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
                    <Calendar className="mr-2 h-4 w-4" />
                    Save Itinerary
                  </Button>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
