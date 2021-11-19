import React, {useState} from "react";

const Login = ({setName}) => {
    const [username, setUserName] = useState();


    return (
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{"height": "100vh"}}>
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <form action="" autoComplete="off" onSubmit={()=>{setName(true)}}>
                                <div className="form-group">
                                    <input id='nameinput' type="text" className="form-control" name="username" placeholder="Type username"
                                           required={true} pattern="[A-Za-z]{3,16}"
                                           maxLength="16" value={username} onChange={event => setUserName(event.target.value)}/>
                                </div>
                                <button type="submit" id="sendlogin" className="btn btn-primary" >
                                    start
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;