import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  //ex: pageNumber 2 and pageSize 4 would return 4 for startIndex
  const startIndex = (pageNumber - 1) * pageSize;
  //to call methods using a chain, _(items) converts
  //the items array into a lodash wrapper
  return _(items)
    .slice(startIndex)
    .take(pageSize) //takes number of items from given array
    .value(); //returns regular array
}
