(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return c});var n=a(0),r=a.n(n),o=a(155),i=a(159),l=a(160);t.default=function(e){var t=e.pageContext,a=e.data,n=t.tag,c=a.allMarkdownRemark,s=c.edges,u=c.totalCount,d=a.site.siteMetadata.title,m=u+" post"+(1===u?"":"s")+' tagged with "'+n+'"',p="Tag: "+n;return r.a.createElement(i.a,{location:"/tag/"+n+"/",title:d},r.a.createElement(l.a,{title:p}),r.a.createElement("h1",null,m),r.a.createElement("ul",null,s.map(function(e){var t=e.node,a=t.fields.slug,n=t.frontmatter.title;return r.a.createElement("li",{key:a},r.a.createElement(o.a,{to:a},n))})),r.a.createElement(o.a,{to:"/tags/"},"All tags"),r.a.createElement("br",null),r.a.createElement("br",null))};var c="3788968325"},155:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(33),c=a.n(l);a.d(t,"a",function(){return c.a});a(156);var s=r.a.createContext({}),u=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(e,t,a){var n;e.exports=(n=a(158))&&n.default||n},157:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return s});var n=a(162),r=a.n(n),o=a(163),i=a.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var l=new r.a(i.a);var c=l.rhythm,s=l.scale},158:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(55),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},159:function(e,t,a){"use strict";a(34);var n=a(7),r=a.n(n),o=a(0),i=a.n(o),l=a(155),c=a(157),s=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,r=t.children;return e="/"===a.pathname?i.a.createElement("h1",{style:Object.assign({},Object(c.b)(1.5),{marginBottom:Object(c.a)(1.5),marginTop:0})},i.a.createElement(l.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.a.createElement(l.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(c.a)(24),padding:Object(c.a)(1.5)+" "+Object(c.a)(.75)}},i.a.createElement("header",null,e),i.a.createElement("main",null,r),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(i.a.Component);t.a=s},160:function(e,t,a){"use strict";var n=a(161),r=a(0),o=a.n(r),i=a(4),l=a.n(i),c=a(164),s=a.n(c);function u(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title,c=n.data.site,u=t||c.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},161:function(e){e.exports={data:{site:{siteMetadata:{title:"J. Pedro Ribeiro",description:"Hello! My name is J. Pedro Ribeiro. I’m a Brazilian front-end developer living in London. This website features some of my latest projects and my thoughts on anything web related.",author:"J. Pedro Ribeiro"}}}}}}]);
//# sourceMappingURL=component---src-templates-tag-js-cea18694afdb9c0f4c4d.js.map