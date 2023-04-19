
require('dotenv').config()
const { Configuration, OpenAIApi } = require('openai')
const configuration = new Configuration({
    // organization: process.env.OPENAI_API_ORGANISATION,
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)



exports.askChat = async (req, res, next) => {
    try {
        const { question } = req.body
        const { data } = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: question,
            max_tokens: 1064
        })

        console.log(data.choices[0])

        req.question = question
        req.answer = data.choices[0].text
        next() 
    } catch (err) {
        console.log(err)
        res.json(err)
    }
}



exports.renderMain = async(req, res) => {
    res.render('main', { 
        title: 'Home', 
        answer: req.answer || '', 
        question: req.question || ''
    })

}