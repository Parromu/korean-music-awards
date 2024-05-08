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
declare const getMMAData: (year: number) => Promise<MMADataType[]>;
declare const getKHAData: (year: number) => Promise<KHADataType[]>;
export { getKHAData, getMMAData };
