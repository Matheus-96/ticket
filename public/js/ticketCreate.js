$(document).ready(() => {
    $(".card").on('click', e => {
        // $("#modalRegister").toggle()
        $('.card').each((i, e) => $(e)[0].classList.remove('bg-primary'))
        e.currentTarget.classList.toggle("bg-primary")
        $("#collapseDepartment").toggle('show')
        $("#departmentCheck").removeClass('bi-exclamation-circle text-danger')
        $("#selectedDepartment").val(e.currentTarget.dataset.department)
        $("#description").focus()

    })

    // $(".close-modal").on('click', e => {
    //     $("#modalRegister").toggle()
    // })

    // $("#btn-select-department").on('click', ()=> {
    //     $("#modalRegister").toggle()
    // })

    $("#description").on('input', (e) => {
        if ($('#description').val() == "") {
            $("#detailsCheck").removeClass('bi-check-circle')
            $("#detailsCheck").addClass('bi-exclamation-circle text-danger')
        } else {
            $("#detailsCheck").removeClass('bi-exclamation-circle text-danger')
        }
    })

    $(".accordion-button").on('click', e => {
        e.preventDefault()
        $("#" + e.currentTarget.dataset.bsTarget).toggle('show')
    })
})
