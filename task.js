$(function() {
let ultask=$('#ultask')
let add=$('#Add')
let clear=$('#clear')
let cleanup=$('#cleanup')
let sort=$('#sort')
let input=$('#input')



function added(){
    let listitem=$('<li>',{
        'class':'list-group-item',
        text:input.val()
    })
    listitem.click(function (){
        listitem.toggleClass('disabled')
        togglebutton()
    })
    ultask.append(listitem)
    input.val('')
    togglebutton()
}
add.click(function () {
    added()
    
    
})

function togglebutton(){
    
        add.prop('disabled',input.val()=='')
        clear.prop('disabled',input.val()=='')
        sort.prop('disabled',ultask.children().length<1)
        cleanup.prop('disabled',$('#ultask .disabled').length<1)

    
}

input.on('input',function(){
    togglebutton()
})

input.keypress(function(event){
    if(event.which==13)  
    added()

    
})

sort.click(function () {
    $('#ultask .disabled').appendTo(ultask)

})

cleanup.click(function () {
    $('#ultask .disabled').remove()

})

clear.click(function () {
    input.val('')
    togglebutton()

})
})
