class  Dropdown {
    constructor(selector,options){
        this.$el = document.querySelector(selector);
        console.log(this.$el);
        //vorpeszi karoxananq stanal dostump popoxakannierin voronq trvum en obektin
        this.items = options.items;
        this.$el.querySelector('.dropdown_label').textContent = this.items[0].label;

        this.$el.addEventListener('click',(event)=>{
            if(event.target.classList.contains('dropdown_label')) {
                // this.open();
                if(this.$el.classList.contains('open')){
                    this.close();
                }else {
                    this.open();
                }
            }else if(event.target.tagName.toLowerCase() === 'li'){
                this.select(event.target.dataset.id);
            }
        });
        const itemsHTML = this.items.map(i =>{
            return `<li data-id="${i.id}">${i.label}</li>`

        }).join('');
        this.$el.querySelector('.dropdown_menu').insertAdjacentHTML('afterbegin',itemsHTML)

    }
    select (id){
        const item = this.items.find(i => i.id === id);
        // console.log(item)
        this.$el.querySelector('.dropdown_label').textContent = item.label;
        this.close();
    }


    open(){
        //avelacnum enq class open
        this.$el.classList.add('open')
    }
    close(){
        this.$el.classList.remove('open')
    }
}




const dropdown  = new  Dropdown('#dropdown',{
    items : [
        {label: 'москва',id:'msk'},
        {label:'санкт-петербург',id:'spb'},
        {label:'краснадар',id:'krdr'}
    ]
});