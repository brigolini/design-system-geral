import{j as r}from"./classMap-BDJzPWxE.js";import{b as D,c as f,o as h,s as j}from"./useAlmgId-ygdPxqlL.js";import{A as b}from"./AlDatePicker-B140fhbq.js";import{A as S}from"./AlButton-BGp8e2lM.js";import"./iframe-dZGSMZ0e.js";import"./preload-helper-C1FmrZbK.js";import"./useAlmgFormField-IVt8ghHa.js";import"./useAlmgLoading-VgDD9DiF.js";import"./AlLabel-CrzzRKEc.js";import"./AlErrorMessage-BbU5P_lF.js";import"./AlSpinner-DNt1W254.js";const y=h({birthdate:j({error:"Data é obrigatória"}).min(1,"Data é obrigatória")}),P={title:"Forms/AlmgDatePicker",component:b,tags:["autodocs"]};function s(e){const n=D({resolver:f(y),mode:"onBlur"});return r.jsxs("form",{onSubmit:n.handleSubmit(()=>{}),style:{maxWidth:"320px"},children:[r.jsx(b,{name:"birthdate",form:n,label:e.label??"Data de Nascimento",min:e.min,max:e.max,loading:e.loading,disabled:e.disabled,required:e.required}),r.jsx("div",{style:{marginTop:"12px"},children:r.jsx(S,{type:"submit",children:"Enviar"})})]})}const a={render:e=>r.jsx(s,{...e}),args:{label:"Data de Nascimento"}},t={render:e=>r.jsx(s,{...e}),args:{label:"Data do Evento",min:"2024-01-01",max:"2025-12-31"}},o={render:e=>r.jsx(s,{...e}),args:{label:"Data de Nascimento",required:!0}};var i,m,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <DateStory {...args} />,
  args: {
    label: 'Data de Nascimento'
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,l,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <DateStory {...args} />,
  args: {
    label: 'Data do Evento',
    min: '2024-01-01',
    max: '2025-12-31'
  }
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,g,x;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <DateStory {...args} />,
  args: {
    label: 'Data de Nascimento',
    required: true
  }
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const _=["Default","WithMinMax","Required"];export{a as Default,o as Required,t as WithMinMax,_ as __namedExportsOrder,P as default};
