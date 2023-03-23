import axios from "axios";

export const getEbayProductDetails = async (searchQuery) => {
    const options = {
        method: "POST",
        url: "https://ebay-average-selling-price.p.rapidapi.com/findCompletedItems",
        headers: {
            "content-type": "application/json",
            "X-RapidAPI-Key": "6e3bc1d031msh5140980f27995c8p1559e5jsn6a707fc97c99",
            "X-RapidAPI-Host": "ebay-average-selling-price.p.rapidapi.com",
        },
        data: JSON.stringify({
            keywords: searchQuery,
            excluded_keywords: "locked cracked case box read LCD",
            max_search_results: "240",
            category_id: "9355",
            remove_outliers: true,
            site_id: "0",
            aspects: [
                { name: "Model", value: "Apple iPhone X" },
                { name: "LH_ItemCondition", value: "3000" },
                { name: "Network", value: "Unlocked" },
                { name: "Storage Capacity", value: "64 GB" },
            ],
        }),
    };

    try {
        const response = await axios(options);
        const { data } = response;
        console.log(data);

        // Return the full data object instead of a subset
        return data;
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error);
        return null;
    }
};
