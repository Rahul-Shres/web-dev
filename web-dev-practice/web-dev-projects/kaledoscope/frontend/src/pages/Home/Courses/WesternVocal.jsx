import React from 'react'
import BookDemo from '../booking/BookDemo'
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";

const WesternVocal = () => {
  let tabs = [
      {
        id: "overview",
        label: "OverView",
        content: "From hitting the right notes to performing an accurate sense of pitch & rhythm, our western vocal classes include a range of techniques and methods to help students master the vocal range. FSM's western signing classes are a chance for students to pursue their passions under the guidance of trained experts that helps them perform with great ease and precision.",
        walkthrough: "Course Walk Through",
        walkthroughList1: "The Western Singing Lessons engage students in the right anatomical parts of the vocal engine to produce appealing sounds",
        walkthroughList2: "The course emphasizes the correct use of diverse techniques through our internationally benchmarked curriculum        ",
        walkthroughList3: "Students will engage their vocal engine in three parts - The Breathing Apparatus, the Vibrating Apparatus, and the Articulatory Apparatus",
        walkthroughList4: "They shall participate in stage performances and music workshops to develop confidence and sharpen their vocal skills",
        objective: "Objective of the Course",
        descriptionList1: "Our western singing lessons are designed to develop an in-depth understanding of singing styles & techniques to enhance external repertoire.",
        descriptionList2: "Students will demonstrate great artistic flair as they are introduced to a plethora of western singing lessons such as the Lip Trill, M&M, and Vowel pitching, and more.",
        },
      {
        id: "Topics",
        label: "Topics Covered",
        content: "Basics of music",
        descriptionList1: "Our western vocal online classes are about using the correct registers and engaging in the right anatomical parts of the vocal engine to produce appealing sounds.",
        descriptionList2: "The course emphasizes the proper use of diverse techniques through our effective online and western vocal offline classes.",
        descriptionList3: "Our western vocal curriculum includes three parts of the Vocal engine - The Breathing Apparatus, the Vibrating Apparatus, and the Articulatory Apparatus.",
        descriptionList4: "The songs have been chosen as per the technical advancements of our budding musicians.",
        descriptionList5: "Plus, we ensure that our selection of music is both engaging & challenging for every child to reap maximum benefits from their learning outcomes.",
        },
      {
        id: "outcome",
        label: "Learning Outcomes",
        content: "Student will be able to perform following topics",
        descriptionList1: "Students will master their vocal range with singing exercises such as the Lip Trill, M&M, and Vowel pitching to improve their breath endurance. They shall engage their vocal engine in three parts - The Breathing Apparatus, the Vibrating Apparatus, and the Articulatory Apparatus to develop clear and appealing sounds and sing with intonations",
        descriptionList2: "In our western vocal classes, students will be trained on voice modulation techniques, high and low-pitch sound, and a comprehensive understanding of the main parts of the Vocal engine, which will help them in building a strong foundation",
        descriptionList3: "They shall take part in group and solo music activities, workshops, and stage performances to build stage confidence",
        descriptionList4: "During our western vocal learning sessions, we will cover the different aspects of becoming a stage artist and teach our students how to modulate their voices to suit various styles as they bring more versatility to their performance pieces",
            }
    ];
return (
  <div className='max-w-6xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto'>
      {/* <!-- Hero --> */}
<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
{/* <!-- Grid --> */}
<div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
  <div>
    <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Unleash Your Inner Star:  <span className="text-blue-600">Learn Western Vocals</span></h1>
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
 
  <span className='text-lg font-light'>Sing your heart out loud with FSM's musical tribe, known to develop a pool of creatively agile aspirants following an internationally benchmarked music curriculum. For your growing passion to learn western vocals, we've our new-age pedagogy backed by tools, techniques, and interactive aides to help you learn more, sing more.

At FSM, we provide a well-organized and exciting curriculum that explores the vocal styles of Western music, including pop, rock, jazz, and more. While helping students improve their vocal technique, musical ability, and stage presence, our classes also encourage them to develop their own personal musical identities.

Our team of qualified maestros from India and abroad come with a wealth of knowledge and expertise to create a conducive setting for learners. The faculty supports you at every stage of the course, tracks your progress, and constantly curates novel ways to make your western vocal lessons engaging and super fun. Each student receives individual attention aimed at expanding their vocal capabilities (in terms of range, tone, and style) and providing direction in the areas of songwriting and recording.

To make comprehensive music education accessible to you, we offer offline western vocal music courses at our centers located across India in 40+ cities with online learning options for students of all backgrounds and experience levels to develop their vocal skills at their convenience.

Come, join us to explore the magic of music with a team of supremely talented experts.
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
                {item.descriptionList && <h>{item.walkthroughList1}</h>}<br /><br />
                {item.descriptionList && <h>{item.walkthroughList2}</h>}<br /><br />
                {item.descriptionList && <h>{item.walkthroughList3}</h>}<br /><br />
                {item.descriptionList && <h>{item.walkthroughList4}</h>}<br /><br />
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


export default WesternVocal