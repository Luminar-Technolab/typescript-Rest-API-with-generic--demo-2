export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        city: string;
    };
}

export interface UserSummary {
    id: number;
    fullName: string;
    email: string;
    city: string;
}