/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, Users, Clock, ActivitySquare, Landmark, UtensilsCrossed } from "lucide-react"
import Link from "next/link"
import Banner from "@/components/banner"

interface FetchedPlaceData {
  id: number | string; // Assuming ID can be number or string from API
  name: string;
  category: string;
  image: string;
  description: string;
  duration: string;
  // Fields from new data structure, mapped from API
  location?: string;       // Mapped from API key "Location"
  attractionLink?: string; // Mapped from API key "Attraction Link"
  tags?: string;           // Mapped from API key "tags"
  // Fields that might be optional or not in all API responses
  bestTime?: string;       // Was in old interface, might not be in new API data
}

export default function HomePage() {
  const tripTypes = [
    { name: "การเดินทาง", icon: "🏔️", description: "กิจกรรมกลางแจ้งและสำรวจธรรมชาติ" },
    { name: "วัฒนธรรม", icon: "🛕", description: "วัด ประเพณี และประสบการณ์ท้องถิ่น" },
    { name: "การผ่อนคลาย", icon: "🏖️", description: "สถานพักผ่อนอันเงียบสงบและกิจกรรมเพื่อสุขภาพ" },
  ]

  const [apiData, setApiData] = useState<FetchedPlaceData[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        const response = await fetch("https://script.google.com/macros/s/AKfycbwr0UkYTavLl-OzNNLOidpedZA4uf8Dm7CMPDg8yFMFK0STdI4TVQE8cy5of2-Ck5nDEA/exec")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const rawApiResponse = await response.json()
        // The API might return data directly as an array or nested under a 'data' key
        const rawDataArray = rawApiResponse.data || rawApiResponse;

        if (Array.isArray(rawDataArray)) {
          const transformedData: FetchedPlaceData[] = rawDataArray.map((item: any) => ({
            id: item.id,
            name: item.name,
            category: item.category,
            image: item.image,
            description: item.description,
            duration: item.duration,
            location: item.Location, // Map from API's "Location"
            attractionLink: item["Attraction Link"], // Map from API's "Attraction Link"
            tags: item.tags,
            bestTime: item.bestTime, // Will be undefined if not present in API item
          }));
          setApiData(transformedData);
          console.log("Fetched and transformed data:", transformedData);
        } else {
          console.error("Fetched data is not in the expected array format:", rawDataArray);
          setApiData([]); // Set to empty or handle error appropriately
          setError("Unexpected data format from API.");
        }
      } catch (e: any) {
        console.error("Failed to fetch data:", e)
        setError(e.message || "An unknown error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, []) // Empty dependency array ensures this runs once on mount

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Banner />

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        {/* You can display loading/error states or the fetched data here if needed */}
        {/* {loading && <p className="text-center">Loading data from API...</p>} */}
        {/* {error && <p className="text-center text-red-500">Error: {error}</p>} */}
        {/* {apiData && <div className="text-center">Data loaded! Check console.</div>} */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">ภูเก็ตในมุมมองตัวเลข</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ค้นพบความหลากหลายและเสน่ห์ของภูเก็ตผ่านสถิติที่น่าสนใจเหล่านี้
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat Item 1: Destinations */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
              <MapPin className="h-12 w-12 text-emerald-500 mb-4" />
              <div className="text-5xl font-bold text-emerald-600 mb-2">50+</div>
              <div className="text-gray-700 text-lg font-medium">จุดหมายปลายทาง</div>
              <p className="text-sm text-gray-500 mt-1">ที่รอให้คุณไปสำรวจ</p>
            </div>
            {/* Stat Item 2: Activities */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
              <ActivitySquare className="h-12 w-12 text-orange-500 mb-4" />
              <div className="text-5xl font-bold text-orange-600 mb-2">25+</div>
              <div className="text-gray-700 text-lg font-medium">กิจกรรมผจญภัย</div>
              <p className="text-sm text-gray-500 mt-1">เติมเต็มความตื่นเต้น</p>
            </div>
            {/* Stat Item 3: Cultural Places */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
              <Landmark className="h-12 w-12 text-emerald-500 mb-4" />
              <div className="text-5xl font-bold text-emerald-600 mb-2">15+</div>
              <div className="text-gray-700 text-lg font-medium">แหล่งวัฒนธรรม</div>
              <p className="text-sm text-gray-500 mt-1">สัมผัสประวัติศาสตร์ท้องถิ่น</p>
            </div>
            {/* Stat Item 4: Food Experiences */}
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
              <UtensilsCrossed className="h-12 w-12 text-orange-500 mb-4" />
              <div className="text-5xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-gray-700 text-lg font-medium">ประสบการณ์อาหาร</div>
              <p className="text-sm text-gray-500 mt-1">ลิ้มลองรสชาติปักษ์ใต้</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">ทำไมต้องภูเก็ต</h2>
            <p className="text-xl text-gray-600">ความช่วยเหลือที่คุณวางใจได้สำหรับประสบการณ์ภาคใต้ของประเทศไทยที่แท้จริง</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white font-bold">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">มาเที่ยวที่ภูเก็ตกันน</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ตอนนี้เป็นเวลาที่เหมาะสำหรับการไปเที่ยวภูเก็ต ในช่วงเทศกาล และอากาศที่อบอุ่นเหมาะแก่การเที่ยวทะเล
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white font-bold">🏆</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">พร้อมสำหรับการเดินทางหรือยัง?</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ออกแบบทริปเดินทางไกลในภูเก็ตในฝันของคุณด้วยแผนการเดินทางส่วนตัวที่เน้นสถานที่ท่องเที่ยวยอดนิยมและจุดหมายปลายทางที่ต้องไปชม
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white font-bold">💡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">กิจกรรมในภูเก็ต
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  ค้นพบการผจญภัยอันไม่มีที่สิ้นสุดและประสบการณ์สนุกสนานในภูเก็ต
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl text-white font-bold">🌟</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">ประสบการณ์ครอบครัวที่น่าจดจำ</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  กำลังวางแผนเดินทางกับเด็กๆ อยู่หรือเปล่า? สำรวจเมืองเก่า
                  ชายหาด ภูเขา และกิจกรรมอื่นๆ ที่เหมาะสำหรับครอบครัวในภูเก็ต
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Places */}
      <section className="py-20 bg-orange-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">จุดหมายปลายทางที่น่าสนใจ
            </h2>
            <p className="text-xl text-gray-600">สถานที่ที่ต้องมาในภูเก็ต</p>
          </div>
          {loading && (
            <div className="text-center py-10">
              <p className="text-lg text-gray-600">กำลังโหลดสถานที่แนะนำ...</p>
              {/* You could add a spinner component here */}
            </div>
          )}
          {error && (
            <div className="text-center py-10">
              <p className="text-lg text-red-500">เกิดข้อผิดพลาดในการโหลดข้อมูล: {error}</p>
            </div>
          )}
          {!loading && !error && apiData && apiData.length > 0 && (
            <div className="grid md:grid-cols-3 gap-8">
              {apiData.map((place) => (
                <Card
                  key={place.id}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="relative">
                    <img src={place.image } alt="Image"className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
                    <Badge className="absolute top-4 left-4 bg-orange-500">{place.category}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{place.name}</CardTitle>
                    <CardDescription>{place.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {place.duration}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {place.bestTime}
                        </div>
                      </div>
                      <Link href={`/explore/${place.id}`}>
                        <Button className="w-full bg-orange-500 hover:bg-orange-600">เรียนรู้เพิ่มเติม</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          {!loading && !error && (!apiData || apiData.length === 0) && (
            <div className="text-center py-10">
              <p className="text-lg text-gray-600">ไม่พบสถานที่แนะนำในขณะนี้</p>
            </div>
          )}
        </div>
      </section>

      {/* Trip Types */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 font-poppins">วางแผนการเดินทางของคุณ
            </h2>
            <p className="text-xl text-gray-600">เลือกรูปแบบการเดินทางของคุณและค้นพบประสบการณ์ที่เหมาะกับคุณ</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tripTypes.map((type, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <CardHeader>
                  <div className="text-6xl mb-4 group-hover:animate-bounce">{type.icon}</div>
                  <CardTitle className="text-2xl text-emerald-600">{type.name}</CardTitle>
                  <CardDescription className="text-lg">{type.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white via-orange-500 to-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-poppins">พร้อมสำหรับการผจญภัยของคุณหรือยัง</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            เริ่มวางแผนการเดินทางของคุณไปภูเก็ตด้วยคู่มือการเดินทางของเรา
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/trip-planner">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                <Calendar className="mr-2 h-5 w-5" />
                วางแผนการเดินทาง
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-orange-500 hover:text-orange-500 hover:bg-gray-100"
              >
                <Users className="mr-2 h-5 w-5" />
                คู่มือการเดินทาง
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
