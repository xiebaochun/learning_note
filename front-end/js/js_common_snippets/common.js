// 获取url参数
function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

// 验证手机号码(strict)
function validPhoneNumber( number ) {
    if( !number ) return false;
    number = number.replace( ' ', '' );
    number = number.replace( '-', '' );
    if( !/^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/i.test( number ) )
    {
        if( number.length != 11 )
        {
          return false;
        }
    }
    return true;
}

// 检查是否是移动端
function detectmob() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}

function hasClass(elem, cls) {
  cls = cls || '';
  if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
  return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
}
 
function addClass(elem, cls) {
  if (!hasClass(elem, cls)) {
    elem.className = elem.className == '' ? cls : elem.className + ' ' + cls;
  }
}
 
function removeClass(elem, cls) {
  if (hasClass(elem, cls)) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' ';
    while (newClass.indexOf(' ' + cls + ' ') >= 0) {
      newClass = newClass.replace(' ' + cls + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
}

function toggleClass(obj,cls){  
    if(hasClass(obj,cls)){  
        removeClass(obj, cls);  
    }else{  
        addClass(obj, cls);  
    }  
}  
//格式化参数
function formatParams(data) {
    var arr = [];
    for (var name in data) {
        arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
    }
    return arr.join('&');
}

function ajax(options) {
    options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = options.dataType || "json";
    var params = formatParams(options.data);

    //创建 - 非IE6 - 第一步
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else { //IE6及其以下版本浏览器
        var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    //接收 - 第三步
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var status = xhr.status;
            if (status >= 200 && status < 300) {
                options.success && options.success(JSON.parse(xhr.responseText), xhr.responseXML);
            } else {
                options.fail && options.fail(status);
            }
        }
    }

    //连接 和 发送 - 第二步
    if (options.type == "GET") {
        xhr.open("GET", options.url + "?" + params, true);
        xhr.send(null);
    } else if (options.type == "POST") {
        xhr.open("POST", options.url, true);
        //设置表单提交时的内容类型
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }
}

function toast(content, time) {
    var toast = document.getElementById('common-toast');
    // console.log(toast,'finded toast')
    // console.log(toast);
    clearTimeout(window.toastTimer);
    var defaultStyle = 'position: fixed;background-color: rgba(0,0,0,0.8);border-radius: 5px;bottom: 30px;left: 50%;padding: 5px 10px;text-align:center;color: #fff;transform: translateX(-50%);';
    if(!toast) {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML='.common-toast{ -webkit-animation: commontoast .2s;animation: commontoast .2s;}\
        @-webkit-keyframes commontoast {\
            0%{transform: translateY(30%) translateX(-50%);opacity: 0.3;}\
            100%{transform: translateY(0%) translateX(-50%);opacity: 1;}\
        }\
        @keyframes commontoast {\
            0%{transform: translateY(30%) translateX(-50%);opacity: 0.3;}\
            100%{transform: translateY(0%) translateX(-50%);opacity: 1;}\
        }\
        ';
        document.getElementsByTagName('HEAD').item(0).appendChild(style);
        toast = document.createElement('div');
        toast.id = 'common-toast';
        toast.className = 'common-toast';
        toast.style= defaultStyle;
        // console.log(toast);
        toast.innerHTML = content;
        document.body.appendChild(toast);
    }else{
        toast.innerHTML = content;
        toast.style = defaultStyle;
    }
    window.toastTimer = setTimeout(function() {
        toast.style = 'display: none;';
    }, time || 2000);
}

//确认弹窗
function comfirm(content, ok_cb, cancel_cb) {
    var comfirm = document.getElementById('common-comfirm');
    // console.log(toast,'finded toast')
    // console.log(toast);
    var template = '<div>\
        <div class="comform-title"></div>\
        <div style="padding: .5rem 0;color: #666;">'+content+'</div>\
        <div class="comfirm-buttons" style="padding: .3rem 0;">\
            <button class="comfirm-btn comfirm-cancel" id="comfirm-cancel">取消</button>\
            <button class="comfirm-btn comfirm-ok" id="comfirm-ok">确定</button>\
        </div>\
    </div>';
    var defaultStyle = 'position: fixed;width: 75%;background-color: #fff;border-radius: 5px;top: 50%;left: 50%;padding: 5px 10px;text-align:center;color: #fff;transform: translate(-50%, 50%);';
    if(!comfirm) {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML='.common-comfirm{box-shadow: 1px 1px 3px #ddd; -webkit-animation: commoncomfirm .2s forwards;animation: commoncomfirm .2s forwards;}\
        @-webkit-keyframes commoncomfirm {\
            0%{transform: translateY(-45%) translateX(-50%);opacity: 0.3;}\
            100%{transform: translateY(-50%) translateX(-50%);opacity: 1;}\
        }\
        @keyframes commoncomfirm {\
            0%{transform: translateY(-45%) translateX(-50%);opacity: 0.3;}\
            100%{transform: translateY(-50%) translateX(-50%);opacity: 1;}\
        }\
        .common-comfirm .comfirm-btn{width: 35%;height: .5rem;margin: 0 .2rem;line-height: .5rem;color: #f7bb2a;text-align: center;border: 1px solid #fbdd94;}\
        ';
        document.getElementsByTagName('HEAD').item(0).appendChild(style);
        comfirm = document.createElement('div');
        comfirm.id = 'common-comfirm';
        comfirm.className = 'common-comfirm';
        comfirm.style= defaultStyle;
        // console.log(comfirm);
        comfirm.innerHTML = template;
        document.body.appendChild(comfirm);
    }else{
        comfirm.innerHTML = template;
        comfirm.style = defaultStyle;
    }
    var $cancel_bt = document.getElementById('comfirm-cancel');
    var $ok_bt = document.getElementById('comfirm-ok');
    $cancel_bt.addEventListener('click', function() {
        comfirm.style = 'display: none;';
        cancel_cb && cancel_cb();
    });
    $ok_bt.addEventListener('click', function() {
        comfirm.style = 'display: none;';
        ok_cb && ok_cb();
    });
}

// loader
;(function(){
    function Loader() {
        this.init();
    }
    var p = Loader.prototype;
    p.isLoading = false;
    p.loaderDOM = null;
    p.timer = null;
    p.timeOut = 10000;//超时时间10s
    p.showStyle = 'position: fixed;background-color: rgba(0,0,0,0.8);border-radius: 5px;bottom: 30px;left: 50%;padding: 5px 10px;text-align:center;color: #fff;transform: translateX(-50%);';
    p.hideStyle = 'display: none';
    p.init = function() {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML='.common-loader{ -webkit-animation: commonloader .2s;animation: commonloader .2s;}\
        @-webkit-keyframes commonloader {\
            0%{transform: translateY(30%) translateX(-50%);opacity: 0.3;}\
            100%{transform: translateY(0%) translateX(-50%);opacity: 1;}\
        }\
        @keyframes commonloader {\
            0%{transform: translateY(30%) translateX(-50%);opacity: 0.3;}\
            100%{transform: translateY(0%) translateX(-50%);opacity: 1;}\
        }\
        .loader{\
          margin: 0 0 2em;\
          height: 100px;\
          width: 20%;\
          text-align: center;\
          padding: 1em;\
          margin: 0 auto 1em;\
          display: inline-block;\
          vertical-align: top;\
        }\
        svg path,\
        svg rect{\
          fill: #FF6700;\
        }\
        ';
        document.getElementsByTagName('HEAD').item(0).appendChild(style);
        loader = document.createElement('div');
        loader.id = 'common-loader';
        loader.className = 'common-loader';
        loader.innerHTML = '<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\
                                 width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">\
                              <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">\
                                <animateTransform attributeType="xml"\
                                  attributeName="transform"\
                                  type="rotate"\
                                  from="0 25 25"\
                                  to="360 25 25"\
                                  dur="0.6s"\
                                  repeatCount="indefinite"/>\
                                </path>\
                              </svg>';
        loader.style= this.hideStyle;
        document.body.appendChild(loader);
        this.loaderDOM = loader;
    }
    p.show = function(timeOut) {
        this.timer && clearTimeout(this.timer);

        this.loaderDOM.style = this.showStyle;
        this.is_loading = true;
        var self = this;
        this.timer = setTimeout(function() {
            self.hide();
        }, timeOut || this.timeOut);
    }
    p.hide = function() {
        this.loaderDOM.style = this.hideStyle;
        this.is_loading = false;
    }
    p.isLoading = function() {
        return this.is_loading;
    }
    var loader = new Loader();
    window.loader = loader;
})();