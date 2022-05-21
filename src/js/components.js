class Accordion{
    constructor( selector ){
        this.accordion = document.querySelector( selector )
        this.toggler = this.accordion.firstElementChild
        this.target = this.accordion.lastElementChild
        this.icon = this.toggler.lastElementChild
        this.addListeners()
        
    }

    addListeners(){
        let nodo = document.createElement('e')
        //const target = this.target
        this.toggler.addEventListener('click', ()=> {
            console.log(this.target)
            if(this.target.classList.contains('h-0')){
                this.target.classList.remove('h-0')
                this.target.classList.add('h-auto')

                this.icon.classList.remove('rotate-0')
                this.icon.classList.add('-rotate-180')
            } else if(this.target.classList.contains('h-auto')){
                this.target.classList.remove('h-auto')
                this.target.classList.add('h-0')

                this.icon.classList.remove('-rotate-180')
                this.icon.classList.add('rotate-0')
            }
        })
        
    }
}


class Alert{
    constructor(){
        this.alertsDismissibles = document.querySelectorAll('[data-type="alert-dismissible"]')
        
        this.addListeners()
        this.initTimers()
    }

    addListeners(){
        this.alertsDismissibles.forEach( alert => {
            
            alert.lastElementChild.addEventListener('click', function() {
                this.parentElement.remove()
            })
        })
    }

    initTimers(){
        document.querySelectorAll('[data-timer]').forEach( alert => {
            setTimeout( ( alert ) => {
                alert.remove()
             }, alert.dataset.timer, alert)
        })
    }


}

class Slider{
    constructor(){
        this.sliders = document.querySelectorAll('[data-type="manual-slider"]')
        this.addListeners()
    }

    addListeners(){
        this.sliders.forEach( slider => {
            const content = slider.children[0]
            const buttons = slider.children[1].children
            const btnLeft = buttons[0], btnRight = buttons[1]
            const indicators = slider.children[2]
            let valor = 0
            content.style.transform = 'translateX(0%)'
            btnLeft.addEventListener('click', () => {
                if(valor <= -100){
                    valor+=100
                    content.style.transform = `translateX(${valor}%)`
                    this.updateIndicators(indicators.children, valor)
                }
            })
            btnRight.addEventListener('click', () => {
                
                if(valor >= -200){
                    valor -= 100
                    content.style.transform = `translateX(${valor}%)`
                    this.updateIndicators( indicators.children, valor)
                }
            })
            

        })
    }

    updateIndicators(indicators, value ){
        
        for( let indicator of indicators){
            indicator.classList.remove('bg-blue-500')
            if(!indicator.classList.contains('bg-slate-100/50')) {
                indicator.classList.add('bg-slate-100/50')
                indicator.classList.add('dark:bg-slate-800/50')
            }
        }
        let n = Math.abs(value / 100)
        console.log(indicators[n], n)
        let indicator = indicators[n]
        indicator.classList.remove('bg-slate-100/50')
        indicator.classList.remove('dark:bg-slate-800/50')
        indicator.classList.add('bg-blue-500')
    }
}

class Collapse{
    constructor(){
        this.addListeners()
    }

    addListeners(){
        const buttons = document.querySelectorAll('[data-toggle="collapse"]')
        buttons.forEach( btn => {
            btn.addEventListener('click', function(){

                const target = document.querySelector(this.dataset.target)
                if(target.classList.contains('h-0')){
                    target.classList.remove('h-0')
                    target.classList.add('h-auto')
                }else if(target.classList.contains('h-auto')){
                    target.classList.remove('h-auto')
                    target.classList.add('h-0')
                }
            })
        })
        const buttonsH = document.querySelectorAll('[data-toggle="collapse-h"]')
        buttonsH.forEach( btn => {
            btn.addEventListener('click', function(){

                const target = document.querySelector(this.dataset.target)
                if(target.classList.contains('w-0')){
                    target.classList.remove('w-0')
                    target.classList.add('w-auto')
                }else if(target.classList.contains('w-auto')){
                    target.classList.remove('w-auto')
                    target.classList.add('w-0')
                }
            })
        })
    }
}

class Dropdown{
    constructor(){
        this.dropdowns = document.querySelectorAll('[data-type="dropdown"]')
        this.addListeners()
        const node = document.createElement('button')
        
    }
    addListeners(){
        this.dropdowns.forEach( dropdown => {
            
            dropdown.firstElementChild.addEventListener('click', () => {
                if(dropdown.lastElementChild.classList.contains('opacity-0')){
                    dropdown.lastElementChild.classList.remove('opacity-0')
                    dropdown.lastElementChild.classList.add('opacity-100')
                }else{
                    dropdown.lastElementChild.classList.remove('opacity-100')
                    dropdown.lastElementChild.classList.add('opacity-0')
                }
            })

            dropdown.addEventListener('focusout', function(){
                dropdown.lastElementChild.classList.remove('opacity-100')
                dropdown.lastElementChild.classList.add('opacity-0')
            })
        })
    }
}

class Modal{
    constructor(){
        this.active = undefined
        this.modal = undefined
        this.addListeners()
    }

    addListeners(){
        document.querySelectorAll('[data-toggle="modal"]').forEach( button => {
            button.addEventListener('click', () => {
                const target = button.dataset.target
                this.active = target
                this.modal = document.querySelector(target)
                
                if(this.modal.classList.contains('invisible')){
                    this.modal.classList.remove('invisible')
                    this.modal.classList.add('visible')
                }else if(this.modal.classList.contains('visible')){
                    this.modal.classList.remove('visible')
                    this.modal.classList.add('invisible')
                    
                }
                const buttonsClose = this.modal.querySelectorAll('button[data-dismiss="modal"]')
                        buttonsClose.forEach( btn => {
                            btn.addEventListener('click', () => {
                                this.closeModal(this.modal)
                            })
                            
                        })

                this.modal.addEventListener('click', (e) => {
                    const target = e.target
                    console.log('clic')
                    if( target.dataset.type == 'modal' && target.dataset.backdrop !== 'static'){
                        this.closeModal( this.modal )
                    } 
                })
            })
        })

        
    }

    closeModal( modal ){
        modal.classList.remove('visible')
        modal.classList.add('invisible')
    }
}

class MainUI{
    constructor(){
        
    }
}


new MainUI()