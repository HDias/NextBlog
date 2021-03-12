export function getAllPostIds() {
    const slugPosts = require('../../json/posts.json');

    return slugPosts.channel.item.map(item => {
        return {
            params: {
                id: item.post_name
            }
        }
    })
}

export function getAllPosts() {
    const slugPosts = require('../../json/posts.json');

    return slugPosts.channel.item.map(item => {
        return {
            id: item.post_id,
            title: item.title,
            slug: item.post_name
        }
    })
}

export function getPostData(slug) {
    const posts = require('../../json/posts.json');

    console.log(slug)

    return {
        slug
    }
}