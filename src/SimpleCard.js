import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./SimpleCard.css"



export default class SimpleCard extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="cardHolder">
                <Card className="card">
                    <CardContent>
                        <Typography className="title" color="textSecondary" gutterBottom>{this.props.type}</Typography>
                        <Typography variant="h5" component="h2">{this.props.title}</Typography>
                        <Typography variant="body2" component="p">{this.props.body}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" className="button">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}
