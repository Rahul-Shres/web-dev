import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

const Example = () => {
  return (
    <div className="bg-gradient-to-r from-purple-500 to-purple-900">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
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
    <section ref={targetRef} className="relative h-[300vh] bg-gradient-to-r from-green-50 to-purple-50	">
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
      key={cardData.id}
      className="group relative h-[350px] w-[350px] overflow-hidden bg-neutral-200 rounded-3xl"
    >
      
      {cardData.map((card) => (
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
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
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
        <Button radius="full" size="sm">Get App</Button>
      </CardFooter>
        </Card>

       

        
      ))}
    </div>
  );
};

export default Example;

const cardData = [
    // {
    //   id: 1,
    //   isNew: true,
    //   title: 'Your checklist for better sleep',
    //   imageUrl: 'https://images.unsplash.com/photo-1591365437381-2db81d59f1e0?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //   availability: 'Available soon.',
    //   notifyText: 'Get notified.',
    // },
    {
      id: 1,
      isNew: false,
      title: 'Your checklist for better sleep',
      imageUrl: 'https://images.unsplash.com/photo-1591365437381-2db81d59f1e0?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      availability: 'Available soon.',
      notifyText: 'Get notified.',
    },
    {
      id: 2,
      isNew: false,
      title: 'Your checklist for better sleep',
      imageUrl: 'https://images.unsplash.com/photo-1591365437381-2db81d59f1e0?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      availability: 'Available soon.',
      notifyText: 'Get notified.',
    },
    {
      id: 3,
      isNew: false,
      title: 'Your checklist for better sleep',
      imageUrl: 'https://images.unsplash.com/photo-1591365437381-2db81d59f1e0?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      availability: 'Available soon.',
      notifyText: 'Get notified.',
    },
    {
      id: 4,
      isNew: false,
      title: 'Your checklist for better sleep',
      imageUrl: 'https://images.unsplash.com/photo-1591365437381-2db81d59f1e0?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      availability: 'Available soon.',
      notifyText: 'Get notified.',
    },
    {
      id: 5,
      isNew: false,
      title: 'Your checklist for better sleep',
      imageUrl: 'https://images.unsplash.com/photo-1591365437381-2db81d59f1e0?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      availability: 'Available soon.',
      notifyText: 'Get notified.',
    },
    // Add more dummy data as needed
  ];