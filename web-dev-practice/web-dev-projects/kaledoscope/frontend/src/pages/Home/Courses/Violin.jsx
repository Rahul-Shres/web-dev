import React from 'react'
import BookDemo from '../booking/BookDemo'
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import Appbar from '../../../components/nabvar/Navbar';
import Footer from '../footer/Footer';

const Violin  = () => {
  let tabs = [
      {
        id: "overview",
        label: "OverView",
        content: "Our extensive violin classes are for learners who want to explore and understand the instrument and learn to play. It ensures the correct holding position of the violin, bow, and posture of playing it. The versatility of the violin is evident as it can be heard in a wide range of musical genres, from classical compositions to modern electronic tracks. Our engaging violin lessons enhance your capability of hearing and playing perfect pitch as it doesn't have any FRETS.",
        walkthrough: "Course Walk Through",
        walkthroughList1: "In our violin classes students will explore the instrument and understand the correct holding position of the violin, bow, and posture of playing it.",
        walkthroughList2: "They shall be trained on our internationally backed music curriculum, followed by engaging music workshops and activities to sharpen their skills.",
        walkthroughList3: "Students will be guided and exposed to stage plays to build performance confidence.",
        objective: "Objective of the Course",
        descriptionList1: "In our online violin classes, students will be trained on different notes and counts, including correct posture and seating position.",
        descriptionList2: "The course includes open string exercises in different notes and playing with proper bowing and right intonation.",
        descriptionList3: "Students will be taught to play musical pieces/songs and some familiar short melodies.",
        },
      {
        id: "Topics",
        label: "Topics Covered",
        content: "Basics of music",
        descriptionList1: "Students will be introduced to slur bowing and key signatures starting on G open string and G 3rd finger on D string",
        descriptionList2: "Learners shall be taught to play some familiar melodies and songs        ",
        descriptionList3: "This course includes training on time signatures with relevant pieces from Suzuki volume 1        ",
        descriptionList4: "Learners are trained on 2 octave scales: G - A -D - C major & minor in separate and slur bowing 2 crotchets and 2 quavers to a bow",
        descriptionList5: "This plan will complete Suzuki volume 1 book with instructions to tune the Violin without any devices",
        descriptionList6: "Students will develop left-hand vibrato and will be introduced to chromatic scales 2 octaves separate bow & slurred bowing and flat scales",
        },
      {
        id: "outcome",
        label: "Learning Outcomes",
        content: "Student will be able to perform following topics",
        descriptionList1: "In our violin music classes, students will explore parts of the Violin and bow with training on 2 octave scales, 2 crotchets and 2 quavers to a bow",
        descriptionList2: "They shall be able to play melodies and songs and tune the Violin without any devices.        ",
         }
    ];
return (
  <>
  <Appbar />
  
  <div className='max-w-6xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto'>
      {/* <!-- Hero --> */}
<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
{/* <!-- Grid --> */}
<div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
  <div>
    <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Learn Violin:   <span className="text-blue-600">The Art of Bowing and Plucking</span></h1>
    <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Tailored expertise and finely-tuned instruments, crafted for every aspiring musician at Kaleidoscope Music Academy.</p>

    {/* <!-- Buttons --> */}
    <div className="mt-7 grid gap-3 w-full sm:inline-flex">
      <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="/booking">
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
src="https://images.unsplash.com/photo-1585263547501-7e5a0c222010?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
alt="Image Description"
/>

    <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>
  </div>
  {/* <!-- End Col --> */}
</div>

{/* <!-- End Grid --> */}
<div>
  <p className=' text-2xl font-bold md:text-3xl'>
  Unleash the sweet melodies within you
  <br />
  <br />
 
  <span className='text-lg font-light'>Unleash the sweet melodies within you at Kaleidoscope Music Academy! Our expert violin program is tailored for aspiring musicians of all levels. 
  Whether you’re picking up the bow for the first time or refining your virtuoso skills, our dedicated instructors guide you through every note. 
  Immerse yourself in the rich tradition of violin playing, enhanced by state-of-the-art facilities and a supportive community. <br />
<br />
   Experience personalized lessons that cater to your unique style and pace. 
   Join us and let your musical journey take flight. Embrace the elegance of the violin and let your passion resonate. <br />
<br />
   Enroll at Kaleidoscope Music Academy today – where music meets mastery!<br />
<br />
<br />
<figure>
      <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?q=80&w=1598&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description" />
      
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
  <Footer />
  </>
)
}


export default Violin 