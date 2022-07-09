const latest = (req, res) => {
    res.send([
        {
            "title": "Can coach Dravid of 2022 World T20 learn from captain Dravid of 2007 World Cup?",
            "id": "1",
            "image": "https://images.indianexpress.com/2022/06/Untitled-design-14-2.jpg",
            "date": "July 9, 2022"
        },
        {
            "title": "Kazakhstan, Tunisia, and even Russia will have fingers crossed as Rybakina-Jabeur showdown highlights Wimbledon final",
            "id": "2",
            "image": "https://images.indianexpress.com/2022/07/Womens-Final.jpg",
            "date": "July 9, 2022"
        },
        {
            "title": "Bhuvneshwar’s stunning inswinger to bowl Jos Buttler – eerily similar to the ball he dismissed AB de Villiers in a Test",
            "id": "3",
            "image": "https://images.indianexpress.com/2022/07/Bhuvnehswar-Kumar-Jos-Buttler.jpg",
            "date": "July 9, 2022"
        },
        {
            "title": "Alia Bhatt shares her favourite Darlings memes and it’s a laughter fest",
            "id": "4",
            "image": "https://images.indianexpress.com/2022/07/alia-bhatt-darlings-memes.jpg",
            "date": "July 9, 2022"
        },
        {
            "title": "Elon Musk abandons deal to buy Twitter; company says it will sue",
            "id": "5",
            "image": "https://images.indianexpress.com/2022/04/ElonMusk_Reuters_NEW1-1.jpg",
            "date": "July 9, 2022"
        },
    ])
}

module.exports.latestNews = latest;