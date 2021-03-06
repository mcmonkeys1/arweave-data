import { DataItemJson } from ".";
import { Dependencies } from "./ar-data-base";
/**
 * Unbundles a transaction into an Array of DataItems.
 *
 * Takes either a json string or object. Will throw if given an invalid json
 * string but otherwise, it will return an empty array if
 *
 * a) the json object is the wrong format
 * b) the object contains no valid DataItems.
 *
 * It will verify all DataItems and discard ones that don't pass verification.
 *
 * @param deps
 * @param txData
 */
export declare function unbundleData(deps: Dependencies, txData: any): Promise<DataItemJson[]>;
/**
 * Verifies all datas and returns a json object with an items array.
 * Throws if any of the data items fail verification.
 *
 * @param deps
 * @param datas
 */
export declare function bundleData(deps: Dependencies, datas: DataItemJson[]): Promise<string>;
