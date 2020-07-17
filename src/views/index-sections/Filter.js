import React from "react";
import {Button} from "reactstrap";

function Filter(props) {
    let btns = props.filters.map(
        item => {
            if(props.cat === "used"){
                if(item.active){
                    return (<Button id={item.id} key={item.id} onClick={props.handel} >{item.name}</Button>)
                }
            }
            else {
                if(!item.active){
                    return (<Button id={item.id} key={item.id} onClick={props.handel}>{item.name}</Button>)
                }
            }
    }
)
    return(
        <>
            {btns}
        </>
    )
}

export default Filter;