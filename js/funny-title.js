// 浏览器标题
var originTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // 离开当前页面时显示
        document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
        clearTimeout(titleTime);
    } else {
        // 返回当前页面时显示
        document.title = '(ฅ>ω<*ฅ) 噫又好了~';
        // 两秒后变回正常标题
        titleTime = setTimeout(function () {
            document.title = originTitle;
        }, 2000);
    }
});