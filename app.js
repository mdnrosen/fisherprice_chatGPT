require('dotenv').config()
const express = require('express')
const app = express()
const pug = require('pug')
const path = require('path')
const PORT = process.env.PORT || 4444

const routes = require('./router/index')






app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, "public")))

app.listen(PORT, () => {
    console.log(`App running in port ${PORT}`)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/', routes)
























// const terrysID = '1841371'
// const reviews = require('./reviews.json')
// const stem = 'https://api.content.tripadvisor.com/api/v1'
// const ta_key = process.env.TA_API_KEY;

// const { Configuration, OpenAIApi } = require('openai')
// const configuration = new Configuration({
//     organization: "org-io8nM7TFFHHAuzuSf8aOXs1G",
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);



// (async () => {
//     try {


//         const random = Math.floor(Math.random() * 5)
//         console.log(random)
//         // const goodOnes = reviews.filter(r => r.rating >= 4)
//         // console.log(random)
//         const result = await handleFetch('/location/search','searchQuery=terrys%20cafe&address=london&language=en' )
//         const { location_id } = result.data[0]
//         const reviewsObj = await handleFetch(`/location/${location_id}/reviews`, '')
//         const response = await openai.createCompletion({
//             model: "text-davinci-003",
//             prompt: `Make this text into a song lyric: ${reviewsObj.data[random].text}`,
//             max_tokens: 2048,
//             temperature: 0,
//         })

//         console.log(response)
//         // console.log(response)
//     } catch (err) {
//         console.log(err)
//     }

//     // const result = await handleFetch('/location/search','searchQuery=terrys%20cafe&address=london&language=en' )
//     // const { location_id } = result.data[0]
//     // const reviewsObj = await handleFetch(`/location/${location_id}/reviews`, '')
//     // console.log(reviewsObj)
//     // console.log(JSON.stringify(reviewsObj))
// })()



// async function handleFetch(routes, q) {
//     const url = `${stem}${routes}?${q}&key=${ta_key}`
//     console.log(url)
//     const response = await fetch(url)
//     const result = await response.json()
//     return result
// }
