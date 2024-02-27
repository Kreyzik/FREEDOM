
"use strict"

function animationBlock(){
 
    function iconfeatureAnimation(){
        const iconfeatureBlocks = document.getElementById('iconfeature');

        const scrolled = window.pageYOffset;

        const Top = iconfeatureBlocks.offsetTop;
        const Height = iconfeatureBlocks.offsetHeight;
  
if (scrolled > Top - window.innerHeight && scrolled < Top + Height ) {

    iconfeatureBlocks.classList.add('iconfeature__active');

}else{
    iconfeatureBlocks.classList.remove('iconfeature__active');

    
}

}
iconfeatureAnimation();



function featureOneBlocks(){
    const featureOne = document.getElementById('feature-one');

    const featureOneImages = document.getElementById('feature-one__images');
    const contendFeatureOne = document.getElementById('contend-feature-one');

    const scrolled = window.pageYOffset;

    const Top = featureOneImages.offsetTop;
    const Height = featureOneImages.offsetHeight;

if (scrolled > Top - window.innerHeight && scrolled < Top + Height ) {

    featureOneImages.classList.add('featureOneImages__active');
    contendFeatureOne.classList.add('contendFeatureOne__active')

}else{
    featureOneImages.classList.remove('featureOneImages__active');
    contendFeatureOne.classList.remove('contendFeatureOne__active');


}

}
featureOneBlocks();



function featureTwoBlocks(){
    const featureTwo = document.getElementById('feature-two');

    const featureTwoImages = document.getElementById('feature-two__images');
    const contendFeatureTwo = document.getElementById('contend-feature-two');

    const scrolled = window.pageYOffset;

    const Top = featureTwoImages.offsetTop;
    const Height = featureTwoImages.offsetHeight;

if (scrolled > Top - window.innerHeight && scrolled < Top + Height ) {

    featureTwoImages.classList.add('featureTwoImages__active');
    contendFeatureTwo.classList.add('contendFeatureTwo__active')

}else{
    featureTwoImages.classList.remove('featureTwoImages__active');
    contendFeatureTwo.classList.remove('contendFeatureTwo__active');


}

}
featureTwoBlocks();



}

window.addEventListener('scroll', animationBlock)


