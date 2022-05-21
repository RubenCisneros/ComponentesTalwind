class UI{
    constructor(){
        this.menuToggler = document.querySelector('#menu-toggler')
        this.aside = document.querySelector('#aside')
        this.btnLight = document.querySelector('#btn-light')
        this.btnDark = document.querySelector('#btn-dark')
        this.btnSystem = document.querySelector('#btn-system')
        this.loadTheme()
        this.addLiseners()
    }

    addLiseners(){
        
        this.menuToggler.addEventListener('click', this.showHideAside)

        this.btnLight.addEventListener('click', () =>{
            localStorage.setItem('theme', 'light')
            this.loadTheme()
        })
        this.btnDark.addEventListener('click', () => {
            localStorage.setItem('theme', 'dark')
            this.loadTheme()
        })
        this.btnSystem.addEventListener('click', () => {
            localStorage.removeItem('theme')
            this.loadTheme()
        })
    }

    loadTheme(){
    
        // On page load or when changing themes, best to add inline in 'head' to avoid FOUC
        if(localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') &&  window.matchMedia('(prefers-color-scheme: dark)').matches)){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
        
    }

    showHideAside = () =>{
        if( this.aside.classList.contains('-translate-x-full') || this.aside.classList.contains('md:-translate-x-full')){
            this.aside.classList.replace('-translate-x-full', 'translate-x-0')
            this.aside.classList.replace('md:-translate-x-full', 'md:translate-x-0')
        }else if(this.aside.classList.contains('translate-x-0') || this.aside.classList.contains('md:translate-x-0')){
            this.aside.classList.replace('translate-x-0','-translate-x-full')
            this.aside.classList.replace('md:translate-x-0', 'md:-translate-x-full')
        }
    }
}


    