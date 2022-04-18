// Reddit API parser

class Post {
	title: string;
	comment: string;
	subreddit: string;
	link: string;
}

class Reddit {

	data: any;

    constructor(data: any) {
        // JSON from Reddit
        this.data = data;
    }

    get property() {
        return this.data.modhash;
    }
    
    getdata() {
        let data = this.data.data.children;

        let parsed = new Array;

        data.forEach( (d: any) => {
            let el = new Post;
            el.title = d.data.link_title;
            el.comment = d.data.body;
            el.subreddit = d.data.subreddit;
            el.link = d.data.link_permalink;

            parsed.push(el);
        });

        return parsed;
    }

}

// Export...

export {Reddit};
