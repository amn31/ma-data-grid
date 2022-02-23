//import { Type } from '@angular/core';
/**
 * Pre-define Head Filter for a dataType 'boolean' with null and not null
 */
export const options_header_booleanornull = [{
        value: '1',
        operator: '=',
        label: 'true'
    }, {
        value: '0',
        operator: '=',
        label: 'false'
    }, {
        value: 'a',
        operator: 'isnull',
        label: 'null'
    }, {
        value: 'a',
        operator: 'isnotnull',
        label: '!null'
    },];
/**
 * Pre-define Head Filter for a dataType 'boolean'
 */
export const options_header_boolean = [{
        value: '1',
        operator: '=',
        label: 'true'
    }, {
        value: '0',
        operator: '=',
        label: 'false'
    }];
/**
 * Pre-define Head Filter for a dataType 'string'
 */
export const options_header_string = [
    {
        value: '',
        operator: '',
        label: ''
    }, {
        value: '%${1}%',
        operator: 'like',
        label: 'contains',
    }, {
        value: '%${1}%',
        operator: 'not like',
        label: 'without',
    }, {
        value: '${1}%',
        operator: 'like',
        label: 'startswith'
    }, {
        value: '${1}%',
        operator: 'not like',
        label: 'not start'
    }, {
        value: '%${1}',
        operator: 'like',
        label: 'endswith',
    }, {
        value: '%${1}',
        operator: 'not like',
        label: 'not end',
    }
];
/**
 * Pre-define Head Filter for a dataType 'number'
 */
export const options_header_number = [{
        value: '',
        operator: '',
        label: ''
    }, {
        value: '${1}',
        operator: '=',
        label: '=='
    }, {
        value: '${1}',
        operator: '!=',
        label: '!='
    }, {
        value: '${1}',
        operator: '>',
        label: '>'
    }, {
        value: '${1}',
        operator: '>=',
        label: '>='
    }, {
        value: '${1}',
        operator: '<=',
        label: '<=',
    }, {
        value: '${1}',
        operator: '<',
        label: '<',
    }, {
        value: ['${1}', '${1}'],
        operator: ['>=', '<='],
        label: 'between'
    }
];
/**
 * Pre-define Head Filter for a dataType 'date'
 */
export const options_header_date = [{
        value: '',
        operator: '',
        label: ''
    }, {
        value: '${1}',
        operator: '=',
        label: '=='
    }, {
        value: '${1}',
        operator: '!=',
        label: '!='
    }, {
        value: '${1}',
        operator: '>',
        label: '>'
    }, {
        value: '${1}',
        operator: '>=',
        label: '>='
    }, {
        value: '${1}',
        operator: '<=',
        label: '<=',
    }, {
        value: '${1}',
        operator: '<',
        label: '<',
    }, {
        value: ['${1}', '${1}'],
        operator: ['>=', '<='],
        label: 'between'
    }];
