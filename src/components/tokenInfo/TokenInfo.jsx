import React, { useState, useEffect } from 'react';
import './TokenInfo.css';

function TokenInfo({ tokenAddress }) {
    const [tokenData, setTokenData] = useState(null);

    useEffect(() => {
        const fetchTokenData = async () => {
            try {
                const response = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${tokenAddress}`);
                const data = await response.json();
                setTokenData(data);
            } catch (error) {
                console.error('Error fetching token data:', error);
            }
        };

        if (tokenAddress) {
            fetchTokenData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tokenAddress]);


    return (
        <div className="token-info">
            {tokenData ? (
                <div>
                    <h2>Token Search Results</h2>

                    {console.log(tokenData)}
                    <div className="box-container">
                        <div className="box">
                            <h5>Basic Info</h5>
                            <div className="info">
                                <div className="left">

                                    <p>Pair created at: </p>
                                    <p>Symbol: </p>
                                    <p>DexId: </p>
                                    <p>PairAddress: </p>
                                </div>

                                <div className="right">
                                    <p> </p>
                                    <p>{tokenData.pairs[0].pairCreatedAt}</p>
                                    <p>{tokenData.pairs[0].baseToken.symbol}</p>
                                    <p>{tokenData.pairs[0].dexId}</p>
                                    <p>{tokenData.pairs[0].pairAddress.slice(0, 4)}</p>
                                </div>
                            </div>
                        </div>

                        <div className="box">
                            <h5>Base Token</h5>
                            <div className="info">
                                <div className="left">

                                    <p>Name: </p>
                                    <p>Symbol: </p>
                                    <p>Address: </p>
                                </div>

                                <div className="right">
                                    <p> </p>
                                    <p>{tokenData.pairs[0].baseToken.name}</p>
                                    <p>{tokenData.pairs[0].baseToken.symbol}</p>
                                    <p>{tokenData.pairs[0].baseToken.address.slice(0, 4)}</p>

                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <h5>Quote Token</h5>
                            <div className="info">
                                <div className="left">

                                    <p>Name: </p>
                                    <p>Symbol: </p>
                                    <p>Address: </p>
                                </div>

                                <div className="right">
                                    <p> </p>
                                    <p>{tokenData.pairs[0].quoteToken.name}</p>
                                    <p>{tokenData.pairs[0].quoteToken.symbol}</p>
                                    <p>{tokenData.pairs[0].quoteToken.address.slice(0, 4)}</p>

                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <h5>Price</h5>
                            <div className="info">
                                <div className="left">

                                    <p>Price Native: </p>
                                    <p>Price Usd: </p>
                                </div>

                                <div className="right">
                                    <p> </p>
                                    <p>{tokenData.pairs[0].priceNative}</p>
                                    <p>{tokenData.pairs[0].priceUsd}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Please enter the Token Address in the search bar and click on search icon to see the data.,<br /> Pair Address is not functional as of now.</p>
                
            )}
            
        </div>
    );
}

export default TokenInfo;
