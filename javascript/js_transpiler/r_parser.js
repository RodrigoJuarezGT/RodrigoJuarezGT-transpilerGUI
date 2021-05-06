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
var r_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[1,6],$V2=[1,10],$V3=[1,7],$V4=[1,8],$V5=[1,13],$V6=[1,14],$V7=[1,15],$V8=[5,48],$V9=[5,9,14,15,18,20,47,48,50,51],$Va=[2,43],$Vb=[1,26],$Vc=[1,25],$Vd=[1,39],$Ve=[1,43],$Vf=[1,32],$Vg=[1,35],$Vh=[1,38],$Vi=[5,9,10,12,14,15,18,20,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,44,45,47,48,50,51,56],$Vj=[2,44],$Vk=[12,48],$Vl=[1,58],$Vm=[1,59],$Vn=[1,60],$Vo=[1,61],$Vp=[1,62],$Vq=[1,63],$Vr=[1,64],$Vs=[1,65],$Vt=[1,66],$Vu=[1,67],$Vv=[1,68],$Vw=[1,69],$Vx=[1,70],$Vy=[1,71],$Vz=[1,72],$VA=[48,56],$VB=[5,9,12,14,15,18,20,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,45,47,48,50,51,56],$VC=[1,74],$VD=[5,9,12,14,15,18,20,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,45,47,48,50,51,56],$VE=[2,54],$VF=[1,107],$VG=[1,110],$VH=[5,9,12,14,15,18,20,25,26,27,28,29,30,31,32,45,47,48,50,51,56],$VI=[5,9,12,14,15,18,20,25,26,27,28,29,30,31,32,33,34,35,45,47,48,50,51,56],$VJ=[5,9,12,14,15,18,20,25,26,27,28,29,30,31,32,33,34,35,36,37,38,45,47,48,50,51,56],$VK=[1,119];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statement":6,"statements":7,"statement_with_semicolon":8,"while":9,"(":10,"e":11,")":12,"bracket_statements":13,"for":14,"IDENTIFIER":15,"in":16,"dot_expr":17,"if":18,"elif":19,"return":20,"access_array":21,"<-":22,".":23,"function_call":24,"||":25,"&&":26,"<=":27,"<":28,">=":29,"==":30,"~=":31,">":32,"+":33,"-":34,"..":35,"*":36,"/":37,"%":38,"^":39,"not_expr":40,"!":41,"parentheses_expr":42,"parentheses_expr_":43,"[":44,"]":45,"exprs":46,"{":47,"}":48,"key_values":49,"NUMBER":50,"STRING_LITERAL":51,"function":52,"parameters":53,"type":54,"parameter":55,",":56,"types":57,"else":58,"identifiers":59,"key_value":60,"=":61,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"while",10:"(",12:")",14:"for",15:"IDENTIFIER",16:"in",18:"if",20:"return",22:"<-",23:".",25:"||",26:"&&",27:"<=",28:"<",29:">=",30:"==",31:"~=",32:">",33:"+",34:"-",35:"..",36:"*",37:"/",38:"%",39:"^",41:"!",44:"[",45:"]",47:"{",48:"}",50:"NUMBER",51:"STRING_LITERAL",52:"function",56:",",58:"else",61:"="},
productions_: [0,[3,2],[4,2],[4,1],[7,1],[6,1],[6,5],[6,7],[6,6],[6,5],[8,4],[8,3],[8,3],[8,3],[8,1],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,2],[11,1],[40,2],[40,1],[17,3],[17,1],[21,4],[24,3],[24,4],[43,2],[43,3],[43,3],[43,1],[43,1],[43,1],[42,7],[42,3],[42,1],[42,1],[42,1],[54,1],[55,1],[53,3],[53,1],[53,0],[46,3],[46,1],[57,3],[57,1],[19,7],[19,2],[59,3],[59,1],[49,3],[49,1],[60,3],[13,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]];
break;
case 2:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 35: case 53:
this.$ =
 [$$[$0]];
