// import music from "@/data/music.json";
// export default function FeaturedCourses({ music }){
//     return (
//         <div className="flex flex-col items-center justify-center"> 
//           <h1 className="text-center text-4xl font-bold">Featured Music</h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
//             {music.map((item) => (
//               <div key={item.id} className="bg-white dark:bg-black rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
//                 <h2 className="text-xl font-bold">{item.name}</h2>
//                 <p className="text-neutral-500 text-sm">{item.artist}</p>
//                 <a href={item.url} className="mt-4 text-black font-bold" target="_blank" rel="noopener noreferrer">
//                   Listen Now
//                 </a>
//               </div>
//             ))}
//           </div> 
//         </div>
//     );
// }
'use client'
import Link from "next/link"
import courseData from "../data/music_courses.json"
import { BackgroundGradient } from "./ui/background-gradient"

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
        
}

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)


  return (
    <div className="py-12 bg-gray-900">
        <div>
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED COURSES</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Learn With the Best</p>
            </div>
        </div>
        <div className="mt-10 mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredCourses.map((course:Course)=> (
                    <div key={course.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                                <Link href={`/courses/${course.slug}`} className="text-black font-bold">
                                Learn More
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-20 text-center">
            <Link href={"/courses"}
            className="px-6 py-3 rounded-lg border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 hover:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-200 ease-in-out shadow-md hover:shadow-lg">
            View All courses
            </Link>
        </div>
    </div>
    
  )
}

export default FeaturedCourses