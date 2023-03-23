import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';

const TodayDeals = ({ lovedItems, removeLovedItem }) => {
    return (
        <List>
            {lovedItems.map((deal, index) => (
                <ListItem button key={index}>
                    <ListItemText
                        primary={
                            <div
                                style={{
                                    maxWidth: '70%',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {deal.title}
                            </div>
                        }
                        secondary={`${deal.shop} - ${deal.price}`}
                    />
                    <ListItemSecondaryAction>
                        <IconButton
                            edge="end"
                            aria-label="remove-love"
                            onClick={() => removeLovedItem(deal)}
                        >
                            <FavoriteIcon sx={{ color: red[500] }} />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
};

export default TodayDeals;
