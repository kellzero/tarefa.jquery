$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        const nomeTarefa = $('#nome-tarefa').val();
        const novaTarefa = $(`
            <li class="tarefa-adicionada">
                ${nomeTarefa} 
            </li>
        `);
        $(novaTarefa).appendTo('ul');
        $('#nome-tarefa').val('');
    });
    $('ul').on('click', '.tarefa-adicionada',function() {
        $(this).toggleClass('completed');
    });
});
