import{a as u,S as h,i as c}from"./assets/vendor-30VqbI-A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();const v="27888525-8999ed18604edf74585499e22";u.defaults.baseURL="https://pixabay.com/api/";const p=async(e,t)=>{const o={key:v,q:e,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return await u.get("",{params:o})}catch(i){console.log(i.message)}},b=({webformatURL:e,largeImageURL:t,tags:o,likes:i,views:s,comments:r,downloads:n})=>` <li class="gallery-item">
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
            <span class="gallery-info-amount">${r}</span>
          </div>
          <div class="gallery-info-box">
            <span class="gallery-info-data">Downloads</span>
            <span class="gallery-info-amount">${n}</span>
          </div>
        </div>
      </li>`,f=(e,t,o)=>{const i=e.map(s=>b(s)).join("");t.insertAdjacentHTML("beforeend",i),o.refresh()},y=new h(".gallery-link"),a={form:document.querySelector(".form"),gallerylist:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load-more")},L=15;let g,l,d;a.form.addEventListener("submit",async e=>{if(e.preventDefault(),l=1,a.gallerylist.innerHTML="",a.loader.classList.add("is-visible"),d=e.target.elements["search-text"].value.trim(),!d){c.error({message:"Please fill out the request!",position:"topRight"}),m(e);return}try{const{data:{hits:t}}=await p(d,l);if(!t.length){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m(e);return}a.loader.classList.remove("is-visible"),f(t,a.gallerylist,y),e.target.elements["search-text"].value="",l+=1,a.btnLoadMore.classList.add("is-visible");const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,left:0,behavior:"smooth"})}catch(t){c.error({message:t.message,position:"topRight"})}});a.btnLoadMore.addEventListener("click",async()=>{try{const{data:{totalHits:e,hits:t}}=await p(d,l);if(a.loader.classList.remove("is-visible"),f(t,a.gallerylist,y),g=Math.ceil(e/L),l===g){c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),a.btnLoadMore.classList.remove("is-visible");return}l+=1,a.btnLoadMore.classList.add("is-visible")}catch(e){c.error({message:e.message,position:"topRight"}),console.log(e.message)}});const m=e=>{a.loader.classList.remove("is-visible"),a.btnLoadMore.classList.remove("is-visible"),e.target.elements["search-text"].value=""};
//# sourceMappingURL=index.js.map
