import React from 'react'
import BookDemo from '../booking/BookDemo'
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

const DrumProgramming = () => {
  let tabs = [
      {
        id: "overview",
        label: "OverView",
        content: "Our guitar classes educate students about guitar parts and the importance of the right posture. The guitar lessons include reading western notations with linked TABS & a variety of open string and fretted note lessons followed by scales. The students shall be trained on music pieces to guide them in performance pieces. Also, basic sight reading and listening skills are a part of our holistic guitar music lessons.",
        walkthrough: "Course Walk Through",
        descriptionList: "In our guitar learning classes, students will understand parts of the instrument, right posture, develop skills to learn Treble and Bass clef with tablature and note values, and engage in workshops and composition activities with performance opportunities to build stage confidence.",
        objective: "Objective of the Course",
        descriptionList1: "In our guitar learning classes, we aim to train students to play guitar in a fun and engaging way, right from the basics.",
        descriptionList2: "The songs learned from the curriculum will help the student play external repertoire.",
        finalContent: "The above-mentioned details are for beginner levels. We do provide courses for intermediate and advanced levels up to grade 8. All our courses are internationally benchmarked and accredited by the institutes like The Trinity College of London.",
      },
      {
        id: "music",
        label: "Music",
        content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        walkthrough: "Course Walk Through",
        descriptionList: "In our guitar learning classes, students will understand parts of the instrument, right posture, develop skills to learn Treble and Bass clef with tablature and note values, and engage in workshops and composition activities with performance opportunities to build stage confidence.",
        objective: "Objective of the Course",
        descriptionList1: "In our guitar learning classes, we aim to train students to play guitar in a fun and engaging way, right from the basics.",
        descriptionList2: "The songs learned from the curriculum will help the student play external repertoire.",
        finalContent: "The above-mentioned details are for beginner levels. We do provide courses for intermediate and advanced levels up to grade 8. All our courses are internationally benchmarked and accredited by the institutes like The Trinity College of London.",
      },
      {
        id: "videos",
        label: "Videos",
        content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        walkthrough: "Course Walk Through",
        descriptionList: "In our guitar learning classes, students will understand parts of the instrument, right posture, develop skills to learn Treble and Bass clef with tablature and note values, and engage in workshops and composition activities with performance opportunities to build stage confidence.",
        objective: "Objective of the Course",
        descriptionList1: "In our guitar learning classes, we aim to train students to play guitar in a fun and engaging way, right from the basics.",
        descriptionList2: "The songs learned from the curriculum will help the student play external repertoire.",
        finalContent: "The above-mentioned details are for beginner levels. We do provide courses for intermediate and advanced levels up to grade 8. All our courses are internationally benchmarked and accredited by the institutes like The Trinity College of London.",
      }
    ];
return (
  <div className='max-w-6xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto'>
      {/* <!-- Hero --> */}
<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
{/* <!-- Grid --> */}
<div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
  <div>
    <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Learn to Play: Unleash Your Inner <span className="text-blue-600">Guitarist</span></h1>
    <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Hand-picked professionals and expertly crafted components, designed for any kind of entrepreneur.</p>

    {/* <!-- Buttons --> */}
    <div className="mt-7 grid gap-3 w-full sm:inline-flex">
      <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        Book A Demo
        <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </a>
      <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        Contact Us
      </a>
    </div>
    {/* <!-- End Buttons --> */}

    {/* <!-- Review --> */}
   
    {/* <!-- End Review --> */}
  </div>
  {/* <!-- End Col --> */}

  <div className="relative ms-4">
  <img
className="w-full max-h-400 rounded-md"
src="https://images.unsplash.com/photo-1431308305062-f218b6fe520a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
alt="Image Description"
/>

    <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>

    {/* <!-- SVG--> */}
    <div className="absolute bottom-0 start-0">
      <svg className="w-2/3 ms-auto h-auto text-white dark:text-slate-900" width="630" height="451" viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="531" y="352" width="99" height="99" fill="currentColor"/>
        <rect x="140" y="352" width="106" height="99" fill="currentColor"/>
        <rect x="482" y="402" width="64" height="49" fill="currentColor"/>
        <rect x="433" y="402" width="63" height="49" fill="currentColor"/>
        <rect x="384" y="352" width="49" height="50" fill="currentColor"/>
        <rect x="531" y="328" width="50" height="50" fill="currentColor"/>
        <rect x="99" y="303" width="49" height="58" fill="currentColor"/>
        <rect x="99" y="352" width="49" height="50" fill="currentColor"/>
        <rect x="99" y="392" width="49" height="59" fill="currentColor"/>
        <rect x="44" y="402" width="66" height="49" fill="currentColor"/>
        <rect x="234" y="402" width="62" height="49" fill="currentColor"/>
        <rect x="334" y="303" width="50" height="49" fill="currentColor"/>
        <rect x="581" width="49" height="49" fill="currentColor"/>
        <rect x="581" width="49" height="64" fill="currentColor"/>
        <rect x="482" y="123" width="49" height="49" fill="currentColor"/>
        <rect x="507" y="124" width="49" height="24" fill="currentColor"/>
        <rect x="531" y="49" width="99" height="99" fill="currentColor"/>
      </svg>
    </div>
    {/* <!-- End SVG--> */}
  </div>
  {/* <!-- End Col --> */}
</div>

{/* <!-- End Grid --> */}
<div>
  <p className=' text-2xl font-bold md:text-3xl'>
  Jam into the Melody: 
  <br />
  <br />
 
  <span className='text-lg font-light'>Unleash Your Inner Guitar Maestro at Kaleidoscope Music School

Ready to set the strings on fire? Kaleidoscope Music School invites you to jump headfirst into the vibrant world of guitar-playing – where the fun never stops! Our courses aren't your typical lessons; they're a journey into the heart of music, transforming you into a guitar wizard in no time. Envision yourself stealing the spotlight, playing your heart out on stage – that's the adventure we're crafting for you!

Strum, pluck, and riff your way through our extensive guitar music courses, tailor-made for both beginners and seasoned players. From the basics to advanced fingerstyle, lead guitar, and music theory – we've got the whole spectrum covered. 


At Kaleidoscope Music School, it's not just about learning; it's about creating a groove that resonates with your love for music.

Meet our incredible faculty, a mix of talented individuals from India and beyond, all geared up to make your guitar-learning experience a blast. Whether you crave the energy of our state-of-the-art facilities or the coziness of your own space, our offline and online options cater to all music enthusiasts.

<br />
<br />
<br />
<figure>
      <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description" />
      <figcaption class="mt-3 text-sm text-center text-gray-500">
        A man and a woman looking at a cell phone.
      </figcaption>
    </figure>
<br />

Join the Kaleidoscope Music School musical family, and let's elevate your musical journey to a kaleidoscope of new heights. We're not just a music school; we're the architects of future rockstars.

So, become a part of our rhythmic tribe, and soon you'll be strumming, jamming, and living your dream of becoming a professional guitarist. Enroll now for a symphony of fun and music like never before!

</span>
  </p>

</div>
<br />
<br />
<div className="flex w-full flex-col justify-center items-center">
    <Tabs aria-label="Dynamic tabs" items={tabs}>
      {(item) => (
        <Tab key={item.id} title={item.label}>
          <Card>
            <CardBody>
           <div className='p-9'>
              <h1>{item.content}</h1><br />
              <span className='text-bold'>{item.walkthrough}</span><br /><br />
              <h>{item.descriptionList}</h><br /><br />
              <li>{item.objective}</li><br />
              <h1>{item.descriptionList1}</h1><br />
              <li>{item.descriptionList2}</li><br />
              {item.finalContent}
              </div>
            </CardBody>
          </Card>  
        </Tab>
      )}
    </Tabs>
  </div>  
</div>

<BookDemo />
{/* <!-- End Hero --> */}
<Footer />
  </div>
)
}


export default DrumProgramming