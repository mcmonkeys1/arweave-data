import { Dependencies, DataItemJson } from "./ar-data-base";
/**
 * Decode the data content of a DataItem, either to a string or Uint8Array of bytes
 *
 * @param deps
 * @param d
 * @param param2
 */
export declare function decodeData(deps: Dependencies, d: DataItemJson, options?: {
    string: boolean;
}): Promise<string | Uint8Array>;
/**
 * Decode an individual tag from a DataItem. Always decodes name and value as strings
 *
 * @param deps
 * @param tag
 */
export declare function decodeTag(deps: Dependencies, tag: {
    name: string;
    value: string;
}): Promise<{
    name: string;
    value: string;
}>;
/**
 * Decodes an individual tag from a DataItem at index. Throws if index is out of bounds.
 *
 */
export declare function decodeTagAt(deps: Dependencies, d: DataItemJson, index: number): Promise<{
    name: string;
    value: string;
}>;
/**
 * Unpack all tags in a DataItem into a key value map of
 *
 * `name: string | string[]`
 *
 * Always decodes as string values, maintains the order
 * the tags were seriliazed in when converting a collection
 * of tags with the same key.
 *
 * @param deps
 * @param d
 */
export declare function unpackTags(deps: Dependencies, d: DataItemJson): Promise<Record<string, (string | string[])>>;
