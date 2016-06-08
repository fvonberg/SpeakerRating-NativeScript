export class Talk {
    constructor(
        public id: number,
        public conferenceId: number,
        public imageUrl: string,
        public title: string,
        public description: string,
        public author: string
    ) {}
}