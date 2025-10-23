"use client"

import { Activity, Award, Lightbulb, Mountain, Navigation, Pen, Ruler, Sparkles, Trophy, Users, Zap } from "lucide-react"
import { Card, CardHeader, CardTitle } from "./ui/card"
import { SiStudyverse } from "react-icons/si"
import { MdScience } from "react-icons/md"
import { GiMaterialsScience } from "react-icons/gi"
import { BiMovie } from "react-icons/bi"

export default function SherlockActivities() {
  const activities = [
    {
      id: "1",
      title: "Data Hiding",
      icon: Pen,
      image: "/sherlock/4.jpg",
      bgColor:"bg-blue-300"
    },
    {
      id: "2",
      title: "Historical Encryption",
      icon: Ruler,
      image: "/sherlock/3.jpg",
      bgColor:"bg-blue-500"
    },
    {
      id: "3",
      title: " Ciphers ",
      icon: Ruler,
      image: "/sherlock/1.jpg",
      bgColor:"bg-blue-800"
    }
  ]

  return (
   <div className="min-h-screen bg-blue-50 py-4 sm:py-6 lg:py-8">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-32">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blue-600 font-bold text-center mb-4 sm:mb-6 lg:mb-8 border-b border-slate-200 pb-2 sm:pb-3">
      Activities
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {activities.map((activity) => (
        <Card 
          key={activity.id} 
          className={`group overflow-hidden ${activity.bgColor} shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 rounded-2xl sm:rounded-3xl p-0`}
        >
          <h1 className="text-lg sm:text-xl lg:text-2xl text-white font-bold text-center mt-3 sm:mt-4 lg:mt-5 px-3">
            {activity.title}
          </h1>
          <img
            src={activity.image || "/placeholder.svg"}
            alt={activity.title}
            className="w-full transition-transform duration-500 group-hover:scale-105 aspect-square object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://via.placeholder.com/400x300/e5e7eb/6b7280?text=LEGO+Activity"
            }}
          />
        </Card>
      ))}
    </div>
  </div>
</div>
  )
}
