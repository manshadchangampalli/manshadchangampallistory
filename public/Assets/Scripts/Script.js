// find it which browser is this 

// navigator.sayswho= (function(){
//     var ua= navigator.userAgent;
//     var tem; 
//     var M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
//     if(/trident/i.test(M[1])){
//         tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
//         return 'IE '+(tem[1] || '');
//     }
//     if(M[1]=== 'Chrome'){
//         tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
//         if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
//     }
//     M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
//     if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
//     return M.join(' ');
// })();
// Firefox 26+, Chrome 30+, Safari 5.1+, Opera 10+, IE 9+
// console.log(navigator.sayswho);





function isLoadComplete(){
    setTimeout(() => {
        document.querySelector('.loading').style.display="none"
    }, 1500);

}


document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();
    let timeline = new TimelineMax();

   
    
    timeline
    // first the scroll icon will unvisible 
    .to(['#Scroll-icon','.warning'],2, {
        opacity:0,
        ease: Power3.easeInOut
    })
    // then the table will visible 
    .to('#Table', 1.5, {
        opacity:1,
        ease: Power3.easeInOut
    })
    // then the mobile will visible 
    .to('#Mobile', 1.5, {
        opacity:1,
        ease: Power3.easeInOut
    })
        // then the book will visible 

    .to('#Book', 1, {
        opacity:1,
        ease: Power3.easeInOut
    })
        // then the tea will visible 

    .to('#Tea', 1, {
        opacity:1,
        ease: Power3.easeInOut
    })
        // then the paper will visible 
    .to('#Paper', 1, {
        opacity:1,
        ease: Power3.easeInOut
    })
    // then the pc will visible 
    .to(['#Pc-frame','#Display-black','#Keyboard','#Display-white'], 2, {
        opacity:1,
        ease: Power3.easeInOut
    })
    // the pc black screen,"iam a frontend developer"  text and the cursor of "iam manshad " text will unvisible  
    .to(['#Display-black','#cursor-manshad','#frontend-dev'], 1, {
        opacity:0,
        ease: Power3.easeInOut
    })
    // the blue dispaly will appear 
    .to('#Display-for-code',3,{
        opacity:1,
        ease: Power3.easeInOut
    },'+=3')
    // the blue color text hider will move to right
    .to('#rec-for-hello_2',3,{
        x:220,
        width:'30px',
        ease: Power3.easeInOut
    })
    .to('.sub_1',3,{
        opacity:1
    },'-=3')
    // the cursor also move to right
    .to('#cursor-hello',3,{
        x:220,
        ease: Power3.easeInOut
    },'-=3')
    // the cursor will disappear
    .to(['#cursor-hello','.sub_1'],1,{
        opacity:0,
        ease: Power3.easeInOut
    })
    //the cursor of manshad text will appear
    .to(['#cursor-manshad','.sub_2'],1,{
        opacity:1,
        ease: Power3.easeInOut
    },'-=.5')
    // the blue color text hider will move to right
    .to('#rec-for-manshad_2',3,{
        x:290,
        width:'60px',
        ease: Power3.easeInOut
    })
    //the cursor will move to right
    .to('#cursor-manshad',3,{
        x:290,
        ease: Power3.easeInOut
    },'-=3')
    // next 7 steps for blinking the cursor 
    .to('#cursor-manshad',.6,{
        opacity:0,
        ease: Power3.easeInOut
    })
    .to('#cursor-manshad',.6,{
        opacity:1,
        ease: Power3.easeInOut
    })
    .to('#cursor-manshad',.6,{
        opacity:0,
        ease: Power3.easeInOut
    })
    .to('#cursor-manshad',.6,{

        opacity:1,
        ease: Power3.easeInOut
    })
    .to('#cursor-manshad',.6,{
        opacity:0,
        ease: Power3.easeInOut
    })
    .to('#cursor-manshad',.6,{
        opacity:1,
        ease: Power3.easeInOut
    })

    .to(['#cursor-manshad','.sub_2'],.6,{
        opacity:0,
        ease: Power3.easeInOut
    })
    //--------------------------------------

    // the red color text will appear 
    .to(['#frontend-dev','.sub_3'],3,{
        opacity:1,
        ease: Power3.easeInOut
    })
    //the shelf svg will disappear
    .to('#shelf',6,{
        opacity:0,
        ease: Power3.easeInOut
    },'+=3')
    .to('.sub_3',3,{
        opacity:0,
        ease: Power3.easeInOut
    },'-=2')
    // the hero page will move to left 
    .to('.hero',6,{
        xPercent:-33.3,
        ease: Power3.easeInOut
    })
    //the first section color will change to brown
    .to('.first-section',1,{
        backgroundColor:'#842227',
        ease: Power3.easeInOut
    },"-=7")
    //the shelf will appear
    .to(['#shelf','.sub_1_1'],6,{
        opacity:1,
        ease: Power3.easeInOut
    },"-=5")
    // the shelf will move to top
    .to('#shelf',3,{
        yPercent:-20,
        ease: Power3.easeInOut
    })
    .to('.sub_1_1',3,{
        opacity:0
    },'-=3')
    .to('.sub_1_2',3,{
        opacity:1
    },'-=3')
    .to('#shelf',3,{
        yPercent:-40,
        ease: Power3.easeInOut
    })
    .to('#shelf',3,{
        yPercent:-60,
        ease: Power3.easeInOut
    })
    .to('.sub_1_2',3,{
        opacity:0
    },'-=3')
    // the shelf will blink next few steps 
    .to('#shelf',3,{
        opacity:0,
        ease: Power3.easeInOut
    })
    .to('.second-section',3,{
        backgroundColor:'#00000',
        ease: Power3.easeInOut
    },"-=3")
    .to('#shelf',3,{
        opacity:1,
        ease: Power3.easeInOut
    })
    .to('.second-section',3,{
        backgroundColor:'#842227',
        ease: Power3.easeInOut
    },"-=3")
    .to('#shelf',3,{
        opacity:0,
        ease: Power3.easeInOut
    })
    .to('.second-section',3,{
        backgroundColor:'#00000',
        ease: Power3.easeInOut
    },"-=3")
    .to('#shelf',3,{
        opacity:1,
        ease: Power3.easeInOut
    })
    .to('.second-section',3,{
        backgroundColor:'#842227',
        ease: Power3.easeInOut
    },"-=3")
    .to(['#shelf','#Hero-page-svg'],3,{
        opacity:0,
        ease: Power3.easeInOut
    })
    .to(['.second-section','.third-section'],3,{
        backgroundColor:'#00000',
        ease: Power3.easeInOut
    },"-=3")
    .to('.hero',2,{
        xPercent:-66.6,
        ease: Power3.easeInOut
    })
    .to('.third-section',3,{
        backgroundColor:'#b0fff1',
        ease: Power3.easeInOut
    })
    .to('.mob-img',3,{
        opacity:1,
        ease:Power3.easeInOut
    })
    .to(['.mobile','.display'],3,{
        opacity:1,
        ease:Power3.easeInOut
    })
    .to('.display',3,{
        backgroundColor:'white',
        ease:Power3.easeInOut
    })
    .to(['.curtain-house-img','.sub-3-1'],5,{
        opacity:1,
        ease:Power3.easeInOut
    })
   
    .to(['.curtain-house-img','.sub-3-1'],5,{
        opacity:0,
        ease:Power3.easeInOut
    })
    .to('.display',5,{
        backgroundColor:'black',
        ease:Power3.easeInOut
    })
    .to(['.texki-img','.sub-3-2'],5,{
        opacity:1,
        ease:Power3.easeInOut
    })
    .to(".mobile",5,{
        scale:window.innerWidth>768?.4:.2,
        y:window.innerWidth>768?-150:-230,
        x:window.innerWidth>768?-10:-90,
        ease:Power3.easeInOut
    })
    .to('.mob-img',7,{
        scale:.5,

    })
    .to('.mob-img',5,{
        x:0
    },'-=5')
    .to(['.sub-3-2'],5,{
        opacity:0,
        ease:Power3.easeInOut
    })
    .to('.mob-img',7,{
        scale:1,
        x:0

        
    })
    .to(".mob-img",5,{
        width:window.innerWidth>768?300:150,
        borderRadius:15,
        borderColor:'black',
        height:window.innerWidth>768?300:150,
        ease:Power3.easeInOut
    },'-=5')
    .to([".container_3",'.All-img'],5,{
        backgroundColor:'#B0FFF1',
        ease:Power3.easeInOut
    },'-=5')
    .to(['.mobile-img-wraper'],5, {
        height:window.innerWidth>768?300:150,
        width:window.innerWidth>768?300:150
    },'-=5')

    // .to('.container_3',5,{
    //     y:-450,
    //     ease:Power3.easeInOut
    // })
    
    .to('.container_3',5,
    {
        yPercent:-55,
        ease:Power3.easeInOut
    })
    .to('.ui-ux',5,
    {
        opacity:1,
        ease:Power3.easeInOut
    })
    .to(['.ui-ux-h1','.sub-4'],4,{
        opacity:1,
    })
    .to('.sphere',5,{
        opacity:1
    })
    .to('.sphere1',5,{
        x:80,
        y:-100

    })
    .to('.sphere2',5,{
        x:-170,
        y:50
    },'-=5')
    .to('.sub-4',3,{
        opacity:0
    })
    .to('.ui-ux',5,{
        width:window.innerWidth,
        height:window.innerHeight,
        
    })
    .to(['.container_3','.third-section','.images-wraper'],1,{
       backgroundColor:'#010033'
        
    },'-=3')
    .to('.ui-ux-h1',3,{
        display:'none'
    },'-=6')
    .to('.sphere1',5,{
        x:0,
        y:-120

    })
    .to('.sphere2',5,{
        x:60,
        y:-40
    },'-=5')
    .to('.form-wraper',5,{
       display:'block'
        
    })
    .to('.ui-ux h2',3,{
        display:'block'
    },'-=6')
    
    
    
    
    
    





    //---------------------------------------------


    
    let scene = new ScrollMagic.Scene({
        triggerElement: '.hero',
        duration: '900%',
        triggerHook: 0,
        offset: '0'
    })
    .setTween(timeline)
    .setPin('.hero')
    .addTo(controller);


    //----------------------------------------------------------
    //-----------------------------------------------------------------
    //---------------------------------------------------------------------------
    //-----------------------------------------------------------------
    //----------------------------------------------------------
    

})

