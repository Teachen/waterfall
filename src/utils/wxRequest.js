import wepy from 'wepy';
import util from './util';
import md5 from './md5';
import tip from './tip';

const API_SECRET_KEY = 'flq.iniulian.com/';
const TIMESTAMP = util.getCurrentTime();
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase());

const wxRequest = async(params = {}, url) => {
    let getSecondTip = wepy.getStorageSync("getSecondTip");
      
    if(getSecondTip == false){
        tip.loaded();       
    }else{  
        tip.loading(); 
    } 
     
    let data = params.query || {};                                                          
    let Method = data.method;   
    data.sign = SIGN;
    data.time = TIMESTAMP;                                                                                                                                                                                  
    let res = await wepy.request({                                                               
        url: url,                           
        method: Method,     
        data: data, 
        header: { 'Content-Type': 'application/json' }                        
    }); 
    tip.loaded();       
    return res;
};
 
module.exports = {      
    wxRequest       
}   



