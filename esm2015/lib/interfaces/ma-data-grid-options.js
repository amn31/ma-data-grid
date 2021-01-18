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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWEtZGF0YS1ncmlkLW9wdGlvbnMuanMiLCJzb3VyY2VSb290IjoiRDovTXlIb21lL2FuZHJvaWQvd29ya3NwYWNlL2dpdC9tYS1uZy1kYXRhZ3JpZC9wcm9qZWN0cy9tYS1kYXRhLWdyaWQvc3JjLyIsInNvdXJjZXMiOlsibGliL2ludGVyZmFjZXMvbWEtZGF0YS1ncmlkLW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUNBQXVDO0FBMkN2QyxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBMkIsQ0FBQztRQUM3RCxLQUFLLEVBQUUsR0FBRztRQUNWLFFBQVEsRUFBRSxHQUFHO1FBQ2IsS0FBSyxFQUFFLE1BQU07S0FDZCxFQUFFO1FBQ0QsS0FBSyxFQUFFLEdBQUc7UUFDVixRQUFRLEVBQUUsR0FBRztRQUNiLEtBQUssRUFBRSxPQUFPO0tBQ2YsRUFBRTtRQUNELEtBQUssRUFBRSxHQUFHO1FBQ1YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsS0FBSyxFQUFFLE1BQU07S0FDZCxFQUFFO1FBQ0QsS0FBSyxFQUFFLEdBQUc7UUFDVixRQUFRLEVBQUUsV0FBVztRQUNyQixLQUFLLEVBQUUsT0FBTztLQUNmLEVBQUUsQ0FBQztBQUVKLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUEyQjtJQUMzRDtRQUNFLEtBQUssRUFBRSxFQUFFO1FBQ1QsUUFBUSxFQUFFLEVBQUU7UUFDWixLQUFLLEVBQUUsRUFBRTtLQUNWLEVBQUU7UUFDRCxLQUFLLEVBQUUsUUFBUTtRQUNmLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLEtBQUssRUFBRSxVQUFVO0tBQ2xCLEVBQUU7UUFDRCxLQUFLLEVBQUUsUUFBUTtRQUNmLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEtBQUssRUFBRSxTQUFTO0tBQ2pCLEVBQUU7UUFDRCxLQUFLLEVBQUUsT0FBTztRQUNkLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLEtBQUssRUFBRSxZQUFZO0tBQ3BCLEVBQUU7UUFDRCxLQUFLLEVBQUUsT0FBTztRQUNkLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEtBQUssRUFBRSxXQUFXO0tBQ25CLEVBQUU7UUFDRCxLQUFLLEVBQUUsT0FBTztRQUNkLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLEtBQUssRUFBRSxVQUFVO0tBQ2xCLEVBQUU7UUFDRCxLQUFLLEVBQUUsT0FBTztRQUNkLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLEtBQUssRUFBRSxTQUFTO0tBQ2pCO0NBQUMsQ0FBQztBQUVMLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUEyQixDQUFDO1FBQzVELEtBQUssRUFBRSxFQUFFO1FBQ1QsUUFBUSxFQUFFLEVBQUU7UUFDWixLQUFLLEVBQUUsRUFBRTtLQUNWLEVBQUU7UUFDRCxLQUFLLEVBQUUsTUFBTTtRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsS0FBSyxFQUFFLElBQUk7S0FDWixFQUFFO1FBQ0QsS0FBSyxFQUFFLE1BQU07UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLEtBQUssRUFBRSxHQUFHO0tBQ1gsRUFBRTtRQUNELEtBQUssRUFBRSxNQUFNO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxLQUFLLEVBQUUsSUFBSTtLQUNaLEVBQUU7UUFDRCxLQUFLLEVBQUUsTUFBTTtRQUNiLFFBQVEsRUFBRSxJQUFJO1FBQ2QsS0FBSyxFQUFFLElBQUk7S0FDWixFQUFFO1FBQ0QsS0FBSyxFQUFFLE1BQU07UUFDYixRQUFRLEVBQUUsR0FBRztRQUNiLEtBQUssRUFBRSxHQUFHO0tBQ1gsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQTJCLENBQUM7UUFDMUQsS0FBSyxFQUFFLEVBQUU7UUFDVCxRQUFRLEVBQUUsRUFBRTtRQUNaLEtBQUssRUFBRSxFQUFFO0tBQ1YsRUFBRTtRQUNELEtBQUssRUFBRSxNQUFNO1FBQ2IsUUFBUSxFQUFFLEdBQUc7UUFDYixLQUFLLEVBQUUsSUFBSTtLQUNaLEVBQUU7UUFDRCxLQUFLLEVBQUUsTUFBTTtRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsS0FBSyxFQUFFLEdBQUc7S0FDWCxFQUFFO1FBQ0QsS0FBSyxFQUFFLE1BQU07UUFDYixRQUFRLEVBQUUsSUFBSTtRQUNkLEtBQUssRUFBRSxJQUFJO0tBQ1osRUFBRTtRQUNELEtBQUssRUFBRSxNQUFNO1FBQ2IsUUFBUSxFQUFFLElBQUk7UUFDZCxLQUFLLEVBQUUsSUFBSTtLQUNaLEVBQUU7UUFDRCxLQUFLLEVBQUUsTUFBTTtRQUNiLFFBQVEsRUFBRSxHQUFHO1FBQ2IsS0FBSyxFQUFFLEdBQUc7S0FDWCxDQUFDLENBQUM7QUFPSCx3QkFBd0I7QUFFeEIsa0RBQWtEO0FBQ2xELG9EQUFvRDtBQUVwRCx5Q0FBeUM7QUFDekMscUJBQXFCO0FBQ3JCLFFBQVE7QUFFUix1QkFBdUI7QUFDdkIsK0NBQStDO0FBQy9DLGtDQUFrQztBQUNsQyxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhDQUE4QztBQUM5Qyx1Q0FBdUM7QUFDdkMsc0ZBQXNGO0FBQ3RGLHdGQUF3RjtBQUN4Rix5REFBeUQ7QUFDekQsMEVBQTBFO0FBQzFFLDRGQUE0RjtBQUM1Riw4REFBOEQ7QUFDOUQsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixnREFBZ0Q7QUFDaEQsMkRBQTJEO0FBQzNELDJEQUEyRDtBQUMzRCxjQUFjO0FBQ2QsWUFBWTtBQUNaLFVBQVU7QUFDVixxQkFBcUI7QUFDckIscURBQXFEO0FBQ3JELG9EQUFvRDtBQUNwRCx5SEFBeUg7QUFDekgseUVBQXlFO0FBQ3pFLG1DQUFtQztBQUNuQyxnQ0FBZ0M7QUFDaEMsa0RBQWtEO0FBQ2xELGdDQUFnQztBQUNoQyxnQkFBZ0I7QUFDaEIsY0FBYztBQUNkLG1EQUFtRDtBQUVuRCx1REFBdUQ7QUFDdkQsbUJBQW1CO0FBQ25CLG9EQUFvRDtBQUNwRCw4QkFBOEI7QUFDOUIsMEJBQTBCO0FBQzFCLDJCQUEyQjtBQUMzQixZQUFZO0FBQ1osVUFBVTtBQUVWLGFBQWE7QUFDYixRQUFRO0FBQ1IscUJBQXFCO0FBQ3JCLE1BQU07QUFHTiwwRUFBMEU7QUFDMUUsbURBQW1EO0FBQ25ELDRDQUE0QztBQUM1QyxrQ0FBa0M7QUFDbEMscUNBQXFDO0FBQ3JDLGtDQUFrQztBQUNsQyw4QkFBOEI7QUFDOUIsMkJBQTJCO0FBQzNCLDZCQUE2QjtBQUM3QiwyREFBMkQ7QUFDM0Qsd0NBQXdDO0FBQ3hDLDhDQUE4QztBQUM5Qyw2Q0FBNkM7QUFDN0MsOENBQThDO0FBQzlDLDZDQUE2QztBQUM3Qyx3Q0FBd0M7QUFDeEMsbUVBQW1FO0FBQ25FLHdDQUF3QztBQUN4Qyw0QkFBNEI7QUFDNUIsWUFBWTtBQUNaLHVDQUF1QztBQUN2Qyw4REFBOEQ7QUFDOUQsa0NBQWtDO0FBQ2xDLDBDQUEwQztBQUMxQyw0Q0FBNEM7QUFDNUMsNENBQTRDO0FBQzVDLG9DQUFvQztBQUNwQyxnREFBZ0Q7QUFDaEQsMENBQTBDO0FBQzFDLDRDQUE0QztBQUM1QyxrQ0FBa0M7QUFDbEMsZ0RBQWdEO0FBQ2hELFlBQVk7QUFDWiwwQ0FBMEM7QUFDMUMsd0NBQXdDO0FBQ3hDLDZDQUE2QztBQUM3Qyx3Q0FBd0M7QUFDeEMsMEJBQTBCO0FBQzFCLDJDQUEyQztBQUMzQyw4Q0FBOEM7QUFDOUMsc0NBQXNDO0FBQ3RDLHdCQUF3QjtBQUN4Qix1Q0FBdUM7QUFDdkMsd0JBQXdCO0FBQ3hCLHNDQUFzQztBQUN0Qyx3QkFBd0I7QUFDeEIsc0NBQXNDO0FBQ3RDLHdCQUF3QjtBQUN4Qix1Q0FBdUM7QUFDdkMsd0JBQXdCO0FBQ3hCLHVDQUF1QztBQUN2Qyx3QkFBd0I7QUFDeEIsaUJBQWlCO0FBQ2pCLGdEQUFnRDtBQUNoRCxVQUFVO0FBRVYsNERBQTREO0FBQzVELHdEQUF3RDtBQUN4RCxrQ0FBa0M7QUFDbEMsNkJBQTZCO0FBQzdCLDBEQUEwRDtBQUMxRCx3Q0FBd0M7QUFDeEMsY0FBYztBQUNkLG1DQUFtQztBQUNuQyxvREFBb0Q7QUFDcEQsa0NBQWtDO0FBQ2xDLGdDQUFnQztBQUNoQyxrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBQ2pDLGdCQUFnQjtBQUNoQix1Q0FBdUM7QUFDdkMsMENBQTBDO0FBQzFDLCtCQUErQjtBQUMvQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLCtDQUErQztBQUMvQyxzQ0FBc0M7QUFDdEMsNkJBQTZCO0FBQzdCLGdCQUFnQjtBQUNoQixrREFBa0Q7QUFDbEQsc0NBQXNDO0FBQ3RDLDZCQUE2QjtBQUM3QixnQkFBZ0I7QUFDaEIsMkNBQTJDO0FBQzNDLDREQUE0RDtBQUM1RCw2QkFBNkI7QUFDN0IsZ0JBQWdCO0FBQ2hCLDBDQUEwQztBQUMxQywyREFBMkQ7QUFDM0QsNkJBQTZCO0FBQzdCLGdCQUFnQjtBQUNoQiwyQ0FBMkM7QUFDM0MsNERBQTREO0FBQzVELDZCQUE2QjtBQUM3QixnQkFBZ0I7QUFDaEIsMkNBQTJDO0FBQzNDLDREQUE0RDtBQUM1RCw2QkFBNkI7QUFDN0IsZ0JBQWdCO0FBQ2hCLDBDQUEwQztBQUMxQywyREFBMkQ7QUFDM0QsNkJBQTZCO0FBQzdCLGdCQUFnQjtBQUNoQixjQUFjO0FBQ2QsbUJBQW1CO0FBQ25CLG1EQUFtRDtBQUNuRCw2QkFBNkI7QUFDN0IsOEJBQThCO0FBQzlCLGdCQUFnQjtBQUNoQiwyQkFBMkI7QUFDM0IsY0FBYztBQUVkLFlBQVk7QUFDWix5QkFBeUI7QUFDekIseUJBQXlCO0FBQ3pCLFlBQVk7QUFDWix3QkFBd0I7QUFDeEIsV0FBVztBQUNYLFFBQVE7QUFDUixtQkFBbUI7QUFDbkIsTUFBTTtBQUVOLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRmlsdGVyQ29uZGl0aW9ucyB9IGZyb20gXCJAYW1uMzEvZmlsdGVyLW11bHRpcGxlLWNvbmRpdGlvbnNcIjtcbmltcG9ydCB7IFR5cGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTWFEYXRhR3JpZENlbGwgfSBmcm9tIFwiLi9tYS1kYXRhLWdyaWQtY2VsbFwiO1xuXG5cbmV4cG9ydCB0eXBlIE1hRGF0YUdyaWRTZWxlY3RNZXRob2QgPSAncm93JyB8ICdjZWxsJ1xuZXhwb3J0IGludGVyZmFjZSBNYURhdGFHcmlkU2VsZWN0RXZlbnQge1xuICBpbmRleDogbnVtYmVyO1xuICByb3c6IGFueTtcbiAgdmFsdWU/OiBhbnk7XG4gIHByb3A/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFEYXRhR3JpZEhlYWRGaWx0ZXJFdmVudCB7XG4gIHdoZXJlOiBGaWx0ZXJDb25kaXRpb25zLFxuICBkYXRhPzogW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFEYXRhR3JpZENvbHVtbk9wdGlvbnMge1xuXG4gIHRpdGxlPzogc3RyaW5nO1xuICBjc3NDbGFzcz86IHN0cmluZztcbiAgaXNSb3dOdW1iZXI/OiBib29sZWFuO1xuICBpc1Jvd0hUTUw/OiBib29sZWFuO1xuICBwcm9wOiBzdHJpbmc7XG4gIHNvcnRlZD86IGJvb2xlYW47XG4gIGV4dEZpbHRlcj86IGJvb2xlYW47XG4gIGRhdGFUeXBlPzogJ2Jvb2xlYW4nIHwgJ251bWJlcicgfCAnZGF0ZScgfCAnc3RyaW5nJyB8ICdkYXRldGltZScgfCAndGltZSc7XG4gIGhlYWRGaWx0ZXI/OiBNYURhdGFHcmlkSGVhZEZpbHRlcltdO1xuICBvcERlZmF1dEZpbHRlcj86IHN0cmluZztcbiAgZXh0RmlsdGVyU2VsZWN0ZWQ/OiBib29sZWFuO1xuICBwaXBlPzogKHZhbHVlLCByb3csIGNvbCkgPT4ge307XG4gIHVzZVRlbXBsYXRlPzogVHlwZTxNYURhdGFHcmlkQ2VsbD5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYURhdGFHcmlkSGVhZEZpbHRlciB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIG9wZXJhdG9yOiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3Qgb3B0aW9uc19oZWFkZXJfYm9vbGVhbjogTWFEYXRhR3JpZEhlYWRGaWx0ZXJbXSA9IFt7XG4gIHZhbHVlOiAnMScsXG4gIG9wZXJhdG9yOiAnPScsXG4gIGxhYmVsOiAndHJ1ZSdcbn0sIHtcbiAgdmFsdWU6ICcwJyxcbiAgb3BlcmF0b3I6ICc9JyxcbiAgbGFiZWw6ICdmYWxzZSdcbn0sIHtcbiAgdmFsdWU6ICdhJyxcbiAgb3BlcmF0b3I6ICdpc251bGwnLFxuICBsYWJlbDogJ05VTEwnXG59LCB7XG4gIHZhbHVlOiAnYScsXG4gIG9wZXJhdG9yOiAnaXNub3RudWxsJyxcbiAgbGFiZWw6ICchTlVMTCdcbn0sXTtcblxuZXhwb3J0IGNvbnN0IG9wdGlvbnNfaGVhZGVyX3N0cmluZzogTWFEYXRhR3JpZEhlYWRGaWx0ZXJbXSA9IFtcbiAge1xuICAgIHZhbHVlOiAnJyxcbiAgICBvcGVyYXRvcjogJycsXG4gICAgbGFiZWw6ICcnXG4gIH0sIHtcbiAgICB2YWx1ZTogJyUkezF9JScsXG4gICAgb3BlcmF0b3I6ICdsaWtlJyxcbiAgICBsYWJlbDogJ2NvbnRhaW5zJyxcbiAgfSwge1xuICAgIHZhbHVlOiAnJSR7MX0lJyxcbiAgICBvcGVyYXRvcjogJ25vdCBsaWtlJyxcbiAgICBsYWJlbDogJ3dpdGhvdXQnLFxuICB9LCB7XG4gICAgdmFsdWU6ICckezF9JScsXG4gICAgb3BlcmF0b3I6ICdsaWtlJyxcbiAgICBsYWJlbDogJ3N0YXJ0c3dpdGgnXG4gIH0sIHtcbiAgICB2YWx1ZTogJyR7MX0lJyxcbiAgICBvcGVyYXRvcjogJ25vdCBsaWtlJyxcbiAgICBsYWJlbDogJ25vdCBzdGFydCdcbiAgfSwge1xuICAgIHZhbHVlOiAnJSR7MX0nLFxuICAgIG9wZXJhdG9yOiAnbGlrZScsXG4gICAgbGFiZWw6ICdlbmRzd2l0aCcsXG4gIH0sIHtcbiAgICB2YWx1ZTogJyUkezF9JyxcbiAgICBvcGVyYXRvcjogJ25vdCBsaWtlJyxcbiAgICBsYWJlbDogJ25vdCBlbmQnLFxuICB9XTtcblxuZXhwb3J0IGNvbnN0IG9wdGlvbnNfaGVhZGVyX251bWJlcjogTWFEYXRhR3JpZEhlYWRGaWx0ZXJbXSA9IFt7XG4gIHZhbHVlOiAnJyxcbiAgb3BlcmF0b3I6ICcnLFxuICBsYWJlbDogJydcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICc9JyxcbiAgbGFiZWw6ICc9PSdcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICc+JyxcbiAgbGFiZWw6ICc+J1xufSwge1xuICB2YWx1ZTogJyR7MX0nLFxuICBvcGVyYXRvcjogJz49JyxcbiAgbGFiZWw6ICc+PSdcbn0sIHtcbiAgdmFsdWU6ICckezF9JyxcbiAgb3BlcmF0b3I6ICc8PScsXG4gIGxhYmVsOiAnPD0nLFxufSwge1xuICB2YWx1ZTogJyR7MX0nLFxuICBvcGVyYXRvcjogJzwnLFxuICBsYWJlbDogJzwnLFxufV07XG5cbmV4cG9ydCBjb25zdCBvcHRpb25zX2hlYWRlcl9kYXRlOiBNYURhdGFHcmlkSGVhZEZpbHRlcltdID0gW3tcbiAgdmFsdWU6ICcnLFxuICBvcGVyYXRvcjogJycsXG4gIGxhYmVsOiAnJ1xufSwge1xuICB2YWx1ZTogJyR7MX0nLFxuICBvcGVyYXRvcjogJz0nLFxuICBsYWJlbDogJz09J1xufSwge1xuICB2YWx1ZTogJyR7MX0nLFxuICBvcGVyYXRvcjogJz4nLFxuICBsYWJlbDogJz4nXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPj0nLFxuICBsYWJlbDogJz49J1xufSwge1xuICB2YWx1ZTogJyR7MX0nLFxuICBvcGVyYXRvcjogJzw9JyxcbiAgbGFiZWw6ICc8PScsXG59LCB7XG4gIHZhbHVlOiAnJHsxfScsXG4gIG9wZXJhdG9yOiAnPCcsXG4gIGxhYmVsOiAnPCcsXG59XTtcblxuZXhwb3J0IGludGVyZmFjZSBNYURhdGFHcmlkRmlsdGVyRXZlbnQge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGZpZWxkczogc3RyaW5nW11cbn1cblxuLy8gZXhwb3J0IGNsYXNzIE1hRGF0YSB7XG4gIFxuLy8gICBzdGF0aWMgRmlsdGVyQnlDb25kaXRpb25zKHdoZXJlLCB0ZW1wOiBhbnkpIHtcbi8vICAgICAvLyBjb25zb2xlLmxvZygnREVBTCBmaW5kRnVsbCA9PT09ICcsIHdoZXJlKTtcblxuLy8gICAgIGlmICghd2hlcmUgfHwgd2hlcmUubGVuZ3RoID09IDApIHtcbi8vICAgICAgIHJldHVybiB0ZW1wO1xuLy8gICAgIH1cblxuLy8gICAgIHZhciByZXN1bHQgPSBbXTtcbi8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHdoZXJlLmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgICB2YXIgY29uZGl0aW9uID0gd2hlcmVbaV07XG4vLyAgICAgICBsZXQgdGVtcDE7XG4vLyAgICAgICAvLyBjb25zb2xlLmxvZygnREVBTCB0eXBlb2YoY29uZGl0aW9uKScgKyB0eXBlb2YgKGNvbmRpdGlvbiksIGNvbmRpdGlvbik7XG4vLyAgICAgICBpZiAodHlwZW9mIChjb25kaXRpb24pID09ICdvYmplY3QnKSB7XG4vLyAgICAgICAgIGlmIChjb25kaXRpb24ubGVuZ3RoID09IDMgJiZcbi8vICAgICAgICAgICB0eXBlb2YgKGNvbmRpdGlvblswXSkgPT0gJ3N0cmluZycgJiYgdHlwZW9mIChjb25kaXRpb25bMV0pID09ICdzdHJpbmcnICYmXG4vLyAgICAgICAgICAgKHR5cGVvZiAoY29uZGl0aW9uWzJdKSA9PSAnc3RyaW5nJyB8fCB0eXBlb2YgKGNvbmRpdGlvblsyXSkgPT0gJ251bWJlcicpKSB7XG4vLyAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJERUFMIFRPIEZJTkQgXCIsIHRlbXAubGVuZ3RoKVxuLy8gICAgICAgICAgIHRlbXAxID0gdGhpcy5fZmlsdGVyUmVzdWx0QnlTaW1wbGVDb25kaXRpb24oY29uZGl0aW9uLCB0ZW1wKTtcbi8vICAgICAgICAgfSBlbHNlIGlmIChjb25kaXRpb24ubGVuZ3RoID4gMCAmJiBjb25kaXRpb24uZmluZChkID0+IHR5cGVvZiAoZCkgPT0gJ29iamVjdCcpKSB7XG4vLyAgICAgICAgICAgdGVtcDEgPSB0aGlzLkZpbHRlckJ5Q29uZGl0aW9ucyhjb25kaXRpb24sIHRlbXApO1xuLy8gICAgICAgICB9XG4vLyAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICBpZiAodHlwZW9mIChjb25kaXRpb24pID09ICdzdHJpbmcnKSB7XG4vLyAgICAgICAgICAgaWYgKGNvbmRpdGlvbiAhPSAnb3InICYmIGNvbmRpdGlvbiAhPSAnYW5kJykge1xuLy8gICAgICAgICAgICAgdGhyb3cgKFwiVW5leHBlY3RlZCBjb25kaXRpb24gOlwiICsgY29uZGl0aW9uKVxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgICAgaWYgKHRlbXAxKSB7XG4vLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdERUFMIFRPRE8nLCB0ZW1wMS5sZW5ndGgpO1xuLy8gICAgICAgICAvLyBDYXMgb8O5IGwnb3BlcmF0b3IgcHLDqWPDqWRlbnQgw6l0YWl0ICdvcidcbi8vICAgICAgICAgaWYgKHdoZXJlW2kgKyAxXSAmJiB3aGVyZVtpICsgMV0gPT0gJ29yJyB8fCAoaSA9PSB3aGVyZS5sZW5ndGggLSAxICYmIHdoZXJlW2kgLSAxXSAmJiB3aGVyZVtpIC0gMV0gPT0gJ29yJykpIHtcbi8vICAgICAgICAgICAvLyBPbiBham91dGUgYXUgcmVzdWx0IGxlcyB2YWxldXJzIG5vbiB0cm91dsOpZXMgcHLDqWPDqWRlbW1lbnRcbi8vICAgICAgICAgICBmb3IgKHZhciB0IG9mIHRlbXAxKSB7XG4vLyAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHQpO1xuLy8gICAgICAgICAgICAgaWYgKCEocmVzdWx0LmZpbmQoZCA9PiBkID09PSB0KSkpIHtcbi8vICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godCk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiREVBTCBUT0RPIE9SXCIsIHJlc3VsdClcblxuLy8gICAgICAgICAgIC8vIENhcyBvw7kgbCdvcGVyYXRvciBwcsOpY8OpZGVudCDDqXRhaXQgJ2FuZCdcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkRFQUwgVE9ETyBBTkRcIiwgdGVtcDEpO1xuLy8gICAgICAgICAgIC8vIE9uIGVjcmFzZSB0ZW1wXG4vLyAgICAgICAgICAgdGVtcCA9IHRlbXAxO1xuLy8gICAgICAgICAgIHJlc3VsdCA9IHRlbXA7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cblxuLy8gICAgICAgaSsrO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9XG4gXG5cbi8vICAgcHJpdmF0ZSBzdGF0aWMgX2ZpbHRlclJlc3VsdEJ5U2ltcGxlQ29uZGl0aW9uKGNvbmRpdGlvbiwgdGVtcDogYW55KSB7XG4vLyAgICAgY29uc29sZS5sb2coJ0RFQUwgZmluZFRlbXAgPT09ICcsIGNvbmRpdGlvbilcbi8vICAgICBpZiAodHlwZW9mIChjb25kaXRpb24pID09ICdvYmplY3QnKSB7XG4vLyAgICAgICB2YXIgZmllbGQgPSBjb25kaXRpb25bMF07XG4vLyAgICAgICB2YXIgb3BlcmF0b3IgPSBjb25kaXRpb25bMV07XG4vLyAgICAgICB2YXIgdmFsdWUgPSBjb25kaXRpb25bMl07XG4vLyAgICAgICBsZXQgcmVnIDogYW55ID0gbnVsbDtcbi8vICAgICAgIGxldCBvcG51bSA9IGZhbHNlO1xuLy8gICAgICAgbGV0IHJldmVyc2UgPSBmYWxzZTtcbi8vICAgICAgIGNvbnNvbGUubG9nKCdmaWVsZCAoMSk6JyArIGZpZWxkLCBvcGVyYXRvciwgdmFsdWUpXG4vLyAgICAgICBpZiAob3BlcmF0b3IgPT0gJ3N0YXJ0c3dpdGgnKSB7XG4vLyAgICAgICAgIHJlZyA9IG5ldyBSZWdFeHAoXCJeXCIgKyB2YWx1ZSwgJ2knKTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJ2VuZHN3aXRoJykge1xuLy8gICAgICAgICByZWcgPSBuZXcgUmVnRXhwKHZhbHVlICsgXCIkXCIsICdpJyk7XG4vLyAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICdjb250YWlucycpIHtcbi8vICAgICAgICAgcmVnID0gbmV3IFJlZ0V4cCh2YWx1ZSwgJ2knKTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJ2xpa2UnIHx8IG9wZXJhdG9yID09ICdub3QgbGlrZScpIHtcbi8vICAgICAgICAgaWYgKG9wZXJhdG9yID09ICdub3QgbGlrZScpIHtcbi8vICAgICAgICAgICByZXZlcnNlID0gdHJ1ZTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZiAodmFsdWUubWF0Y2goL14lLislJC8pKSB7XG4vLyAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9eJS8sICcnKS5yZXBsYWNlKC8lJC8sICcnKVxuLy8gICAgICAgICAgIG9wZXJhdG9yID0gJ2NvbnRhaW5zJ1xuLy8gICAgICAgICAgIHJlZyA9IG5ldyBSZWdFeHAodmFsdWUsICdpJyk7XG4vLyAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUubWF0Y2goLy4rJSQvKSkge1xuLy8gICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvJSQvLCAnJylcbi8vICAgICAgICAgICBvcGVyYXRvciA9ICdzdGFydHN3aXRoJ1xuLy8gICAgICAgICAgIHJlZyA9IG5ldyBSZWdFeHAoXCJeXCIgKyB2YWx1ZSwgJ2knKTtcbi8vICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZS5tYXRjaCgvXiUvKSkge1xuLy8gICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXiUvLCAnJylcbi8vICAgICAgICAgICBvcGVyYXRvciA9ICdlbmRzd2l0aCdcbi8vICAgICAgICAgICByZWcgPSBuZXcgUmVnRXhwKHZhbHVlICsgXCIkXCIsICdpJyk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJ3JlZ2V4Jykge1xuLy8gICAgICAgICByZWcgPSBuZXcgUmVnRXhwKHZhbHVlLCAnaScpO1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnbm90UmVnZXgnKSB7XG4vLyAgICAgICAgIHJlZyA9IG5ldyBSZWdFeHAodmFsdWUsICdpJyk7XG4vLyAgICAgICAgIHJldmVyc2UgPSB0cnVlO1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnaXNudWxsJykge1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnaXNub3RudWxsJykge1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnPScpIHtcbi8vICAgICAgICAgb3BudW0gPSB0cnVlO1xuLy8gICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnPj0nKSB7XG4vLyAgICAgICAgIG9wbnVtID0gdHJ1ZTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJz4nKSB7XG4vLyAgICAgICAgIG9wbnVtID0gdHJ1ZTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJzwnKSB7XG4vLyAgICAgICAgIG9wbnVtID0gdHJ1ZTtcbi8vICAgICAgIH0gZWxzZSBpZiAob3BlcmF0b3IgPT0gJyE9Jykge1xuLy8gICAgICAgICBvcG51bSA9IHRydWU7XG4vLyAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICc8PScpIHtcbi8vICAgICAgICAgb3BudW0gPSB0cnVlO1xuLy8gICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgdGhyb3cgKFwiVW5rb3duIG9wZXJhdG9yIFwiICsgb3BlcmF0b3IpXG4vLyAgICAgICB9XG5cbi8vICAgICAgIGNvbnNvbGUubG9nKCdmaWVsZDonICsgZmllbGQsIG9wZXJhdG9yLCB2YWx1ZSwgcmVnKVxuLy8gICAgICAgdGVtcCA9IHRlbXAuZmlsdGVyKGZ1bmN0aW9uIChkLCBpbmRleCwgYXJyYXkpIHtcbi8vICAgICAgICAgLy9jb25zb2xlLmxvZyhkW2ZpZWxkXSlcbi8vICAgICAgICAgaWYgKHJlZyA9PSBudWxsKSB7XG4vLyAgICAgICAgICAgaWYgKG9wbnVtICYmIHR5cGVvZiAoZFtmaWVsZF0pID09ICdudW1iZXInKSB7XG4vLyAgICAgICAgICAgICB2YWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpXG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIGlmIChvcGVyYXRvciA9PSAnPScpIHtcbi8vICAgICAgICAgICAgIGlmICh0eXBlb2YgKGRbZmllbGRdKSA9PSAnYm9vbGVhbicpIHtcbi8vICAgICAgICAgICAgICAgaWYgKHZhbHVlID09ICcxJylcbi8vICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRydWU7XG4vLyAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSAnMCcpXG4vLyAgICAgICAgICAgICAgICAgdmFsdWUgPSBmYWxzZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGlmIChkW2ZpZWxkXSAhPT0gbnVsbCkge1xuLy8gICAgICAgICAgICAgICBpZiAoZFtmaWVsZF0gPT09IHZhbHVlKSB7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICdpc251bGwnKSB7XG4vLyAgICAgICAgICAgICBpZiAoZFtmaWVsZF0gPT0gbnVsbCkge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICdpc25vdG51bGwnKSB7XG4vLyAgICAgICAgICAgICBpZiAoZFtmaWVsZF0gIT0gbnVsbCkge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICc+PScpIHtcbi8vICAgICAgICAgICAgIGlmIChkW2ZpZWxkXSAhPT0gbnVsbCAmJiBkW2ZpZWxkXSA+PSB2YWx1ZSkge1xuLy8gICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdG9yID09ICc+Jykge1xuLy8gICAgICAgICAgICAgaWYgKGRbZmllbGRdICE9PSBudWxsICYmIGRbZmllbGRdID4gdmFsdWUpIHtcbi8vICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnIT0nKSB7XG4vLyAgICAgICAgICAgICBpZiAoZFtmaWVsZF0gIT09IG51bGwgJiYgZFtmaWVsZF0gIT0gdmFsdWUpIHtcbi8vICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnPD0nKSB7XG4vLyAgICAgICAgICAgICBpZiAoZFtmaWVsZF0gIT09IG51bGwgJiYgZFtmaWVsZF0gPD0gdmFsdWUpIHtcbi8vICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRvciA9PSAnPCcpIHtcbi8vICAgICAgICAgICAgIGlmIChkW2ZpZWxkXSAhPT0gbnVsbCAmJiBkW2ZpZWxkXSA8IHZhbHVlKSB7XG4vLyAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgIH1cbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICBpZiAoZFtmaWVsZF0gJiYgZFtmaWVsZF0ubWF0Y2gocmVnKSkge1xuLy8gICAgICAgICAgICAgaWYgKHJldmVyc2UpIHtcbi8vICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4vLyAgICAgICAgICAgfVxuXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYgKHJldmVyc2UpIHtcbi8vICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gZmFsc2U7XG4vLyAgICAgICB9KVxuLy8gICAgIH1cbi8vICAgICByZXR1cm4gdGVtcDtcbi8vICAgfVxuXG4vLyB9Il19