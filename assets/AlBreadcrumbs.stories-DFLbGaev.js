import{j as e,f as r,c as S}from"./classMap-Dboa4o7R.js";function h({items:o,separator:b="/",className:v,"data-testid":C}){return e.jsx("nav",{"aria-label":"Breadcrumb",className:S(r.nav,v),"data-testid":C,children:e.jsx("ol",{className:r.list,children:o.map((a,c)=>{const i=c===o.length-1;return e.jsxs("li",{className:r.item,children:[!i&&a.link?e.jsx("a",{href:a.link,className:r.link,children:a.text}):e.jsx("span",{className:r.current,"aria-current":i?"page":void 0,children:a.text}),!i&&e.jsx("span",{className:r.separator,"aria-hidden":"true",children:b})]},c)})})})}h.__docgenInfo={description:"",methods:[],displayName:"AlBreadcrumbs",props:{className:{required:!1,tsType:{name:"string"},description:"Classes CSS adicionais"},"data-testid":{required:!1,tsType:{name:"string"},description:"ID de teste para testes automatizados"},items:{required:!0,tsType:{name:"Array",elements:[{name:"AlBreadcrumbItem"}],raw:"AlBreadcrumbItem[]"},description:"Array de itens de breadcrumb"},separator:{required:!1,tsType:{name:"string"},description:"Caractere separador (default: '/')",defaultValue:{value:"'/'",computed:!1}}}};const I={title:"Molecules/AlBreadcrumbs",component:h,tags:["autodocs"]},s={args:{items:[{text:"Início",link:"/"},{text:"Servidores",link:"/servidores"},{text:"Carreira",link:"/servidores/carreira"},{text:"Pontuação na Carreira"}]}},t={args:{items:[{text:"Painel",link:"/dashboard"},{text:"Configurações"}]}},n={args:{items:[{text:"Início",link:"/"},{text:"Usuários",link:"/users"},{text:"John Doe"}],separator:"›"}};var d,l,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: [{
      "text": "Início",
      "link": "/"
    }, {
      "text": "Servidores",
      "link": "/servidores"
    }, {
      "text": "Carreira",
      "link": "/servidores/carreira"
    }, {
      "text": "Pontuação na Carreira"
    }]
  }
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,p,x;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Painel',
      link: '/dashboard'
    }, {
      text: 'Configurações'
    }]
  }
}`,...(x=(p=t.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var g,f,k;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Início',
      link: '/'
    }, {
      text: 'Usuários',
      link: '/users'
    }, {
      text: 'John Doe'
    }],
    separator: '›'
  }
}`,...(k=(f=n.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const N=["Default","TwoLevels","CustomSeparator"];export{n as CustomSeparator,s as Default,t as TwoLevels,N as __namedExportsOrder,I as default};
