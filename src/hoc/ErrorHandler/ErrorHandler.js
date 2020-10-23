import React, { Component } from 'react'
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxiliar/Auxiliar";

const ErrorHandler = (WrappedComp, axiosInst) => {
    return class extends Component {
        state = {
            error: null
        }
        componentDidMount(){

            this.respInterceptor = axiosInst.interceptors.response.use(null , error =>{
                console.log(error);
                console.log(this.state.error);
                this.setState({ error : error})
            })

            // axiosInst.interceptors.request.use(req =>{
            //     this.setState({ error: null})
            // })
        }

        componentWillUnmount(){
            axiosInst.interceptors.response.eject(this.respInterceptor);
        }

        errorLectureConfirm = () => {
            this.setState({ error: null})
        }

        render(){
            return(
                <Aux>
                    <Modal 
                        show={this.state.error}
                        closedModal={this.errorLectureConfirm}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComp {...this.props} />
                </Aux>
            )
        } 
    }
}

export default ErrorHandler;
