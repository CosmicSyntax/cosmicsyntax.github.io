// Reddit API parser

class Reddit {
    constructor(data) {
        // JSON from Reddit
        this.data = data;
    }

    get property() {
        return this.data.modhash;
    }
    
    getdata() {
        let data = this.data.data.children;

        let parsed = new Array;

        data.forEach( d => {
            let el = new Object;
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
