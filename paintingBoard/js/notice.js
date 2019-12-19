(function () {
    const useragent = window.navigator.userAgent.toLowerCase();
    if (useragent.indexOf('chrome') < 0 && useragent.indexOf('safari') < 0) {
        document.body.style.cssText = 'height: auto';
        document.body.innerHTML = '<p style="padding: 20px; line-height: 1.6">해당 페이지는 touchscreen 기능이 적용이 되지 않은 페이지로, webkit 기반 PC 브라우저(크롬, 사파리 등)에서 확인해주시면 감사하겠습니다!';
    }
})();