import{j as a,q as t,c as p}from"./classMap-B5ymgKpN.js";import{r as m}from"./iframe-Cxw9YNYo.js";import"./preload-helper-C1FmrZbK.js";function O({items:b,allowMultiple:d=!1,direction:S="vertical",defaultOpen:q=[],className:C,"data-testid":T}){const[M,N]=m.useState(new Set(q)),D=m.useCallback(e=>{N(r=>{const s=new Set(r);return s.has(e)?s.delete(e):(d||s.clear(),s.add(e)),s})},[d]);return a.jsx("div",{className:p(t.accordion,S==="horizontal"&&t.accordionHorizontal,C),"data-testid":T,children:b.map(e=>{const r=M.has(e.id);return a.jsxs("div",{className:p(t.item,r&&t.itemOpen),children:[a.jsxs("button",{type:"button",className:t.trigger,"aria-expanded":r,"aria-controls":`almg-accordion-content-${e.id}`,id:`almg-accordion-trigger-${e.id}`,onClick:()=>D(e.id),children:[e.title,a.jsx("svg",{className:t.icon,viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:a.jsx("path",{fillRule:"evenodd",d:"M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",clipRule:"evenodd"})})]}),r&&a.jsx("div",{className:t.content,id:`almg-accordion-content-${e.id}`,role:"region","aria-labelledby":`almg-accordion-trigger-${e.id}`,children:e.content})]},e.id)})})}O.__docgenInfo={description:"",methods:[],displayName:"AlAccordion",props:{className:{required:!1,tsType:{name:"string"},description:"Classes CSS adicionais"},"data-testid":{required:!1,tsType:{name:"string"},description:"ID de teste para testes automatizados"},items:{required:!0,tsType:{name:"Array",elements:[{name:"AlAccordionItem"}],raw:"AlAccordionItem[]"},description:""},allowMultiple:{required:!1,tsType:{name:"boolean"},description:"Permitir múltiplos itens abertos simultaneamente",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"Direção do layout",defaultValue:{value:"'vertical'",computed:!1}},defaultOpen:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"IDs dos itens inicialmente abertos",defaultValue:{value:"[]",computed:!1}}}};const $={title:"Organisms/AlAccordion",component:O,tags:["autodocs"],argTypes:{direction:{control:"select",options:["vertical","horizontal"]},allowMultiple:{control:"boolean"}}},c=[{id:"1",title:"O que é Al UI?",content:a.jsxs(a.Fragment,{children:[a.jsx("p",{children:"Al UI é um design system para desenvolvedores web da ALMG."}),a.jsx("p",{children:"Ele é criado para você pelo comitê de tecnologia da GTI"})]})},{id:"2",title:"Como instalar?",content:a.jsx("p",{children:"Instale via npm: npm install @almg/al-ui"})},{id:"3",title:"É acessível?",content:a.jsx("p",{children:"Sim, todos os componentes atendem aos padrões WCAG AA."})}],o={args:{items:c,direction:"vertical"}},n={args:{items:c,direction:"horizontal"}},i={args:{items:c,allowMultiple:!0}},l={args:{items:c,defaultOpen:["1"]}};var u,g,f;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items,
    direction: 'vertical'
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,h,A;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items,
    direction: 'horizontal'
  }
}`,...(A=(h=n.parameters)==null?void 0:h.docs)==null?void 0:A.source}}};var x,y,j;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items,
    allowMultiple: true
  }
}`,...(j=(y=i.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var w,z,I;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items,
    defaultOpen: ['1']
  }
}`,...(I=(z=l.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};const G=["Vertical","Horizontal","AllowMultiple","DefaultOpen"];export{i as AllowMultiple,l as DefaultOpen,n as Horizontal,o as Vertical,G as __namedExportsOrder,$ as default};
