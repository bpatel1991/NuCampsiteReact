import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
//we want to show loading component if we're still loading data, the error message if we've somehow failed to get the data, and only render data if we have it//

//bring in item, isLoading, errMess props//
function RenderCard({item, isLoading, errMess}) {
    //logic: if loading is truthy, then return loading component//
    if (isLoading) {
        return <Loading />;
    }
    //if error message is truthy, return contents of error message wrapped in h4 element//
    if (errMess) {
        return <h4>{errMess}</h4>;
    }
    //if neither conditions truthy, return card component using campsite's data//
    return (
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard
                        item={props.campsite}
                        isLoading={props.campsitesLoading}
                        errMess={props.campsitesErrMess}
                    />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.promotion} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.partner} />
                </div>
            </div>
        </div>
    );
}

export default Home;  