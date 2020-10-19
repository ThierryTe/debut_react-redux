import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';
import '../css/Post.css';
class Post extends Component {

    //Evènement sur le click du bouton supprimer
    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push("/")
    }

    render() {
        const post = this.props.post ? (
            <div className="post">
                <h2 className="postTitle">{this.props.post.title}</h2>
                <p>{this.props.post.body}</p>
                <button onClick={this.handleClick}>Supprimer</button>
            </div>
        ) : (
                <p>L'article n'existe pas !</p>
            );
        return (
            <div className="container">
                {post}
            </div>
        )
    }
}
//Affichage d'un article à travers son id
const mapStateProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id = id)
    };
};

//Action sur le store 
const mapDispatchToProps = dispatch => {
    return {
        deletePost: id => {
            dispatch(deletePost(id))
        }
    };
}
export default connect(mapStateProps, mapDispatchToProps)(Post);