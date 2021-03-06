window.onload = function(){
    const myName = document.querySelector('#customname');
    const btn = document.querySelector('.randomize');
    const story = document.querySelector('.story');

    let textStory = '今天气温 35 摄氏度，:insertx:出门散步。当走到:inserty:门前时，突然就:insertz:。人们都惊呆了，李雷全程目睹但并没有慌，因为:insertx:是一个 140 公斤的胖子，天气又辣么热。';
    let oneWord = ['怪兽威利', '大老爹', '圣诞老人'];
    let twoWord = ['肯德基', '迪士尼乐园', '白宫'];
    let threeWord = ['自燃了', '在人行道化成了一坨泥', '变成一只鼻涕虫爬走了'];

    function randomText(array){
        const random = Math.floor(Math.random()*array.length);
        return array[random];
    }

    btn.onclick = function(){
        let newStory = textStory;

        let one = randomText(oneWord);
        let two = randomText(twoWord);
        let three = randomText(threeWord);

        newStory = newStory.replace(':insertx:',one);
        newStory = newStory.replace(':insertx:',one);
        newStory = newStory.replace(':inserty:',two);
        newStory = newStory.replace(':insertz:',three);

        if(myName.value !== ''){
            const name = myName.value;
            newStory = newStory.replace('李雷',name);
        }

        if(document.getElementById("american").checked) {
            const weight = Math.round(140*2.20462)+'磅';
            const hot = Math.round(35 * 9 / 5 + 32) + ' 华氏度';
            newStory = newStory.replace('140 公斤', weight);
            newStory = newStory.replace('35 摄氏度', hot);
        }

        story.textContent = newStory;
        story.style.visibility = 'visible';
    }


}