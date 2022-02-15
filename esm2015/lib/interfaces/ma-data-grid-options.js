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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZGF0YS1ncmlkLW9wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiRDovTXlIb21lL2FuZHJvaWQvd29ya3NwYWNlL2dpdC9tYS1uZy1kYXRhLWdyaWQvcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmZhY2VzL21hLWRhdGEtZ3JpZC1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1QztBQThEdkMsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQTJCLENBQUM7UUFDN0QsS0FBSyxFQUFFLEdBQUc7UUFDVixRQUFRLEVBQUUsR0FBRztRQUNiLEtBQUssRUFBRSxNQUFNO0tBQ2QsRUFBRTtRQUNELEtBQUssRUFBRSxHQUFHO1FBQ1YsUUFBUSxFQUFFLEdBQUc7UUFDYixLQUFLLEVBQUUsT0FBTztLQUNmLEVBQUU7UUFDRCxLQUFLLEVBQUUsR0FBRztRQUNWLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLEtBQUssRUFBRSxNQUFNO0tBQ2QsRUFBRTtRQUNELEtBQUssRUFBRSxHQUFHO1FBQ1YsUUFBUSxFQUFFLFdBQVc7UUFDckIsS0FBSyxFQUFFLE9BQU87S0FDZixFQUFFLENBQUM7QUFFSixNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBMkIsQ0FBQztRQUMxRCxLQUFLLEVBQUUsR0FBRztRQUNWLFFBQVEsRUFBRSxHQUFHO1FBQ2IsS0FBSyxFQUFFLE1BQU07S0FDZCxFQUFFO1FBQ0QsS0FBSyxFQUFFLEdBQUc7UUFDVixRQUFRLEVBQUUsR0FBRztRQUNiLEtBQUssRUFBRSxPQUFPO0tBQ2YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQTJCO0lBQzNEO1FBQ0UsS0FBSyxFQUFFLEVBQUU7UUFDVCxRQUFRLEVBQUUsRUFBRTtRQUNaLEtBQUssRUFBRSxFQUFFO0tBQ1YsRUFBRTtRQUNELEtBQUssRUFBRSxRQUFRO1FBQ2YsUUFBUSxFQUFFLE1BQU07UUFDaEIsS0FBSyxFQUFF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QUFJIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZpbHRlckNvbmRpdGlvbnMgfSBmcm9tIFwiQGFtbjMxL2ZpbHRlci1tdWx0aXBsZS1jb25kaXRpb25zXCI7XG5pbXBvcnQgeyBUeXBlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1hRGF0YUdyaWRDZWxsIH0gZnJvbSBcIi4vbWEtZGF0YS1ncmlkLWNlbGxcIjtcblxuXG5leHBvcnQgdHlwZSBNYURhdGFHcmlkU2VsZWN0TWV0aG9kID0gJ3JvdycgfCAnY2VsbCdcbmV4cG9ydCBpbnRlcmZhY2UgTWFEYXRhR3JpZFNlbGVjdEV2ZW50IHtcbiAgaW5kZXg6IG51bWJlcjtcbiAgcm93OiBhbnk7XG4gIHZhbHVlPzogYW55O1xuICBwcm9wPzogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFEYXRhR3JpZEhlYWRGaWx0ZXJFdmVudCB7XG4gIHdoZXJlOiBGaWx0ZXJDb25kaXRpb25zLFxuICBkYXRhPzogW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFEYXRhR3JpZFNlbGVjdGVkRmlsdGVyIHtcbiAgb3BlcmF0b3I6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZ3xudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFEYXRhR3JpZENvbHVtbk9wdGlvbnMge1xuICAvKipcbiAgICogRGlzcGxheSBvciBub3QgdGhlIGhlYWQgZmlsdGVyIHJlZ2FyZGluZyB0aGlzIGNvbHVtblxuICAgKi9cbiAgZmlsdGVyPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIFRpdGxlIG9mIGNvbHVtblxuICAgKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBEZWZhdXQgc2VsZWN0ZWQgb3BlcmF0b3JcbiAgICovXG4gIHNlbGVjdGVkRmlsdGVyPzogTWFEYXRhR3JpZFNlbGVjdGVkRmlsdGVyO1xuICBjc3NDbGFzcz86IHN0cmluZztcbiAgaXNSb3dOdW1iZXI/OiBib29sZWFuO1xuICBpc1Jvd0hUTUw/OiBib29sZWFuO1xuICBjYW5FZGl0PzogYm9vbGVhbjtcbiAvLyBjYW5EZWxldGU/OiBib29sZWFuO1xuICBwcm9wOiBzdHJpbmc7XG4gIHNvcnRlZD86IGJvb2xlYW47XG4gIGV4dEZpbHRlcj86IGJvb2xlYW47XG4gIGRhdGFUeXBlPzogJ2Jvb2xlYW4nIHwgJ2Jvb2wnIHwgJ251bWJlcicgfCAnZGF0ZScgfCAnc3RyaW5nJyB8ICdkYXRldGltZScgfCAndGltZScgfCAnZmxvYXQnIHwgJ3NlbGVjdG9yJztcbiAgaGVhZEZpbHRlcj86IE1hRGF0YUdyaWRIZWFkRmlsdGVyW107XG4gIG9wRGVmYXV0RmlsdGVyPzogc3RyaW5nO1xuICBleHRGaWx0ZXJTZWxlY3RlZD86IGJvb2xlYW47XG4gIHBpcGU/OiAodmFsdWUsIHJvdywgY29sKSA9PiB7fTtcbiAgdXNlVGVtcGxhdGU/OiBUeXBlPE1hRGF0YUdyaWRDZWxsPlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hRGF0YUdyaWRIZWFkRmlsdGVyIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgb3BlcmF0b3I6IHN0cmluZztcbiAgbGFiZWw/OiBzdHJpbmc7XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3Qgb3B0aW9uc19oZWFkZXJfYm9vbGVhbjogTWFEYXRhR3JpZEhlYWRGaWx0ZXJbXSA9IFt7XG4gIHZhbHVlOiAnMScsXG4gIG9wZXJhdG9yOiAnPScsXG4gIGxhYmVsOiAndHJ1ZSdcbn0sIHtcbiAgdmFsdWU6ICcwJyxcbiAgb3BlcmF0b3I6ICc9JyxcbiAgbGFiZWw6ICdmYWxzZSdcbn0sIHtcbiAgdmFsdWU6ICdhJyxcbiAgb3BlcmF0b3I6ICdpc251bGwnLFxuICBsYWJlbDogJ05VTEwnXG59LCB7XG4gIHZhbHVlOiAnYScsXG4gIG9wZXJhdG9yOiAnaXNub3RudWxsJyxcbiAgbGFiZWw6ICchTlVMTCdcbn0sXTtcblxuZXhwb3J0IGNvbnN0IG9wdGlvbnNfaGVhZGVyX2Jvb2w6IE1hRGF0YUdyaWRIZWFkRmlsdGVyW10gPSBbe1xuICB2YWx1ZTogJzEnLFxuICBvcGVyYXRvcjogJz0nLFxuICBsYWJlbDogJ3RydWUnXG59LCB7XG4gIHZhbHVlOiAnMCcsXG4gIG9wZXJhdG9yOiAnPScsXG4gIGxhYmVsOiAnZmFsc2UnXG59XTtcblxuZXhwb3J0IGNvbnN0IG9wdGlvbnNfaGVhZGVyX3N0cmluZzogTWFEYXRhR3JpZEhlYWRGaWx0ZXJbXSA9IFtcbiAge1xuICAgIHZhbHVlOiAnJyxcbiAgICBvcGVyYXRvcjogJycsXG4gICAgbGFiZWw6ICcnXG4gIH0sIHtcbiAgICB2YWx1ZTogJyUkezF9JScsXG4gICAgb3BlcmF0b3I6ICdsaWtlJyxcbiAgICBsYWJlbDogJ2NvbnRhaW5zJyxcbiAgfSwge1xuICAgIHZhbHVlOiAnJSR7MX0lJyxcbiAgICBvcGVyYXRvcjogJ25vdCBsaWtlJyxcbiAgICBsYWJlbDogJ3dpdGhvdXQnLFxuICB9LCB7XG4gICAgdmFsdWU6ICckezF9JScsXG4gICAgb3BlcmF0b3I6ICdsaWtlJyxcbiAgICBsYWJlbDogJ3N0YXJ0c3dpdGgnXG4gIH0sIHtcbiAgICB2YWx1ZTogJyR7MX0lJyxcbiAgICBvcGVyYXRvcjogJ25vdCBsaWtlJyxcbiAgICBsYWJlbDogJ25vdCBzdGFydCdcbiAgfSwge1xuICAgIHZhbHVlOiAnJSR7MX0nLFxuICAgIG9wZXJhdG9yOiAnbGlrZScsXG4gICAgbGFiZWw6ICdlbmRzd2l0aCcsXG4gIH0sIHtcbiAgICB2YWx1ZTogJyUkezF9JyxcbiAgICBvcGVyYXRvcjogJ25vdCBsaWtlJyxcbiAgICBsYWJlbDogJ25vdCBlbmQnLFxuICB9XTtcblxuZXhwb3J0IGNvbnN0IG9wdGlvbnNfaGVhZGVyX251bWJlcjogTWFEYXRhR3JpZEhlYWRGaWx0ZXJbXSA9IFt7XG4gIHZhbHVlOiAnJyxcbiAgb3BlcmF0b3I6ICcnLFxuICBsYWJlbDogJydcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICc9JyxcbiAgbGFiZWw6ICc9PSdcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICchPScsXG4gIGxhYmVsOiAnIT0nXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPicsXG4gIGxhYmVsOiAnPidcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICc+PScsXG4gIGxhYmVsOiAnPj0nXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPD0nLFxuICBsYWJlbDogJzw9Jyxcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICc8JyxcbiAgbGFiZWw6ICc8Jyxcbn1dO1xuXG5leHBvcnQgY29uc3Qgb3B0aW9uc19oZWFkZXJfZGF0ZTogTWFEYXRhR3JpZEhlYWRGaWx0ZXJbXSA9IFt7XG4gIHZhbHVlOiAnJyxcbiAgb3BlcmF0b3I6ICcnLFxuICBsYWJlbDogJydcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICc9JyxcbiAgbGFiZWw6ICc9PSdcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICchPScsXG4gIGxhYmVsOiAnIT0nXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPicsXG4gIGxhYmVsOiAnPidcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICc+PScsXG4gIGxhYmVsOiAnPj0nXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPD0nLFxuICBsYWJlbDogJzw9Jyxcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICc8JyxcbiAgbGFiZWw6ICc8Jyxcbn1dO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hRGF0YUdyaWRGaWx0ZXJFdmVudCB7XG4gIHRleHQ6IHN0cmluZztcbiAgZmllbGRzOiBzdHJpbmdbXVxufVxuXG4vLyBleHBvcnQgY2xhc3MgTWFEYXRhIHtcbiAgXG4vLyAgIHN0YXRpYyBGaWx0ZXJCeUNvbmRpdGlvbnMod2hlcmUsIHRlbXA6IGFueSkge1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKCdERUFMIGZpbmRGdWxsID09PT0gJywgd2hlcmUpO1xuXG4vLyAgICAgaWYgKCF3aGVyZSB8fCB3aGVyZS5sZW5ndGggPT0gMCkge1xuLy8gICAgICAgcmV0dXJuIHRlbXA7XG4vLyAgICAgfVxuXG4vLyAgICAgdmFyIHJlc3VsdCA9IFtdO1xuLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd2hlcmUubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgIHZhciBjb25kaXRpb24gPSB3aGVyZVtpXTtcbi8vICAgICAgIGxldCB0ZW1wMTtcbi8vICAgICAgIC8vIGNvbnNvbGUubG9nKCdERUFMIHR5cGVvZihjb25kaXRpb24pJyArIHR5cGVvZiAoY29uZGl0aW9uKSwgY29uZGl0aW9uKTtcbi8vICAgICAgIGlmICh0eXBlb2YgKGNvbmRpdGlvbikgPT0gJ29iamVjdCcpIHtcbi8vICAgICAgICAgaWYgKGNvbmRpdGlvbi5sZW5ndGggPT0gMyAmJlxuLy8gICAgICAgICAgIHR5cGVvZiAoY29uZGl0aW9uWzBdKSA9PSAnc3RyaW5nJyAmJiB0eXBlb2YgKGNvbmRpdGlvblsxXSkgPT0gJ3N0cmluZycgJiZcbi8vICAgICAgICAgICAodHlwZW9mIChjb25kaXRpb25bMl0pID09ICdzdHJpbmcnIHx8IHR5cGVvZiAoY29uZGl0aW9uWzJdKSA9PSAnbnVtYmVyJykpIHtcbi8vICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRFQUwgVE8gRklORCBcIiwgdGVtcC5sZW5ndGgpXG4vLyAgICAgICAgICAgdGVtcDEgPSB0aGlzLl9maWx0ZXJSZXN1bHRCeVNpbXBsZUNvbmRpdGlvbihjb25kaXRpb24sIHRlbXApO1xuLy8gICAgICAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbi5sZW5ndGggPiAwICYmIGNvbmRpdGlvbi5maW5kKGQgPT4gdHlwZW9mIChkKSA9PSAnb2JqZWN0JykpIHtcbi8vICAgICAgICAgICB0ZW1wMSA9IHRoaXMuRmlsdGVyQnlDb25kaXRpb25zKGNvbmRpdGlvbiwgdGVtcCk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIGlmICh0eXBlb2YgKGNvbmRpdGlvbikgPT0gJ3N0cmluZycpIHtcbi8vICAgICAgICAgICBpZiAoY29uZGl0aW9uICE9ICdvcicgJiYgY29uZGl0aW9uICE9ICdhbmQnKSB7XG4vLyAgICAgICAgICAgICB0aHJvdyAoXCJVbmV4cGVjdGVkIGNvbmRpdGlvbiA6XCIgKyBjb25kaXRpb24pXG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICB9XG4vLyAgICAgICBpZiAodGVtcDEpIHtcbi8vICAgICAgICAgLy8gY29uc29sZS5sb2coJ0RFQUwgVE9ETycsIHRlbXAxLmxlbmd0aCk7XG4vLyAgICAgICAgIC8vIENhcyBvw7kgbCdvcGVyYXRvciBwcsOpY8OpZGVudCDDqXRhaXQgJ29yJ1xuLy8gICAgICAgICBpZiAod2hlcmVbaSArIDFdICYmIHdoZXJlW2kgKyAxXSA9PSAnb3InIHx8IChpID09IHdoZXJlLmxlbmd0aCAtIDEgJiYgd2hlcmVbaSAtIDFdICYmIHdoZXJlW2kgLSAxXSA9PSAnb3InKSkge1xuLy8gICAgICAgICAgIC8vIE9uIGFqb3V0ZSBhdSByZXN1bHQgbGVzIHZhbGV1cnMgbm9uIHRyb3V2w6llcyBwcsOpY8OpZGVtbWVudFxuLy8gICAgICAgICAgIGZvciAodmFyIHQgb2YgdGVtcDEpIHtcbi8vICAgICAgICAgICAgIC8vY29uc29sZS5sb2codCk7XG4vLyAgICAgICAgICAgICBpZiAoIShyZXN1bHQuZmluZChkID0+IGQgPT09IHQpKSkge1xuLy8gICAgICAgICAgICAgICByZXN1bHQucHVzaCh0KTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJERUFMIFRPRE8gT1JcIiwgcmVzdWx0KVxuXG4vLyAgICAgICAgICAgLy8gQ2FzIG/DuSBsJ29wZXJhdG9yIHByw6ljw6lkZW50IMOpdGFpdCAnYW5kJ1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiREVBTCBUT0RPIEFORFwiLCB0ZW1wMSk7XG4vLyAgICAgICAgICAgLy8gT24gZWNyYXNlIHRlbXBcbi8vICAgICAgICAgICB0ZW1wID0gdGVtcDE7XG4vLyAgICAgICAgICAgcmVzdWx0ID0gdGVtcDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuXG4vLyAgICAgICBpKys7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cbiBcblxuLy8gICBwcml2YXRlIHN0YXRpYyBfZmlsdGVyUmVzdWx0QnlTaW1wbGVDb25kaXRpb24oY29uZGl0aW9uLCB0ZW1wOiBhbnkpIHtcbi8vICAgICBjb25zb2xlLmxvZygnREVBTCBmaW5kVGVtcCA9PT0gJywgY29uZGl0aW9uKVxuLy8gICAgIGlmICh0eXBlb2YgKGNvbmRpdGlvbikgPT0gJ29iamVjdCcpIHtcbi8vICAgICAgIHZhciBmaWVsZCA9IGNvbmRpdGlvblswXTtcbi8vICAgICAgIHZhciBvcGVyYXRvciA9IGNvbmRpdGlvblsxXTtcbi8vICAgICAgIHZhciB2YWx1ZSA9IGNvbmRpdGlvblsyXTtcbi8vICAgICAgIGxldCByZWcgOiBhbnkgPSBudWxsO1xuLy8gICAgICAgbGV0IG9wbnVtID0gZmFsc2U7XG4vLyAgICAgICBsZXQgcmV2ZXJzZSA9IGZhbHNlO1xuLy8gICAgICAgY29uc29sZS5sb2coJ2ZpZWxkICgxKTonICsgZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSlcbi8vICAgICAgIGlmIChvcGVyYXRvciA9PSAnc3RhcnRzd2l0aCcpIHtcbi8vICAgICAgICAgcmVnID0gbmV3IFJlZ0V4cChcIl5cIiArIHZhbHVlLCAnaScpO1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnZW5kc3dpdGgnKSB7XG4vLyAgICAgICAgIHJlZyA9IG5ldyBSZWdFeHAodmFsdWUgKyBcIiRcIiwgJ2knKTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJ2NvbnRhaW5zJykge1xuLy8gICAgICAgICByZWcgPSBuZXcgUmVnRXhwKHZhbHVlLCAnaScpO1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnbGlrZScgfHwgb3BlcmF0b3IgPT0gJ25vdCBsaWtlJykge1xuLy8gICAgICAgICBpZiAob3BlcmF0b3IgPT0gJ25vdCBsaWtlJykge1xuLy8gICAgICAgICAgIHJldmVyc2UgPSB0cnVlO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmICh2YWx1ZS5tYXRjaCgvXiUuKyUkLykpIHtcbi8vICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL14lLywgJycpLnJlcGxhY2UoLyUkLywgJycpXG4vLyAgICAgICAgICAgb3BlcmF0b3IgPSAnY29udGFpbnMnXG4vLyAgICAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCh2YWx1ZSwgJ2knKTtcbi8vICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5tYXRjaCgvLislJC8pKSB7XG4vLyAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC8lJC8sICcnKVxuLy8gICAgICAgICAgIG9wZXJhdG9yID0gJ3N0YXJ0c3dpdGgnXG4vLyAgICAgICAgICAgcmVnID0gbmV3IFJlZ0V4cChcIl5cIiArIHZhbHVlLCAnaScpO1xuLy8gICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLm1hdGNoKC9eJS8pKSB7XG4vLyAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9eJS8sICcnKVxuLy8gICAgICAgICAgIG9wZXJhdG9yID0gJ2VuZHN3aXRoJ1xuLy8gICAgICAgICAgIHJlZyA9IG5ldyBSZWdFeHAodmFsdWUgKyBcIiRcIiwgJ2knKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAncmVnZXgnKSB7XG4vLyAgICAgICAgIHJlZyA9IG5ldyBSZWdFeHAodmFsdWUsICdpJyk7XG4vLyAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICdub3RSZWdleCcpIHtcbi8vICAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCh2YWx1ZSwgJ2knKTtcbi8vICAgICAgICAgcmV2ZXJzZSA9IHRydWU7XG4vLyAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICdpc251bGwnKSB7XG4vLyAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICdpc25vdG51bGwnKSB7XG4vLyAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICc9Jykge1xuLy8gICAgICAgICBvcG51bSA9IHRydWU7XG4vLyAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICc+PScpIHtcbi8vICAgICAgICAgb3BudW0gPSB0cnVlO1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnPicpIHtcbi8vICAgICAgICAgb3BudW0gPSB0cnVlO1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnPCcpIHtcbi8vICAgICAgICAgb3BudW0gPSB0cnVlO1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnIT0nKSB7XG4vLyAgICAgICAgIG9wbnVtID0gdHJ1ZTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJzw9Jykge1xuLy8gICAgICAgICBvcG51bSA9IHRydWU7XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICB0aHJvdyAoXCJVbmtvd24gb3BlcmF0b3IgXCIgKyBvcGVyYXRvcilcbi8vICAgICAgIH1cblxuLy8gICAgICAgY29uc29sZS5sb2coJ2ZpZWxkOicgKyBmaWVsZCwgb3BlcmF0b3IsIHZhbHVlLCByZWcpXG4vLyAgICAgICB0ZW1wID0gdGVtcC5maWx0ZXIoZnVuY3Rpb24gKGQsIGluZGV4LCBhcnJheSkge1xuLy8gICAgICAgICAvL2NvbnNvbGUubG9nKGRbZmllbGRdKVxuLy8gICAgICAgICBpZiAocmVnID09IG51bGwpIHtcbi8vICAgICAgICAgICBpZiAob3BudW0gJiYgdHlwZW9mIChkW2ZpZWxkXSkgPT0gJ251bWJlcicpIHtcbi8vICAgICAgICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSlcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgaWYgKG9wZXJhdG9yID09ICc9Jykge1xuLy8gICAgICAgICAgICAgaWYgKHR5cGVvZiAoZFtmaWVsZF0pID09ICdib29sZWFuJykge1xuLy8gICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gJzEnKVxuLy8gICAgICAgICAgICAgICAgIHZhbHVlID0gdHJ1ZTtcbi8vICAgICAgICAgICAgICAgaWYgKHZhbHVlID09ICcwJylcbi8vICAgICAgICAgICAgICAgICB2YWx1ZSA9IGZhbHNlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgaWYgKGRbZmllbGRdICE9PSBudWxsKSB7XG4vLyAgICAgICAgICAgICAgIGlmIChkW2ZpZWxkXSA9PT0gdmFsdWUpIHtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJ2lzbnVsbCcpIHtcbi8vICAgICAgICAgICAgIGlmIChkW2ZpZWxkXSA9PSBudWxsKSB7XG4vLyAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJ2lzbm90bnVsbCcpIHtcbi8vICAgICAgICAgICAgIGlmIChkW2ZpZWxkXSAhPSBudWxsKSB7XG4vLyAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJz49Jykge1xuLy8gICAgICAgICAgICAgaWYgKGRbZmllbGRdICE9PSBudWxsICYmIGRbZmllbGRdID49IHZhbHVlKSB7XG4vLyAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJz4nKSB7XG4vLyAgICAgICAgICAgICBpZiAoZFtmaWVsZF0gIT09IG51bGwgJiYgZFtmaWVsZF0gPiB2YWx1ZSkge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICchPScpIHtcbi8vICAgICAgICAgICAgIGlmIChkW2ZpZWxkXSAhPT0gbnVsbCAmJiBkW2ZpZWxkXSAhPSB2YWx1ZSkge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICc8PScpIHtcbi8vICAgICAgICAgICAgIGlmIChkW2ZpZWxkXSAhPT0gbnVsbCAmJiBkW2ZpZWxkXSA8PSB2YWx1ZSkge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICc8Jykge1xuLy8gICAgICAgICAgICAgaWYgKGRbZmllbGRdICE9PSBudWxsICYmIGRbZmllbGRdIDwgdmFsdWUpIHtcbi8vICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgIGlmIChkW2ZpZWxkXSAmJiBkW2ZpZWxkXS5tYXRjaChyZWcpKSB7XG4vLyAgICAgICAgICAgICBpZiAocmV2ZXJzZSkge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgICB9XG5cbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZiAocmV2ZXJzZSkge1xuLy8gICAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHJldHVybiBmYWxzZTtcbi8vICAgICAgIH0pXG4vLyAgICAgfVxuLy8gICAgIHJldHVybiB0ZW1wO1xuLy8gICB9XG5cbi8vIH0iXX0=