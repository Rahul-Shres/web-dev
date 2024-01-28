

const columns = [
  {name: "ID", uid: "id", },
  {name: "NAME", uid: "name", },
  {name: "MAJOR", uid: "major", }, // which major is selected
  {name: "SCANNED DOCUMENTS", uid: "scannedDocuments",}, // documents scanned or not
  {name: "DS160", uid: "ds160", }, // ds160 form filled or not 
  {name: "INTERVIEW DATE BOOKING", uid: "interviewDateBooking", }, // interview date booked or not 
  {name: "APPLICATION", uid: "application", }, // application completed or not
  { name: "UNIVERSITY", uid: "university" , },
  { name: "NUMBER", uid: "number" , },
  {name: "COUNSELOR", uid: "counselor", },
  {name: "EMAIL", uid: "email", },
  {name: "APP FEE", uid: "status", },
  {name: "VISA STATUS", uid: "visaStatus", },
];

 const visaStatusOptions = [
  { uid: "accepted", name: "Accepted" },
  { uid: "processing", name: "Processing" },
  { uid: "rejected", name: "Rejected" },
];
const statusOptions = [
    {name: "Paid", uid: "paid"},
    {name: "Half Paid", uid: "half paid"},
    {name: "Not Paid", uid: "not paid"},
    {name: "Waived", uid: "waived"},
  ];


  const counselorOptions = [ 
    { name : 'Prakash Bhatta', uid : 'prakash bhatta'},
    { name : 'Ujjwol Dhakal', uid : 'ujjwol dhakal'},
  ];


  const universityOptions = [
    { name: 'Harvard University', uid: 'harvard-university' },
    { name: 'Stanford University', uid: 'stanford-university' },
    { name: 'Massachusetts Institute of Technology (MIT)', uid: 'mit' },
    { name: 'University of Oxford', uid: 'oxford-university' },
    { name: 'California Institute of Technology (Caltech)', uid: 'caltech' },
    // Add more universities as needed
];

const majorOptions = [
    { name: "Computer Science", uid: "computer-science" },
    { name: "Electrical Engineering", uid: "electrical-engineering" },
    { name: "Mechanical Engineering", uid: "mechanical-engineering" },
    { name: "Biology", uid: "biology" },
    { name: "Mathematics", uid: "mathematics" },
    // Add more undergraduate majors as needed
    
    { name: "Computer Science (Master's)", uid: "computer-science-master" },
    { name: "Electrical Engineering (Master's)", uid: "electrical-engineering-master" },
    { name: "Mechanical Engineering (Master's)", uid: "mechanical-engineering-master" },
    { name: "Biology (Master's)", uid: "biology-master" },
    { name: "Mathematics (Master's)", uid: "mathematics-master" },
    // Add more master's majors as needed
    
    { name: "Computer Science (Bachelor's)", uid: "computer-science-bachelor" },
    { name: "Electrical Engineering (Bachelor's)", uid: "electrical-engineering-bachelor" },
    { name: "Mechanical Engineering (Bachelor's)", uid: "mechanical-engineering-bachelor" },
    { name: "Biology (Bachelor's)", uid: "biology-bachelor" },
    { name: "Mathematics (Bachelor's)", uid: "mathematics-bachelor" },
    // Add more bachelor's majors as needed
  ];
  
  const ds160Options = [
    { name: "Filled", uid: "filled" },
    { name: "Not Filled", uid: "not-filled" },
  ];
  
  const interviewDateBookingOptions = [
    { name: "Booked", uid: "booked" },
    { name: "Not Booked", uid: "not-booked" },
  ];
  
  const applicationOptions = [
    { name: "Completed", uid: "completed" },
    { name: "Not Completed", uid: "not-completed" },
  ];
  

  const scannedDocuments = [
    { name: "Scanned", uid: "scanned" },
    { name: "Not Scanned", uid: "not-scanned" },
  ]
  
const userNumber = [
  { name: 9810359789, uid: "userNumber" },
]


const users = [
  {
    id: 1,
    name: "Tony Reichert",
    role: "CEO",
    university: "Harvard University",
    status: "Paid",
    age: "29",
    number: 9810359789,
    counselor: 'Ujjwol Dhakal',
    scannedDocuments: 'Scanned',
    ds160: 'Filled',
    visaStatus: 'accepted',
    interviewDateBooking: 'Booked',
    application: 'Completed',
    appFee: 'Paid',
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    email: "tony.reichert@example.com",
  },
  
];

export { columns, users, statusOptions, counselorOptions, universityOptions, majorOptions, ds160Options, interviewDateBookingOptions, applicationOptions, scannedDocuments, userNumber, visaStatusOptions };
