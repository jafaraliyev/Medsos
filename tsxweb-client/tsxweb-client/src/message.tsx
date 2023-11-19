import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
export type Message={
  text:string
};

export default function BasicCard(message:Message, index :number) {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h5" component="div" key={index}>
                    {message.text}
                </Typography>
            </CardContent>
        </Card>
    );
}