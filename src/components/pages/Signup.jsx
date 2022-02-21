import React from 'react';
import { Link } from 'react-router-dom';
 
class Signup extends React.Component {
    state = {
        username: '',
        email: '',
        password: ''

        //logged in check
    };



    onSubmit = (e) => {
        e.preventDefault();
        //auth functions of mongo
        //set login successful
        
    }
    render(){
        return (
            <section className="signup-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="signup-form" >
                            <h3>Create your Account</h3>

                            <form onSubmit={this.onSubmit} style={{
                            textAlign: "left",
                        
                        }}>
                                <div className="form-group" >
                                    <label style={{
                                        marginLeft: '10px'
                                    }}>Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Name"
                                        style={{
                                            textAlign: 'left',
                                        }}
                                        value={this.state.username}
                                        onChange={e => this.setState({ Name: e.target.value })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label  style={{
                                        marginLeft: '10px'
                                    }}>Email</label>
                                    <input 
                                        type="email" 
                                        style={{
                                            textAlign: 'left',
                                        }}
                                        className="form-control" 
                                        placeholder="Email Address" 
                                        value={this.state.email}
                                        onChange={e => this.setState({ email: e.target.value })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label  style={{
                                        marginLeft: '10px'
                                    }}>Password</label>
                                    <input 
                                        type="password" 
                                        style={{
                                            textAlign: 'left',
                                        }}
                                        className="form-control" 
                                        placeholder="Password" 
                                        value={this.state.password}
                                        onChange={e => this.setState({ password: e.target.value })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label  style={{
                                        marginLeft: '10px'
                                    }}>.Mobile No</label>
                                    <input 
                                        type="text" 
                                        style={{
                                            textAlign: 'left',
                                        }}
                                        className="form-control" 
                                        placeholder="Number" 
                                        value={this.state.Number}
                                        onChange={e => this.setState({ Number: e.target.value })}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">Signup</button>

                                <p><Link to="/login">!Login</Link> ?Already a registered user </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Signup;