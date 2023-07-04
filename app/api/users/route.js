export async function GET(request) {
    const users = [
        { id: 1, name: "GG"},
        { id: 2, name: "GG2"},
        { id: 3, name: "GG3"},
    ]

    return new Response(JSON.stringify(users))
}