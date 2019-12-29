(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{lWec:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return d}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk"),t("mXGw");var o=t("/FXl"),a=t("TjRS"),r=t("7JDl");t("aD51");function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/cond/And.mdx"}});var l={_frontmatter:i},s=a.a;function d(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(o.b)(s,c({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)(r.a,{mdxType:"CondType"},"And(left: IntoCondition, right: IntoCondition)"),Object(o.b)("p",null,"Matches when both conditions match, yielding the second condition's result. If the\nfirst condition doesn't match, then the second condition isn't executed."),Object(o.b)("p",null,"Both conditions receive the same input value."),Object(o.b)("p",null,"Note: the conditions can result in falsy values and still be considered a match,\nunlike the ",Object(o.b)("inlineCode",{parentName:"p"},"&&")," operator in JS."),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-js"}),"import match from 'pattahn';\nimport And from 'pattahn/cond/And';\nimport Always from 'pattahn/cond/Always';\n")),Object(o.b)("pre",null,Object(o.b)("code",c({parentName:"pre"},{className:"language-js"}),"const VALUE = 1;\n\nconst result = match()\n  .with(And(Always(1), Always(2)), (x) => x)\n  .exec(VALUE);\n\nexpect(result).toBe(2);\n")))}d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/cond/And.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-cond-and-mdx-49959eff2917e797bc1f.js.map