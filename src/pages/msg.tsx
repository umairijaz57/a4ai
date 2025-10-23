"use client"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left side - Robot Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CZRZ2pa3xOTnq2xVLNRRaIC7v9xODI.png"
              alt="Friendly robot character speaking"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right side - Speech Bubble */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 max-w-sm border border-blue-100 relative">
              {/* Speech bubble tail pointing to robot */}
              <div
                className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-r-0 border-t-8 border-b-8 border-l-white border-t-transparent border-b-transparent"
                style={{
                  borderLeftColor: "white",
                  filter: "drop-shadow(-2px 0 2px rgba(0,0,0,0.1))",
                }}
              />

              {/* Content inside bubble */}
              <div className="text-center space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-balance">आपका स्वागत है</h1>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  हमारे साथ भविष्य की तकनीक का अनुभव लें। आपके सपनों को वास्तविकता में बदलने के लिए हम यहाँ हैं।
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-400 rounded-full opacity-20 blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-400 rounded-full opacity-20 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
