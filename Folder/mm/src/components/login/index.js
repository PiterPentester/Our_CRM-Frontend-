import React, { Component } from 'react';
// import logo from './logo.svg';
import './style.css';
import Cookies from 'js-cookie';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
        };
    }
    
    login = e =>{
        e.preventDefault();
        console.log(this.state);
        fetch('http://127.0.0.1:8000/admin/', {
            method: 'post',
            headers: {
                "X-CSRFToken": Cookies("csrftoken"),
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            })
        }).then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    };

    formChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]:value,
        });
    };


    render() {
        return (
            <div className="bg-img">
                <div className="bg-img-overlay">
                    <div className="container">
                        <div className="flex-container">
                            <div className="flex-item">
                                <div className="about-company">
                                    <h1 className="company-name">Місто мрій</h1>
                                    <p className="sub-company-name">Будівельна компанія</p>
                                </div>
                            </div>
                            <div className="flex-item">
                                <div className="login-form">
                                    <form className="login" method="post" onSubmit={this.login}>
                                        <h1 className="login-label">Вхід для учасників</h1>
                                            <input name="login" type="text" placeholder="Імя користувача" onChange={this.formChange} />
                                            <input name="password" type="password" placeholder="Пароль" onChange={this.formChange} />
                                            <button type="submit" >ВХІД</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
