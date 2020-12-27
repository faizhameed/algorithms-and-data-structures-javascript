class Animal{
    dogs=linkedList('dog')
    cats=linkedList('cat')
    constructor(){
        this.order =0
    }
    enqueue_animal ()
}

function linkedList(type){
return {
    name:null,
    next:null,
    order:null,
    type
}
}