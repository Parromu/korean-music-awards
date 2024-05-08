"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMMAData = exports.getKHAData = void 0;
const axios_1 = require("axios");
const cheerio_1 = require("cheerio");
const MMAURL = (year) => `https://www.melon.com/mma/result.htm?mmaYear=${year}`; //2005~2023
const KHAURL = (year) => `https://www.koreanhiphopawards.com/${year}/${year}winners.html`;
const AAAURL = "https://www.asiaartistawards.com/winner/2023"; //2026~2023
const GDAURL = "https://www.goldendisc.co.kr/ko/history/2022"; //1995~2023
const getMMAData = (year) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield axios_1.default.get(MMAURL(year));
        const $ = cheerio_1.default.load(data);
        const body = $("li.item");
        let MMAData = [];
        body.map((i, item) => {
            var _a;
            MMAData[i] = {
                category: $(item).find("a > div.info > div.category").text(),
                artist: $(item).find("a > div.info > div.artist").text(),
                title: $(item).find("a > div.info > div.title").text(),
                img: (_a = $(item).find("a > div.thumb > span.img").attr("style")) !== null && _a !== void 0 ? _a : "",
            };
        });
        return MMAData.length > 0 ? MMAData : [];
    }
    catch (e) {
        throw e;
    }
});
exports.getMMAData = getMMAData;
const getKHAData = (year) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield axios_1.default.get(KHAURL(year));
        const $ = cheerio_1.default.load(data);
        const body = $("div.div_winner");
        let KHAData = [];
        body.map((i, item) => {
            var _a;
            KHAData[i] = {
                category: $(item).find("h3 > strong").text(),
                img: (_a = $(item).find("img.img_winner").attr("src")) !== null && _a !== void 0 ? _a : "",
                artist: $(item).find("h2 > strong").text(),
                title: $(item).find("a > div.info > div.title").text(),
                netizenRecommendations: $(item).find("h5").text(),
                recommendationsList: $(item)
                    .find("ul.nom_testimonial > li")
                    .text()
                    .split("."),
            };
        });
        return KHAData.length > 0 ? KHAData : [];
    }
    catch (e) {
        throw e;
    }
});
exports.getKHAData = getKHAData;
