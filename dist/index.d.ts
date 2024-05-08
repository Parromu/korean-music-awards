import { MMADataType, KHADataType } from "./utils/types";
declare const getMMAData: (year: number) => Promise<MMADataType[]>;
declare const getKHAData: (year: number) => Promise<KHADataType[]>;
export { getKHAData, getMMAData, MMADataType, KHADataType };
