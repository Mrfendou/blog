// aboutme侧栏
var aboutme = document.querySelector('#aboutme'),
    aboutme_content = document.querySelector('#aboutme_content'),
    aboutme_close = document.querySelector('#aboutme_close');

aboutme.addEventListener('click', function (e) {
    e.preventDefault();
    aboutme_content.hidden = !aboutme_content.hidden;
});

aboutme_content.addEventListener('click', function (e) {
    if (e.target === aboutme_close) 
        aboutme_content.hidden = true;
    }
);

document.addEventListener('click', function (e) {
    let el = e.target;
    if (!el.closest('#aboutme_content') && el !== aboutme) 
        aboutme_content.hidden = true;
    }
);

