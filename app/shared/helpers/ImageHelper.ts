export class ImageHelper {
    static getImagePath(imageUrl: string) {
        if(imageUrl !== "") {
            return "~/images/" + imageUrl;
        }
        return "~/images/talkHeader.png";
    }   
}