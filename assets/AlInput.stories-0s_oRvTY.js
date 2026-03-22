import{j as a,c as S,l as r}from"./classMap-BDJzPWxE.js";import{a as ne,b as Z,c as G,o as me,s as de}from"./useAlmgId-ygdPxqlL.js";import{u as pe}from"./useAlmgFormField-IVt8ghHa.js";import{u as ce}from"./useAlmgLoading-VgDD9DiF.js";import{A as ue}from"./AlLabel-CrzzRKEc.js";import{A as ge}from"./AlErrorMessage-BbU5P_lF.js";import{A as be}from"./AlSpinner-DNt1W254.js";import{A as xe}from"./AlButton-BGp8e2lM.js";import"./iframe-dZGSMZ0e.js";import"./preload-helper-C1FmrZbK.js";const he={left:r.wrapperLabelLeft,top:r.wrapperLabelTop,right:r.wrapperLabelRight};function b({name:e,form:s,label:x,labelPosition:K="top",errorPosition:X="bottom",loading:ee,disabled:ae,required:h,helpText:f,type:re="text",className:oe,"data-testid":le,...se}){const{registration:te,errorMessage:y,hasError:l}=pe(s,e),t=ne(e),{isDisabled:v,isLoading:T}=ce(ee,ae),ie=X==="right",j=a.jsxs("div",{style:{position:"relative",flex:1},children:[a.jsx("input",{id:t,type:re,...te,...se,disabled:v,"aria-invalid":l||void 0,"aria-describedby":l?`${t}-error`:void 0,"aria-required":h||void 0,className:S(r.input,l&&r.error,v&&r.disabled,T&&r.loading,oe)}),T&&a.jsx("span",{style:{position:"absolute",right:"8px",top:"50%",transform:"translateY(-50%)"},children:a.jsx(be,{size:"sm"})})]}),E=l&&y&&a.jsx(ge,{id:`${t}-error`,children:y});return a.jsxs("div",{className:S(r.wrapper,he[K]),"data-testid":le,children:[x&&a.jsx(ue,{htmlFor:t,required:h,children:x}),ie?a.jsxs("div",{className:"almg-error-right",style:{display:"flex",alignItems:"center",flex:1},children:[j,E]}):a.jsxs(a.Fragment,{children:[j,f&&!l&&a.jsx("span",{style:{fontSize:"var(--font-size-almg-xs)",color:"var(--color-almg-brand-font-secondary)"},children:f}),E]})]})}b.__docgenInfo={description:"",methods:[],displayName:"AlmgInput",props:{className:{required:!1,tsType:{name:"string"},description:"Classes CSS adicionais"},"data-testid":{required:!1,tsType:{name:"string"},description:"ID de teste para testes automatizados"},loading:{required:!1,tsType:{name:"boolean"},description:"Exibe indicador de carregamento e desabilita interação"},disabled:{required:!1,tsType:{name:"boolean"},description:"Desabilita o componente"},label:{required:!1,tsType:{name:"string"},description:"Texto do label do campo. Quando omitido, nenhum label é renderizado."},labelPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'top' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'top'"},{name:"literal",value:"'right'"}]},description:"Posição do label em relação ao input",defaultValue:{value:"'top'",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Mensagem de erro a ser exibida (tipicamente do Zod via RHF)"},errorPosition:{required:!1,tsType:{name:"union",raw:"'bottom' | 'right'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'right'"}]},description:"Posição da mensagem de erro: 'bottom' (padrão) ou 'right'",defaultValue:{value:"'bottom'",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Se o campo é obrigatório (adiciona indicador visual ao label)"},helpText:{required:!1,tsType:{name:"string"},description:"Texto de ajuda exibido abaixo do campo"},name:{required:!0,tsType:{name:"Path",elements:[{name:"TFieldValues"}],raw:"Path<TFieldValues>"},description:"Nome do campo, type-safe em relação ao schema do formulário"},form:{required:!0,tsType:{name:"UseFormReturn",elements:[{name:"TFieldValues"}],raw:"UseFormReturn<TFieldValues>"},description:"Instância do formulário RHF vinda do useForm()"},rules:{required:!1,tsType:{name:"RegisterOptions",elements:[{name:"TFieldValues"}],raw:"RegisterOptions<TFieldValues>"},description:"Opções adicionais de registro do RHF"},type:{required:!1,tsType:{name:"union",raw:"'text' | 'email' | 'password' | 'number' | 'tel' | 'url'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'email'"},{name:"literal",value:"'password'"},{name:"literal",value:"'number'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'url'"}]},description:"Tipos de input suportados",defaultValue:{value:"'text'",computed:!1}}},composes:["Pick"]};const J=me({email:de({error:"E-mail é obrigatório"}).min(1,"E-mail é obrigatório").email("Endereço de e-mail inválido")}),Pe={title:"Primitives/AlmgInput",component:b,tags:["autodocs"],argTypes:{labelPosition:{control:"select",options:["left","top","right"]},loading:{control:"boolean"},disabled:{control:"boolean"},required:{control:"boolean"},type:{control:"select",options:["text","email","password","number","tel","url"]}}};function o(e){const s=Z({resolver:G(J),mode:"onBlur"});return a.jsxs("form",{onSubmit:s.handleSubmit(()=>{}),children:[a.jsx(b,{name:"email",form:s,label:e.label??"E-mail",labelPosition:e.labelPosition??"top",placeholder:e.placeholder??"you@example.com",type:e.type??"email",loading:e.loading,disabled:e.disabled,required:e.required,helpText:e.helpText}),a.jsx("div",{style:{marginTop:"12px"},children:a.jsx(xe,{type:"submit",children:"Validar"})})]})}const i={render:e=>a.jsx(o,{...e}),args:{label:"E-mail",labelPosition:"top",placeholder:"you@example.com",type:"email"}},n={render:e=>a.jsx(o,{...e}),args:{label:"E-mail",labelPosition:"left",placeholder:"you@example.com"}},m={render:e=>a.jsx(o,{...e}),args:{label:"E-mail",labelPosition:"right",placeholder:"you@example.com"}},d={render:e=>a.jsx(o,{...e}),args:{label:"E-mail",helpText:"Nunca compartilharemos seu e-mail.",placeholder:"you@example.com"}},p={render:e=>a.jsx(o,{...e}),args:{label:"E-mail",required:!0,placeholder:"you@example.com"}},c={render:e=>a.jsx(o,{...e}),args:{label:"E-mail",loading:!0,placeholder:"you@example.com"}},u={render:e=>a.jsx(o,{...e}),args:{label:"E-mail",disabled:!0,placeholder:"you@example.com"}},g={render:()=>{const e=Z({resolver:G(J),mode:"onBlur"});return a.jsx(b,{name:"email",form:e,placeholder:"Input sem label",type:"email"})}};var q,F,I;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => <InputStory {...args} />,
  args: {
    label: 'E-mail',
    labelPosition: 'top',
    placeholder: 'you@example.com',
    type: 'email'
  }
}`,...(I=(F=i.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var P,L,A;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => <InputStory {...args} />,
  args: {
    label: 'E-mail',
    labelPosition: 'left',
    placeholder: 'you@example.com'
  }
}`,...(A=(L=n.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var R,w,N;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <InputStory {...args} />,
  args: {
    label: 'E-mail',
    labelPosition: 'right',
    placeholder: 'you@example.com'
  }
}`,...(N=(w=m.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var V,D,z;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => <InputStory {...args} />,
  args: {
    label: 'E-mail',
    helpText: 'Nunca compartilharemos seu e-mail.',
    placeholder: 'you@example.com'
  }
}`,...(z=(D=d.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var H,M,B;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <InputStory {...args} />,
  args: {
    label: 'E-mail',
    required: true,
    placeholder: 'you@example.com'
  }
}`,...(B=(M=p.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var O,_,C;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => <InputStory {...args} />,
  args: {
    label: 'E-mail',
    loading: true,
    placeholder: 'you@example.com'
  }
}`,...(C=(_=c.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var U,W,$;u.parameters={...u.parameters,docs:{...(U=u.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => <InputStory {...args} />,
  args: {
    label: 'E-mail',
    disabled: true,
    placeholder: 'you@example.com'
  }
}`,...($=(W=u.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var k,Q,Y;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      mode: 'onBlur'
    });
    return <AlmgInput<FormData> name="email" form={form} placeholder="Input sem label" type="email" />;
  }
}`,...(Y=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};const Le=["Default","LabelLeft","LabelRight","WithHelpText","Required","Loading","Disabled","NoLabel"];export{i as Default,u as Disabled,n as LabelLeft,m as LabelRight,c as Loading,g as NoLabel,p as Required,d as WithHelpText,Le as __namedExportsOrder,Pe as default};
