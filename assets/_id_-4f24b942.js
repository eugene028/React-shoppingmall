import{n as r,m as n,t as i,r as f,a as o,j as t,T as a,b as s,A as y,i as T,Q as w,k as C}from"./index-fbb40029.js";import{u as $}from"./useQuery-ba416a1d.js";import{S as k,C as S}from"./CartModal-e1a9bbe3.js";import{u as v}from"./useMutation-70939fb8.js";const P=e=>{const[l,c]=f.useState(!1),{mutate:p}=v(_=>s(y,{id:_})),m=()=>{c(!0)},u=()=>{p(e.id),c(!1)},x=()=>{c(!1)};let h=e.createdAt.split(" ")[1],b={Jan:1,Feb:2,Mar:3,Apr:4,May:5,Jun:6,Jul:7,Aug:8,Sep:9,Oct:10,Nov:11,Dec:12}[h];const g=e.createdAt.split(" ")[2];return o(j,{children:[t("img",{src:e.imageUrl,alt:"productImg"}),o(A,{children:[o(d,{children:[t(a,{typo:"Header_24",children:e.title}),t(k,{ratingnum:e.rate})]}),o(d,{className:"sub",children:[o(a,{typo:"G_Header_28_B",color:"red_200",children:[e.price,"원"]}),t(a,{typo:"Text_14_SB",color:"sub_300",children:"30% 할인 중입니다!"})]}),o(d,{className:"sub",children:[t(a,{typo:"Text_14_SB",color:"black",children:"무료배송"}),o(a,{typo:"Text_14_SB",color:"black",children:[b,"/",g,"까지 배송 예정"]}),o(a,{typo:"Text_14",color:"gray_500",children:["모델/품번 : ",e.id]})]}),o(M,{children:[t(B,{onClick:m,children:t(a,{typo:"Text_18",color:"black",children:"장바구니에 담기"})}),t(D,{onClick:()=>{alert("결제가 완료되었습니다!")},children:t(a,{typo:"Text_18",color:"black",children:"바로 결제하기"})})]})]}),t(S,{show:l,proceed:u,cancel:x})]})},j=r.div`
    padding-top: 100px;
    justify-content: center;
    gap: 3rem;
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    img{
        width: 500px;
        object-fit:cover;
    }
    ${n.mobile} {
        img{
            width: 200px;
            object-fit:cover;
        }
        gap: 2rem;
    }
    .sub{
        border-bottom: 1px solid ${i.palette.main_300};
    }
`,A=r.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,d=r.div`
    display: flex;
    flex-direction: column;
    width: 400px;;
    padding : 10px;
    gap: 5px;
    border-bottom: 2px solid ${i.palette.main_300};
    
    ${n.mobile} {
        width:200px;
    }
`,B=r.button`
    width: 180px;
    height: 70px;
    text-align:center;
    background: ${i.palette.main_300};
    border-radius: 12px;
    ${n.mobile} {
        width: 90px;
    }
`,M=r.div`
    display:flex;
    flex-direction: row;
    padding-top: 10px;
    justify-content: center;
    align-items: center;
    gap:40px;
    ${n.mobile} {
        gap:20px;
    }
`,D=r.button`
    width: 180px;
    height: 70px;
    text-align:center;
    background: ${i.palette.main_100};
    border-radius: 12px;
    border: 2px solid ${i.palette.main_300};
    ${n.mobile} {
        width: 90px;
    }
`,J=()=>{const{id:e}=T(),{data:l}=$([w.PRODUCTS,e],()=>s(C,{id:e}));return l?t("div",{children:t(P,{...l})}):null};export{J as default};
