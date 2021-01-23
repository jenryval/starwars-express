const express = require('express')
const app = express()
const PORT = 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const character = [
    {
    name: 'yoda',
    forcePoints: 100000,
    role: 'Jedi Master',
    age: 900,
    avatar: 'https://images-na.ssl-images-amazon.com/images/I/71HBWT2Qk8L._AC_SL1500_.jpg',
    routeName: 'yoda'
},
{
    name: 'Luke Skywalker',
    forcePoints: 10000,
    role: 'Jedi Master',
    age: 40,
    avatar: 'https://images-na.https://static.wikia.nocookie.net/star-wars-canon-extended/images/2/2c/Luke_Sky7.jpg/revision/latest/scale-to-width-down/340?cb=20180123070942-images-amazon.com/images/I/71HBWT2Qk8L._AC_SL1500_.jpg',
    routeName: 'lukeskywalker'
},
{
    name: 'JarJar Binks',
    forcePoints: 10,
    role: 'Clown',
    age: 100,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL4xmKhnix7HGUw1p4a7wopBBLg2OXiTxYsQ&usqp=CAU',
    routeName: 'jarjarbinks'
}
]

/**
 * html routes 
 */ 

app.get('/', (req, res) => {
res.send('May the force be with you')
})

// / **
// * API ROUTES
// * 


// /api/characters - show all character data
app.get('/api/character', (req, res) => {
    res.json(character)
})


// /api/character/:routeName
app.get('/api/charcter/:routeName', (req, res) => {
const targetCharacter = req.params.routeName
const character = characters.find(character => {
    return character.routeName === targetCharacter
})
res.join(character)
})

app.post('/api/character/add', (req, res) => {
// console.log(req.body)
const newCharacter = req.body
newCharacter.routeName = newCharacter.name.replace(/ /g, '').toLowerCase()
character.push(newCharacter)
res.status(200).send()
})


app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})

