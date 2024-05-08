const MMAURL = (year: number) =>
  `https://www.melon.com/mma/result.htm?mmaYear=${year}`; //2005~2023
const KHAURL = (year: number) =>
  `https://www.koreanhiphopawards.com/${year}/${year}winners.html`;
const AAAURL = "https://www.asiaartistawards.com/winner/2023"; //2026~2023
const GDAURL = "https://www.goldendisc.co.kr/ko/history/2022"; //1995~2023

export { MMAURL, KHAURL, AAAURL, GDAURL };
