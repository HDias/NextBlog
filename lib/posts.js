import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'json')

export function getAllPostIds() {
    const slugPosts = require('../json/posts.json');

    return slugPosts.channel.item.map(item => {
        return {
            params: {
                slug: item.post_name
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
            dt_pub: item.pubDate,
            slug: item.post_name
        }
    })
}

export function getPostData({ slug }) {
    const fullPath = path.join(postsDirectory, 'posts.json');
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const jsonContent = JSON.parse(fileContents);
    // const item = jsonContent.channel.item[0]
    // return {
    //     id: item.post_id,
    //     title: item.title,
    //     content: item.encoded[0],
    // }
    
    for (let index = 0; index < jsonContent.channel.item.length; index++) {
        const item = jsonContent.channel.item[index]
        if(item.post_name == slug) {
            return {
                id: item.post_id,
                title: item.title,
                dt_pub: item.pubDate,
                content: item.encoded[0],
            }
        }        
    }
    jsonContent.channel.item.forEach(item => {
        if(item.post_name == slug) {
            return {
                id: item.post_id,
                title: item.title,
                content: item.encoded[0].stringify,
            }
        }
    });
}