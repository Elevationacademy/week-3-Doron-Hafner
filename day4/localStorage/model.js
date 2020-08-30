let wisdom = []
const Model = function () {
    const saveValue = function(input) {
        wisdom.push({ text: input })
        if  (wisdom.length%2 === 0) {
            model.initiateStorage()
        }
    }

    const initiateStorage = function() {
        localStorage.wisdom = JSON.stringify(wisdom)
        let data = localStorage.wisdom 
        
        
    }

    const clearWisdom = function () {
        localStorage.removeItem('wisdom')
    }

    return {
        saveValue,
        clearWisdom,
        initiateStorage
    }
}















    let input = $('input').val()
    $('body').append(`<div>${input}<span style="color:red; padding-left:10px; cursor:pointer">x<span/><div/>`);

    let wisdomStorage= JSON.parse(localStorage.wisdom)
const render = function () {
wisdomStorage.forEach(element => 
    $('body').append(`<div>${element.text}<span style="color:red; padding-left:10px; cursor:pointer">x<span/></div>`))
}



