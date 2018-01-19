$('.head-tab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})

$('.head-tab a[href="#obligation"]').tab('show')