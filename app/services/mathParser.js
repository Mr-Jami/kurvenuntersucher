app.service('mathParser', function() {
    const parser = new AsciiMathParser();
    return parser;
    /*const tex = parser.parse("int_(i=1)^10 x^2/2 dx");

    this.myFunc = function (x) {
        return x.toString(16);
    }*/
});