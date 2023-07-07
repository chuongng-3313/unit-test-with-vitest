
export const API_GET_USERS = `https://dummyjson.com/users`
export const reqUserList = async () => {
    try {
        const response = await fetch(API_GET_USERS);
        return  await response.json();
    } catch (error: any) {
        throw Error('Error', error)
    }
};
