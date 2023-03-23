import axios from "axios";

const fetchProductDataByDepartment = async (department) => {
    const options = {
        method: "GET",
        url: "https://pricer.p.rapidapi.com/str",
        params: { q: department },
        headers: {
            "X-RapidAPI-Key": "6e3bc1d031msh5140980f27995c8p1559e5jsn6a707fc97c99",
            "X-RapidAPI-Host": "pricer.p.rapidapi.com",
        },
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

export { fetchProductDataByDepartment };
