# MaDataGrid


[@amn31/ma-data-grid](https://www.npmjs.com/package/@amn31/ma-data-grid) is an Angular component for presenting large and complex data. The table was designed to be flexible and light package. The features regarding "filtering", "sorting" or "paging" are already available without creating additional code.

[@amn31/ma-data-grid](https://www.npmjs.com/package/@amn31/ma-data-grid) is running in one of 2 modes: "pagination enabled", reserved for large databases (more than 10,000 records). In  that latest mode, the sorting, paging and offset features are assigned to the database server (backend). Otherwise, in the "pagination disabled", the sorting, offset, and paging features are controlled by [@amn31/ma-data-grid](https://www.npmjs.com/package/@amn31/ma-data-grid)

It was built for modern browsers using TypeScript, CSS3 and HTML5 and Angular 10.0.0.

See demo for more information!


# Demo

[https://amn31.github.io/ma-data-grid/](https://amn31.github.io/ma-data-grid/?test1)

You can download demo project 
[ma-data-grid-demo.zip](https://github.com/amn31/ma-data-grid/blob/main/docs/ma-data-grid-demo.zip)
then run command
```bash
npm install
ng serve
````

# Installation

Install package
```bash
    npm install @amn31/ma-data-grid
````
Add MaDataGridModule module in file app.module.ts
```ts
   imports: [
    MaDataGridModule,
    ...
  ],
```
Add google fontes in  file "index.html"
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" 	rel="stylesheet">
```
Add materialize.css in file "angular.json"
```json
architect": {
        "build": {        
          "options": {
            "styles": [
              ...
              "node_modules/materialize-css/dist/css/materialize.css",
              "src/styles.css"
            ],
            "scripts": [
              ...
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/materialize-css/dist/js/materialize.min.js"
            ]
          }
```
# How to use ?

## Example of our data for following examples
```json
[
 {
    "emplacement": "Exterieur",
    "commune": "CHARLEVILLE-MEZIERES",
    "localisation": "FONTAINE CHARLES DE GONZAGUE",
    "liaison": "Mesh",
    "code_insee": "08105",
    "internet": "VDSL",
    "densite": "Normale",
    "modele": "T300",
    "address": "Cours Briand",
    "usage": 24,
    "timestamp": "2019-12-16",
    "lat": 4.719361,
    "lng": 49.770574,
    "id": 25,
    "isNew": null
  },
  {
    "emplacement": "Exterieur",
    "commune": "Damouzy",
    "localisation": "RUE BOURBON / RUE DU THEATRE",
    "liaison": "Fibre",
    "code_insee": "08105",
    "internet": "VDSL",
    "densite": "Normale",
    "modele": "T300",
    "address": "Rue Bourbon",
    "usage": 22,
    "timestamp": "2018-11-27",
    "lat": 4.7179,
    "lng": 49.772291,
    "id": 49,
    "isNew": true
  }
]
```

## Use "pagination disabled ([pagination]="false")"

In the "pagination disabled" data are stored in memory and [@amn31/ma-data-grid](https://www.npmjs.com/package/@amn31/ma-data-grid) will manage the most of things.

### In component.html, add HTML code 

````html
    <!-- 
      [pagination]="false"    pagination mode is set to FALSE
      [columns]="columns"     define columns to display
      [headFilter]="true"     the header filter will be shown
      (filterChange)=""      Method which will receive filtering event
      [limit]="10"            Max number of rows to display
      [canSelect]="{row|cell}" Define if row or cell can be selected
      (select)=""             Method which will receive selecting event

      [rows]="rows"           complete data to display
    -->
    <ma-data-grid #datagrid
        [pagination]="false" 
        [columns]="columns" 
        [rows]="rows"
        [limit]="10"

        canSelect="cell" (select)="SelectRowOrCell($event)"
        [headFilter]="true" (filterChange)="updateFilter($event)" >
    </ma-data-grid>
````

### In component.ts
**Define all columns display**

```typescript
columns: MaDataGridColumnOptions[] = [
    { prop: 'id',    // Propertie to display
      title: 'Id',   // Column title  
      sorted: true,  // Column can be sorted 
      dataType: 'number'  // Data type regarding the propertie
    },
    { prop: 'commune', 
      title: 'City', sorted: true, dataType: 'string', 
      cssClass: 'td_small'    // cssClass to use to display each cell 
    },
    {
      prop: 'usage', title: 'Usage', sorted: true, dataType: 'number',
      useTemplate: CellUsageComponent     // It's possible to use another component to display cell
                                          // that component must implement MaDataGridCell
    },
    { prop: 'isNew', title: 'New', sorted: true, dataType: 'boolean' },
    { prop: 'lng', title: 'Lng', sorted: true, dataType: 'number' },
    { prop: 'timestamp', title: 'Recorded', sorted: true, dataType: 'date' },
    { prop: 'liaison', title: 'Link', sorted: true,
      isRowHTML: true     // the value can be display using DOM HTML
    },
    { prop: 'internet', title: 'Type', sorted: true,
      pipe: this.formatData // A method can be used to change the data value
    },

    { prop: 'internet', title: 'Internet', sorted: true,
      /* In order to filter some data, 
        We can define specific filter with "headFilter" based on this model 
          { value: ...
            operator: ...
            label: ...
          }
        PS: headFilter can be setted to false
      */
      headFilter: [
          { value: 'VDSL', operator: '=',  label: 'vdsl' },
          { value: 'ADSL', operator: '=', label: 'adsl' }
        ]
    },
    //   
    { prop: 'modele', title: 'Model', sorted: true, extFilter: true, extFilterSelected: false }
  ];
```

**Load data**

````typescript
  ngOnInit() {
    
    // From a service, we load data in variables this.rows
    this.wifiPointsService.getAllPoints().then((data: []) => {
      this.rows = data;
      // Create header filters for 'Model' and 'Link'
      // according to datas found
      this.autoHeaderFilter('modele');
      this.autoHeaderFilter('liaison');

    })

  }
````

**Create header filter according to datas found**

According to the distinct values found in datas the headFilter can be create automaticaly

````typescript
  autoHeaderFilter(field: string) {

    this.wifiPointsService.getDistinctValues(field).then((values: any) => {
      console.log('MaDataGridHeadFilter ' + field, values);
      let d: MaDataGridHeadFilter[] = []
      values.forEach(element => {
        d.push({ value: element, operator: '=', label: element });
      });
      this.columns.find(elem => elem.prop === field).headFilter = d;
    })

  }
````

**How change data displayed with 'pipe'**

Above we see pipe was setted to this.formatData
````typescript
formatData(value, row:any, col): string {
    //console.log("formatData "+ row[col.prop], col)
    /*
    if (col.prop == 'internet' && 'ADSL' == value) {
      return '('+row['internet']+')';
    }*/
    if (value)
      return value.split('')[0];
  }
````

**How detect selecting** 

````typescript
SelectRowOrCell(event: MaDataGridSelectEvent) {
    console.log('SelectRowOrCell', event);
    // Reset selection after few seconds
    setTimeout(() => {
      this.datagrid.resetSelection();
    }, 5000)
  }
````

**How detect change on header filter**

When filter is changed, the new data are provided by event
````typescript
  updateFilter(event: MaDataGridHeadFilterEvent) {
  
    console.log('updateFilter', event.where);
    console.log("DATA HEADER FILTER", event.data)

  }
````

### In component.css

In column 'City', we have used **cssClass** so, the associated value have to be declared

```css
/deep/ .td_small {
    font-size: xx-small;
    background-color: yellow;
}
```

### Template (CellUsageComponent) 

In column 'Usage', we have used **useTemplate** so, the defined component must exist

```typescript
import { Component, Input } from '@angular/core';
import { MaDataGridCell } from '@amn31/ma-data-grid'

@Component({
  selector: 'app-cell-usage',
  template: `<div>
        <small> {{data.usage}}% </small>
        <div class="cell_usage" style="{{style}}">&nbsp;</div>
      </div>`,
  styleUrls: ['./cell-usage.component.css']
})
export class CellUsageComponent implements MaDataGridCell   {
  
  style: string = '';
  data: any;

  constructor() {
  }
  
  ngOnInit(): void {
    // this.data represents the value of the current row 
    this.style = "width: "+this.data.usage+'px;';
  }

}
```

## Use "pagination enabled ([pagination]="true")"

In the "pagination enabled" data have to be manages by the backend server and [@amn31/ma-data-grid](https://www.npmjs.com/package/@amn31/ma-data-grid) have to send parameters of filtering, ordering, paging and offset.

### In component.html, add HTML code 

````html
    <!-- 
      [pagination]="true"    pagination mode is set to TRUE
      [columns]="columns"     define columns to display
      [headFilter]="true"     the header filter will be shown
      
      [limit]="10"            Max number of rows to display
      [canSelect]="{row|cell}" Define if row or cell can be selected
      (select)=""             Method which will receive selecting event

      # The component code must be manage paging, sorting, filtering, offset and counter
      [rows]="rows"           represents the data to display of the current page 
      (filterChange)="updateFilter($event)"    To detect change of header filter   
      [count]="counter"       represents the total records of filtered datas
      [page]="page"           represents the current page
      (changePage)="changePage($event)"   Method which will called when page is setted
      (sort)="sortBy($event)"             Method which will called when user will sort a column
      
      If you want Edit :
      - Remove [canSelect]=
      Then you can add:
        (rowsChange)="rowsChange($event)" Method which will called when data are changed
        (rowsSelect)="rowsSelect($event)" Method which will called when selector is changed (Cf: 'selector')

    -->
    <ma-data-grid #datagrid
        [pagination]="true"
        [count]="counter"
        [page]="page"
        (changePage)="changePage($event)"
        (sort)="sortBy($event)"

        [columns]="columns" 
        [rows]="rows"
        [limit]="10"
        
        canSelect="row" (select)="SelectRowOrCell($event)"
        [headFilter]="true" (filterChange)="updateFilter($event)" >
    </ma-data-grid>
````
### In component.ts

**Define all columns display**

See below how set columns
```typescript
columns: MaDataGridColumnOptions[] = [
  ...
]
```

**Load data**

The most complicate part is here because you have to manage data according to parameters.
This step must be executed when component is initialized but also when user edit the header filter, 
or change the sort of columns.
````typescript

  ngOnInit() {
    console.log("ngOnInit");
    /* Initialize datas on start */
    this.loadPage(0);

    // Create header filters for 'Model' and 'Link'
    // according to datas found (like below)
    this.autoHeaderFilter('modele');
    this.autoHeaderFilter('liaison');
  }

  /**
   * Load data the current page according to parameters:
   * 
   *  page:    The current page to display
   *  limit:   Max number of rows to display in the datagrid
   *  where:   It's the where clause used according to the header Filter of the datagrid
   *           here the method updateFilter() will be used
   *  sort:    sort is used to sort the data according to that example of query {field: 'id', reverse: true}
   *           here the method sortBy() will be used
   *
   * @param {number} page
   */
  loadPage(page:number) {

    console.log("this._loadPage()");
    this.wifiPointsService.getPoints({
      where: this.where,    
      offset: page * this.limit,
      limit: this.limit,
      sort: this.sort // Example: {field: 'id', reverse: true}
    }).then((data: any) => {
      // We see the content of datagrid is completed here
      // with 
      //    - this.rows     all rows of current page 
      //    - this.page     current page [0-n]
      //    - this.counter  number of records     
      this.rows = data.rows;    
      this.page = page;
      this.counter = data.count;
      console.log('loadPage DATA ============================= ', data);
    })

  }

  /**
   * When user uses header filter this method is called
   *
   * @param {MaDataGridHeadFilterEvent} event contains where a element of type FilterConditions 
   *                                          See https://www.npmjs.com/package/@amn31/filter-multiple-conditions
   *                                              https://www.npmjs.com/package/@amn31/convert2sequelize
   * 
   */
  updateFilter(event: MaDataGridHeadFilterEvent) {
    console.log('updateFilter', event.where);
    this.where = event.where;
    this.loadPage(0);
  }

  /**
   * When user sort column this method is called
   *
   * @param {MaDataGridFilterEvent} event contains for example: {field: 'id', reverse: true}
   * @memberof Test2Component
   */
  sortBy(event: MaDataGridFilterEvent) {
    console.log('sortBy event', event);
    this.sort = event;
    this.loadPage(this.page);
  }

  /**
   * Call when data are changed
   * @param event event
   */
  rowsChange(event) {
    console.log('EFFECTIVE rowsChange', event);
  }

  /**
   * Call when column(s) are select with the dataType 'selector'
   * @param event Event
   */
  rowsSelect(event) {
    if (!event.length) {
      console.log('LINE SELECTOR ',event)
    } else {
      console.log('LINE(S) SELECTOR ',event)
    }
  }

````

## Use the External filter (Extra)

A specific component for filtering can be used, to see it go to [https://amn31.github.io/ma-data-grid/](https://amn31.github.io/ma-data-grid/?test3). That component can be used for specific columns in order to filter the current page or more...

### In component.html, add directives "extFilter"
````html
    <!-- 
    
      [extFilter]="true"    if "true" external filter is shown
      (extFilterChange)="extUpdateFilter($event)"   On change on the external filter that method receive the events
      
    -->
    <ma-data-grid #datagrid
          ...
          [extFilter]="true"
          (extFilterChange)="extUpdateFilter($event)"

          >
    </ma-data-grid>
````

### In component.ts
**Define columns which will use external filter by adding "extFilterSelected"**

```typescript
columns: MaDataGridColumnOptions[] = [
    /* EDIT DATA:
      For use selectiong line, use dataType: 'selector' 
    { prop: '_selected', dataType: 'selector' },
      // Edit Lat
    { prop: 'lat', title: 'Lat', dataType: 'number', canEdit: true };
    */
    { prop: 'commune', 
      title: 'City', sorted: true, ...
      extFilterSelected: true // allow externe filtering for that property 'City'
    },
    { prop: 'isNew', title: 'New', sorted: true, dataType: 'boolean' },
    { prop: 'lng', title: 'Lng', sorted: true, dataType: 'number', extFilterSelected: true },
    { prop: 'timestamp', title: 'Recorded', sorted: true, dataType: 'date' },
    ...
 ```

**How detect change on external filter**

When external filter is changed, the value to search and fields are provided. 
The below example makes a basic search in the current page
````typescript
  /**
   * Basic filter used for external filter
   *
   * @param {MaDataGridFilterEvent} event
   */
  extUpdateFilter(event: MaDataGridFilterEvent) {

    console.log('extUpdateFilter', event);

    // Value du search    
    const val = event.text.toLowerCase();

    // filter on data and for each provided fields (Ex:[ 'id', 'City' ])
    const temp = this.temp.filter(function (d) {
      if (!val) {
        return true;
      }
      for (var f of event.fields) {
        if (d[f] != null && d[f].toString().toLowerCase().indexOf(val) !== -1)
          return true;
      }
      return false;
    });

    // update the rows
    this.rows = temp;
    console.log("DATA EXTERNAL FILTER ", this.rows)

  }
````
## License

[MIT](LICENSE)

[Angular](https://angular.io/)

[Sequelize](https://sequelize.org/master/manual/model-querying-basics.html)

[@amn31/ma-data-grid](https://www.npmjs.com/package/@amn31/ma-data-grid)

[@amn31/convert2sequelize](https://www.npmjs.com/package/@amn31/convert2sequelize)

[@amn31/filter-multiple-conditions](https://www.npmjs.com/package/@amn31/filter-multiple-conditions)