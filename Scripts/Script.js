

document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();
    let timeline = new TimelineMax();

   
    
    timeline
    // first the scroll icon will unvisible 
    .to('#Scroll-icon',2, {
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
        backgroundColor:'#fff',
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
        scale:.4,
        y:-150,
        x:-10,
        ease:Power3.easeInOut
    })
    .to(['.sub-3-2'],5,{
        opacity:0,
        ease:Power3.easeInOut
    })
    .to(".mob-img",5,{
        width:300,
        borderRadius:15,
        borderColor:'black',
        height:300,
        ease:Power3.easeInOut
    },'-=5')
    .to(".container_3",5,{
        backgroundColor:'#B0FFF1',
        ease:Power3.easeInOut
    },'-=5')
    .to('.mobile-img-wraper',5,{
        height:300,
        width:300
    },'-=5')

    .to('.container_3',5,{
        y:-450,
        ease:Power3.easeInOut
    })
    
    .to('.container_3',5,
    {
        y:-900,
        ease:Power3.easeInOut
    })
    .to('.ui-ux',5,
    {
        opacity:1,
        ease:Power3.easeInOut
    })
    .to(['.ui-ux h1','.sub-4'],4,{
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
    .to('.container_3',1,{
       backgroundColor:'#F0B0AF'
        
    },'-=3')
    .to('.ui-ux h1',3,{
        display:'none'
    },'-=6')
    .to('.sphere1',5,{
        x:0,
        y:-60

    })
    .to('.sphere2',5,{
        x:80,
        y:10
    },'-=5')
    .to('.form',5,{
       display:'block'
        
    })
    .to('.ui-ux h2',3,{
        display:'block'
    },'-=6')
    
    
    
    
    
    
    





    //---------------------------------------------


    
    let scene = new ScrollMagic.Scene({
        triggerElement: '.hero',
        duration: '100%',
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

