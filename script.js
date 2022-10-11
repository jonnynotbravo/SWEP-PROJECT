let prizeImg = document.getElementById('prize');
let check = document.getElementById('check');
let mainPage = document.getElementById('return');

let open = () => {

    prizeImg.style.display = 'block';
    mainPage.style.display = 'block';
}


check.addEventListener('click', open);

function buttonChange(){

     check.innerHTML = 'A MEDAL!!!';
     check.style.backgroundColor = '#DAA520';

   
}

 check.addEventListener('click', buttonChange);