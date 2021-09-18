// Set up default config for http requests here
import axios from 'axios';
import firebase from 'firebase';
import queryString from 'query-string'


const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
  });
  
  axiosClient.interceptors.request.use(async (config) => {
    // get token of user to check Authorization

    const currentUser= firebase.auth().currentUser;
    if(currentUser){
        const token = await currentUser.getIdToken();// lay toke cua user 
        config.headers.Authorization= `Bearer ${token}`
    }
    // const token = await getFirebaseToken();
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
  
    return config;
  });
  
  axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
      return response.data;
    }
  
    return response;
  }, (error) => {
    // Handle errors
    throw error;
  });
  
  export default axiosClient;