//工具函数
import config from '../config/config';
import interfaceConfig from '../config/interface';
import store from 'store';

let util = {};
//util 数据对象，用于存取数据
let data = {};
let utilData = {
  sign:0,
  interfaceSign:0
};
//fn 闭包数据存储
util.setData = function (name,obj) {
  if(name){
    data[name] = obj;
    return true;
  }
  return false;
};
//fn 闭包数据获取
util.getData = function (name) {
  return data[name];
};
//fn 闭包数据删除
util.removeData = function (name) {
  if(name){
    delete data[name];
    return true;
  }
  return false;
};
//fn  删除所有的闭包数据
util.removeAllData = function () {
  data = {};
  return true;
};
//fn 数据存储 localstorage
util.storeSet=function(param,data){
  store.set(param,data);
};
//fn 数据获取 localstorage
util.storeGet=function(param){
  return store.get(param)
};
//fn 数据删除 localstorage
util.storeRemove=function(param){
  store.remove(param)
};
//fn 数据全清 localstorage
util.storeClear=function(){
  store.clearAll();
};
//fn 获取值的具体类型
util.getType = function (obj) {
  var typeStr = Object.prototype.toString.call(obj),
    typeArr = [];
  typeStr = typeStr.substring(1, typeStr.length - 1);
  typeArr = typeStr.split(" ");
  return typeArr[1];
};
//设置唯一id
util.getCid = function (string = "tydic") {
  utilData.sign++;
  return string + (new Date().getTime()+""+utilData.sign);
};
//fn 获得请求路径
util.getUrl = function (url) {
  let theUrl = "";
  if(interfaceConfig[url]){
    theUrl = config.port+interfaceConfig[url];
  }else{
    theUrl = config.port+url;
  }
  // if(theUrl == theUrl.replace("?","")){
  //   theUrl = theUrl + "?_=" + new Date().getTime()+"-"+utilData.interfaceSign++;
  // }else{
  //   theUrl = theUrl + "&_=" + new Date().getTime()+"-"+utilData.interfaceSign++;
  // }
  return theUrl
};
//fn 为数组中的对象设置key值
/**
 * @param {Array} 需要添加key值的数组，
 * @param {string} 添加的key值名称，默认为indexId
 * */
util.setKey = function (arr, sign = "indexId") {
  if (util.getType(arr) == "Array") {
    arr.forEach(function (value) {
      if (typeof value == "object") {
        value[sign] = util.getCid();
      }
    })
  }
  return arr;
};
//fn 字符串替换
util.replaceStr = function (str = "",type,replaceStr,replaceWithStr) {
  str = str || "";
  str = str.replace(/</g,"&").replace(/>/g,"&");
  switch (type){
    //根据传入的值直接替换
    case 1:
      return str.replace(new RegExp(replaceStr,'g'),replaceWithStr);
    //给某一段文字添加颜色
    case 2:
      let newStr = str;
      newStr = str.replace(/[/][#][a-fA-F0-9]{6}/g,"</span>").replace(/([#][a-fA-F0-9]{6})/g,"<span style='color: " + '$1' + "'>");
      return newStr;
    default:
      return str;
  }
};
//fn 获得url后面的参数
util.getAllQueryString = function () {
  if (!location.search) {
    return {};
  }
  var searchStr = location.search.substring(1),
    search = searchStr.split("&"),
    param = {};
  search.forEach(function (value) {
    var Arr = value.split("=");
    param[Arr[0]] = Arr[1];
  });
  return param;
};

export default util;
