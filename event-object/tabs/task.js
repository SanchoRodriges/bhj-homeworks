//нашли блок с табами
const tabs1 = document.querySelector('#tabs1');
//нашли массив табов
const tabs = Array.from(tabs1.querySelectorAll('.tab'));
//нашли массив контента табов
const tabsContent = Array.from(tabs1.querySelectorAll('.tab__content'));

for (let i = 0; i < tabs.length; i++) {
    tabs[i].onclick = function() {
        //индекс активного таба сейчас
        let activeTab = tabs.findIndex( item => item.className.includes('tab_active') );
        //убираем активность у таба до клика
        tabs[activeTab].classList.remove('tab_active');
        //добавляем активность табу по клику
        tabs[i].classList.add('tab_active');
        //убираем активность у контента таба до клика
        tabsContent[activeTab].classList.remove('tab__content_active');
        //добавляем активность контенту таба по клику
        tabsContent[i].classList.add('tab__content_active');
    }
    
}
