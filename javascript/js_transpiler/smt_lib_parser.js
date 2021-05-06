/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var smt_lib_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,21],$V2=[1,16],$V3=[1,18],$V4=[1,20],$V5=[1,25],$V6=[1,24],$V7=[8,10,13,49,51],$V8=[1,55],$V9=[5,10],$Va=[8,10,49,51],$Vb=[10,13],$Vc=[1,101],$Vd=[1,135];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statement":6,"data_type_and":7,"IDENTIFIER":8,"statements":9,"(":10,"declare-const":11,"type":12,")":13,"define-fun":14,"e":15,"parameters":16,"define-fun-rec":17,"assert":18,"define-sort":19,"Array":20,"equal_exprs":21,"times_exprs":22,"divide_exprs":23,"plus_exprs":24,"minus_exprs":25,"and_exprs":26,"or_exprs":27,"logic_operator":28,">":29,"<":30,">=":31,"<=":32,"implication":33,"=>":34,"implies":35,"=":36,"*":37,"+":38,"-":39,"/":40,"or":41,"and":42,"not":43,"forall":44,"forall_parameters":45,"if":46,"ite":47,"function_call":48,"NUMBER":49,"var_name":50,"STRING_LITERAL":51,"forall_parameter":52,"parameter":53,"exprs":54,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"IDENTIFIER",10:"(",11:"declare-const",13:")",14:"define-fun",17:"define-fun-rec",18:"assert",19:"define-sort",20:"Array",29:">",30:"<",31:">=",32:"<=",34:"=>",35:"implies",36:"=",37:"*",38:"+",39:"-",40:"/",41:"or",42:"and",43:"not",44:"forall",46:"if",47:"ite",49:"NUMBER",51:"STRING_LITERAL"},
productions_: [0,[3,2],[4,2],[4,1],[7,2],[7,1],[9,1],[6,5],[6,8],[6,9],[6,8],[6,9],[6,4],[6,9],[12,5],[12,1],[21,2],[21,1],[22,2],[22,1],[23,2],[23,1],[24,2],[24,1],[25,2],[25,1],[26,2],[26,1],[27,2],[27,1],[28,1],[28,1],[28,1],[28,1],[33,1],[33,1],[15,5],[15,5],[15,5],[15,5],[15,5],[15,5],[15,5],[15,5],[15,5],[15,4],[15,7],[15,6],[15,6],[15,1],[15,1],[15,1],[15,1],[52,4],[45,2],[45,1],[53,4],[16,2],[16,1],[48,3],[48,4],[50,1],[54,2],[54,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]]
break;
case 2:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 55: case 58:
this.$ =
 [$$[$0]];
break;
case 4:
this.$ = ["data_type_and",$$[$0-1],$$[$0]];
break;
case 5:
this.$ =
 $$[$0];
