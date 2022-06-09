import React from "react";

function Wrapper(props){
    return (
        <div class="wrapper-container">
            <div class="wrapper">
                {props.children}
            </div>
        </div> 
    );
}

export default Wrapper;