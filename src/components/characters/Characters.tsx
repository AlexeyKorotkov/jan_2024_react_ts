import React from 'react';
import Character from "../character/Character";

const Characters = () => {
    return (
        <div>
            <Character
                name ={'bart'}
                img={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}
            >
                Lorem ipsum dolor sit amet
            </Character>

            <Character
                name ={'homer'}
                img={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}
            >
                homer
                homer
                homer
                homer
            </Character>
        </div>
    );
};

export default Characters;