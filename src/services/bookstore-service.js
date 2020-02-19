export default class BookStoreService {

    data = [
        {
            id: 1,
            title: 'Book1',
            author: 'Author1',
            price: 20,
            coverImage: 'https://covers.oreillystatic.com/images/0636920053675/lrg.jpg'
        },
        {
            id: 2,
            title: 'Book2',
            author: 'Author2',
            price: 30,
            coverImage: 'https://covers.oreillystatic.com/images/0636920053675/lrg.jpg'
        }
    ]

    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error("Error"));
                } else {
                    resolve(this.data);

                }
            }, 700);
        });
    }
}