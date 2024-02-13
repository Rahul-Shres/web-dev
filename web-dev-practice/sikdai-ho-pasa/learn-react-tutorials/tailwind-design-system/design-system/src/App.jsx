import { motion } from "framer-motion"


export default function App() {
  const transition = {
    duration: 1, // Adjust as desired (in seconds)
    ease: 'easeOut', // Customize easing function if needed
  };
  return (
    <><h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  <h2>please check index.css file</h2>
    <button className="btn">Hover Me</button>
    <motion.input 
    whileHover={{ scale: 1.2 , rotateX: 180, rotateZ:20}}
    transition={transition} 
    onHoverStart={() => console.log('Hover starts')}
    onHoverEnd={() => console.log('Hover Ends')}
    placeholder="email" 
    type="text"/>

    <h2>To Do:</h2>
    <p>I think we can create a component and pass height width, child to framer motion component</p>
  </>
    

  )
} 