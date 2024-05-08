"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GDAURL = exports.AAAURL = exports.KHAURL = exports.MMAURL = void 0;
const MMAURL = (year) => `https://www.melon.com/mma/result.htm?mmaYear=${year}`; //2005~2023
exports.MMAURL = MMAURL;
const KHAURL = (year) => `https://www.koreanhiphopawards.com/${year}/${year}winners.html`;
exports.KHAURL = KHAURL;
const AAAURL = "https://www.asiaartistawards.com/winner/2023"; //2026~2023
exports.AAAURL = AAAURL;
const GDAURL = "https://www.goldendisc.co.kr/ko/history/2022"; //1995~2023
exports.GDAURL = GDAURL;
