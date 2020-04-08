var interval = 5000;
var signList = [];
var myInter;
//按钮类名或id，类名就正常复制页面里，id的话加个#
//如：btnName = _getDomName('btn activeBtn curBtn')
//    btnName = _getDomName('#loginBtn')
var btnName = _getDomName('');


function _getDomName(str) {
    if (!str) {
        return ''
    }
    str = str.trim()
    if (/#/.test(str)) {
        return str;
    }

    let arr = str.split(' ');
    let resStr = '';
    for (let i = 0; i < arr.length; i++) {
        resStr += `.${arr[i]}`
    };
    return resStr;
}
function _logTime() {
    let date = Date();
    let time = null;
    date.replace(/\d{2}:\d{2}:\d{2}/, (res) => {
        time = res;
    })
    signList.push(time);
}
/**
 * 获取所有点击过按钮的时间
 */
function getSignList() {
    console.log(signList)
}
/**
 * 取消自动签到
 */
function removeAutoSign() {
    if (myInter) {
        signList.push('取消了自动签到')
        clearInterval(myInter);
    }
}
/**
 * 传入一个时间段，获取该时间段是否签到过和签到的时间（必须传  时:分）
 * 如：isSign("11:20","11:30")
 * 支持秒：isSign("11:20:30", "11:30:20")
 * @param {*} startStr  
 * @param {*} endStr 
 */
function isSign(startStr, endStr) {
    let resArr = [];
    let startTime = getTime(startStr);
    let endTime = getTime(endStr);
    if (endTime < startTime) {
        let cur = startTime;
        startTime = endTime;
        endTime = cur;
    }
    for (let j = 0; j < signList.length; j++) {
        let time = getTime(signList[j]);
        if (time <= endTime && time >= startTime) {
            resArr.push(signList[j]);
        }
    };
    if (resArr.length === 0) {
        resArr.unshift('该时间段没有签到过');
    } else {
        resArr.unshift('该时间段签到过了==>');

    }
    return resArr;

    function getTime(str) {
        let arr = str.split(':');
        let hour = +arr[0] * 60 * 60;
        hour = hour ?? 0;
        let min = +arr[1] * 60;
        min = min ?? 0;
        let second = +arr[2];
        if (isNaN(second)) {
            second = 0;
        }
        let resTime = hour + min + second;
        return resTime
    }
}
/**
 * 开启自动签到
 */
function autoSign() {
    myInter = (function () {
        return setInterval(() => {
            // let btnClassName = getClassName('contents-icon header-item')
            // let btn = document.querySelector('#');
            // let btnClassName = getClassName('')
            let btn = null;
            if (btnName) {
                btn = document.querySelector(btnName)
            }
            // let btn = document.getElementsByClassName('a b c')[0];
            if (btn) {
                btn.click();
                _logTime();
                console.log('点击了0000000000000')
            } else {
                console.log('还未点击========================================')
            }

        }, interval)
    })();
}
