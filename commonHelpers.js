import{i as a,S as p}from"./assets/vendor-7659544d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function f(i){const o="43067029-c55b458b38852b6054b39e36e",t="https://pixabay.com/api/?",s=new URLSearchParams({key:o,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=t+s;return fetch(e).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const u=document.querySelector(".gallery");function m(i){const o=i.map(t=>`<li class="gallery-item">
  <a class="gallery-link"
    href="${t.largeImageURL}"
    ><img
      src="${t.webformatURL}"
      alt="${t.tags}"
  />
  <ul class="img-dscr">
    <li>
      <p><b>Likes</b> ${t.likes}</p>
    </li>
    <li>
      <p><b>Views</b> ${t.views}</p>
    </li>
    <li>
      <p><b>Comments</b> ${t.comments}</p>
    </li>
    <li>
      <p><b>Downloads</b> ${t.downloads}</p>
    </li>
  </ul>
  </a>
</li>

`).join("");u.insertAdjacentHTML("beforeend",o),new SimpleLightbox(".gallery-link",{captionsData:"alt",captionDelay:250})}const d=document.querySelector(".form"),c=document.querySelector("input"),l=document.querySelector(".loader");d.addEventListener("submit",i=>{i.preventDefault(),l.classList.add("is-open"),u.innerHTML="",h.refresh();const o=c.value.trim();if(o==="")return l.classList.remove("is-open"),a.warning({title:"Caution",message:"Please complete the field!",position:"topRight"});f(o).then(t=>{if(t.hits.length===0)return a.info({title:"Sorry",message:"There are no images matching your search query. Please try again!",position:"topRight"});m(t.hits)}).catch(t=>{console.error("Error fetching images:",t)}).finally(()=>l.classList.remove("is-open")),c.value=""});const h=new p(".gallery-link",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
