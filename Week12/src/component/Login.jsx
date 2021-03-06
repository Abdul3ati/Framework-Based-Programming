import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div>
            <h2>Form Login</h2>
            <form>
                <h1>Tugas Pertemuan Ketiga</h1>
                    <div className="container">
                    
                    <label for="name"><b>Username </b></label> 
                    <span> 
                        <input name="name" id="name" type="text" placeholder="masukan Username"/> 
                    </span> 

                    <label for="password"><b>Password </b></label> 
                    <span> 
                        <input name="password" id="password" type="password" placeholder="Masukkan Password Anda"/> 
                    </span> 

                        <button type="submit">Login</button>

                        <div style={{textAlign: "center"}}>
                            <input type="checkbox" defaultChecked/> Remember Me
                        </div>
                    </div>

                    <div className="container" style={{textAlign: 'center'}}> 
                        <button type="button" className="btncancel">Cancel</button>
                    </div>
            </form>
        </div>
    );
}

export default Login;