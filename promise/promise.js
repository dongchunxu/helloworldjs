"use strict";

function timeout(ms) {
    return new Promise((resolve, reject)=>{
        setTimeout(resolve, ms, "Done!");
    })
};

timeout(1000).then((value)=>{
    console.info(value);
});



//promise函数新建后悔立即执行
let promise = new Promise((resolve, reject) => {
    console.info("Promise!");
    resolve();
});

promise.then(function () {
    console.info("resloved!");
});
console.info("hi");



//异步加载图片
function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
        const image = new Image();

        image.onload = function () {
            resolve(image);
        };

        image.onerror = function () {
            reject(new Error('Could not load image at ' + url));
        };

        image.src = url;
    });
}

loadImageAsync("http://g.hiphotos.baidu.com/image/pic/item/5bafa40f4bfbfbedc5597ab474f0f736aec31ffc.jpg").then(function (image) {
    console.info("iiii" + image);
});


const getJSON = function (url) {
    return new Promise((resolve, reject)=>{
        const handler = function () {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            }
            else {
                reject(new Error(this.statusText));
            }
        };

        const client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();
    });
};

getJSON("http://baishan.meituan.com/ptapi/getScenesList?theme=quality&tab=all&ci=165&limit=12").then(function (json) {
    console.info("Contents: " + json);
}, function (error) {
    console.error("Error:" , error);
});


