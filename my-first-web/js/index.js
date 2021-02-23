window.onload = function(){
    let myButton = document.querySelector('button');
    let myHeading = document.querySelector('h1');
    let myImage = document.querySelector('img');

    myImage.onclick = function() {
        let mySrc = myImage.getAttribute('src');
        if(mySrc === '../img/fire1.jpg') {
          myImage.setAttribute('src', '../img/fire.jpg');
        } else {
          myImage.setAttribute('src', '../img/fire1.jpg');
        }
    }

    function setUserName() {
        let myName = prompt('请输入你的名字。');
        if (!myName || myName === null) {
            setUserName();
        } else {
            localStorage.setItem('name', myName);
            myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
        }
    }

    if (!localStorage.getItem('name')) {
        setUserName();
    } 
    else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
    }

    myButton.onclick = function() {
        setUserName();
    };
}