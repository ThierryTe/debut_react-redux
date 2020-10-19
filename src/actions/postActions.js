//function du deletePost qui prend en paramètre un type DELETE_POST et un payload id
export const deletePost = id => {
    return {
        type: 'DELETE_POST',
        id
    }
}