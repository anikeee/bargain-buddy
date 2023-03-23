import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const SavedItems = () => {
    const [lovedItems, setLovedItems] = useState(() => {
        const storedLovedItems = localStorage.getItem("lovedItems");
        return storedLovedItems ? JSON.parse(storedLovedItems) : [];
    });

    const toggleLovedItem = (product) => {
        const newLovedItems = lovedItems.filter((item) => item.link !== product.link);
        setLovedItems(newLovedItems);
        localStorage.setItem("lovedItems", JSON.stringify(newLovedItems));
    };

    const renderLovedItems = () => {
        if (lovedItems.length === 0) {
            return <Typography variant="h6">You haven't saved any items yet.</Typography>;
        }

        return (
            <Grid container spacing={2}>
                {lovedItems.map((product, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card
                            sx={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="140"
                                image={product.img}
                                alt={product.title}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <IconButton
                                    edge="end"
                                    color="inherit"
                                    onClick={() => toggleLovedItem(product)}
                                >
                                    <FavoriteIcon color="error" />
                                </IconButton>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#007BFF" }}>
                                    {product.shop}
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="div"
                                    sx={{
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        cursor: "default",
                                    }}
                                    title={product.title}
                                >
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Price: {product.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        );
    };

    return <>{renderLovedItems()}</>;
};

export default SavedItems;
