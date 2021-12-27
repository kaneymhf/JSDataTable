/**
 * Default configuration
 * @typ {Object}
 */

import { getStrings } from "./helpers";

const labels = getStrings();

export const defaultConfig = {
  sortable: true,
  searchable: true,

  // Pagination
  paging: true,
  perPage: 10,
  perPageSelect: [5, 10, 15, 20, 25],
  nextPrev: true,
  firstLast: false,
  prevText: "&lsaquo;",
  nextText: "&rsaquo;",
  firstText: "&laquo;",
  lastText: "&raquo;",
  ellipsisText: "&hellip;",
  ascText: "▴",
  descText: "▾",
  truncatePager: true,
  pagerDelta: 2,

  scrollY: "",

  fixedColumns: true,
  fixedHeight: false,

  header: true,
  hiddenHeader: false,
  footer: false,

  lang: false,

  // Customise the layout
  layout: {
    top: "{select}{search}",
    bottom: "{info}{pager}",
  },

  labels,

  classes: {
    table: ["jsDataTable-table"],
    header: [],
    input: [],
    selector: [],
    checkbox: [],
  },
};
