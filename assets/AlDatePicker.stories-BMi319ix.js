import{j as r}from"./classMap-B5ymgKpN.js";import{a as D,b as f,o as h,s as j}from"./useAlId-CdDrL2Ee.js";import{A as g}from"./AlDatePicker-_e5VCo5m.js";import{A as S}from"./AlButton-CMZaoz1i.js";import"./iframe-Cxw9YNYo.js";import"./preload-helper-C1FmrZbK.js";import"./useAlFormField-IVt8ghHa.js";import"./useAlLoading-VgDD9DiF.js";import"./AlLabel-BhMnF2Uo.js";import"./AlErrorMessage-z12apK-E.js";import"./AlSpinner-Cuh4XRh7.js";const y=h({birthdate:j({error:"Data é obrigatória"}).min(1,"Data é obrigatória")}),_={title:"Molecules/AlDatePicker",component:g,tags:["autodocs"]};function s(e){const n=D({resolver:f(y),mode:"onBlur"});return r.jsxs("form",{onSubmit:n.handleSubmit(()=>{}),style:{maxWidth:"320px"},children:[r.jsx(g,{name:"birthdate",form:n,label:e.label??"Data de Nascimento",min:e.min,max:e.max,loading:e.loading,disabled:e.disabled,required:e.required}),r.jsx("div",{style:{marginTop:"12px"},children:r.jsx(S,{type:"submit",children:"Enviar"})})]})}const a={render:e=>r.jsx(s,{...e}),args:{label:"Data de Nascimento"}},t={render:e=>r.jsx(s,{...e}),args:{label:"Data do Evento",min:"2024-01-01",max:"2025-12-31"}},o={render:e=>r.jsx(s,{...e}),args:{label:"Data de Nascimento",required:!0}};var i,m,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,x,b;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => <DateStory {...args} />,
  args: {
    label: 'Data de Nascimento',
    required: true
  }
}`,...(b=(x=o.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const F=["Default","WithMinMax","Required"];export{a as Default,o as Required,t as WithMinMax,F as __namedExportsOrder,_ as default};
