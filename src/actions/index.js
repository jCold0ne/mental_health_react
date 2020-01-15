// import UnsplashApi from "./../apis/unsplash_api";

export const setCondition = (conditions) => {
    return {
        type: "SET_CONDITIONS",
        payload: conditions
    }
}