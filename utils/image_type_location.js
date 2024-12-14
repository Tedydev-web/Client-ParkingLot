import images from "./images";

export function getImageByType(image) {
    switch (image) {
        case "village":
            return images.village;

        case "commune":
            return images.commune;

        case "district":
            return images.dicstrict;

        case "province":
            return images.province;

        case "alley":
            return images.alley;

        case "street":
            return images.street;

        case "auto_showroom":
            return images.auto_showroom;

        case "parking":
            return images.parking;

        case "gas_station":
            return images.gas_station;

        case "auto_repair":
            return images.auto_repair;

        case "atm":
            return images.atm;

        case "bank":
            return images.bank;

        case "convention_center":
            return images.convention_center;

        case "exhibition_center":
            return images.exhibition_center;

        case "industrial_park":
            return images.industrial_park;

        case "company":
            return images.company;

        case "primary_school":
            return images.primary_school;

        case "secondary_school":
            return images.secondary_school;

        case "high_school":
            return images.high_school;

        case "university":
            return images.university;

        case "vocational_training":
            return images.vocational_training;

        case "training_center":
            return images.training_center;

        case "pre_school":
            return images.pre_school;

        case "research_institute":
            return images.research_institute;

        case "college":
            return images.college;

        case "inter_level_school":
            return images.inter_level_school;

        case "pharmacy":
            return images.pharmacy;

        case "dentist":
            return images.dentist;

        case "hospital":
            return images.hospital;

        case "fire_station":
            return images.fire_station;

        case "police":
            return images.police;

        case "clinic":
            return images.clinic;

        case "art":
            return images.art;

        case "museum":
            return images.museum;

        case "theatre":
            return images.theatre;

        case "culture":
            return images.culture;

        case "cinema":
            return images.cinema;

        case "zoo":
            return images.zoo;

        case "tv_radio":
            return images.tv_radio;

        case "karaoke":
            return images.karaoke;

        case "bar":
            return images.bar;

        case "restaurant":
            return images.restaurant_type;

        case "cafe":
            return images.cafe;

        case "state_agencie":
            return images.state_agencie;

        case "court":
            return images.court;

        case "military":
            return images.military;

        case "prison":
            return images.prison;

        case "central_authority":
            return images.central_authority;

        case "embassy":
            return images.embassy;

        case "goverment":
            return images.goverment;

        case "international_agency":
            return images.international_agency;

        case "agency_of_the_ministry":
            return images.agency_of_the_ministry;

        case "treasury":
            return images.treasury;

        case "hotel":
            return images.hotel_type;

        case "motel":
            return images.motel;

        case "motel_room":
            return images.motel_room;

        case "tennis":
            return images.tennis;

        case "swimming_pool":
            return images.swimming_pool;

        case "stadium":
            return images.stadium;

        case "spa":
            return images.spa;

        case "park":
            return images.park;

        case "golf":
            return images.golf;

        case "beach":
            return images.beach;

        case "gymnasium":
            return images.gymnasium;

        case "library,book_store":
            return images.book_store;

        case "airport_ticket_agency":
            return images.airport_ticket_agency;

        case "post_office":
            return images.post_office;

        case "building":
            return images.building;

        case "commercial_center":
            return images.commercial_center;

        case "grocery_store":
            return images.grocery_store;

        case "supermarket":
            return images.supermarket;

        case "market":
            return images.market;

        case "site":
            return images.site;

        case "church":
            return images.church;

        case "monument":
            return images.monument;

        case "pagoda":
            return images.pagoda;

        case "cemetery":
            return images.cemetery;

        case "train_station":
            return images.train_station;

        case "gate":
            return images.gate;

        case "port":
            return images.port;

        case "station":
            return images.station;

        case "airport":
            return images.airport;

        case "charging_station":
            return images.charging_station;

        case "camera":
            return images.camera;

        case "traffic_light":
            return images.traffic_light;

        case "forest":
            return images.forest;

        case "house_number":
            return images.house_number;

        case "":
            return images.no_type;

        default:
            return images.no_type;

    }
}