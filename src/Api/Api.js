export const getDataUser = async () => {
    try {
        const response = await fetch("http://localhost:4000/user")
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}