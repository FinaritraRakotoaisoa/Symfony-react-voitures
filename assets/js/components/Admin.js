import React, {Component} from 'react';
import axios from 'axios';

class Admin extends Component { 

 constructor() {
 	super();
 	this.state = { comms:[], loading: true};
 }

 componentDidMount(){
 	this.getComms();
 }

 getComms(){
 	axios.get('http://localhost:8000/api/comms').then(comms => {
 		this.setState({ comms: comms.data, loading: false})
 	})
 }

 render(){

 	const loading = this.state.loading;
 	return(

            <div>
                <section className="row-section">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center"><span>Liste des commentaires</span> Commentaires  clients</h2>
                        </div>
                        {loading ? (
                            <div className={'row text-center'}>
                                <span className="fa fa-spin fa-spinner fa-4x"></span>
                            </div>
                        ) : (
                            <div className={'row'}>
                                { this.state.comms.map(comm =>
                                    <div className="col-md-10 offset-md-1 row-block" key={comm.id}>
                                        <ul id="sortable">
                                            <li>
                                                <div className="media">
                                                    <div className="media-left align-self-center">
                                                        <img className="rounded-circle"
                                                             src={comm.imageURL}/>
                                                    </div>
                                                    <div className="media-body">
                                                        <h4>{comm.name}</h4>
                                                        <p>{comm.commentaire}</p>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <a href="#" className="btn btn-default">Repondre</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </section>
            </div>
        )	
 }
}
export default Admin;