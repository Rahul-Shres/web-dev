"use client";
import React, { useReducer} from "react";
import moodReducer, {Mood, Action} from "./petMood";
import PetButton from "./PetButton";


const PetGame = () => {
    const [mood, dispatch] = useReducer(moodReducer, 'happy');

  return (
    <div>
      <h1>Virtual Pet</h1>
      <p>My pet is {mood}!</p>
      <PetButton label="Make Happy" onClick={() => dispatch({type: 'Make_Happy'})} />
      <PetButton label="Make Sad" onClick={() => dispatch({type: 'Make_Sad'})} />
    </div>
  )
}

export default PetGame
