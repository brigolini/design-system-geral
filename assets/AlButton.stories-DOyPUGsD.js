import{j as r}from"./classMap-BDJzPWxE.js";import{A as n}from"./AlButton-BGp8e2lM.js";import"./useAlmgLoading-VgDD9DiF.js";import"./AlSpinner-DNt1W254.js";const O={title:"Primitives/AlmgButton",component:n,tags:["autodocs"],argTypes:{intent:{control:"select",options:["primary","secondary","danger","warning"]},loading:{control:"boolean"},disabled:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},e={args:{children:"Enviar",intent:"primary"}},a={args:{children:"Cancelar",intent:"secondary"}},t={args:{children:"Excluir",intent:"danger"}},s={args:{children:"Prossiga com cautela",intent:"warning"}},o={args:{children:"Salvando...",intent:"primary",loading:!0}},i={args:{children:"Desabilitado",intent:"primary",disabled:!0}},c={render:()=>r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(n,{intent:"primary",children:"Primary"}),r.jsx(n,{intent:"secondary",children:"Secondary"}),r.jsx(n,{intent:"danger",children:"Danger"}),r.jsx(n,{intent:"warning",children:"Warning"})]})};var d,l,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Enviar',
    intent: 'primary'
  }
}`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,g,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Cancelar',
    intent: 'secondary'
  }
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,h,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Excluir',
    intent: 'danger'
  }
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var A,S,b;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Prossiga com cautela',
    intent: 'warning'
  }
}`,...(b=(S=s.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var B,v,D;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Salvando...',
    intent: 'primary',
    loading: true
  }
}`,...(D=(v=o.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var f,j,w;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Desabilitado',
    intent: 'primary',
    disabled: true
  }
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var P,E,W;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
      <AlmgButton intent="primary">Primary</AlmgButton>
      <AlmgButton intent="secondary">Secondary</AlmgButton>
      <AlmgButton intent="danger">Danger</AlmgButton>
      <AlmgButton intent="warning">Warning</AlmgButton>
    </div>
}`,...(W=(E=c.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};const R=["Primary","Secondary","Danger","Warning","Loading","Disabled","AllIntents"];export{c as AllIntents,t as Danger,i as Disabled,o as Loading,e as Primary,a as Secondary,s as Warning,R as __namedExportsOrder,O as default};
