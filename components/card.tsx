import React from 'react';
import {Card as MuiCard, CardContent, CardHeader, styled, Typography} from '@mui/material'

const MyCard = styled(MuiCard)`
  background-color: rgba(219, 116, 26, 0.8);
  width: 320px;
  height: 420px;
  margin-bottom: 1em;
  transition: transform .3s;
  
  &:hover {
    transform: translateY(-1.5rem) scale(1.03);
  }
`
const MyTypo = styled(Typography)`
  color: whitesmoke;
`
const MyHeader = styled(CardHeader)`
  color: whitesmoke;
  
  & > div > span > p{
    font-size: 1.6rem;
  //  font-weight: bolder;
    text-align: center;
  }
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
