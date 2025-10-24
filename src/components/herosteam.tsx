import React from 'react'

export default function HeroSteam({src, heading, para}: {src: string, heading: string, para: string}){
  return (

      <div className="max-w-full bg-white w-full flex flex-col sm:flex-row gap-8 lg:gap-12">
        <div className="flex  justify-center lg:justify-end">
          <div className="relative flex flex-col w-full max-w-md">
            <img
              src={src}
              alt="Friendly robot character speaking"
              className="w-full h-auto flip transform -scale-x-100"
            />
          </div>
        </div>

        <div className="flex justify-center lg:justify-start items-start sm:mt-2 md:mt-6 lg:mt-12">
            <div className=" rounded-full shadow-lg bg-blue-900 p-8 md:p-12 max-w-3xl border ">
              <div className="text-center space-y-auto text-white">
                <h1 className="text-3xl md:text-4xl font-bold  text-balance">{heading}</h1>
                <p className="text-base md:text-lg leading-relaxed capitalize">
                    {para}
                </p>
              </div>
            </div>
        </div>
      </div>
  )
}