// export class MaData {
//   static FilterByConditions(where, temp: any) {
//     // console.log('DEAL findFull ==== ', where);
//     if (!where || where.length == 0) {
//       return temp;
//     }
//     var result = [];
//     for (var i = 0; i < where.length; i++) {
//       var condition = where[i];
//       let temp1;
//       // console.log('DEAL typeof(condition)' + typeof (condition), condition);
//       if (typeof (condition) == 'object') {
//         if (condition.length == 3 &&
//           typeof (condition[0]) == 'string' && typeof (condition[1]) == 'string' &&
//           (typeof (condition[2]) == 'string' || typeof (condition[2]) == 'number')) {
//           // console.log("DEAL TO FIND ", temp.length)
//           temp1 = this._filterResultBySimpleCondition(condition, temp);
//         } else if (condition.length > 0 && condition.find(d => typeof (d) == 'object')) {
//           temp1 = this.FilterByConditions(condition, temp);
//         }
//       } else {
//         if (typeof (condition) == 'string') {
//           if (condition != 'or' && condition != 'and') {
//             throw ("Unexpected condition :" + condition)
//           }
//         }
//       }
//       if (temp1) {
//         // console.log('DEAL TODO', temp1.length);
//         // Cas où l'operator précédent était 'or'
//         if (where[i + 1] && where[i + 1] == 'or' || (i == where.length - 1 && where[i - 1] && where[i - 1] == 'or')) {
//           // On ajoute au result les valeurs non trouvées précédemment
//           for (var t of temp1) {
//             //console.log(t);
//             if (!(result.find(d => d === t))) {
//               result.push(t);
//             }
//           }
//           // console.log("DEAL TODO OR", result)
//           // Cas où l'operator précédent était 'and'
//         } else {
//           // console.log("DEAL TODO AND", temp1);
//           // On ecrase temp
//           temp = temp1;
//           result = temp;
//         }
//       }
//       i++;
//     }
//     return result;
//   }
//   private static _filterResultBySimpleCondition(condition, temp: any) {
//     console.log('DEAL findTemp === ', condition)
//     if (typeof (condition) == 'object') {
//       var field = condition[0];
//       var operator = condition[1];
//       var value = condition[2];
//       let reg : any = null;
//       let opnum = false;
//       let reverse = false;
//       console.log('field (1):' + field, operator, value)
//       if (operator == 'startswith') {
//         reg = new RegExp("^" + value, 'i');
//       } else if (operator == 'endswith') {
//         reg = new RegExp(value + "$", 'i');
//       } else if (operator == 'contains') {
//         reg = new RegExp(value, 'i');
//       } else if (operator == 'like' || operator == 'not like') {
//         if (operator == 'not like') {
//           reverse = true;
//         }
//         if (value.match(/^%.+%$/)) {
//           value = value.replace(/^%/, '').replace(/%$/, '')
//           operator = 'contains'
//           reg = new RegExp(value, 'i');
//         } else if (value.match(/.+%$/)) {
//           value = value.replace(/%$/, '')
//           operator = 'startswith'
//           reg = new RegExp("^" + value, 'i');
//         } else if (value.match(/^%/)) {
//           value = value.replace(/^%/, '')
//           operator = 'endswith'
//           reg = new RegExp(value + "$", 'i');
//         }
//       } else if (operator == 'regex') {
//         reg = new RegExp(value, 'i');
//       } else if (operator == 'notRegex') {
//         reg = new RegExp(value, 'i');
//         reverse = true;
//       } else if (operator == 'isnull') {
//       } else if (operator == 'isnotnull') {
//       } else if (operator == '=') {
//         opnum = true;
//       } else if (operator == '>=') {
//         opnum = true;
//       } else if (operator == '>') {
//         opnum = true;
//       } else if (operator == '<') {
//         opnum = true;
//       } else if (operator == '!=') {
//         opnum = true;
//       } else if (operator == '<=') {
//         opnum = true;
//       } else {
//         throw ("Unkown operator " + operator)
//       }
//       console.log('field:' + field, operator, value, reg)
//       temp = temp.filter(function (d, index, array) {
//         //console.log(d[field])
//         if (reg == null) {
//           if (opnum && typeof (d[field]) == 'number') {
//             value = parseFloat(value)
//           }
//           if (operator == '=') {
//             if (typeof (d[field]) == 'boolean') {
//               if (value == '1')
//                 value = true;
//               if (value == '0')
//                 value = false;
//             }
//             if (d[field] !== null) {
//               if (d[field] === value) {
//                 return true;
//               }
//             }
//           } else if (operator == 'isnull') {
//             if (d[field] == null) {
//               return true;
//             }
//           } else if (operator == 'isnotnull') {
//             if (d[field] != null) {
//               return true;
//             }
//           } else if (operator == '>=') {
//             if (d[field] !== null && d[field] >= value) {
//               return true;
//             }
//           } else if (operator == '>') {
//             if (d[field] !== null && d[field] > value) {
//               return true;
//             }
//           } else if (operator == '!=') {
//             if (d[field] !== null && d[field] != value) {
//               return true;
//             }
//           } else if (operator == '<=') {
//             if (d[field] !== null && d[field] <= value) {
//               return true;
//             }
//           } else if (operator == '<') {
//             if (d[field] !== null && d[field] < value) {
//               return true;
//             }
//           }
//         } else {
//           if (d[field] && d[field].match(reg)) {
//             if (reverse) {
//               return false;
//             }
//             return true;
//           }
//         }
//         if (reverse) {
//           return true;
//         }
//         return false;
//       })
//     }
//     return temp;
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZGF0YS1ncmlkLW9wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiRDovTXlIb21lL2FuZHJvaWQvd29ya3NwYWNlL2dpdC9tYS1uZy1kYXRhLWdyaWQvcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmZhY2VzL21hLWRhdGEtZ3JpZC1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1QztBQWtMdkM7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBMkIsQ0FBQztRQUNuRSxLQUFLLEVBQUUsR0FBRztRQUNWLFFBQVEsRUFBRSxHQUFHO1FBQ2IsS0FBSyxFQUFFLE1BQU07S0FDZCxFQUFFO1FBQ0QsS0FBSyxFQUFFLEdBQUc7UUFDVixRQUFRLEVBQUUsR0FBRztRQUNiLEtBQUssRUFBRSxPQUFPO0tBQ2YsRUFBRTtRQUNELEtBQUssRUFBRSxHQUFHO1FBQ1YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsS0FBSyxFQUFFLE1BQU07S0FDZCxFQUFFO1FBQ0QsS0FBSyxFQUFFLEdBQUc7UUFDVixRQUFRLEVBQUUsV0FBVztRQUNyQixLQUFLLEVBQUUsT0FBTztLQUNmLEVBQUUsQ0FBQztBQUVKOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQTJCLENBQUM7UUFDN0QsS0FBSyxFQUFFLEdBQUc7UUFDVixRQUFRLEVBQUUsR0FBRztRQUNiLEtBQUssRUFBRSxNQUFNO0tBQ2QsRUFBRTtRQUNELEtBQUssRUFBRSxHQUFHO1FBQ1YsUUFBUSxFQUFFLEdBQUc7UUFDYixLQUFLLEVBQUUsT0FBTztLQUNmLENBQUMsQ0FBQztBQUVIOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQTJCO0lBQzNEO1FBQ0UsS0FBSyxFQUFFLEVBQUU7UUFDVCxRQUFRLEVBQUUsRUFBRTtRQUNaLEtBQUssRUFBRSxFQUFFO0tBQ1YsRUFBRTtRQUNELEtBQUssRUFBRSxRQUFRO1FB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RCw2QkFBNkI7QUFDN0IsZ0JBQWdCO0FBQ2hCLDBDQUEwQztBQUMxQywyREFBMkQ7QUFDM0QsNkJBQTZCO0FBQzdCLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2QsbUJBQW1CO0FBQ25CLG1EQUFtRDtBQUNuRCw2QkFBNkI7QUFDN0IsOEJBQThCO0FBQzlCLGdCQUFnQjtBQUNoQiwyQkFBMkI7QUFDM0IsY0FBYztBQUVkLFlBQVk7QUFDWix5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLFlBQVk7QUFDWix3QkFBd0I7QUFDeEIsV0FBVztBQUNYLFFBQVE7QUFDUixtQkFBbUI7QUFDbkIsTUFBTTtBQUVOLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmlsdGVyQ29uZGl0aW9ucyB9IGZyb20gXCJAYW1uMzEvZmlsdGVyLW11bHRpcGxlLWNvbmRpdGlvbnNcIjtcbmltcG9ydCB7IFR5cGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENlbGwgfSBmcm9tIFwiLi9tYS1kYXRhLWdyaWQtY2VsbFwiO1xuXG5cbmV4cG9ydCB0eXBlIE1hRGF0YUdyaWRTZWxlY3RNZXRob2QgPSAncm93JyB8ICdjZWxsJ1xuZXhwb3J0IGludGVyZmFjZSBNYURhdGFHcmlkU2VsZWN0RXZlbnQge1xuICBpbmRleDogbnVtYmVyO1xuICByb3c6IGFueTtcbiAgdmFsdWU/OiBhbnk7XG4gIHByb3A/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFEYXRhR3JpZEhlYWRGaWx0ZXJFdmVudCB7XG4gIHdoZXJlOiBGaWx0ZXJDb25kaXRpb25zLFxuICBkYXRhPzogW107XG59XG5cbi8qKlxuICogU29ydGVkIGZpZWxkXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFEYXRhR3JpZFNvcnRlZEZpZWxkIHtcbiAgLyoqXG4gICAqIGZpZWxkIG5hbWVcbiAgICovXG4gIGZpZWxkOiBzdHJpbmc7IFxuICAvKipcbiAgICogSW52ZXJ0IG9yIG5vdCB0aGUgc29ydGVkIHJlc3VsdFxuICAgKi9cbiAgcmV2ZXJzZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYURhdGFHcmlkU2VsZWN0ZWRGaWx0ZXIge1xuICAvKipcbiAgICogT3BlcmF0b3IgY2FuIGJlICc9PScsJz4nLC4uLlxuICAgKi9cbiAgbGFiZWw6IHN0cmluZ3xzdHJpbmdbXTtcbiAgLyoqXG4gICAqIHZhbHVlKHMpIHRvIHNlbGVjdCBpbiB0aGUgZmlsdGVyIHdoZW4gZGF0YS1ncmlkIGlzIGluaXRpYWxpemVkXG4gICAqL1xuICB2YWx1ZT86IHN0cmluZ3xudW1iZXJ8c3RyaW5nW118bnVtYmVyW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFEYXRhR3JpZENvbHVtbk9wdGlvbnMge1xuICAvKipcbiAgICogRGlzcGxheSBvciBub3QgdGhlIGhlYWQgZmlsdGVyIHJlZ2FyZGluZyB0aGlzIGNvbHVtblxuICAgKi9cbiAgZmlsdGVyPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFRpdGxlIG9mIGNvbHVtblxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBEZWZhdXQgc2VsZWN0ZWQgb3BlcmF0b3IgXG4gICAqIEV4YW1wbGU6IHsgXG4gICAgICAgIG9wZXJhdG9yOiAnPScsIHZhbHVlOiAzNCBcbiAgICAgIH0sXG4gICAqL1xuICBzZWxlY3RlZEZpbHRlcj86IE1hRGF0YUdyaWRTZWxlY3RlZEZpbHRlcjtcbiAgLyoqXG4gICAqIFRvIGN1c3RvbSB0aGUgY3NzIG9mIHRoZSBjZWxsIFxuICAgKiBUbyBjaGFuZ2UgYWxsIENTUyA6IDxtYS1kYXRhLWdyaWQgY3VzdG9tQ1NTPVwibXljc3NcIi4uLz4gXG4gICAqL1xuICBjc3NDbGFzcz86IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBkYXRhIHByaW50ZWQgdXNlIEhUTUxcbiAgICovXG4gIGlzSFRNTD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBBbGxvdyB0byBjaGFuZ2UgdGhlIGNvbnRhaW5zIG9mIHRoZSBjb2x1bW5cbiAgICogXG4gICAqIHdoZW4gYSB2YWx1ZSBpcyBjaGFuZ2VkLCAncm93c0NoYW5nZScgZXZlbnQgaXMgc2VudCBcbiAgICogPG1hLWRhdGEtZ3JpZCAocm93c0NoYW5nZSk9XCJyb3dzQ2hhbmdlKCRldmVudClcIi4uLz5cbiAgICovXG4gIGNhbkVkaXQ/OiBib29sZWFuO1xuICAvLyBjYW5EZWxldGU/OiBib29sZWFuO1xuICAvKipcbiAgICogVGhlIGlkZW50aWZpZXIgZmllbGQgb2YgdGhlIGNvbHVtbi4gXG4gICAqIEloaXMgcHJvcGVydHkgaXMgdXNlZCB0byBzb3J0IHRoZSBjb250ZW50IG9mIHRoZSBncmlkXG4gICAqL1xuICBwcm9wOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgY29sdW1uIGNhbiBiZSBzb3J0ZWQgb3Igbm90IGJ5IHRoZSBwcm9wZXJ0eSAncHJvcCdcbiAgICovXG4gIHNvcnRlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBEZWZpbmUgaXMgdGhlIGNvbHVtbiBjYW4gYmUgZmlsdGVyIHdpdGggdGhlIGV4dGVybmFsIGZpbHRlci5cbiAgICogU29tZSBjb25maWd1cmF0aW9uIGFyZSByZXF1aXJlZCwgZXhhbXBsZTpcbiAgICogPG1hLWRhdGEtZ3JpZCBbZXh0RmlsdGVyXT1cInRydWVcIiAoZXh0RmlsdGVyQ2hhbmdlKT1cImV4dFVwZGF0ZUZpbHRlcigkZXZlbnQpXCIuLi8+XG4gICAqL1xuICBleHRGaWx0ZXI/OiBib29sZWFuO1xuICAvKipcbiAgICogVHlwZSBvZiBkYXRhIG9mIHRoZSBjb2x1bW5cbiAgICogXG4gICAqIFR5cGUgJ3NlbGVjdG9yJyBjYW4gYmUgdXNlZCBvbiBpZGVudGlmaWVyIHByb3BlcnR5IHRvIHNlbGVjdCByb3dzKCksIGV4YW1wbGU6XG4gICAqICB7IHByb3A6ICdzZWxlY3RlZCcsIHRpdGxlOiAnU2VsZWN0ZWQnLCBkYXRhVHlwZTogJ3NlbGVjdG9yJyB9XG4gICAqIFxuICAgKiBUbyBjYXRjaCB0aGUgZXZlbnQgd2hlbiBhIHJvdyBpcyBzZWxlY3RlZCB5b3UgaGF2ZSB0byB1c2UgJ3Jvd3NTZWxlY3QnXG4gICAqIDxtYS1kYXRhLWdyaWQgKHJvd3NTZWxlY3QpPVwiU2VsZWN0Um93T3JDZWxsKCRldmVudClcIiAuLi4vPlxuICAgKi9cbiAgZGF0YVR5cGU/OiAnYm9vbGVhbj8nIHwgJ2Jvb2xlYW4nIHwgJ251bWJlcicgfCAnZGF0ZScgfCAnc3RyaW5nJyB8ICdkYXRldGltZScgfCAndGltZScgfCAnZmxvYXQnIHwgJ3NlbGVjdG9yJztcbiAgLyoqXG4gICAqIEZpbHRlciBvZiB0aGUgY29sdW1uLCBhY2NvcmRpbmcgdG8gdGhlICdkYXRhVHlwZScsIHRoZSBjb2x1bW4gd2lsbCBiZSBmaWx0ZXJlZC5cbiAgICogSGVyZSB5b3UgY2FuIGNoYW5nZWQgdGhlIHR5cGUgb3IgcHJlLXNlbGVjdCB0aGUgZmlsdGVyOlxuICAgKiBFeGFtcGxlOiBbe1xuICAgICAgICAgICAgICAgICAgdmFsdWU6ICcxJyxcbiAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnPScsXG4gICAgICAgICAgICAgICAgICBjaGVja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6ICd0cnVlJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAnMCcsXG4gICAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6ICdmYWxzZSdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICBsYWJlbDogJ2JldHdlZW4gWzIwLTM3XScsXG4gICAgICAgICAgICAgICAgICB2YWx1ZXM6IFsnMjAnLCczNyddLFxuICAgICAgICAgICAgICAgICAgb3BlcmF0b3JzOiBbJz49JywnPD0nXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgKi9cbiAgaGVhZEZpbHRlcj86IE1hRGF0YUdyaWRIZWFkRmlsdGVyW107XG4gIC8qKlxuICAgKiBXaGVuIHRoZSBjb2x1bW4gaXMgZmlsdGVyZWQgYnkgdGhlIGV4dGVybmFsIGZpbHRlciBhbmQgJ2V4dEZpbHRlcicgaXMgc2V0dGVkIHRvIHRydWUgXG4gICAqIEFjY29yZGluZyB0byAnZXh0RmlsdGVyU2VsZWN0ZWQnLCB0aGUgY29sdW1uIGluIHRoZSBleHRlcm5hbCBmaWx0ZXIgd2lsbCBiZSBwcmUtc2VsZWN0ZWQgb3Igbm90XG4gICAqL1xuICBleHRGaWx0ZXJTZWxlY3RlZD86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBUbyBjaGFuZ2UgdGhlIGNvbnRlbnQgZGlzcGxheWVkLCB1c2UgdGhpcyBjYWxsYmFjayB0byByZXR1cm4gZGlzcGxheWVkIHZhbHVlLlxuICAgKi9cbiAgcGlwZT8odmFsdWU6IGFueSwgcm93OiBhbnksIGNvbDogYW55KTogc3RyaW5nICAvLz0+IHtyZXR1cm46IHN0cmluZ3xudW1iZXJ9O1xuICAvKipcbiAgICogVG8gY3VzdG9tIHRoZSBjb250ZW50IG9mIHRoZSBjZWxsLCB3ZSBjYW4gdXNlIGEgc3BlY2lmaWMgY29tcG9uZW50IHdoaWNoIGhhdmUgdG8gaW1wbGVtZW50IE1hRGF0YUdyaWRDZWxsIGNsYXNzXG4gICAqIFxuICAgKiBleHBvcnQgY2xhc3MgeHh4eHh4eHh4eENvbXBvbmVudCBpbXBsZW1lbnRzIE1hRGF0YUdyaWRDZWxsICAge1xuICAgICAgICBcbiAgICAgICAgQElucHV0KCkgZGF0YTogW107XG4gICAgICAgIEBJbnB1dCgpIHByb3A6IHN0cmluZztcbiAgICAgICAgQElucHV0KCkgY29sOiBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucztcblxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRoZUdyaWQ6TWFEYXRhR3JpZENvbXBvbmVudCkge31cblxuICAgIH0gXG4gICAqIFxuICAgKi9cbiAgdXNlVGVtcGxhdGU/OiBUeXBlPE1hRGF0YUdyaWRDZWxsPlxufVxuXG4vKipcbiAqIEhlYWQgRmlsdGVyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTWFEYXRhR3JpZEhlYWRGaWx0ZXIge1xuICAvKipcbiAgICogVmFsdWUgdG8gc2VhcmNoIGluIHRoZSBoZWFkIG9mIGZpbHRlclxuICAgKiBUbyBjb21wb3NlIHRoZSBmaWx0ZXIgeW91IGNhbiB1c2UgJyR7MX0nIHdoaWNoIGlzIHRoZSBpbnB1dCB2YWx1ZSxcbiAgICogU28gZm9yIGV4YW1wbGUsIHlvdSBjYW4gYmUgY3JlYXRlIHNwZWNpZmljIFNRTCBmaWx0ZXIgbGlrZSB0aGF0OlxuICAgKiAgICAgICAge1xuICAgICAgICAgICAgICB2YWx1ZTogJyUkezF9JScsXG4gICAgICAgICAgICAgIG9wZXJhdG9yOiAnbm90IGxpa2UnLFxuICAgICAgICAgICAgICBsYWJlbDogJ3dpdGhvdXQnLFxuICAgICAgICAgICAgfVxuICAgKi9cbiAgdmFsdWU6IHN0cmluZ3xzdHJpbmdbXTtcbiAgLyoqXG4gICAqIE9wZXJhdG9yIG9mIHJlc2VhcmNoIEV4YW1wbGUgOiAnPScsJ2xpa2UnLC4uLlxuICAgKi9cbiAgb3BlcmF0b3I6IHN0cmluZ3xzdHJpbmdbXTtcbiAgLyoqXG4gICAqIFZhbHVlIGRpc3BsYXllZCBmb3Igc2VsZWN0aW5nXG4gICAqL1xuICBsYWJlbD86IHN0cmluZztcbiAgLyoqXG4gICAqIEZvciBwcmUtc2VsZWN0ZWQgXG4gICAqL1xuICBjaGVja2VkPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBQcmUtZGVmaW5lIEhlYWQgRmlsdGVyIGZvciBhIGRhdGFUeXBlICdib29sZWFuJyB3aXRoIG51bGwgYW5kIG5vdCBudWxsXG4gKi9cbmV4cG9ydCBjb25zdCBvcHRpb25zX2hlYWRlcl9ib29sZWFub3JudWxsOiBNYURhdGFHcmlkSGVhZEZpbHRlcltdID0gW3tcbiAgdmFsdWU6ICcxJyxcbiAgb3BlcmF0b3I6ICc9JyxcbiAgbGFiZWw6ICd0cnVlJ1xufSwge1xuICB2YWx1ZTogJzAnLFxuICBvcGVyYXRvcjogJz0nLFxuICBsYWJlbDogJ2ZhbHNlJ1xufSwge1xuICB2YWx1ZTogJ2EnLFxuICBvcGVyYXRvcjogJ2lzbnVsbCcsXG4gIGxhYmVsOiAnbnVsbCdcbn0sIHtcbiAgdmFsdWU6ICdhJyxcbiAgb3BlcmF0b3I6ICdpc25vdG51bGwnLFxuICBsYWJlbDogJyFudWxsJ1xufSxdO1xuXG4vKipcbiAqIFByZS1kZWZpbmUgSGVhZCBGaWx0ZXIgZm9yIGEgZGF0YVR5cGUgJ2Jvb2xlYW4nIFxuICovXG5leHBvcnQgY29uc3Qgb3B0aW9uc19oZWFkZXJfYm9vbGVhbjogTWFEYXRhR3JpZEhlYWRGaWx0ZXJbXSA9IFt7XG4gIHZhbHVlOiAnMScsXG4gIG9wZXJhdG9yOiAnPScsXG4gIGxhYmVsOiAndHJ1ZSdcbn0sIHtcbiAgdmFsdWU6ICcwJyxcbiAgb3BlcmF0b3I6ICc9JyxcbiAgbGFiZWw6ICdmYWxzZSdcbn1dO1xuXG4vKipcbiAqIFByZS1kZWZpbmUgSGVhZCBGaWx0ZXIgZm9yIGEgZGF0YVR5cGUgJ3N0cmluZydcbiAqL1xuZXhwb3J0IGNvbnN0IG9wdGlvbnNfaGVhZGVyX3N0cmluZzogTWFEYXRhR3JpZEhlYWRGaWx0ZXJbXSA9IFtcbiAge1xuICAgIHZhbHVlOiAnJyxcbiAgICBvcGVyYXRvcjogJycsXG4gICAgbGFiZWw6ICcnXG4gIH0sIHtcbiAgICB2YWx1ZTogJyUkezF9JScsXG4gICAgb3BlcmF0b3I6ICdsaWtlJyxcbiAgICBsYWJlbDogJ2NvbnRhaW5zJyxcbiAgfSwge1xuICAgIHZhbHVlOiAnJSR7MX0lJyxcbiAgICBvcGVyYXRvcjogJ25vdCBsaWtlJyxcbiAgICBsYWJlbDogJ3dpdGhvdXQnLFxuICB9LCB7XG4gICAgdmFsdWU6ICckezF9JScsXG4gICAgb3BlcmF0b3I6ICdsaWtlJyxcbiAgICBsYWJlbDogJ3N0YXJ0c3dpdGgnXG4gIH0sIHtcbiAgICB2YWx1ZTogJyR7MX0lJyxcbiAgICBvcGVyYXRvcjogJ25vdCBsaWtlJyxcbiAgICBsYWJlbDogJ25vdCBzdGFydCdcbiAgfSwge1xuICAgIHZhbHVlOiAnJSR7MX0nLFxuICAgIG9wZXJhdG9yOiAnbGlrZScsXG4gICAgbGFiZWw6ICdlbmRzd2l0aCcsXG4gIH0sIHtcbiAgICB2YWx1ZTogJyUkezF9JyxcbiAgICBvcGVyYXRvcjogJ25vdCBsaWtlJyxcbiAgICBsYWJlbDogJ25vdCBlbmQnLFxuICB9XTtcblxuLyoqXG4gKiBQcmUtZGVmaW5lIEhlYWQgRmlsdGVyIGZvciBhIGRhdGFUeXBlICdudW1iZXInXG4gKi9cbmV4cG9ydCBjb25zdCBvcHRpb25zX2hlYWRlcl9udW1iZXI6IE1hRGF0YUdyaWRIZWFkRmlsdGVyW10gPSBbe1xuICB2YWx1ZTogJycsXG4gIG9wZXJhdG9yOiAnJyxcbiAgbGFiZWw6ICcnXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPScsXG4gIGxhYmVsOiAnPT0nXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnIT0nLFxuICBsYWJlbDogJyE9J1xufSwge1xuICB2YWx1ZTogJyR7MX0nLFxuICBvcGVyYXRvcjogJz4nLFxuICBsYWJlbDogJz4nXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPj0nLFxuICBsYWJlbDogJz49J1xufSwge1xuICB2YWx1ZTogJyR7MX0nLFxuICBvcGVyYXRvcjogJzw9JyxcbiAgbGFiZWw6ICc8PScsXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPCcsXG4gIGxhYmVsOiAnPCcsXG59LCB7XG4gIHZhbHVlOiBbJyR7MX0nLCckezF9J10sXG4gIG9wZXJhdG9yOiBbJz49JywnPD0nXSxcbiAgbGFiZWw6ICdiZXR3ZWVuJ1xufVxuXG5dO1xuXG4vKipcbiAqIFByZS1kZWZpbmUgSGVhZCBGaWx0ZXIgZm9yIGEgZGF0YVR5cGUgJ2RhdGUnIFxuICovXG5leHBvcnQgY29uc3Qgb3B0aW9uc19oZWFkZXJfZGF0ZTogTWFEYXRhR3JpZEhlYWRGaWx0ZXJbXSA9IFt7XG4gIHZhbHVlOiAnJyxcbiAgb3BlcmF0b3I6ICcnLFxuICBsYWJlbDogJydcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICc9JyxcbiAgbGFiZWw6ICc9PSdcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICchPScsXG4gIGxhYmVsOiAnIT0nXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPicsXG4gIGxhYmVsOiAnPidcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICc+PScsXG4gIGxhYmVsOiAnPj0nXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPD0nLFxuICBsYWJlbDogJzw9Jyxcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICc8JyxcbiAgbGFiZWw6ICc8Jyxcbn0sIHtcbiAgdmFsdWU6IFsnJHsxfScsJyR7MX0nXSxcbiAgb3BlcmF0b3I6IFsnPj0nLCc8PSddLFxuICBsYWJlbDogJ2JldHdlZW4nXG59XTtcblxuZXhwb3J0IGludGVyZmFjZSBNYURhdGFHcmlkRmlsdGVyRXZlbnQge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGZpZWxkczogc3RyaW5nW11cbn1cblxuLy8gZXhwb3J0IGNsYXNzIE1hRGF0YSB7XG4gIFxuLy8gICBzdGF0aWMgRmlsdGVyQnlDb25kaXRpb25zKHdoZXJlLCB0ZW1wOiBhbnkpIHtcbi8vICAgICAvLyBjb25zb2xlLmxvZygnREVBTCBmaW5kRnVsbCA9PT09ICcsIHdoZXJlKTtcblxuLy8gICAgIGlmICghd2hlcmUgfHwgd2hlcmUubGVuZ3RoID09IDApIHtcbi8vICAgICAgIHJldHVybiB0ZW1wO1xuLy8gICAgIH1cblxuLy8gICAgIHZhciByZXN1bHQgPSBbXTtcbi8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdoZXJlLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICB2YXIgY29uZGl0aW9uID0gd2hlcmVbaV07XG4vLyAgICAgICBsZXQgdGVtcDE7XG4vLyAgICAgICAvLyBjb25zb2xlLmxvZygnREVBTCB0eXBlb2YoY29uZGl0aW9uKScgKyB0eXBlb2YgKGNvbmRpdGlvbiksIGNvbmRpdGlvbik7XG4vLyAgICAgICBpZiAodHlwZW9mIChjb25kaXRpb24pID09ICdvYmplY3QnKSB7XG4vLyAgICAgICAgIGlmIChjb25kaXRpb24ubGVuZ3RoID09IDMgJiZcbi8vICAgICAgICAgICB0eXBlb2YgKGNvbmRpdGlvblswXSkgPT0gJ3N0cmluZycgJiYgdHlwZW9mIChjb25kaXRpb25bMV0pID09ICdzdHJpbmcnICYmXG4vLyAgICAgICAgICAgKHR5cGVvZiAoY29uZGl0aW9uWzJdKSA9PSAnc3RyaW5nJyB8fCB0eXBlb2YgKGNvbmRpdGlvblsyXSkgPT0gJ251bWJlcicpKSB7XG4vLyAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJERUFMIFRPIEZJTkQgXCIsIHRlbXAubGVuZ3RoKVxuLy8gICAgICAgICAgIHRlbXAxID0gdGhpcy5fZmlsdGVyUmVzdWx0QnlTaW1wbGVDb25kaXRpb24oY29uZGl0aW9uLCB0ZW1wKTtcbi8vICAgICAgICAgfSBlbHNlIGlmIChjb25kaXRpb24ubGVuZ3RoID4gMCAmJiBjb25kaXRpb24uZmluZChkID0+IHR5cGVvZiAoZCkgPT0gJ29iamVjdCcpKSB7XG4vLyAgICAgICAgICAgdGVtcDEgPSB0aGlzLkZpbHRlckJ5Q29uZGl0aW9ucyhjb25kaXRpb24sIHRlbXApO1xuLy8gICAgICAgICB9XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBpZiAodHlwZW9mIChjb25kaXRpb24pID09ICdzdHJpbmcnKSB7XG4vLyAgICAgICAgICAgaWYgKGNvbmRpdGlvbiAhPSAnb3InICYmIGNvbmRpdGlvbiAhPSAnYW5kJykge1xuLy8gICAgICAgICAgICAgdGhyb3cgKFwiVW5leHBlY3RlZCBjb25kaXRpb24gOlwiICsgY29uZGl0aW9uKVxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgICAgaWYgKHRlbXAxKSB7XG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdERUFMIFRPRE8nLCB0ZW1wMS5sZW5ndGgpO1xuLy8gICAgICAgICAvLyBDYXMgb8O5IGwnb3BlcmF0b3IgcHLDqWPDqWRlbnQgw6l0YWl0ICdvcidcbi8vICAgICAgICAgaWYgKHdoZXJlW2kgKyAxXSAmJiB3aGVyZVtpICsgMV0gPT0gJ29yJyB8fCAoaSA9PSB3aGVyZS5sZW5ndGggLSAxICYmIHdoZXJlW2kgLSAxXSAmJiB3aGVyZVtpIC0gMV0gPT0gJ29yJykpIHtcbi8vICAgICAgICAgICAvLyBPbiBham91dGUgYXUgcmVzdWx0IGxlcyB2YWxldXJzIG5vbiB0cm91dsOpZXMgcHLDqWPDqWRlbW1lbnRcbi8vICAgICAgICAgICBmb3IgKHZhciB0IG9mIHRlbXAxKSB7XG4vLyAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHQpO1xuLy8gICAgICAgICAgICAgaWYgKCEocmVzdWx0LmZpbmQoZCA9PiBkID09PSB0KSkpIHtcbi8vICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godCk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiREVBTCBUT0RPIE9SXCIsIHJlc3VsdClcblxuLy8gICAgICAgICAgIC8vIENhcyBvw7kgbCdvcGVyYXRvciBwcsOpY8OpZGVudCDDqXRhaXQgJ2FuZCdcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRFQUwgVE9ETyBBTkRcIiwgdGVtcDEpO1xuLy8gICAgICAgICAgIC8vIE9uIGVjcmFzZSB0ZW1wXG4vLyAgICAgICAgICAgdGVtcCA9IHRlbXAxO1xuLy8gICAgICAgICAgIHJlc3VsdCA9IHRlbXA7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cblxuLy8gICAgICAgaSsrO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9XG4gXG5cbi8vICAgcHJpdmF0ZSBzdGF0aWMgX2ZpbHRlclJlc3VsdEJ5U2ltcGxlQ29uZGl0aW9uKGNvbmRpdGlvbiwgdGVtcDogYW55KSB7XG4vLyAgICAgY29uc29sZS5sb2coJ0RFQUwgZmluZFRlbXAgPT09ICcsIGNvbmRpdGlvbilcbi8vICAgICBpZiAodHlwZW9mIChjb25kaXRpb24pID09ICdvYmplY3QnKSB7XG4vLyAgICAgICB2YXIgZmllbGQgPSBjb25kaXRpb25bMF07XG4vLyAgICAgICB2YXIgb3BlcmF0b3IgPSBjb25kaXRpb25bMV07XG4vLyAgICAgICB2YXIgdmFsdWUgPSBjb25kaXRpb25bMl07XG4vLyAgICAgICBsZXQgcmVnIDogYW55ID0gbnVsbDtcbi8vICAgICAgIGxldCBvcG51bSA9IGZhbHNlO1xuLy8gICAgICAgbGV0IHJldmVyc2UgPSBmYWxzZTtcbi8vICAgICAgIGNvbnNvbGUubG9nKCdmaWVsZCAoMSk6JyArIGZpZWxkLCBvcGVyYXRvciwgdmFsdWUpXG4vLyAgICAgICBpZiAob3BlcmF0b3IgPT0gJ3N0YXJ0c3dpdGgnKSB7XG4vLyAgICAgICAgIHJlZyA9IG5ldyBSZWdFeHAoXCJeXCIgKyB2YWx1ZSwgJ2knKTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJ2VuZHN3aXRoJykge1xuLy8gICAgICAgICByZWcgPSBuZXcgUmVnRXhwKHZhbHVlICsgXCIkXCIsICdpJyk7XG4vLyAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICdjb250YWlucycpIHtcbi8vICAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCh2YWx1ZSwgJ2knKTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJ2xpa2UnIHx8IG9wZXJhdG9yID09ICdub3QgbGlrZScpIHtcbi8vICAgICAgICAgaWYgKG9wZXJhdG9yID09ICdub3QgbGlrZScpIHtcbi8vICAgICAgICAgICByZXZlcnNlID0gdHJ1ZTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZiAodmFsdWUubWF0Y2goL14lLislJC8pKSB7XG4vLyAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9eJS8sICcnKS5yZXBsYWNlKC8lJC8sICcnKVxuLy8gICAgICAgICAgIG9wZXJhdG9yID0gJ2NvbnRhaW5zJ1xuLy8gICAgICAgICAgIHJlZyA9IG5ldyBSZWdFeHAodmFsdWUsICdpJyk7XG4vLyAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUubWF0Y2goLy4rJSQvKSkge1xuLy8gICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvJSQvLCAnJylcbi8vICAgICAgICAgICBvcGVyYXRvciA9ICdzdGFydHN3aXRoJ1xuLy8gICAgICAgICAgIHJlZyA9IG5ldyBSZWdFeHAoXCJeXCIgKyB2YWx1ZSwgJ2knKTtcbi8vICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5tYXRjaCgvXiUvKSkge1xuLy8gICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXiUvLCAnJylcbi8vICAgICAgICAgICBvcGVyYXRvciA9ICdlbmRzd2l0aCdcbi8vICAgICAgICAgICByZWcgPSBuZXcgUmVnRXhwKHZhbHVlICsgXCIkXCIsICdpJyk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJ3JlZ2V4Jykge1xuLy8gICAgICAgICByZWcgPSBuZXcgUmVnRXhwKHZhbHVlLCAnaScpO1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnbm90UmVnZXgnKSB7XG4vLyAgICAgICAgIHJlZyA9IG5ldyBSZWdFeHAodmFsdWUsICdpJyk7XG4vLyAgICAgICAgIHJldmVyc2UgPSB0cnVlO1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnaXNudWxsJykge1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnaXNub3RudWxsJykge1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnPScpIHtcbi8vICAgICAgICAgb3BudW0gPSB0cnVlO1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnPj0nKSB7XG4vLyAgICAgICAgIG9wbnVtID0gdHJ1ZTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJz4nKSB7XG4vLyAgICAgICAgIG9wbnVtID0gdHJ1ZTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJzwnKSB7XG4vLyAgICAgICAgIG9wbnVtID0gdHJ1ZTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJyE9Jykge1xuLy8gICAgICAgICBvcG51bSA9IHRydWU7XG4vLyAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICc8PScpIHtcbi8vICAgICAgICAgb3BudW0gPSB0cnVlO1xuLy8gICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgdGhyb3cgKFwiVW5rb3duIG9wZXJhdG9yIFwiICsgb3BlcmF0b3IpXG4vLyAgICAgICB9XG5cbi8vICAgICAgIGNvbnNvbGUubG9nKCdmaWVsZDonICsgZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSwgcmVnKVxuLy8gICAgICAgdGVtcCA9IHRlbXAuZmlsdGVyKGZ1bmN0aW9uIChkLCBpbmRleCwgYXJyYXkpIHtcbi8vICAgICAgICAgLy9jb25zb2xlLmxvZyhkW2ZpZWxkXSlcbi8vICAgICAgICAgaWYgKHJlZyA9PSBudWxsKSB7XG4vLyAgICAgICAgICAgaWYgKG9wbnVtICYmIHR5cGVvZiAoZFtmaWVsZF0pID09ICdudW1iZXInKSB7XG4vLyAgICAgICAgICAgICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpXG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIGlmIChvcGVyYXRvciA9PSAnPScpIHtcbi8vICAgICAgICAgICAgIGlmICh0eXBlb2YgKGRbZmllbGRdKSA9PSAnYm9vbGVhbicpIHtcbi8vICAgICAgICAgICAgICAgaWYgKHZhbHVlID09ICcxJylcbi8vICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRydWU7XG4vLyAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSAnMCcpXG4vLyAgICAgICAgICAgICAgICAgdmFsdWUgPSBmYWxzZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGlmIChkW2ZpZWxkXSAhPT0gbnVsbCkge1xuLy8gICAgICAgICAgICAgICBpZiAoZFtmaWVsZF0gPT09IHZhbHVlKSB7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICdpc251bGwnKSB7XG4vLyAgICAgICAgICAgICBpZiAoZFtmaWVsZF0gPT0gbnVsbCkge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICdpc25vdG51bGwnKSB7XG4vLyAgICAgICAgICAgICBpZiAoZFtmaWVsZF0gIT0gbnVsbCkge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICc+PScpIHtcbi8vICAgICAgICAgICAgIGlmIChkW2ZpZWxkXSAhPT0gbnVsbCAmJiBkW2ZpZWxkXSA+PSB2YWx1ZSkge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICc+Jykge1xuLy8gICAgICAgICAgICAgaWYgKGRbZmllbGRdICE9PSBudWxsICYmIGRbZmllbGRdID4gdmFsdWUpIHtcbi8vICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnIT0nKSB7XG4vLyAgICAgICAgICAgICBpZiAoZFtmaWVsZF0gIT09IG51bGwgJiYgZFtmaWVsZF0gIT0gdmFsdWUpIHtcbi8vICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnPD0nKSB7XG4vLyAgICAgICAgICAgICBpZiAoZFtmaWVsZF0gIT09IG51bGwgJiYgZFtmaWVsZF0gPD0gdmFsdWUpIHtcbi8vICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnPCcpIHtcbi8vICAgICAgICAgICAgIGlmIChkW2ZpZWxkXSAhPT0gbnVsbCAmJiBkW2ZpZWxkXSA8IHZhbHVlKSB7XG4vLyAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICBpZiAoZFtmaWVsZF0gJiYgZFtmaWVsZF0ubWF0Y2gocmVnKSkge1xuLy8gICAgICAgICAgICAgaWYgKHJldmVyc2UpIHtcbi8vICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgICAgfVxuXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYgKHJldmVyc2UpIHtcbi8vICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gZmFsc2U7XG4vLyAgICAgICB9KVxuLy8gICAgIH1cbi8vICAgICByZXR1cm4gdGVtcDtcbi8vICAgfVxuXG4vLyB9Il19