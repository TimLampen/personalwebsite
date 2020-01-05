import React from 'react';
import SimpleCard from "./SimpleCard";


export default function CardBody() {

    return (
        <SimpleCard
            type="JavaScript (React Native) Phone Game"
            title="Guess The Word"
            body="A definition is given and the player narrows down the potential
            answers by guessing english words. If the word is in between the given
            bounds in the clouds (but not the answer), the bounds are updated and the
            user guesses again.
"/>
    );
}