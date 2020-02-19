import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import './book-list.css';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { fetchBooks } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

const BookList = ({books}) =>{
    return (
        <ul className="book-list">
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
};

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error } = this.props;

        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }

        return <BookList books={books}/>;
    }
}


const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error };
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

//#3 if pass the object, connect() automatically use bindActionCreators within
// const mapDispatchToProps = {
//     booksLoaded,
//     booksRequested,
//     booksError
// };

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchBooks: fetchBooks(ownProps.bookstoreService, dispatch)
    }
};

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);