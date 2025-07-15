const addHtmlToId = function (idname, path) {
    $(function () {
        $.ajaxSetup({
            cache: false
        });
        $(idname).load(path);
    });
}
