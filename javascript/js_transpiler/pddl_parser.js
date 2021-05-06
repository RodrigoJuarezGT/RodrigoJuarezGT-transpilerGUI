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
var pddl_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[5,9],$V2=[1,17],$V3=[1,19],$V4=[1,21],$V5=[1,23],$V6=[13,41],$V7=[9,13,36,38,41,44,45],$V8=[9,13,36,38,41];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statement":6,"statements":7,"defrule":8,"(":9,"deffunction":10,"IDENTIFIER":11,"parameters":12,")":13,"e":14,"operator":15,"not":16,"or":17,"and":18,">=":19,">":20,"<=":21,"<":22,"*":23,"/":24,"+":25,"-":26,"equal_exprs":27,"times_exprs":28,"divide_exprs":29,"plus_exprs":30,"minus_exprs":31,"and_exprs":32,"or_exprs":33,"=":34,"function_call":35,"NUMBER":36,"var_name":37,"STRING_LITERAL":38,"parameter":39,"exprs":40,"?":41,":action":42,":parameters":43,":precondition":44,":effect":45,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"(",10:"deffunction",11:"IDENTIFIER",13:")",16:"not",17:"or",18:"and",19:">=",20:">",21:"<=",22:"<",23:"*",24:"/",25:"+",26:"-",34:"=",36:"NUMBER",38:"STRING_LITERAL",41:"?",42:":action",43:":parameters",44:":precondition",45:":effect"},
productions_: [0,[3,2],[4,2],[4,1],[7,1],[6,1],[6,8],[15,0],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[15,1],[27,2],[27,1],[28,2],[28,1],[29,2],[29,1],[30,2],[30,1],[31,2],[31,1],[32,2],[32,1],[33,2],[33,1],[14,5],[14,5],[14,5],[14,5],[14,5],[14,5],[14,5],[14,1],[14,1],[14,1],[14,1],[39,1],[12,2],[12,1],[35,3],[35,4],[37,2],[40,2],[40,1],[8,10]],
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
case 3: case 46:
this.$ =
 [$$[$0]];
