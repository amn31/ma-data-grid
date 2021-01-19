# MaDataGrid


ma-data-grid is an Angular component for presenting large and complex data. The table was designed to be flexible and light package. The features regarding "filtering", "sorting" or "paging" are already available without creating additional code.

ma-data-grid is running in one of 2 modes: "pagination enabled", reserved for large databases (more than 10,000 records). In  that latest mode, the sorting, paging and offset features are assigned to the database server (backend). Otherwise, in the "pagination disabled", the sorting, offset, and paging features are controlled by ma-data-grid

It was built for modern browsers using TypeScript, CSS3 and HTML5 and Angular 10.0.0.

See demos for more information!


# Demo

[https://amn31.github.io/ma-data-grid/?test1/](https://amn31.github.io/ma-data-grid/?test1)


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

In the "pagination disabled" data are stored in memory and ma-data-grid can manage the most of things.

## Use "pagination disabled"

### Example of our data 
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
### In component.html, add HTML code 

````html
    <!-- 
        [pagination]="false" pagination mode is set to FALSE
        [headFilter]="true"  the header filter will be 
        (filterChange)="updateFilter($event)"    To detect change of header filter
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
#### Define all columns display
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
#### Load data 
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

#### Create header filter according to datas found
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

#### How change data displayed with 'pipe'
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

#### How detect selecting 
````typescript
SelectRowOrCell(event: MaDataGridSelectEvent) {
    console.log('SelectRowOrCell', event);
    // Reset selection after few seconds
    setTimeout(() => {
      this.datagrid.resetSelection();
    }, 5000)
  }
````

#### How detect change of header filter
When filter is changed, the new data are provided by event
````typescript
  updateFilter(event: MaDataGridHeadFilterEvent) {
  
    console.log('updateFilter', event.where);
    console.log("DATA HEADER FILTER", event.data)

  }
````

### Directives

```html
    <!-- [columns]="columns" [rows]="rows" voir ci-dessus -->
    <!-- [canSelectRow]="true" le click sur une ligne envoie l'event (selectRow) -->
    <!-- filter=true le fitre est présent et permettra l'envoie de l'event (filterChange) -->
    <!-- [limit]="10" nombre de lignes par page -->
    <!-- (change)  l'envoie de l'event de changement d'état -->
    <ma-data-grid 
        [columns]="columns" 
        [canSelectRow]="true"  
        (selectRow)="SelectRow($event)"
        [filter]=true 
        (filterChange)="updateFilter($event)"
        [rows]="rows" 
        [limit]="10"  
        (change)="ChangeData($event)">
    </ma-data-grid>
```

## Example

### HTML 

```html
<div class="page" id="page">
     
    <div id="filter">
        <ma-data-grid-filter [columns]="columns" (filterChange)="updateFilter($event)"></ma-data-grid-filter>
    </div>
    
    <div id="mygrid" style="margin-left: 5%;margin-right: 5%;" >
        <ma-data-grid [columns]="columns" 
            [canSelectRow]="true" (selectRow)="SelectRow($event)"
            [filter]="false" (filterChange)="updateFilter($event)"
            [rows]="rows" [limit]="10"  
            (change)="ChangeData($event)">
        </ma-data-grid>
    </div>

</div>
```

### CODE

```typescript
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppConfig } from 'src/app/config/globalConfig';
import * as $ from 'jquery';
import { MyCustomCellComponent } from 'src/app/components/data-grid/my-custom-cell.component';
import { MaDataGridFilterEvent, MaDataGripColumnOptions } from 'ma-data-grid';

@Component({
  selector: 'app-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrls: ['./table-grid.component.css']
})

export class TableGridComponent implements OnInit {
  
  rows: any[];
  temp: any[];

  // Définition des colonnes affichées
  columns: MaDataGripColumnOptions[] = [
    { prop: 'Num', title: 'N°', isRowNumber: true, filter: true, isFilterSelected: true},
    { prop: 'Imei', title: 'Imei', sorted: true, filter: true, isFilterSelected: true },
    { prop: 'Imei', title: 'Imei2', sorted: true , useTemplate: MyCustomCellComponent},
    { prop: 'lastseen', title: 'Seen', sorted: true, isRowHTML: true},
    { prop: 'lastseen2', title: 'Seen', sorted: false, pipe: this.formatData},
    { prop: 'OperatingSystem', title: 'OS', sorted: true, filter: true, isFilterSelected: false},
    { prop: 'Model', title: 'Model', sorted: true, cssClass: 'td_small'},
    { prop: 'EnrollmentStatus', title: 'Status', sorted: true, filter: true, isFilterSelected: false},
    { prop: 'Platform', title: 'Platform', sorted: true}
  ];

  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
    // Récupération des données 
    this.httpclient.get(AppConfig.API_SERVER+"/awdevices",{
      responseType: 'json',
    }).subscribe((data: Array<any>) => {
      this.temp = this.rows = data.splice(0,17);
    })
  }

  formatData (value,row,col):string {
    //console.log("formatData "+ row[col.prop], col)
    if (col.prop == 'lastseen2') {
      return new Date(row['lastseen']).toLocaleString().replace(/,\s+.*/,'');
    }
    return value;
  }

  ChangeData(event) {
    console.log('ChangeData',event)
  }
  
  SelectRow(event) {
    console.log('SelectRow',event)
  }
  
  updateFilter(event:MaDataGridFilterEvent) {
    
    const val = event.text.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
      if (!val) {
        return true;
      }
      for (var f of event.fields) {
        if (d[f] && d[f].toLowerCase().indexOf(val) !== -1)
          return true;
      }
    });

    // update the rows
    this.rows = temp;

  }
}

```
### CSS

```css
/deep/ .td_small {
    font-size: xx-small;
    background-color: yellow;
}
```

### TEMPLATE (MyCustomCellComponent) 

```typescript
import { Component, Input } from '@angular/core';
import { MaDataGridCell } from 'ma-data-grid/public-api';

@Component({
  selector: 'my-custom-cell',
  template: '<div (click)="clickCell(data)">"Custom cell<br/>" +  {{ data.lastseen | lowercase }}</div>'
})
export class MyCustomCellComponent implements MaDataGridCell {

  // Valeurs de l'objet représentant une colonne 
  @Input() data: any;
  
  clickCell(d) {
    console.log('clickCell',d);
  }
}
```
