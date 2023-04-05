
import React, { Component } from "react";
// import Mycomponent from "./Mycomponent";
class Addcomponent extends Component {
    state = {
        Email: "",
        Password: ""

    }
    handleEmail = (event) => {
        this.setState({
            Email: event.target.value
        })
    }
    handlePassword = (event) => {
        this.setState({
            Password: event.target.value
        })
    }
    handleClick = (event) => {
        event.preventDefault()
        if (this.state.Email === "" || this.state.Password === "") {
            alert("Please check again Email or Password")
        }
        else {
            console.log(this.state)
            this.props.Addprofile({
                id: Math.floor(Math.random() * 10001),
                Emaill: this.state.Email,
                Passwordd: this.state.Password
            })
            alert("Login successfull")
        }
        this.setState({
            Email: "",
            Password: ""
        })
    }
    render() {

        return (
            <>

                <form>
                    <div>
                        Email:
                        <input
                            type="text"
                            value={this.state.Email}

                            onChange={(event) => this.handleEmail(event)}
                        />
                    </div>
                    <div>
                        Password:
                        <input
                            type="text"
                            value={this.state.Password}

                            onChange={(event) => this.handlePassword(event)}
                        />
                    </div>

                    <input type="submit"
                        onClick={(event) => this.handleClick(event)}
                    />

                </form>
            </>
        )

    }

}

export default Addcomponent;