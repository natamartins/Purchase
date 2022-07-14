import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Divider,
} from "@material-ui/core";

const CustomCard = (props) => {
  return (
    <div className="page-container">
      <div className={props.containerClass}>
        <Card className="card">
          <CardActionArea className="card-action-area">
            <CardContent className="card-content">{props.children}</CardContent>
          </CardActionArea>
          {props.footer && (
            <div>
              <Divider />
              <CardActions className="card--footer">{props.footer}</CardActions>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default CustomCard;
