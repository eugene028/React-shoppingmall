import{n as i,r as n,a as o,F as h,P as x,L as f,j as e,T as c,t as b,b as l,A as C,m as s,Q as y,f as _}from"./index-fbb40029.js";import{u as v}from"./useQuery-ba416a1d.js";import{S as P,C as T}from"./CartModal-e1a9bbe3.js";import{G as S}from"./iconBase-86c5018c.js";import{u as w}from"./useMutation-70939fb8.js";function k(t){return S({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"}}]})(t)}const H=t=>{const[r,a]=n.useState(!1),{mutate:d}=w(g=>l(C,{id:g})),p=()=>{a(!0)},m=()=>{d(t.id),a(!1)},u=()=>{a(!1)};return o(h,{children:[o(x,{children:[o(f,{style:{textDecoration:"none",cursor:"pointer"},to:`/products/${t.id}`,children:[e(M,{children:e("img",{src:t.imageUrl})}),e(c,{typo:"Text_14_SB",color:"gray_400",as:"p",children:t.title}),o(c,{typo:"Header_24",color:"black",children:[t.price,"원"]}),e(P,{ratingnum:t.rate})]}),e(k,{color:b.palette.main_400,className:"product-item__add-cart",onClick:p,style:{cursor:"pointer"}})]}),e(T,{show:r,proceed:m,cancel:u})]})},M=i.div`
  position: relative;
  padding-top: 141.4%;
  overflow: hidden;
  margin-bottom: 10px;
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: ${({theme:t})=>t.palette.gray_300};
    margin-bottom: 10px;
    object-fit: cover;
  }
  box-shadow: 0px 0px 10px 7px rgba(0, 0, 0, 0.01);
  border-radius: 12px;
  .tag {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`,A=()=>{var r;const{data:t}=v(y.PRODUCTS,()=>l(_));return o($,{children:[e(D,{children:e(c,{typo:"G_Header_28_B",color:"black",className:"productTitle",children:"오늘의 추천 상품"})}),e(j,{children:(r=t==null?void 0:t.products)==null?void 0:r.map(a=>n.createElement(H,{...a,key:a.id}))})]})},D=i.div`
  text-align: center;

`,$=i.div`
  .productTitle{
    margin: auto 0;
    /* position: relative;
    left: 10%; */
    ${s.mobile} {
    left: 3%;
  }
  }
`,j=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 60px 40px;
  ${s.mobile} {
    grid-gap: 32px 32px;
  }
  margin: 40px auto 0 auto;
  max-width: 936px;

  ${s.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;export{A as default};
