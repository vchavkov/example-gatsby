(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return p});var r=n(0),a=n.n(r),i=n(144),o=n(277),c=n.n(o),u=n(224),s=n(154),l=n(170),d=n(168),p={id:"4135991094",source:"\n  query Blog($id: ID!) {\n    prime {\n      Blog(id: $id) {\n        _meta {\n          updatedAt\n        }\n        id\n        title\n        body\n      }\n    }\n  }\n",toString:function(){return this.id}};t.default=function(e){var t=Object(s.c)(e,p).prime.Blog;return a.a.createElement(l.a,null,a.a.createElement(d.a,{title:t.title}),a.a.createElement("time",{datetime:t._meta.updatedAt},Object(u.format)(t._meta.updatedAt,"MM/DD/YYYY")),a.a.createElement("h1",null,t.title),a.a.createElement(c.a,{source:t.body}),a.a.createElement(i.Link,{to:"/"},"Go back"))}},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return m});var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(143),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(150),l=n.n(s);n.d(t,"PageRenderer",function(){return l.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var p=a.a.createContext({}),m=function(e){return a.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,n){var r;e.exports=(r=n(159))&&r.default||r},154:function(e,t,n){"use strict";(function(e){n.d(t,"b",function(){return x}),n.d(t,"a",function(){return E}),n.d(t,"c",function(){return k});n(74),n(75);var r=n(200),a=n.n(r),i=(n(178),n(201)),o=n.n(i),c=n(0),u=n.n(c),s=n(202),l=n(274),d=n(214),p=n(171),m=n(183),f=n(147),g=n(212),h=new p.a({uri:new URL(e.___graphqlUniversal.prime.url),fetch:fetch}),y=Object(g.a)(function(){var e=o()(a.a.mark(function e(t,n){return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:return e.t0=e.sent,e.abrupt("return",{headers:e.t0});case 4:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()),w=Object(m.a)(function(e){var t=e.graphQLErrors,n=e.networkError;t&&t.map(function(e){var t=e.message,n=e.locations,r=e.path;console.log("[GraphQL error]: Message: "+t+", Location: "+n+", Path: "+r)}),n&&console.log("[Network error]: "+n)}),v=new l.a({link:f.a.from([w,y,h]),cache:new d.a}),b=function(){var t=o()(a.a.mark(function t(){var n,r,i;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=window.location.search.substr(1).split("&").reduce(function(e,t){var n=t.split("=").map(decodeURIComponent),r=n[0],a=n[1];return e[r]=a,e},{})).hasOwnProperty("prime.id")){t.next=10;break}return(r=new URL(e.___graphqlUniversal.prime.url)).pathname="/prime/preview",r.search="?id="+n["prime.id"],t.next=7,fetch(r,{credentials:"include"}).then(function(e){return e.json()});case 7:i=t.sent,localStorage.setItem("x-prime-token",i.accessToken),localStorage.setItem("x-prime-preview",i.document.id);case 10:if(!localStorage.getItem("x-prime-token")){t.next=12;break}return t.abrupt("return",{"x-prime-token":localStorage.getItem("x-prime-token"),"x-prime-preview":localStorage.getItem("x-prime-preview")});case 12:return t.abrupt("return",null);case 13:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),x=function(){return!!localStorage.getItem("x-prime-token")},E=function(){localStorage.removeItem("x-prime-token"),localStorage.removeItem("x-prime-preview"),window.location.reload()},k=function(e,t){var n=u.a.useState(e.data),r=n[0],a=n[1];return u.a.useEffect(function(){v.query({query:Object(s.getIsolatedQuery)(t,"prime","Prime"),variables:e.pathContext}).then(function(e){var t=e.data;return a({prime:t})})},[]),r}}).call(this,n(73))},159:function(e,t,n){"use strict";n.r(t);n(33);var r=n(0),a=n.n(r),i=n(4),o=n.n(i),c=n(53),u=n(2),s=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return a.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Prime Gatsby Example"}}}}},167:function(e,t,n){},168:function(e,t,n){"use strict";var r=n(169),a=n(0),i=n.n(a),o=n(4),c=n.n(o),u=n(213),s=n.n(u),l=n(144);function d(e){var t=e.description,n=e.lang,a=e.meta,o=e.keywords,c=e.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(e){var r=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:c},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:r}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(a)})},data:r})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var p={id:"1025518380",source:"\n  query DefaultSEOQuery {\n    site {\n      siteMetadata {\n        title\n        description\n        author\n      }\n    }\n  }\n",toString:function(){return this.id}}},169:function(e){e.exports={data:{site:{siteMetadata:{title:"Prime Gatsby Example",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},170:function(e,t,n){"use strict";var r=n(166),a=n(0),i=n.n(a),o=n(4),c=n.n(o),u=n(144),s=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(u.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};s.propTypes={siteTitle:c.a.string},s.defaultProps={siteTitle:""};var l=s,d=(n(167),n(154)),p=function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:{id:"755544856",source:"\n      query SiteTitleQuery {\n        site {\n          siteMetadata {\n            title\n          }\n        }\n      }\n    ",toString:function(){return this.id}},render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," and ",i.a.createElement("a",{href:"https://birkir.github.io/prime"},"Prime")),i.a.createElement("div",{style:{marginTop:16}},Object(d.b)()&&i.a.createElement("button",{onClick:d.a},"Clear Preview"))))},data:r})};p.propTypes={children:c.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-templates-blog-js-580728aed369458bbef6.js.map