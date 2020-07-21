const sanityClient = require("@sanity/client")
const client = sanityClient({
    projectId: "qmir7n62",
    dataset: "development",
    token: process.env.SANITY_TOKEN,
})

exports.handler = async function (event, context, callback) {
    console.log("event", event)
    console.log("context", context)
    const { payload } = JSON.parse(event.body)
    const result = await client.create({
        _type: "submission.form",
        ...payload,
    })
    callback(null, {
        statusCode: 200,
    })
}
