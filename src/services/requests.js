import axios from "axios";

export const getDetailedCoinData = async (coinId) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}?community_data=false&developer_data=false&sparkline=false`);
        return response.data;
    } catch (e) {
        console.log(e);
    }
}