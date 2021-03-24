import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchCampsites } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions
    };
};

const mapDispatchToProps = {
    addComment: (campsiteId, rating, author, text) => (addComment(campsiteId, rating, author, text)),
    fetchCampsites: () => (fetchCampsites()) //arrow function, call fetchCampsites action creator//

};

class Main extends Component {
 
    componentDidMount() { //Lifecycle methods, like render method//
        this.props.fetchCampsites();
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                    campsite={this.props.campsites.campsites.filter(campsite => campsite.featured)[0]} //accessing campsite's array and object inside array (campsites)//
                    campsitesLoading={this.props.campsites.isLoading} //access loading//
                    campsitesErrMess={this.props.campsites.errMess} //access error message//
                    promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
                    partner={this.props.partners.filter(partner => partner.featured)[0]}
                />
            );
        }

        const CampsiteWithId = ({match}) => {
            return (
                <CampsiteInfo 
                    campsite={this.props.campsites.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]} //accessing campsite's array and object inside array (campsites)//
                    isLoading={this.props.campsites.isLoading} //is loading//
                    errMess={this.props.campsites.errMess} //error message//
                    comments={this.props.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                    addComment={this.props.addComment}
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.props.campsites} />} />
                    <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/aboutus' render={() => <About partners={this.props.partners} /> } />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
