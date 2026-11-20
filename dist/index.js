import { fetchData } from "./api.js";
async function getUsers() {
    try {
        // Fetch users from REST API
        const users = await fetchData("https://jsonplaceholder.typicode.com/users");
        // Transform API response
        const userSummaries = users.map((user) => ({
            id: user.id,
            fullName: user.name.toUpperCase(),
            email: user.email,
            city: user.address.city
        }));
        // Generic type-safe console output
        console.log("Original Users:", users);
        console.log("Transformed Users:", userSummaries);
    }
    catch (error) {
        console.error("Error fetching users:", error);
    }
}
getUsers();
//# sourceMappingURL=index.js.map