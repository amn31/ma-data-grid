//import { Type } from '@angular/core';
export const options_header_boolean = [{
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
        label: 'NULL'
    }, {
        value: 'a',
        operator: 'isnotnull',
        label: '!NULL'
    },];
export const options_header_bool = [{
        value: '1',
        operator: '=',
        label: 'true'
    }, {
        value: '0',
        operator: '=',
        label: 'false'
    }];
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
    }];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZGF0YS1ncmlkLW9wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiRDovTXlIb21lL2FuZHJvaWQvd29ya3NwYWNlL2dpdC9tYS1uZy1kYXRhLWdyaWQvcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmZhY2VzL21hLWRhdGEtZ3JpZC1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1QztBQStLdkMsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQTJCLENBQUM7UUFDN0QsS0FBSyxFQUFFLEdBQUc7UUFDVixRQUFRLEVBQUUsR0FBRztRQUNiLEtBQUssRUFBRSxNQUFNO0tBQ2QsRUFBRTtRQUNELEtBQUssRUFBRSxHQUFHO1FBQ1YsUUFBUSxFQUFFLEdBQUc7UUFDYixLQUFLLEVBQUUsT0FBTztLQUNmLEVBQUU7UUFDRCxLQUFLLEVBQUUsR0FBRztRQUNWLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLEtBQUssRUFBRSxNQUFNO0tBQ2QsRUFBRTtRQUNELEtBQUssRUFBRSxHQUFHO1FBQ1YsUUFBUSxFQUFFLFdBQVc7UUFDckIsS0FBSyxFQUFFLE9BQU87S0FDZixFQUFFLENBQUM7QUFFSixNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBMkIsQ0FBQztRQUMxRCxLQUFLLEVBQUUsR0FBRztRQUNWLFFBQVEsRUFBRSxHQUFHO1FBQ2IsS0FBSyxFQUFFLE1BQU07S0FDZCxFQUFFO1FBQ0QsS0FBSyxFQUFFLEdBQUc7UUFDVixRQUFRLEVBQUUsR0FBRztRQUNiLEtBQUssRUFBRSxPQUFPO0tBQ2YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQTJCO0lBQzNEO1FBQ0UsS0FBSyxFQUFFLEVBQUU7UUFDVCxRQUFRLEVBQUUsRUFBRTtRQUNaLEtBQUssRUFBRSxFQUFFO0tBQ1YsRUFBRTtRQUNELEtBQUssRUFBRSxRQUFRO1FBQ2YsUUFBUSxFQUFFLE1BQU07UUFDaEIsS0FBSyxFQUFF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QUFJIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZpbHRlckNvbmRpdGlvbnMgfSBmcm9tIFwiQGFtbjMxL2ZpbHRlci1tdWx0aXBsZS1jb25kaXRpb25zXCI7XG5pbXBvcnQgeyBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1hRGF0YUdyaWRDZWxsIH0gZnJvbSBcIi4vbWEtZGF0YS1ncmlkLWNlbGxcIjtcblxuXG5leHBvcnQgdHlwZSBNYURhdGFHcmlkU2VsZWN0TWV0aG9kID0gJ3JvdycgfCAnY2VsbCdcbmV4cG9ydCBpbnRlcmZhY2UgTWFEYXRhR3JpZFNlbGVjdEV2ZW50IHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgcm93OiBhbnk7XG4gIHZhbHVlPzogYW55O1xuICBwcm9wPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hRGF0YUdyaWRIZWFkRmlsdGVyRXZlbnQge1xuICB3aGVyZTogRmlsdGVyQ29uZGl0aW9ucyxcbiAgZGF0YT86IFtdO1xufVxuXG4vKipcbiAqIFNvcnRlZCBmaWVsZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1hRGF0YUdyaWRTb3J0ZWRGaWVsZCB7XG4gIC8qKlxuICAgKiBmaWVsZCBuYW1lXG4gICAqL1xuICBmaWVsZDogc3RyaW5nOyBcbiAgLyoqXG4gICAqIEludmVydCBvciBub3QgdGhlIHNvcnRlZCByZXN1bHRcbiAgICovXG4gIHJldmVyc2U/OiBib29sZWFuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFEYXRhR3JpZFNlbGVjdGVkRmlsdGVyIHtcbiAgLyoqXG4gICAqIE9wZXJhdG9yIGNhbiBiZSAnPScsJz4nLC4uLlxuICAgKi9cbiAgb3BlcmF0b3I6IHN0cmluZztcbiAgLyoqXG4gICAqIHZhbHVlIHRvIGNvbXBhcmVcbiAgICovXG4gIHZhbHVlOiBzdHJpbmd8bnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hRGF0YUdyaWRDb2x1bW5PcHRpb25zIHtcbiAgLyoqXG4gICAqIERpc3BsYXkgb3Igbm90IHRoZSBoZWFkIGZpbHRlciByZWdhcmRpbmcgdGhpcyBjb2x1bW5cbiAgICovXG4gIGZpbHRlcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBUaXRsZSBvZiBjb2x1bW5cbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKipcbiAgICogRGVmYXV0IHNlbGVjdGVkIG9wZXJhdG9yIFxuICAgKiBFeGFtcGxlOiB7IFxuICAgICAgICBvcGVyYXRvcjogJz0nLCB2YWx1ZTogMzQgXG4gICAgICB9LFxuICAgKi9cbiAgc2VsZWN0ZWRGaWx0ZXI/OiBNYURhdGFHcmlkU2VsZWN0ZWRGaWx0ZXI7XG4gIC8qKlxuICAgKiBUbyBjdXN0b20gdGhlIGNzcyBvZiB0aGUgY2VsbCBcbiAgICogVG8gY2hhbmdlIGFsbCBDU1MgOiA8bWEtZGF0YS1ncmlkIGN1c3RvbUNTUz1cIm15Y3NzXCIuLi8+IFxuICAgKi9cbiAgY3NzQ2xhc3M/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBwcmludGVkIHVzZSBIVE1MXG4gICAqL1xuICBpc0hUTUw/OiBib29sZWFuO1xuICAvKipcbiAgICogQWxsb3cgdG8gY2hhbmdlIHRoZSBjb250YWlucyBvZiB0aGUgY29sdW1uXG4gICAqIFxuICAgKiB3aGVuIGEgdmFsdWUgaXMgY2hhbmdlZCwgJ3Jvd3NDaGFuZ2UnIGV2ZW50IGlzIHNlbnQgXG4gICAqIDxtYS1kYXRhLWdyaWQgKHJvd3NDaGFuZ2UpPVwicm93c0NoYW5nZSgkZXZlbnQpXCIuLi8+XG4gICAqL1xuICBjYW5FZGl0PzogYm9vbGVhbjtcbiAgLy8gY2FuRGVsZXRlPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFRoZSBpZGVudGlmaWVyIGZpZWxkIG9mIHRoZSBjb2x1bW4uIFxuICAgKiBJaGlzIHByb3BlcnR5IGlzIHVzZWQgdG8gc29ydCB0aGUgY29udGVudCBvZiB0aGUgZ3JpZFxuICAgKi9cbiAgcHJvcDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGNvbHVtbiBjYW4gYmUgc29ydGVkIG9yIG5vdCBieSB0aGUgcHJvcGVydHkgJ3Byb3AnXG4gICAqL1xuICBzb3J0ZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogRGVmaW5lIGlzIHRoZSBjb2x1bW4gY2FuIGJlIGZpbHRlciB3aXRoIHRoZSBleHRlcm5hbCBmaWx0ZXIuXG4gICAqIFNvbWUgY29uZmlndXJhdGlvbiBhcmUgcmVxdWlyZWQsIGV4YW1wbGU6XG4gICAqIDxtYS1kYXRhLWdyaWQgW2V4dEZpbHRlcl09XCJ0cnVlXCIgKGV4dEZpbHRlckNoYW5nZSk9XCJleHRVcGRhdGVGaWx0ZXIoJGV2ZW50KVwiLi4vPlxuICAgKi9cbiAgZXh0RmlsdGVyPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFR5cGUgb2YgZGF0YSBvZiB0aGUgY29sdW1uXG4gICAqIFxuICAgKiBUeXBlICdzZWxlY3RvcicgY2FuIGJlIHVzZWQgb24gaWRlbnRpZmllciBwcm9wZXJ0eSB0byBzZWxlY3Qgcm93cygpLCBleGFtcGxlOlxuICAgKiAgeyBwcm9wOiAnc2VsZWN0ZWQnLCB0aXRsZTogJ1NlbGVjdGVkJywgZGF0YVR5cGU6ICdzZWxlY3RvcicgfVxuICAgKiBcbiAgICogVG8gY2F0Y2ggdGhlIGV2ZW50IHdoZW4gYSByb3cgaXMgc2VsZWN0ZWQgeW91IGhhdmUgdG8gdXNlICdyb3dzU2VsZWN0J1xuICAgKiA8bWEtZGF0YS1ncmlkIChyb3dzU2VsZWN0KT1cIlNlbGVjdFJvd09yQ2VsbCgkZXZlbnQpXCIgLi4uLz5cbiAgICovXG4gIGRhdGFUeXBlPzogJ2Jvb2xlYW4nIHwgJ2Jvb2wnIHwgJ251bWJlcicgfCAnZGF0ZScgfCAnc3RyaW5nJyB8ICdkYXRldGltZScgfCAndGltZScgfCAnZmxvYXQnIHwgJ3NlbGVjdG9yJztcbiAgLyoqXG4gICAqIEZpbHRlciBvZiB0aGUgY29sdW1uLCBhY2NvcmRpbmcgdG8gdGhlICdkYXRhVHlwZScsIHRoZSBjb2x1bW4gd2lsbCBiZSBmaWx0ZXJlZC5cbiAgICogSGVyZSB5b3UgY2FuIGNoYW5nZWQgdGhlIHR5cGUgb3IgcHJlLXNlbGVjdCB0aGUgZmlsdGVyOlxuICAgKiBFeGFtcGxlOiBbe1xuICAgICAgICAgICAgICAgICAgdmFsdWU6ICcxJyxcbiAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiAnPScsXG4gICAgICAgICAgICAgICAgICBjaGVja2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6ICd0cnVlJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAnMCcsXG4gICAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6ICdmYWxzZSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICovXG4gIGhlYWRGaWx0ZXI/OiBNYURhdGFHcmlkSGVhZEZpbHRlcltdO1xuICAvKipcbiAgICogV2hlbiB0aGUgY29sdW1uIGlzIGZpbHRlcmVkIGJ5IHRoZSBleHRlcm5hbCBmaWx0ZXIgYW5kICdleHRGaWx0ZXInIGlzIHNldHRlZCB0byB0cnVlIFxuICAgKiBBY2NvcmRpbmcgdG8gJ2V4dEZpbHRlclNlbGVjdGVkJywgdGhlIGNvbHVtbiBpbiB0aGUgZXh0ZXJuYWwgZmlsdGVyIHdpbGwgYmUgcHJlLXNlbGVjdGVkIG9yIG5vdFxuICAgKi9cbiAgZXh0RmlsdGVyU2VsZWN0ZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogVG8gY2hhbmdlIHRoZSBjb250ZW50IGRpc3BsYXllZCwgdXNlIHRoaXMgY2FsbGJhY2sgdG8gcmV0dXJuIGRpc3BsYXllZCB2YWx1ZS5cbiAgICovXG4gIHBpcGU/KHZhbHVlOiBhbnksIHJvdzogYW55LCBjb2w6IGFueSk6IHN0cmluZyAgLy89PiB7cmV0dXJuOiBzdHJpbmd8bnVtYmVyfTtcbiAgLyoqXG4gICAqIFRvIGN1c3RvbSB0aGUgY29udGVudCBvZiB0aGUgY2VsbCwgd2UgY2FuIHVzZSBhIHNwZWNpZmljIGNvbXBvbmVudCB3aGljaCBoYXZlIHRvIGltcGxlbWVudCBNYURhdGFHcmlkQ2VsbCBjbGFzc1xuICAgKiBcbiAgICogZXhwb3J0IGNsYXNzIHh4eHh4eHh4eHhDb21wb25lbnQgaW1wbGVtZW50cyBNYURhdGFHcmlkQ2VsbCAgIHtcbiAgICAgICAgXG4gICAgICAgIEBJbnB1dCgpIGRhdGE6IFtdO1xuICAgICAgICBASW5wdXQoKSBwcm9wOiBzdHJpbmc7XG4gICAgICAgIEBJbnB1dCgpIGNvbDogTWFEYXRhR3JpZENvbHVtbk9wdGlvbnM7XG5cbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSB0aGVHcmlkOk1hRGF0YUdyaWRDb21wb25lbnQpIHt9XG5cbiAgICB9IFxuICAgKiBcbiAgICovXG4gIHVzZVRlbXBsYXRlPzogVHlwZTxNYURhdGFHcmlkQ2VsbD5cbn1cblxuLyoqXG4gKiBIZWFkIEZpbHRlclxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1hRGF0YUdyaWRIZWFkRmlsdGVyIHtcbiAgLyoqXG4gICAqIFZhbHVlIHRvIHNlYXJjaCBpbiB0aGUgaGVhZCBvZiBmaWx0ZXJcbiAgICogVG8gY29tcG9zZSB0aGUgZmlsdGVyIHlvdSBjYW4gdXNlICckezF9JyB3aGljaCBpcyB0aGUgaW5wdXQgdmFsdWUsXG4gICAqIFNvIGZvciBleGFtcGxlLCB5b3UgY2FuIGJlIGNyZWF0ZSBzcGVjaWZpYyBTUUwgZmlsdGVyIGxpa2UgdGhhdDpcbiAgICogICAgICAgIHtcbiAgICAgICAgICAgICAgdmFsdWU6ICclJHsxfSUnLFxuICAgICAgICAgICAgICBvcGVyYXRvcjogJ25vdCBsaWtlJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICd3aXRob3V0JyxcbiAgICAgICAgICAgIH1cbiAgICovXG4gIHZhbHVlOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBPcGVyYXRvciBvZiByZXNlYXJjaCBFeGFtcGxlIDogJz0nLCdsaWtlJywuLi5cbiAgICovXG4gIG9wZXJhdG9yOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBWYWx1ZSBkaXNwbGF5ZWQgZm9yIHNlbGVjdGluZ1xuICAgKi9cbiAgbGFiZWw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBGb3IgcHJlLXNlbGVjdGVkIFxuICAgKi9cbiAgY2hlY2tlZD86IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNvbnN0IG9wdGlvbnNfaGVhZGVyX2Jvb2xlYW46IE1hRGF0YUdyaWRIZWFkRmlsdGVyW10gPSBbe1xuICB2YWx1ZTogJzEnLFxuICBvcGVyYXRvcjogJz0nLFxuICBsYWJlbDogJ3RydWUnXG59LCB7XG4gIHZhbHVlOiAnMCcsXG4gIG9wZXJhdG9yOiAnPScsXG4gIGxhYmVsOiAnZmFsc2UnXG59LCB7XG4gIHZhbHVlOiAnYScsXG4gIG9wZXJhdG9yOiAnaXNudWxsJyxcbiAgbGFiZWw6ICdOVUxMJ1xufSwge1xuICB2YWx1ZTogJ2EnLFxuICBvcGVyYXRvcjogJ2lzbm90bnVsbCcsXG4gIGxhYmVsOiAnIU5VTEwnXG59LF07XG5cbmV4cG9ydCBjb25zdCBvcHRpb25zX2hlYWRlcl9ib29sOiBNYURhdGFHcmlkSGVhZEZpbHRlcltdID0gW3tcbiAgdmFsdWU6ICcxJyxcbiAgb3BlcmF0b3I6ICc9JyxcbiAgbGFiZWw6ICd0cnVlJ1xufSwge1xuICB2YWx1ZTogJzAnLFxuICBvcGVyYXRvcjogJz0nLFxuICBsYWJlbDogJ2ZhbHNlJ1xufV07XG5cbmV4cG9ydCBjb25zdCBvcHRpb25zX2hlYWRlcl9zdHJpbmc6IE1hRGF0YUdyaWRIZWFkRmlsdGVyW10gPSBbXG4gIHtcbiAgICB2YWx1ZTogJycsXG4gICAgb3BlcmF0b3I6ICcnLFxuICAgIGxhYmVsOiAnJ1xuICB9LCB7XG4gICAgdmFsdWU6ICclJHsxfSUnLFxuICAgIG9wZXJhdG9yOiAnbGlrZScsXG4gICAgbGFiZWw6ICdjb250YWlucycsXG4gIH0sIHtcbiAgICB2YWx1ZTogJyUkezF9JScsXG4gICAgb3BlcmF0b3I6ICdub3QgbGlrZScsXG4gICAgbGFiZWw6ICd3aXRob3V0JyxcbiAgfSwge1xuICAgIHZhbHVlOiAnJHsxfSUnLFxuICAgIG9wZXJhdG9yOiAnbGlrZScsXG4gICAgbGFiZWw6ICdzdGFydHN3aXRoJ1xuICB9LCB7XG4gICAgdmFsdWU6ICckezF9JScsXG4gICAgb3BlcmF0b3I6ICdub3QgbGlrZScsXG4gICAgbGFiZWw6ICdub3Qgc3RhcnQnXG4gIH0sIHtcbiAgICB2YWx1ZTogJyUkezF9JyxcbiAgICBvcGVyYXRvcjogJ2xpa2UnLFxuICAgIGxhYmVsOiAnZW5kc3dpdGgnLFxuICB9LCB7XG4gICAgdmFsdWU6ICclJHsxfScsXG4gICAgb3BlcmF0b3I6ICdub3QgbGlrZScsXG4gICAgbGFiZWw6ICdub3QgZW5kJyxcbiAgfV07XG5cbmV4cG9ydCBjb25zdCBvcHRpb25zX2hlYWRlcl9udW1iZXI6IE1hRGF0YUdyaWRIZWFkRmlsdGVyW10gPSBbe1xuICB2YWx1ZTogJycsXG4gIG9wZXJhdG9yOiAnJyxcbiAgbGFiZWw6ICcnXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPScsXG4gIGxhYmVsOiAnPT0nXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnIT0nLFxuICBsYWJlbDogJyE9J1xufSwge1xuICB2YWx1ZTogJyR7MX0nLFxuICBvcGVyYXRvcjogJz4nLFxuICBsYWJlbDogJz4nXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPj0nLFxuICBsYWJlbDogJz49J1xufSwge1xuICB2YWx1ZTogJyR7MX0nLFxuICBvcGVyYXRvcjogJzw9JyxcbiAgbGFiZWw6ICc8PScsXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPCcsXG4gIGxhYmVsOiAnPCcsXG59XTtcblxuZXhwb3J0IGNvbnN0IG9wdGlvbnNfaGVhZGVyX2RhdGU6IE1hRGF0YUdyaWRIZWFkRmlsdGVyW10gPSBbe1xuICB2YWx1ZTogJycsXG4gIG9wZXJhdG9yOiAnJyxcbiAgbGFiZWw6ICcnXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPScsXG4gIGxhYmVsOiAnPT0nXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnIT0nLFxuICBsYWJlbDogJyE9J1xufSwge1xuICB2YWx1ZTogJyR7MX0nLFxuICBvcGVyYXRvcjogJz4nLFxuICBsYWJlbDogJz4nXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPj0nLFxuICBsYWJlbDogJz49J1xufSwge1xuICB2YWx1ZTogJyR7MX0nLFxuICBvcGVyYXRvcjogJzw9JyxcbiAgbGFiZWw6ICc8PScsXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPCcsXG4gIGxhYmVsOiAnPCcsXG59XTtcblxuZXhwb3J0IGludGVyZmFjZSBNYURhdGFHcmlkRmlsdGVyRXZlbnQge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGZpZWxkczogc3RyaW5nW11cbn1cblxuLy8gZXhwb3J0IGNsYXNzIE1hRGF0YSB7XG4gIFxuLy8gICBzdGF0aWMgRmlsdGVyQnlDb25kaXRpb25zKHdoZXJlLCB0ZW1wOiBhbnkpIHtcbi8vICAgICAvLyBjb25zb2xlLmxvZygnREVBTCBmaW5kRnVsbCA9PT09ICcsIHdoZXJlKTtcblxuLy8gICAgIGlmICghd2hlcmUgfHwgd2hlcmUubGVuZ3RoID09IDApIHtcbi8vICAgICAgIHJldHVybiB0ZW1wO1xuLy8gICAgIH1cblxuLy8gICAgIHZhciByZXN1bHQgPSBbXTtcbi8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdoZXJlLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICB2YXIgY29uZGl0aW9uID0gd2hlcmVbaV07XG4vLyAgICAgICBsZXQgdGVtcDE7XG4vLyAgICAgICAvLyBjb25zb2xlLmxvZygnREVBTCB0eXBlb2YoY29uZGl0aW9uKScgKyB0eXBlb2YgKGNvbmRpdGlvbiksIGNvbmRpdGlvbik7XG4vLyAgICAgICBpZiAodHlwZW9mIChjb25kaXRpb24pID09ICdvYmplY3QnKSB7XG4vLyAgICAgICAgIGlmIChjb25kaXRpb24ubGVuZ3RoID09IDMgJiZcbi8vICAgICAgICAgICB0eXBlb2YgKGNvbmRpdGlvblswXSkgPT0gJ3N0cmluZycgJiYgdHlwZW9mIChjb25kaXRpb25bMV0pID09ICdzdHJpbmcnICYmXG4vLyAgICAgICAgICAgKHR5cGVvZiAoY29uZGl0aW9uWzJdKSA9PSAnc3RyaW5nJyB8fCB0eXBlb2YgKGNvbmRpdGlvblsyXSkgPT0gJ251bWJlcicpKSB7XG4vLyAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJERUFMIFRPIEZJTkQgXCIsIHRlbXAubGVuZ3RoKVxuLy8gICAgICAgICAgIHRlbXAxID0gdGhpcy5fZmlsdGVyUmVzdWx0QnlTaW1wbGVDb25kaXRpb24oY29uZGl0aW9uLCB0ZW1wKTtcbi8vICAgICAgICAgfSBlbHNlIGlmIChjb25kaXRpb24ubGVuZ3RoID4gMCAmJiBjb25kaXRpb24uZmluZChkID0+IHR5cGVvZiAoZCkgPT0gJ29iamVjdCcpKSB7XG4vLyAgICAgICAgICAgdGVtcDEgPSB0aGlzLkZpbHRlckJ5Q29uZGl0aW9ucyhjb25kaXRpb24sIHRlbXApO1xuLy8gICAgICAgICB9XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBpZiAodHlwZW9mIChjb25kaXRpb24pID09ICdzdHJpbmcnKSB7XG4vLyAgICAgICAgICAgaWYgKGNvbmRpdGlvbiAhPSAnb3InICYmIGNvbmRpdGlvbiAhPSAnYW5kJykge1xuLy8gICAgICAgICAgICAgdGhyb3cgKFwiVW5leHBlY3RlZCBjb25kaXRpb24gOlwiICsgY29uZGl0aW9uKVxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgICAgaWYgKHRlbXAxKSB7XG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdERUFMIFRPRE8nLCB0ZW1wMS5sZW5ndGgpO1xuLy8gICAgICAgICAvLyBDYXMgb8O5IGwnb3BlcmF0b3IgcHLDqWPDqWRlbnQgw6l0YWl0ICdvcidcbi8vICAgICAgICAgaWYgKHdoZXJlW2kgKyAxXSAmJiB3aGVyZVtpICsgMV0gPT0gJ29yJyB8fCAoaSA9PSB3aGVyZS5sZW5ndGggLSAxICYmIHdoZXJlW2kgLSAxXSAmJiB3aGVyZVtpIC0gMV0gPT0gJ29yJykpIHtcbi8vICAgICAgICAgICAvLyBPbiBham91dGUgYXUgcmVzdWx0IGxlcyB2YWxldXJzIG5vbiB0cm91dsOpZXMgcHLDqWPDqWRlbW1lbnRcbi8vICAgICAgICAgICBmb3IgKHZhciB0IG9mIHRlbXAxKSB7XG4vLyAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHQpO1xuLy8gICAgICAgICAgICAgaWYgKCEocmVzdWx0LmZpbmQoZCA9PiBkID09PSB0KSkpIHtcbi8vICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godCk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiREVBTCBUT0RPIE9SXCIsIHJlc3VsdClcblxuLy8gICAgICAgICAgIC8vIENhcyBvw7kgbCdvcGVyYXRvciBwcsOpY8OpZGVudCDDqXRhaXQgJ2FuZCdcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRFQUwgVE9ETyBBTkRcIiwgdGVtcDEpO1xuLy8gICAgICAgICAgIC8vIE9uIGVjcmFzZSB0ZW1wXG4vLyAgICAgICAgICAgdGVtcCA9IHRlbXAxO1xuLy8gICAgICAgICAgIHJlc3VsdCA9IHRlbXA7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cblxuLy8gICAgICAgaSsrO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9XG4gXG5cbi8vICAgcHJpdmF0ZSBzdGF0aWMgX2ZpbHRlclJlc3VsdEJ5U2ltcGxlQ29uZGl0aW9uKGNvbmRpdGlvbiwgdGVtcDogYW55KSB7XG4vLyAgICAgY29uc29sZS5sb2coJ0RFQUwgZmluZFRlbXAgPT09ICcsIGNvbmRpdGlvbilcbi8vICAgICBpZiAodHlwZW9mIChjb25kaXRpb24pID09ICdvYmplY3QnKSB7XG4vLyAgICAgICB2YXIgZmllbGQgPSBjb25kaXRpb25bMF07XG4vLyAgICAgICB2YXIgb3BlcmF0b3IgPSBjb25kaXRpb25bMV07XG4vLyAgICAgICB2YXIgdmFsdWUgPSBjb25kaXRpb25bMl07XG4vLyAgICAgICBsZXQgcmVnIDogYW55ID0gbnVsbDtcbi8vICAgICAgIGxldCBvcG51bSA9IGZhbHNlO1xuLy8gICAgICAgbGV0IHJldmVyc2UgPSBmYWxzZTtcbi8vICAgICAgIGNvbnNvbGUubG9nKCdmaWVsZCAoMSk6JyArIGZpZWxkLCBvcGVyYXRvciwgdmFsdWUpXG4vLyAgICAgICBpZiAob3BlcmF0b3IgPT0gJ3N0YXJ0c3dpdGgnKSB7XG4vLyAgICAgICAgIHJlZyA9IG5ldyBSZWdFeHAoXCJeXCIgKyB2YWx1ZSwgJ2knKTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJ2VuZHN3aXRoJykge1xuLy8gICAgICAgICByZWcgPSBuZXcgUmVnRXhwKHZhbHVlICsgXCIkXCIsICdpJyk7XG4vLyAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICdjb250YWlucycpIHtcbi8vICAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCh2YWx1ZSwgJ2knKTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJ2xpa2UnIHx8IG9wZXJhdG9yID09ICdub3QgbGlrZScpIHtcbi8vICAgICAgICAgaWYgKG9wZXJhdG9yID09ICdub3QgbGlrZScpIHtcbi8vICAgICAgICAgICByZXZlcnNlID0gdHJ1ZTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZiAodmFsdWUubWF0Y2goL14lLislJC8pKSB7XG4vLyAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9eJS8sICcnKS5yZXBsYWNlKC8lJC8sICcnKVxuLy8gICAgICAgICAgIG9wZXJhdG9yID0gJ2NvbnRhaW5zJ1xuLy8gICAgICAgICAgIHJlZyA9IG5ldyBSZWdFeHAodmFsdWUsICdpJyk7XG4vLyAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUubWF0Y2goLy4rJSQvKSkge1xuLy8gICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvJSQvLCAnJylcbi8vICAgICAgICAgICBvcGVyYXRvciA9ICdzdGFydHN3aXRoJ1xuLy8gICAgICAgICAgIHJlZyA9IG5ldyBSZWdFeHAoXCJeXCIgKyB2YWx1ZSwgJ2knKTtcbi8vICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5tYXRjaCgvXiUvKSkge1xuLy8gICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXiUvLCAnJylcbi8vICAgICAgICAgICBvcGVyYXRvciA9ICdlbmRzd2l0aCdcbi8vICAgICAgICAgICByZWcgPSBuZXcgUmVnRXhwKHZhbHVlICsgXCIkXCIsICdpJyk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJ3JlZ2V4Jykge1xuLy8gICAgICAgICByZWcgPSBuZXcgUmVnRXhwKHZhbHVlLCAnaScpO1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnbm90UmVnZXgnKSB7XG4vLyAgICAgICAgIHJlZyA9IG5ldyBSZWdFeHAodmFsdWUsICdpJyk7XG4vLyAgICAgICAgIHJldmVyc2UgPSB0cnVlO1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnaXNudWxsJykge1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnaXNub3RudWxsJykge1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnPScpIHtcbi8vICAgICAgICAgb3BudW0gPSB0cnVlO1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnPj0nKSB7XG4vLyAgICAgICAgIG9wbnVtID0gdHJ1ZTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJz4nKSB7XG4vLyAgICAgICAgIG9wbnVtID0gdHJ1ZTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJzwnKSB7XG4vLyAgICAgICAgIG9wbnVtID0gdHJ1ZTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJyE9Jykge1xuLy8gICAgICAgICBvcG51bSA9IHRydWU7XG4vLyAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICc8PScpIHtcbi8vICAgICAgICAgb3BudW0gPSB0cnVlO1xuLy8gICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgdGhyb3cgKFwiVW5rb3duIG9wZXJhdG9yIFwiICsgb3BlcmF0b3IpXG4vLyAgICAgICB9XG5cbi8vICAgICAgIGNvbnNvbGUubG9nKCdmaWVsZDonICsgZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSwgcmVnKVxuLy8gICAgICAgdGVtcCA9IHRlbXAuZmlsdGVyKGZ1bmN0aW9uIChkLCBpbmRleCwgYXJyYXkpIHtcbi8vICAgICAgICAgLy9jb25zb2xlLmxvZyhkW2ZpZWxkXSlcbi8vICAgICAgICAgaWYgKHJlZyA9PSBudWxsKSB7XG4vLyAgICAgICAgICAgaWYgKG9wbnVtICYmIHR5cGVvZiAoZFtmaWVsZF0pID09ICdudW1iZXInKSB7XG4vLyAgICAgICAgICAgICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpXG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIGlmIChvcGVyYXRvciA9PSAnPScpIHtcbi8vICAgICAgICAgICAgIGlmICh0eXBlb2YgKGRbZmllbGRdKSA9PSAnYm9vbGVhbicpIHtcbi8vICAgICAgICAgICAgICAgaWYgKHZhbHVlID09ICcxJylcbi8vICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRydWU7XG4vLyAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSAnMCcpXG4vLyAgICAgICAgICAgICAgICAgdmFsdWUgPSBmYWxzZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGlmIChkW2ZpZWxkXSAhPT0gbnVsbCkge1xuLy8gICAgICAgICAgICAgICBpZiAoZFtmaWVsZF0gPT09IHZhbHVlKSB7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICdpc251bGwnKSB7XG4vLyAgICAgICAgICAgICBpZiAoZFtmaWVsZF0gPT0gbnVsbCkge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICdpc25vdG51bGwnKSB7XG4vLyAgICAgICAgICAgICBpZiAoZFtmaWVsZF0gIT0gbnVsbCkge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICc+PScpIHtcbi8vICAgICAgICAgICAgIGlmIChkW2ZpZWxkXSAhPT0gbnVsbCAmJiBkW2ZpZWxkXSA+PSB2YWx1ZSkge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICc+Jykge1xuLy8gICAgICAgICAgICAgaWYgKGRbZmllbGRdICE9PSBudWxsICYmIGRbZmllbGRdID4gdmFsdWUpIHtcbi8vICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnIT0nKSB7XG4vLyAgICAgICAgICAgICBpZiAoZFtmaWVsZF0gIT09IG51bGwgJiYgZFtmaWVsZF0gIT0gdmFsdWUpIHtcbi8vICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnPD0nKSB7XG4vLyAgICAgICAgICAgICBpZiAoZFtmaWVsZF0gIT09IG51bGwgJiYgZFtmaWVsZF0gPD0gdmFsdWUpIHtcbi8vICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnPCcpIHtcbi8vICAgICAgICAgICAgIGlmIChkW2ZpZWxkXSAhPT0gbnVsbCAmJiBkW2ZpZWxkXSA8IHZhbHVlKSB7XG4vLyAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICBpZiAoZFtmaWVsZF0gJiYgZFtmaWVsZF0ubWF0Y2gocmVnKSkge1xuLy8gICAgICAgICAgICAgaWYgKHJldmVyc2UpIHtcbi8vICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgICAgfVxuXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYgKHJldmVyc2UpIHtcbi8vICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gZmFsc2U7XG4vLyAgICAgICB9KVxuLy8gICAgIH1cbi8vICAgICByZXR1cm4gdGVtcDtcbi8vICAgfVxuXG4vLyB9Il19