# Simple-DataTables

A lightweight, extendable, dependency-free javascript HTML table plugin. Similar to jQuery DataTables **for use in modern browsers**, but without the jQuery dependency. Note: If you want a version that works in very old browsers (IE, etc.), then head over to https://github.com/fiduswriter/Simple-DataTables-classic .

Based on [Simple-DataTables](https://github.com/fiduswriter/Simple-DataTables), but with some improvements like select rows and localization.

See the demos [here](https://fiduswriter.github.io/Simple-DataTables/).

# CDN

To use the CDN version of JSDataTables use either [https://cdn.jsdelivr.net/npm/jsdatatable@latest](https://cdn.jsdelivr.net/npm/jsdatatable@latest) or [https://unpkg.com/jsdatatable](https://unpkg.com/jsdatatable). You also need to add the CSS styling, so the elements you'll add to html head element can for example be these:

```html
<link href="https://cdn.jsdelivr.net/npm/jsdatatable@latest/dist/css/jsdatatable.css" rel="stylesheet" type="text/css">
<script src="https://cdn.jsdelivr.net/npm/jsdatatable@latest" type="text/javascript"></script>
```



### License

LGPL

### Features

* Sortable columns respecting accents
* Pagination
* Searchable
* Customizable layout
* Customizable labels
* Customize column rendering
* Export to common formats like `csv`, `txt` `json`, and `sql`
* Import `csv` and `json` data
* Control column visibility
* Reorder or swap columns
* dayjs integration for sorting columns with datetime strings
* Selectable Rows
* Localization Support
* Extendable with custom plugins [See the Simple-Datatables wiki](https://github.com/fiduswriter/Simple-DataTables/wiki/Plugins)


[Simple-Datatables Documentation](https://github.com/fiduswriter/Simple-DataTables/wiki)


---

### Install

## npm
```
npm install jsdatatables --save
```
## Yarn
```
yarn add jsdatatables
```

---

### Quick Start

Then just initialise the plugin by import JSDataTable and either passing a reference to the table or a CSS3 selector string as the first parameter:

```javascript
import {JSDataTable} from "jsdatatables"

const myTable = document.querySelector("#myTable");
const dataTable = new JSDataTable(myTable);

// or

const dataTable = new JSDataTable("#myTable");

```

You can also pass the options object as the second parameter:

```javascript
import {DataTable} from "simple-datatables"

const dataTable = new DataTable("#myTable", {
	searchable: false,
	fixedHeight: true,
	...
})
```

If using the CDN:

```javascript
const dataTable = new simpleDatatables.DataTable("#myTable", {
	searchable: false,
	fixedHeight: true,
	...
})
```
