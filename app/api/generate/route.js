import clientPromise from "@/lib/mongodb";

export async function POST(request) {

    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("my-bitlinks");
    const collection = db.collection("links");


    // Check if the short URL already exists
    const existingLink = await collection.findOne({ shorturl: body.shorturl });
    if (existingLink) {
        return Response.json(
            {
                success: false,
                status: 400,
                message: "Short URL already exists. Please choose a different name.",
            },
        );
    }

    // Insert the new link into the database
    const newLink = {
        longurl: body.longurl,
        shorturl: body.shorturl,
        createdAt: new Date(),
    };
    const result = await collection.insertOne(newLink);


    return Response.json(
        {
            success: true,
            status: 201,
            message: "Link shortened successfully",
        }
    )

}