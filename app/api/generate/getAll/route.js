import clientPromise from "@/lib/mongodb";

export async function GET(request) {

    const client = await clientPromise;
    const db = client.db("my-bitlinks");
    const collection = db.collection("links");

    // Fetch all links from the database
    const links = await collection.find({}).toArray();
    if (links.length === 0) {
        return Response.json(
            {
                success: false,
                status: 404,
                message: "No links found",
            },
            { status: 404 }
        );
    }
    return Response.json(
        {
            success: true,
            status: 200,
            message: "Links fetched successfully",
            data: links,
        },
        { status: 200 }
    );


}