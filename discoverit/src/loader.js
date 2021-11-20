import React from "react";

function Loading(){
	    return(
	        <div className="d-flex justify-content-center align-items-center" style={{"height": "100vh"}}>
                <div className="spinner-border text-primary justify-content-center align-items-center" role="status">
                    <span className="sr-only" />
                </div>
	        </div>
	    );}

export {Loading}