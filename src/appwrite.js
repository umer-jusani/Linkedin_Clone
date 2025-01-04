import { Client, Databases, ID, Query, Storage } from 'appwrite';

const client = new Client();
client.setProject(import.meta.env.VITE_APPWRITE_CLIENT_ID);

const storage = new Storage(client);
export const databases = new Databases(client);

// By Using the storage service, it return the file URL of unploaded files

export const getUloadedFileURL = async (file, setLoader) => {
    try {
        const promise = await storage.createFile(
            import.meta.env.VITE_APPWRITE_STORAGE_bUCKET_ID,
            ID.unique(),
            file
        );

        const fileId = promise.$id; // File ID from the response
        const bucketId = import.meta.env.VITE_APPWRITE_STORAGE_bUCKET_ID; // Your bucket ID

        const fileURL = `https://cloud.appwrite.io/v1/storage/buckets/${bucketId}/files/${fileId}/view?project=${"67713161001036c43f1b"}&project=${"67713161001036c43f1b"}&mode=admin`;

        return fileURL
    } catch (error) {
        alert(`getUloadedFileURL ${error}`)
        console.log("getUloadedFileURL error", error);
        setLoader(false)
    }

}

export const savePostDB = async (userDetails, newPost, setLoader) => {
    try {
        // Search for the document by the user's ID or some unique field
        const allDocuments = await databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DATABASE_ID, // databaseId
            '6772850f002fb64d5981', // collectionId
        );

        const isExistDocument = allDocuments.documents.find(ele => {
            let email = JSON.parse(ele.createdBy).email
            return email == userDetails.email
        })



        // Create a new document for the user
        if (!isExistDocument) {
            const newDocument = {
                createdBy: JSON.stringify(userDetails),
                Post: JSON.stringify([newPost])
            };

            const result = await databases.createDocument(
                '677283f40025d7217d2e', // databaseId
                '6772850f002fb64d5981', // collectionId
                ID.unique(), // documentId
                newDocument // data
            );

            console.log("user not exits ka result", result)

            return result;
        }
        // If a document exists for the user
        else {
            const userDocument = isExistDocument;

            // Add the new post to the existing Post array
            const updatedPosts = [...JSON.parse(userDocument.Post), newPost];

            // Update the document with the new Post array
            const result = await databases.updateDocument(
                import.meta.env.VITE_APPWRITE_DATABASE_ID, // databaseId
                '6772850f002fb64d5981', // collectionId
                userDocument.$id, // documentId
                { Post: JSON.stringify(updatedPosts) }
            );

            console.log("user exits ka result", result)

            return result;
        }


    } catch (error) {
        alert(`savePostDB ${error}`);
        console.log("savePostDB", error);
        setLoader(false)
        throw error;
    }
};





export const getAllDocuments = async (userDetails, setData) => {
    if (!userDetails?.email) {
        console.warn("User details not available yet.");
        return;
    }

    try {
        const response = await databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DATABASE_ID, // databaseId
            '6772850f002fb64d5981', // collectionId
        );


        if (!response.documents || response.documents.length === 0) {
            console.warn("No documents found.");
            setData(null); // Clear state if no documents
            return;
        }

        const matchingDocument = response.documents.find((doc) => {
            try {
                const createdBy = JSON.parse(doc.createdBy);
                return createdBy?.email === userDetails?.email;
            } catch (err) {
                console.error("Error parsing document data:", err);
                return false;
            }
        });

        if (matchingDocument) {
            setData(JSON.parse(matchingDocument.Post).reverse());
        } else {
            console.warn("No matching document found for email:", userDetails?.email);
            setData(null); // Clear state if no matching document
        }
    } catch (error) {
        console.error("Error fetching documents:", error);
        setData(null); // Clear state on error
    }
};