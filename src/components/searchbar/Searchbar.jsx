import React from 'react'
import { useState } from 'react';
import './Searchbar.css';
import searchButton from '..//../assets/searchButton.png';

function Searchbar({ onSearch }) {
    const [tokenAddress, setTokenAddress] = useState('');

    const handleInputChange = (event) => {
        setTokenAddress(event.target.value);
    };

    const handleSearch = () => {
        onSearch(tokenAddress);
    };
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search"
                value={tokenAddress}
                onChange={handleInputChange}

            />
            <div className="search-btn">
                <img src={searchButton} onClick={handleSearch} alt="" />
            </div>
        </div>
    )
}

export default Searchbar
