(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{153:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",function(){return p});var r=n(7),a=n.n(r),o=n(0),u=n.n(o),i=n(159),c=n(160),f=n(182),l=n.n(f),s=n(155),d=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t=this.props.data,e=t.allMarkdownRemark.group,n=t.site.siteMetadata.title;return u.a.createElement(i.a,{location:this.props.location,title:n},u.a.createElement(c.a,{title:"Tags"}),u.a.createElement("h1",null,"List of all tags"),u.a.createElement("ul",null,e.map(function(t){return u.a.createElement("li",{key:t.fieldValue},u.a.createElement(s.a,{to:"/tag/"+l()(t.fieldValue)+"/"},t.fieldValue," (",t.totalCount,")"))})))},e}(u.a.Component);e.default=d;var p="3450235017"},155:function(t,e,n){"use strict";n.d(e,"b",function(){return l});var r=n(0),a=n.n(r),o=n(4),u=n.n(o),i=n(33),c=n.n(i);n.d(e,"a",function(){return c.a});n(156);var f=a.a.createContext({}),l=function(t){return a.a.createElement(f.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};l.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},156:function(t,e,n){var r;t.exports=(r=n(158))&&r.default||r},157:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return f});var r=n(162),a=n.n(r),o=n(163),u=n.n(o);u.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete u.a.googleFonts;var i=new a.a(u.a);var c=i.rhythm,f=i.scale},158:function(t,e,n){"use strict";n.r(e);n(34);var r=n(0),a=n.n(r),o=n(4),u=n.n(o),i=n(55),c=n(2),f=function(t){var e=t.location,n=c.default.getResourcesForPathnameSync(e.pathname);return n?a.a.createElement(i.a,Object.assign({location:e,pageResources:n},n.json)):null};f.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},e.default=f},159:function(t,e,n){"use strict";n(34);var r=n(7),a=n.n(r),o=n(0),u=n.n(o),i=n(155),c=n(157),f=function(t){function e(){return t.apply(this,arguments)||this}return a()(e,t),e.prototype.render=function(){var t,e=this.props,n=e.location,r=e.title,a=e.children;return t="/"===n.pathname?u.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},u.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):u.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},u.a.createElement(i.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),u.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},u.a.createElement("header",null,t),u.a.createElement("main",null,a),u.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",u.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},e}(u.a.Component);e.a=f},160:function(t,e,n){"use strict";var r=n(161),a=n(0),o=n.n(a),u=n(4),i=n.n(u),c=n(164),f=n.n(c);function l(t){var e=t.description,n=t.lang,a=t.meta,u=t.keywords,i=t.title,c=r.data.site,l=e||c.siteMetadata.description;return o.a.createElement(f.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:l}].concat(u.length>0?{name:"keywords",content:u.join(", ")}:[]).concat(a)})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},e.a=l},161:function(t){t.exports={data:{site:{siteMetadata:{title:"J. Pedro Ribeiro",description:"Hello! My name is J. Pedro Ribeiro. I’m a Brazilian front-end developer living in London. This website features some of my latest projects and my thoughts on anything web related.",author:"J. Pedro Ribeiro"}}}}},170:function(t,e,n){var r=n(189).Symbol;t.exports=r},172:function(t,e,n){var r=n(188);t.exports=function(t){return null==t?"":r(t)}},182:function(t,e,n){var r=n(183)(function(t,e,n){return t+(n?"-":"")+e.toLowerCase()});t.exports=r},183:function(t,e,n){var r=n(184),a=n(185),o=n(198),u=RegExp("['’]","g");t.exports=function(t){return function(e){return r(o(a(e).replace(u,"")),t,"")}}},184:function(t,e){t.exports=function(t,e,n,r){var a=-1,o=null==t?0:t.length;for(r&&o&&(n=t[++a]);++a<o;)n=e(n,t[a],a,t);return n}},185:function(t,e,n){var r=n(186),a=n(172),o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,u=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=a(t))&&t.replace(o,r).replace(u,"")}},186:function(t,e,n){var r=n(187)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=r},187:function(t,e){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},188:function(t,e,n){var r=n(170),a=n(191),o=n(192),u=n(193),i=1/0,c=r?r.prototype:void 0,f=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(o(e))return a(e,t)+"";if(u(e))return f?f.call(e):"";var n=e+"";return"0"==n&&1/e==-i?"-0":n}},189:function(t,e,n){var r=n(190),a="object"==typeof self&&self&&self.Object===Object&&self,o=r||a||Function("return this")();t.exports=o},190:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n(74))},191:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,a=Array(r);++n<r;)a[n]=e(t[n],n,t);return a}},192:function(t,e){var n=Array.isArray;t.exports=n},193:function(t,e,n){var r=n(194),a=n(197),o="[object Symbol]";t.exports=function(t){return"symbol"==typeof t||a(t)&&r(t)==o}},194:function(t,e,n){var r=n(170),a=n(195),o=n(196),u="[object Null]",i="[object Undefined]",c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?i:u:c&&c in Object(t)?a(t):o(t)}},195:function(t,e,n){var r=n(170),a=Object.prototype,o=a.hasOwnProperty,u=a.toString,i=r?r.toStringTag:void 0;t.exports=function(t){var e=o.call(t,i),n=t[i];try{t[i]=void 0;var r=!0}catch(c){}var a=u.call(t);return r&&(e?t[i]=n:delete t[i]),a}},196:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},197:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},198:function(t,e,n){var r=n(199),a=n(200),o=n(172),u=n(201);t.exports=function(t,e,n){return t=o(t),void 0===(e=n?void 0:e)?a(t)?u(t):r(t):t.match(e)||[]}},199:function(t,e){var n=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(n)||[]}},200:function(t,e){var n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return n.test(t)}},201:function(t,e){var n="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+n+"]",a="\\d+",o="[\\u2700-\\u27bf]",u="[a-z\\xdf-\\xf6\\xf8-\\xff]",i="[^\\ud800-\\udfff"+n+a+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",c="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",l="[A-Z\\xc0-\\xd6\\xd8-\\xde]",s="(?:"+u+"|"+i+")",d="(?:"+l+"|"+i+")",p="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",x="[\\ufe0e\\ufe0f]?"+p+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",c,f].join("|")+")[\\ufe0e\\ufe0f]?"+p+")*"),m="(?:"+[o,c,f].join("|")+")"+x,g=RegExp([l+"?"+u+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[r,l,"$"].join("|")+")",d+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[r,l+s,"$"].join("|")+")",l+"?"+s+"+(?:['’](?:d|ll|m|re|s|t|ve))?",l+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,m].join("|"),"g");t.exports=function(t){return t.match(g)||[]}}}]);
//# sourceMappingURL=component---src-pages-tags-js-95ddf6d14080fe3892ad.js.map