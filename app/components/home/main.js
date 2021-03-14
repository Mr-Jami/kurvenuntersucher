app.controller('mainCtrl', function ($scope, mathParser) {
    let vm = this;
    vm._options = {
        a: null,
        b: null,
        c: null,
        d: null
    }
    vm.parser = mathParser;
    vm.updateWidth = (id) => {
        document.getElementById(id).style.width = vm._options[id].length / 2 + 0.4 + "em";
    }
})