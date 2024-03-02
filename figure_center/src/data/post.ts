import { Parse } from 'parse/dist/parse.min.js';

const counts_per_page = 20

export async function getPosts(page: number) {
    const query = new Parse.Query("Post")
    query.descending("createdAt")
    query.skip(counts_per_page * (page - 1))
    query.limit(counts_per_page)
    const posts = await query.find()
    const objects = JSON.parse(JSON.stringify(posts))
    const postList = []
    objects.forEach((post: any) => {
        // const postDict: {[key: string]: string | string[] | number} = {}
        // postDict.article_id = post.objectId
        // postDict.title = post.get('title')
        // postDict.timestamp = post.get('timestamp')
        // postDict.main_topic = post.get('main_topic')
        // postDict.sub_topic = post.get('sub_topic')
        // postDict.content = post.get('content')
        // postDict.tags = post.get('tags')
        // postDict.release = post.get('release')
        // postDict.image_url = post.get('image_url')
        // postDict.twitter = post.get('twitter')
        // postList.push(postDict)
        const postVo = {
            id: post.objectId,
            title: post.title,
            timestamp: post.createdAt,
            main_topic: post.main_topic,
            sub_topic: post.sub_topic,
            content: post.content,
            tags: post.tags,
            release: post.release,
            image_url: post.image_url,
            twitter: post.twitter,
        }
        postList.push(postVo)
    })
    return postList
}

export async function getPostsByMainTag(tag: string, page: number) {
    const query = new Parse.Query("Post")
    query.descending("createdAt")
    query.skip(counts_per_page * (page - 1))
    query.limit(counts_per_page)
    query.equalTo('main_topic', tag)
    const posts = await query.find()
    const objects = JSON.parse(JSON.stringify(posts))
    const postList = []
    objects.forEach((post: any) => {
        const postVo = {
            id: post.objectId,
            title: post.title,
            timestamp: post.createdAt,
            main_topic: post.main_topic,
            sub_topic: post.sub_topic,
            content: post.content,
            tags: post.tags,
            release: post.release,
            image_url: post.image_url,
            twitter: post.twitter,
        }
        postList.push(postVo)
    })
    return postList
}

export async function getPostsById(id: string) {
    const query = new Parse.Query("Post")
    query.equalTo('objectId', id)
    const post = await query.first()
    const object = JSON.parse(JSON.stringify(post))
    
    return {
        id: object.objectId,
        title: object.title,
        timestamp: object.createdAt,
        main_topic: object.main_topic,
        sub_topic: object.sub_topic,
        content: object.content,
        tags: object.tags,
        release: object.release,
        image_url: object.image_url,
        twitter: object.twitter,
    }
}