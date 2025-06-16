window.addEventListener('load', () => {
    window.scrollTo(0, 0);
});

function links(){
const soundCloud = document.querySelector('[data-soundCloud]')
const instagram = document.querySelector('[data-instagram]')
const gitHub = document.querySelector('[data-gitHub]')

soundCloud.addEventListener('click',()=>{
    location.assign('')
})

instagram.addEventListener('click',()=>{
    location.assign('https://www.instagram.com/kantayev.ramazan?igsh=cXdibnNjZXk2YTRp')
})

gitHub.addEventListener('click',()=>{
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


