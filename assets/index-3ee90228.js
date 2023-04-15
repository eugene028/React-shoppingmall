import{n,t as l,u as c,j as e,F as s,a as t,T as a}from"./index-fbb40029.js";const m=()=>{const i=c();return e(s,{children:t(p,{children:[t(g,{children:[e(a,{typo:"G_Header_28_B",className:"welcome",color:"black",children:"커비샵에 오신 것을 환영합니다!"}),e(a,{typo:"G_Header_20_B",className:"des",color:"black",children:"다양한 상품들을 구경하고 구매해보세요 😊"}),t(d,{children:[e(o,{onClick:()=>{i("/products")},children:e(a,{typo:"Text_16_SB",color:"black",children:"상품 구경하기"})}),e(o,{onClick:()=>{i("/cart")},children:e(a,{typo:"Text_16_SB",color:"black",children:"장바구니 바로가기"})})]}),e(r,{children:e("img",{className:"moving",src:"assets/img/moving.png"})}),e(r,{children:e("img",{className:"moving2",src:"assets/img/moving2.png"})})]}),e("img",{className:"mainImg",src:"assets/img/main.jpg"})]})})},d=n.div`
    display:flex;
    flex-direction: row;
    gap: 40px;
    margin:40px;
`,o=n.button`
    background: ${l.palette.main_300};
    border-radius: 12px;
    width: 150px;
    height: 50px;
`,p=n.div`
    display:flex;
    position:relative;
    @keyframes fadeIn {
        from {
        opacity: 0.2;
        }
        to {
        opacity: 1;
        }
    }
    .mainImg{
        width:100%;
        height: 100%;
        object-fit: cover;
        animation: 2s forwards fadeIn ease-out infinite alternate;
    }
`,g=n.div`
    position: absolute;
    top:0px;
    left:0px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: linear-gradient(to top, transparent, 60%, #ffffff);
    width: 100%;
    height: 50%;
    z-index:100;
    .welcome{
        margin:40px;
    }
    .des{
        margin-left: 40px;
    }

`,r=n.span`
    @keyframes moving-Kirby {
        0% {
            transform: translate(0, 0);
        }
        50% {
            transform: translate(100px, 100px);
            scale:1.2
        }
        100% {
            transform: translate(-100px, 200px);
        }
    }
    @keyframes moving2-Kirby {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(0,-200px);
        }
    }
    display: inline-block;

    .moving{
        position:absolute;
        left: 50%;
        width:100px;
        animation: moving-Kirby 3s linear forwards infinite alternate;
    }
    .moving2{
        position:absolute;
        left: 70%;
        width:150px;
        animation: moving2-Kirby 2s linear forwards infinite alternate;
    }
`,x=()=>e(s,{children:e(m,{})});export{x as default};
