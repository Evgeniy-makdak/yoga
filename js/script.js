window.addEventListener('DOMContentLoaded', () => {

    const tabContent = document.querySelectorAll('.info-tabcontent'),
          tabTitle = document.querySelectorAll('.info-header-tab');  

    function hideInfo() {
        for (let i = 0; i < tabContent.length; i++) {
            if (i == 0) {
                tabContent[i].classList.add('show');
                tabContent[i].classList.remove('hide');
            }
            else {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }
    }
    
    hideInfo();
});