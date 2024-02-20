import React from 'react'
import BookDemo from '../booking/BookDemo'
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

const Ukulele  = () => {
  let tabs = [
      {
        id: "overview",
        label: "OverView",
        content: "Our online ukulele classes provide a comprehensive learning experience where students will not only learn practical techniques but also theoretical concepts such as music theory and rhythm. This approach allows our students to fully understand and appreciate music while developing their ukulele skills. Students shall be trained to learn the following techniques - Ukulele tuning, History & Types of Ukulele, Chords & Shifting Chords, Singing and Playing along, Playing melodies, Practice & Performance tips, and various Strumming patterns in our structured ukulele lessons curriculum.",
        walkthrough: "Course Walk Through",
        walkthroughList1: "The ukulele music classes include a basic understanding of the instrument, rhythms, notes, and scales        ",
        walkthroughList2: "Gradually, learners are trained on the treble clef, notes values till quarter notes, open string lessons, exercises for right-hand development, fretted notes, basic open chords, strumming, and more",
        objective: "Objective of the Course",
        descriptionList1: "Students will learn theoretical ukulele techniques, music theory, and rhythm to understand and enjoy music        ",
        descriptionList2: "Students will also learn the following techniques - Ukulele tuning, History & Types of Ukulele, Chords & Shifting Chords, Singing and Playing along, Playing melodies, Practice & Performance tips, and various Strumming patterns        ",
        },
      {
        id: "Topics",
        label: "Topics Covered",
        content: "Basics of music",
        descriptionList1: "Our online ukulele course for 3 months include understanding of parts & correct posture, treble clef, notes values till quarter notes, open string lessons, exercises for right-hand development, fretted notes, basic open chords, strumming, and more.",
        descriptionList2: "The comprehensive 6 months online ukulele course includes 3 months outcome + power chords, signs & scales, advanced compositions, and exposure to rhythms patterns & chords. Students are trained on regular tuning, ukulele maintenance, and more.",
        descriptionList3: "Our all-inclusive 1 year course includes 6 months outcome + scales & sequences, reading rhythm patterns & chords, playing songs based on chords & strumming patterns, and rhythm & advanced fretted notes exercises. Students shall develop finger dexterity & strumming abilities for basic improvisation. ",
         },
      {
        id: "outcome",
        label: "Learning Outcomes",
        content: "Student will be able to perform following topics",
        descriptionList1: "Students will learn theoretical ukulele techniques, music theory, and rhythm to understand and enjoy music.        ",
        descriptionList2: "Students will also learn the following techniques - Ukulele tuning, History & Types of Ukulele, Chords & Shifting Chords, Singing and Playing along, Playing melodies, Practice & Performance tips, and various Strumming patterns.    ",
         }
    ];
return (
  <div className='max-w-6xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto'>
      {/* <!-- Hero --> */}
<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
{/* <!-- Grid --> */}
<div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
  <div>
    <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Experience the Joy of Ukulele:  <span className="text-blue-600">Playing at FSM</span></h1>
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
 
  <span className='text-lg font-light'>Master one of the most versatile and easy-to-ace instruments that hold paramount love in the heart of every music player. Why? You may ask. Allow us to show you at our excellent state-of-art music centers boasting world-class maestros to thrill you with an enticing symphony of the four-stringed instrument.

Discover the joy of plucking strings and creating beautiful tunes in our comprehensive ukulele music course. The lessons are carefully curated by experts to help you learn the instrument in classical, folk, pop, and other styles of Ukulele playing, among others. Our courses are structured to help students develop their skills in technique, music theory, and performance while also encouraging them to find their own voice.

To make your learning fun and super engaging, our team of qualified musicians from India and abroad creates an engaging and interactive setting where you can ask questions, seek bits of advice, measure progress and learn new-age tools and techniques at every level. To create a pool of self-assured and confident ukulele players, we offer workshops by renowned maestros & performance opportunities at India's leading music events.

Whether you're just starting out or already have years of experience under your belt, you'll find our offline music centers and accessible online learning options to be a welcoming and encouraging space for your development.

Join us at FSM and experience the joy of Ukulele playing with our expert instruction and comprehensive curriculum.<br />
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
                {item.walkthrough && <span className='text-bold'>{item.walkthrough}</span>}<br /><br />
                {item.walkthroughList1 && <h>{item.walkthroughList1}</h>}<br /><br />
                {item.walkthroughList2 && <h>{item.walkthroughList2}</h>}<br /><br />
                {item.walkthroughList3 && <h>{item.walkthroughList3}</h>}<br /><br />
                {item.walkthroughList4 && <h>{item.walkthroughList4}</h>}<br /><br />
                {item.objective && <li>{item.objective}</li>}<br />
                {item.descriptionList1 && <li>{item.descriptionList1}</li>}<br />
                {item.descriptionList2 && <li>{item.descriptionList2}</li>}<br />
                {item.descriptionList3 && <li>{item.descriptionList3}</li>}<br />
                {item.descriptionList4 && <li>{item.descriptionList4}</li>}<br />
                {item.descriptionList5 && <li>{item.descriptionList5}</li>}<br />
                {item.descriptionList6 && <li>{item.descriptionList6}</li>}<br />
                {item.finalContent && <div>{item.finalContent}</div>}
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
  </div>
)
}


export default Ukulele 