alertBtn.onclick = function () {
    alertTheBtn()
}
function alertTheBtn() {
    let box = document.querySelector('.box');
    box.innerHTML = `
        <button id="signBtn" class="aa bb cc dd">签到</button>
        <span class="time"></span>
        <div class="progress"></div>
    `
    box.style.display = 'block';


    let totalTime = 30;
    let curTime = totalTime;
    let successSign = false;
    let progress = document.querySelector('.progress');
    let signBtn = document.querySelector('#signBtn')
    let time = document.querySelector('.time');
    let timer = null;

    time.innerText = curTime;
    let start = false;



    timer = (() => {
        return setInterval(() => {
            if (successSign) {
                clearInterval(timer);
                return;
            }
            if (!start) {
                animation(progress, { width: box.offsetWidth }, totalTime)
                start = true;
            }
            if (curTime < 0) {
                signBtn.style.backgroundColor = '#f40'
                signBtn.innerText = '签到X'
                progress.remove();
                time.remove();
                clearInterval(timer);
            }
            time.innerText = curTime;
            curTime--;



        }, 3000)
    })();
    function animation(dom, objInfo, duration) {
        let str = '';
        for (let prop in objInfo) {
            str += `${prop} ${duration}s linear,`
        };
        str = str.replace(/,$/, '');
        dom.style.transition = str;
        for (let prop in objInfo) {
            if (prop === 'opacity') {
                dom.style[prop] = objInfo[prop]
            } else {
                dom.style[prop] = objInfo[prop] + 'px';
            }
        };
    }
    signBtn.onclick = function () {
        successSign = true;
        signBtn.style.backgroundColor = '#67C23A'
        signBtn.innerText = '签到✔'
        setTimeout(() => {
            box.style.display = 'none';

            progress && progress.remove();
            time && time.remove();
            signBtn && signBtn.remove()
            setTimeout(() => {
                alertTheBtn()
            }, 6000);
        }, 500)
    }
}