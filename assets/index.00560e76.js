import{j as e,r as t,D as a,R as r,a as n}from"./vendor.63874d41.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const a of e)if("childList"===a.type)for(const e of a.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const i=e.exports.jsx,l=e.exports.jsxs,u=e.exports.Fragment,o=({dataTuple:e,title:t,unit:a})=>e&&e[0]>0?i("tbody",{children:l("tr",{children:[i("td",{children:t}),l("td",{children:[Math.round(e[0]),a]}),l("td",{children:[Math.round(e[1]),"%"]})]})}):null;function d(){const[e,r]=t.exports.useState(200),[n,d]=t.exports.useState(10),[s,g]=t.exports.useState(0),[h,m]=t.exports.useState(null),[p,c]=t.exports.useState(0),[y,f]=t.exports.useState(0),[b,v]=t.exports.useState(0),[x,N]=t.exports.useState(0),[w,S]=t.exports.useState(0),[A,C]=t.exports.useState(0),[k,T]=t.exports.useState(0),[R,E]=t.exports.useState(0),[W,B]=t.exports.useState(0),[H,P]=t.exports.useState(0),[_,L]=t.exports.useState(1),[F,M]=t.exports.useState(null),Y="Enriched"===F?function(e,t,a,r,n,i,l,u,o,d,s,g,h,m){let p=n/(1+i/100),c=p*(i/100),y=50*o,f=18*d,b=30*s,v=e+p,x=e+a+r+t+n+l+u+y+f+b+g+h,N=t+c+.87*u+.74*y+.48*f+.88*b+.16*g,w=e/v*100,S=v/v*100,A=p/v*100,C=a/v*100,k=r/v*100,T=t/v*100,R=c/v*100,E=l/v*100,W=u/v*100,B=y/v*100,H=f/v*100,P=b/v*100,_=g/v*100,L=h/v*100,F=N/v*100,M=x/v*100;if(m>1){let i=m*x/(w+C+k+A+R+E+T+W+B+H+P+_+L);e=i*w,v=i*S,a=i*C,r*=i,n=i*A+i*R,l=i*E,u=i*W,y=i*B,f=i*H,b=i*P,g=i*_,t=i*T,h=i*L,N=i*F,x=i*M}return{flour:[e,w],salt:[a,C],sugar:[r,k],water:[t,T],preferment:[n,A],yeast:[l,E],milk:[u,W],egg:[o,B],yolk:[d,H],white:[s,P],butter:[g,_],oil:[h,L],hydro:[N,F],total_flour:[v,S],total_dough:[x,M]}}(e,H,y,b,s,h,p,x,w,A,k,R,W,_):function(e,t,a,r,n,i){let l=r/(1+n/100),u=l*(n/100),o=e+l,d=.02*o,s=o*(t/100)-u,g=o*(t/100),h=e+d+s+r,m=e/o*100,p=o/o*100,c=d/o*100,y=l/o*100,f=u/o*100,b=a/o*100,v=s/o*100,x=g/o*100,N=h/o*100;if(i>1){let t=i*h/(m+c+y+b+f+v);e=t*m,o=t*p,d=t*c,r=t*y+t*f,a=t*b,s=t*v,g=t*x,h=t*N}return{total_flour:[o,p],total_water:[g,x],flour:[e,m],salt:[d,c],preferment:[r,y],yeast:[a,b],water:[s,v],total_dough:[h,N]}}(e,n,p,s,h,_);return l("div",{className:"App",children:[i("h1",{children:"🥖🌾🌻🍂✨"}),i("h1",{children:"Baker's Percentage Calculator"}),i("h3",{children:"What kind of dough are you making?"}),i("div",{className:"input-group",children:i(a,{options:["Lean","Enriched"],placeholder:"Lean for flour/salt/water/yeast, Enriched if adding butter/milk/eggs.",value:F,onChange:e=>M(e.value)})}),"Lean"==F&&l(u,{children:[l("div",{className:"input-group",children:[i("label",{for:"flourSlider",children:"Flour (g)"}),i("input",{id:"flourSlider",type:"number",min:200,max:1e3,value:e,onChange:e=>{r(e.target.valueAsNumber)}}),i("input",{id:"flourRange",type:"range",min:200,max:1e3,value:e,onChange:e=>{r(e.target.valueAsNumber)}})]}),l("div",{className:"input-group",children:[i("div",{className:"input-group"}),i("label",{for:"hydrationSlider",children:"Hydration Percentage"}),i("input",{id:"hydrationSlider",type:"number",min:10,max:100,value:n,onChange:e=>{d(e.target.valueAsNumber)}}),i("input",{id:"hydrationRange",type:"range",min:10,max:100,value:n,onChange:e=>{d(e.target.valueAsNumber)}})]}),l("div",{className:"input-group",children:[i("label",{for:"yeastSlider",children:"Active Dry Yeast (g)"}),i("input",{id:"yeastSlider",type:"number",min:0,max:100,value:p,onChange:e=>{c(e.target.valueAsNumber)}}),i("input",{id:"yeastRange",type:"range",min:0,max:100,value:p,onChange:e=>{c(e.target.valueAsNumber)}})]}),l("div",{className:"input-group",children:[i("label",{for:"prefermentSlider",children:"Preferment + Hydration (g) (mixture of flour, water,  yeast)"}),i("input",{id:"prefermentSlider",type:"number",min:0,max:2e3,value:s,onChange:e=>{g(e.target.valueAsNumber)}}),i("input",{id:"hydroprefermentRange",type:"number",min:0,max:120,placeholder:"%",value:h,onChange:e=>m(e.target.valueAsNumber)}),i("input",{id:"prefermentRange",type:"range",min:0,max:1e3,value:s,onChange:e=>{g(e.target.valueAsNumber)}})]})]}),"Enriched"==F&&l(u,{children:[l("div",{className:"input-group",children:[i("label",{for:"flourSlider",children:"Flour (g)"}),i("input",{id:"flourSlider",type:"number",min:200,max:1e3,value:e,onChange:e=>{r(e.target.valueAsNumber)}}),i("input",{id:"flourRange",type:"range",min:200,max:1e3,value:e,onChange:e=>{r(e.target.valueAsNumber)}})]}),l("div",{className:"input-group",children:[i("label",{for:"yeastSlider",children:"Active Dry Yeast (g)"}),i("input",{id:"yeastSlider",type:"number",min:0,max:100,value:p,onChange:e=>{c(e.target.valueAsNumber)}}),i("input",{id:"yeastRange",type:"range",min:0,max:100,value:p,onChange:e=>{c(e.target.valueAsNumber)}})]}),l("div",{className:"input-group",children:[i("label",{for:"prefermentSlider",children:"Preferment + Hydration (g) (mixture of flour, water,  yeast)"}),i("input",{id:"prefermentSlider",type:"number",min:0,max:2e3,value:s,onChange:e=>{g(e.target.valueAsNumber)}}),i("input",{id:"hydroprefermentRange",type:"number",min:0,max:120,placeholder:"%",value:h,onChange:e=>m(e.target.valueAsNumber)}),i("input",{id:"prefermentRange",type:"range",min:0,max:1e3,value:s,onChange:e=>{g(e.target.valueAsNumber)}})]}),l("div",{className:"input-group",children:[i("label",{for:"milkSlider",children:"Milk (g)"}),i("input",{id:"milkSlider",type:"number",min:0,max:1e3,value:x,onChange:e=>{N(e.target.valueAsNumber)}}),i("input",{id:"milkRange",type:"range",min:0,max:1e3,value:x,onChange:e=>{N(e.target.valueAsNumber)}})]}),l("div",{className:"input-group",children:[i("label",{for:"saltSlider",children:"Salt (g)"}),i("input",{id:"saltSlider",type:"number",min:0,max:1e3,value:y,onChange:e=>{f(e.target.valueAsNumber)}}),i("input",{id:"saltRange",type:"range",min:0,max:1e3,value:y,onChange:e=>{f(e.target.valueAsNumber)}})]}),l("div",{className:"input-group",children:[i("label",{for:"sugarSlider",children:"Sugar (g)"}),i("input",{id:"sugarSlider",type:"number",min:0,max:1e3,value:b,onChange:e=>{v(e.target.valueAsNumber)}}),i("input",{id:"sugarRange",type:"range",min:0,max:1e3,value:b,onChange:e=>{v(e.target.valueAsNumber)}})]}),l("div",{className:"input-group",children:[i("label",{for:"waterSlider",children:"Water (g)"}),i("input",{id:"waterSlider",type:"number",min:0,max:1e3,value:H,onChange:e=>{P(e.target.valueAsNumber)}}),i("input",{id:"waterRange",type:"range",min:0,max:1e3,value:H,onChange:e=>{P(e.target.valueAsNumber)}})]}),l("div",{className:"input-group",children:[i("label",{for:"eggSlider",children:"Whole Egg (#)"}),i("input",{id:"eggSlider",type:"number",min:0,max:100,value:w,onChange:e=>{S(e.target.valueAsNumber)}}),i("input",{id:"eggRange",type:"range",min:0,max:100,value:w,onChange:e=>{S(e.target.valueAsNumber)}})]}),l("div",{className:"input-group",children:[i("label",{for:"yolkSlider",children:"Egg Yolk (#)"}),i("input",{id:"yolkSlider",type:"number",min:0,max:100,value:A,onChange:e=>{C(e.target.valueAsNumber)}}),i("input",{id:"yolkRange",type:"range",min:0,max:100,value:A,onChange:e=>{C(e.target.valueAsNumber)}})]}),l("div",{className:"input-group",children:[i("label",{for:"whiteSlider",children:"Egg White (#)"}),i("input",{id:"whiteSlider",type:"number",min:0,max:100,value:k,onChange:e=>{T(e.target.valueAsNumber)}}),i("input",{id:"whiteRange",type:"range",min:0,max:100,value:k,onChange:e=>{T(e.target.valueAsNumber)}})]}),l("div",{className:"input-group",children:[i("label",{for:"butterSlider",children:"Unsalted Butter (g)"}),i("input",{id:"butterSlider",type:"number",min:0,max:1e3,value:R,onChange:e=>{E(e.target.valueAsNumber)}}),i("input",{id:"butterRange",type:"range",min:0,max:1e3,value:R,onChange:e=>{E(e.target.valueAsNumber)}})]}),l("div",{className:"input-group",children:[i("label",{for:"oilSlider",children:"Extra-Virgin Olive Oil (g)"}),i("input",{id:"oilSlider",type:"number",min:0,max:1e3,value:W,onChange:e=>{B(e.target.valueAsNumber)}}),i("input",{id:"oilRange",type:"range",min:0,max:1e3,value:W,onChange:e=>{B(e.target.valueAsNumber)}})]})]}),l("div",{className:"input-group",children:[i("label",{for:"amountRange",children:"Choose the amount of loaves you want to bake"}),i("input",{id:"amountRange",type:"number",min:0,max:1e3,value:_,onChange:e=>{L(e.target.valueAsNumber)}})]}),l("table",{children:[l("tr",{children:[i("td",{}),i("td",{children:"Weight"}),i("td",{children:"Percent"})]}),i(o,{title:"Flour",unit:"g",dataTuple:Y.flour}),i(o,{title:"Salt",unit:"g",dataTuple:Y.salt}),i(o,{title:"Sugar",unit:"g",dataTuple:Y.sugar}),i(o,{title:"Preferment",unit:"g",dataTuple:Y.preferment}),i(o,{title:"Active Dry Yeast",unit:"g",dataTuple:Y.yeast}),i(o,{title:"Milk",unit:"g",dataTuple:Y.milk}),i(o,{title:"Whole Egg",unit:"#",dataTuple:Y.egg}),i(o,{title:"Egg Yolk",unit:"#",dataTuple:Y.yolk}),i(o,{title:"Egg White",unit:"#",dataTuple:Y.white}),i(o,{title:"Unsalted Butter",unit:"g",dataTuple:Y.butter}),i(o,{title:"Extra-virgin Olive Oil",unit:"g",dataTuple:Y.oil}),i(o,{title:"Water",unit:"g",dataTuple:Y.water}),i(o,{title:"Total Water",unit:"g",dataTuple:Y.total_water}),i(o,{title:"Total Water / Hydration Percent",unit:"g",dataTuple:Y.hydro}),i(o,{title:"Total Flour",unit:"g",dataTuple:Y.total_flour}),i(o,{title:"Total Dough",unit:"g",dataTuple:Y.total_dough})]}),i("ul",{children:i("li",{children:" The percentage for the preferment is the amount of flour in the preferment mixture divided by the total flour in the recipe. If you aren't using any, put 0!"})}),i("h2",{children:" Bread Notes "}),l("ul",{children:[l("li",{children:[" ",i("strong",{children:"Hydration + flour types:"})," Whole wheat flour is very absorbant. Rye flours are genearlly less absorbant, but with a wide variety of white/medium/dark rye it's best to learn how your flours affect hydration and fermentaion before incorporating into your breads.  Higher ratios of whole wheat to white flour will need closer to 80% hydration. For pure white flour breads, start around 70% and add about 5-10% hydration when starting to incorporate whole wheat."]}),i("br",{}),l("li",{children:[" ",i("strong",{children:" Hydration outcomes:"})," The higher the hydration of the dough, the more air bubbles, rise, and chewiness you'll see (though the dough will also be sticky-er and wetter). But add too much water and you'll end up with a soupy mess. Then again, add too little and you’ll end up with a dense flying saucer... Setting your hydration will depend on what kind of end result you're looking for and what kind of flours you are using. Having a lower hydration means a stiffer and easier to work with dough, which might be great for shaping pizza, but may not produce those big airy bubbles you typically look for in sourdough."]}),i("br",{}),l("li",{children:[" ",i("strong",{children:" Salt choice:"})," I set the default salt percentage to 2%. You can add a little over or a little under, but don't stray too far from the 2% mark or you'll end up hurting the yeast activity/rise of your bread (yeasts hate salt!) "]}),i("br",{}),l("li",{children:[" ",i("strong",{children:" Why is flour always 100%?:"})," Bakers use flour as the standard weight to divide the other ingredients against. This means our total flour will always be 100%, and we will always divide by that number. So a bread with 600g of water and 1000g of flour will be 60% hydration. With prefermented doughs, we add a yeasty mixture (starter/biga/poolish) that has its own water-to-flour ratio. This addition to the dough affects our hydration percentage, and needs to be added to our total water and total flour calculation."]})]}),l("h3",{children:[" A Web App by ",i("a",{href:"http://jclyn.info",children:"Jaclyn Baughman"})," "]})]})}r.render(i(n.StrictMode,{children:i(d,{})}),document.getElementById("root"));
