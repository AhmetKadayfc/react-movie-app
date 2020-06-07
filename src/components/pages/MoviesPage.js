import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux'

import MovieList from '../MoviesList'

class MoviesPage extends Component {
    static propTypes = {
        movies: PropTypes.array.isRequired
    }
    componentDidMount() {
        console.log(this.props)
    }
    render() {
        return (
            <div>
                <h2>Movies Page</h2>
                <MovieList movies={this.props.movies} />
            </div>
        )
    }
}

const mapStateToProps = ({ movies }) => {
    return {
        movies
    }
}

export default connect(mapStateToProps)(MoviesPage)