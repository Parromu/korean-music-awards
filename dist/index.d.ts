export interface MMADataType {
    category: string;
    artist: string;
    title: string;
    img: string;
}
export interface KHADataType {
    category: string;
    artist: string;
    title: string;
    img: string;
    netizenRecommendations: string;
    recommendationsList: string[];
}
export declare const MMAURL = "https://www.melon.com/mma/result.htm?mmaYear=2023";
export declare const KHAURL = "https://www.koreanhiphopawards.com/2023/2023winners.html";
export declare const AAAURL = "https://www.asiaartistawards.com/winner/2023";
export declare const GDAURL = "https://www.goldendisc.co.kr/ko/history/2022";
declare const getMMAData: (url?: string) => Promise<MMADataType[]>;
declare const getKHAData: (url?: string) => Promise<KHADataType[]>;
export { getKHAData, getMMAData };
