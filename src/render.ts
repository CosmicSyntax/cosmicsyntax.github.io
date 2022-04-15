// library for rendering dom elements

/*
    Flow chart
    DATA + TEMPLATE + TARGET -> KABOOM -> DOM
*/

class Struct {
	data: string;
	template: string;

    constructor(data: string, template: string) {
        this.data = data;
        this.template = template;
    }

    get property(): any {
        return null;
    }
    

}

// Export...

export {Struct};
