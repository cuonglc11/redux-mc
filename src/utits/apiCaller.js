import axios from "axios";
import * as Config  from '../type/Config'
import { store } from "../redux/store";
export default function callApi(body,method='GET'){
  const  url = store.getState()
    return axios({
        method : method,
        url :  `${url?.laptop?.ipAddress?? 'null'}`,
        body :  body
    }).catch(err => {
        console.log(err , "err");
    })
}