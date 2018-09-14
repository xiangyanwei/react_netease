import axios from 'axios' ;
export default  (url, data, type='get')=>{
  return new Promise((resolve, reject)=>{
    let promise ;
    if(type === 'get'){
      let paramString = '' ;
      if(data){
        // const keys = Object.keys(data) ;
        Object.keys(data).forEach((key, index)=>{
          paramString +=  key + '=' + data[key]
        })
        paramString = '?'+ paramString ;
      }
      url = url + paramString ;
      promise = axios.get(url) ;
    }else{
      promise = axios.post(url, data) ;
    }
    promise
      .then((res)=>{
        const result = res.data ;
        resolve(result) ;
      })
      .catch((err)=>{
        resolve(err) ;
      })

  })
}