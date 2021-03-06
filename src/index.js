import './scss/styles.scss';

import SidenavList from "../src/lib/nav/sidenav-list";
import ListItem from "../src/lib/nav/list-item";
import InfoTable from "../src/lib/table/info-table";
import TableCaption from "../src/lib/table/table-caption";
import TableItem from "../src/lib/table/table-item";
import TableData from "../src/lib/table/table-data";

customElements.define('sidenav-list', SidenavList);
customElements.define('list-item', ListItem);
customElements.define('info-table', InfoTable);
customElements.define('table-caption', TableCaption);
customElements.define('table-item', TableItem);
customElements.define('table-data', TableData);


// if (process.env.NODE_ENV !== 'production') {
// alert(`Looks like we are in ${process.env.NODE_ENV} mode!`);
// console.log(`Looks like we are in ${process.env.NODE_ENV} mode!`);

// }
