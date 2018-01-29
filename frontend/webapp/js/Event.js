import React from 'react';
import axios from 'axios';

class ActionControl extends React.Component {
	constructor(props){
  	super(props);
  	this.state = {
			id : props.id,
			url: props.url
		};

		this.edit = this.edit.bind(this)
		this.remove = this.remove.bind(this)
	}

	edit(){

	}

	remove(){
		const requestUrlWithParam = this.state.url + '/' + this.state.id;
		axios.delete(requestUrlWithParam).then(function(res) {

		});
	}

	render(){
		return (
			<div className="d-flex mt-2">
				<button className="btn btn-outline-primary btn-sm" onClick={this.edit}>Edit</button>
				<button className="btn btn-outline-primary btn-sm ml-auto" onClick={this.remove}>X</button>
			</div>
		)
	}
}

class Event extends React.Component {
	constructor(props){
  	super(props);
  	this.state = {
			data : props.data,
			key: props.key,
			url: props.url
		};
	}

	render(){
		return (
			<li key={this.state.data.id}>
				<div className="card mt-2 mb-2">
                    <div className="card-body p-2">
                        <p className="card-title">{this.state.data.name} {this.state.data.date}</p>
                        <p className="card-subtitle text-muted">{this.state.data.location}</p>
                        <p className="card-text">{this.state.data.description}</p>
                        <ActionControl url={this.state.url} id={this.state.data.id}/>
                    </div>
				</div>
			</li>
		)
	}
}

export default Event;
