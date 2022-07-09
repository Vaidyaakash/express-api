const homeApi = (req, res) => {
    res.send([
        {
            "id": "1",
            "title":"Sri Lanka Crisis Live Updates: Protesters storm President Gotabaya Rajapaksa’s",
            "date":"July 9, 2022",
            "img": "https://images.indianexpress.com/2022/07/Sri-Lanka-Main.jpg",
        },
        {
            "id": "2",
            "title":"In rare gesture, PM Modi, Biden and Albanese issue joint statement condoling death of Shinzo Abe",
            "date":"July 9, 2022",
            "img": "https://images.indianexpress.com/2022/07/Shinzo-Abe-4.jpg",
        },
       {
            "id": "3",
            "title":"Amarnath cloudburst: J&K administration sets up helpline numbers",
            "date":"July 9, 2022",
            "img": "https://images.indianexpress.com/2022/07/Amarnath-3.jpg",
        },
     {
            "id": "4",
            "title":"Mumbai News Live Updates: CM Eknath Shinde, Dy CM Fadnavis meet Amit Shah",
            "date":"July 9, 2022",
            "img": "https://images.indianexpress.com/2022/07/WhatsApp-Image-2022-07-08-at-11.56.51-PM-1.jpeg",
        },
       {
            "id": "5",
            "title":"Jaishankar meets Lavrov, Blinken on sidelines of G-20, talks Ukraine",
            "date":"July 9, 2022",
            "img": "https://images.indianexpress.com/2022/07/jaishankarlavrov-4col.jpg",
        },
    ])
}

module.exports.homeNews = homeApi