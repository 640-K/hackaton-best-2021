import React, {useState} from "react";
import {register} from "./firebase";
import ReactDOM from 'react-dom';
import App from "./App";

const Login = ({setUser}) => {
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center" style={{"height": "100vh"}}>
                <div className="col-4">
                    <div className="card">
                        <div className="card-body " >
                            <form autoComplete="off" onSubmit={(event)=>{
                                event.preventDefault();
                                setLoading(true)
                                register(name).then((user)=>{
                                    setUser(user.currentUser.displayName)
                                })
                            }}>
                                <div className="form-group">
                                    <input id='nameinput' type="text" className="form-control" name="username"
                                           placeholder="Type username" required={true} pattern="[A-Za-z]{3,16}"
                                           maxLength="16" value={name} onInput={e => setName(e.target.value)}/>
                                </div>
                                <button type="submit" id="sendlogin" className="btn btn-primary w-100">
                                    Register {loading && <span className="spinner-border spinner-border-sm" role="status"
                                           aria-hidden="true"/>}
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