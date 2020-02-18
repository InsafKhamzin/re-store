import React from 'react';
import './app.css';
import { withBookStoreService } from '../hoc';

const App = ( {bookstoreService} ) => {
    console.log(bookstoreService.getBooks());
    return <div>App</div>;
}

export default withBookStoreService()(App);