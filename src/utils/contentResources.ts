import {CLIENT_ID} from "../app.config";
import {ImageLoader, ImageLoaderProps} from "next/image";

export const imageLoader = (ops: ImageLoaderProps): any => {
  return `/api/content/events/${CLIENT_ID}${ops.src}`;
}

export const csvStrToArray = (csvStr: string, separator: string = ",") => {
  const objPattern = new RegExp(
    ("(\\" + separator + "|\\r?\\n|\\r|^)" + "(?:\"([ ^\"]*(?:\"\"[^\"]*)*)\"|" + "([^\"\\" + separator + "\\r\\n]*))"),
    "gi"
  );
  const arrData = [[]];
  let arrMatches = null;

  while (arrMatches = objPattern.exec(csvStr)) {
    let strMatchedDelimiter = arrMatches[1];
    if (strMatchedDelimiter.length && strMatchedDelimiter !== separator) {
      arrData.push([]);
    }
    let strMatchedValue;
    if (arrMatches[2]) {
      strMatchedValue = arrMatches[2].replace(new RegExp("\"\"", "g"), "\"");
    } else {
      strMatchedValue = arrMatches[3]
    }
    // @ts-ignore
    arrData[arrData.length - 1].push(strMatchedValue);
  }
  return (arrData);
}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