break;
case 4:
this.$ = ["top_level_statements",$$[$0]]
break;
case 8:
this.$ = "!"
break;
case 9:
this.$ = "logic_or";
break;
case 10:
this.$ = "logic_and";
break;
case 19:
this.$ = ["logic_equals",$$[$0-1],$$[$0]]
break;
case 21:
this.$ = ["*",$$[$0-1],$$[$0]]
break;
case 23:
this.$ = ["/",$$[$0-1],$$[$0]]
break;
case 25:
this.$ = ["+",$$[$0-1],$$[$0]]
break;
case 27:
this.$ = ["-",$$[$0-1],$$[$0]]
break;
case 29:
this.$ = ["logic_and",$$[$0-1],$$[$0]]
break;
case 31:
this.$ = ["logic_or",$$[$0-1],$$[$0]]
break;
case 33: case 34: case 35: case 36: case 37:
this.$ = [$$[$0-3],$$[$0-2],$$[$0-1]];
break;
case 38:
this.$ = ["logic_or",$$[$0-2],$$[$0-1]];
break;
case 39:
this.$ = ["logic_and",$$[$0-2],$$[$0-1]];
break;
case 41: case 42: case 43:
this.$ = yytext;
break;
case 44:
this.$ = ["Object", $$[$0]];
break;
case 45: case 50:
this.$ = $$[$0-1].concat([$$[$0]]);
break;
case 47:
this.$ = ["function_call",$$[$0-1],[]];
break;
case 48:
this.$ = ["function_call",$$[$0-2],$$[$0-1]];
break;
case 49:
this.$ = $$[$0]
break;
case 51:
this.$ = [$$[$0]];
break;
case 52:
this.$= ["defrule",$$[$0-7],$$[$0-3],$$[$0-1]]
break;
}
},
table: [{3:1,4:2,6:3,8:4,9:$V0},{1:[3]},{5:[1,6]},{4:7,5:[2,3],6:3,8:4,9:$V0},o($V1,[2,5]),{10:[1,8],42:[1,9]},{1:[2,1]},{5:[2,2]},{11:[1,10]},{11:[1,11]},{9:[1,12]},{43:[1,13]},{12:14,37:16,39:15,41:$V2},{9:$V3,14:18,35:20,36:$V4,37:22,38:$V5,41:$V2},{13:[1,24],37:16,39:25,41:$V2},o($V6,[2,46]),o($V6,[2,44]),{11:[1,26]},{44:[1,27]},{11:[1,35],17:[1,33],18:[1,34],23:[1,29],24:[1,32],25:[1,30],26:[1,31],34:[1,28]},o($V7,[2,40]),o($V7,[2,41]),o($V7,[2,42]),o($V7,[2,43]),{9:$V3,14:36,35:20,36:$V4,37:22,38:$V5,41:$V2},o($V6,[2,45]),o($V7,[2,49]),{9:$V3,14:37,35:20,36:$V4,37:22,38:$V5,41:$V2},{9:$V3,14:38,35:20,36:$V4,37:22,38:$V5,41:$V2},{9:$V3,14:39,35:20,36:$V4,37:22,38:$V5,41:$V2},{9:$V3,14:40,35:20,36:$V4,37:22,38:$V5,41:$V2},{9:$V3,14:41,35:20,36:$V4,37:22,38:$V5,41:$V2},{9:$V3,14:42,35:20,36:$V4,37:22,38:$V5,41:$V2},{9:$V3,14:43,35:20,36:$V4,37:22,38:$V5,41:$V2},{9:$V3,14:44,35:20,36:$V4,37:22,38:$V5,41:$V2},{9:$V3,13:[1,45],14:47,35:20,36:$V4,37:22,38:$V5,40:46,41:$V2},{13:[1,48]},{45:[1,49]},{9:$V3,14:51,27:50,35:20,36:$V4,37:22,38:$V5,41:$V2},{9:$V3,14:53,28:52,35:20,36:$V4,37:22,38:$V5,41:$V2},{9:$V3,14:55,30:54,35:20,36:$V4,37:22,38:$V5,41:$V2},{9:$V3,14:57,31:56,35:20,36:$V4,37:22,38:$V5,41:$V2},{9:$V3,14:59,29:58,35:20,36:$V4,37:22,38:$V5,41:$V2},{9:$V3,14:61,33:60,35:20,36:$V4,37:22,38:$V5,41:$V2},{9:$V3,14:63,32:62,35:20,36:$V4,37:22,38:$V5,41:$V2},o($V7,[2,47]),{9:$V3,13:[1,64],14:65,35:20,36:$V4,37:22,38:$V5,41:$V2},o($V8,[2,51]),o($V1,[2,6]),{9:$V3,14:66,35:20,36:$V4,37:22,38:$V5,41:$V2},{9:$V3,13:[1,67],14:68,35:20,36:$V4,37:22,38:$V5,41:$V2},o($V8,[2,20]),{9:$V3,13:[1,69],14:70,35:20,36:$V4,37:22,38:$V5,41:$V2},o($V8,[2,22]),{9:$V3,13:[1,71],14:72,35:20,36:$V4,37:22,38:$V5,41:$V2},o($V8,[2,26]),{9:$V3,13:[1,73],14:74,35:20,36:$V4,37:22,38:$V5,41:$V2},o($V8,[2,28]),{9:$V3,13:[1,75],14:76,35:20,36:$V4,37:22,38:$V5,41:$V2},o($V8,[2,24]),{9:$V3,13:[1,77],14:78,35:20,36:$V4,37:22,38:$V5,41:$V2},o($V8,[2,32]),{9:$V3,13:[1,79],14:80,35:20,36:$V4,37:22,38:$V5,41:$V2},o($V8,[2,30]),o($V7,[2,48]),o($V8,[2,50]),{13:[1,81]},o($V7,[2,33]),o($V8,[2,19]),o($V7,[2,34]),o($V8,[2,21]),o($V7,[2,35]),o($V8,[2,25]),o($V7,[2,36]),o($V8,[2,27]),o($V7,[2,37]),o($V8,[2,23]),o($V7,[2,38]),o($V8,[2,31]),o($V7,[2,39]),o($V8,[2,29]),o($V1,[2,52])],
defaultActions: {6:[2,1],7:[2,2]},
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
case 1:return 36
break;
case 2:return 38
break;
case 3:return 42
break;
case 4:return 43
break;
case 5:return 44
break;
case 6:return 45
break;
case 7:return 'assert'
break;
case 8:return 16
break;
case 9:return 18
break;
case 10:return 41
break;
case 11:return 19
break;
case 12:return 20
break;
case 13:return 21
break;
case 14:return 22
break;
case 15:return '=>'
break;
case 16:return '=='
break;
case 17:return 34
break;
case 18:return '*='
break;
case 19:return 23
break;
case 20:return '/='
break;
case 21:return 24
break;
case 22:return '-='
break;
case 23:return '--'
break;
case 24:return 26
break;
case 25:return '++'
break;
case 26:return '+='
break;
case 27:return 25
break;
case 28:return '^'
break;
case 29:return '{'
break;
case 30:return '}'
break;
case 31:return '['
break;
case 32:return ']'
break;
case 33:return 9
break;
case 34:return 13
break;
case 35:return 11
break;
case 36:return 5
break;
case 37:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?::action\b)/,/^(?::parameters\b)/,/^(?::precondition\b)/,/^(?::effect\b)/,/^(?:assert\b)/,/^(?:not\b)/,/^(?:and\b)/,/^(?:\?)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:=>)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],"inclusive":true}}
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
exports.parser = pddl_parser;
exports.Parser = pddl_parser.Parser;
exports.parse = function () { return pddl_parser.parse.apply(pddl_parser, arguments); };
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