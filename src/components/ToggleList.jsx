import React, { useState } from 'react';

const ToggleList = () => {
    // State to control visibility of the list
    const [showList, setShowList] = useState(false);

    // Function to toggle the visibility
    const toggleList = () => {
        setShowList(!showList);
    };

    return (
        <div>
            <button onClick={toggleList}>
                {showList ? 'Hide List' : 'Show List'}
            </button>

            {showList && (
                <div>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                        <li>Item 4</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ToggleList;
