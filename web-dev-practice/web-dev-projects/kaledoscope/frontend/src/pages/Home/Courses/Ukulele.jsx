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
    <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Experience the   <span className="text-blue-600">Joy of Ukulele</span></h1>
    <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Tailored expertise and finely-tuned instruments, crafted for every aspiring musician at Kaleidoscope Music Academy.</p>

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
src="https://images.unsplash.com/photo-1607513272385-b4f42e08fb16?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
alt="Image Description"
/>

    <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>

  </div>
  {/* <!-- End Col --> */}
</div>

{/* <!-- End Grid --> */}
<div>
  <p className=' text-2xl font-bold md:text-3xl'>
  Jam into the Melody: 
  <br />
  <br />
 
  <span className='text-lg font-light'>Discover the joy of music with Kaleidoscope Music Academy’s ukulele program! Our friendly, expert instructors welcome strummers of all ages and skill levels. 
  Dive into the world of ukulele, an instrument beloved for its cheerful sound and portability. 
  With personalized lessons, you’ll quickly master chords and melodies, playing songs you love in no time.
   Our vibrant community and cozy learning environment make practice a pleasure. 
   <br />
  <br />
   Whether you dream of serenading under the stars or jamming with friends, your musical adventure starts here. 
   Embrace the ukulele’s charm and unleash your creativity. 
  <br />
  <br />Enroll now and strum your way to happiness with us!<br />
<br />
<figure>
      <img class="w-full object-cover rounded-xl" src="https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/423777964_778401154329194_2354213044495754628_n.jpg?stp=cp6_dst-jpg_fr_q85&_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=v39xZve-eKIAX_V9EyQ&_nc_ht=scontent.fbwa1-1.fna&oh=00_AfCMsylfsceC-3ARRsqQ6gj58AAaEHfW11X7zvp3Hmj1Ow&oe=65DCFF3F" alt="Image Description" />
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