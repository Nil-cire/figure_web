import { Parse } from 'parse/dist/parse.min.js';

export async function getHomeData() {
    const query = new Parse.Query("Home")
    const posts = await query.first()
    const object = JSON.parse(JSON.stringify(posts))
    return {
        twitter_art: object.twitter_art,
        twitter_cosplay: object.twitter_cosplay
    }
}