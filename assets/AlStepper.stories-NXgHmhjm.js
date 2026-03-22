import{j as e,s,c as f}from"./classMap-B5ymgKpN.js";import{r as P}from"./iframe-Cxw9YNYo.js";import{A as u}from"./AlButton-CMZaoz1i.js";import"./preload-helper-C1FmrZbK.js";import"./useAlLoading-VgDD9DiF.js";import"./AlSpinner-Cuh4XRh7.js";function m({steps:t,activeStep:n,onStepChange:o,className:g,"data-testid":j}){var h;return e.jsxs("div",{"data-testid":j,className:g,children:[e.jsx("div",{className:s.stepper,role:"tablist","aria-label":"Progress",children:t.map((l,a)=>{const d=a===n,c=a<n,r=l.isValid!==!1&&(c||a<=n);return e.jsxs("div",{className:f(s.step,d&&s.stepActive,c&&s.stepCompleted,!r&&!d&&s.stepDisabled,r&&s.stepClickable),role:"tab","aria-selected":d,"aria-label":`Step ${a+1}: ${l.label}`,onClick:()=>r&&o(a),onKeyDown:p=>{(p.key==="Enter"||p.key===" ")&&r&&(p.preventDefault(),o(a))},tabIndex:r?0:-1,children:[e.jsx("span",{className:s.stepNumber,children:c?"✓":a+1}),e.jsx("span",{className:s.stepLabel,children:l.label}),a<t.length-1&&e.jsx("span",{className:s.stepConnector})]},a)})}),e.jsx("div",{className:s.content,role:"tabpanel",children:(h=t[n])==null?void 0:h.content})]})}m.__docgenInfo={description:"",methods:[],displayName:"AlStepper",props:{className:{required:!1,tsType:{name:"string"},description:"Classes CSS adicionais"},"data-testid":{required:!1,tsType:{name:"string"},description:"ID de teste para testes automatizados"},steps:{required:!0,tsType:{name:"Array",elements:[{name:"AlStepperStep"}],raw:"AlStepperStep[]"},description:""},activeStep:{required:!0,tsType:{name:"number"},description:"Índice do passo ativo atualmente (base 0)"},onStepChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(step: number) => void",signature:{arguments:[{type:{name:"number"},name:"step"}],return:{name:"void"}}},description:"Callback quando o passo muda"}}};const N={title:"Organisms/AlStepper",component:m,tags:["autodocs"]},i={render:()=>{const[t,n]=P.useState(0),o=[{label:"Informações Pessoais",content:e.jsxs("div",{children:[e.jsx("h3",{children:"Passo 1: Informações Pessoais"}),e.jsx("p",{children:"Preencha seu nome e dados de contato."})]})},{label:"Endereço",content:e.jsxs("div",{children:[e.jsx("h3",{children:"Passo 2: Endereço"}),e.jsx("p",{children:"Informe seu endereço de entrega."})]})},{label:"Pagamento",content:e.jsxs("div",{children:[e.jsx("h3",{children:"Passo 3: Pagamento"}),e.jsx("p",{children:"Insira os dados de pagamento."})]})},{label:"Revisão",content:e.jsxs("div",{children:[e.jsx("h3",{children:"Passo 4: Revisão"}),e.jsx("p",{children:"Revise e confirme seu pedido."})]})}];return e.jsxs("div",{children:[e.jsx(m,{steps:o,activeStep:t,onStepChange:n}),e.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"16px"},children:[e.jsx(u,{intent:"secondary",onClick:()=>n(Math.max(0,t-1)),disabled:t===0,children:"Voltar"}),e.jsx(u,{onClick:()=>n(Math.min(o.length-1,t+1)),disabled:t===o.length-1,children:"Próximo"})]})]})}};var v,x,b;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState(0);
    const steps = [{
      label: 'Informações Pessoais',
      content: <div><h3>Passo 1: Informações Pessoais</h3><p>Preencha seu nome e dados de contato.</p></div>
    }, {
      label: 'Endereço',
      content: <div><h3>Passo 2: Endereço</h3><p>Informe seu endereço de entrega.</p></div>
    }, {
      label: 'Pagamento',
      content: <div><h3>Passo 3: Pagamento</h3><p>Insira os dados de pagamento.</p></div>
    }, {
      label: 'Revisão',
      content: <div><h3>Passo 4: Revisão</h3><p>Revise e confirme seu pedido.</p></div>
    }];
    return <div>
        <AlStepper steps={steps} activeStep={active} onStepChange={setActive} />
        <div style={{
        display: 'flex',
        gap: '12px',
        marginTop: '16px'
      }}>
          <AlButton intent="secondary" onClick={() => setActive(Math.max(0, active - 1))} disabled={active === 0}>
            Voltar
          </AlButton>
          <AlButton onClick={() => setActive(Math.min(steps.length - 1, active + 1))} disabled={active === steps.length - 1}>
            Próximo
          </AlButton>
        </div>
      </div>;
  }
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const E=["Default"];export{i as Default,E as __namedExportsOrder,N as default};
