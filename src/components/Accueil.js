import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/Post.css';
class Accueil extends Component {
    render() {
        const { posts } = this.props;
        const postData = posts.length ? (
            posts.map(post => {
                return (
                    <div className="base" key={post.id}>
                        <Link to={"/" + post.id}>
                            <h2 className="postTitle">{post.title}</h2>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                );
            })
        ) : (
                <p>Aucun article disponible</p>
            );
        return (
            <div className="accueil">
                <h4>Page d'accueil</h4>
                {postData}

            </div>
        )
    }
}
const mapStateProps = state => {
    return {
        posts: state.posts
    };
};
export default connect(mapStateProps)(Accueil);