(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{n1Hi:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return s}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var r=n("/FXl"),o=n("TjRS");n("aD51");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/cond/Prop.mdx"}});var i={_frontmatter:c},p=o.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(r.b)(p,a({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"prop-condition"},"Prop (condition)"),Object(r.b)("p",null,"Prop extracts a property of an object with the specified key; matching if the property\nexists."),Object(r.b)("p",null,"It takes an optional second argument for the expected value, which is a shorthand for\n",Object(r.b)("inlineCode",{parentName:"p"},"Prop('key').andThen(Eq(value))")," with ",Object(r.b)("inlineCode",{parentName:"p"},"Prop('key', value)"),"."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"import match from 'pattahn';\nimport Prop from 'pattahn/cond/Prop';\n\nconst VALUE = { x: 1 };\n\nconst result = match()\n  .with(Prop('x'), (x) => `match: ${x}`)\n  .exec(VALUE);\n\nexpect(result).toBe('match: 1');\n")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-js"}),"const VALUE = { x: 1 };\n\nconst result = match()\n  .with(Prop('x', 0), 'first')\n  .with(Prop('x', 1), 'second')\n  .with(Prop('x', 2), 'third')\n  .exec(VALUE);\n\nexpect(result).toBe('second');\n")))}s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/cond/Prop.mdx"}}),s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-cond-prop-mdx-ee28938563f19fa67660.js.map