"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e={en:{placeholder:"Search...",perPage:"{select} entries per page",noRows:"No entries found",noResults:"No results match your search query",info:"Showing {start} to {end} of {rows} entries"},pt:{placeholder:"Buscar...",perPage:"{select} registros por página",noRows:"Nenhum registro encontrado",noResults:"Nenhum resultado foi encontrado para a busca",info:"Exibindo {start} até {end} de {rows} registros"},es:{placeholder:"Búsqueda...",perPage:"{select} entradas por página",noRows:"Entradas no encontradas",noResults:"Ningún resultado coincide con su consulta de búsqueda",info:"Mostrando {start} a {end} de {rows} entradas"},de:{placeholder:"Suchen...",perPage:"{select} Einträge pro seite",noRows:"Keine Einträge gefunden",noResults:"Keine Ergebnisse stimmen mit Ihrer Suchanfrage überein",info:"Es werden {start} bis {end} von {rows} Einträgen angezeigt"},it:{placeholder:"Ricerca...",perPage:"{select} voci per pagina",noRows:"Nessuna voce trovata",noResults:"Nessun risultato corrisponde alla tua query di ricerca",info:"Visualizzazione da {start} a {end} di {rows} voci"},ru:{placeholder:"Поиск...",perPage:"{select} записей на страницу",noRows:"Записей не найдено",noResults:"По вашему запросу ничего не найдено",info:"Показаны записи с {start} по {end} из {rows} "}},t=e=>"[object Object]"===Object.prototype.toString.call(e),s=(e,t)=>{const s=document.createElement(e);if(t&&"object"==typeof t)for(const e in t)"html"===e?s.innerHTML=t[e]:s.setAttribute(e,t[e]);return s},a=e=>{e instanceof NodeList?e.forEach((e=>a(e))):e.innerHTML=""},i=(e,t,a)=>s("li",{class:e,html:`<a href="#" data-page="${t}">${a}</a>`}),n=(e,t)=>(e=(e=>{const t=document.documentElement.lang||"en",s=e.length;for(let a=0;a<s;a++)for(let a=0;a<s;a++)if(a+1<s&&e[a].value.toString().localeCompare(e[a+1].value.toString(),t,{numeric:!0})>0){const t=e[a];e[a]=e[a+1],e[a+1]=t}return e})(e),-1==t&&(e=e.reverse()),e),l=(t=!1)=>(t||(t=document.documentElement.lang||"en"),(t=t.substring(0,2).toLowerCase())in e||(t="en"),e[t]);class o{constructor(e,t){return this.dt=e,this.rows=t,this}build(e){const t=s("tr");let a=this.dt.headings;return a.length||(a=e.map((()=>""))),a.forEach(((a,i)=>{const n=s("td");e[i]&&e[i].length||(e[i]=""),n.innerHTML=e[i],n.data=e[i],t.appendChild(n)})),t}render(e){return e}add(e){if(Array.isArray(e)){const t=this.dt;Array.isArray(e[0])?e.forEach((e=>{t.data.push(this.build(e))})):t.data.push(this.build(e)),t.data.length&&(t.hasRows=!0),this.update(),t.columns().rebuild()}}remove(e){const t=this.dt;Array.isArray(e)?(e.sort(((e,t)=>t-e)),e.forEach((e=>{t.data.splice(e,1)}))):"all"==e?t.data=[]:t.data.splice(e,1),t.data.length||(t.hasRows=!1),this.update(),t.columns().rebuild()}update(){this.dt.data.forEach(((e,t)=>{e.dataIndex=t}))}findRowIndex(e,t){return this.dt.data.findIndex((s=>s.children[e].innerText.toLowerCase().includes(String(t).toLowerCase())))}findRow(e,t){const s=this.findRowIndex(e,t);if(s<0)return{index:-1,row:null,cols:[]};const a=this.dt.data[s];return{index:s,row:a,cols:[...a.cells].map((e=>e.innerHTML))}}updateRow(e,t){const s=this.build(t);this.dt.data.splice(e,1,s),this.update(),this.dt.columns().rebuild()}}class r{constructor(e){return this.dt=e,this}swap(e){if(e.length&&2===e.length){const t=[];this.dt.headings.forEach(((e,s)=>{t.push(s)}));const s=e[0],a=e[1],i=t[a];t[a]=t[s],t[s]=i,this.order(t)}}order(e){let t,s,a,i,n,l,o;const r=[[],[],[],[]],h=this.dt;e.forEach(((e,a)=>{n=h.headings[e],l="false"!==n.getAttribute("data-sortable"),t=n.cloneNode(!0),t.originalCellIndex=a,t.sortable=l,r[0].push(t),h.hiddenColumns.includes(e)||(s=n.cloneNode(!0),s.originalCellIndex=a,s.sortable=l,r[1].push(s))})),h.data.forEach(((t,s)=>{a=t.cloneNode(!1),i=t.cloneNode(!1),a.dataIndex=i.dataIndex=s,null!==t.searchIndex&&void 0!==t.searchIndex&&(a.searchIndex=i.searchIndex=t.searchIndex),e.forEach((e=>{o=t.cells[e].cloneNode(!0),o.data=t.cells[e].data,a.appendChild(o),h.hiddenColumns.includes(e)||(o=t.cells[e].cloneNode(!0),o.data=t.cells[e].data,i.appendChild(o))})),r[2].push(a),r[3].push(i)})),h.headings=r[0],h.activeHeadings=r[1],h.data=r[2],h.activeRows=r[3],h.update()}hide(e){if(e.length){const t=this.dt;e.forEach((e=>{t.hiddenColumns.includes(e)||t.hiddenColumns.push(e)})),this.rebuild()}}show(e){if(e.length){let t;const s=this.dt;e.forEach((e=>{t=s.hiddenColumns.indexOf(e),t>-1&&s.hiddenColumns.splice(t,1)})),this.rebuild()}}visible(e){let t;const s=this.dt;return e=e||s.headings.map((e=>e.originalCellIndex)),isNaN(e)?Array.isArray(e)&&(t=[],e.forEach((e=>{t.push(!s.hiddenColumns.includes(e))}))):t=!s.hiddenColumns.includes(e),t}add(e){let t;const s=document.createElement("th");if(!this.dt.headings.length)return this.dt.insert({headings:[e.heading],data:e.data.map((e=>[e]))}),void this.rebuild();this.dt.hiddenHeader?s.innerHTML="":e.heading.nodeName?s.appendChild(e.heading):s.innerHTML=e.heading,this.dt.headings.push(s),this.dt.data.forEach(((s,a)=>{e.data[a]&&(t=document.createElement("td"),e.data[a].nodeName?t.appendChild(e.data[a]):t.innerHTML=e.data[a],t.data=t.innerHTML,e.render&&(t.innerHTML=e.render.call(this,t.data,t,s)),s.appendChild(t))})),e.type&&s.setAttribute("data-type",e.type),e.format&&s.setAttribute("data-format",e.format),e.hasOwnProperty("sortable")&&(s.sortable=e.sortable,s.setAttribute("data-sortable",!0===e.sortable?"true":"false")),this.rebuild(),this.dt.renderHeader()}remove(e){Array.isArray(e)?(e.sort(((e,t)=>t-e)),e.forEach((e=>this.remove(e)))):(this.dt.headings.splice(e,1),this.dt.data.forEach((t=>{t.removeChild(t.cells[e])}))),this.rebuild()}filter(e,t,s,a){const i=this.dt;if(i.filterState||(i.filterState={originalData:i.data}),!i.filterState[e]){const t=[...a,()=>!0];i.filterState[e]=function(){let e=0;return()=>t[e++%t.length]}()}const n=i.filterState[e](),l=Array.from(i.filterState.originalData).filter((t=>{const s=t.cells[e],a=s.hasAttribute("data-content")?s.getAttribute("data-content"):s.innerText;return"function"==typeof n?n(a):a===n}));i.data=l,i.data.length?(this.rebuild(),i.update()):(i.clear(),i.hasRows=!1,i.setMessage(i.options.labels.noRows)),s||i.emit("datatable.sort",e,t)}sort(e,t,s){const a=this.dt;if(a.hasHeadings&&(e<0||e>a.headings.length))return!1;const i=a.options.filters&&a.options.filters[a.headings[e].textContent];if(i&&0!==i.length)return void this.filter(e,t,s,i);a.sorting=!0,s||a.emit("datatable.sorting",e,t);let l=a.data;const o=[],r=[];let h=0,d=0;const c=a.headings[e],p=[];if("date"===c.getAttribute("data-type")){let e=!1;c.hasAttribute("data-format")&&(e=c.getAttribute("data-format")),p.push(Promise.resolve().then((function(){return require("./date-c11e386b.js")})).then((({parseDate:t})=>s=>t(s,e))))}Promise.all(p).then((i=>{const p=i[0];let u,g;Array.from(l).forEach((t=>{const s=t.cells[e],a=s.hasAttribute("data-content")?s.getAttribute("data-content"):s.innerText;let i;i=p?p(a):"string"==typeof a?a.replace(/(\$|,|\s|%)/g,""):a,parseFloat(i)==i?r[d++]={value:Number(i),row:t}:o[h++]={value:"string"==typeof a?a.toLowerCase():a,row:t}})),t||(t=c.classList.contains("asc")?"desc":"asc"),"desc"==t?(u=n(o,-1),g=n(r,-1),c.classList.remove("asc"),c.classList.add("desc")):(u=n(r,1),g=n(o,1),c.classList.remove("desc"),c.classList.add("asc")),a.lastTh&&c!=a.lastTh&&(a.lastTh.classList.remove("desc"),a.lastTh.classList.remove("asc")),a.lastTh=c,l=u.concat(g),a.data=[];const f=[];l.forEach(((e,t)=>{a.data.push(e.row),null!==e.row.searchIndex&&void 0!==e.row.searchIndex&&f.push(t)})),a.searchData=f,this.rebuild(),a.update(),s||a.emit("datatable.sort",e,t)}))}rebuild(){let e,t,s,a;const i=this.dt,n=[];i.activeRows=[],i.activeHeadings=[],i.headings.forEach(((e,t)=>{e.originalCellIndex=t,e.sortable="false"!==e.getAttribute("data-sortable"),i.hiddenColumns.includes(t)||i.activeHeadings.push(e)})),i.data.forEach(((l,o)=>{e=l.cloneNode(!1),t=l.cloneNode(!1),e.dataIndex=t.dataIndex=o,null!==l.searchIndex&&void 0!==l.searchIndex&&(e.searchIndex=t.searchIndex=l.searchIndex),Array.from(l.cells).forEach((n=>{s=n.cloneNode(!0),s.data=n.data,e.appendChild(s),i.hiddenColumns.includes(s.cellIndex)||(a=s.cloneNode(!0),a.data=s.data,t.appendChild(a))})),n.push(e),i.activeRows.push(t)})),i.data=n,i.update()}}const h=function(e){let t=!1,a=!1;if(e=e||this.options.data,this.dom.classList.add(...this.options.classes.table),e.headings){t=s("thead");const a=s("tr");e.headings.forEach(((e,t)=>{const i=s("th",{html:e});this.options.selectable&&0==t&&i.classList.add("jsDataTable-select-cell"),a.appendChild(i)})),t.appendChild(a)}e.data&&e.data.length&&(a=s("tbody"),e.data.forEach((t=>{if(e.headings&&e.headings.length!==t.length)throw new Error("The number of rows do not match the number of headings");const i=s("tr");t.forEach((e=>{const t=s("td",{html:e});i.appendChild(t)})),a.appendChild(i)}))),t&&(null!==this.dom.tHead&&this.dom.removeChild(this.dom.tHead),this.dom.appendChild(t)),a&&(this.dom.tBodies.length&&this.dom.removeChild(this.dom.tBodies[0]),this.dom.appendChild(a))},d={sortable:!0,searchable:!0,paging:!0,perPage:10,perPageSelect:[5,10,15,20,25],nextPrev:!0,firstLast:!1,prevText:"&lsaquo;",nextText:"&rsaquo;",firstText:"&laquo;",lastText:"&raquo;",ellipsisText:"&hellip;",ascText:"▴",descText:"▾",truncatePager:!0,pagerDelta:2,scrollY:"",fixedColumns:!0,fixedHeight:!1,header:!0,hiddenHeader:!1,footer:!1,lang:!1,layout:{top:"{select}{search}",bottom:"{info}{pager}"},labels:l(),classes:{table:["jsDataTable-table"],header:[],input:[],selector:[],checkbox:[]}};class c{constructor(e,t={}){const s="string"==typeof e?document.querySelector(e):e;let a;if(a=t.lang?l(t.lang):d.labels,this.options={...d,...t,layout:{...d.layout,...t.layout},labels:{...a,...t.labels},classes:{...d.classes}},t.classes)for(const[e,s]of Object.entries(this.options.classes))this.options.classes[e]=s.concat(t.classes[e]);if(this.initialized=!1,this.initialLayout=s.innerHTML,this.initialSortable=this.options.sortable,this.options.header||(this.options.sortable=!1),null===s.tHead&&(!this.options.data||this.options.data&&!this.options.data.headings)&&(this.options.sortable=!1),s.tBodies.length&&!s.tBodies[0].rows.length&&this.options.data&&!this.options.data.data)throw new Error("You seem to be using the data option, but you've not defined any rows.");this.dom=s,this.table=this.dom,this.listeners={onResize:e=>this.onResize(e)},this.init()}static extend(e,t){"function"==typeof t?c.prototype[e]=t:c[e]=t}getSelected(){let e=0;const t=document.getElementsByName("jsDataTable_select");for(let s=0;s<t.length;s++)t[s].checked&&e++;return e}getSelectedRows(){const e=[],t=document.getElementsByName("jsDataTable_select");for(let s=0;s<t.length;s++)t[s].checked&&e.push(t[s].closest("tr").dataIndex);return e}init(e){if(this.initialized||this.dom.classList.contains("jsDataTable-table"))return!1;if(e){let t;if(t=e.lang?l(e.lang):l(),e={...this.options,...e,layout:{...this.options.layout,...e.layout},labels:{...t,...e.labels},classes:{...d.classes}},e.classes)for(const[t,s]of Object.entries(e.classes))e.classes[t]=s.concat(this.options.classes[t])}Object.assign(this.options,e||{}),this.currentPage=1,this.onFirstPage=!0,this.hiddenColumns=[],this.columnRenderers=[],this.selectedColumns=[],this.render(),setTimeout((()=>{this.emit("datatable.init"),this.initialized=!0,this.options.plugins&&Object.entries(this.options.plugins).forEach((([e,t])=>{this[e]&&"function"==typeof this[e]&&(this[e]=this[e](t,{createElement:s}),t.enabled&&this[e].init&&"function"==typeof this[e].init&&this[e].init())}))}),10)}render(e){if(e){switch(e){case"page":this.renderPage();break;case"pager":this.renderPager();break;case"header":this.renderHeader()}return!1}this.renderData()}renderData(){const e=this.options;let t="";if(e.data){if(e.selectable&&(e.data.headings&&e.data.headings.length>0&&(e.data.headings=this.makeSelectAll(e.data.headings)),e.data.data.length>0&&e.data.data&&Array.isArray(e.data.data)))for(let t=0;t<e.data.data.length;t++)e.data.data[t]=this.makeSelect(e.data.data[t]);h.call(this)}else if(e.selectable){const e=document.createElement("th");e.classList.add("jsDataTable-select-cell"),e.appendChild(this.makeCheckbox(!0)),this.dom.tHead.rows.item(0).insertBefore(e,this.dom.tHead.rows.item(0).firstChild);const t=this.dom.tBodies[0].querySelectorAll("tr");if(t.length>0)for(let e=0;e<t.length;e++){const t=document.createElement("td");t.appendChild(this.makeCheckbox()),this.dom.tBodies[0].rows.item(e).insertCell(0).appendChild(t)}}if(this.body=this.dom.tBodies[0],this.head=this.dom.tHead,this.foot=this.dom.tFoot,this.body||(this.body=s("tbody"),this.dom.appendChild(this.body)),this.hasRows=this.body.rows.length>0,!this.head){const t=s("thead"),a=s("tr");this.hasRows&&(Array.from(this.body.rows[0].cells).forEach((()=>{a.appendChild(s("th"))})),t.appendChild(a)),this.head=t,this.dom.insertBefore(this.head,this.body),this.hiddenHeader=e.hiddenHeader}if(this.headings=[],this.hasHeadings=this.head.rows.length>0,this.hasHeadings&&(this.header=this.head.rows[0],this.headings=[].slice.call(this.header.cells)),e.header||this.head&&this.dom.removeChild(this.dom.tHead),e.footer?this.head&&!this.foot&&(this.foot=s("tfoot",{html:this.head.innerHTML}),this.dom.appendChild(this.foot)):this.foot&&this.dom.removeChild(this.dom.tFoot),this.wrapper=s("div",{class:"jsDataTable-wrapper jsDataTable-loading"}),t+="<div class='jsDataTable-top'>",t+=e.layout.top,t+="</div>",e.scrollY.length?t+=`<div class='jsDataTable-container' style='height: ${e.scrollY}; overflow-Y: auto;'></div>`:t+="<div class='jsDataTable-container'></div>",t+="<div class='jsDataTable-bottom'>",t+=e.layout.bottom,t+="</div>",t=t.replace("{info}",e.paging?"<div class='jsDataTable-info'></div>":""),e.paging&&e.perPageSelect){let a="<div class='jsDataTable-dropdown'><label>";a+=e.labels.perPage,a+="</label></div>";const i=s("select",{class:"jsDataTable-selector"});i.classList.add(...e.classes.selector),e.perPageSelect.forEach((t=>{const s=t===e.perPage,a=new Option(t,t,s,s);i.add(a)})),a=a.replace("{select}",i.outerHTML),t=t.replace("{select}",a)}else t=t.replace("{select}","");if(e.searchable){const s=`<div class='jsDataTable-search'><input class='jsDataTable-input' placeholder='${e.labels.placeholder}' type='text'></div>`;t=t.replace("{search}",s)}else t=t.replace("{search}","");this.hasHeadings&&this.render("header"),this.dom.classList.add(...this.options.classes.table),e.header&&this.dom.tHead.classList.add(...this.options.classes.header);const a=s("nav",{class:"jsDataTable-pagination"}),i=s("ul",{class:"jsDataTable-pagination-list"});a.appendChild(i),t=t.replace(/\{pager\}/g,a.outerHTML),this.wrapper.innerHTML=t,this.container=this.wrapper.querySelector(".jsDataTable-container"),this.pagers=this.wrapper.querySelectorAll(".jsDataTable-pagination-list"),this.label=this.wrapper.querySelector(".jsDataTable-info"),this.dom.parentNode.replaceChild(this.wrapper,this.dom),this.container.appendChild(this.dom),this.rect=this.dom.getBoundingClientRect(),this.data=Array.from(this.body.rows),this.activeRows=this.data.slice(),this.activeHeadings=this.headings.slice(),this.update(),this.setColumns(),this.fixHeight(),this.fixColumns(),e.header||this.wrapper.classList.add("no-header"),e.footer||this.wrapper.classList.add("no-footer"),e.sortable&&this.wrapper.classList.add("sortable"),e.searchable&&this.wrapper.classList.add("searchable"),e.fixedHeight&&this.wrapper.classList.add("fixed-height"),e.fixedColumns&&this.wrapper.classList.add("fixed-columns");this.wrapper.querySelector(".jsDataTable-input").classList.add(...e.classes.input),this.bindEvents()}getData(){const e=this.options;return void 0!==typeof e.data.data?e.data.data:[]}getOptions(){return this.options}renderPage(){if(this.hasHeadings&&(a(this.header),this.activeHeadings.forEach((e=>this.header.appendChild(e)))),this.hasRows&&this.totalPages){this.currentPage>this.totalPages&&(this.currentPage=1);const e=this.currentPage-1,t=document.createDocumentFragment();this.pages[e].forEach((e=>t.appendChild(this.rows().render(e)))),this.clear(t),this.onFirstPage=1===this.currentPage,this.onLastPage=this.currentPage===this.lastPage}else this.setMessage(this.options.labels.noRows);let e,t=0,s=0,i=0;if(this.totalPages&&(t=this.currentPage-1,s=t*this.options.perPage,i=s+this.pages[t].length,s+=1,e=this.searching?this.searchData.length:this.data.length),this.label&&this.options.labels.info.length){const t=this.options.labels.info.replace("{start}",s).replace("{end}",i).replace("{page}",this.currentPage).replace("{pages}",this.totalPages).replace("{rows}",e);this.label.innerHTML=e?t:""}1==this.currentPage&&this.fixHeight(),this.updateToggleEvents()}renderPager(){if(a(this.pagers),this.totalPages>1){const e="pager",t=document.createDocumentFragment(),a=this.onFirstPage?1:this.currentPage-1,n=this.onLastPage?this.totalPages:this.currentPage+1;this.options.firstLast&&t.appendChild(i(e,1,this.options.firstText)),this.options.nextPrev&&!this.onFirstPage&&t.appendChild(i(e,a,this.options.prevText));let l=this.links;this.options.truncatePager&&(l=((e,t,a,i,n)=>{let l;const o=2*(i=i||2);let r=t-i,h=t+i;const d=[],c=[];t<4-i+o?h=3+o:t>a-(3-i+o)&&(r=a-(2+o));for(let t=1;t<=a;t++)if(1==t||t==a||t>=r&&t<=h){const s=e[t-1];s.classList.remove("active"),d.push(s)}return d.forEach((t=>{const a=t.children[0].getAttribute("data-page");if(l){const t=l.children[0].getAttribute("data-page");if(a-t==2)c.push(e[t]);else if(a-t!=1){const e=s("li",{class:"ellipsis",html:`<a href="#">${n}</a>`});c.push(e)}}c.push(t),l=t})),c})(this.links,this.currentPage,this.pages.length,this.options.pagerDelta,this.options.ellipsisText)),this.links[this.currentPage-1].classList.add("active"),l.forEach((e=>{e.classList.remove("active"),t.appendChild(e)})),this.links[this.currentPage-1].classList.add("active"),this.options.nextPrev&&!this.onLastPage&&t.appendChild(i(e,n,this.options.nextText)),this.options.firstLast&&t.appendChild(i(e,this.totalPages,this.options.lastText)),this.pagers.forEach((e=>{e.appendChild(t.cloneNode(!0))}))}}renderHeader(){this.labels=[],this.headings&&this.headings.length&&this.headings.forEach(((e,t)=>{if(this.labels[t]=e.textContent,e.firstElementChild&&e.firstElementChild.classList.contains("jsDataTable-sorter")&&(e.innerHTML=e.firstElementChild.innerHTML),e.sortable="false"!==e.getAttribute("data-sortable"),e.originalCellIndex=t,this.options.sortable&&e.sortable){const t=s("a",{href:"#",class:"jsDataTable-sorter",html:e.innerHTML});e.innerHTML="",e.setAttribute("data-sortable",""),e.appendChild(t)}})),this.fixColumns()}bindEvents(){const e=this.options;if(e.perPageSelect){const t=this.wrapper.querySelector(".jsDataTable-selector");t&&t.addEventListener("change",(()=>{e.perPage=parseInt(t.value,10),this.update(),this.fixHeight(),this.emit("datatable.perpage",e.perPage)}),!1)}if(e.searchable&&(this.input=this.wrapper.querySelector(".jsDataTable-input"),this.input&&this.input.addEventListener("keyup",(()=>this.search(this.input.value)),!1)),this.wrapper.addEventListener("click",(t=>{const s=t.target.closest("a");if(s&&"a"===s.nodeName.toLowerCase())if(s.hasAttribute("data-page")){if(e.selectable){const e=document.getElementsByName("jsDataTable_select"),t=this.wrapper.querySelector("#jsDataTable_select_all");for(let t=0;t<e.length;t++)e[t].checked=!1;t.checked=!1}this.page(s.getAttribute("data-page")),t.preventDefault()}else e.sortable&&s.classList.contains("jsDataTable-sorter")&&"false"!=s.parentNode.getAttribute("data-sortable")&&(this.columns().sort(this.headings.indexOf(s.parentNode)),t.preventDefault())}),!1),e.selectable){const e=this.wrapper.querySelector("#jsDataTable_select_all");e.addEventListener("click",(t=>{if(t.isTrusted){const t=document.getElementsByName("jsDataTable_select");for(let s=0;s<t.length;s++)t[s].checked=e.checked;const s={selectedRows:this.dtCountChecked(),totalRows:t.length};this.emit("datatable.select",s)}}),!1)}window.addEventListener("resize",this.listeners.onResize)}dtCountChecked(){let e=0;const t=document.getElementsByName("jsDataTable_select");for(let s=0;s<t.length;s++)t[s].checked&&e++;return e}onResize(){this.rect=this.container.getBoundingClientRect(),this.rect.width&&this.fixColumns()}setColumns(e){if(e||this.data.forEach((e=>{Array.from(e.cells).forEach((e=>{e.data=e.innerHTML}))})),this.options.selectable&&!this.initialized){if(this.options.hasOwnProperty("columns")&&this.options.columns.length>0)for(let e=0;e<this.options.columns.length;e++)this.options.columns[e].select=this.options.columns[e].select+1;else this.options.columns=[];this.options.columns.unshift({select:0,sortable:!1})}this.options.columns&&this.headings.length&&this.options.columns.forEach((e=>{Array.isArray(e.select)||(e.select=[e.select]),e.hasOwnProperty("render")&&"function"==typeof e.render&&(this.selectedColumns=this.selectedColumns.concat(e.select),this.columnRenderers.push({columns:e.select,renderer:e.render})),e.select.forEach((t=>{const s=this.headings[t];e.type&&s.setAttribute("data-type",e.type),e.format&&s.setAttribute("data-format",e.format),e.hasOwnProperty("sortable")&&s.setAttribute("data-sortable",e.sortable),e.hasOwnProperty("hidden")&&!1!==e.hidden&&this.columns().hide([t]),e.hasOwnProperty("sort")&&1===e.select.length&&this.columns().sort(e.select[0],e.sort,!0)}))})),this.hasRows&&(this.data.forEach(((e,t)=>{e.dataIndex=t,Array.from(e.cells).forEach((e=>{e.data=e.innerHTML}))})),this.selectedColumns.length&&this.data.forEach((e=>{Array.from(e.cells).forEach(((t,s)=>{this.selectedColumns.includes(s)&&this.columnRenderers.forEach((a=>{a.columns.includes(s)&&(t.innerHTML=a.renderer.call(this,t.data,t,e))}))}))})),this.columns().rebuild()),this.render("header")}destroy(){if(this.dom.innerHTML=this.initialLayout,this.options.selectable)if(this.options.columns.shift(),this.options.hasOwnProperty("columns")&&this.options.columns.length>0)for(let e=0;e<this.options.columns.length;e++)this.options.columns[e].select=this.options.columns[e].select-1;else this.options.columns=[];this.dom.classList.remove("jsDataTable-table"),this.wrapper.parentNode.replaceChild(this.dom,this.wrapper),this.initialized=!1,window.removeEventListener("resize",this.listeners.onResize)}update(){this.wrapper.classList.remove("jsDataTable-empty"),this.paginate(this),this.render("page"),this.links=[];let e=this.pages.length;for(;e--;){const t=e+1;this.links[e]=i(0===e?"active":"",t,t)}this.sorting=!1,this.render("pager"),this.rows().update(),this.updateToggleEvents(),this.emit("datatable.update")}updateToggleEvents(){if(this.options.selectable){const e=document.querySelectorAll(".jsDataTable_select"),t=this.wrapper.querySelector("#jsDataTable_select_all");if(t.checked=!1,t.indeterminate=!1,e.length>0)for(let t=0;t<e.length;t++)e[t].checked=!1,e[t].onclick=e=>{e.isTrusted&&this.dtToggleIndividual()}}}dtToggleIndividual(){const e=this.wrapper.querySelectorAll(".jsDataTable_select"),t={selectedRows:this.dtCountChecked(),totalRows:e.length},s=this.wrapper.querySelector("#jsDataTable_select_all");t.selectedRows==t.totalRows?(s.checked=!0,s.indeterminate=!1):t.selectedRows>0?(s.checked=!1,s.indeterminate=!0):(s.checked=!1,s.indeterminate=!1),this.emit("datatable.select",t)}paginate(){const e=this.options.perPage;let t=this.activeRows;return this.searching&&(t=[],this.searchData.forEach((e=>t.push(this.activeRows[e])))),this.options.paging?this.pages=t.map(((s,a)=>a%e==0?t.slice(a,a+e):null)).filter((e=>e)):this.pages=[t],this.totalPages=this.lastPage=this.pages.length,this.totalPages}fixColumns(){if((this.options.scrollY.length||this.options.fixedColumns)&&this.activeHeadings&&this.activeHeadings.length){let e,t=!1;if(this.columnWidths=[],this.dom.tHead){if(this.options.scrollY.length&&(t=s("thead"),t.appendChild(s("tr")),t.style.height="0px",this.headerTable&&(this.dom.tHead=this.headerTable.tHead)),this.activeHeadings.forEach((e=>{e.style.width=""})),this.activeHeadings.forEach(((e,a)=>{const i=e.offsetWidth,n=i/this.rect.width*100;if(e.style.width=`${n}%`,this.columnWidths[a]=i,this.options.scrollY.length){const e=s("th");t.firstElementChild.appendChild(e),e.style.width=`${n}%`,e.style.paddingTop="0",e.style.paddingBottom="0",e.style.border="0"}})),this.options.scrollY.length){const e=this.dom.parentElement;if(!this.headerTable){this.headerTable=s("table",{class:"jsDataTable-table"});const t=s("div",{class:"jsDataTable-headercontainer"});t.appendChild(this.headerTable),e.parentElement.insertBefore(t,e)}const a=this.dom.tHead;this.dom.replaceChild(t,a),this.headerTable.tHead=a,this.headerTable.parentElement.style.paddingRight=`${this.headerTable.clientWidth-this.dom.clientWidth+parseInt(this.headerTable.parentElement.style.paddingRight||"0",10)}px`,e.scrollHeight>e.clientHeight&&(e.style.overflowY="scroll")}}else{e=[],t=s("thead");const a=s("tr");Array.from(this.dom.tBodies[0].rows[0].cells).forEach((()=>{const t=s("th");a.appendChild(t),e.push(t)})),t.appendChild(a),this.dom.insertBefore(t,this.body);const i=[];e.forEach(((e,t)=>{const s=e.offsetWidth,a=s/this.rect.width*100;i.push(a),this.columnWidths[t]=s})),this.data.forEach((e=>{Array.from(e.cells).forEach(((e,t)=>{this.columns(e.cellIndex).visible()&&(e.style.width=`${i[t]}%`)}))})),this.dom.removeChild(t)}}}fixHeight(){this.options.fixedHeight&&(this.container.style.height=null,this.rect=this.container.getBoundingClientRect(),this.container.style.height=`${this.rect.height}px`)}removeDiacritics(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"")}search(e){return!!this.hasRows&&(e=e.toLowerCase(),this.currentPage=1,this.searching=!0,this.searchData=[],e.length?(this.clear(),this.data.forEach(((t,s)=>{const a=this.searchData.includes(t);e.split(" ").reduce(((e,s)=>{let a=!1,i=null,n=null;for(let e=0;e<t.cells.length;e++){i=t.cells[e],n=i.hasAttribute("data-content")?i.getAttribute("data-content"):i.textContent;const l=this.removeDiacritics(n.toLowerCase()),o=this.removeDiacritics(s);if(l.includes(o)&&this.columns(i.cellIndex).visible()){a=!0;break}}return e&&a}),!0)&&!a?(t.searchIndex=s,this.searchData.push(s)):t.searchIndex=null})),this.wrapper.classList.add("search-results"),this.searchData.length?this.update():(this.wrapper.classList.remove("search-results"),this.setMessage(this.options.labels.noResults)),void this.emit("datatable.search",e,this.searchData)):(this.searching=!1,this.update(),this.emit("datatable.search",e,this.searchData),this.wrapper.classList.remove("search-results"),!1))}page(e){return e!=this.currentPage&&(isNaN(e)||(this.currentPage=parseInt(e,10)),!(e>this.pages.length||e<0)&&(this.render("page"),this.render("pager"),void this.emit("datatable.page",e)))}sortColumn(e,t){this.columns().sort(e,t)}makeCheckbox(e=!1){let t="jsDataTable_select";e&&(t=`${t}_all`);const s=document.createElement("input");return s.type="checkbox",s.name=t,e&&(s.id=t),s.autocomplete=!1,s.classList.add(t),s.classList.add(...this.options.classes.checkbox),s.autocomplete=!1,s}makeSelect(e){const t=this.makeCheckbox();return e.unshift(t.outerHTML),e}makeSelectAll(e){const t=this.makeCheckbox(!0);return e.unshift(t.outerHTML),e}insert(e){let a=[];if(t(e)){if(e.headings&&!this.hasHeadings&&!this.hasRows){const t=s("tr");e.headings.forEach((e=>{const a=s("th",{html:e});t.appendChild(a)})),this.head.appendChild(t),this.header=t,this.headings=[].slice.call(t.cells),this.hasHeadings=!0,this.options.sortable=this.initialSortable,this.render("header"),this.activeHeadings=this.headings.slice()}if(e.data&&Array.isArray(e.data)){e.data=this.preparedData(e.data);for(let t=0;t<e.data.length;t++)e.data[t]=this.makeSelect(e.data[t]);a=e.data}}else Array.isArray(e)&&e.forEach((e=>{const t=[];Object.entries(e).forEach((([e,s])=>{const a=this.labels.indexOf(e);a>-1&&(t[a]=s)})),a.push(t)}));a.length&&(this.rows().add(a),this.hasRows=!0),this.update(),this.setColumns(),this.fixColumns()}preparedData(e){const t=[];for(let s=0;s<e.length;s++){let a=[];if("object"==typeof e[s]&&null!==e[s]){a=Object.values(e[s]);for(let e=0;e<a.length;e++)"string"!=typeof a[e]&&(a[e]=`${a[e]}`)}else if(Array.isArray(e[s])){for(let t=0;t<e[s].length;t++)"string"!=typeof e[s][t]&&(e[s][t]=`${e[s][t]}`);a=e[s]}a.length>0&&t.push(a)}return t}refresh(){this.options.searchable&&(this.input.value="",this.searching=!1),this.currentPage=1,this.onFirstPage=!0,this.update(),this.emit("datatable.refresh")}clear(e){this.body&&a(this.body);let t=this.body;if(this.body||(t=this.dom),e){if("string"==typeof e){document.createDocumentFragment().innerHTML=e}t.appendChild(e)}}export(e){if(!this.hasHeadings&&!this.hasRows)return!1;const s=this.activeHeadings;let a=[];const i=[];let n,l,o,r;if(!t(e))return!1;const h={download:!0,skipColumn:[],lineDelimiter:"\n",columnDelimiter:",",tableName:"myTable",replacer:null,space:4,...e};if(h.type){if("txt"!==h.type&&"csv"!==h.type||(a[0]=this.header),h.selection)if(isNaN(h.selection)){if(Array.isArray(h.selection))for(n=0;n<h.selection.length;n++)a=a.concat(this.pages[h.selection[n]-1])}else a=a.concat(this.pages[h.selection-1]);else a=a.concat(this.activeRows);if(a.length){if("txt"===h.type||"csv"===h.type){for(o="",n=0;n<a.length;n++){for(l=0;l<a[n].cells.length;l++)if(!h.skipColumn.includes(s[l].originalCellIndex)&&this.columns(s[l].originalCellIndex).visible()){let e=a[n].cells[l].textContent;e=e.trim(),e=e.replace(/\s{2,}/g," "),e=e.replace(/\n/g,"  "),e=e.replace(/"/g,'""'),e=e.replace(/#/g,"%23"),e.includes(",")&&(e=`"${e}"`),o+=e+h.columnDelimiter}o=o.trim().substring(0,o.length-1),o+=h.lineDelimiter}o=o.trim().substring(0,o.length-1),h.download&&(o=`data:text/csv;charset=utf-8,${o}`)}else if("sql"===h.type){for(o=`INSERT INTO \`${h.tableName}\` (`,n=0;n<s.length;n++)!h.skipColumn.includes(s[n].originalCellIndex)&&this.columns(s[n].originalCellIndex).visible()&&(o+=`\`${s[n].textContent}\`,`);for(o=o.trim().substring(0,o.length-1),o+=") VALUES ",n=0;n<a.length;n++){for(o+="(",l=0;l<a[n].cells.length;l++)!h.skipColumn.includes(s[l].originalCellIndex)&&this.columns(s[l].originalCellIndex).visible()&&(o+=`"${a[n].cells[l].textContent}",`);o=o.trim().substring(0,o.length-1),o+="),"}o=o.trim().substring(0,o.length-1),o+=";",h.download&&(o=`data:application/sql;charset=utf-8,${o}`)}else if("json"===h.type){for(l=0;l<a.length;l++)for(i[l]=i[l]||{},n=0;n<s.length;n++)!h.skipColumn.includes(s[n].originalCellIndex)&&this.columns(s[n].originalCellIndex).visible()&&(i[l][s[n].textContent]=a[l].cells[n].textContent);o=JSON.stringify(i,h.replacer,h.space),h.download&&(o=`data:application/json;charset=utf-8,${o}`)}return h.download&&(h.filename=h.filename||"datatable_export",h.filename+=`.${h.type}`,o=encodeURI(o),r=document.createElement("a"),r.href=o,r.download=h.filename,document.body.appendChild(r),r.click(),document.body.removeChild(r)),o}}return!1}import(e){let s=!1;if(!t(e))return!1;const a={lineDelimiter:"\n",columnDelimiter:",",...e};if(a.data.length||t(a.data)){if("csv"===a.type){s={data:[]};const e=a.data.split(a.lineDelimiter);e.length&&(a.headings&&(s.headings=e[0].split(a.columnDelimiter),e.shift()),e.forEach(((e,t)=>{s.data[t]=[];const i=e.split(a.columnDelimiter);i.length&&i.forEach((e=>{s.data[t].push(e)}))})))}else if("json"===a.type){const e=(e=>{let s=!1;try{s=JSON.parse(e)}catch(e){return!1}return!(null===s||!Array.isArray(s)&&!t(s))&&s})(a.data);e&&(s={headings:[],data:[]},e.forEach(((e,t)=>{s.data[t]=[],Object.entries(e).forEach((([e,a])=>{s.headings.includes(e)||s.headings.push(e),s.data[t].push(a)}))})))}t(a.data)&&(s=a.data),s&&this.insert(s)}return!1}print(){const e=this.activeHeadings,t=this.activeRows,a=s("table"),i=s("thead"),n=s("tbody"),l=s("tr");e.forEach((e=>{l.appendChild(s("th",{html:e.textContent}))})),i.appendChild(l),t.forEach((e=>{const t=s("tr");Array.from(e.cells).forEach((e=>{t.appendChild(s("td",{html:e.textContent}))})),n.appendChild(t)})),a.appendChild(i),a.appendChild(n);const o=window.open();o.document.body.appendChild(a),o.print()}setMessage(e){let t=1;this.hasRows?t=this.data[0].cells.length:this.activeHeadings.length&&(t=this.activeHeadings.length),this.wrapper.classList.add("jsDataTable-empty"),this.label&&(this.label.innerHTML=""),this.totalPages=0,this.render("pager"),this.clear(s("tr",{html:`<td class="jsDataTables-empty" colspan="${t}">${e}</td>`}))}columns(e){return new r(this,e)}rows(e){return new o(this,e)}on(e,t){this.events=this.events||{},this.events[e]=this.events[e]||[],this.events[e].push(t)}off(e,t){this.events=this.events||{},e in this.events!=!1&&this.events[e].splice(this.events[e].indexOf(t),1)}emit(e){if(this.events=this.events||{},e in this.events!=!1)for(let t=0;t<this.events[e].length;t++)this.events[e][t].apply(this,Array.prototype.slice.call(arguments,1))}}exports.JSDataTable=c;
//# sourceMappingURL=jsdatatables.js.map
