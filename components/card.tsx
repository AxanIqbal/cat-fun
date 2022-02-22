import React from 'react';
import {Card as MuiCard, CardContent, styled, Typography} from '@mui/material'

const MyCard = styled(MuiCard)`
`

interface Feature {
    has: boolean
    text: string
}

interface Props {
    features: Feature[]
    select: boolean
}

function Card(props: Props) {
    const {features} = props
    return (
        <MyCard>
            <CardContent>
                {features.map((value, index) => {
                    return (<Typography key={index}>{value.text}</Typography>)
                })}
            </CardContent>
        </MyCard>
    );
}

export default Card;
