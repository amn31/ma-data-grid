# MaDataGrid


##### ma-data-grid
 is an Angular component for presenting large and complex data. The table was designed to be flexible and light package. The features regarding "filtering", "sorting" or "paging" are already available without creating additional code.

It was built for modern browsers using TypeScript, CSS3 and HTML5 and Angular 10.0.0.

See demos for more information!
<iframe src="https://www.ma-logiciel.com/ma-data-grid/?test1=" frameborder="1" width="90%" height="400"></iframe>

## Installation

```bash
    npm install @amn31/

    npm install jquery
    npm install materialize-css
```

ajout dans angular.json
```json
    "styles": [
              ...
			    "node_modules/materialize-css/dist/css/materialize.css",
            ],
    "scripts": [
				      "node_modules/jquery/dist/jquery.min.js",
					"node_modules/materialize-css/dist/js/materialize.min.js"
			      ]
```
## Configuration

### Data (directives rows)
```json
[
    {
		"id": 1,
		"Imei": "013216007739292",
		"Platform": "Apple",
		"Model": "iPad 3rd",
		"OperatingSystem": "9.3.5",
		"UserEmailAddress": "romain.tal@navblue.aero"
	},
	{
		"id": 10,
		"Imei": "34555555",
		"Platform": "Apple",
		"Model": "iPad 3rd",
		"OperatingSystem": "9.3.5",
		"UserEmailAddress": "rt@navblue.aero"
	}
]
```

### Columns to display (directive columns)
```typescript
columns: MaDataGripColumnOptions[] = [
    
    { prop: 'Imei', // propertie use in Data 
      title: 'Imei', // titre de la colonne
      sorted: true,  // la colonne peut etre triée
      filter: true,  // le filtre s'il est présent pourra utiliser cette colonne
      isFilterSelected: true // le filtre s'il est présent utilisera par défaut celle colonne
    },
    { 
        prop: 'lastseen', title: 'Seen', sorted: true, 
        isRowHTML: true // Le format des données seront des données HTML
    },
    { prop: 'OperatingSystem', 
        title: 'OS', sorted: true, filter: false, 
        pipe: formatData (value,row,col):string {   // Permet la conversion de la donnée à partir d'une méthode
            return value.replace(/^http:../,'');
        }
    },
    { prop: 'Model', title: 'Model', sorted: true, 
            cssClass: 'td_small'   // Permet de modifier la présentation de la donnée à partir d'un classe CSS
    },
    { prop: 'Platform', title: 'Platform', sorted: true},
    { prop: 'Imei', title: 'Imei2', sorted: true , 
      useTemplate: MyCustomCellComponent // Permet l'utilisation d'un component spécifique
                                                // implémentant "MaDataGridCell"
                                                
    },
  ];
```

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
