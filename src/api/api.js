import {
  wxRequest
} from '@/utils/wxRequest';

let env = "-test" //-dev 或者 -test 
const apiMall = 'https://api.fuliaoquan.com/matrix/niukou';    


//微信的jscode换取sessionKey 
const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/user/SessionKey");  

//图片列表  
const GetList= (params) => wxRequest(params, apiMall + '/pic/GetList');

//生产单详情
const GetDetails= (params) => wxRequest(params, apiMall + '/pic/GetDetails');
  
//添加数据到数据库用户的信息头像信息oppid
const addUser= (params) => wxRequest(params, apiMall + '/user/Login');

export default { 
  wxJsCode2Session, 
  GetDetails,
  GetList,
  addUser
} 

