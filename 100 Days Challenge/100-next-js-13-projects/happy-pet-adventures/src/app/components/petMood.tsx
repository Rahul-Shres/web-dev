
export type Mood = 'happy' | 'sad';
export type Action = { type: "Make_Happy"} | { type: "Make_Sad"}

function moodReducer( state: Mood, action: Action) : Mood{
    switch (action.type) {
        case "Make_Happy": 
            return "happy";
        case "Make_Sad": 
            return "sad";
        default:
            return state;
    }


}

export default moodReducer;