import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <Image className="w-24 h-24 rounded-full mx-auto" src="/school.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 text-center space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Feroza is a small yet vibrant city known for its close-knit community and peaceful surroundings. It offers a blend of traditional culture and growing modernity, with local markets and agricultural activities being central to its economy. The city's serene environment makes it a welcoming place for its residents..”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Feroza
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          chak/75
        </div>
      </figcaption>
    </div>
  </figure>
  </div>
  )
}

export default page