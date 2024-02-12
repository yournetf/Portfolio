const aboutButton = document.querySelector('#aboutButton');
const resumeButton = document.querySelector('#resumeButton');
const projectsButton = document.querySelector('#projectsButton');
const gitButton = document.querySelector('#githubButton');
const contactButton = document.querySelector('#contactButton');
const plusButton = document.querySelector('#plusButton')
const lightSwitch = document.querySelector('#lightSwitch');
const buttonSection = document.querySelector('#plusButtonDiv')

var plusClicked = false;

plusButton.addEventListener('click', () =>{
        if(!plusClicked){
            plusClicked = true;
            plusButton.style.transform = 'rotate(225deg)';
            movementUp();
        }
        else{
            plusClicked = false;
            plusButton.style.transform = 'rotate(0deg)';
            movementDown();
        }
        
});

buttonSection.addEventListener('mouseout', () =>{
           // movementDown();
});




function movementUp(){
    var d = document.getElementById("lightSwitch");
    var height =  90;
    var opacity = 0;
    let buttonsTimer = setInterval(moveUp, 50);

    function moveUp(){
    
        if(height == 80) {
            clearInterval(buttonsTimer);
        }
        else{
            opacity += 6;
            height -= 1;
            d.style.top = height + 'vh';
            d.style.opacity = opacity + '%';
        }
       
    }
}

function movementDown(){
    var d = document.getElementById("lightSwitch");
    var height =  80;
    var opacity = 60;
    let buttonsTimer = setInterval(moveUp, 50);

    function moveUp(){
    
        if(height == 90) {
            clearInterval(buttonsTimer);
        }
        else{
            opacity -= 6;
            height += 1;
            d.style.top = height + 'vh';
            d.style.opacity = opacity + '%';
        }
       
    }
}




// aboutButton.addEventListener('mouseover', () => {
//         fade(resumeButton);
//         fade(projectsButton);
//         fade(gitButton);
//         fade(contactButton);
//     });


// aboutButton.addEventListener('mouseout', () => {
//         unfade(resumeButton);
//         unfade(projectsButton);
//         unfade(gitButton);
//         unfade(contactButton);
// });




