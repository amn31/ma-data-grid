import { FilterConditions } from "@amn31/filter-multiple-conditions";
import { Type } from "@angular/core";
import { MaDataGridCell } from "./ma-data-grid-cell";
export declare type MaDataGridSelectMethod = 'row' | 'cell';
export interface MaDataGridSelectEvent {
    index: number;
    row: any;
    value?: any;
    prop?: string;
}
export interface MaDataGridHeadFilterEvent {
    where: FilterConditions;
    data?: [];
}
/**
 * Sorted field
 */
export interface MaDataGridSortedField {
    /**
     * field name
     */
    field: string;
    /**
     * Invert or not the sorted result
     */
    reverse?: boolean;
}
export interface MaDataGridSelectedFilter {
    /**
     * Operator can be '==','>',...
     */
    label: string | string[];
    /**
     * value(s) to select in the filter when data-grid is initialized
     */
    value?: string | number | string[] | number[];
}
export interface MaDataGridColumnOptions {
    /**
     * Display or not the head filter regarding this column
     */
    filter?: boolean;
    /**
     * Title of column
     */
    title?: string;
    /**
     * Defaut selected operator
     * Example: {
          operator: '=', value: 34
        },
     */
    selectedFilter?: MaDataGridSelectedFilter;
    /**
     * To custom the css of the cell
     * To change all CSS : <ma-data-grid customCSS="mycss"../>
     */
    cssClass?: string;
    /**
     * The data printed use HTML
     */
    isHTML?: boolean;
    /**
     * Allow to change the contains of the column
     *
     * when a value is changed, 'rowsChange' event is sent
     * <ma-data-grid (rowsChange)="rowsChange($event)"../>
     */
    canEdit?: boolean;
    /**
     * The identifier field of the column.
     * Ihis property is used to sort the content of the grid
     */
    prop: string;
    /**
     * The column can be sorted or not by the property 'prop'
     */
    sorted?: boolean;
    /**
     * Define is the column can be filter with the external filter.
     * Some configuration are required, example:
     * <ma-data-grid [extFilter]="true" (extFilterChange)="extUpdateFilter($event)"../>
     */
    extFilter?: boolean;
    /**
     * Type of data of the column
     *
     * Type 'selector' can be used on identifier property to select rows(), example:
     *  { prop: 'selected', title: 'Selected', dataType: 'selector' }
     *
     * To catch the event when a row is selected you have to use 'rowsSelect'
     * <ma-data-grid (rowsSelect)="SelectRowOrCell($event)" .../>
     */
    dataType?: 'boolean?' | 'boolean' | 'number' | 'date' | 'string' | 'datetime' | 'time' | 'float' | 'selector';
    /**
     * Filter of the column, according to the 'dataType', the column will be filtered.
     * Here you can changed the type or pre-select the filter:
     * Example: [{
                    value: '1',
                    operator: '=',
                    checked: true,
                    label: 'true'
                  }, {
                    value: '0',
                    operator: '=',
                    label: 'false'
                  }, {
                    label: 'between [20-37]',
                    values: ['20','37'],
                    operators: ['>=','<=']
                  }
                ]
     */
    headFilter?: MaDataGridHeadFilter[];
    /**
     * When the column is filtered by the external filter and 'extFilter' is setted to true
     * According to 'extFilterSelected', the column in the external filter will be pre-selected or not
     */
    extFilterSelected?: boolean;
    /**
     * To change the content displayed, use this callback to return displayed value.
     */
    pipe?(value: any, row: any, col: any): string;
    /**
     * To custom the content of the cell, we can use a specific component which have to implement MaDataGridCell class
     *
     * export class xxxxxxxxxxComponent implements MaDataGridCell   {
          
          @Input() data: [];
          @Input() prop: string;
          @Input() col: MaDataGridColumnOptions;
  
          constructor(private theGrid:MaDataGridComponent) {}
  
      }
     *
     */
    useTemplate?: Type<MaDataGridCell>;
}
/**
 * Head Filter
 */
export interface MaDataGridHeadFilter {
    /**
     * Value to search in the head of filter
     * To compose the filter you can use '${1}' which is the input value,
     * So for example, you can be create specific SQL filter like that:
     *        {
                value: '%${1}%',
                operator: 'not like',
                label: 'without',
              }
     */
    value: string | string[];
    /**
     * Operator of research Example : '=','like',...
     */
    operator: string | string[];
    /**
     * Value displayed for selecting
     */
    label?: string;
    /**
     * For pre-selected
     */
    checked?: boolean;
}
/**
 * Pre-define Head Filter for a dataType 'boolean' with null and not null
 */
export declare const options_header_booleanornull: MaDataGridHeadFilter[];
/**
 * Pre-define Head Filter for a dataType 'boolean'
 */
export declare const options_header_boolean: MaDataGridHeadFilter[];
/**
 * Pre-define Head Filter for a dataType 'string'
 */
export declare const options_header_string: MaDataGridHeadFilter[];
/**
 * Pre-define Head Filter for a dataType 'number'
 */
export declare const options_header_number: MaDataGridHeadFilter[];
/**
 * Pre-define Head Filter for a dataType 'date'
 */
export declare const options_header_date: MaDataGridHeadFilter[];
export interface MaDataGridFilterEvent {
    text: string;
    fields: string[];
}
