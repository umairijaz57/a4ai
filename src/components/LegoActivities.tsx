"use client"

import { Activity, Award, Mountain, Navigation, Sparkles, Trophy, Users, Zap } from "lucide-react"
import { Card, CardHeader, CardTitle } from "./ui/card"

export default function LegoActivities() {
  const activities = [
    {
      id: "robot-bot",
      title: "5-Minute Bot",
      icon: Zap,
      image: "/lego/day1.jpg",
      bgColor: "bg-blue-300"
    },
    {
      id: "obstacle-avoidance",
      title: "Obstacle Avoidance",
      icon: Navigation,
      image: "/lego/opticals.jpg",
      bgColor: "bg-blue-600"
    },
    {
      id: "slope-climbing",
      title: "Slope Climbing",
      icon: Mountain,
      image: "/lego/slop.jpg",
      bgColor: "bg-blue-900"
    },
    {
      id: "speed-racing-2",
      title: "Speed Racing Advanced",
      icon: Trophy,
      image: "/lego/speed.jpg",
      bgColor: "bg-blue-300"
    },
    {
      id: "line-follower-1",
      title: "Line Follower",
      icon: Activity,
      image: "/lego/line.jpg",
      bgColor: "bg-blue-600"
    },
    {
      id: "sumo-competition",
      title: "Sumo Wrestling",
      icon: Award,
      image: "/lego/presumo.jpg",
      bgColor: "bg-blue-900"
    },
  ]

  return (
    <div className="min-h-screen bg-blue-50 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-32 flex flex-col">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl text-blue-600 font-bold text-center mb-4 sm:mb-6 lg:mb-8 border-b border-slate-200 pb-2 sm:pb-3">
          Activities
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {activities.map((activity) => (
            <Card
              key={activity.id}
              className={`group overflow-hidden ${activity.bgColor} shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 rounded-2xl sm:rounded-3xl p-0`}
            >
              <h1 className="text-lg sm:text-xl lg:text-2xl text-white font-bold text-center flex items-center justify-center mt-3 sm:mt-4 lg:mt-5 px-2">
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