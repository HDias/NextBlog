import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'json')

export function getAllPostIds() {
    const slugPosts = require('../json/posts.json');

    return slugPosts.channel.item.map(item => {
        return {
            params: {
                id: item.post_name
            }
        }
    })
}

export function getAllPosts() {
    const fullPath = path.join(postsDirectory, 'posts.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const jsonContent = JSON.parse(fileContents);

    return jsonContent.channel.item.map(item => {
        return {
            id: item.post_id,
            title: item.title,
            slug: item.post_name
        }
    })
}

export function getPostData(slug) {
    const posts = require('../json/posts.json');

    return {
        slug
    }
}