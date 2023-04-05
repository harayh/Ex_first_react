import React, { Component } from "react";
import "./demo.css"
class Childcomponent extends Component {

    state = {
        check: false
    }



    handleClick = () => {
        this.setState({
            check: !this.state.check
        })
    }
    handleOnClickDelete = (job) => {
        this.props.Deleteprofile(job)
    }

    render() {

        let { list } = this.props
        return (
            <>
                <div>
                    {this.state.check === false &&

                        <button onClick={() => this.handleClick()} > show</button>}
                </div>
                <div>
                    {this.state.check === true &&
                        <div style={{ color: 'red' }}>
                            {
                                list.map((item, index) => {
                                    return (
                                        <div className={item.id}>
                                            {item.Emaill}- {item.Passwordd} <></> <span
                                                onClick={() => this.handleOnClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })

                            }
                            <button onClick={() => this.handleClick()} > hide</button>
                        </div>}


                </div >




            </>
        )
    }
}

export default Childcomponent;