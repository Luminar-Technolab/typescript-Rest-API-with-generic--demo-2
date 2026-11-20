export async function fetchData<T>(
    url: string
): Promise<T> {

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json() as T;

    return data;
}