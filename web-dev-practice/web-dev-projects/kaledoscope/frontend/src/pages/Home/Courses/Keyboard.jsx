import React from 'react'
import BookDemo from '../booking/BookDemo'
import {Tabs, Tab, Card, CardBody, CardHeader} from "@nextui-org/react";
import keyboard from '../../../assets/keyboard.jpg'
import ukeyboard from '../../../assets/unsplash-keyboard.jpg'
import Appbar from '../../../components/nabvar/Navbar';
import Footer from '../footer/Footer';
const Keyboard = () => {
  let tabs = [
      {
        id: "overview",
        label: "OverView",
        content: "In our keyboard music classes for beginners, students would be taught the basics of staff notations on the Treble clef and Bass clef. Students shall be trained on the basic scales and their applications on the instrument with a 2-handed accompaniment. Plus, our keyboard learning classes shall teach about dynamics, articulation, and accidental notes. In these pre-structured keyboard classes for beginners, students will learn Music Theory concepts and songs.",
        walkthrough: "Course Walk Through",
        descriptionList: "In our keyboard music classes, students receive comprehensive training covering posture, finger numbers, exercises, dynamics, and petascale techniques. They will also delve into rhythm reading, fostering a deeper understanding of music while learning note values such as Semibreve, Minim, Crotchet, and Quavers. Engaging in group musical activities and stage performances is encouraged, providing valuable opportunities to build confidence and overcome performance anxiety.",
        objective: "Objective of the Course",
        descriptionList1: "Students will be taught the basics of staff notations on both the Treble clef and Bass clef.",
        descriptionList2: "Students practice basic scales and apply them with two-handed accompaniment on instruments",
        finalContent: "The above-mentioned details are for beginner levels. We do provide courses for intermediate and advanced levels up to grade 8. All our courses are internationally benchmarked and accredited by the institutes like The Trinity College of London.",
      },
      {
        id: "topics",
        label: "Topics",
        content: "Basics of music (For Beginners)",
        walkthrough: "",
        descriptionList: "In our keyboard online classes, students will learn the basics of the Keyboard with a major focus on C pentascale and a few pieces from the curriculum. Following the same, students will be trained to create simple tunes like Twinkle Twinkle, Ode to Joy etc.",
        objective: "Students will be introduced to more exercises and pieces from the curriculum. They will be trained on scales like C Major and A minor and shall learn to play eighth notes. The songs in the book will be slightly advanced, and the students will be able to play an external repertoire of a similar level. They will also understand rhythm reading and sight reading in our Keyboard physical classes.",
        descriptionList1: "",
        descriptionList2: "Apart from what is covered in the 20 sessions, the students will be further trained on more keys like G Major and E minor.",
        finalContent: "The above-mentioned details are for beginner levels. We do provide courses for intermediate and advanced levels up to grade 8. All our courses are internationally benchmarked and accredited by the institutes like The Trinity College of London.",
      },
      {
        id: "outcome",
        label: "Learning Outcome",
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
  <>
  <Appbar />
  <div className='max-w-6xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto'>
      {/* <!-- Hero --> */}
<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
{/* <!-- Grid --> */}
<div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
  <div>
    <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Master the Art of  <span className="text-blue-600">Playing Keyboard</span></h1>
    <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Expert Instructors and Customized Curriculum for Keyboard Music Students.</p>

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
src={ukeyboard}
alt="Image Description"
/>

    <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>

    {/* <!-- SVG--> */}
    
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
 
  <span className='text-lg font-light'>Unleash Your Inner Keyboard Maestro at Kaleidoscope Music School

Ready to dive into the world of keyboard mastery? Kaleidoscope Music School welcomes you to embark on an exciting journey through the realm of keyboard playing – where the excitement never fades! Our classes offer more than just traditional lessons; they provide an immersive experience delving deep into the essence of music, molding you into a keyboard virtuoso in record time. Picture yourself captivating audiences, pouring your soul into each performance – that's the adventure we're crafting for you!

Navigate the keys with finesse through our comprehensive keyboard courses, designed for beginners and experienced players alike. From foundational techniques to advanced melodies, improvisation, and music theory – we cover it all.

At Kaleidoscope Music School, it's not merely about instruction; it's about igniting a passion that harmonizes with your love for music.

Meet our exceptional faculty, a blend of talented instructors from various backgrounds, all dedicated to making your keyboard-learning journey extraordinary. Whether you prefer the vibrancy of our modern facilities or the comfort of learning from home, our in-person and online options cater to every music enthusiast's needs.
<br />
<br />
<br />
<figure>
      <img class="w-full object-cover rounded-xl" src={keyboard} alt="Image Description" />
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

  </div>
  <Footer />
  </>
)
}


export default Keyboard