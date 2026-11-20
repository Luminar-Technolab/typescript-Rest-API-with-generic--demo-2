import { fetchData } from "./api.js";
import type { User, UserSummary } from "./types.js";

async function getUsers(): Promise<void> {

    try {

        // Fetch users from REST API
        const users = await fetchData<User[]>(
            "https://jsonplaceholder.typicode.com/users"
        );

        // Transform API response
        const userSummaries: UserSummary[] = users.map(
            (user): UserSummary => ({
                id: user.id,
                fullName: user.name.toUpperCase(),
                email: user.email,
                city: user.address.city
            })
        );

        // Generic type-safe console output
        console.log("Original Users:", users);

        console.log("Transformed Users:");
        console.table(userSummaries)
    } catch (error) {

        console.error("Error fetching users:", error);

    }
}

getUsers();