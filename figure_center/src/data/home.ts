import { Parse } from 'parse/dist/parse.min.js';

export async function getHomeData() {
    const query = new Parse.Query("Home")
    const posts = await query.first()
    const object = JSON.parse(JSON.stringify(posts))
    return {
        twitter_art: object.twitter_art,
        twitter_cosplay: object.twitter_cosplay,
        tags: object.tags,
        popular_ids: object.popular,
        home_banner: object.home_banner,
        home_sub_banner: object.home_sub_banner
    }
}