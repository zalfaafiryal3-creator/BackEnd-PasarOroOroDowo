export function getStoreDetails() {
    return fetch('/api/store-details').then(async (response) => {
        if (!response.ok) {
            const message = await response.text();
            throw new Error(message || `Permintaan API gagal (${response.status}).`);
        }
        return response.json();
    });
}
