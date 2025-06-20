window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

function links(){
const soundCloud = document.querySelector('[data-soundCloud]')
const instagram = document.querySelector('[data-instagram]')
const gitHub = document.querySelector('[data-gitHub]')

const sound = document.querySelector('.sound')
const inst = document.querySelector('.inst')
const hub = document.querySelector('.hub')
sound.addEventListener('click', ()=>{
    location.assign('')
})

soundCloud.addEventListener('pointerdown',()=>{
    location.assign('')
})

inst.addEventListener('pointerdown',()=>{
    location.assign('https://www.instagram.com/kantayev.ramazan?igsh=cXdibnNjZXk2YTRp')
})

hub.addEventListener('pointerdown',()=>{
    location.assign('https://github.com/Yuoo15')
})

instagram.addEventListener('pointerdown',()=>{
    location.assign('https://www.instagram.com/kantayev.ramazan?igsh=cXdibnNjZXk2YTRp')
})

gitHub.addEventListener('pointerdown',()=>{
    location.assign('https://github.com/Yuoo15')
})}

links()

function toggleMenu(){
    document.querySelector('.nav-links').classList.toggle('active')
}

function animation(){
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            }
        })
    })
    document.querySelectorAll('.hidden').forEach(el => observer.observe(el))
}

animation()

function button(){
    const butt_1 = document.querySelector('[data-button-project]')
    const link_1 = document.querySelector('#project')

    const butt_2 = document.querySelector('[data-button-share')
    const link_2 = document.querySelector('#share')

    butt_1.addEventListener('click', ()=>{
        link_1.scrollIntoView({
            block:'start'
        })
    })

    butt_2.addEventListener('click', ()=>{
        link_2.scrollIntoView({
            block:'start'
        })
    })
}

button()

const preloader = document.querySelector('.preloder')
const preloaderCloseEvent = new Event('preloaderClose',{bubbles: true})
preloader.addEventListener("animationend", (event)=>{
	if(event.animationName === 'preloader_end'){
		preloader.dispatchEvent(preloaderCloseEvent)
}
})