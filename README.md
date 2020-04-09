# 自动签到（所有操作全在控制台完成，打开控制台F12）

## 展示视频
[展示视频（若点不开，可自行下载文件夹后，点开文件夹里的show-video.mp4）](./show-video.mp4)

## 开启自动签到流程
1. **复制autoSign.js所有代码回车**
2. **输入autoSign()**
3. 
-    1. **已经知道按钮的class或id**
>    btnName = getDomName('s-btn s-btn--primary s-btn--m')腾讯课堂签到按钮

    输入btnName= getDomName(你的类名或id名)，id名需在最前面添加#
    ```javascript
    //按钮类名或id，类名就正常复制页面里，id的话加个#
    //如：btnName = getDomName('btn activeBtn curBtn')
    //    btnName = getDomName('#loginBtn')
    btnName = getDomName('#loginBtn');
    ```

-    2. **不知道按钮的class或id**
    好好听课👉出现按钮后，找到类名或id👉输入btnName= getDomName(你的类名或id名)，id名需在最前面添加#
    ```javascript
    //按钮类名或id，类名就正常复制页面里，id的话加个#
    //如：btnName = getDomName('btn activeBtn curBtn')
    //    btnName = getDomName('#loginBtn')
    btnName = getDomName('#loginBtn');
    ```

## 查询签到信息

### 查询点击按钮的时间
```javascript
getSignList();//没有参数
```

### 查询某个时间段内是否签到过
```javascript
//如：👇，有两个参数
isSign("11:00","11:30");
```

### 取消自动签到
```javascript
removeAutoSign();//没有参数
```

### 重新开始签到
```javascript
autoSign();//没有参数
```

