import React from 'react'
import BookDemo from '../booking/BookDemo'
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

const Drum = () => {
  let tabs = [
      {
        id: "overview",
        label: "OverView",
        content: "Our beginner drum lessons introduce students to the Drum Set and understanding the parts of the stick, rhythm, basic notes, and note values on drum voices. In our drum classes, students are trained to read percussion clef and note values up to quarter notes. Our comprehensive drum lessons include hand & feet coordination exercises & brief on the basic quarter note grooves.",
        walkthrough: "Course Walk Through",
        descriptionList: "Our drum classes introduces drum set and understanding of basic Note Values on drum voices. Students are trained on Simple Quater note and Eighth note grooves using bass snare and hi-hats followed by workshops and performance opportunities to build stage confidence",
        objective: "Objective of the Course",
        descriptionList1: "Introduce drum set and train students on basic Note Values on drum voices",
        descriptionList2: "Develop the ability to read and understand rhythms/music theory to sharpen sight reading and listening skills",
        descriptionList3: "Master single strokes, double strokes, and paradiddles",
        descriptionList4: "Understand Simple Quater note and Eighth note grooves using bass snare and hi-hats",
        descriptionList5: "Brief understanding of the use of Quaver rests, and fills",
        finalContent: "The above-mentioned details are for beginner levels. We do provide courses for intermediate and advanced levels up to grade 8. All our courses are internationally benchmarked and accredited by the institutes like The Trinity College of London.",
      },
      {
        id: "Topics",
        label: "Topics Covered",
        content: "Basics of music",
        descriptionList1: "Our online drum classes curriculum include single strokes, double strokes, and paradiddles in the basic 16-session online drum lessons. Learn to read percussion clef and note values up to quarter notes, including hand & feet coordination exercises & brief on the basic quarter note grooves in the best online drum lessons.",
        descriptionList2: "The drum lessons in the 48-session structured course train students on the use of Quaver rests, fills, learning simple grooves using bass drum and hi-hat variations",
        descriptionList3: "Both our online and offline drum classes offer a pre-structured course to train students on listening skills, sight reading, rudimental studies, creating fills on the 4th bar using 8th note grooves, and more.",
        
      },
      {
        id: "outcome",
        label: "Learning Outcomes",
        content: "Student will be able to perform following topics",
        descriptionList1: "Students will be introduced to drumming in a very easy manner even if the students do not have a drum kit.",
        descriptionList2: "They will learn the basic concepts that will help lay the foundation for intermediate training.",
           }
    ];
return (
  <div className='max-w-6xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto'>
      {/* <!-- Hero --> */}
<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
{/* <!-- Grid --> */}
<div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
  <div>
    <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Learn the Art of <span className="text-blue-600">Drumming</span></h1>
    <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Bring Out Your Inner Performer & Put On a Show</p>

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
 
  <span className='text-lg font-light'>Are you unable to resist the passion of rhythm and beats? Then it's time to enroll in our drum lessons! Our rocking drum class for beginners is perfect for those who want to experience the thrill of drumming. As Keith Moon once said, he was a 'mental drummer' even before he had a proper set!With our drum training, you can take the best seat between the bassist and the lead guitar, becoming the very heartbeat of the show. Our disciplined drum training teaches you how to keep up the tempo and set the cue when the song's mood is shifting. Join us and experience the excitement of drumming!

Learn at your own pace with our diverse mix of music faculty from India and abroad. The experts come with a wealth of music expertise to train you using modern tools and techniques most effectively. We track your progress, conduct frequent assessments, support you at every level, train you on new-age concepts, and build confidence with performance opportunities at India's leading music events. We offer offline drum courses at our centers across India and online learning options for students of all backgrounds and experience levels to develop their drumming skills at their convenience.

We offer offline drum courses at our centers across India in 40+ cities and online learning options for students of all backgrounds and experience levels to develop their drumming skills at their convenience.

Celebrate your drumming passion at FSM with our experts eager to make world-class learning fun and engaging.
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
                {item.walkthrough && <span className='text-bold'>{item.walkthrough}</span>}<br /><br />
                {item.descriptionList && <h>{item.descriptionList}</h>}<br /><br />
                {item.objective && <li>{item.objective}</li>}<br />
                {item.descriptionList1 && <li>{item.descriptionList1}</li>}<br />
                {item.descriptionList2 && <li>{item.descriptionList2}</li>}<br />
                {item.descriptionList3 && <li>{item.descriptionList3}</li>}<br />
                {item.descriptionList4 && <li>{item.descriptionList4}</li>}<br />
                {item.descriptionList5 && <li>{item.descriptionList5}</li>}<br />
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


export default Drum