import React from 'react';

interface PetButtonProps {
    label : string;
    onClick : () => void;
}

function PetButton({label, onClick}: PetButtonProps) {
    return(
        <button onClick={onClick}>{label}</button>
    )
}

export default PetButton;