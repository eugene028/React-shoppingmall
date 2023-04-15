import{n as l,m as v,a as i,j as a,T as u,r as h,t as C,g as R,Q as p,b as k,U as A,D,u as I,R as E,F as S,G as N}from"./index-fbb40029.js";import{u as Q}from"./useQuery-ba416a1d.js";import{u as T}from"./useMutation-70939fb8.js";import{G as F}from"./iconBase-86c5018c.js";import{c as $,P as j}from"./PayAmount-9037455d.js";const B=({imageUrl:n,price:s,title:m,amount:x})=>i(H,{children:[a(M,{children:a("img",{className:"cart-item__image",src:n})}),i(z,{children:[a(u,{typo:"Text_16_SB",color:"black",className:"cart-item__title",children:m}),i(u,{typo:"Text_14",color:"gray_400",children:[s*x,"원"]})]})]}),H=l.div`
    display: flex;
    ${v.mobile} {
    min-width:60%;
  }
  flex: 2 1 0;
`,M=l.div`
    overflow: hidden;
    max-width: 100px;
    min-width:80px;
    max-height: 100px;
    flex: 1 0 0;
    img {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        margin-bottom: 10px;
        object-fit: cover;
    }
    border-radius: 4px;
`,z=l.div`
    flex: 2 0 0;
    display: flex;
    flex-direction: column;
    margin: 10px 50px;
    gap: 20px;
`;function G(n){return F({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"}}]})(n)}const P=({id:n,imageUrl:s,price:m,title:x,amount:o},f)=>{const d=R(),{mutate:y}=T(({id:r,amount:t})=>k(A,{id:r,amount:t}),{onMutate:async({id:r,amount:t})=>{await d.cancelQueries(p.CART);const e=d.getQueryData(p.CART);if(!(e!=null&&e[r]))return e;const c={...e||{},[r]:{...e[r],amount:t}};return d.setQueryData(p.CART,c),e},onSuccess:r=>{const e={...d.getQueryData(p.CART)||{},[n]:r};d.setQueryData(p.CART,e)}}),{mutate:g}=T(({id:r})=>k(D,{id:r}),{onSuccess:()=>{d.invalidateQueries(p.CART)}}),_=r=>{const t=Number(r.target.value);t<1||y({id:n,amount:t})},b=()=>{g({id:n})};return i(q,{children:[i(L,{children:[a("input",{className:"cart-item__checkbox",type:"checkbox",name:"select-item",ref:f,"data-id":n}),a(B,{imageUrl:s,price:m,title:x,amount:o,"data-id":n}),i(U,{children:[i(u,{typo:"Text_18_SB",color:"black",className:"finalPrice",children:[m*o,"원"]}),a(O,{type:"number",className:"cart-item__amount",min:1,value:o,onChange:_})]}),a(G,{size:"2rem",color:C.palette.main_400,onClick:b})]}),a("br",{})]})},V=h.forwardRef(P),q=l.div`
    display: flex;
    flex-direction: column;
`,L=l.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    .cart-item__checkbox{
        margin-right: 20px
    }
    padding: 20px;
    border-bottom: 2px solid ${C.palette.main_200};
`,O=l.input`
    max-width: 50px;
    max-height: 20px;
   
`,U=l.div`
    padding: 20px;
    display: flex;
    gap: 20px;
    ${v.mobile} {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap:10px;
    }
`,K=({items:n})=>{const s=I(),[m,x]=E($),o=h.useRef(null),f=n.map(()=>h.createRef()),[d,y]=h.useState(),g=()=>{if(!o.current)return;const c=new FormData(o.current).getAll("select-item").length===n.length;o.current.querySelector(".select-all").checked=c},_=t=>{const e=t.checked;f.forEach(c=>{c.current.checked=e})},b=t=>{if(!o.current)return;const e=t==null?void 0:t.target;e&&e.classList.contains("select-all")?_(e):g();const c=new FormData(o.current);y(c)},r=()=>{m.length?s("/payment"):alert("결제할 상품을 먼저 선택해주세요!😞")};return h.useEffect(()=>{m.forEach(t=>{const e=f.find(c=>c.current.dataset.id===t.id);e&&(e.current.checked=!0)}),g()},[]),h.useEffect(()=>{const t=f.reduce((e,c,w)=>(c.current.checked&&e.push(n[w]),e),[]);x(t)},[n,d]),a("form",{ref:o,onChange:b,children:i(W,{children:[i(J,{children:[i(u,{typo:"Text_16_SB",className:"info",color:"black",as:"h3",children:[a("input",{className:"select-all",name:"select-all",type:"checkbox"}),"전체선택"]}),a(u,{typo:"Text_16_SB",className:"info",color:"black",as:"h3",children:"상품정보"}),a(u,{typo:"Text_16_SB",className:"info",color:"black",as:"h3",children:"상품금액"})]}),n.map((t,e)=>h.createElement(V,{...t,key:t.id,ref:f[e]})),a(j,{handleSubmit:r,submitTitle:"구매하기"})]})})},W=l.div`
    padding: 60px;
    overflow: hidden;
    ${v.mobile} {
        padding: 30px;
    }
`,J=l.div`
    display: flex;
    flex-direction: row;
    height: 30px;
    background-color: ${C.palette.main_100};
    padding : 5px;
    .select-all {
        margin-right: 10px;
    }
    .info{
        align-items: center;
        margin-top: 6px;
    }
    .info:nth-of-type(1) {
	    flex: 1 1 0;
    }
    .info:nth-of-type(2) {
	    flex: 2 1 0;
        text-align: center;
    }
    .info:nth-of-type(3) {
	    flex: 1 1 0;
        text-align: center;
    }
    border: 2px solid ${C.palette.main_200};
`,X=()=>i(Y,{children:[a("img",{className:"mainImg",src:"assets/img/emptyCart.png"}),a(u,{typo:"G_Header_28_B",children:"장바구니가 비어있어요!"})]}),Y=l.div`
    width:100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    img{
        width: 200px;
    }
`,re=()=>{const{data:n}=Q(p.CART,()=>k(N),{staleTime:0,cacheTime:1e3}),s=Object.values(n||{});return s.length?a(S,{children:a(K,{items:s})}):a(X,{})};export{re as default};
