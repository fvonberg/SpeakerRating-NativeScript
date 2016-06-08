import {Injectable} from "@angular/core";
import {Conference} from "./conference";

@Injectable()
export class ConferenceService {
    
    private allConferences: Array<Conference> = [];
    
    getAllConferences(): Array<Conference> {
        
        let karlsruhe = new Conference(0, "https://placekitten.com/g/500/300", "Karlsruher Entwicklertag 2016", "Agilität, Qualität, Innovation")
        let nuernberg = new Conference(1, "",
                "Herbstcampus 2016", "Dieses Jahr findet der Herbstcampus in Nürnberg bereits zum neunten Mal statt. Vom 30. August bis 1. September 2016 veranstaltet die MATHEMA – nunmehr mit tatkräftiger Unterstützung von dpunkt.verlag, heise Developer und iX – diese technologieorientierte Konferenz für Software-Entwickler, Architekten und Projektleiter aus dem Enterprise-Bereich. Wieder gibt es ein abwechslungsreiches und spannendes Programm zur Software-Entwicklung mit den Technologie-Schwerpunkten .NET und Java geben, aber auch JavaScript spielt eine Rolle.\n" +
                "\n" +
                "Erstmalig dauert der Herbstcampus drei Tage. Am Dienstag wird die Veranstaltung mit den Tutorien eröffnet, während am Mittwoch und Donnerstag die Vorträge der Hauptkonferenz stattfinden.");
        let frankfurt = new Conference(2, "https://placekitten.com/g/300/200", "IT-Tage 2016", "IT-Management- und Entwickler-Konferenz");
        
        this.allConferences.push(karlsruhe);
        this.allConferences.push(nuernberg);
        this.allConferences.push(frankfurt);

        return this.allConferences;
    }
}