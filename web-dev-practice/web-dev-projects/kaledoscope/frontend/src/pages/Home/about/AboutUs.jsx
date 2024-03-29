import React from 'react'
import Appbar from '../../../components/nabvar/Navbar'
import GallaryPage from '../gallary/GallaryPage'
import Footer from '../footer/Footer'

const AboutUs = () => {
  return (
    <>
    <Appbar />
    {/* <!-- Hero --> */}
<div className="relative overflow-hidden">
  {/* <!-- Gradients --> */}
  <div aria-hidden="true" className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
    <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
    <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
  </div>
  {/* <!-- End Gradients --> */}

  <div className="relative z-10">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="max-w-2xl text-center mx-auto">
        {/* <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
        About Kaleidoscope Music Academy
        </p> */}

        {/* <!-- Title --> */}
        <div className="mt-5 max-w-2xl">
          <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
          About Kaleidoscope Music Academy
          </h1>
        </div>
        {/* <!-- End Title --> */}

        <div className="mt-5 max-w-3xl">
          <p className="text-lg text-gray-600 dark:text-gray-400">Kaleidoscope Music Academy was established in 1985 with a vision to serve all music lovers and help them develop their skills in music. Located in Lazimpat, Kathmandu, Nepal, our academy provides comprehensive music education, emphasizing both theory and practical aspects.</p>
        </div>

        
      </div>
    </div>
  </div>
</div>
{/* <!-- End Hero --> */}


{/* <!-- Hero --> */}
<div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mb-10">
  {/* <!-- Grid --> */}
  <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
    <div class="lg:col-span-3">
      <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">Join us at </h1>
      <p class="mt-3 text-lg text-gray-800 dark:text-gray-400 "> Kaleidoscope Music Academy and let’s create harmonious melodies together!</p>
      <h1 class="block mt-3 text-lg font-bold text-gray-800 sm:text-4xl md:text-4xl lg:text-4xl dark:text-white">Contact Us </h1>

      <div class="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        
        <a class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        01-4524444,  01-4528428
        9851073966, 9841273562

        </a>
        <a class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
        Opposite to Star Mall, Putalisadak
        </a>
      </div>

      {/* <!-- Brands --> */}
     
      {/* <!-- End Brands --> */}
    </div>
    {/* <!-- End Col --> */}

    <div class="lg:col-span-4 mt-10 lg:mt-0">
      <img class="w-full rounded-xl" src="https://scontent.fktm16-1.fna.fbcdn.net/v/t1.6435-9/67580528_2439437626117158_5053347156266582016_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bR3AaL5lo3QAX9G2-IE&_nc_ht=scontent.fktm16-1.fna&oh=00_AfCopDw8He_K83mG61C4E8EFGopBGYBn8ijMhqT-LZ-6ig&oe=6620EF25" alt="Image Description" />
    </div>
    {/* <!-- End Col --> */}
  </div>
  {/* <!-- End Grid --> */}
</div>
{/* <!-- End Hero --> */}



{/* <!-- Icon Blocks --> */}
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="max-w-2xl mx-auto">
    {/* <!-- Grid --> */}
    <div class="grid gap-12">
      <div>
        <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
        What We Offer
        </h2>
        <p class="mt-3 text-gray-800 dark:text-gray-400">
        At Kaleidoscope Music Academy, we offer a wide range of music classes, including:
        </p>
      </div>

      <div class="space-y-6 lg:space-y-10">
        {/* <!-- Icon Block --> */}
        <div class="flex">
          <svg class="flex-shrink-0 mt-2 size-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
              Guitar
            </h3>
            <p class="mt-1 text-gray-600 dark:text-gray-400">
            Learn to strum and play melodies on the guitar.
            </p>
          </div>
        </div>
        {/* <!-- End Icon Block --> */}

        {/* <!-- Icon Block --> */}
        <div class="flex">
          <svg class="flex-shrink-0 mt-2 size-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
            Bass Guitar
            </h3>
            <p class="mt-1 text-gray-600 dark:text-gray-400">
            Master the rhythm and groove of bass lines.
            </p>
          </div>
        </div>
        {/* <!-- End Icon Block --> */}

        {/* <!-- Icon Block --> */}
        <div class="flex">
          <svg class="flex-shrink-0 mt-2 size-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
            Keyboard:
            </h3>
            <p class="mt-1 text-gray-600 dark:text-gray-400">
            Explore the world of piano and electronic keyboards.
            </p>
          </div>
        </div>
        {/* <!-- End Icon Block --> */}
        {/* <!-- Icon Block --> */}
        <div class="flex">
          <svg class="flex-shrink-0 mt-2 size-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
            Drums:
            </h3>
            <p class="mt-1 text-gray-600 dark:text-gray-400">
            Develop your rhythm and percussion skills.
            </p>
          </div>
        </div>
        {/* <!-- End Icon Block --> */}
        {/* <!-- Icon Block --> */}
        <div class="flex">
          <svg class="flex-shrink-0 mt-2 size-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
            Vocals (Western/Eastern):
            </h3>
            <p class="mt-1 text-gray-600 dark:text-gray-400">
            Discover your voice and learn to sing with expression.
            </p>
          </div>
        </div>
        {/* <!-- End Icon Block --> */}
        {/* <!-- Icon Block --> */}
        <div class="flex">
          <svg class="flex-shrink-0 mt-2 size-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
            Violin:
            </h3>
            <p class="mt-1 text-gray-600 dark:text-gray-400">
            Dive into the classical world of violin music.
            </p>
          </div>
        </div>
        {/* <!-- End Icon Block --> */}
        {/* <!-- Icon Block --> */}
        <div class="flex">
          <svg class="flex-shrink-0 mt-2 size-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
            Piano:
            </h3>
            <p class="mt-1 text-gray-600 dark:text-gray-400">
            Learn to play beautiful melodies and harmonies.
            </p>
          </div>
        </div>
        {/* <!-- End Icon Block --> */}
        {/* <!-- Icon Block --> */}
        <div class="flex">
          <svg class="flex-shrink-0 mt-2 size-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"/></svg>
          <div class="ms-5 sm:ms-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
            Music Production
            </h3>
            <p class="mt-1 text-gray-600 dark:text-gray-400">
            Unleash your creativity by learning the art of music production, recording, and sound engineering.
            </p>
          </div>
        </div>
        {/* <!-- End Icon Block --> */}
      </div>
    </div>
    {/* <!-- End Grid --> */}
  </div>
</div>
{/* <!-- End Icon Blocks --> */}

<GallaryPage />
<Footer />
</>
  )
}

export default AboutUs