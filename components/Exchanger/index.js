import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Style from './exchanger.module.css'
import Link from 'next/link'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        padding: '10px',
        width: 300,
        '&:hover':{
            borderBottom: '5px solid orange',
            backgroundColor: "lightblue"
        }
    },
        media: {
        height: 100,
        width: 100,
        marginLeft: '15px',
        borderRadius: '10px',
        border: '3px solid black'
        },
    });

export default function Exchanger({name,id,established,country,url,image,trust_score}){
    const classes = useStyles();
    return (
        <Link href="/exchanger/[id]" as={`/exchanger/${id}`}>
            <a>
                <div className={Style.exchanger_container}>
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={image}
                            title="Cryptocurrency_image"
                            />
                            <CardContent className={Style.exchanger_content}>
                                <Typography gutterBottom className={Style.exchanger_name} variant="h5" component="h2">
                                    {name}
                                </Typography>
                                <Typography variant="body4" color="textPrimary" component="p">
                                    Negara: {country ?? "Data Kosong"}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Berdiri: {established ?? "Data Kosong"}
                                </Typography>
                                <Typography variant="body5" color="orange" component="p">
                                    Score Kepercayaan: {trust_score}
                                </Typography>
                            </CardContent>
                    </Card>
                </div>
            </a>
        </Link>
    )
}

