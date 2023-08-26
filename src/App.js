import './App.css';
import React, { useState } from 'react';
import logo from './assets/Vector.png';
import textLogo from "./assets/NFTify.png";
import tokenLogo from './assets/tokenLogo.png';
import pairLogo from './assets/pairLogo.png';
import Searchbar from './components/searchbar/Searchbar';
import TokenInfo from './components/tokenInfo/TokenInfo';


function App() {
    const [selectedTokenAddress, setSelectedTokenAddress] = useState('');

    const handleSearch = (tokenAddress) => {
        setSelectedTokenAddress(tokenAddress);
    };
    return (
        <div className="container">
            <div className="side-bar">
                <div className="logo-container">
                    <div className="logo"><img src={logo} alt="" /></div>
                    <div className="textLogo"><img src={textLogo} alt="" /></div>
                </div>
                <div className="nav-token">
                    <img src={tokenLogo} alt="" />
                    <p>Token Address</p>
                </div>
                <div className="pair-add">
                    <img src={pairLogo} alt="" />
                    <p>Pair Address</p>
                </div>
            </div>
            <div className="top-nav">
                <Searchbar onSearch={handleSearch} />
            </div>
            <div className="connect-btn">
                <button>Connect</button>
            </div>

            <div className="tokenInfo">
                <TokenInfo tokenAddress={selectedTokenAddress} />
            </div>

        </div>
    );

}

export default App;
