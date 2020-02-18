import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import './book-list.css';
import { connect } from 'react-redux';
import {withBookstoreService} from '../hoc';
import {booksLoaded} from '../../actions';
import {compose} from '../../utils';

class BookList extends Component {

    componentDidMount(){
        const {bookstoreService} = this.props;
        const data = bookstoreService.getBooks();
        
        this.props.booksLoaded(data);
    }

    render() {
        const { books } = this.props;
        return (
            <ul>
                {
                    books.map((book) => {
                        return (
                            <li key={book.id}>
                                <BookListItem book={book} />
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = ({ books }) => {
    return { books };
};

//#1
// const mapDispatchToProps = (dispatch) => {
//     return {
//         booksLoaded: (newBooks) => {
//             dispatch(booksLoaded(newBooks));
//         }
//     };
// };

//#2
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         booksLoaded
//     }, dispatch);
// };

//if pass the object, connect() automatically use bindActionCreators within
const mapDispatchToProps = {
    booksLoaded
};


export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);