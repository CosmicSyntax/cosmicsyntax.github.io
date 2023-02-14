// Reddit API parser

class Post {
	title: string;
	comment: string;
	subreddit: string;
	link: string;
	hash: string;
	likes: number;
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
    
    getdata(): Post[] {
        let data: any[] = this.data.data.children;

        let parsed: Post[] = new Array;

        data.forEach( (d: any) => {
            let el = new Post;
            el.title = d.data.link_title;
            el.comment = d.data.body;
            el.subreddit = d.data.subreddit;
            el.link = d.data.link_permalink;
			el.hash = d.data.modhash;
			el.likes = d.data.score;

            parsed.push(el);
        });

        return parsed;
    }

}

// Export...

export {Reddit, Post};