break;
case 6:
this.$ = ["top_level_statements",$$[$0]]
break;
case 7:
this.$ = ["semicolon",["initialize_empty_vars",$$[$0-1],[$$[$0-2]]]];
break;
case 8: case 10:
this.$ = ["function","public",$$[$0-2],$$[$0-5],[],["semicolon",["return",$$[$0-1]]]]
break;
case 9: case 11:
this.$ = ["function","public",$$[$0-2],$$[$0-6],$$[$0-4],["semicolon",["return",$$[$0-1]]]]
break;
case 12:
this.$ = ["semicolon",["function_call","assert",[$$[$0-1]]]]
break;
case 13:
this.$ = ["algebraic_data_type",$$[$0-4],$$[$0-2]]
break;
case 14:
this.$ = ["Array",[$$[$0-2],$$[$0-1]]];
break;
case 16:
this.$ = ["logic_equals",$$[$0-1],$$[$0]]
break;
case 18:
this.$ = ["*",$$[$0-1],$$[$0]]
break;
case 20:
this.$ = ["/",$$[$0-1],$$[$0]]
break;
case 22:
this.$ = ["+",$$[$0-1],$$[$0]]
break;
case 24:
this.$ = ["-",$$[$0-1],$$[$0]]
break;
case 26:
this.$ = ["logic_and",$$[$0-1],$$[$0]]
break;
case 28:
this.$ = ["logic_or",$$[$0-1],$$[$0]]
break;
case 36:
this.$ = ["implies",$$[$0-2],$$[$0-1]];
break;
case 37: case 39: case 40: case 41: case 42:
this.$ = [$$[$0-3],$$[$0-2],$$[$0-1]];
break;
case 38:
this.$ = ["logic_equals",$$[$0-2],$$[$0-1]];
break;
case 43:
this.$ = ["logic_or",$$[$0-2],$$[$0-1]];
break;
case 44:
this.$ = ["logic_and",$$[$0-2],$$[$0-1]];
break;
case 45:
this.$ = ["!",$$[$0-1]];
break;
case 46:
this.$ = ['z3_forall',$$[$0-3],$$[$0-1]];
break;
case 47: case 48:
this.$ = ["ternary_operator",$$[$0-3],$$[$0-2],$$[$0-1]];
break;
case 50: case 51: case 52:
this.$ = yytext;
break;
case 53:
this.$ = ["forall_parameter", $$[$0-1],$$[$0-2]];
break;
case 54: case 57: case 62:
this.$ = $$[$0-1].concat([$$[$0]]);
break;
case 56:
this.$ = [$$[$0-1], $$[$0-2]];
break;
case 59:
this.$ = ["function_call",$$[$0-1],[]];
break;
case 60:
this.$ = ["function_call",$$[$0-2],$$[$0-1]];
break;
case 63:
this.$ = [$$[$0]];
break;
}
},
table: [{3:1,4:2,6:3,10:$V0},{1:[3]},{5:[1,5]},{4:6,5:[2,3],6:3,10:$V0},{11:[1,7],14:[1,8],17:[1,9],18:[1,10],19:[1,11]},{1:[2,1]},{5:[2,2]},{8:[1,12]},{8:[1,13]},{8:[1,14]},{8:$V1,10:$V2,15:15,48:17,49:$V3,50:19,51:$V4},{10:[1,22]},{8:$V5,10:$V6,12:23},{10:[1,26]},{10:[1,27]},{13:[1,28]},{8:[1,42],28:30,29:[1,45],30:[1,46],31:[1,47],32:[1,48],33:29,34:[1,43],35:[1,44],36:[1,31],37:[1,32],38:[1,33],39:[1,34],40:[1,35],41:[1,36],42:[1,37],43:[1,38],44:[1,39],46:[1,40],47:[1,41]},o($V7,[2,49]),o($V7,[2,50]),o($V7,[2,51]),o($V7,[2,52]),o($V7,[2,61]),{13:[1,49]},{13:[1,50]},{20:[1,51]},o($V7,[2,15]),{10:$V8,13:[1,52],16:53,53:54},{10:$V8,13:[1,56],16:57,53:54},o($V9,[2,12]),{8:$V1,10:$V2,15:58,48:17,49:$V3,50:19,51:$V4},{8:$V1,10:$V2,15:59,48:17,49:$V3,50:19,51:$V4},{8:$V1,10:$V2,15:60,48:17,49:$V3,50:19,51:$V4},{8:$V1,10:$V2,15:61,48:17,49:$V3,50:19,51:$V4},{8:$V1,10:$V2,15:62,48:17,49:$V3,50:19,51:$V4},{8:$V1,10:$V2,15:63,48:17,49:$V3,50:19,51:$V4},{8:$V1,10:$V2,15:64,48:17,49:$V3,50:19,51:$V4},{8:$V1,10:$V2,15:65,48:17,49:$V3,50:19,51:$V4},{8:$V1,10:$V2,15:66,48:17,49:$V3,50:19,51:$V4},{8:$V1,10:$V2,15:67,48:17,49:$V3,50:19,51:$V4},{10:[1,68]},{8:$V1,10:$V2,15:69,48:17,49:$V3,50:19,51:$V4},{8:$V1,10:$V2,15:70,48:17,49:$V3,50:19,51:$V4},{8:$V1,10:$V2,13:[1,71],15:73,48:17,49:$V3,50:19,51:$V4,54:72},o($Va,[2,34]),o($Va,[2,35]),o($Va,[2,30]),o($Va,[2,31]),o($Va,[2,32]),o($Va,[2,33]),{8:[1,74]},o($V9,[2,7]),{8:$V5,10:$V6,12:75},{8:$V5,10:$V6,12:76},{10:$V8,13:[1,77],53:78},o($Vb,[2,58]),{8:$V1,50:79},{8:$V5,10:$V6,12:80},{10:$V8,13:[1,81],53:78},{8:$V1,10:$V2,15:82,48:17,49:$V3,50:19,51:$V4},{8:$V1,10:$V2,15:83,48:17,49:$V3,50:19,51:$V4},{8:$V1,10:$V2,15:85,21:84,48:17,49:$V3,50:19,51:$V4},{8:$V1,10:$V2,15:87,22:86,48:17,49:$V3,50:19,51:$V4},{8:$V1,10:$V2,15:89,24:88,48:17,49:$V3,50:19,51:$V4},{8:$V1,10:$V2,15:91,25:90,48:17,49:$V3,50:19,51:$V4},{8:$V1,10:$V2,15:93,23:92,48:17,49:$V3,50:19,51:$V4},{8:$V1,10:$V2,15:95,27:94,48:17,49:$V3,50:19,51:$V4},{8:$V1,10:$V2,15:97,26:96,48:17,49:$V3,50:19,51:$V4},{13:[1,98]},{10:$Vc,45:99,52:100},{8:$V1,10:$V2,15:102,48:17,49:$V3,50:19,51:$V4},{8:$V1,10:$V2,15:103,48:17,49:$V3,50:19,51:$V4},o($V7,[2,59]),{8:$V1,10:$V2,13:[1,104],15:105,48:17,49:$V3,50:19,51:$V4},o($V7,[2,63]),{10:[1,106]},{8:$V5,10:$V6,12:107},{8:$V1,10:$V2,15:108,48:17,49:$V3,50:19,51:$V4},{8:$V5,10:$V6,12:109},o($Vb,[2,57]),{8:$V5,10:$V6,12:110},{8:$V1,10:$V2,15:111,48:17,49:$V3,50:19,51:$V4},{8:$V5,10:$V6,12:112},{13:[1,113]},{13:[1,114]},{8:$V1,10:$V2,13:[1,115],15:116,48:17,49:$V3,50:19,51:$V4},o($V7,[2,17]),{8:$V1,10:$V2,13:[1,117],15:118,48:17,49:$V3,50:19,51:$V4},o($V7,[2,19]),{8:$V1,10:$V2,13:[1,119],15:120,48:17,49:$V3,50:19,51:$V4},o($V7,[2,23]),{8:$V1,10:$V2,13:[1,121],15:122,48:17,49:$V3,50:19,51:$V4},o($V7,[2,25]),{8:$V1,10:$V2,13:[1,123],15:124,48:17,49:$V3,50:19,51:$V4},o($V7,[2,21]),{8:$V1,10:$V2,13:[1,125],15:126,48:17,49:$V3,50:19,51:$V4},o($V7,[2,29]),{8:$V1,10:$V2,13:[1,127],15:128,48:17,49:$V3,50:19,51:$V4},o($V7,[2,27]),o($V7,[2,45]),{10:$Vc,13:[1,129],52:130},o($Vb,[2,55]),{8:[1,131]},{8:$V1,10:$V2,15:132,48:17,49:$V3,50:19,51:$V4},{8:$V1,10:$V2,15:133,48:17,49:$V3,50:19,51:$V4},o($V7,[2,60]),o($V7,[2,62]),{7:134,8:$Vd},{13:[1,136]},{13:[1,137]},{8:$V1,10:$V2,15:138,48:17,49:$V3,50:19,51:$V4},{13:[1,139]},{13:[1,140]},{8:$V1,10:$V2,15:141,48:17,49:$V3,50:19,51:$V4},o($V7,[2,36]),o($V7,[2,37]),o($V7,[2,38]),o($V7,[2,16]),o($V7,[2,39]),o($V7,[2,18]),o($V7,[2,40]),o($V7,[2,22]),o($V7,[2,41]),o($V7,[2,24]),o($V7,[2,42]),o($V7,[2,20]),o($V7,[2,43]),o($V7,[2,28]),o($V7,[2,44]),o($V7,[2,26]),{8:$V1,10:$V2,15:142,48:17,49:$V3,50:19,51:$V4},o($Vb,[2,54]),{8:$V5,10:$V6,12:143},{13:[1,144]},{13:[1,145]},{13:[1,146]},{7:147,8:$Vd,13:[2,5]},o($V7,[2,14]),o($V9,[2,8]),{13:[1,148]},o($Vb,[2,56]),o($V9,[2,10]),{13:[1,149]},{13:[1,150]},{13:[1,151]},o($V7,[2,47]),o($V7,[2,48]),{13:[1,152]},{13:[2,4]},o($V9,[2,9]),o($V9,[2,11]),o($V7,[2,46]),o($Vb,[2,53]),o($V9,[2,13])],
defaultActions: {5:[2,1],6:[2,2],147:[2,4]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* IGNORE */
break;
case 1:/* IGNORE */
break;
case 2:return 49
break;
case 3:return 51
break;
case 4:return 20
break;
case 5:return 35
break;
case 6:return 17
break;
case 7:return 14
break;
case 8:return 19
break;
case 9:return 11
break;
case 10:return 44
break;
case 11:return 18
break;
case 12:return 43
break;
case 13:return 47
break;
case 14:return 46
break;
case 15:return 42
break;
case 16:return 41
break;
case 17:return '?'
break;
case 18:return 31
break;
case 19:return 29
break;
case 20:return 32
break;
case 21:return 30
break;
case 22:return 34
break;
case 23:return '=='
break;
case 24:return 36
break;
case 25:return '*='
break;
case 26:return 37
break;
case 27:return '/='
break;
case 28:return 40
break;
case 29:return '-='
break;
case 30:return '--'
break;
case 31:return 39
break;
case 32:return '++'
break;
case 33:return '+='
break;
case 34:return 38
break;
case 35:return '^'
break;
case 36:return '{'
break;
case 37:return '}'
break;
case 38:return '['
break;
case 39:return ']'
break;
case 40:return 10
break;
case 41:return 13
break;
case 42:return 8
break;
case 43:return 5
break;
case 44:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:;.*)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:Array\b)/,/^(?:implies\b)/,/^(?:define-fun-rec\b)/,/^(?:define-fun\b)/,/^(?:define-sort\b)/,/^(?:declare-const\b)/,/^(?:forall\b)/,/^(?:assert\b)/,/^(?:not\b)/,/^(?:ite\b)/,/^(?:if\b)/,/^(?:and\b)/,/^(?:or\b)/,/^(?:\?)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:=>)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = smt_lib_parser;
exports.Parser = smt_lib_parser.Parser;
exports.parse = function () { return smt_lib_parser.parse.apply(smt_lib_parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}