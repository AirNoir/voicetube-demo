import axios from 'axios';
import Swal from 'sweetalert2'
import { apiBaseUrl } from '@/config.js'
import { cookieUtil } from '@/util.js'

export const setToken =  axios => {
  const token = cookieUtil.read('_token');
  if (token) {
    axios.defaults.headers.common['Authorization'] = `${token}`;
  } else {
    axios.defaults.headers.common['Authorization'] = ``;
  }
}

export const apiRoutesConfig = {
  video: {
    readList : {
      url: 'frontendQuiz',
      method: 'GET',
      alertError: true,
    }
  },
}


const responseHandler = (response, alertError = false) => {

  if (response.data.status){
    return response.data.data
  }
  else{
    if (alertError) {
      Swal.fire(`Err Code: ${response.data.err}` )
    }
    throw {msg: 'Error in api..'}
  }
}


const apiWrapper = (config, params) => {
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  // setToken(axios);
  return axios[config.method.toLowerCase()](`${apiBaseUrl}/${config.url}`, params).then(response => {
    return responseHandler(response, config.alertError)
  })
}

export default apiWrapper;