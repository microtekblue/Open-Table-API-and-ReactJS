//Author: Asim Ahmad
//Date: May 1, 2019
//info@microtekblue.com

import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            city: [],
            error: null,
            isLoading: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    fetchCity(getcity) {
        // The API where we're fetching data from
        let url = "http://opentable.herokuapp.com/api/restaurants?city=" + getcity;
        //alert(url);
        fetch(url)
        // We get a response and receive the data in JSON format...
            .then(response => { return response.json()})
            // ...then we update the state of our application
            .then(
                data => {
                    //console.log(data);

                    let city = data.restaurants.map(function(res) {
                        //console.log("res: " + res);
                        return (
                            <ul className="restaurantList" key={res.id}>
                                <li><strong>Name:</strong> {res.name}</li>
                                <li><strong>Address:</strong> {res.address}</li>
                                <li><strong>Price:</strong> {res.price}</li>
                                <li><img src={res.image_url}/></li>
                            </ul>
                        )
                    });

                    this.setState({
                        city: city
                    });

                    //console.log("city: " + this.state.city);
                }
            )
             .then(data => {console.log("data is: " + JSON.stringify(this.state.city))})
            // If we catch errors instead of a response, let's update the app
            .catch(error => this.setState({ error, isLoading: false }));
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
       //console.log('A name was submitted: ' + this.state.value);

        this.fetchCity(this.state.value);

        //console.log("this state city: " + this.state.value);
        //console.log("city data: " + JSON.stringify(this.state.city));

        event.preventDefault();
    }


    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit} name="Search City">
                <label>
                    Enter a City Name: &nbsp;
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <div id="restaurantCityInfo">{this.state.city}</div>
            </div>
        );
    }
}

export default Form;
