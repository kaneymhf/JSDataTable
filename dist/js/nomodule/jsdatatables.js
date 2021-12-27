System.register([],(function(t,e){"use strict";return{execute:function(){const s={en:{placeholder:"Search...",perPage:"{select} entries per page",noRows:"No entries found",noResults:"No results match your search query",info:"Showing {start} to {end} of {rows} entries"},pt:{placeholder:"Buscar...",perPage:"{select} registros por página",noRows:"Nenhum registro encontrado",noResults:"Nenhum resultado foi encontrado para a busca",info:"Exibindo {start} até {end} de {rows} registros"},es:{placeholder:"Búsqueda...",perPage:"{select} entradas por página",noRows:"Entradas no encontradas",noResults:"Ningún resultado coincide con su consulta de búsqueda",info:"Mostrando {start} a {end} de {rows} entradas"},de:{placeholder:"Suchen...",perPage:"{select} Einträge pro seite",noRows:"Keine Einträge gefunden",noResults:"Keine Ergebnisse stimmen mit Ihrer Suchanfrage überein",info:"Es werden {start} bis {end} von {rows} Einträgen angezeigt"},it:{placeholder:"Ricerca...",perPage:"{select} voci per pagina",noRows:"Nessuna voce trovata",noResults:"Nessun risultato corrisponde alla tua query di ricerca",info:"Visualizzazione da {start} a {end} di {rows} voci"},ru:{placeholder:"Поиск...",perPage:"{select} записей на страницу",noRows:"Записей не найдено",noResults:"По вашему запросу ничего не найдено",info:"Показаны записи с {start} по {end} из {rows} "}},a=t=>"[object Object]"===Object.prototype.toString.call(t),i=(t,e)=>{const s=document.createElement(t);if(e&&"object"==typeof e)for(const t in e)"html"===t?s.innerHTML=e[t]:s.setAttribute(t,e[t]);return s},n=t=>{t instanceof NodeList?t.forEach((t=>n(t))):t.innerHTML=""},l=(t,e,s)=>i("li",{class:t,html:`<a href="#" data-page="${e}">${s}</a>`}),o=(t,e)=>(t=(t=>{const e=document.documentElement.lang||"en",s=t.length;for(let a=0;a<s;a++)for(let a=0;a<s;a++)if(a+1<s&&t[a].value.toString().localeCompare(t[a+1].value.toString(),e,{numeric:!0})>0){const e=t[a];t[a]=t[a+1],t[a+1]=e}return t})(t),-1==e&&(t=t.reverse()),t),r=(t=!1)=>(t||(t=document.documentElement.lang||"en"),(t=t.substring(0,2).toLowerCase())in s||(t="en"),s[t]);class h{constructor(t,e){return this.dt=t,this.rows=e,this}build(t){const e=i("tr");let s=this.dt.headings;return s.length||(s=t.map((()=>""))),s.forEach(((s,a)=>{const n=i("td");t[a]&&t[a].length||(t[a]=""),n.innerHTML=t[a],n.data=t[a],e.appendChild(n)})),e}render(t){return t}add(t){if(Array.isArray(t)){const e=this.dt;Array.isArray(t[0])?t.forEach((t=>{e.data.push(this.build(t))})):e.data.push(this.build(t)),e.data.length&&(e.hasRows=!0),this.update(),e.columns().rebuild()}}remove(t){const e=this.dt;Array.isArray(t)?(t.sort(((t,e)=>e-t)),t.forEach((t=>{e.data.splice(t,1)}))):"all"==t?e.data=[]:e.data.splice(t,1),e.data.length||(e.hasRows=!1),this.update(),e.columns().rebuild()}update(){this.dt.data.forEach(((t,e)=>{t.dataIndex=e}))}findRowIndex(t,e){return this.dt.data.findIndex((s=>s.children[t].innerText.toLowerCase().includes(String(e).toLowerCase())))}findRow(t,e){const s=this.findRowIndex(t,e);if(s<0)return{index:-1,row:null,cols:[]};const a=this.dt.data[s];return{index:s,row:a,cols:[...a.cells].map((t=>t.innerHTML))}}updateRow(t,e){const s=this.build(e);this.dt.data.splice(t,1,s),this.update(),this.dt.columns().rebuild()}}class d{constructor(t){return this.dt=t,this}swap(t){if(t.length&&2===t.length){const e=[];this.dt.headings.forEach(((t,s)=>{e.push(s)}));const s=t[0],a=t[1],i=e[a];e[a]=e[s],e[s]=i,this.order(e)}}order(t){let e,s,a,i,n,l,o;const r=[[],[],[],[]],h=this.dt;t.forEach(((t,a)=>{n=h.headings[t],l="false"!==n.getAttribute("data-sortable"),e=n.cloneNode(!0),e.originalCellIndex=a,e.sortable=l,r[0].push(e),h.hiddenColumns.includes(t)||(s=n.cloneNode(!0),s.originalCellIndex=a,s.sortable=l,r[1].push(s))})),h.data.forEach(((e,s)=>{a=e.cloneNode(!1),i=e.cloneNode(!1),a.dataIndex=i.dataIndex=s,null!==e.searchIndex&&void 0!==e.searchIndex&&(a.searchIndex=i.searchIndex=e.searchIndex),t.forEach((t=>{o=e.cells[t].cloneNode(!0),o.data=e.cells[t].data,a.appendChild(o),h.hiddenColumns.includes(t)||(o=e.cells[t].cloneNode(!0),o.data=e.cells[t].data,i.appendChild(o))})),r[2].push(a),r[3].push(i)})),h.headings=r[0],h.activeHeadings=r[1],h.data=r[2],h.activeRows=r[3],h.update()}hide(t){if(t.length){const e=this.dt;t.forEach((t=>{e.hiddenColumns.includes(t)||e.hiddenColumns.push(t)})),this.rebuild()}}show(t){if(t.length){let e;const s=this.dt;t.forEach((t=>{e=s.hiddenColumns.indexOf(t),e>-1&&s.hiddenColumns.splice(e,1)})),this.rebuild()}}visible(t){let e;const s=this.dt;return t=t||s.headings.map((t=>t.originalCellIndex)),isNaN(t)?Array.isArray(t)&&(e=[],t.forEach((t=>{e.push(!s.hiddenColumns.includes(t))}))):e=!s.hiddenColumns.includes(t),e}add(t){let e;const s=document.createElement("th");if(!this.dt.headings.length)return this.dt.insert({headings:[t.heading],data:t.data.map((t=>[t]))}),void this.rebuild();this.dt.hiddenHeader?s.innerHTML="":t.heading.nodeName?s.appendChild(t.heading):s.innerHTML=t.heading,this.dt.headings.push(s),this.dt.data.forEach(((s,a)=>{t.data[a]&&(e=document.createElement("td"),t.data[a].nodeName?e.appendChild(t.data[a]):e.innerHTML=t.data[a],e.data=e.innerHTML,t.render&&(e.innerHTML=t.render.call(this,e.data,e,s)),s.appendChild(e))})),t.type&&s.setAttribute("data-type",t.type),t.format&&s.setAttribute("data-format",t.format),t.hasOwnProperty("sortable")&&(s.sortable=t.sortable,s.setAttribute("data-sortable",!0===t.sortable?"true":"false")),this.rebuild(),this.dt.renderHeader()}remove(t){Array.isArray(t)?(t.sort(((t,e)=>e-t)),t.forEach((t=>this.remove(t)))):(this.dt.headings.splice(t,1),this.dt.data.forEach((e=>{e.removeChild(e.cells[t])}))),this.rebuild()}filter(t,e,s,a){const i=this.dt;if(i.filterState||(i.filterState={originalData:i.data}),!i.filterState[t]){const e=[...a,()=>!0];i.filterState[t]=function(){let t=0;return()=>e[t++%e.length]}()}const n=i.filterState[t](),l=Array.from(i.filterState.originalData).filter((e=>{const s=e.cells[t],a=s.hasAttribute("data-content")?s.getAttribute("data-content"):s.innerText;return"function"==typeof n?n(a):a===n}));i.data=l,i.data.length?(this.rebuild(),i.update()):(i.clear(),i.hasRows=!1,i.setMessage(i.options.labels.noRows)),s||i.emit("datatable.sort",t,e)}sort(t,s,a){const i=this.dt;if(i.hasHeadings&&(t<0||t>i.headings.length))return!1;const n=i.options.filters&&i.options.filters[i.headings[t].textContent];if(n&&0!==n.length)return void this.filter(t,s,a,n);i.sorting=!0,a||i.emit("datatable.sorting",t,s);let l=i.data;const r=[],h=[];let d=0,c=0;const p=i.headings[t],u=[];if("date"===p.getAttribute("data-type")){let t=!1;p.hasAttribute("data-format")&&(t=p.getAttribute("data-format")),u.push(e.import("./date-88ffaf03.js").then((({parseDate:e})=>s=>e(s,t))))}Promise.all(u).then((e=>{const n=e[0];let u,g;Array.from(l).forEach((e=>{const s=e.cells[t],a=s.hasAttribute("data-content")?s.getAttribute("data-content"):s.innerText;let i;i=n?n(a):"string"==typeof a?a.replace(/(\$|,|\s|%)/g,""):a,parseFloat(i)==i?h[c++]={value:Number(i),row:e}:r[d++]={value:"string"==typeof a?a.toLowerCase():a,row:e}})),s||(s=p.classList.contains("asc")?"desc":"asc"),"desc"==s?(u=o(r,-1),g=o(h,-1),p.classList.remove("asc"),p.classList.add("desc")):(u=o(h,1),g=o(r,1),p.classList.remove("desc"),p.classList.add("asc")),i.lastTh&&p!=i.lastTh&&(i.lastTh.classList.remove("desc"),i.lastTh.classList.remove("asc")),i.lastTh=p,l=u.concat(g),i.data=[];const f=[];l.forEach(((t,e)=>{i.data.push(t.row),null!==t.row.searchIndex&&void 0!==t.row.searchIndex&&f.push(e)})),i.searchData=f,this.rebuild(),i.update(),a||i.emit("datatable.sort",t,s)}))}rebuild(){let t,e,s,a;const i=this.dt,n=[];i.activeRows=[],i.activeHeadings=[],i.headings.forEach(((t,e)=>{t.originalCellIndex=e,t.sortable="false"!==t.getAttribute("data-sortable"),i.hiddenColumns.includes(e)||i.activeHeadings.push(t)})),i.data.forEach(((l,o)=>{t=l.cloneNode(!1),e=l.cloneNode(!1),t.dataIndex=e.dataIndex=o,null!==l.searchIndex&&void 0!==l.searchIndex&&(t.searchIndex=e.searchIndex=l.searchIndex),Array.from(l.cells).forEach((n=>{s=n.cloneNode(!0),s.data=n.data,t.appendChild(s),i.hiddenColumns.includes(s.cellIndex)||(a=s.cloneNode(!0),a.data=s.data,e.appendChild(a))})),n.push(t),i.activeRows.push(e)})),i.data=n,i.update()}}const c=function(t){let e=!1,s=!1;if(t=t||this.options.data,this.dom.classList.add(...this.options.classes.table),t.headings){e=i("thead");const s=i("tr");t.headings.forEach((t=>{const e=i("th",{html:t});this.options.selectable&&e.classList.add("jsDataTable-select-cell"),s.appendChild(e)})),e.appendChild(s)}t.data&&t.data.length&&(s=i("tbody"),t.data.forEach((e=>{if(t.headings&&t.headings.length!==e.length)throw new Error("The number of rows do not match the number of headings");const a=i("tr");e.forEach((t=>{const e=i("td",{html:t});a.appendChild(e)})),s.appendChild(a)}))),e&&(null!==this.dom.tHead&&this.dom.removeChild(this.dom.tHead),this.dom.appendChild(e)),s&&(this.dom.tBodies.length&&this.dom.removeChild(this.dom.tBodies[0]),this.dom.appendChild(s))},p={sortable:!0,searchable:!0,paging:!0,perPage:10,perPageSelect:[5,10,15,20,25],nextPrev:!0,firstLast:!1,prevText:"&lsaquo;",nextText:"&rsaquo;",firstText:"&laquo;",lastText:"&raquo;",ellipsisText:"&hellip;",ascText:"▴",descText:"▾",truncatePager:!0,pagerDelta:2,scrollY:"",fixedColumns:!0,fixedHeight:!1,header:!0,hiddenHeader:!1,footer:!1,lang:!1,layout:{top:"{select}{search}",bottom:"{info}{pager}"},labels:r(),classes:{table:["jsDataTable-table"],header:[],input:[],selector:[],checkbox:[]}};class u{constructor(t,e={}){const s="string"==typeof t?document.querySelector(t):t;let a;if(a=e.lang?r(e.lang):p.labels,this.options={...p,...e,layout:{...p.layout,...e.layout},labels:{...a,...e.labels},classes:{...p.classes},data:{...p.data,...e.data}},e.classes)for(const[t,s]of Object.entries(this.options.classes))this.options.classes[t]=s.concat(e.classes[t]);if(this.initialized=!1,this.initialLayout=s.innerHTML,this.initialSortable=this.options.sortable,this.options.header||(this.options.sortable=!1),null===s.tHead&&(!this.options.data||this.options.data&&!this.options.data.headings)&&(this.options.sortable=!1),s.tBodies.length&&!s.tBodies[0].rows.length&&this.options.data&&!this.options.data.data)throw new Error("You seem to be using the data option, but you've not defined any rows.");this.dom=s,this.table=this.dom,this.listeners={onResize:t=>this.onResize(t)},this.init()}static extend(t,e){"function"==typeof e?u.prototype[t]=e:u[t]=e}getSelected(){let t=0;const e=document.getElementsByName("jsDataTable_select");for(let s=0;s<e.length;s++)e[s].checked&&t++;return t}init(t){if(this.initialized||this.dom.classList.contains("jsDataTable-table"))return!1;if(t){let e;if(e=t.lang?r(t.lang):r(),t={...this.options,...t,layout:{...this.options.layout,...t.layout},labels:{...e,...t.labels},classes:{...p.classes}},t.classes)for(const[e,s]of Object.entries(t.classes))t.classes[e]=s.concat(this.options.classes[e])}Object.assign(this.options,t||{}),this.currentPage=1,this.onFirstPage=!0,this.hiddenColumns=[],this.columnRenderers=[],this.selectedColumns=[],this.render(),setTimeout((()=>{this.emit("datatable.init"),this.initialized=!0,this.options.plugins&&Object.entries(this.options.plugins).forEach((([t,e])=>{this[t]&&"function"==typeof this[t]&&(this[t]=this[t](e,{createElement:i}),e.enabled&&this[t].init&&"function"==typeof this[t].init&&this[t].init())}))}),10)}render(t){if(t){switch(t){case"page":this.renderPage();break;case"pager":this.renderPager();break;case"header":this.renderHeader()}return!1}this.renderData()}renderData(){const t=this.options;let e="";if(t.data&&t.data.headings&&t.data.data){if(t.selectable&&(t.data.headings&&t.data.headings.length>0&&(t.data.headings=this.makeSelectAll(t.data.headings)),t.data.data.length>0&&t.data.data&&Array.isArray(t.data.data)))for(let e=0;e<t.data.data.length;e++)t.data.data[e]=this.makeSelect(t.data.data[e]);c.call(this)}else if(t.selectable){const t=document.createElement("th");t.classList.add("jsDataTable-select-cell"),t.appendChild(this.makeCheckbox(!0)),this.dom.tHead.rows.item(0).insertBefore(t,this.dom.tHead.rows.item(0).firstChild);const e=this.dom.tBodies[0].querySelectorAll("tr");if(e.length>0)for(let t=0;t<e.length;t++){const e=document.createElement("td");e.appendChild(this.makeCheckbox()),this.dom.tBodies[0].rows.item(t).insertCell(0).appendChild(e)}}if(this.body=this.dom.tBodies[0],this.head=this.dom.tHead,this.foot=this.dom.tFoot,this.body||(this.body=i("tbody"),this.dom.appendChild(this.body)),this.hasRows=this.body.rows.length>0,!this.head){const e=i("thead"),s=i("tr");this.hasRows&&(Array.from(this.body.rows[0].cells).forEach((()=>{s.appendChild(i("th"))})),e.appendChild(s)),this.head=e,this.dom.insertBefore(this.head,this.body),this.hiddenHeader=t.hiddenHeader}if(this.headings=[],this.hasHeadings=this.head.rows.length>0,this.hasHeadings&&(this.header=this.head.rows[0],this.headings=[].slice.call(this.header.cells)),t.header||this.head&&this.dom.removeChild(this.dom.tHead),t.footer?this.head&&!this.foot&&(this.foot=i("tfoot",{html:this.head.innerHTML}),this.dom.appendChild(this.foot)):this.foot&&this.dom.removeChild(this.dom.tFoot),this.wrapper=i("div",{class:"jsDataTable-wrapper jsDataTable-loading"}),e+="<div class='jsDataTable-top'>",e+=t.layout.top,e+="</div>",t.scrollY.length?e+=`<div class='jsDataTable-container' style='height: ${t.scrollY}; overflow-Y: auto;'></div>`:e+="<div class='jsDataTable-container'></div>",e+="<div class='jsDataTable-bottom'>",e+=t.layout.bottom,e+="</div>",e=e.replace("{info}",t.paging?"<div class='jsDataTable-info'></div>":""),t.paging&&t.perPageSelect){let s="<div class='jsDataTable-dropdown'><label>";s+=t.labels.perPage,s+="</label></div>";const a=i("select",{class:"jsDataTable-selector"});a.classList.add(...t.classes.selector),t.perPageSelect.forEach((e=>{const s=e===t.perPage,i=new Option(e,e,s,s);a.add(i)})),s=s.replace("{select}",a.outerHTML),e=e.replace("{select}",s)}else e=e.replace("{select}","");if(t.searchable){const s=`<div class='jsDataTable-search'><input class='jsDataTable-input' placeholder='${t.labels.placeholder}' type='text'></div>`;e=e.replace("{search}",s)}else e=e.replace("{search}","");this.hasHeadings&&this.render("header"),this.dom.classList.add(...this.options.classes.table),t.header&&this.dom.tHead.classList.add(...this.options.classes.header);const s=i("nav",{class:"jsDataTable-pagination"}),a=i("ul",{class:"jsDataTable-pagination-list"});s.appendChild(a),e=e.replace(/\{pager\}/g,s.outerHTML),this.wrapper.innerHTML=e,this.container=this.wrapper.querySelector(".jsDataTable-container"),this.pagers=this.wrapper.querySelectorAll(".jsDataTable-pagination-list"),this.label=this.wrapper.querySelector(".jsDataTable-info"),this.dom.parentNode.replaceChild(this.wrapper,this.dom),this.container.appendChild(this.dom),this.rect=this.dom.getBoundingClientRect(),this.data=Array.from(this.body.rows),this.activeRows=this.data.slice(),this.activeHeadings=this.headings.slice(),this.update(),this.setColumns(),this.fixHeight(),this.fixColumns(),t.header||this.wrapper.classList.add("no-header"),t.footer||this.wrapper.classList.add("no-footer"),t.sortable&&this.wrapper.classList.add("sortable"),t.searchable&&this.wrapper.classList.add("searchable"),t.fixedHeight&&this.wrapper.classList.add("fixed-height"),t.fixedColumns&&this.wrapper.classList.add("fixed-columns");this.wrapper.querySelector(".jsDataTable-input").classList.add(...t.classes.input),this.bindEvents()}getData(){const t=this.options;return void 0!==typeof t.data.data?t.data.data:[]}getOptions(){return this.options}renderPage(){if(this.hasHeadings&&(n(this.header),this.activeHeadings.forEach((t=>this.header.appendChild(t)))),this.hasRows&&this.totalPages){this.currentPage>this.totalPages&&(this.currentPage=1);const t=this.currentPage-1,e=document.createDocumentFragment();this.pages[t].forEach((t=>e.appendChild(this.rows().render(t)))),this.clear(e),this.onFirstPage=1===this.currentPage,this.onLastPage=this.currentPage===this.lastPage}else this.setMessage(this.options.labels.noRows);let t,e=0,s=0,a=0;if(this.totalPages&&(e=this.currentPage-1,s=e*this.options.perPage,a=s+this.pages[e].length,s+=1,t=this.searching?this.searchData.length:this.data.length),this.label&&this.options.labels.info.length){const e=this.options.labels.info.replace("{start}",s).replace("{end}",a).replace("{page}",this.currentPage).replace("{pages}",this.totalPages).replace("{rows}",t);this.label.innerHTML=t?e:""}1==this.currentPage&&this.fixHeight()}renderPager(){if(n(this.pagers),this.totalPages>1){const t="pager",e=document.createDocumentFragment(),s=this.onFirstPage?1:this.currentPage-1,a=this.onLastPage?this.totalPages:this.currentPage+1;this.options.firstLast&&e.appendChild(l(t,1,this.options.firstText)),this.options.nextPrev&&!this.onFirstPage&&e.appendChild(l(t,s,this.options.prevText));let n=this.links;this.options.truncatePager&&(n=((t,e,s,a,n)=>{let l;const o=2*(a=a||2);let r=e-a,h=e+a;const d=[],c=[];e<4-a+o?h=3+o:e>s-(3-a+o)&&(r=s-(2+o));for(let e=1;e<=s;e++)if(1==e||e==s||e>=r&&e<=h){const s=t[e-1];s.classList.remove("active"),d.push(s)}return d.forEach((e=>{const s=e.children[0].getAttribute("data-page");if(l){const e=l.children[0].getAttribute("data-page");if(s-e==2)c.push(t[e]);else if(s-e!=1){const t=i("li",{class:"ellipsis",html:`<a href="#">${n}</a>`});c.push(t)}}c.push(e),l=e})),c})(this.links,this.currentPage,this.pages.length,this.options.pagerDelta,this.options.ellipsisText)),this.links[this.currentPage-1].classList.add("active"),n.forEach((t=>{t.classList.remove("active"),e.appendChild(t)})),this.links[this.currentPage-1].classList.add("active"),this.options.nextPrev&&!this.onLastPage&&e.appendChild(l(t,a,this.options.nextText)),this.options.firstLast&&e.appendChild(l(t,this.totalPages,this.options.lastText)),this.pagers.forEach((t=>{t.appendChild(e.cloneNode(!0))}))}}renderHeader(){this.labels=[],this.headings&&this.headings.length&&this.headings.forEach(((t,e)=>{if(this.labels[e]=t.textContent,t.firstElementChild&&t.firstElementChild.classList.contains("jsDataTable-sorter")&&(t.innerHTML=t.firstElementChild.innerHTML),t.sortable="false"!==t.getAttribute("data-sortable"),t.originalCellIndex=e,this.options.sortable&&t.sortable){const e=i("a",{href:"#",class:"jsDataTable-sorter",html:t.innerHTML});t.innerHTML="",t.setAttribute("data-sortable",""),t.appendChild(e)}})),this.fixColumns()}bindEvents(){const t=this.options;if(t.perPageSelect){const e=this.wrapper.querySelector(".jsDataTable-selector");e&&e.addEventListener("change",(()=>{t.perPage=parseInt(e.value,10),this.update(),this.fixHeight(),this.emit("datatable.perpage",t.perPage)}),!1)}if(t.searchable&&(this.input=this.wrapper.querySelector(".jsDataTable-input"),this.input&&this.input.addEventListener("keyup",(()=>this.search(this.input.value)),!1)),this.wrapper.addEventListener("click",(e=>{const s=e.target.closest("a");s&&"a"===s.nodeName.toLowerCase()&&(s.hasAttribute("data-page")?(this.page(s.getAttribute("data-page")),e.preventDefault()):t.sortable&&s.classList.contains("jsDataTable-sorter")&&"false"!=s.parentNode.getAttribute("data-sortable")&&(this.columns().sort(this.headings.indexOf(s.parentNode)),e.preventDefault()))}),!1),t.selectable){const t=this.wrapper.querySelector("#jsDataTable_select_all");t.addEventListener("click",(e=>{if(e.isTrusted){const e=document.getElementsByName("jsDataTable_select");for(let s=0;s<e.length;s++)e[s].checked=t.checked;const s={selectedRows:this.dtCountChecked(),totalRows:e.length};this.emit("datatable.select",s)}}),!1)}window.addEventListener("resize",this.listeners.onResize)}dtCountChecked(){let t=0;const e=document.getElementsByName("jsDataTable_select");for(let s=0;s<e.length;s++)e[s].checked&&t++;return t}onResize(){this.rect=this.container.getBoundingClientRect(),this.rect.width&&this.fixColumns()}setColumns(t){if(t||this.data.forEach((t=>{Array.from(t.cells).forEach((t=>{t.data=t.innerHTML}))})),this.options.selectable&&!this.initialized){if(this.options.hasOwnProperty("columns")&&this.options.columns.length>0)for(let t=0;t<this.options.columns.length;t++)this.options.columns[t].select=this.options.columns[t].select+1;else this.options.columns=[];this.options.columns.unshift({select:0,sortable:!1})}this.options.columns&&this.headings.length&&this.options.columns.forEach((t=>{Array.isArray(t.select)||(t.select=[t.select]),t.hasOwnProperty("render")&&"function"==typeof t.render&&(this.selectedColumns=this.selectedColumns.concat(t.select),this.columnRenderers.push({columns:t.select,renderer:t.render})),t.select.forEach((e=>{const s=this.headings[e];t.type&&s.setAttribute("data-type",t.type),t.format&&s.setAttribute("data-format",t.format),t.hasOwnProperty("sortable")&&s.setAttribute("data-sortable",t.sortable),t.hasOwnProperty("hidden")&&!1!==t.hidden&&this.columns().hide([e]),t.hasOwnProperty("sort")&&1===t.select.length&&this.columns().sort(t.select[0],t.sort,!0)}))})),this.hasRows&&(this.data.forEach(((t,e)=>{t.dataIndex=e,Array.from(t.cells).forEach((t=>{t.data=t.innerHTML}))})),this.selectedColumns.length&&this.data.forEach((t=>{Array.from(t.cells).forEach(((e,s)=>{this.selectedColumns.includes(s)&&this.columnRenderers.forEach((a=>{a.columns.includes(s)&&(e.innerHTML=a.renderer.call(this,e.data,e,t))}))}))})),this.columns().rebuild()),this.render("header")}destroy(){if(this.dom.innerHTML=this.initialLayout,this.options.selectable)if(this.options.columns.shift(),this.options.hasOwnProperty("columns")&&this.options.columns.length>0)for(let t=0;t<this.options.columns.length;t++)this.options.columns[t].select=this.options.columns[t].select-1;else this.options.columns=[];this.dom.classList.remove("jsDataTable-table"),this.wrapper.parentNode.replaceChild(this.dom,this.wrapper),this.initialized=!1,window.removeEventListener("resize",this.listeners.onResize)}update(){this.wrapper.classList.remove("jsDataTable-empty"),this.paginate(this),this.render("page"),this.links=[];let t=this.pages.length;for(;t--;){const e=t+1;this.links[t]=l(0===t?"active":"",e,e)}if(this.sorting=!1,this.render("pager"),this.rows().update(),this.options.selectable){const t=document.querySelectorAll(".jsDataTable_select");if(t.length>0)for(let e=0;e<t.length;e++)t[e].onclick=t=>{t.isTrusted&&this.dtToggleIndividual()}}this.emit("datatable.update")}dtToggleIndividual(){const t=this.wrapper.querySelectorAll(".jsDataTable_select"),e={selectedRows:this.dtCountChecked(),totalRows:t.length},s=this.wrapper.querySelector("#jsDataTable_select_all");e.selectedRows==e.totalRows?(s.checked=!0,s.indeterminate=!1):e.selectedRows>0?(s.checked=!1,s.indeterminate=!0):(s.checked=!1,s.indeterminate=!1),this.emit("datatable.select",e)}paginate(){const t=this.options.perPage;let e=this.activeRows;return this.searching&&(e=[],this.searchData.forEach((t=>e.push(this.activeRows[t])))),this.options.paging?this.pages=e.map(((s,a)=>a%t==0?e.slice(a,a+t):null)).filter((t=>t)):this.pages=[e],this.totalPages=this.lastPage=this.pages.length,this.totalPages}fixColumns(){if((this.options.scrollY.length||this.options.fixedColumns)&&this.activeHeadings&&this.activeHeadings.length){let t,e=!1;if(this.columnWidths=[],this.dom.tHead){if(this.options.scrollY.length&&(e=i("thead"),e.appendChild(i("tr")),e.style.height="0px",this.headerTable&&(this.dom.tHead=this.headerTable.tHead)),this.activeHeadings.forEach((t=>{t.style.width=""})),this.activeHeadings.forEach(((t,s)=>{const a=t.offsetWidth,n=a/this.rect.width*100;if(t.style.width=`${n}%`,this.columnWidths[s]=a,this.options.scrollY.length){const t=i("th");e.firstElementChild.appendChild(t),t.style.width=`${n}%`,t.style.paddingTop="0",t.style.paddingBottom="0",t.style.border="0"}})),this.options.scrollY.length){const t=this.dom.parentElement;if(!this.headerTable){this.headerTable=i("table",{class:"jsDataTable-table"});const e=i("div",{class:"jsDataTable-headercontainer"});e.appendChild(this.headerTable),t.parentElement.insertBefore(e,t)}const s=this.dom.tHead;this.dom.replaceChild(e,s),this.headerTable.tHead=s,this.headerTable.parentElement.style.paddingRight=`${this.headerTable.clientWidth-this.dom.clientWidth+parseInt(this.headerTable.parentElement.style.paddingRight||"0",10)}px`,t.scrollHeight>t.clientHeight&&(t.style.overflowY="scroll")}}else{t=[],e=i("thead");const s=i("tr");Array.from(this.dom.tBodies[0].rows[0].cells).forEach((()=>{const e=i("th");s.appendChild(e),t.push(e)})),e.appendChild(s),this.dom.insertBefore(e,this.body);const a=[];t.forEach(((t,e)=>{const s=t.offsetWidth,i=s/this.rect.width*100;a.push(i),this.columnWidths[e]=s})),this.data.forEach((t=>{Array.from(t.cells).forEach(((t,e)=>{this.columns(t.cellIndex).visible()&&(t.style.width=`${a[e]}%`)}))})),this.dom.removeChild(e)}}}fixHeight(){this.options.fixedHeight&&(this.container.style.height=null,this.rect=this.container.getBoundingClientRect(),this.container.style.height=`${this.rect.height}px`)}removeDiacritics(t){return t.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}search(t){return!!this.hasRows&&(t=t.toLowerCase(),this.currentPage=1,this.searching=!0,this.searchData=[],t.length?(this.clear(),this.data.forEach(((e,s)=>{const a=this.searchData.includes(e);t.split(" ").reduce(((t,s)=>{let a=!1,i=null,n=null;for(let t=0;t<e.cells.length;t++){i=e.cells[t],n=i.hasAttribute("data-content")?i.getAttribute("data-content"):i.textContent;const l=this.removeDiacritics(n.toLowerCase()),o=this.removeDiacritics(s);if(l.includes(o)&&this.columns(i.cellIndex).visible()){a=!0;break}}return t&&a}),!0)&&!a?(e.searchIndex=s,this.searchData.push(s)):e.searchIndex=null})),this.wrapper.classList.add("search-results"),this.searchData.length?this.update():(this.wrapper.classList.remove("search-results"),this.setMessage(this.options.labels.noResults)),void this.emit("datatable.search",t,this.searchData)):(this.searching=!1,this.update(),this.emit("datatable.search",t,this.searchData),this.wrapper.classList.remove("search-results"),!1))}page(t){return t!=this.currentPage&&(isNaN(t)||(this.currentPage=parseInt(t,10)),!(t>this.pages.length||t<0)&&(this.render("page"),this.render("pager"),void this.emit("datatable.page",t)))}sortColumn(t,e){this.columns().sort(t,e)}makeCheckbox(t=!1){let e="jsDataTable_select";t&&(e=`${e}_all`);const s=document.createElement("input");return s.type="checkbox",s.name=e,t&&(s.id=e),s.autocomplete=!1,s.classList.add(e),s.classList.add(...this.options.classes.checkbox),s.autocomplete=!1,s}makeSelect(t){const e=this.makeCheckbox();return t.unshift(e.outerHTML),t}makeSelectAll(t){const e=this.makeCheckbox(!0);return t.unshift(e.outerHTML),t}insert(t){let e=[];if(a(t)){if(t.headings&&!this.hasHeadings&&!this.hasRows){const e=i("tr");t.headings.forEach((t=>{const s=i("th",{html:t});e.appendChild(s)})),this.head.appendChild(e),this.header=e,this.headings=[].slice.call(e.cells),this.hasHeadings=!0,this.options.sortable=this.initialSortable,this.render("header"),this.activeHeadings=this.headings.slice()}if(t.data&&Array.isArray(t.data)){t.data=this.preparedData(t.data);for(let e=0;e<t.data.length;e++)t.data[e]=this.makeSelect(t.data[e]);e=t.data}}else Array.isArray(t)&&t.forEach((t=>{const s=[];Object.entries(t).forEach((([t,e])=>{const a=this.labels.indexOf(t);a>-1&&(s[a]=e)})),e.push(s)}));e.length&&(this.rows().add(e),this.hasRows=!0),this.update(),this.setColumns(),this.fixColumns()}preparedData(t){const e=[];for(let s=0;s<t.length;s++){let a=[];if("object"==typeof t[s]&&null!==t[s]){a=Object.values(t[s]);for(let t=0;t<a.length;t++)"string"!=typeof a[t]&&(a[t]=`${a[t]}`)}else if(Array.isArray(t[s])){for(let e=0;e<t[s].length;e++)"string"!=typeof t[s][e]&&(t[s][e]=`${t[s][e]}`);a=t[s]}a.length>0&&e.push(a)}return e}refresh(){this.options.searchable&&(this.input.value="",this.searching=!1),this.currentPage=1,this.onFirstPage=!0,this.update(),this.emit("datatable.refresh")}clear(t){this.body&&n(this.body);let e=this.body;if(this.body||(e=this.dom),t){if("string"==typeof t){document.createDocumentFragment().innerHTML=t}e.appendChild(t)}}export(t){if(!this.hasHeadings&&!this.hasRows)return!1;const e=this.activeHeadings;let s=[];const i=[];let n,l,o,r;if(!a(t))return!1;const h={download:!0,skipColumn:[],lineDelimiter:"\n",columnDelimiter:",",tableName:"myTable",replacer:null,space:4,...t};if(h.type){if("txt"!==h.type&&"csv"!==h.type||(s[0]=this.header),h.selection)if(isNaN(h.selection)){if(Array.isArray(h.selection))for(n=0;n<h.selection.length;n++)s=s.concat(this.pages[h.selection[n]-1])}else s=s.concat(this.pages[h.selection-1]);else s=s.concat(this.activeRows);if(s.length){if("txt"===h.type||"csv"===h.type){for(o="",n=0;n<s.length;n++){for(l=0;l<s[n].cells.length;l++)if(!h.skipColumn.includes(e[l].originalCellIndex)&&this.columns(e[l].originalCellIndex).visible()){let t=s[n].cells[l].textContent;t=t.trim(),t=t.replace(/\s{2,}/g," "),t=t.replace(/\n/g,"  "),t=t.replace(/"/g,'""'),t=t.replace(/#/g,"%23"),t.includes(",")&&(t=`"${t}"`),o+=t+h.columnDelimiter}o=o.trim().substring(0,o.length-1),o+=h.lineDelimiter}o=o.trim().substring(0,o.length-1),h.download&&(o=`data:text/csv;charset=utf-8,${o}`)}else if("sql"===h.type){for(o=`INSERT INTO \`${h.tableName}\` (`,n=0;n<e.length;n++)!h.skipColumn.includes(e[n].originalCellIndex)&&this.columns(e[n].originalCellIndex).visible()&&(o+=`\`${e[n].textContent}\`,`);for(o=o.trim().substring(0,o.length-1),o+=") VALUES ",n=0;n<s.length;n++){for(o+="(",l=0;l<s[n].cells.length;l++)!h.skipColumn.includes(e[l].originalCellIndex)&&this.columns(e[l].originalCellIndex).visible()&&(o+=`"${s[n].cells[l].textContent}",`);o=o.trim().substring(0,o.length-1),o+="),"}o=o.trim().substring(0,o.length-1),o+=";",h.download&&(o=`data:application/sql;charset=utf-8,${o}`)}else if("json"===h.type){for(l=0;l<s.length;l++)for(i[l]=i[l]||{},n=0;n<e.length;n++)!h.skipColumn.includes(e[n].originalCellIndex)&&this.columns(e[n].originalCellIndex).visible()&&(i[l][e[n].textContent]=s[l].cells[n].textContent);o=JSON.stringify(i,h.replacer,h.space),h.download&&(o=`data:application/json;charset=utf-8,${o}`)}return h.download&&(h.filename=h.filename||"datatable_export",h.filename+=`.${h.type}`,o=encodeURI(o),r=document.createElement("a"),r.href=o,r.download=h.filename,document.body.appendChild(r),r.click(),document.body.removeChild(r)),o}}return!1}import(t){let e=!1;if(!a(t))return!1;const s={lineDelimiter:"\n",columnDelimiter:",",...t};if(s.data.length||a(s.data)){if("csv"===s.type){e={data:[]};const t=s.data.split(s.lineDelimiter);t.length&&(s.headings&&(e.headings=t[0].split(s.columnDelimiter),t.shift()),t.forEach(((t,a)=>{e.data[a]=[];const i=t.split(s.columnDelimiter);i.length&&i.forEach((t=>{e.data[a].push(t)}))})))}else if("json"===s.type){const t=(t=>{let e=!1;try{e=JSON.parse(t)}catch(t){return!1}return!(null===e||!Array.isArray(e)&&!a(e))&&e})(s.data);t&&(e={headings:[],data:[]},t.forEach(((t,s)=>{e.data[s]=[],Object.entries(t).forEach((([t,a])=>{e.headings.includes(t)||e.headings.push(t),e.data[s].push(a)}))})))}a(s.data)&&(e=s.data),e&&this.insert(e)}return!1}print(){const t=this.activeHeadings,e=this.activeRows,s=i("table"),a=i("thead"),n=i("tbody"),l=i("tr");t.forEach((t=>{l.appendChild(i("th",{html:t.textContent}))})),a.appendChild(l),e.forEach((t=>{const e=i("tr");Array.from(t.cells).forEach((t=>{e.appendChild(i("td",{html:t.textContent}))})),n.appendChild(e)})),s.appendChild(a),s.appendChild(n);const o=window.open();o.document.body.appendChild(s),o.print()}setMessage(t){let e=1;this.hasRows?e=this.data[0].cells.length:this.activeHeadings.length&&(e=this.activeHeadings.length),this.wrapper.classList.add("jsDataTable-empty"),this.label&&(this.label.innerHTML=""),this.totalPages=0,this.render("pager"),this.clear(i("tr",{html:`<td class="jsDataTables-empty" colspan="${e}">${t}</td>`}))}columns(t){return new d(this,t)}rows(t){return new h(this,t)}on(t,e){this.events=this.events||{},this.events[t]=this.events[t]||[],this.events[t].push(e)}off(t,e){this.events=this.events||{},t in this.events!=!1&&this.events[t].splice(this.events[t].indexOf(e),1)}emit(t){if(this.events=this.events||{},t in this.events!=!1)for(let e=0;e<this.events[t].length;e++)this.events[t][e].apply(this,Array.prototype.slice.call(arguments,1))}}t("JSDataTable",u)}}}));
//# sourceMappingURL=jsdatatables.js.map
