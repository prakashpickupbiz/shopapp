import React, { useState } from 'react';

const InputDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const toggleDropdown = () => setIsOpen((prev) => !prev);
    const handleInputChange = (e) => setInputValue(e.target.value);

    return (
        <div style={{ position: 'relative', display: 'inline-block' }}>
            {/* Trigger Button */}
            <button onClick={toggleDropdown} style={{ padding: '10px', cursor: 'pointer' }}>
                Toggle Dropdown
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        zIndex: 1,
                        background: 'white',
                        border: '1px solid #ccc',
                        padding: '10px',
                        width: '200px',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    {/* Input Box */}
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Type something..."
                        style={{
                            width: '100%',
                            padding: '8px',
                            marginBottom: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                        }}
                    />
                    {/* Dropdown Items */}
                    <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                        <li style={{ padding: '8px 0', cursor: 'pointer' }}>Option 1</li>
                        <li style={{ padding: '8px 0', cursor: 'pointer' }}>Option 2</li>
                        <li style={{ padding: '8px 0', cursor: 'pointer' }}>Option 3</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default InputDropdown;
