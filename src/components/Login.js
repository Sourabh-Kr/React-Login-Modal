import React,{Component} from 'react';
export class Login extends Component{
    constructor(){
        super();
        this.state={
                firstname:"",
                lastname:"",
                email:"",
                password:""
        }
    }
    handleChange= (event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
        
    }
    handleSubmit=(event)=>{
        if(this.state.firstname=="" || this.state.lastname=="" || this.state.email==""){
            alert("Please enter the blank field");
            event.preventDefault()
        }else{
            alert("Hi "+this.state.firstname+" "+this.state.lastname+","+"your email id is "+this.state.email)
            this.setState({
                firstname:"",
                lastname:"",
                email:"",
                password:""
            })
            event.preventDefault()
        }
        
    }
    render(){
        console.dir(this.state);
        //alert()
        return(
            <div className="container">
                
                <div className="modal fade" id="myModls" data-keyboard="false" data-backdrop="static">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            
                            <div className="modal-body">
                                <p class="h4 mb-4 text-center">Sign up</p>
                                <form class=" border border-light" onSubmit={this.handleSubmit}>
                                    
                                <div class="form-group">
                                    <label for="defaultRegisterFormFirstName">First Name:</label>
                                    <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name" onChange={this.handleChange} name="firstname" value={this.state.firstname}/>

                                </div>
                                <div class="form-group">
                                    <label for="defaultRegisterFormLastName">Last Name:</label>
                                    <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name" onChange={this.handleChange} name="lastname" value={this.state.lastname}/>

                                </div>
                                <div class="form-group">
                                        <label for="defaultRegisterFormEmail">Email:</label>
                                        <input type="email" id="defaultRegisterFormEmail" class="form-control" placeholder="E-mail" onChange={this.handleChange} name="email" value={this.state.email}/>
                                </div>
                                <div class="form-group">
                                        <label for="defaultRegisterFormPassword">Password:</label>
                                        <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock" onChange={this.handleChange} name="password" value={this.state.password}/>

                                        <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted">
                                        At least 8 characters and 1 digit
                                        </small>

                                </div>
                                <button type="submit" class="btn btn-danger">Submit</button>
                                 </form>
                            </div>
                            <div className="modal-footer">
                                
                                {/* <button type="submit" class="btn btn-danger" data-dismiss="modal">Submit</button> */}
                                <button type="submit" class="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>

                </div>
                <a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" data-toggle="modal" data-target="#myModls">
                <span className="signup">Login</span></a>

            </div>
        )
    }
}