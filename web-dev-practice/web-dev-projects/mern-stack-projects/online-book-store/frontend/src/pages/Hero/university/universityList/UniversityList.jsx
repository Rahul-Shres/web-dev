import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@nextui-org/react";
import { Chip } from "@nextui-org/react";

const UniversityList = () => {
  const [isApplied, setIsApplied] = React.useState(false);

  // Dummy data for three universities
  const universitiesData = [
    {
      name: 'Harvard University',
      twitterHandle: 'Harvard',
      avatar: '/avatars/avatar-1.png',
      tuitionFees: '$50,000',
      scholarship: 'Yes',
      applicationFees: '$100',
      semesters: ['Fall', 'Spring', 'Summer'],
      hashtag: '#Ivy_league',
      applyingCount: 4,
      appliedCount: 97100,
    },
    {
      name: 'MIT',
      twitterHandle: 'MIT',
      avatar: '/avatars/avatar-2.png',
      tuitionFees: '$45,000',
      scholarship: 'No',
      applicationFees: '$75',
      semesters: ['Fall', 'Spring'],
      hashtag: '#Engineering',
      applyingCount: 2,
      appliedCount: 85000,
    },
    {
      name: 'Stanford University',
      twitterHandle: 'Stanford',
      avatar: '/avatars/avatar-3.png',
      tuitionFees: '$55,000',
      scholarship: 'Partial',
      applicationFees: '$120',
      semesters: ['Fall', 'Winter', 'Spring'],
      hashtag: '#Innovation',
      applyingCount: 6,
      appliedCount: 105000,
    },
    {
      name: 'Stanford University',
      twitterHandle: 'Stanford',
      avatar: '/avatars/avatar-3.png',
      tuitionFees: '$55,000',
      scholarship: 'Partial',
      applicationFees: '$120',
      semesters: ['Fall', 'Winter', 'Spring'],
      hashtag: '#Innovation',
      applyingCount: 6,
      appliedCount: 105000,
    },
    {
      name: 'Stanford University',
      twitterHandle: 'Stanford',
      avatar: '/avatars/avatar-3.png',
      tuitionFees: '$55,000',
      scholarship: 'Partial',
      applicationFees: '$120',
      semesters: ['Fall', 'Winter', 'Spring'],
      hashtag: '#Innovation',
      applyingCount: 6,
      appliedCount: 105000,
    },
    {
      name: 'Stanford University',
      twitterHandle: 'Stanford',
      avatar: '/avatars/avatar-3.png',
      tuitionFees: '$55,000',
      scholarship: 'Partial',
      applicationFees: '$120',
      semesters: ['Fall', 'Winter', 'Spring'],
      hashtag: '#Innovation',
      applyingCount: 6,
      appliedCount: 105000,
    },
  ];

  return (
<div className="flex flex-wrap justify-center gap-5 max-h-full rounded-3xl">
      {universitiesData.map((university, index) => (
        <Card key={index} className=" w-96  dark:bg-slate-800 bg-slate-200		  ">
          <CardHeader className="justify-between">
            <div className="flex gap-5">
              <Avatar isBordered radius="full" size="md" src={university.avatar} />
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-small font-semibold leading-none text-default-600">{university.name}</h4>
                <h5 className="text-small tracking-tight text-default-400">@{university.twitterHandle}</h5>
              </div>
            </div>
            <Button
              className={isApplied ? "bg-transparent text-foreground border-default-200" : ""}
              color="primary"
              radius="full"
              size="sm"
              variant={isApplied ? "bordered" : "solid"}
              onPress={() => setIsApplied(!isApplied)}
            >
              {isApplied ? "Not Applied" : "Apply"}
            </Button>
          </CardHeader>
          <CardBody className="px-3 py-0 text-small">
            <div className='flex flex-col items-center justify-start space-x-2'>
              <p>Tuition Fees: {university.tuitionFees}</p>
              <p>Scholarship: {university.scholarship}</p>
              <p>Application Fees: {university.applicationFees}</p>
            </div>
            <div className='flex items-start justify-center space-x-2 '>
              {university.semesters.map((semester, index) => (
                <Chip color="primary" key={index} size="md">{semester}</Chip>
              ))}
            </div>
            <span className="pt-2">
              {university.hashtag}
              <span className="py-2" aria-label="computer" role="img">
                💻
              </span>
            </span>
          </CardBody>
          <CardFooter className="gap-3">
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">{university.applyingCount}</p>
              <p className="text-default-400 text-small">Applying</p>
            </div>
            <div className="flex gap-1">
              <p className="font-semibold text-default-400 text-small">{university.appliedCount}</p>
              <p className="text-default-400 text-small">Applied</p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default UniversityList;
