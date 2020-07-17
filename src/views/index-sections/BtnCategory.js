import React from "react";

// reactstrap components
import { Button} from "reactstrap";


// core components

const BtnCategory = ( props ) => {
    return (
        <Button 
            size="lg" 
            className="info" 
            key={props.id} 
            onClick={props.changeMain} 
            name={props.name}> 
        
            {props.name}
        </Button>
    )
};





export default BtnCategory;