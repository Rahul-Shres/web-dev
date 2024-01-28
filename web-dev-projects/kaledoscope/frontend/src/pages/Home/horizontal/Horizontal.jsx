import React from 'react';
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

const Horizontal = () => {
  // Dummy data
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

  return (
    <div className='flex overflow-x-auto p-8'>
    <div className="max-w-[900px] gap-2 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 px-8">
      {cardData.map((card) => (
        <Card
          key={card.id}
          isFooterBlurred
          className={`w-full h-[280px] ${card.isNew ? 'sm:col-span-3' : 'sm:col-span-2'}`}
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
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
          {card.isNew && (
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">{card.availability}</p>
                <p className="text-black text-tiny">{card.notifyText}</p>
              </div>
              <Button className="text-tiny" color="primary" radius="full" size="sm">
                Notify Me
              </Button>
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
    </div>
  );
};

export default Horizontal;
