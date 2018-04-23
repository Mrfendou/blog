var list = document.querySelectorAll('[type=checkbox]'); //选中所有的input[type=checkbox]
var label = document.querySelectorAll('label');
var reverse = document.querySelector('#reverse'); //倒置选中
var all = document.querySelector('#allselect'); //全选列表
var cancle = document.querySelector('#cancle'); //取消所有选择

var start_checked, //起点是否选中
    start_index, // 起点的索引
    end_index, // 终点的索引
    direction; //选择的方向(从上往下，从下往上)

list.forEach(function (item, i) {
    //监听列表中发生的点击事件，如果按着shift点击，当前的索引为终点，如果没按shift就把之前点击的作为起点
    item
        .addEventListener('click', function (e) {
            if (e.shiftKey) {
                end_index = i;
                direction = start_index < end_index;
                list.forEach(function (item2, j) { //两次点击事件中间的元素是否在起点和终点之间，如果是就全选中或者全部取消选中
                    var start_after_end = j < start_index || j > end_index; //起点在终点后
                    var start_before_end = j > start_index || j < end_index; //起点在终点前
                    var not_in_range = (direction && start_after_end) || (!direction && start_before_end);
                    if (not_in_range) 
                        return;
                    item2.checked = start_checked;
                    if (item.checked) {
                        label[j].style.background = 'rgba(133, 132, 133, 0.2)';
                    } else {
                        label[j].style.background = 'rgba(133, 132, 133, 0)';
                    }
                });
            } else {
                start_index = i;
                start_checked = item.checked;
                if (item.checked) {
                    label[i].style.background = 'rgba(133, 132, 133, 0.2)';
                } else {
                    label[i].style.background = 'rgba(133, 132, 133, 0)';
                }
            }
        });
});
//全选列表
all.addEventListener('click', function () {
    list
        .forEach(function (item, i) {
            item.checked = true;
            label[i].style.background = 'rgba(133, 132, 133, 0.2)';
        });
});
//取消所有选择列表
cancle.addEventListener('click', function () {
    list
        .forEach(function (item, i) {
            item.checked = false;
            label[i].style.background = 'rgba(133, 132, 133, 0)';
        })
});
//倒置选中的列表
reverse.addEventListener('click', function () {
    list
        .forEach(function (item, i) {
            item.checked = !item.checked;
            if (item.checked) {
                label[i].style.background = 'rgba(133, 132, 133, 0.2)';
            } else {
                label[i].style.background = 'rgba(133, 132, 133, 0)';
            }
        });
});