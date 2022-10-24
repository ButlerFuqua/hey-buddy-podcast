const path = require('node:path');
const fs = require('node:fs');
const http = require('node:http');
const net = require('node:net');
const { URL } = require('node:url');



const getCreds = async () => {
    const env = await fs.readFileSync(path.resolve(__dirname, ".env"), 'utf8');
    const vars = env.split('\n');
    return {
        apiKey: (vars.find((envVar) => envVar.includes('HEY_BUDDY_PODCAST_API_TOKEN'))).split('=')[1],
        podcastId: (vars.find((envVar) => envVar.includes('HEY_BUDDY_PODCAST_ID'))).split('=')[1]
    }
}

const getAllEpisodes = async (apiKey, podcastId) => {
    // https://nodejs.org/docs/latest/api/http.html#http_class_http_clientrequest:~:text=//%20Create%20an%20HTTP%20tunneling%20proxy
}


const run = async () => {
    const { apiKey, podcastId } = await getCreds();
    const episodes = await getAllEpisodes(apiKey, podcastId)

    // try {
    //     let data = "This is a file containing a collection"
    //         + " of programming languages.\n"
    //         + "1. C\n2. C++\n3. Python";

    //     fs.writeFileSync(path.resolve(__dirname, "content/podcasts/d.md"), data);
    //     console.log("File written successfully\n");
    //     console.log("The written has the following contents:");
    //     console.log(fs.readFileSync("programming.txt", "utf8"));
    // } catch (error) {
    //     console.error(error)
    // }
}


run();