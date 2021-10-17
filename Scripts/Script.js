document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    .to('#Scroll-icon',2, {
        opacity:0
    })
    .to('#Table', 1.5, {
        opacity:1
    })
    .to('#Mobile', 1.5, {
        opacity:1
    })
    .to('#Book', 1, {
        opacity:1
    })
    .to('#Tea', 1, {
        opacity:1
    })
    .to('#Paper', 1, {
        opacity:1
    })
    .to(['#Pc-frame','#Display-black','#Keyboard','#Display-white'], 2, {
        opacity:1
    })
    .to(['#Display-black','#cursor-manshad'], 1, {
        opacity:0
    })
    .to('#Display-for-code',3,{
        opacity:1
    },'+=3')
    .to('#rec-for-hello_2',3,{
        x:220,
        width:'30px'
    })
    .to('#cursor-hello',3,{
        x:220
    },'-=3')
    .to('#cursor-hello',1,{
        opacity:0
    })
    .to('#cursor-manshad',1,{
        opacity:1
    },'-=.5')
    .to('#rec-for-manshad_2',3,{
        x:300,
        width:'60px'
    })
    .to('#shelf',6,{
        opacity:0
    })
    .to('.hero',6,{
        xPercent:-50
    })
    .to('.first-section',1,{
        backgroundColor:'#842227'
    },"-=7")
    .to('#shelf',6,{
        opacity:1
    },"-=5")
    
    .to('#shelf',10,{
        yPercent:-60
    })
    .to('#shelf',3,{
        opacity:0
    })
    .to('.second-section',3,{
        backgroundColor:'#00000'
    },"-=3")
    .to('#shelf',3,{
        opacity:1
    })
    .to('.second-section',3,{
        backgroundColor:'#842227'
    },"-=3")
    .to('#shelf',3,{
        opacity:0
    })
    .to('.second-section',3,{
        backgroundColor:'#00000'
    },"-=3")
    .to('#shelf',3,{
        opacity:1
    })
    .to('.second-section',3,{
        backgroundColor:'#842227'
    },"-=3")
    .to('#shelf',3,{
        opacity:0
    })
    .to('.second-section',3,{
        backgroundColor:'#00000'
    },"-=3")
    console.log("hello");

    
    
    
    



    
    let scene = new ScrollMagic.Scene({
        triggerElement: '.hero',
        duration: '100%',
        triggerHook: 0,
        offset: '0'
    })
    .setTween(timeline)
    .setPin('.hero')
    .addTo(controller);
})