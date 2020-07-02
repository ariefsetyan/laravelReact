import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            contact:[]
        }
    }
    componentDidMount(){
        Axios.get('api/contact')
        .then(response => {
            this.setState({
                contact:response.data
        })
    }).catch(err => console.log(err));
    }
    render(){
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Home</div>
                            <Link to="/add" className="btn btn-primary">add</Link>
    
                            <div className="card-body">
                            <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">name</th>
                                <th scope="col">tel</th>
                                <th scope="col">tools</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                {
                                    this.state.contact !== null
                                    ? this.state.contact.map(contact => (
                                        <tr key = {contact.id}>
                                            <th scope="row">{contact.name}</th>
                                            <td>{contact.tel}</td>
                                        </tr>
                                    )): null
                                }
                                
                                {/* <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                </tr> */}
                            </tbody>
                            </table>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default Home;


