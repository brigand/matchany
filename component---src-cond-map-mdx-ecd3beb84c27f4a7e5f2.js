(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"PA/f":function(n,e,t){"use strict";t.r(e),t.d(e,"_frontmatter",(function(){return c})),t.d(e,"default",(function(){return u}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk"),t("mXGw");var a=t("/FXl"),r=t("TjRS");t("aD51");function o(){return(o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/cond/Map.mdx"}});var i={_frontmatter:c},m=r.a;function u(n){var e=n.components,t=function(n,e){if(null==n)return{};var t,a,r={},o=Object.keys(n);for(a=0;a<o.length;a++)t=o[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,["components"]);return Object(a.b)(m,o({},i,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"map-condition"},"Map (condition)"),Object(a.b)("p",null,"Transform a value with a function, optionally producing new values in the from of a\n",Object(a.b)("inlineCode",{parentName:"p"},"Match")," instance."),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-js"}),"import match from 'matchany';\nimport { Match } from 'matchany/core';\nimport Map from 'matchany/cond/Map';\n\nconst VALUE = { x: 7 };\n\n// Take .x, double it, return that.\nconst xNumber = Map((value) =>\n  typeof value.x === 'number' ? new Match(value.x * 2) : null,\n);\n\nconst result = match()\n  .with(xNumber, (num) => `match: ${num}`)\n  .exec(VALUE);\n\nexpect(result).toBe('match: 14');\n")))}u&&u===Object(u)&&Object.isExtensible(u)&&!u.hasOwnProperty("__filemeta")&&Object.defineProperty(u,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/cond/Map.mdx"}}),u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-cond-map-mdx-ecd3beb84c27f4a7e5f2.js.map