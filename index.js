import{a as u,S as h,i as c}from"./assets/vendor-30VqbI-A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const b="27888525-8999ed18604edf74585499e22";u.defaults.baseURL="https://pixabay.com/api/";const f=async(s,t)=>{const i={key:b,q:s,page:t,per_page:15,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return await u.get("",{params:i})}catch(o){console.log(o.message)}},v=({webformatURL:s,largeImageURL:t,tags:i,likes:o,views:e,comments:r,downloads:n})=>` <li class="gallery-item">
        <div class="gallery-thumb"><a class="gallery-link" href="${t}" ><img src="${s}" alt="${i}"/></a></div>
        <div class="gallery-info-wrapper">
          <div class="gallery-info-box">
            <span class="gallery-info-data">Likes</span>
            <span class="gallery-info-amount">${o}</span>
          </div>
          <div class="gallery-info-box">
            <span class="gallery-info-data">Views</span>
            <span class="gallery-info-amount">${e}</span>
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
      </li>`,p=(s,t,i)=>{const o=s.map(e=>v(e)).join("");t.insertAdjacentHTML("beforeend",o),i.refresh()},y=new h(".gallery-link"),a={form:document.querySelector(".form"),gallerylist:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".btn-load-more")},L=15;let g,l,d;a.form.addEventListener("submit",async s=>{if(s.preventDefault(),l=1,a.gallerylist.innerHTML="",a.loader.classList.add("is-visible"),d=s.target.elements["search-text"].value.trim(),!d){c.error({message:"Please fill out the request!",position:"topRight"}),m(s);return}try{const{data:{hits:t,totalHits:i}}=await f(d,l);if(!t.length){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),m(s);return}g=Math.ceil(i/L),l<g&&a.btnLoadMore.classList.add("is-visible"),p(t,a.gallerylist,y),s.target.elements["search-text"].value="",l+=1;const o=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:o*2,left:0,behavior:"smooth"})}catch(t){c.error({message:t.message,position:"topRight"})}finally{a.loader.classList.remove("is-visible")}});a.btnLoadMore.addEventListener("click",async()=>{a.btnLoadMore.disabled=!0,a.loader.classList.add("is-visible");try{const{data:{totalHits:s,hits:t}}=await f(d,l);if(p(t,a.gallerylist,y),l===g){c.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),a.btnLoadMore.classList.remove("is-visible");return}l+=1,a.btnLoadMore.classList.add("is-visible")}catch(s){c.error({message:s.message,position:"topRight"}),console.log(s.message)}finally{a.loader.classList.remove("is-visible"),a.btnLoadMore.disabled=!1}});const m=s=>{a.loader.classList.remove("is-visible"),a.btnLoadMore.classList.remove("is-visible"),s.target.elements["search-text"].value=""};
//# sourceMappingURL=index.js.map
