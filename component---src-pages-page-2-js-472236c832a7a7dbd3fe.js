(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(146),o=a(153),c=a(151);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Page two"}),r.a.createElement("h1",null,"Hi from the second page"),r.a.createElement("p",null,"Welcome to page 2"),r.a.createElement(i.a,{to:"/"},"Go back to the homepage"))}},146:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(33),l=a.n(c);a.d(t,"a",function(){return l.a});a(147);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},147:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Jon Kaplan"}}}}},149:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(55),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},150:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAArUlEQVQI1wGiAF3/AP/+ACehwUTcjrhax4q3XsCzyS/DpMJB2MTRG99zrHmXqcU7bIS0Za23yyuyf7Fr4QBr/wsAAAAApsM+pIGyaeOZvk3JhrVjwqbDPs6SulXwAHuvcNFlpYmvdKx4t2inhsJ3rnXSaqiD44u3XetdopLAZ6aH0GamiPKEtGblPJO4gWWmiUBWnptZgLJqlGamiOZyq3rKZqaIvm+qfuRpq43/jwJbH5Pqz98AAAAASUVORK5CYII=",aspectRatio:10,src:"/static/8de8fe1a21e764b93666a454e23d91f9/fbe2f/capcomlogo.png",srcSet:"/static/8de8fe1a21e764b93666a454e23d91f9/e1fed/capcomlogo.png 75w,\n/static/8de8fe1a21e764b93666a454e23d91f9/08283/capcomlogo.png 150w,\n/static/8de8fe1a21e764b93666a454e23d91f9/fbe2f/capcomlogo.png 300w,\n/static/8de8fe1a21e764b93666a454e23d91f9/59257/capcomlogo.png 450w,\n/static/8de8fe1a21e764b93666a454e23d91f9/c2e90/capcomlogo.png 480w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},151:function(e,t,a){"use strict";var n=a(152),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(156),s=a.n(l);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,l=n.data.site,d=t||l.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s",meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Jon Kaplan",description:"Personal site for Jon Kaplan",author:"@jonwiththewind"}}}}},153:function(e,t,a){"use strict";var n=a(148),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(146),s=a(150),d=a(154),p=a.n(d),u=function(){return i.a.createElement(l.b,{query:"3137430916",render:function(e){return i.a.createElement(p.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:s})},m=function(e){e.siteTitle;return i.a.createElement("header",{style:{background:"white",borderBottom:"1px solid black",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(l.a,{to:"/",style:{textDecoration:"none"}},i.a.createElement("div",{style:{maxWidth:"300px"}},i.a.createElement(u,null))))))};m.propTypes={siteTitle:c.a.string},m.defaultProps={siteTitle:""};var f=m,g=(a(155),function(e){var t=e.children;return i.a.createElement(l.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t)))},data:n})});g.propTypes={children:c.a.node.isRequired};t.a=g}}]);
//# sourceMappingURL=component---src-pages-page-2-js-472236c832a7a7dbd3fe.js.map