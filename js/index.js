// 页面载入完成时执行
// 功能： 在随机的两个位置生成数
$(document).ready(() => {
    var arr = random(0,15,2)// 生成两个0到15的不等随机数
    // console.log(arr);
    arr.forEach((a) => {
        $('.box_def').eq(a).html(Math.floor(Math.random()*10) %2 === 0 ? 2 : 4)// 随机返回 2 或者 4
    })
    addColor()
})


// 创建一个函数，用于实现生成n个m(含)-n(含)的不等随机数
function random(m,n,j) { // j: 个数
    var ranArr = []
    for(var i = 0; i <= j-1; i++) {
        var a = Math.floor(Math.random()*(n+1)+m)
        ranArr[i] === a ? i-- : ranArr[i] = a
    }
    return ranArr
}

// 创建一个函数，用于实现给不同数值的 div 加不同的颜色
function addColor() {
    for(var i =0; i < $('.box_def').length; i++) {
        console.log($('.box_def').eq(i).html());
        switch ($('.box_def').eq(i).html()) {
            case '2' :
                $('.box_def').eq(i).addClass('color_2')
                break;
            case '4' : {
                $('.box_def').eq(i).addClass('color_4')
            }
            case '8' : {
                $('.box_def').eq(i).addClass('color_4')
            }
            case '16' : {
                $('.box_def').eq(i).addClass('color_4')
            }
            case '32' : {
                $('.box_def').eq(i).addClass('color_4')
            }
            case '64' : {
                $('.box_def').eq(i).addClass('color_4')
            }
            case '128' : {
                $('.box_def').eq(i).addClass('color_4')
            }
            case '256' : {
                $('.box_def').eq(i).addClass('color_4')
            }
            case '512' : {
                $('.box_def').eq(i).addClass('color_4')
            }
            case '1024' : {
                $('.box_def').eq(i).addClass('color_4')
            }
            case '2048' : {
                $('.box_def').eq(i).addClass('color_4')
            }
        }
    }
}
