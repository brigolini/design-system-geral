import{j as r}from"./classMap-Dboa4o7R.js";import{A as n}from"./AlButton-DX9pBMHw.js";import"./useAlLoading-VgDD9DiF.js";import"./AlSpinner-Blt2rkXc.js";const O={title:"Atoms/AlButton",component:n,tags:["autodocs"],argTypes:{intent:{control:"select",options:["primary","secondary","danger","warning"]},loading:{control:"boolean"},disabled:{control:"boolean"},type:{control:"select",options:["button","submit","reset"]}}},e={args:{children:"Enviar",intent:"primary"}},a={args:{children:"Cancelar",intent:"secondary"}},t={args:{children:"Excluir",intent:"danger"}},s={args:{children:"Prossiga com cautela",intent:"warning"}},o={args:{children:"Salvando...",intent:"primary",loading:!0}},i={args:{children:"Desabilitado",intent:"primary",disabled:!0}},c={render:()=>r.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[r.jsx(n,{intent:"primary",children:"Primary"}),r.jsx(n,{intent:"secondary",children:"Secondary"}),r.jsx(n,{intent:"danger",children:"Danger"}),r.jsx(n,{intent:"warning",children:"Warning"})]})};var d,l,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Enviar',
    intent: 'primary'
  }
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,g,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(b=(S=s.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var B,D,f;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Salvando...',
    intent: 'primary',
    loading: true
  }
}`,...(f=(D=o.parameters)==null?void 0:D.docs)==null?void 0:f.source}}};var j,v,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Desabilitado',
    intent: 'primary',
    disabled: true
  }
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var E,P,W;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
      <AlButton intent="primary">Primary</AlButton>
      <AlButton intent="secondary">Secondary</AlButton>
      <AlButton intent="danger">Danger</AlButton>
      <AlButton intent="warning">Warning</AlButton>
    </div>
}`,...(W=(P=c.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};const R=["Primary","Secondary","Danger","Warning","Loading","Disabled","AllIntents"];export{c as AllIntents,t as Danger,i as Disabled,o as Loading,e as Primary,a as Secondary,s as Warning,R as __namedExportsOrder,O as default};
