import{a as m,S as y,i as c}from"./assets/vendor-30VqbI-A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const h="27888525-8999ed18604edf74585499e22";m.defaults.baseURL="https://pixabay.com/api/";const u=(e,t)=>{const o={key:h,q:e,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return m.get("",{params:o})}catch(i){console.log(i.message)}},v=({webformatURL:e,largeImageURL:t,tags:o,likes:i,views:s,comments:a,downloads:n})=>` <li class="gallery-item">
        <div class="gallery-thumb"><a class="gallery-link" href="${t}" ><img src="${e}" alt="${o}"/></a></div>
        <div class="gallery-info-wrapper">
          <div class="gallery-info-box">
            <span class="gallery-info-data">Likes</span>
            <span class="gallery-info-amount">${i}</span>
          </div>
          <div class="gallery-info-box">
            <span class="gallery-info-data">Views</span>
            <span class="gallery-info-amount">${s}</span>
          </div>
          <div class="gallery-info-box">
            <span class="gallery-info-data">Comments</span>
            <span class="gallery-info-amount">${a}</span>
          </div>
          <div class="gallery-info-box">
            <span class="gallery-info-data">Downloads</span>
            <span class="gallery-info-amount">${n}</span>
          </div>
        </div>
      </li>`,p=e=>e.map(t=>v(t)).join(""),f=new y(".gallery-link"),r={form:document.querySelector(".form"),gallerylist:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load-more")},b=15;let g,l,d;r.form.addEventListener("submit",async e=>{if(e.preventDefault(),l=1,r.gallerylist.innerHTML="",r.loader.classList.add("is-visible"),d=e.target.elements["search-text"].value.trim(),!d){c.error({message:"Please fill out the request!",position:"topRight"}),r.loader.classList.remove("is-visible"),r.btnLoadMore.classList.remove("is-visible"),e.target.elements["search-text"].value="";return}try{const{data:{hits:t}}=await u(d,l);if(!t.length){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),r.loader.classList.remove("is-visible"),r.btnLoadMore.classList.remove("is-visible"),e.target.elements["search-text"].value="";return}r.loader.classList.remove("is-visible"),r.gallerylist.innerHTML=p(t),f.refresh(),e.target.elements["search-text"].value="",l+=1,r.btnLoadMore.classList.add("is-visible");const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,left:0,behavior:"smooth"})}catch(t){c.error({message:t.message,position:"topRight"})}});r.btnLoadMore.addEventListener("click",async()=>{try{const{data:{totalHits:e,hits:t}}=await u(d,l);if(r.loader.classList.remove("is-visible"),r.gallerylist.insertAdjacentHTML("beforeend",p(t)),f.refresh(),g=Math.ceil(e/b),l===g){c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),r.btnLoadMore.classList.remove("is-visible");return}l+=1,r.btnLoadMore.classList.add("is-visible")}catch(e){c.error({message:e.message,position:"topRight"}),console.log(e.message)}});
//# sourceMappingURL=index.js.map
