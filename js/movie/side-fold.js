// 导航栏的折叠功能

/*选中所有的li元素*/
var li_all = document.querySelectorAll('li');
/*迭代所有的li元素*/
for (var i = 0; i < li_all.length; i++) {
    var li = li_all[i];
    /*让每一个li监听点击事件*/
    li.addEventListener('click', function (e) {
        /*当前li被点击的时候选中它下方的ul*/

        var list = this.querySelector('ul');
        /*如果当前li下没有子列表或者当前li不是点击源就直接返回*/
        if (!list || e.target !== this) 
            return;
        
        /*倒置可见性*/
        list.hidden = !list.hidden;
        var icon = this.querySelector('i');
        if (list.hidden) {
            icon
                .classList
                .remove('fa-minus-square');
            icon
                .classList
                .add('fa-plus-square');
        } else {
            icon
                .classList
                .remove('fa-plus-square');
            icon
                .classList
                .add('fa-minus-square');
        }
    });
}