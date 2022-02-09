function addExperienceForm() {
    let p = document.getElementById("experience-node")
    let p_prime = p.cloneNode(true)
    let new_parent = document.getElementById("parent-experience-node")
    new_parent.appendChild(p_prime)
}

$( document ).ready(function() {

    $(".forward-progress").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        let width = (document.getElementById("form-progress").style.width);
        console.log(width)
        let newWidth = parseInt(width.substring(0, width.length - 1)) + 17 + '%';
        console.log(newWidth)
        $("#form-progress").width(newWidth);
        console.log($("#form-progress").width());
    });

    $(".backward-progress").on('click', function(event){
        event.stopPropagation();
        event.stopImmediatePropagation();
        let width = (document.getElementById("form-progress").style.width);
        let newWidth = parseInt(width.substring(0, width.length - 1)) - 17 + '%';
        $("#form-progress").width(newWidth);
    });

});