import{e as x,n,t as r,m,u as _,d as h,a as e,j as t,T as a}from"./index-fbb40029.js";const u=x({key:"cartState",default:[]}),k=({handleSubmit:d,submitTitle:c})=>{_();const i=h(u);console.log(i);const s=i.reduce((o,{price:l,amount:p})=>(o+=l*p,o),0);return e(y,{children:[e(b,{children:[t(a,{typo:"Text_16_SB",color:"black",children:"총 주문 가격 :"}),e(a,{typo:"G_Header_24_B",color:"red_300",children:[s,"원"]})]}),t(g,{onClick:d,children:t(a,{typo:"G_Header_24_B",color:"white",children:c})})]})},y=n.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin : 10px;
`,g=n.button`
    background: ${r.palette.main_400};
    width: 30%;
    height: 60px; 
    border-radius: 12px;
`,b=n.div`
    display:flex;
    width : 60%;
    justify-content: center;
    border : solid 5px ${r.palette.main_200};
    padding: 30px;
    margin : 40px;
    gap: 20px;
    ${m.mobile} {
        padding: 30px;
    }
    margin-top: 20px;
    border-radius: 10px;
`;export{k as P,u as c};
