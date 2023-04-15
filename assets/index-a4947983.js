import{n as a,t as n,j as e,a as t,T as o,c as v,u as w,d as k,R as N,r as P,b as C,E as S}from"./index-fbb40029.js";import{c as h,P as B}from"./PayAmount-9037455d.js";import{u as I}from"./useMutation-70939fb8.js";const T=({children:i})=>v.createPortal(i,document.getElementById("modal")),H=({show:i,proceed:d,cancel:c})=>i?e(T,{children:t(M,{children:[e(D,{}),e($,{children:t(E,{children:[e(o,{typo:"Header_20",children:"결제를 진행할까요?"}),t(j,{children:[e(x,{onClick:d,children:e(o,{typo:"Text_18_SB",color:"black",children:"예"})}),e(x,{onClick:c,children:e(o,{typo:"Text_18_SB",color:"black",children:"아니오"})})]})]})})]})}):null,M=a.div`
    @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: 0.5s forwards fadeIn ease-out;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`,$=a.div`
    @keyframes grow {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
    animation: 0.15s forwards grow ease-out;
    width: 40%;
    height: 25%;
    border-radius: 16px;
    background-color: ${({theme:i})=>i.palette.white};
    z-index: 101;
    /* width: 390px; */
    border: 1px solid black;
`,E=a.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height:100%;
    gap: 40px;
`,j=a.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
`,x=a.button`
    background: ${n.palette.main_200};
    width: 100px;
    height: 50px;
    border-radius: 10px;
`,D=a.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  width: 100%;
  height: 100%;
`,R=()=>t(z,{children:[t(l,{className:"topHead",children:[e("div",{className:"head",children:"이름"}),e("div",{className:"info",children:"커비"})]}),t(l,{children:[e("div",{className:"head",children:"이메일"}),e("div",{className:"info",children:" star_Kirby@kirby.com"})]}),t(l,{children:[e("div",{className:"head",children:"휴대폰 번호"}),e("div",{className:"info",children:"010-xxxx-xxxx"})]}),t(l,{children:[e("div",{className:"head",children:"배송지 주소"}),e("div",{className:"info",children:"푸푸푸랜드"})]})]}),z=a.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin : 20px;
    .topHead{
        border-top: 2px solid ${n.palette.main_200};
    }
`,l=a.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    border-bottom: 1px solid ${n.palette.main_200};
    .head{
        background: ${n.palette.main_100};
        flex: 1 1 0;
        text-align: right;
        padding: 10px;
        padding-right: 15px;
        
    }
    .info{
        padding: 10px;
        flex: 2 1 0;
        padding-left: 15px;
    }
`,A=({title:i,amount:d})=>t(F,{children:[e(o,{className:"product",typo:"Text_14_SB",children:i}),t(o,{className:"amount",typo:"Text_12_SB",color:"gray_400",children:["수량 ",d,"개 / 무료배송"]})]}),F=a.div`
    padding : 15px;
    display: flex;
    flex-direction: row;
    border-top: 2px solid ${n.palette.main_200};
    .product{
        flex: 4 1 0;
    }
    .amount{
        flex: 1 1 0;
    }
`,G=()=>{const i=w(),d=k(h),[c,m]=N(h),[f,p]=P.useState(!1),{mutate:u}=I(r=>C(S,r)),g=()=>{p(!0)},y=()=>{const r=c.map(({id:s})=>s);u(r,{onSuccess:()=>{m([]),alert("결제가 완료되었습니다.😊"),i("/products",{replace:!0})}})},_=()=>{p(!1)};return t("div",{children:[t(q,{children:[e(o,{typo:"G_Header_24_B",children:"구매자 정보"}),e(R,{}),e(o,{typo:"G_Header_24_B",children:"배송 1건 중"}),t(Y,{children:[e("div",{className:"InfoHead",children:e(o,{typo:"Header_20",children:"내일 도착 예정"})}),d.map(({title:r,id:s,amount:b})=>e(A,{title:r,amount:b},s))]})]}),e(B,{handleSubmit:g,submitTitle:"결제하기"}),e(H,{show:f,proceed:y,cancel:_})]})},Y=a.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 20px;
    border-radius:12px;
    border: 3px solid ${n.palette.main_300};
    .InfoHead{
        padding : 15px;
        background: ${n.palette.main_100};
        border-radius:12px;
    }
`,q=a.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 150px;
`,W=()=>e(G,{});export{W as default};
