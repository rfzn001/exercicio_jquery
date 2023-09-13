$(document).ready(function () {
    $("#formulario-tarefa").submit(function (e) {
        e.preventDefault();
        const nomeTarefa = $("#tarefa").val().trim();
        if (nomeTarefa !== "") {
            const elementoTarefa = $("<li>").text(nomeTarefa);
            $("#lista-tarefas").append(elementoTarefa);
            $("#tarefa").val("");
        }
    });

    $("#lista-tarefas").on("click", "li", function () {
        $(this).toggleClass("completa");
    });
});
