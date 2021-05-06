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
var clojure_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,4],$V1=[1,11],$V2=[1,7],$V3=[1,8],$V4=[1,10],$V5=[1,25],$V6=[1,22],$V7=[1,23],$V8=[1,18],$V9=[1,21],$Va=[1,19],$Vb=[1,20],$Vc=[1,26],$Vd=[1,27],$Ve=[1,28],$Vf=[1,29],$Vg=[1,17],$Vh=[5,8,10,14,20,43,45,47],$Vi=[1,32],$Vj=[8,10,43,45,47],$Vk=[8,10,14,43,45,47],$Vl=[1,74],$Vm=[10,13];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statement":6,"statements":7,"(":8,"defn":9,"IDENTIFIER":10,"[":11,"parameters":12,"]":13,")":14,"e":15,"if":16,"bracket_statements":17,"cond":18,"elif":19,":else":20,"operator":21,"not":22,"or":23,"and":24,"*":25,"/":26,"+":27,"-":28,"comparison_operator":29,">=":30,">":31,"<=":32,"<":33,"equal_exprs":34,"times_exprs":35,"divide_exprs":36,"plus_exprs":37,"minus_exprs":38,"and_exprs":39,"or_exprs":40,"=":41,"function_call":42,"'(":43,"exprs":44,"NUMBER":45,"var_name":46,"STRING_LITERAL":47,"parameter":48,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",8:"(",9:"defn",10:"IDENTIFIER",11:"[",13:"]",14:")",16:"if",18:"cond",20:":else",22:"not",23:"or",24:"and",25:"*",26:"/",27:"+",28:"-",30:">=",31:">",32:"<=",33:"<",41:"=",43:"'(",45:"NUMBER",47:"STRING_LITERAL"},
productions_: [0,[3,2],[4,2],[4,1],[7,1],[6,8],[6,1],[6,6],[6,6],[19,3],[19,2],[17,1],[21,0],[21,1],[21,1],[21,1],[21,1],[21,1],[21,1],[21,1],[21,1],[29,1],[29,1],[29,1],[29,1],[34,2],[34,1],[35,2],[35,1],[36,2],[36,1],[37,2],[37,1],[38,2],[38,1],[39,2],[39,1],[40,2],[40,1],[15,5],[15,5],[15,5],[15,5],[15,5],[15,5],[15,5],[15,5],[15,1],[15,3],[15,1],[15,1],[15,1],[48,1],[12,2],[12,1],[42,3],[42,4],[46,1],[44,2],[44,1]],
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
case 3: case 54:
this.$ =
 [$$[$0]];
break;
case 4:
this.$ = ["top_level_statements",$$[$0]]
break;
case 5:
this.$ = ["function","public","Object",$$[$0-5],$$[$0-3],$$[$0-1]]
break;
case 6:
this.$=["statements",[["semicolon",["return",$$[$0]]]]];
break;
case 7:
this.$ = ["if",$$[$0-3],$$[$0-2]];
break;
case 8:
this.$ = ["if",$$[$0-3],$$[$0-2],$$[$0-1]];
break;
case 9:
this.$ = ["elif",$$[$0-2],$$[$0-1],$$[$0]]
break;
case 10:
this.$ = ["else",$$[$0]];
break;
case 11:
this.$= ["statements",[$$[$0]]];
break;
case 13:
this.$ = "!"
break;
case 14:
this.$ = "logic_or";
break;
case 15:
this.$ = "logic_and";
break;
case 25:
this.$ = ["logic_equals",$$[$0-1],$$[$0]]
break;
case 27:
this.$ = ["*",$$[$0-1],$$[$0]]
break;
case 29:
this.$ = ["/",$$[$0-1],$$[$0]]
break;
case 31:
this.$ = ["+",$$[$0-1],$$[$0]]
break;
case 33:
this.$ = ["-",$$[$0-1],$$[$0]]
break;
case 35:
this.$ = ["logic_and",$$[$0-1],$$[$0]]
break;
case 37:
this.$ = ["logic_or",$$[$0-1],$$[$0]]
break;
case 39: case 40: case 41: case 42: case 43: case 46:
this.$ = [$$[$0-3],$$[$0-2],$$[$0-1]];
break;
case 44:
this.$ = ["||",$$[$0-2],$$[$0-1]];
break;
case 45:
this.$ = ["&&",$$[$0-2],$$[$0-1]];
break;
case 48:
this.$ = ["initializer_list","Object",$$[$0-1]]
break;
case 49: case 50: case 51:
this.$ = yytext;
break;
case 52:
this.$ = ["Object", $$[$0]];
break;
case 53: case 58:
this.$ = $$[$0-1].concat([$$[$0]]);
break;
case 55:
this.$ = ["function_call",$$[$0-1],[]];
break;
case 56:
this.$ = ["function_call",$$[$0-2],$$[$0-1]];
break;
case 59:
this.$ = [$$[$0]];
break;
}
},
table: [{3:1,4:2,6:3,8:$V0,10:$V1,15:5,42:6,43:$V2,45:$V3,46:9,47:$V4},{1:[3]},{5:[1,12]},{4:13,5:[2,3],6:3,8:$V0,10:$V1,15:5,42:6,43:$V2,45:$V3,46:9,47:$V4},{9:[1,14],10:$V5,16:[1,15],18:[1,16],23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:24,30:$Vc,31:$Vd,32:$Ve,33:$Vf,41:$Vg},o($Vh,[2,6]),o($Vh,[2,47]),{8:$Vi,10:$V1,15:31,42:6,43:$V2,44:30,45:$V3,46:9,47:$V4},o($Vh,[2,49]),o($Vh,[2,50]),o($Vh,[2,51]),o([5,8,10,13,14,20,43,45,47],[2,57]),{1:[2,1]},{5:[2,2]},{10:[1,33]},{8:$Vi,10:$V1,15:34,42:6,43:$V2,45:$V3,46:9,47:$V4},{8:$Vi,10:$V1,15:35,42:6,43:$V2,45:$V3,46:9,47:$V4},{8:$Vi,10:$V1,15:36,42:6,43:$V2,45:$V3,46:9,47:$V4},{8:$Vi,10:$V1,15:37,42:6,43:$V2,45:$V3,46:9,47:$V4},{8:$Vi,10:$V1,15:38,42:6,43:$V2,45:$V3,46:9,47:$V4},{8:$Vi,10:$V1,15:39,42:6,43:$V2,45:$V3,46:9,47:$V4},{8:$Vi,10:$V1,15:40,42:6,43:$V2,45:$V3,46:9,47:$V4},{8:$Vi,10:$V1,15:41,42:6,43:$V2,45:$V3,46:9,47:$V4},{8:$Vi,10:$V1,15:42,42:6,43:$V2,45:$V3,46:9,47:$V4},{8:$Vi,10:$V1,15:43,42:6,43:$V2,45:$V3,46:9,47:$V4},{8:$Vi,10:$V1,14:[1,44],15:31,42:6,43:$V2,44:45,45:$V3,46:9,47:$V4},o($Vj,[2,21]),o($Vj,[2,22]),o($Vj,[2,23]),o($Vj,[2,24]),{8:$Vi,10:$V1,14:[1,46],15:47,42:6,43:$V2,45:$V3,46:9,47:$V4},o($Vk,[2,59]),{10:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:24,30:$Vc,31:$Vd,32:$Ve,33:$Vf,41:$Vg},{11:[1,48]},{6:50,8:$V0,10:$V1,15:5,17:49,42:6,43:$V2,45:$V3,46:9,47:$V4},{6:50,8:$V0,10:$V1,15:5,17:51,42:6,43:$V2,45:$V3,46:9,47:$V4},{8:$Vi,10:$V1,15:53,34:52,42:6,43:$V2,45:$V3,46:9,47:$V4},{8:$Vi,10:$V1,15:55,35:54,42:6,43:$V2,45:$V3,46:9,47:$V4},{8:$Vi,10:$V1,15:57,37:56,42:6,43:$V2,45:$V3,46:9,47:$V4},{8:$Vi,10:$V1,15:59,38:58,42:6,43:$V2,45:$V3,46:9,47:$V4},{8:$Vi,10:$V1,15:61,36:60,42:6,43:$V2,45:$V3,46:9,47:$V4},{8:$Vi,10:$V1,15:63,40:62,42:6,43:$V2,45:$V3,46:9,47:$V4},{8:$Vi,10:$V1,15:65,39:64,42:6,43:$V2,45:$V3,46:9,47:$V4},{8:$Vi,10:$V1,15:66,42:6,43:$V2,45:$V3,46:9,47:$V4},o($Vh,[2,55]),{8:$Vi,10:$V1,14:[1,67],15:47,42:6,43:$V2,45:$V3,46:9,47:$V4},o($Vh,[2,48]),o($Vk,[2,58]),{10:$V1,12:68,46:70,48:69},{6:50,8:$V0,10:$V1,15:5,17:71,42:6,43:$V2,45:$V3,46:9,47:$V4},o([8,10,14,20,43,45,47],[2,11]),{8:$Vi,10:$V1,15:73,19:72,20:$Vl,42:6,43:$V2,45:$V3,46:9,47:$V4},{8:$Vi,10:$V1,14:[1,75],15:76,42:6,43:$V2,45:$V3,46:9,47:$V4},o($Vk,[2,26]),{8:$Vi,10:$V1,14:[1,77],15:78,42:6,43:$V2,45:$V3,46:9,47:$V4},o($Vk,[2,28]),{8:$Vi,10:$V1,14:[1,79],15:80,42:6,43:$V2,45:$V3,46:9,47:$V4},o($Vk,[2,32]),{8:$Vi,10:$V1,14:[1,81],15:82,42:6,43:$V2,45:$V3,46:9,47:$V4},o($Vk,[2,34]),{8:$Vi,10:$V1,14:[1,83],15:84,42:6,43:$V2,45:$V3,46:9,47:$V4},o($Vk,[2,30]),{8:$Vi,10:$V1,14:[1,85],15:86,42:6,43:$V2,45:$V3,46:9,47:$V4},o($Vk,[2,38]),{8:$Vi,10:$V1,14:[1,87],15:88,42:6,43:$V2,45:$V3,46:9,47:$V4},o($Vk,[2,36]),{14:[1,89]},o($Vh,[2,56]),{10:$V1,13:[1,90],46:70,48:91},o($Vm,[2,54]),o($Vm,[2,52]),{14:[1,92]},{14:[1,93]},{6:50,8:$V0,10:$V1,15:5,17:94,42:6,43:$V2,45:$V3,46:9,47:$V4},{6:50,8:$V0,10:$V1,15:5,17:95,42:6,43:$V2,45:$V3,46:9,47:$V4},o($Vh,[2,39]),o($Vk,[2,25]),o($Vh,[2,40]),o($Vk,[2,27]),o($Vh,[2,41]),o($Vk,[2,31]),o($Vh,[2,42]),o($Vk,[2,33]),o($Vh,[2,43]),o($Vk,[2,29]),o($Vh,[2,44]),o($Vk,[2,37]),o($Vh,[2,45]),o($Vk,[2,35]),o($Vh,[2,46]),{6:96,8:$V0,10:$V1,15:5,42:6,43:$V2,45:$V3,46:9,47:$V4},o($Vm,[2,53]),o($Vh,[2,7]),o($Vh,[2,8]),{8:$Vi,10:$V1,15:73,19:97,20:$Vl,42:6,43:$V2,45:$V3,46:9,47:$V4},{14:[2,10]},{14:[1,98]},{14:[2,9]},o($Vh,[2,5])],
defaultActions: {12:[2,1],13:[2,2],95:[2,10],97:[2,9]},
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
case 0:/* skip whitespace */
break;
case 1:return 45
break;
case 2:return 47
break;
case 3:return "'("
break;
case 4:return 9
break;
case 5:return 22
break;
case 6:return 24
break;
case 7:return 18
break;
case 8:return 20
break;
case 9:return '?'
break;
case 10:return 30
break;
case 11:return 31
break;
case 12:return 32
break;
case 13:return 33
break;
case 14:return '=>'
break;
case 15:return '=='
break;
case 16:return 41
break;
case 17:return '*='
break;
case 18:return 25
break;
case 19:return '/='
break;
case 20:return 26
break;
case 21:return '-='
break;
case 22:return '--'
break;
case 23:return 28
break;
case 24:return '++'
break;
case 25:return '+='
break;
case 26:return 27
break;
case 27:return '^'
break;
case 28:return '{'
break;
case 29:return '}'
break;
case 30:return 11
break;
case 31:return 13
break;
case 32:return 8
break;
case 33:return 14
break;
case 34:return 10
break;
case 35:return 5
break;
case 36:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:'\()/,/^(?:defn\b)/,/^(?:not\b)/,/^(?:and\b)/,/^(?:cond\b)/,/^(?::else\b)/,/^(?:\?)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:=>)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36],"inclusive":true}}
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
exports.parser = clojure_parser;
exports.Parser = clojure_parser.Parser;
exports.parse = function () { return clojure_parser.parse.apply(clojure_parser, arguments); };
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