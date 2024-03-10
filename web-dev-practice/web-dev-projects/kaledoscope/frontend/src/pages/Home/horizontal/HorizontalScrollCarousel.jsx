import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import vocal from './images/vocals.jpg';
import guitar from './images/guitar.jpg';
import drum from './images/Drum.jpg';
import jam from './images/JamStudio.jpg';
import keyboard from './images/keyboard.jpg';
import recording from './images/recording.jpg';
import ukulele from './images/ukulele.jpeg';
import Violin from './images/Violin.jpg';
import { Link } from "react-router-dom";
const Example = () => {
  return (
    <div className="bg-black">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-white text-5xl">
         Our Courses
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[780vh] bg-black	">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 rounded-3xl	">
          {cardData.map((card) => {
            return <Cards card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};


const Cards = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[500px] w-[500px] overflow-hidden bg-neutral-200 rounded-3xl"
    >
      <Card
        key={card.id}
        isFooterBlurred
        className={`h-full  ${card.isNew ? 'sm:col-span-3' : 'sm:col-span-2'}`}
      >
        <CardHeader className="absolute z-10 top-10 flex-col items-start">
          {card.isNew ? (
            <>
              <p className="text-tiny text-white/60 uppercase font-bold">New</p>
              <h4 className="text-black font-medium text-2xl">{card.title}</h4>
            </>
          ) : (
            <>
              <p className="text-tiny text-white/60 uppercase font-bold">Your day your way</p>
              <h4 className="text-white/90 font-medium text-xl">{card.title}</h4>
            </>
          )}
        </CardHeader>

        <Image
          removeWrapper
          isZoomed
          alt="NextUI Fruit Image with Zoom"
          src={card.imageUrl}
        />

        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Breathing app icon"
              className="rounded-full w-10 h-11 bg-black"
              src="/images/breathing-app-icon.jpeg"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">{card.title}</p>
              <p className="text-tiny text-white/60">Get a good night's sleep.</p>
            </div>
          </div>
          <Link to={card.link}>
            <Button radius="full" size="sm">Go to Course</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Example;

// Updated content relating to the courses:

const cardData = [
  {
    id: 1,
    isNew: false,
    title: 'Unlocking Your Vocal Potential',
    imageUrl: vocal,
    availability: 'Available soon.',
    notifyText: 'Get notified.',
    link: '/westernvoalclass'

  },
  {
    id: 2,
    isNew: false,
    title: 'Mastering Guitar: From Basics to Pro',
    imageUrl: guitar,
    availability: 'Available soon.',
    notifyText: 'Get notified.',
    link: '/guitarclass'

  },
  {
    id: 3,
    isNew: false,
    title: 'Dynamic Drumming Techniques',
    imageUrl: drum,
    availability: 'Available soon.',
    notifyText: 'Get notified.',
    link: '/drumclass'

  },
  {
    id: 4,
    isNew: false,
    title: 'Keyboard Wizardry: Learn to Play Like a Pro',
    imageUrl: keyboard,
    availability: 'Available soon.',
    notifyText: 'Get notified.',
    link: '/keyboardclass'

  },
  
  {
    id: 5,
    isNew: false,
    title: 'Music Production Class',
    imageUrl: recording,
    availability: 'Available soon.',
    notifyText: 'Get notified.',
    link: '/musicproductionclass'

  },
  {
    id: 6,
    isNew: false,
    title: 'Ukulele Adventures: From Beginner to Pro',
    imageUrl: ukulele,
    availability: 'Available soon.',
    notifyText: 'Get notified.',
    link: '/ukuleleclass'

  },
  {
    id: 7,
    isNew: false,
    title: 'Elevate Your Skills with Violin Mastery',
    imageUrl: Violin,
    availability: 'Available soon.',
    notifyText: 'Get notified.',
    link: '/voilinclass'

  },
  // Add more dummy data as needed
];




