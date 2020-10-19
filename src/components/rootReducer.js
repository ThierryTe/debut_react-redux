//store principal
//initialisation de l'état du store
const initState = {
    posts: [
        {
            id: 1,
            title: "Je suis le premier article",
            body: "Mon essai sur redux est très intéressant"
        },
        {
            id: 2,
            title: "Je suis le deuxième article",
            body: "J'apprend vite et je suis rigoureux"
        },
        {
            id: 3,
            title: "Je suis le troisième article",
            body: "La fortune appartient aux audacieux"
        },
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === "DELETE_POST") {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }
    return state
}
export default rootReducer;