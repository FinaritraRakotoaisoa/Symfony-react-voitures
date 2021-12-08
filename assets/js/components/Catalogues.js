import React, {Component} from 'react';
import axios from 'axios';

class Catalogues extends Component { 

 constructor() {
 	super();
 	this.state = { catalogues:[], loading: true};
 }

 componentDidMount(){
 	this.getCatalogues();
 }

 getCatalogues(){
 	axios.get('http://localhost:8000/api/catalogues').then(catalogues => {
 		this.setState({ catalogues: catalogues.data, loading: false})
 	})
 }

 render(){

 	const loading = this.state.loading;
 	return(

            <div>
                <section className="row-section">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center"><span>Liste des catalogues voitures</span>
                            CATALOGUES VOITURES</h2>
                        </div>
                        {loading ? (
                            <div className={'row text-center'}>
                                <span className="fa fa-spin fa-spinner fa-4x"></span>
                            </div>
                        ) : (
                            <div className={'row'}>
                                { this.state.catalogues.map(catalogue =>
                                    <div className="col-md-10 offset-md-1 row-block" key={catalogue.id}>
                                        <ul id="sortable">
                                            <li>
                                                <div className="media">
                                                    <div className="media-left align-self-center">
                                                        <img className="rounded-circle"
                                                             src={catalogue.imageURL}/>
                                                    </div>
                                                    <div className="media-body">
                                                        <h4>{catalogue.name}</h4>
                                                        <p>{catalogue.description}</p>
                                                    </div>
                                                    <div className="media-right align-self-center">
                                                        <a href="#" className="btn btn-default">Commenter</a>
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
export default Catalogues;