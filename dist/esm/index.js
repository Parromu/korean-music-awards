import axios from "axios";
import cheerio from "cheerio";
import { KHAURL, MMAURL } from "./utils/url";
const getMMAData = async (year) => {
    try {
        const { data } = await axios.get(MMAURL(year));
        const $ = cheerio.load(data);
        const body = $("li.item");
        let MMAData = [];
        body.map((i, item) => {
            MMAData[i] = {
                category: $(item).find("a > div.info > div.category").text(),
                artist: $(item).find("a > div.info > div.artist").text(),
                title: $(item).find("a > div.info > div.title").text(),
                img: $(item).find("a > div.thumb > span.img").attr("style") ?? "",
            };
        });
        return MMAData.length > 0 ? MMAData : [];
    }
    catch (e) {
        throw e;
    }
};
const getKHAData = async (year) => {
    try {
        const { data } = await axios.get(KHAURL(year));
        const $ = cheerio.load(data);
        const body = $("div.div_winner");
        let KHAData = [];
        body.map((i, item) => {
            KHAData[i] = {
                category: $(item).find("h3 > strong").text(),
                img: $(item).find("img.img_winner").attr("src") ?? "",
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
};
export { getKHAData, getMMAData };
