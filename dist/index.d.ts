import { Dependencies } from './ar-data-base';
import { getSignatureData, DataItemJson } from './ar-data-base';
import { createData, sign, DataItemCreateOptions } from './ar-data-create';
import { decodeData, decodeTag, decodeTagAt, unpackTags } from './ar-data-read';
import { verify } from './ar-data-verify';
export { createData as create, sign, decodeData, decodeTag, decodeTagAt, unpackTags, verify, DataItemCreateOptions, DataItemJson, getSignatureData };
export default function ArweaveData(deps: Dependencies): {
    createData: (opts: DataItemCreateOptions, jwk: import("./interface-jwk").JWKPublicInterface) => Promise<DataItemJson>;
    sign: (d: DataItemJson, jwk: import("./interface-jwk").JWKInterface) => Promise<DataItemJson>;
    addTag: (d: DataItemJson, name: string, value: string) => void;
    verify: (d: DataItemJson) => Promise<boolean>;
    decodeData: (d: DataItemJson, options?: {
        string: boolean;
    } | undefined) => Promise<string | Uint8Array>;
    decodeTag: (tag: {
        name: string;
        value: string;
    }) => Promise<{
        name: string;
        value: string;
    }>;
    decodeTagAt: (d: DataItemJson, index: number) => Promise<{
        name: string;
        value: string;
    }>;
    unpackTags: (d: DataItemJson) => Promise<Record<string, string | string[]>>;
    bundleData: (datas: DataItemJson[]) => Promise<string>;
    unbundleData: (txData: any) => Promise<DataItemJson[]>;
};
