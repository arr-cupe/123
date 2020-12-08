import axios from 'axios'
// get的请求方式  没有参数的
export const req = (urls) => {
    return axios({
        url: urls,
        method: 'get'
    })
}
// get方式传参  params参数对象
export const reqs = (urls, params) => {
    return axios({
        url: urls,
        method: 'get',
        params: params,
    })
}

// 响应拦截
axios.interceptors.response.use(res=>{
    console.log(res);
    if(!res.data.isok){
        alert(res.data.info);
    }
    return res
});