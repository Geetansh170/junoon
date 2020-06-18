exports.ig_response = {
    data: [],
    meta: {
        code: 0
    },
    continuation_token: ""
}

exports.scrape_settings = {
    post_url: "",
    username: "",
    max_posts: 10,
    max_comments: 5,
    continuation_token: "",
    retrieve_video: false
}

exports.user = {
    profile_picture: '',
    username: '',
    full_name: '',
    bio: '',
    followers: 0,
    following: 0,
    post_count: 0,
}

exports.media = {
    attribution: "",
    caption: "",
    comments: {
        count : 0,
        comments: []
    },
    created_time: Date.now,
    filter: "",
    likes: 0,
    views: 0,
    images: {
        low_resoution: this.src,
        standard_resolution: this.src,
        thumbnail: this.src
    },
    link: "",
    location: "",
    tags: [],
    type: "",
    user: this.user,
    user_has_liked: false,
    users_in_photo: []
}

this.comment ={
    content: "",
    username: "",
    profile_picture: "",
    timestamp: new Date().toUTCString()
}

this.src = {
    width: 0,
    height: 0,
    url: ""
}