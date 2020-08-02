export const currentUser = (user) => {
    console.log(user, "user")
    return {
        type: "CURRENT_USER",
        payload: user,
    }
}