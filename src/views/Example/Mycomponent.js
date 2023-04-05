import React, { Component } from "react";
import Addcomponent from "./Addcomponent";
import Childcomponent from "./Childcomponent";
class Mycomponent extends Component {
    state = {
        arrayprofile: [
            { id: 1, Emaill: "huynhngoctruongg@gmail.com", Passwordd: "12345" },
            { id: 2, Emaill: "huynhkieumyy@gmail.com", Passwordd: "123456" }

        ]
    }

    Addprofile = (newprofile) => {
        this.setState({
            arrayprofile: [...this.state.arrayprofile, newprofile] // way writen short
        })
    }
    Deleteprofile = (job) => {
        let Narrayprofile = this.state.arrayprofile
        Narrayprofile = Narrayprofile.filter(item => item.id !== job.id)
        this.setState({
            arrayprofile: Narrayprofile
        })
    }
    render() {
        return (
            <>
                <Addcomponent
                    Addprofile={this.Addprofile}
                />
                <Childcomponent
                    list={this.state.arrayprofile}
                    Deleteprofile={this.Deleteprofile}

                />

            </>
        )
    }
}

export default Mycomponent;