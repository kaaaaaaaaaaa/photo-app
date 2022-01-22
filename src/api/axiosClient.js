// Set up default config for http requests here
import axios from "axios";
import firebase from "firebase";
import queryString from "query-string";

// get token
const getFirebaseToken = async() => {
    //
    const currentUser = firebase.auth().currentUser;
    if (currentUser) return currentUser.getIdToken();
    console.log(currentUser)

    const hasRememberAccount = localStorage.getItem(
        "firebaseui::rememberedAccounts"
    );
    if (!hasRememberAccount) return null;

    //logged in but user not fetched (token chua init kip) -->
    //-> wait
    return new Promise((resolve, reject) => {
        const waitTimer = setTimeout(() => {
            //
            reject(null);
        }, 10000);

        //
        const unregisterAuthObserver = firebase
            .auth()
            .onAuthStateChanged(async(user) => {
                if (!user) {
                    //login user is not login
                    reject(null);
                }

                // if(user)
                const token = await user.getIdToken();
                console.log("Axios token:", token);
                resolve(token);
                unregisterAuthObserver();
                clearTimeout(waitTimer);
            });
    });
};

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "content-type": "application/json",
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async(config) => {


    const token = await getFirebaseToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }

        return response;
    },
    (error) => {
        // Handle errors
        throw error;
    }
);

export default axiosClient;