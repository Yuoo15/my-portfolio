const elements = document.querySelectorAll('section')
const animation = () =>{
	elements.forEach((element_section)=>{element_section.classList.add('active')})
}
document.addEventListener('preloaderClose',()=>{
	animation()
})