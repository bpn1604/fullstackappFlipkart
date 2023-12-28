import axios from 'axios';

export const authenticateSignup = async(data) => {
    const URL = 'https://flipkart-f2dz.onrender.com';
    try {
      return await axios.post(`${URL}/signup` , data)
       
    } catch (error) {
        console.log(error);
    }
}


export const authenticateLogin = async(data) => {
    const URL = 'https://flipkart-f2dz.onrender.com';
    try {
      return await axios.post(`${URL}/login` , data)
       
    } catch (error) {
        console.log(error);
        return error.response
    }
}
