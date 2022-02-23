import React from 'react';
import {Card as MuiCard, CardContent, CardHeader, styled, Typography} from '@mui/material'

const MyCard = styled(MuiCard)`
  background-color: #db741a;
  width: 250px;
  height: 370px;
`
const MyTypo = styled(Typography)`
  color: whitesmoke;
  font-size: 0.9rem;
`
const MyHeader = styled(CardHeader)`
  color: whitesmoke;
  
  //& > div > span {
  //  font-size: 1.3rem;
  //  font-weight: bolder;
  //  text-align: center;
  //}
`

interface Props {
    features: string[]
    select: boolean
    title: React.ReactNode
}

function Card(props: Props) {
    const {features,title} = props
    return (
        <MyCard>
            <MyHeader title={title}/>
            <CardContent>
                {features.map((value, index) => {
                    return (<MyTypo key={index}>- {value}</MyTypo>)
                })}
            </CardContent>
        </MyCard>
    );
}

export default Card;
