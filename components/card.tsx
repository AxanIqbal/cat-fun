import React from 'react';
import {
    Card as MuiCard,
    CardContent,
    CardHeader,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    styled,
    Typography
} from '@mui/material'
import {FiCheckCircle} from "react-icons/fi";

const MyCard = styled(MuiCard)`
  background-color: rgba(219, 116, 26, 0.8);
  width: 350px;
  height: 500px;
  margin-bottom: 1em;
  transition: transform .3s;
  flex-shrink: 0;
  
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
                <List>

                {features.map((value, index) => {
                    return (
                        <ListItem key={index} disablePadding>
                            <ListItemIcon>
                                <FiCheckCircle size={20} color={'whitesmoke'}/>
                            </ListItemIcon>
                            <ListItemText primary={<MyTypo>{value}</MyTypo>}/>
                        </ListItem>
                    );
                })}
                </List>
            </CardContent>
        </MyCard>
    );
}

export default Card;
