(function () {
    var editor = document.querySelector(".editor"),
        aceEditor = ace.edit(editor);

    var css = document.querySelector("#css");

    aceEditor.getSession().setUseWorker(false);
    aceEditor.setTheme("ace/theme/tomorrow");
    aceEditor.getSession().setMode("ace/mode/css");
    aceEditor.setValue(css.innerHTML);
    aceEditor.gotoLine(1);

    aceEditor.getSession().on('change', updatePreview);

    function updatePreview () {
        css.innerHTML = aceEditor.getSession().getValue();
    }
}());
