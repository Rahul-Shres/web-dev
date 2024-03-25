import React from 'react'
import BookDemo from '../booking/BookDemo'
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import MusicProd from "../../../assets/music-prod.jpg"
import Footer from '../footer/Footer';
import Appbar from '../../../components/nabvar/Navbar';
const MusicProduction  = () => {
  let tabs = [
    {
        id: "overview",
        label: "OverView",
        content: "Our extensive music production classes are for learners who want to explore and understand the craft of music creation. It ensures the mastery of various production techniques, including sampling, synthesis, sound design, arrangement, and composition. The versatility of music production is evident as it can be applied in a wide range of musical genres, from classical compositions to modern electronic tracks. Our engaging lessons enhance your capability of creating perfect pitch compositions as it offers limitless creative possibilities.",
        walkthrough: "Course Walk Through",
        walkthroughList1: "In our music production classes, students will explore various production techniques and understand the fundamentals of music creation.",
        walkthroughList2: "They shall be trained on our internationally recognized music curriculum, followed by engaging workshops and activities to refine their skills.",
        walkthroughList3: "Students will be guided and exposed to collaborative projects to build confidence in their production abilities.",
        objective: "Objective of the Course",
        descriptionList1: "In our online music production classes, students will be trained on different production techniques, including sampling, synthesis, and arrangement.",
        descriptionList2: "The course includes exercises to practice different production skills and refine their techniques.",
        descriptionList3: "Students will be taught to produce musical pieces/songs and explore various creative possibilities in music production.",
      },
      {
        id: "Topics",
        label: "Topics Covered",
        content: "Basics of music",
        descriptionList1: "Logic Pro X.",
        descriptionList2: "Pro Tools.",
        descriptionList3: "FL Studio.",
        descriptionList4: "Steinberg Cubase 12.",
        descriptionList5: "Soundtrap.",
        },
      {
        id: "outcome",
        label: "Learning Outcomes",
        content: "Student will be able to perform following topics",
        descriptionList1: "Competence in sampling, synthesis, and sound design techniques.",
        descriptionList2: "Engaging in a personal music project to apply acquired skills and knowledge.",
        descriptionList3: "Ability to create diverse arrangements and compositions.",
        descriptionList4: "Opportunity to specialize in a preferred music genre, honing skills to a higher level.",
        descriptionList5: "Showcase of the culmination of learning through a final project presentation.",
        descriptionList6: "Guidance and support towards establishing a career in music production.",
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
    <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Learn Music Production:   <span className="text-blue-600">The Art of Mixing and Crafting</span></h1>
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
src={MusicProd}
alt="Image Description"
/>

    <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>
  </div>
  {/* <!-- End Col --> */}
</div>

{/* <!-- End Grid --> */}
<div>
  <p className=' text-2xl font-bold md:text-3xl'>
  Mastering Music Production in Three Months at Kaleidoscope Music Academy Nepal
  <br />
  <br />
 
  <span className='text-lg font-light'>Embark on a transformative journey into the world of music production with Kaleidoscope Music Academy Nepal. In just three months, with two classes per week, you'll unlock the secrets of drum programming, music arrangement, mastering, and production using various Digital Audio Workstations (DAWs). Let's delve into the immersive curriculum tailored to unleash your creative potential.
<br />
<br />
Month 1: Foundations <br />

Dive into the fundamentals of music production with a focus on establishing a strong groundwork.
Introduction to DAWs and their functionalities, understanding their interface and workflow.
Explore the basics of sound, delve into essential music theory concepts, and learn MIDI techniques.
Master recording techniques and familiarize yourself with essential tools and software instruments.
Gain insights into basic mixing and mastering techniques to polish your creations.
<br /><br />
Month 2: Advanced Techniques <br />

Elevate your skills with an exploration of advanced Digital Audio Workstations including Ableton Live, Logic Pro X, Pro Tools, FL Studio, Steinberg Cubase 12, and Soundtrap.
Harness the power of sampling, synthesis, and sound design to create unique sonic landscapes.
Dive deep into music arrangement and composition, understanding the intricacies of creating captivating melodies and harmonies.
Learn advanced mixing techniques, experiment with effects, and automate your workflow for seamless production.
Embark on a genre exploration journey, discovering the nuances of various musical styles and their production requirements.
<br /><br />
Month 3: Project-Based Learning<br />

Immerse yourself in hands-on project-based learning, where you'll bring your creative vision to life.
Collaborate with peers, exchange feedback, and refine your skills through constructive critique.
Specialize in a genre of your choice, honing your production techniques to perfection.
Showcase your prowess through a final project presentation, where you'll demonstrate your growth and creativity.
Receive personalized career guidance, laying the groundwork for a successful journey in the music production industry.
<br />
<br />
<br />
<figure>
      <img class="w-full object-cover rounded-xl" src="https://scontent.fbwa1-1.fna.fbcdn.net/v/t39.30808-6/316419356_508909341278378_4840668746136443013_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=B_kyCGp2FmIAX_2yMqz&_nc_ht=scontent.fbwa1-1.fna&oh=00_AfAtNE15G4AvQoDxj7fWEPlypCorbsMJrgMECaSY98k5Nw&oe=65DE3487" alt="Image Description" />
      
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
                {item.walkthrough && <span className='text-bold text-lg' >{item.walkthrough}</span>}<br /><br />
                {item.walkthroughList1 && <li>{item.walkthroughList1}</li>}<br /><br />
                {item.walkthroughList2 && <li>{item.walkthroughList2}</li>}<br /><br />
                {item.walkthroughList3 && <li>{item.walkthroughList3}</li>}<br /><br />
                {item.walkthroughList4 && <li>{item.walkthroughList4}</li>}<br /><br />
                {item.objective && <span className=' text-bold text-lg'>{item.objective}</span>}<br />
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


export default MusicProduction 