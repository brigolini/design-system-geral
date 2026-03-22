import{j as r}from"./classMap-Dboa4o7R.js";import{a as g,b as f,o as h,s as j}from"./useAlId-DYkP7w-_.js";import{A as D}from"./AlDatePicker-CorwYAVE.js";import{A as S}from"./AlButton-DX9pBMHw.js";import"./iframe-gs6n09NW.js";import"./preload-helper-C1FmrZbK.js";import"./useAlFormField-IVt8ghHa.js";import"./useAlLoading-VgDD9DiF.js";import"./AlLabel-CNZo6lZf.js";import"./AlErrorMessage-CJ5Su_eB.js";import"./AlSpinner-Blt2rkXc.js";const q=h({birthdate:j().min(1,"Date is required")}),_={title:"Molecules/AlDatePicker",component:D,tags:["autodocs"]};function o(e){const n=g({resolver:f(q),mode:"onBlur"});return r.jsxs("form",{onSubmit:n.handleSubmit(()=>{}),style:{maxWidth:"320px"},children:[r.jsx(D,{name:"birthdate",form:n,label:e.label??"Data de Nascimento",min:e.min,max:e.max,loading:e.loading,disabled:e.disabled,required:e.required}),r.jsx("div",{style:{marginTop:"12px"},children:r.jsx(S,{type:"submit",children:"Enviar"})})]})}const a={render:e=>r.jsx(o,{...e}),args:{label:"Data de Nascimento"}},t={render:e=>r.jsx(o,{...e}),args:{label:"Data do Evento",min:"2024-01-01",max:"2025-12-31"}},s={render:e=>r.jsx(o,{...e}),args:{label:"Data de Nascimento",required:!0}};var i,m,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => <DateStory {...args} />,
  args: {
    label: 'Data de Nascimento'
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var c,l,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <DateStory {...args} />,
  args: {
    label: 'Data do Evento',
    min: '2024-01-01',
    max: '2025-12-31'
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var p,x,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <DateStory {...args} />,
  args: {
    label: 'Data de Nascimento',
    required: true
  }
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const F=["Default","WithMinMax","Required"];export{a as Default,s as Required,t as WithMinMax,F as __namedExportsOrder,_ as default};
