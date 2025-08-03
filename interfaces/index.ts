export interface CardProp {

}

export interface ButtonProps {
    text: string;
    text_color: string;
    bg_color: string;
}

export interface AddressProp {
    street?: string;
    city: string;
    state: string;
    country: string;
    zipCode?: string;
    coordinates?: {
        lat: number;
        lng: number;
    };
}

export interface PropertyOffers {
    bedrooms: number;
    bathrooms: number;
    guests: number;
    beds: number;
    squareMeters?: number;
}

export interface Amenity {
    name: string;
    icon?: string;
}

export interface Review {
    id: string;
    user: string;
    avatar: string;
    rating: number;
    date: string;
    comment: string;
}

export interface PropertyProps {
    id: string;
    title: string;
    description: string;
    address: AddressProp;
    rating: number;
    reviewCount: number;
    category: string[];
    pricePerNight: number;
    originalPrice?: number;
    isSuperhost: boolean;
    isFavorite: boolean;
    offers: PropertyOffers;
    amenities: Amenity[];
    images: string[];
    reviews?: Review[];
    host: {
        name: string;
        avatar: string;
        isSuperhost: boolean;
        joinDate: string;
    };
    bookingDetails?: {
        checkIn: string;
        checkOut: string;
        guests: number;
    };
    cancellationPolicy: 'flexible' | 'moderate' | 'strict' | 'superStrict';
    houseRules?: string[];
    availableFrom?: string;
    minimumStay?: number;
    maximumStay?: number;
}

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
    {
        id: "1",
        title: "Villa Ocean Breeze",
        description: "A luxurious villa with a private pool and stunning ocean views.",
        address: {
            street: "1234 Ocean View Drive",
            city: "Seminyak",
            state: "Bali",
            country: "Indonesia",
            coordinates: {
                lat: -8.6833,
                lng: 115.1667
            }
        },
        rating: 4.89,
        reviewCount: 124,
        category: ["Luxury Villa", "Pool", "Free Parking"],
        pricePerNight: 320,
        originalPrice: 380,
        isSuperhost: true,
        isFavorite: false,
        offers: {
            bedrooms: 3,
            bathrooms: 3,
            guests: 6,
            beds: 3
        },
        amenities: [
            { name: 'Private pool', icon: 'pool' },
            { name: 'Free parking', icon: 'parking' },
            { name: 'Wifi', icon: 'wifi' },
            { name: 'Air conditioning', icon: 'snowflake' },
            { name: 'Kitchen', icon: 'kitchen' },
            { name: 'Beach access', icon: 'beach' },
            { name: 'Hot tub', icon: 'hot-tub' },
            { name: 'Washer', icon: 'washing-machine' }
        ],
        images: [
            "https://example.com/image1.jpg",
            "https://example.com/image2.jpg",
            "https://example.com/image3.jpg"
        ],
        host: {
            name: "John Doe",
            avatar: "https://example.com/avatar1.jpg",
            isSuperhost: true,
            joinDate: "2020-05-15"
        },
        cancellationPolicy: 'moderate',
        houseRules: [
            'No smoking',
            'No parties or events',
            'Pets allowed with prior approval',
            'Check-in after 3:00 PM',
            'Checkout by 11:00 AM'
        ],
        availableFrom: '2023-12-01',
        minimumStay: 3,
        maximumStay: 30
    },
    {
        id: "2",
        title: "Mountain Escape Chalet",
        description: "A cozy chalet with breathtaking mountain views and modern amenities.",
        address: {
            street: "456 Mountain View Road",
            city: "Aspen",
            state: "Colorado",
            country: "USA",
            coordinates: {
                lat: 39.1911,
                lng: -106.8175
            }
        },
        rating: 4.7,
        reviewCount: 89,
        category: ["Mountain View", "Fireplace", "Self Checkin"],
        pricePerNight: 180,
        originalPrice: 250,
        isSuperhost: true,
        isFavorite: false,
        offers: {
            bedrooms: 4,
            bathrooms: 2,
            guests: 7,
            beds: 4
        },
        amenities: [
            { name: 'Fireplace', icon: 'fire' },
            { name: 'Hot tub', icon: 'hot-tub' },
            { name: 'Mountain view', icon: 'mountain' },
            { name: 'Free parking', icon: 'parking' },
            { name: 'Wifi', icon: 'wifi' },
            { name: 'Kitchen', icon: 'kitchen' },
            { name: 'Washer', icon: 'washing-machine' }
        ],
        images: [
            "https://example.com/image2.jpg",
            "https://example.com/image3.jpg",
            "https://example.com/image4.jpg"
        ],
        host: {
            name: "Sarah Johnson",
            avatar: "https://example.com/avatar2.jpg",
            isSuperhost: true,
            joinDate: "2019-08-22"
        },
        cancellationPolicy: 'flexible',
        houseRules: [
            'No smoking',
            'No parties or events',
            'Pets considered',
            'Check-in after 4:00 PM',
            'Checkout by 10:00 AM'
        ],
        availableFrom: '2023-11-15',
        minimumStay: 2,
        maximumStay: 21
    },
    {
        name: "Cozy Desert Retreat",
        address: {
            state: "Palm Springs",
            city: "California",
            country: "USA"
        },
        rating: 4.92,
        category: ["Desert View", "Pet Friendly", "Self Checkin"],
        price: 1500,
        offers: {
            bed: "2",
            shower: "1",
            occupants: "2-3"
        },
        image: "https://example.com/image3.jpg",
        discount: ""
    },
    {
        name: "City Lights Penthouse",
        address: {
            state: "New York",
            city: "New York",
            country: "USA"
        },
        rating: 4.85,
        category: ["City View", "Free WiFi", "24h Checkin"],
        price: 4500,
        offers: {
            bed: "2",
            shower: "2",
            occupants: "2-4"
        },
        image: "https://example.com/image4.jpg",
        discount: "15"
    },
    {
        name: "Riverside Cabin",
        address: {
            state: "Queenstown",
            city: "Otago",
            country: "New Zealand"
        },
        rating: 4.77,
        category: ["Riverside", "Private Dock", "Free Kayaks"],
        price: 2800,
        offers: {
            bed: "3",
            shower: "2",
            occupants: "4-6"
        },
        image: "https://example.com/image5.jpg",
        discount: "20"
    },
    {
        name: "Modern Beachfront Villa",
        address: {
            state: "Sidemen",
            city: "Bali",
            country: "Indonesia"
        },
        rating: 4.95,
        category: ["Beachfront", "Private Pool", "Chef Service"],
        price: 5000,
        offers: {
            bed: "5",
            shower: "4",
            occupants: "8-10"
        },
        image: "https://example.com/image6.jpg",
        discount: ""
    },
    {
        name: "Lakeside Chalet",
        address: {
            state: "Banff",
            city: "Alberta",
            country: "Canada"
        },
        rating: 4.65,
        category: ["Lakeside", "Mountain View", "Hiking Trails"],
        price: 2300,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-5"
        },
        image: "https://example.com/image7.jpg",
        discount: "10"
    },
    {
        name: "Tropical Garden Villa",
        address: {
            state: "Koh Samui",
            city: "Surat Thani",
            country: "Thailand"
        },
        rating: 4.80,
        category: ["Garden", "Free Parking", "Self Checkin"],
        price: 2750,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "5-6"
        },
        image: "https://example.com/image8.jpg",
        discount: "25"
    },
    {
        name: "Urban Loft",
        address: {
            state: "Berlin",
            city: "Berlin",
            country: "Germany"
        },
        rating: 4.60,
        category: ["City Center", "Free WiFi", "24h Checkin"],
        price: 2000,
        offers: {
            bed: "2",
            shower: "1",
            occupants: "2-3"
        },
        image: "https://example.com/image9.jpg",
        discount: ""
    },
    {
        name: "Secluded Forest Cabin",
        address: {
            state: "Whistler",
            city: "British Columbia",
            country: "Canada"
        },
        rating: 4.72,
        category: ["Secluded", "Hot Tub", "Self Checkin"],
        price: 2600,
        offers: {
            bed: "4",
            shower: "2",
            occupants: "5-7"
        },
        image: "https://example.com/image10.jpg",
        discount: "40"
    },
    {
        name: "Cliffside Villa",
        address: {
            state: "Amalfi",
            city: "Salerno",
            country: "Italy"
        },
        rating: 4.93,
        category: ["Cliffside", "Infinity Pool", "Sea View"],
        price: 6000,
        offers: {
            bed: "4",
            shower: "4",
            occupants: "6-8"
        },
        image: "https://example.com/image11.jpg",
        discount: "50"
    },
    {
        name: "Coastal Escape Villa",
        address: {
            state: "Noosa",
            city: "Queensland",
            country: "Australia"
        },
        rating: 4.83,
        category: ["Beachfront", "Pet Friendly", "Free Parking"],
        price: 3400,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-6"
        },
        image: "https://example.com/image12.jpg",
        discount: ""
    },
    {
        name: "Historical Villa",
        address: {
            state: "Florence",
            city: "Tuscany",
            country: "Italy"
        },
        rating: 4.67,
        category: ["Historical", "Free Breakfast", "Self Checkin"],
        price: 2700,
        offers: {
            bed: "2",
            shower: "2",
            occupants: "2-4"
        },
        image: "https://example.com/image13.jpg",
        discount: "35"
    },
    {
        name: "Downtown Apartment",
        address: {
            state: "Tokyo",
            city: "Tokyo",
            country: "Japan"
        },
        rating: 4.81,
        category: ["City Center", "Free WiFi", "Public Transport"],
        price: 2200,
        offers: {
            bed: "1",
            shower: "1",
            occupants: "2"
        },
        image: "https://example.com/image14.jpg",
        discount: ""
    },
    {
        name: "Luxury Safari Lodge",
        address: {
            state: "Serengeti",
            city: "Mara",
            country: "Tanzania"
        },
        rating: 4.97,
        category: ["Safari", "Guided Tours", "Free Breakfast"],
        price: 4500,
        offers: {
            bed: "4",
            shower: "4",
            occupants: "6-8"
        },
        image: "https://example.com/image15.jpg",
        discount: "20"
    },
    {
        name: "Countryside Cottage",
        address: {
            state: "Cotswolds",
            city: "Gloucestershire",
            country: "UK"
        },
        rating: 4.58,
        category: ["Countryside", "Fireplace", "Self Checkin"],
        price: 1800,
        offers: {
            bed: "2",
            shower: "1",
            occupants: "2-4"
        },
        image: "https://example.com/image16.jpg",
        discount: "25"
    },
    {
        name: "Riverfront Mansion",
        address: {
            state: "Paris",
            city: "Île-de-France",
            country: "France"
        },
        rating: 4.86,
        category: ["Riverfront", "Private Garden", "Self Checkin"],
        price: 5000,
        offers: {
            bed: "4",
            shower: "3",
            occupants: "6-8"
        },
        image: "https://example.com/image17.jpg",
        discount: "30"
    },
    {
        name: "Ski Chalet",
        address: {
            state: "Zermatt",
            city: "Valais",
            country: "Switzerland"
        },
        rating: 4.75,
        category: ["Mountain View", "Ski Access", "Fireplace"],
        price: 3900,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-5"
        },
        image: "https://example.com/image18.jpg",
        discount: ""
    },
    {
        name: "Island Paradise Villa",
        address: {
            state: "Mahe",
            city: "Victoria",
            country: "Seychelles"
        },
        rating: 4.98,
        category: ["Beachfront", "Private Pool", "Chef Service"],
        price: 6500,
        offers: {
            bed: "5",
            shower: "5",
            occupants: "8-10"
        },
        image: "https://example.com/image19.jpg",
        discount: "60"
    },
    {
        name: "Clifftop Retreat",
        address: {
            state: "Cape Town",
            city: "Western Cape",
            country: "South Africa"
        },
        rating: 4.78,
        category: ["Ocean View", "Private Pool", "Self Checkin"],
        price: 4100,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-5"
        },
        image: "https://example.com/image20.jpg",
        discount: ""
    }
];