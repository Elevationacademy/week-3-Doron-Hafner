const renderer = Renderer()
const model = Model()

$('#btn1').on('click', function () {
    model.saveValue($('input'))
    renderer.render()
})




$('#btn2').on('click', function () {
    model.clearWisdom()
    renderer.render()
})




$('span').on('click', function () {
    model.deleteItem($(this))
});

