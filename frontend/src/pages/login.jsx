import React, { Component } from 'react';
import '../css/login.css';

const Login = props => {
    return (
        <React.Fragment>
            <div className="login">
                <form>
                    <div>
                        <input placeholder="username"/>
                    </div>
                    <div>
                        <input placeholder="password"/>
                    </div>
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
                    </div>
                </form>
            </div>
        </React.Fragment>
    );
};

export default Login;