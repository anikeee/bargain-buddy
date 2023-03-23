import axios from "axios";
import productData from "./productData.js";

export const getProductDetails = async (asin, country) => {
    // Check if you want to use the productData from JSON file instead of making API calls
    if (process.env.REACT_APP_USE_LOCAL_DATA === "true") {
        console.log(productData);
        return productData;
    }

    const options = {
        method: "GET",
        url: "https://amazon23.p.rapidapi.com/product-details",
        params: { asin: asin, country: country },
        headers: {
            "X-RapidAPI-Key": "6e3bc1d031msh5140980f27995c8p1559e5jsn6a707fc97c99",
            "X-RapidAPI-Host": "amazon23.p.rapidapi.com",
        },
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