break;
case 4:
this.$ = ["statements",$$[$0]]
break;
case 5:
this.$ = ["semicolon",$$[$0]];
break;
case 6:
this.$ = ["while",$$[$0-2],$$[$0]];
break;
case 7:
this.$ = ["foreach","Object",$$[$0-4],$$[$0-2],$$[$0]];
break;
case 8:
this.$ = ["if",$$[$0-3],$$[$0-1],$$[$0]];
break;
case 9:
this.$ = ["if",$$[$0-2],$$[$0]];
break;
case 10:
this.$ = ["return",$$[$0-1]];
break;
case 11: case 12:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 13:
this.$ = [".",[$$[$0-2]].concat($$[$0])]
break;
case 15:
this.$ = ['||',$$[$0-2],$$[$0]];
break;
case 16:
this.$ = ['&&',$$[$0-2],$$[$0]];
break;
case 17: case 18: case 19: case 20: case 22: case 23: case 24: case 25: case 26: case 27: case 28: case 29:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 21:
this.$ = ["!=",$$[$0-2],$$[$0]];
break;
case 30:
this.$ = ["-",$$[$0]];
break;
case 32:
this.$ = ["!", [".",$$[$0]]];
break;
case 33:
this.$ = [".", $$[$0]];
break;
case 34: case 52: case 55: case 57: case 61:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 36:
this.$ = ["access_array",$$[$0-3],[$$[$0-1]]];
break;
case 37:
this.$ = ["function_call",$$[$0-2],[]];
break;
case 38:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 39:
this.$ = ["initializer_list","Object",[]];
break;
case 40:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 41:
this.$ = ["associative_array","Object","Object",$$[$0-1]];
break;
case 42: case 43: case 44:
this.$ = yytext;
break;
case 45:
this.$ = ["anonymous_function","Object",$$[$0-4],$$[$0-1]];
break;
case 46:
this.$ = ["parentheses",$$[$0-1]];
break;
case 51:
this.$ = ["Object", $$[$0]];
break;
case 54:
this.$ = [];
break;
case 56: case 58: case 62: case 64:
this.$ = [$$[$0]];
break;
case 59:
this.$ = ["elif",$$[$0-3],$$[$0-1],$$[$0]]
break;
case 60:
this.$ = ["else",$$[$0]];
break;
case 63:
this.$ = $$[$0-2].concat([$$[$0]]);
break;
case 65:
this.$ = [$$[$0-2],$$[$0]]
break;
case 66:
this.$= $$[$0-1];
break;
}
},
table: [{3:1,4:2,6:3,8:4,9:$V0,14:$V1,15:$V2,18:$V3,20:$V4,21:9,24:11,43:12,47:$V5,50:$V6,51:$V7},{1:[3]},{5:[1,16]},o($V8,[2,3],{6:3,8:4,21:9,24:11,43:12,4:17,9:$V0,14:$V1,15:$V2,18:$V3,20:$V4,47:$V5,50:$V6,51:$V7}),o($V9,[2,5]),{10:[1,18]},{10:[1,19]},{10:[1,20]},{10:[1,21]},{22:[1,22]},o([10,44],$Va,{22:[1,23],23:[1,24]}),o($V9,[2,14]),{10:$Vb,44:$Vc},{10:$Vd,11:30,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,46:28,47:$V5,48:[1,27],49:29,50:$V6,51:[1,34],52:$Vh,60:31},o($Vi,[2,42]),o($Vi,$Vj),{1:[2,1]},o($V8,[2,2]),{10:$Vd,11:44,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},{15:[1,45]},{10:$Vd,11:46,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},{10:$Vd,11:47,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},{10:$Vd,11:48,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},{10:$Vd,11:49,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},{10:$Vd,15:$Ve,17:50,21:40,24:41,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},{10:$Vd,11:51,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},{10:$Vd,11:30,12:[1,52],15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,46:53,47:$V5,50:$V6,51:$V7,52:$Vh},o($Vi,[2,39]),{48:[1,54]},{48:[1,55],56:[1,56]},o($Vk,[2,56],{25:$Vl,26:$Vm,27:$Vn,28:$Vo,29:$Vp,30:$Vq,31:$Vr,32:$Vs,33:$Vt,34:$Vu,35:$Vv,36:$Vw,37:$Vx,38:$Vy,39:$Vz,56:[1,57]}),o($VA,[2,64]),{10:$Vd,11:73,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},o($VB,[2,31]),o([10,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,44,48,56],$Vj,{61:$VC}),{10:$Vd,15:$Ve,17:75,21:40,24:41,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},o($VB,[2,33]),o($VB,[2,35],{23:[1,76]}),{10:[1,77]},{10:$Vd,11:78,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},o($VD,[2,47]),o($VD,[2,48]),o($VD,[2,49],{10:$Vb,44:$Vc}),o($Vi,$Va),{12:[1,79],25:$Vl,26:$Vm,27:$Vn,28:$Vo,29:$Vp,30:$Vq,31:$Vr,32:$Vs,33:$Vt,34:$Vu,35:$Vv,36:$Vw,37:$Vx,38:$Vy,39:$Vz},{16:[1,80]},{12:[1,81],25:$Vl,26:$Vm,27:$Vn,28:$Vo,29:$Vp,30:$Vq,31:$Vr,32:$Vs,33:$Vt,34:$Vu,35:$Vv,36:$Vw,37:$Vx,38:$Vy,39:$Vz},{12:[1,82],25:$Vl,26:$Vm,27:$Vn,28:$Vo,29:$Vp,30:$Vq,31:$Vr,32:$Vs,33:$Vt,34:$Vu,35:$Vv,36:$Vw,37:$Vx,38:$Vy,39:$Vz},o($V9,[2,11],{25:$Vl,26:$Vm,27:$Vn,28:$Vo,29:$Vp,30:$Vq,31:$Vr,32:$Vs,33:$Vt,34:$Vu,35:$Vv,36:$Vw,37:$Vx,38:$Vy,39:$Vz}),o($V9,[2,12],{25:$Vl,26:$Vm,27:$Vn,28:$Vo,29:$Vp,30:$Vq,31:$Vr,32:$Vs,33:$Vt,34:$Vu,35:$Vv,36:$Vw,37:$Vx,38:$Vy,39:$Vz}),o($V9,[2,13]),{25:$Vl,26:$Vm,27:$Vn,28:$Vo,29:$Vp,30:$Vq,31:$Vr,32:$Vs,33:$Vt,34:$Vu,35:$Vv,36:$Vw,37:$Vx,38:$Vy,39:$Vz,45:[1,83]},o($VD,[2,37]),{12:[1,84]},o($Vi,[2,40]),o($Vi,[2,41]),{51:[1,86],60:85},{10:$Vd,11:30,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,46:87,47:$V5,50:$V6,51:$V7,52:$Vh},{10:$Vd,11:88,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},{10:$Vd,11:89,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},{10:$Vd,11:90,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},{10:$Vd,11:91,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},{10:$Vd,11:92,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},{10:$Vd,11:93,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},{10:$Vd,11:94,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},{10:$Vd,11:95,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},{10:$Vd,11:96,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},{10:$Vd,11:97,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},{10:$Vd,11:98,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},{10:$Vd,11:99,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},{10:$Vd,11:100,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},{10:$Vd,11:101,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},{10:$Vd,11:102,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},o($VB,[2,30]),{10:$Vd,11:103,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},o($VB,[2,32]),{10:$Vd,15:$Ve,17:104,21:40,24:41,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},{12:$VE,15:$VF,53:105,55:106},{12:[1,108],25:$Vl,26:$Vm,27:$Vn,28:$Vo,29:$Vp,30:$Vq,31:$Vr,32:$Vs,33:$Vt,34:$Vu,35:$Vv,36:$Vw,37:$Vx,38:$Vy,39:$Vz},{13:109,47:$VG},{10:$Vd,15:$Ve,17:111,21:40,24:41,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},{13:112,47:$VG},o($V9,[2,10]),o([5,9,12,14,15,18,20,22,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,45,47,48,50,51,56],[2,36]),o($VD,[2,38]),o($VA,[2,63]),{61:$VC},o($Vk,[2,55]),o([5,9,12,14,15,18,20,25,45,47,48,50,51,56],[2,15],{26:$Vm,27:$Vn,28:$Vo,29:$Vp,30:$Vq,31:$Vr,32:$Vs,33:$Vt,34:$Vu,35:$Vv,36:$Vw,37:$Vx,38:$Vy,39:$Vz}),o([5,9,12,14,15,18,20,25,26,45,47,48,50,51,56],[2,16],{27:$Vn,28:$Vo,29:$Vp,30:$Vq,31:$Vr,32:$Vs,33:$Vt,34:$Vu,35:$Vv,36:$Vw,37:$Vx,38:$Vy,39:$Vz}),o($VH,[2,17],{33:$Vt,34:$Vu,35:$Vv,36:$Vw,37:$Vx,38:$Vy,39:$Vz}),o($VH,[2,18],{33:$Vt,34:$Vu,35:$Vv,36:$Vw,37:$Vx,38:$Vy,39:$Vz}),o($VH,[2,19],{33:$Vt,34:$Vu,35:$Vv,36:$Vw,37:$Vx,38:$Vy,39:$Vz}),o($VH,[2,20],{33:$Vt,34:$Vu,35:$Vv,36:$Vw,37:$Vx,38:$Vy,39:$Vz}),o($VH,[2,21],{33:$Vt,34:$Vu,35:$Vv,36:$Vw,37:$Vx,38:$Vy,39:$Vz}),o($VH,[2,22],{33:$Vt,34:$Vu,35:$Vv,36:$Vw,37:$Vx,38:$Vy,39:$Vz}),o($VI,[2,23],{36:$Vw,37:$Vx,38:$Vy,39:$Vz}),o($VI,[2,24],{36:$Vw,37:$Vx,38:$Vy,39:$Vz}),o($VI,[2,25],{36:$Vw,37:$Vx,38:$Vy,39:$Vz}),o($VJ,[2,26],{39:$Vz}),o($VJ,[2,27],{39:$Vz}),o($VJ,[2,28],{39:$Vz}),o($VB,[2,29]),o($VA,[2,65],{25:$Vl,26:$Vm,27:$Vn,28:$Vo,29:$Vp,30:$Vq,31:$Vr,32:$Vs,33:$Vt,34:$Vu,35:$Vv,36:$Vw,37:$Vx,38:$Vy,39:$Vz}),o($VB,[2,34]),{12:[1,113]},{12:[2,53],56:[1,114]},o([12,56],[2,51]),o($VD,[2,46]),o($V9,[2,6]),{4:116,6:3,7:115,8:4,9:$V0,14:$V1,15:$V2,18:$V3,20:$V4,21:9,24:11,43:12,47:$V5,50:$V6,51:$V7},{12:[1,117]},o($V9,[2,9],{19:118,58:$VK}),{47:[1,120]},{12:$VE,15:$VF,53:121,55:106},{48:[1,122]},{48:[2,4]},{13:123,47:$VG},o($V9,[2,8]),{13:125,18:[1,124],47:$VG},{4:116,6:3,7:126,8:4,9:$V0,14:$V1,15:$V2,18:$V3,20:$V4,21:9,24:11,43:12,47:$V5,50:$V6,51:$V7},{12:[2,52]},o([5,9,14,15,18,20,47,48,50,51,58],[2,66]),o($V9,[2,7]),{10:[1,127]},o($V9,[2,60]),{48:[1,128]},{10:$Vd,11:129,15:$Ve,17:36,21:40,24:41,34:$Vf,40:33,41:$Vg,42:37,43:42,47:$V5,50:$V6,51:$V7,52:$Vh},o($VD,[2,45]),{12:[1,130],25:$Vl,26:$Vm,27:$Vn,28:$Vo,29:$Vp,30:$Vq,31:$Vr,32:$Vs,33:$Vt,34:$Vu,35:$Vv,36:$Vw,37:$Vx,38:$Vy,39:$Vz},{13:131,47:$VG},{19:132,58:$VK},o($V9,[2,59])],
defaultActions: {16:[2,1],116:[2,4],121:[2,52]},
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
case 0:/* skip whitespace and line comments */
break;
case 1:return 50
break;
case 2:return 51
break;
case 3:return "$"
break;
case 4:return "function"
break;
case 5:return "end"
break;
case 6:return "then"
break;
case 7:return 'elseif'
break;
case 8:return 18
break;
case 9:return 58
break;
case 10:return 20
break;
case 11:return 9
break;
case 12:return 14
break;
case 13:return 'local'
break;
case 14:return 'repeat'
break;
case 15:return 'until'
break;
case 16:return 'of'
break;
case 17:return 'not'
break;
case 18:return 56
break;
case 19:return 35
break;
case 20:return 23
break;
case 21:return ':'
break;
case 22:return 26
break;
case 23:return 25
break;
case 24:return 29
break;
case 25:return 32
break;
case 26:return 27
break;
case 27:return 22
break;
case 28:return 28
break;
case 29:return 31
break;
case 30:return 30
break;
case 31:return '*='
break;
case 32:return 36
break;
case 33:return 37
break;
case 34:return 38
break;
case 35:return 34
break;
case 36:return 33
break;
case 37:return 39
break;
case 38:return 47
break;
case 39:return 48
break;
case 40:return 44
break;
case 41:return 45
break;
case 42:return 10
break;
case 43:return 12
break;
case 44:return '_'
break;
case 45:return 'pairs'
break;
case 46:return 16
break;
case 47:return 'do'
break;
case 48:return 15
break;
case 49:return 5
break;
case 50:return 'INVALID'
break;
}
},
rules: [/^(?:(\s+|--+.*\n))/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:\$)/,/^(?:function\b)/,/^(?:end\b)/,/^(?:then\b)/,/^(?:elseif\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:return\b)/,/^(?:while\b)/,/^(?:for\b)/,/^(?:local\b)/,/^(?:repeat\b)/,/^(?:until\b)/,/^(?:of\b)/,/^(?:not\b)/,/^(?:,)/,/^(?:\.\.)/,/^(?:\.)/,/^(?::)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<-)/,/^(?:<)/,/^(?:~=)/,/^(?:==)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/)/,/^(?:%)/,/^(?:-)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:_\b)/,/^(?:pairs\b)/,/^(?:in\b)/,/^(?:do\b)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"inclusive":true}}
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
exports.parser = r_parser;
exports.Parser = r_parser.Parser;
exports.parse = function () { return r_parser.parse.apply(r_parser, arguments); };
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