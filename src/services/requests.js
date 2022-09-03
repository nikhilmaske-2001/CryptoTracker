import axios from "axios";

// Coin Detailed Screen Coin Details
export const getDetailedCoinData = async (coinId) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`);

        return response.data;
    } catch (e) {
        console.log(e);
    }
}

// Coin Detailed Screen Chart
export const getCoinMarketChart = async (coinId) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=1&interval=hourly`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// Homescreen Coin list
export const getMarketData = async (pageNumber = 1) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${pageNumber}&sparkline=false&price_change_percentage=24h`);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

// WatchlistedCoin data
export const getWatchlistCoins = async (pageNumber = 1, coinIds) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds}&order=market_cap_desc&per_page=100&page=${pageNumber}&sparkline=false`);

        return response.data;
    } catch (error) {
        console.log(error);
    }
}