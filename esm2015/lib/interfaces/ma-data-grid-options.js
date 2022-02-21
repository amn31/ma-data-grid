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
    }, {
        value: ['${1}', '${1}'],
        operator: ['>=', '<='],
        label: 'between'
    }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZGF0YS1ncmlkLW9wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiRDovTXlIb21lL2FuZHJvaWQvd29ya3NwYWNlL2dpdC9tYS1uZy1kYXRhLWdyaWQvcHJvamVjdHMvbWEtZGF0YS1ncmlkL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmZhY2VzL21hLWRhdGEtZ3JpZC1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVDQUF1QztBQW1MdkMsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQTJCLENBQUM7UUFDN0QsS0FBSyxFQUFFLEdBQUc7UUFDVixRQUFRLEVBQUUsR0FBRztRQUNiLEtBQUssRUFBRSxNQUFNO0tBQ2QsRUFBRTtRQUNELEtBQUssRUFBRSxHQUFHO1FBQ1YsUUFBUSxFQUFFLEdBQUc7UUFDYixLQUFLLEVBQUUsT0FBTztLQUNmLEVBQUU7UUFDRCxLQUFLLEVBQUUsR0FBRztRQUNWLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLEtBQUssRUFBRSxNQUFNO0tBQ2QsRUFBRTtRQUNELEtBQUssRUFBRSxHQUFHO1FBQ1YsUUFBUSxFQUFFLFdBQVc7UUFDckIsS0FBSyxFQUFFLE9BQU87S0FDZixFQUFFLENBQUM7QUFFSixNQUFNLENBQUMsTUFBTSxtQkFBbUIsR0FBMkIsQ0FBQztRQUMxRCxLQUFLLEVBQUUsR0FBRztRQUNWLFFBQVEsRUFBRSxHQUFHO1FBQ2IsS0FBSyxFQUFFLE1BQU07S0FDZCxFQUFFO1FBQ0QsS0FBSyxFQUFFLEdBQUc7UUFDVixRQUFRLEVBQUUsR0FBRztRQUNiLEtBQUssRUFBRSxPQUFPO0tBQ2YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQTJCO0lBQzNEO1FBQ0UsS0FBSyxFQUFFLEVBQUU7UUFDVCxRQUFRLEVBQUUsRUFBRTtRQUNaLEtBQUssRUFBRSxFQUFFO0tBQ1YsRUFBRTtRQUNELEtBQUssRUFBRSxRQUFRO1FBQ2YsUUFBUSxFQUFFLE1BQU07UUFDaEIsS0FBSyxFQUFF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QkFBNkI7QUFDN0IsZ0JBQWdCO0FBQ2hCLGNBQWM7QUFDZCxtQkFBbUI7QUFDbkIsbURBQW1EO0FBQ25ELDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFDOUIsZ0JBQWdCO0FBQ2hCLDJCQUEyQjtBQUMzQixjQUFjO0FBRWQsWUFBWTtBQUNaLHlCQUF5QjtBQUN6Qix5QkFBeUI7QUFDekIsWUFBWTtBQUNaLHdCQUF3QjtBQUN4QixXQUFXO0FBQ1gsUUFBUTtBQUNSLG1CQUFtQjtBQUNuQixNQUFNO0FBRU4sSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGaWx0ZXJDb25kaXRpb25zIH0gZnJvbSBcIkBhbW4zMS9maWx0ZXItbXVsdGlwbGUtY29uZGl0aW9uc1wiO1xuaW1wb3J0IHsgVHlwZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNYURhdGFHcmlkQ2VsbCB9IGZyb20gXCIuL21hLWRhdGEtZ3JpZC1jZWxsXCI7XG5cblxuZXhwb3J0IHR5cGUgTWFEYXRhR3JpZFNlbGVjdE1ldGhvZCA9ICdyb3cnIHwgJ2NlbGwnXG5leHBvcnQgaW50ZXJmYWNlIE1hRGF0YUdyaWRTZWxlY3RFdmVudCB7XG4gIGluZGV4OiBudW1iZXI7XG4gIHJvdzogYW55O1xuICB2YWx1ZT86IGFueTtcbiAgcHJvcD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYURhdGFHcmlkSGVhZEZpbHRlckV2ZW50IHtcbiAgd2hlcmU6IEZpbHRlckNvbmRpdGlvbnMsXG4gIGRhdGE/OiBbXTtcbn1cblxuLyoqXG4gKiBTb3J0ZWQgZmllbGRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNYURhdGFHcmlkU29ydGVkRmllbGQge1xuICAvKipcbiAgICogZmllbGQgbmFtZVxuICAgKi9cbiAgZmllbGQ6IHN0cmluZzsgXG4gIC8qKlxuICAgKiBJbnZlcnQgb3Igbm90IHRoZSBzb3J0ZWQgcmVzdWx0XG4gICAqL1xuICByZXZlcnNlPzogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hRGF0YUdyaWRTZWxlY3RlZEZpbHRlciB7XG4gIC8qKlxuICAgKiBPcGVyYXRvciBjYW4gYmUgJz09JywnPicsLi4uXG4gICAqL1xuICBsYWJlbDogc3RyaW5nO1xuICAvKipcbiAgICogdmFsdWUocykgdG8gc2VsZWN0IGluIHRoZSBmaWx0ZXIgd2hlbiBkYXRhLWdyaWQgaXMgaW5pdGlhbGl6ZWRcbiAgICovXG4gIHZhbHVlPzogc3RyaW5nfG51bWJlcnxzdHJpbmdbXXxudW1iZXJbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYURhdGFHcmlkQ29sdW1uT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBEaXNwbGF5IG9yIG5vdCB0aGUgaGVhZCBmaWx0ZXIgcmVnYXJkaW5nIHRoaXMgY29sdW1uXG4gICAqL1xuICBmaWx0ZXI/OiBib29sZWFuO1xuICAvKipcbiAgICogVGl0bGUgb2YgY29sdW1uXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcbiAgLyoqXG4gICAqIERlZmF1dCBzZWxlY3RlZCBvcGVyYXRvciBcbiAgICogRXhhbXBsZTogeyBcbiAgICAgICAgb3BlcmF0b3I6ICc9JywgdmFsdWU6IDM0IFxuICAgICAgfSxcbiAgICovXG4gIHNlbGVjdGVkRmlsdGVyPzogTWFEYXRhR3JpZFNlbGVjdGVkRmlsdGVyO1xuICAvKipcbiAgICogVG8gY3VzdG9tIHRoZSBjc3Mgb2YgdGhlIGNlbGwgXG4gICAqIFRvIGNoYW5nZSBhbGwgQ1NTIDogPG1hLWRhdGEtZ3JpZCBjdXN0b21DU1M9XCJteWNzc1wiLi4vPiBcbiAgICovXG4gIGNzc0NsYXNzPzogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGRhdGEgcHJpbnRlZCB1c2UgSFRNTFxuICAgKi9cbiAgaXNIVE1MPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEFsbG93IHRvIGNoYW5nZSB0aGUgY29udGFpbnMgb2YgdGhlIGNvbHVtblxuICAgKiBcbiAgICogd2hlbiBhIHZhbHVlIGlzIGNoYW5nZWQsICdyb3dzQ2hhbmdlJyBldmVudCBpcyBzZW50IFxuICAgKiA8bWEtZGF0YS1ncmlkIChyb3dzQ2hhbmdlKT1cInJvd3NDaGFuZ2UoJGV2ZW50KVwiLi4vPlxuICAgKi9cbiAgY2FuRWRpdD86IGJvb2xlYW47XG4gIC8vIGNhbkRlbGV0ZT86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBUaGUgaWRlbnRpZmllciBmaWVsZCBvZiB0aGUgY29sdW1uLiBcbiAgICogSWhpcyBwcm9wZXJ0eSBpcyB1c2VkIHRvIHNvcnQgdGhlIGNvbnRlbnQgb2YgdGhlIGdyaWRcbiAgICovXG4gIHByb3A6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBjb2x1bW4gY2FuIGJlIHNvcnRlZCBvciBub3QgYnkgdGhlIHByb3BlcnR5ICdwcm9wJ1xuICAgKi9cbiAgc29ydGVkPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIERlZmluZSBpcyB0aGUgY29sdW1uIGNhbiBiZSBmaWx0ZXIgd2l0aCB0aGUgZXh0ZXJuYWwgZmlsdGVyLlxuICAgKiBTb21lIGNvbmZpZ3VyYXRpb24gYXJlIHJlcXVpcmVkLCBleGFtcGxlOlxuICAgKiA8bWEtZGF0YS1ncmlkIFtleHRGaWx0ZXJdPVwidHJ1ZVwiIChleHRGaWx0ZXJDaGFuZ2UpPVwiZXh0VXBkYXRlRmlsdGVyKCRldmVudClcIi4uLz5cbiAgICovXG4gIGV4dEZpbHRlcj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBUeXBlIG9mIGRhdGEgb2YgdGhlIGNvbHVtblxuICAgKiBcbiAgICogVHlwZSAnc2VsZWN0b3InIGNhbiBiZSB1c2VkIG9uIGlkZW50aWZpZXIgcHJvcGVydHkgdG8gc2VsZWN0IHJvd3MoKSwgZXhhbXBsZTpcbiAgICogIHsgcHJvcDogJ3NlbGVjdGVkJywgdGl0bGU6ICdTZWxlY3RlZCcsIGRhdGFUeXBlOiAnc2VsZWN0b3InIH1cbiAgICogXG4gICAqIFRvIGNhdGNoIHRoZSBldmVudCB3aGVuIGEgcm93IGlzIHNlbGVjdGVkIHlvdSBoYXZlIHRvIHVzZSAncm93c1NlbGVjdCdcbiAgICogPG1hLWRhdGEtZ3JpZCAocm93c1NlbGVjdCk9XCJTZWxlY3RSb3dPckNlbGwoJGV2ZW50KVwiIC4uLi8+XG4gICAqL1xuICBkYXRhVHlwZT86ICdib29sZWFuJyB8ICdib29sJyB8ICdudW1iZXInIHwgJ2RhdGUnIHwgJ3N0cmluZycgfCAnZGF0ZXRpbWUnIHwgJ3RpbWUnIHwgJ2Zsb2F0JyB8ICdzZWxlY3Rvcic7XG4gIC8qKlxuICAgKiBGaWx0ZXIgb2YgdGhlIGNvbHVtbiwgYWNjb3JkaW5nIHRvIHRoZSAnZGF0YVR5cGUnLCB0aGUgY29sdW1uIHdpbGwgYmUgZmlsdGVyZWQuXG4gICAqIEhlcmUgeW91IGNhbiBjaGFuZ2VkIHRoZSB0eXBlIG9yIHByZS1zZWxlY3QgdGhlIGZpbHRlcjpcbiAgICogRXhhbXBsZTogW3tcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiAnMScsXG4gICAgICAgICAgICAgICAgICBvcGVyYXRvcjogJz0nLFxuICAgICAgICAgICAgICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiAndHJ1ZSdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogJzAnLFxuICAgICAgICAgICAgICAgICAgb3BlcmF0b3I6ICc9JyxcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiAnZmFsc2UnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgbGFiZWw6ICdiZXR3ZWVuIFsyMC0zN10nLFxuICAgICAgICAgICAgICAgICAgdmFsdWVzOiBbJzIwJywnMzcnXSxcbiAgICAgICAgICAgICAgICAgIG9wZXJhdG9yczogWyc+PScsJzw9J11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICovXG4gIGhlYWRGaWx0ZXI/OiBNYURhdGFHcmlkSGVhZEZpbHRlcltdO1xuICAvKipcbiAgICogV2hlbiB0aGUgY29sdW1uIGlzIGZpbHRlcmVkIGJ5IHRoZSBleHRlcm5hbCBmaWx0ZXIgYW5kICdleHRGaWx0ZXInIGlzIHNldHRlZCB0byB0cnVlIFxuICAgKiBBY2NvcmRpbmcgdG8gJ2V4dEZpbHRlclNlbGVjdGVkJywgdGhlIGNvbHVtbiBpbiB0aGUgZXh0ZXJuYWwgZmlsdGVyIHdpbGwgYmUgcHJlLXNlbGVjdGVkIG9yIG5vdFxuICAgKi9cbiAgZXh0RmlsdGVyU2VsZWN0ZWQ/OiBib29sZWFuO1xuICAvKipcbiAgICogVG8gY2hhbmdlIHRoZSBjb250ZW50IGRpc3BsYXllZCwgdXNlIHRoaXMgY2FsbGJhY2sgdG8gcmV0dXJuIGRpc3BsYXllZCB2YWx1ZS5cbiAgICovXG4gIHBpcGU/KHZhbHVlOiBhbnksIHJvdzogYW55LCBjb2w6IGFueSk6IHN0cmluZyAgLy89PiB7cmV0dXJuOiBzdHJpbmd8bnVtYmVyfTtcbiAgLyoqXG4gICAqIFRvIGN1c3RvbSB0aGUgY29udGVudCBvZiB0aGUgY2VsbCwgd2UgY2FuIHVzZSBhIHNwZWNpZmljIGNvbXBvbmVudCB3aGljaCBoYXZlIHRvIGltcGxlbWVudCBNYURhdGFHcmlkQ2VsbCBjbGFzc1xuICAgKiBcbiAgICogZXhwb3J0IGNsYXNzIHh4eHh4eHh4eHhDb21wb25lbnQgaW1wbGVtZW50cyBNYURhdGFHcmlkQ2VsbCAgIHtcbiAgICAgICAgXG4gICAgICAgIEBJbnB1dCgpIGRhdGE6IFtdO1xuICAgICAgICBASW5wdXQoKSBwcm9wOiBzdHJpbmc7XG4gICAgICAgIEBJbnB1dCgpIGNvbDogTWFEYXRhR3JpZENvbHVtbk9wdGlvbnM7XG5cbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSB0aGVHcmlkOk1hRGF0YUdyaWRDb21wb25lbnQpIHt9XG5cbiAgICB9IFxuICAgKiBcbiAgICovXG4gIHVzZVRlbXBsYXRlPzogVHlwZTxNYURhdGFHcmlkQ2VsbD5cbn1cblxuLyoqXG4gKiBIZWFkIEZpbHRlclxuICovXG5leHBvcnQgaW50ZXJmYWNlIE1hRGF0YUdyaWRIZWFkRmlsdGVyIHtcbiAgLyoqXG4gICAqIFZhbHVlIHRvIHNlYXJjaCBpbiB0aGUgaGVhZCBvZiBmaWx0ZXJcbiAgICogVG8gY29tcG9zZSB0aGUgZmlsdGVyIHlvdSBjYW4gdXNlICckezF9JyB3aGljaCBpcyB0aGUgaW5wdXQgdmFsdWUsXG4gICAqIFNvIGZvciBleGFtcGxlLCB5b3UgY2FuIGJlIGNyZWF0ZSBzcGVjaWZpYyBTUUwgZmlsdGVyIGxpa2UgdGhhdDpcbiAgICogICAgICAgIHtcbiAgICAgICAgICAgICAgdmFsdWU6ICclJHsxfSUnLFxuICAgICAgICAgICAgICBvcGVyYXRvcjogJ25vdCBsaWtlJyxcbiAgICAgICAgICAgICAgbGFiZWw6ICd3aXRob3V0JyxcbiAgICAgICAgICAgIH1cbiAgICovXG4gIHZhbHVlOiBzdHJpbmd8c3RyaW5nW107XG4gIC8qKlxuICAgKiBPcGVyYXRvciBvZiByZXNlYXJjaCBFeGFtcGxlIDogJz0nLCdsaWtlJywuLi5cbiAgICovXG4gIG9wZXJhdG9yOiBzdHJpbmd8c3RyaW5nW107XG4gIC8qKlxuICAgKiBWYWx1ZSBkaXNwbGF5ZWQgZm9yIHNlbGVjdGluZ1xuICAgKi9cbiAgbGFiZWw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBGb3IgcHJlLXNlbGVjdGVkIFxuICAgKi9cbiAgY2hlY2tlZD86IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNvbnN0IG9wdGlvbnNfaGVhZGVyX2Jvb2xlYW46IE1hRGF0YUdyaWRIZWFkRmlsdGVyW10gPSBbe1xuICB2YWx1ZTogJzEnLFxuICBvcGVyYXRvcjogJz0nLFxuICBsYWJlbDogJ3RydWUnXG59LCB7XG4gIHZhbHVlOiAnMCcsXG4gIG9wZXJhdG9yOiAnPScsXG4gIGxhYmVsOiAnZmFsc2UnXG59LCB7XG4gIHZhbHVlOiAnYScsXG4gIG9wZXJhdG9yOiAnaXNudWxsJyxcbiAgbGFiZWw6ICdOVUxMJ1xufSwge1xuICB2YWx1ZTogJ2EnLFxuICBvcGVyYXRvcjogJ2lzbm90bnVsbCcsXG4gIGxhYmVsOiAnIU5VTEwnXG59LF07XG5cbmV4cG9ydCBjb25zdCBvcHRpb25zX2hlYWRlcl9ib29sOiBNYURhdGFHcmlkSGVhZEZpbHRlcltdID0gW3tcbiAgdmFsdWU6ICcxJyxcbiAgb3BlcmF0b3I6ICc9JyxcbiAgbGFiZWw6ICd0cnVlJ1xufSwge1xuICB2YWx1ZTogJzAnLFxuICBvcGVyYXRvcjogJz0nLFxuICBsYWJlbDogJ2ZhbHNlJ1xufV07XG5cbmV4cG9ydCBjb25zdCBvcHRpb25zX2hlYWRlcl9zdHJpbmc6IE1hRGF0YUdyaWRIZWFkRmlsdGVyW10gPSBbXG4gIHtcbiAgICB2YWx1ZTogJycsXG4gICAgb3BlcmF0b3I6ICcnLFxuICAgIGxhYmVsOiAnJ1xuICB9LCB7XG4gICAgdmFsdWU6ICclJHsxfSUnLFxuICAgIG9wZXJhdG9yOiAnbGlrZScsXG4gICAgbGFiZWw6ICdjb250YWlucycsXG4gIH0sIHtcbiAgICB2YWx1ZTogJyUkezF9JScsXG4gICAgb3BlcmF0b3I6ICdub3QgbGlrZScsXG4gICAgbGFiZWw6ICd3aXRob3V0JyxcbiAgfSwge1xuICAgIHZhbHVlOiAnJHsxfSUnLFxuICAgIG9wZXJhdG9yOiAnbGlrZScsXG4gICAgbGFiZWw6ICdzdGFydHN3aXRoJ1xuICB9LCB7XG4gICAgdmFsdWU6ICckezF9JScsXG4gICAgb3BlcmF0b3I6ICdub3QgbGlrZScsXG4gICAgbGFiZWw6ICdub3Qgc3RhcnQnXG4gIH0sIHtcbiAgICB2YWx1ZTogJyUkezF9JyxcbiAgICBvcGVyYXRvcjogJ2xpa2UnLFxuICAgIGxhYmVsOiAnZW5kc3dpdGgnLFxuICB9LCB7XG4gICAgdmFsdWU6ICclJHsxfScsXG4gICAgb3BlcmF0b3I6ICdub3QgbGlrZScsXG4gICAgbGFiZWw6ICdub3QgZW5kJyxcbiAgfV07XG5cbmV4cG9ydCBjb25zdCBvcHRpb25zX2hlYWRlcl9udW1iZXI6IE1hRGF0YUdyaWRIZWFkRmlsdGVyW10gPSBbe1xuICB2YWx1ZTogJycsXG4gIG9wZXJhdG9yOiAnJyxcbiAgbGFiZWw6ICcnXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPScsXG4gIGxhYmVsOiAnPT0nXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnIT0nLFxuICBsYWJlbDogJyE9J1xufSwge1xuICB2YWx1ZTogJyR7MX0nLFxuICBvcGVyYXRvcjogJz4nLFxuICBsYWJlbDogJz4nXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPj0nLFxuICBsYWJlbDogJz49J1xufSwge1xuICB2YWx1ZTogJyR7MX0nLFxuICBvcGVyYXRvcjogJzw9JyxcbiAgbGFiZWw6ICc8PScsXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPCcsXG4gIGxhYmVsOiAnPCcsXG59LCB7XG4gIHZhbHVlOiBbJyR7MX0nLCckezF9J10sXG4gIG9wZXJhdG9yOiBbJz49JywnPD0nXSxcbiAgbGFiZWw6ICdiZXR3ZWVuJ1xufVxuXG5dO1xuXG5leHBvcnQgY29uc3Qgb3B0aW9uc19oZWFkZXJfZGF0ZTogTWFEYXRhR3JpZEhlYWRGaWx0ZXJbXSA9IFt7XG4gIHZhbHVlOiAnJyxcbiAgb3BlcmF0b3I6ICcnLFxuICBsYWJlbDogJydcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICc9JyxcbiAgbGFiZWw6ICc9PSdcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICchPScsXG4gIGxhYmVsOiAnIT0nXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPicsXG4gIGxhYmVsOiAnPidcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICc+PScsXG4gIGxhYmVsOiAnPj0nXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPD0nLFxuICBsYWJlbDogJzw9Jyxcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICc8JyxcbiAgbGFiZWw6ICc8Jyxcbn0sIHtcbiAgdmFsdWU6IFsnJHsxfScsJyR7MX0nXSxcbiAgb3BlcmF0b3I6IFsnPj0nLCc8PSddLFxuICBsYWJlbDogJ2JldHdlZW4nXG59XTtcblxuZXhwb3J0IGludGVyZmFjZSBNYURhdGFHcmlkRmlsdGVyRXZlbnQge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGZpZWxkczogc3RyaW5nW11cbn1cblxuLy8gZXhwb3J0IGNsYXNzIE1hRGF0YSB7XG4gIFxuLy8gICBzdGF0aWMgRmlsdGVyQnlDb25kaXRpb25zKHdoZXJlLCB0ZW1wOiBhbnkpIHtcbi8vICAgICAvLyBjb25zb2xlLmxvZygnREVBTCBmaW5kRnVsbCA9PT09ICcsIHdoZXJlKTtcblxuLy8gICAgIGlmICghd2hlcmUgfHwgd2hlcmUubGVuZ3RoID09IDApIHtcbi8vICAgICAgIHJldHVybiB0ZW1wO1xuLy8gICAgIH1cblxuLy8gICAgIHZhciByZXN1bHQgPSBbXTtcbi8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdoZXJlLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICB2YXIgY29uZGl0aW9uID0gd2hlcmVbaV07XG4vLyAgICAgICBsZXQgdGVtcDE7XG4vLyAgICAgICAvLyBjb25zb2xlLmxvZygnREVBTCB0eXBlb2YoY29uZGl0aW9uKScgKyB0eXBlb2YgKGNvbmRpdGlvbiksIGNvbmRpdGlvbik7XG4vLyAgICAgICBpZiAodHlwZW9mIChjb25kaXRpb24pID09ICdvYmplY3QnKSB7XG4vLyAgICAgICAgIGlmIChjb25kaXRpb24ubGVuZ3RoID09IDMgJiZcbi8vICAgICAgICAgICB0eXBlb2YgKGNvbmRpdGlvblswXSkgPT0gJ3N0cmluZycgJiYgdHlwZW9mIChjb25kaXRpb25bMV0pID09ICdzdHJpbmcnICYmXG4vLyAgICAgICAgICAgKHR5cGVvZiAoY29uZGl0aW9uWzJdKSA9PSAnc3RyaW5nJyB8fCB0eXBlb2YgKGNvbmRpdGlvblsyXSkgPT0gJ251bWJlcicpKSB7XG4vLyAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJERUFMIFRPIEZJTkQgXCIsIHRlbXAubGVuZ3RoKVxuLy8gICAgICAgICAgIHRlbXAxID0gdGhpcy5fZmlsdGVyUmVzdWx0QnlTaW1wbGVDb25kaXRpb24oY29uZGl0aW9uLCB0ZW1wKTtcbi8vICAgICAgICAgfSBlbHNlIGlmIChjb25kaXRpb24ubGVuZ3RoID4gMCAmJiBjb25kaXRpb24uZmluZChkID0+IHR5cGVvZiAoZCkgPT0gJ29iamVjdCcpKSB7XG4vLyAgICAgICAgICAgdGVtcDEgPSB0aGlzLkZpbHRlckJ5Q29uZGl0aW9ucyhjb25kaXRpb24sIHRlbXApO1xuLy8gICAgICAgICB9XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBpZiAodHlwZW9mIChjb25kaXRpb24pID09ICdzdHJpbmcnKSB7XG4vLyAgICAgICAgICAgaWYgKGNvbmRpdGlvbiAhPSAnb3InICYmIGNvbmRpdGlvbiAhPSAnYW5kJykge1xuLy8gICAgICAgICAgICAgdGhyb3cgKFwiVW5leHBlY3RlZCBjb25kaXRpb24gOlwiICsgY29uZGl0aW9uKVxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgICAgaWYgKHRlbXAxKSB7XG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdERUFMIFRPRE8nLCB0ZW1wMS5sZW5ndGgpO1xuLy8gICAgICAgICAvLyBDYXMgb8O5IGwnb3BlcmF0b3IgcHLDqWPDqWRlbnQgw6l0YWl0ICdvcidcbi8vICAgICAgICAgaWYgKHdoZXJlW2kgKyAxXSAmJiB3aGVyZVtpICsgMV0gPT0gJ29yJyB8fCAoaSA9PSB3aGVyZS5sZW5ndGggLSAxICYmIHdoZXJlW2kgLSAxXSAmJiB3aGVyZVtpIC0gMV0gPT0gJ29yJykpIHtcbi8vICAgICAgICAgICAvLyBPbiBham91dGUgYXUgcmVzdWx0IGxlcyB2YWxldXJzIG5vbiB0cm91dsOpZXMgcHLDqWPDqWRlbW1lbnRcbi8vICAgICAgICAgICBmb3IgKHZhciB0IG9mIHRlbXAxKSB7XG4vLyAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHQpO1xuLy8gICAgICAgICAgICAgaWYgKCEocmVzdWx0LmZpbmQoZCA9PiBkID09PSB0KSkpIHtcbi8vICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godCk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiREVBTCBUT0RPIE9SXCIsIHJlc3VsdClcblxuLy8gICAgICAgICAgIC8vIENhcyBvw7kgbCdvcGVyYXRvciBwcsOpY8OpZGVudCDDqXRhaXQgJ2FuZCdcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRFQUwgVE9ETyBBTkRcIiwgdGVtcDEpO1xuLy8gICAgICAgICAgIC8vIE9uIGVjcmFzZSB0ZW1wXG4vLyAgICAgICAgICAgdGVtcCA9IHRlbXAxO1xuLy8gICAgICAgICAgIHJlc3VsdCA9IHRlbXA7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cblxuLy8gICAgICAgaSsrO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9XG4gXG5cbi8vICAgcHJpdmF0ZSBzdGF0aWMgX2ZpbHRlclJlc3VsdEJ5U2ltcGxlQ29uZGl0aW9uKGNvbmRpdGlvbiwgdGVtcDogYW55KSB7XG4vLyAgICAgY29uc29sZS5sb2coJ0RFQUwgZmluZFRlbXAgPT09ICcsIGNvbmRpdGlvbilcbi8vICAgICBpZiAodHlwZW9mIChjb25kaXRpb24pID09ICdvYmplY3QnKSB7XG4vLyAgICAgICB2YXIgZmllbGQgPSBjb25kaXRpb25bMF07XG4vLyAgICAgICB2YXIgb3BlcmF0b3IgPSBjb25kaXRpb25bMV07XG4vLyAgICAgICB2YXIgdmFsdWUgPSBjb25kaXRpb25bMl07XG4vLyAgICAgICBsZXQgcmVnIDogYW55ID0gbnVsbDtcbi8vICAgICAgIGxldCBvcG51bSA9IGZhbHNlO1xuLy8gICAgICAgbGV0IHJldmVyc2UgPSBmYWxzZTtcbi8vICAgICAgIGNvbnNvbGUubG9nKCdmaWVsZCAoMSk6JyArIGZpZWxkLCBvcGVyYXRvciwgdmFsdWUpXG4vLyAgICAgICBpZiAob3BlcmF0b3IgPT0gJ3N0YXJ0c3dpdGgnKSB7XG4vLyAgICAgICAgIHJlZyA9IG5ldyBSZWdFeHAoXCJeXCIgKyB2YWx1ZSwgJ2knKTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJ2VuZHN3aXRoJykge1xuLy8gICAgICAgICByZWcgPSBuZXcgUmVnRXhwKHZhbHVlICsgXCIkXCIsICdpJyk7XG4vLyAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICdjb250YWlucycpIHtcbi8vICAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCh2YWx1ZSwgJ2knKTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJ2xpa2UnIHx8IG9wZXJhdG9yID09ICdub3QgbGlrZScpIHtcbi8vICAgICAgICAgaWYgKG9wZXJhdG9yID09ICdub3QgbGlrZScpIHtcbi8vICAgICAgICAgICByZXZlcnNlID0gdHJ1ZTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZiAodmFsdWUubWF0Y2goL14lLislJC8pKSB7XG4vLyAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9eJS8sICcnKS5yZXBsYWNlKC8lJC8sICcnKVxuLy8gICAgICAgICAgIG9wZXJhdG9yID0gJ2NvbnRhaW5zJ1xuLy8gICAgICAgICAgIHJlZyA9IG5ldyBSZWdFeHAodmFsdWUsICdpJyk7XG4vLyAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUubWF0Y2goLy4rJSQvKSkge1xuLy8gICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvJSQvLCAnJylcbi8vICAgICAgICAgICBvcGVyYXRvciA9ICdzdGFydHN3aXRoJ1xuLy8gICAgICAgICAgIHJlZyA9IG5ldyBSZWdFeHAoXCJeXCIgKyB2YWx1ZSwgJ2knKTtcbi8vICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5tYXRjaCgvXiUvKSkge1xuLy8gICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXiUvLCAnJylcbi8vICAgICAgICAgICBvcGVyYXRvciA9ICdlbmRzd2l0aCdcbi8vICAgICAgICAgICByZWcgPSBuZXcgUmVnRXhwKHZhbHVlICsgXCIkXCIsICdpJyk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJ3JlZ2V4Jykge1xuLy8gICAgICAgICByZWcgPSBuZXcgUmVnRXhwKHZhbHVlLCAnaScpO1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnbm90UmVnZXgnKSB7XG4vLyAgICAgICAgIHJlZyA9IG5ldyBSZWdFeHAodmFsdWUsICdpJyk7XG4vLyAgICAgICAgIHJldmVyc2UgPSB0cnVlO1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnaXNudWxsJykge1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnaXNub3RudWxsJykge1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnPScpIHtcbi8vICAgICAgICAgb3BudW0gPSB0cnVlO1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnPj0nKSB7XG4vLyAgICAgICAgIG9wbnVtID0gdHJ1ZTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJz4nKSB7XG4vLyAgICAgICAgIG9wbnVtID0gdHJ1ZTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJzwnKSB7XG4vLyAgICAgICAgIG9wbnVtID0gdHJ1ZTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJyE9Jykge1xuLy8gICAgICAgICBvcG51bSA9IHRydWU7XG4vLyAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICc8PScpIHtcbi8vICAgICAgICAgb3BudW0gPSB0cnVlO1xuLy8gICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgdGhyb3cgKFwiVW5rb3duIG9wZXJhdG9yIFwiICsgb3BlcmF0b3IpXG4vLyAgICAgICB9XG5cbi8vICAgICAgIGNvbnNvbGUubG9nKCdmaWVsZDonICsgZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSwgcmVnKVxuLy8gICAgICAgdGVtcCA9IHRlbXAuZmlsdGVyKGZ1bmN0aW9uIChkLCBpbmRleCwgYXJyYXkpIHtcbi8vICAgICAgICAgLy9jb25zb2xlLmxvZyhkW2ZpZWxkXSlcbi8vICAgICAgICAgaWYgKHJlZyA9PSBudWxsKSB7XG4vLyAgICAgICAgICAgaWYgKG9wbnVtICYmIHR5cGVvZiAoZFtmaWVsZF0pID09ICdudW1iZXInKSB7XG4vLyAgICAgICAgICAgICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpXG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIGlmIChvcGVyYXRvciA9PSAnPScpIHtcbi8vICAgICAgICAgICAgIGlmICh0eXBlb2YgKGRbZmllbGRdKSA9PSAnYm9vbGVhbicpIHtcbi8vICAgICAgICAgICAgICAgaWYgKHZhbHVlID09ICcxJylcbi8vICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRydWU7XG4vLyAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSAnMCcpXG4vLyAgICAgICAgICAgICAgICAgdmFsdWUgPSBmYWxzZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGlmIChkW2ZpZWxkXSAhPT0gbnVsbCkge1xuLy8gICAgICAgICAgICAgICBpZiAoZFtmaWVsZF0gPT09IHZhbHVlKSB7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICdpc251bGwnKSB7XG4vLyAgICAgICAgICAgICBpZiAoZFtmaWVsZF0gPT0gbnVsbCkge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICdpc25vdG51bGwnKSB7XG4vLyAgICAgICAgICAgICBpZiAoZFtmaWVsZF0gIT0gbnVsbCkge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICc+PScpIHtcbi8vICAgICAgICAgICAgIGlmIChkW2ZpZWxkXSAhPT0gbnVsbCAmJiBkW2ZpZWxkXSA+PSB2YWx1ZSkge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICc+Jykge1xuLy8gICAgICAgICAgICAgaWYgKGRbZmllbGRdICE9PSBudWxsICYmIGRbZmllbGRdID4gdmFsdWUpIHtcbi8vICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnIT0nKSB7XG4vLyAgICAgICAgICAgICBpZiAoZFtmaWVsZF0gIT09IG51bGwgJiYgZFtmaWVsZF0gIT0gdmFsdWUpIHtcbi8vICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnPD0nKSB7XG4vLyAgICAgICAgICAgICBpZiAoZFtmaWVsZF0gIT09IG51bGwgJiYgZFtmaWVsZF0gPD0gdmFsdWUpIHtcbi8vICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnPCcpIHtcbi8vICAgICAgICAgICAgIGlmIChkW2ZpZWxkXSAhPT0gbnVsbCAmJiBkW2ZpZWxkXSA8IHZhbHVlKSB7XG4vLyAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICBpZiAoZFtmaWVsZF0gJiYgZFtmaWVsZF0ubWF0Y2gocmVnKSkge1xuLy8gICAgICAgICAgICAgaWYgKHJldmVyc2UpIHtcbi8vICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgICAgfVxuXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYgKHJldmVyc2UpIHtcbi8vICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gZmFsc2U7XG4vLyAgICAgICB9KVxuLy8gICAgIH1cbi8vICAgICByZXR1cm4gdGVtcDtcbi8vICAgfVxuXG4vLyB9Il19