var button = document.querySelector('button').addEventListener('click',buttonClicked)
var buttonImg = document.querySelector('button>img')
var Email = document.querySelector("input[name='email']")
var Name = document.querySelector("input[name='name']")
var Message = document.querySelector("textarea[name='message']")
var success = document.querySelector('.success')
var errorMsg = document.querySelector('.error')
var isEmailValid = document.querySelector('.validEmail')


Email.addEventListener('focus',()=>{
    
    isEmailValid.style.display="block";
})
Email.addEventListener('blur',()=>{
    isEmailValid.style.display="none"
})
const scriptURL = 'https://script.google.com/macros/s/AKfycbxBh-oAKO9UoUQ1k1o24LJORtqe9Z_Om8PGQvS68YlLHPEMmamdzAFPRunKDdaK1C8oWA/exec'
const form = document.forms['manshad-contact-sheet']

function buttonClicked(){
   if(Name.value !="" && Message.value !=""){
       buttonImg.classList.add("send-icon-animation")
   }
}

form.addEventListener('submit',e =>{
    e.preventDefault()
    fetch(scriptURL,{method:'POST',body: new FormData(form)})
    .then(response=> {success.style.opacity="1"
            setTimeout(()=>{
                Name.value= ""
                Email.value=""
                Message.value= ""
                success.style.opacity="0"

            },2000)
            
        })
    .catch((error) => {
        console.error('Error!',error.message)
        errorMsg.style.display="block" 
    }
    )
    
})
// document.querySelector("input[name='email']").onkeydown = new function(event){return false}
// document.querySelector("input[name='text']").onkeydown = new function(event){return false}
// document.querySelector("textarea[name='message']").onkeydown = new function(event){return false}


// for the input focus scroll prevent 



// Name.focus({
//   preventScroll: true
// });
// Email.focus({
//     preventScroll: true
// });
// Message.focus({
//     preventScroll: true
// });


// if back button clicked ------------------

function backButtonClicked(){
    document.querySelector('.backbtnimg').classList.add(".back-btn-img")
    document.querySelector('.message-page').style.display="none"
   
}
function textmeButtonClicked(){
    document.querySelector('.message-page').style.display="block"
}
