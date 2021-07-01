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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZGF0YS1ncmlkLW9wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiRDovTXlIb21lL2FuZHJvaWQvd29ya3NwYWNlL2dpdC9tYS1uZy1kYXRhZ3JpZC9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjLyIsInNvdXJjZXMiOlsibGliL2ludGVyZmFjZXMvbWEtZGF0YS1ncmlkLW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUNBQXVDO0FBMkN2QyxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBMkIsQ0FBQztRQUM3RCxLQUFLLEVBQUUsR0FBRztRQUNWLFFBQVEsRUFBRSxHQUFHO1FBQ2IsS0FBSyxFQUFFLE1BQU07S0FDZCxFQUFFO1FBQ0QsS0FBSyxFQUFFLEdBQUc7UUFDVixRQUFRLEVBQUUsR0FBRztRQUNiLEtBQUssRUFBRSxPQUFPO0tBQ2YsRUFBRTtRQUNELEtBQUssRUFBRSxHQUFHO1FBQ1YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsS0FBSyxFQUFFLE1BQU07S0FDZCxFQUFFO1FBQ0QsS0FBSyxFQUFFLEdBQUc7UUFDVixRQUFRLEVBQUUsV0FBVztRQUNyQixLQUFLLEVBQUUsT0FBTztLQUNmLEVBQUUsQ0FBQztBQUVKLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUEyQixDQUFDO1FBQzFELEtBQUssRUFBRSxHQUFHO1FBQ1YsUUFBUSxFQUFFLEdBQUc7UUFDYixLQUFLLEVBQUUsTUFBTTtLQUNkLEVBQUU7UUFDRCxLQUFLLEVBQUUsR0FBRztRQUNWLFFBQVEsRUFBRSxHQUFHO1FBQ2IsS0FBSyxFQUFFLE9BQU87S0FDZixDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBMkI7SUFDM0Q7UUFDRSxLQUFLLEVBQUUsRUFBRTtRQUNULFFBQVEsRUFBRSxFQUFFO1FBQ1osS0FBSyxFQUFFLEVBQUU7S0FDVixFQUFFO1FBQ0QsS0FBSyxFQUFFLFFBQVE7UUFDZixRQUFRLEVBQUUsTUFBTTtRQUNoQixLQUFLLEVBQUUs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QUkiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmlsdGVyQ29uZGl0aW9ucyB9IGZyb20gXCJAYW1uMzEvZmlsdGVyLW11bHRpcGxlLWNvbmRpdGlvbnNcIjtcbmltcG9ydCB7IFR5cGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENlbGwgfSBmcm9tIFwiLi9tYS1kYXRhLWdyaWQtY2VsbFwiO1xuXG5cbmV4cG9ydCB0eXBlIE1hRGF0YUdyaWRTZWxlY3RNZXRob2QgPSAncm93JyB8ICdjZWxsJ1xuZXhwb3J0IGludGVyZmFjZSBNYURhdGFHcmlkU2VsZWN0RXZlbnQge1xuICBpbmRleDogbnVtYmVyO1xuICByb3c6IGFueTtcbiAgdmFsdWU/OiBhbnk7XG4gIHByb3A/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFEYXRhR3JpZEhlYWRGaWx0ZXJFdmVudCB7XG4gIHdoZXJlOiBGaWx0ZXJDb25kaXRpb25zLFxuICBkYXRhPzogW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFEYXRhR3JpZENvbHVtbk9wdGlvbnMge1xuXG4gIHRpdGxlPzogc3RyaW5nO1xuICBjc3NDbGFzcz86IHN0cmluZztcbiAgaXNSb3dOdW1iZXI/OiBib29sZWFuO1xuICBpc1Jvd0hUTUw/OiBib29sZWFuO1xuICBwcm9wOiBzdHJpbmc7XG4gIHNvcnRlZD86IGJvb2xlYW47XG4gIGV4dEZpbHRlcj86IGJvb2xlYW47XG4gIGRhdGFUeXBlPzogJ2Jvb2xlYW4nIHwgJ2Jvb2wnIHwgJ251bWJlcicgfCAnZGF0ZScgfCAnc3RyaW5nJyB8ICdkYXRldGltZScgfCAndGltZSc7XG4gIGhlYWRGaWx0ZXI/OiBNYURhdGFHcmlkSGVhZEZpbHRlcltdO1xuICBvcERlZmF1dEZpbHRlcj86IHN0cmluZztcbiAgZXh0RmlsdGVyU2VsZWN0ZWQ/OiBib29sZWFuO1xuICBwaXBlPzogKHZhbHVlLCByb3csIGNvbCkgPT4ge307XG4gIHVzZVRlbXBsYXRlPzogVHlwZTxNYURhdGFHcmlkQ2VsbD5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYURhdGFHcmlkSGVhZEZpbHRlciB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIG9wZXJhdG9yOiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3Qgb3B0aW9uc19oZWFkZXJfYm9vbGVhbjogTWFEYXRhR3JpZEhlYWRGaWx0ZXJbXSA9IFt7XG4gIHZhbHVlOiAnMScsXG4gIG9wZXJhdG9yOiAnPScsXG4gIGxhYmVsOiAndHJ1ZSdcbn0sIHtcbiAgdmFsdWU6ICcwJyxcbiAgb3BlcmF0b3I6ICc9JyxcbiAgbGFiZWw6ICdmYWxzZSdcbn0sIHtcbiAgdmFsdWU6ICdhJyxcbiAgb3BlcmF0b3I6ICdpc251bGwnLFxuICBsYWJlbDogJ05VTEwnXG59LCB7XG4gIHZhbHVlOiAnYScsXG4gIG9wZXJhdG9yOiAnaXNub3RudWxsJyxcbiAgbGFiZWw6ICchTlVMTCdcbn0sXTtcblxuZXhwb3J0IGNvbnN0IG9wdGlvbnNfaGVhZGVyX2Jvb2w6IE1hRGF0YUdyaWRIZWFkRmlsdGVyW10gPSBbe1xuICB2YWx1ZTogJzEnLFxuICBvcGVyYXRvcjogJz0nLFxuICBsYWJlbDogJ3RydWUnXG59LCB7XG4gIHZhbHVlOiAnMCcsXG4gIG9wZXJhdG9yOiAnPScsXG4gIGxhYmVsOiAnZmFsc2UnXG59XTtcblxuZXhwb3J0IGNvbnN0IG9wdGlvbnNfaGVhZGVyX3N0cmluZzogTWFEYXRhR3JpZEhlYWRGaWx0ZXJbXSA9IFtcbiAge1xuICAgIHZhbHVlOiAnJyxcbiAgICBvcGVyYXRvcjogJycsXG4gICAgbGFiZWw6ICcnXG4gIH0sIHtcbiAgICB2YWx1ZTogJyUkezF9JScsXG4gICAgb3BlcmF0b3I6ICdsaWtlJyxcbiAgICBsYWJlbDogJ2NvbnRhaW5zJyxcbiAgfSwge1xuICAgIHZhbHVlOiAnJSR7MX0lJyxcbiAgICBvcGVyYXRvcjogJ25vdCBsaWtlJyxcbiAgICBsYWJlbDogJ3dpdGhvdXQnLFxuICB9LCB7XG4gICAgdmFsdWU6ICckezF9JScsXG4gICAgb3BlcmF0b3I6ICdsaWtlJyxcbiAgICBsYWJlbDogJ3N0YXJ0c3dpdGgnXG4gIH0sIHtcbiAgICB2YWx1ZTogJyR7MX0lJyxcbiAgICBvcGVyYXRvcjogJ25vdCBsaWtlJyxcbiAgICBsYWJlbDogJ25vdCBzdGFydCdcbiAgfSwge1xuICAgIHZhbHVlOiAnJSR7MX0nLFxuICAgIG9wZXJhdG9yOiAnbGlrZScsXG4gICAgbGFiZWw6ICdlbmRzd2l0aCcsXG4gIH0sIHtcbiAgICB2YWx1ZTogJyUkezF9JyxcbiAgICBvcGVyYXRvcjogJ25vdCBsaWtlJyxcbiAgICBsYWJlbDogJ25vdCBlbmQnLFxuICB9XTtcblxuZXhwb3J0IGNvbnN0IG9wdGlvbnNfaGVhZGVyX251bWJlcjogTWFEYXRhR3JpZEhlYWRGaWx0ZXJbXSA9IFt7XG4gIHZhbHVlOiAnJyxcbiAgb3BlcmF0b3I6ICcnLFxuICBsYWJlbDogJydcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICc9JyxcbiAgbGFiZWw6ICc9PSdcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICchPScsXG4gIGxhYmVsOiAnIT0nXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPicsXG4gIGxhYmVsOiAnPidcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICc+PScsXG4gIGxhYmVsOiAnPj0nXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPD0nLFxuICBsYWJlbDogJzw9Jyxcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICc8JyxcbiAgbGFiZWw6ICc8Jyxcbn1dO1xuXG5leHBvcnQgY29uc3Qgb3B0aW9uc19oZWFkZXJfZGF0ZTogTWFEYXRhR3JpZEhlYWRGaWx0ZXJbXSA9IFt7XG4gIHZhbHVlOiAnJyxcbiAgb3BlcmF0b3I6ICcnLFxuICBsYWJlbDogJydcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICc9JyxcbiAgbGFiZWw6ICc9PSdcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICchPScsXG4gIGxhYmVsOiAnIT0nXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPicsXG4gIGxhYmVsOiAnPidcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICc+PScsXG4gIGxhYmVsOiAnPj0nXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPD0nLFxuICBsYWJlbDogJzw9Jyxcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICc8JyxcbiAgbGFiZWw6ICc8Jyxcbn1dO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1hRGF0YUdyaWRGaWx0ZXJFdmVudCB7XG4gIHRleHQ6IHN0cmluZztcbiAgZmllbGRzOiBzdHJpbmdbXVxufVxuXG4vLyBleHBvcnQgY2xhc3MgTWFEYXRhIHtcbiAgXG4vLyAgIHN0YXRpYyBGaWx0ZXJCeUNvbmRpdGlvbnMod2hlcmUsIHRlbXA6IGFueSkge1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKCdERUFMIGZpbmRGdWxsID09PT0gJywgd2hlcmUpO1xuXG4vLyAgICAgaWYgKCF3aGVyZSB8fCB3aGVyZS5sZW5ndGggPT0gMCkge1xuLy8gICAgICAgcmV0dXJuIHRlbXA7XG4vLyAgICAgfVxuXG4vLyAgICAgdmFyIHJlc3VsdCA9IFtdO1xuLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd2hlcmUubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgIHZhciBjb25kaXRpb24gPSB3aGVyZVtpXTtcbi8vICAgICAgIGxldCB0ZW1wMTtcbi8vICAgICAgIC8vIGNvbnNvbGUubG9nKCdERUFMIHR5cGVvZihjb25kaXRpb24pJyArIHR5cGVvZiAoY29uZGl0aW9uKSwgY29uZGl0aW9uKTtcbi8vICAgICAgIGlmICh0eXBlb2YgKGNvbmRpdGlvbikgPT0gJ29iamVjdCcpIHtcbi8vICAgICAgICAgaWYgKGNvbmRpdGlvbi5sZW5ndGggPT0gMyAmJlxuLy8gICAgICAgICAgIHR5cGVvZiAoY29uZGl0aW9uWzBdKSA9PSAnc3RyaW5nJyAmJiB0eXBlb2YgKGNvbmRpdGlvblsxXSkgPT0gJ3N0cmluZycgJiZcbi8vICAgICAgICAgICAodHlwZW9mIChjb25kaXRpb25bMl0pID09ICdzdHJpbmcnIHx8IHR5cGVvZiAoY29uZGl0aW9uWzJdKSA9PSAnbnVtYmVyJykpIHtcbi8vICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRFQUwgVE8gRklORCBcIiwgdGVtcC5sZW5ndGgpXG4vLyAgICAgICAgICAgdGVtcDEgPSB0aGlzLl9maWx0ZXJSZXN1bHRCeVNpbXBsZUNvbmRpdGlvbihjb25kaXRpb24sIHRlbXApO1xuLy8gICAgICAgICB9IGVsc2UgaWYgKGNvbmRpdGlvbi5sZW5ndGggPiAwICYmIGNvbmRpdGlvbi5maW5kKGQgPT4gdHlwZW9mIChkKSA9PSAnb2JqZWN0JykpIHtcbi8vICAgICAgICAgICB0ZW1wMSA9IHRoaXMuRmlsdGVyQnlDb25kaXRpb25zKGNvbmRpdGlvbiwgdGVtcCk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH0gZWxzZSB7XG4vLyAgICAgICAgIGlmICh0eXBlb2YgKGNvbmRpdGlvbikgPT0gJ3N0cmluZycpIHtcbi8vICAgICAgICAgICBpZiAoY29uZGl0aW9uICE9ICdvcicgJiYgY29uZGl0aW9uICE9ICdhbmQnKSB7XG4vLyAgICAgICAgICAgICB0aHJvdyAoXCJVbmV4cGVjdGVkIGNvbmRpdGlvbiA6XCIgKyBjb25kaXRpb24pXG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICB9XG4vLyAgICAgICBpZiAodGVtcDEpIHtcbi8vICAgICAgICAgLy8gY29uc29sZS5sb2coJ0RFQUwgVE9ETycsIHRlbXAxLmxlbmd0aCk7XG4vLyAgICAgICAgIC8vIENhcyBvw7kgbCdvcGVyYXRvciBwcsOpY8OpZGVudCDDqXRhaXQgJ29yJ1xuLy8gICAgICAgICBpZiAod2hlcmVbaSArIDFdICYmIHdoZXJlW2kgKyAxXSA9PSAnb3InIHx8IChpID09IHdoZXJlLmxlbmd0aCAtIDEgJiYgd2hlcmVbaSAtIDFdICYmIHdoZXJlW2kgLSAxXSA9PSAnb3InKSkge1xuLy8gICAgICAgICAgIC8vIE9uIGFqb3V0ZSBhdSByZXN1bHQgbGVzIHZhbGV1cnMgbm9uIHRyb3V2w6llcyBwcsOpY8OpZGVtbWVudFxuLy8gICAgICAgICAgIGZvciAodmFyIHQgb2YgdGVtcDEpIHtcbi8vICAgICAgICAgICAgIC8vY29uc29sZS5sb2codCk7XG4vLyAgICAgICAgICAgICBpZiAoIShyZXN1bHQuZmluZChkID0+IGQgPT09IHQpKSkge1xuLy8gICAgICAgICAgICAgICByZXN1bHQucHVzaCh0KTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJERUFMIFRPRE8gT1JcIiwgcmVzdWx0KVxuXG4vLyAgICAgICAgICAgLy8gQ2FzIG/DuSBsJ29wZXJhdG9yIHByw6ljw6lkZW50IMOpdGFpdCAnYW5kJ1xuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiREVBTCBUT0RPIEFORFwiLCB0ZW1wMSk7XG4vLyAgICAgICAgICAgLy8gT24gZWNyYXNlIHRlbXBcbi8vICAgICAgICAgICB0ZW1wID0gdGVtcDE7XG4vLyAgICAgICAgICAgcmVzdWx0ID0gdGVtcDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuXG4vLyAgICAgICBpKys7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cbiBcblxuLy8gICBwcml2YXRlIHN0YXRpYyBfZmlsdGVyUmVzdWx0QnlTaW1wbGVDb25kaXRpb24oY29uZGl0aW9uLCB0ZW1wOiBhbnkpIHtcbi8vICAgICBjb25zb2xlLmxvZygnREVBTCBmaW5kVGVtcCA9PT0gJywgY29uZGl0aW9uKVxuLy8gICAgIGlmICh0eXBlb2YgKGNvbmRpdGlvbikgPT0gJ29iamVjdCcpIHtcbi8vICAgICAgIHZhciBmaWVsZCA9IGNvbmRpdGlvblswXTtcbi8vICAgICAgIHZhciBvcGVyYXRvciA9IGNvbmRpdGlvblsxXTtcbi8vICAgICAgIHZhciB2YWx1ZSA9IGNvbmRpdGlvblsyXTtcbi8vICAgICAgIGxldCByZWcgOiBhbnkgPSBudWxsO1xuLy8gICAgICAgbGV0IG9wbnVtID0gZmFsc2U7XG4vLyAgICAgICBsZXQgcmV2ZXJzZSA9IGZhbHNlO1xuLy8gICAgICAgY29uc29sZS5sb2coJ2ZpZWxkICgxKTonICsgZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSlcbi8vICAgICAgIGlmIChvcGVyYXRvciA9PSAnc3RhcnRzd2l0aCcpIHtcbi8vICAgICAgICAgcmVnID0gbmV3IFJlZ0V4cChcIl5cIiArIHZhbHVlLCAnaScpO1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnZW5kc3dpdGgnKSB7XG4vLyAgICAgICAgIHJlZyA9IG5ldyBSZWdFeHAodmFsdWUgKyBcIiRcIiwgJ2knKTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJ2NvbnRhaW5zJykge1xuLy8gICAgICAgICByZWcgPSBuZXcgUmVnRXhwKHZhbHVlLCAnaScpO1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnbGlrZScgfHwgb3BlcmF0b3IgPT0gJ25vdCBsaWtlJykge1xuLy8gICAgICAgICBpZiAob3BlcmF0b3IgPT0gJ25vdCBsaWtlJykge1xuLy8gICAgICAgICAgIHJldmVyc2UgPSB0cnVlO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmICh2YWx1ZS5tYXRjaCgvXiUuKyUkLykpIHtcbi8vICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL14lLywgJycpLnJlcGxhY2UoLyUkLywgJycpXG4vLyAgICAgICAgICAgb3BlcmF0b3IgPSAnY29udGFpbnMnXG4vLyAgICAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCh2YWx1ZSwgJ2knKTtcbi8vICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5tYXRjaCgvLislJC8pKSB7XG4vLyAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC8lJC8sICcnKVxuLy8gICAgICAgICAgIG9wZXJhdG9yID0gJ3N0YXJ0c3dpdGgnXG4vLyAgICAgICAgICAgcmVnID0gbmV3IFJlZ0V4cChcIl5cIiArIHZhbHVlLCAnaScpO1xuLy8gICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLm1hdGNoKC9eJS8pKSB7XG4vLyAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9eJS8sICcnKVxuLy8gICAgICAgICAgIG9wZXJhdG9yID0gJ2VuZHN3aXRoJ1xuLy8gICAgICAgICAgIHJlZyA9IG5ldyBSZWdFeHAodmFsdWUgKyBcIiRcIiwgJ2knKTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAncmVnZXgnKSB7XG4vLyAgICAgICAgIHJlZyA9IG5ldyBSZWdFeHAodmFsdWUsICdpJyk7XG4vLyAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICdub3RSZWdleCcpIHtcbi8vICAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCh2YWx1ZSwgJ2knKTtcbi8vICAgICAgICAgcmV2ZXJzZSA9IHRydWU7XG4vLyAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICdpc251bGwnKSB7XG4vLyAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICdpc25vdG51bGwnKSB7XG4vLyAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICc9Jykge1xuLy8gICAgICAgICBvcG51bSA9IHRydWU7XG4vLyAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICc+PScpIHtcbi8vICAgICAgICAgb3BudW0gPSB0cnVlO1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnPicpIHtcbi8vICAgICAgICAgb3BudW0gPSB0cnVlO1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnPCcpIHtcbi8vICAgICAgICAgb3BudW0gPSB0cnVlO1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnIT0nKSB7XG4vLyAgICAgICAgIG9wbnVtID0gdHJ1ZTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJzw9Jykge1xuLy8gICAgICAgICBvcG51bSA9IHRydWU7XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICB0aHJvdyAoXCJVbmtvd24gb3BlcmF0b3IgXCIgKyBvcGVyYXRvcilcbi8vICAgICAgIH1cblxuLy8gICAgICAgY29uc29sZS5sb2coJ2ZpZWxkOicgKyBmaWVsZCwgb3BlcmF0b3IsIHZhbHVlLCByZWcpXG4vLyAgICAgICB0ZW1wID0gdGVtcC5maWx0ZXIoZnVuY3Rpb24gKGQsIGluZGV4LCBhcnJheSkge1xuLy8gICAgICAgICAvL2NvbnNvbGUubG9nKGRbZmllbGRdKVxuLy8gICAgICAgICBpZiAocmVnID09IG51bGwpIHtcbi8vICAgICAgICAgICBpZiAob3BudW0gJiYgdHlwZW9mIChkW2ZpZWxkXSkgPT0gJ251bWJlcicpIHtcbi8vICAgICAgICAgICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSlcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgaWYgKG9wZXJhdG9yID09ICc9Jykge1xuLy8gICAgICAgICAgICAgaWYgKHR5cGVvZiAoZFtmaWVsZF0pID09ICdib29sZWFuJykge1xuLy8gICAgICAgICAgICAgICBpZiAodmFsdWUgPT0gJzEnKVxuLy8gICAgICAgICAgICAgICAgIHZhbHVlID0gdHJ1ZTtcbi8vICAgICAgICAgICAgICAgaWYgKHZhbHVlID09ICcwJylcbi8vICAgICAgICAgICAgICAgICB2YWx1ZSA9IGZhbHNlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgaWYgKGRbZmllbGRdICE9PSBudWxsKSB7XG4vLyAgICAgICAgICAgICAgIGlmIChkW2ZpZWxkXSA9PT0gdmFsdWUpIHtcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJ2lzbnVsbCcpIHtcbi8vICAgICAgICAgICAgIGlmIChkW2ZpZWxkXSA9PSBudWxsKSB7XG4vLyAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJ2lzbm90bnVsbCcpIHtcbi8vICAgICAgICAgICAgIGlmIChkW2ZpZWxkXSAhPSBudWxsKSB7XG4vLyAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJz49Jykge1xuLy8gICAgICAgICAgICAgaWYgKGRbZmllbGRdICE9PSBudWxsICYmIGRbZmllbGRdID49IHZhbHVlKSB7XG4vLyAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJz4nKSB7XG4vLyAgICAgICAgICAgICBpZiAoZFtmaWVsZF0gIT09IG51bGwgJiYgZFtmaWVsZF0gPiB2YWx1ZSkge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICchPScpIHtcbi8vICAgICAgICAgICAgIGlmIChkW2ZpZWxkXSAhPT0gbnVsbCAmJiBkW2ZpZWxkXSAhPSB2YWx1ZSkge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICc8PScpIHtcbi8vICAgICAgICAgICAgIGlmIChkW2ZpZWxkXSAhPT0gbnVsbCAmJiBkW2ZpZWxkXSA8PSB2YWx1ZSkge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICc8Jykge1xuLy8gICAgICAgICAgICAgaWYgKGRbZmllbGRdICE9PSBudWxsICYmIGRbZmllbGRdIDwgdmFsdWUpIHtcbi8vICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgIGlmIChkW2ZpZWxkXSAmJiBkW2ZpZWxkXS5tYXRjaChyZWcpKSB7XG4vLyAgICAgICAgICAgICBpZiAocmV2ZXJzZSkge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgICB9XG5cbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZiAocmV2ZXJzZSkge1xuLy8gICAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHJldHVybiBmYWxzZTtcbi8vICAgICAgIH0pXG4vLyAgICAgfVxuLy8gICAgIHJldHVybiB0ZW1wO1xuLy8gICB9XG5cbi8vIH0iXX0=