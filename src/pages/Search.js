import React, { Component } from 'react';
import api from '../utils/api';
import Card from '../components/Card';
import Row from '../components/Row';
import Container from '../components/Container';
import Column from '../components/Column';
import './index.css';


class Employee extends Component {
    state = {
        results: [],
        input: ''
    };

    componentDidMount() {
        this.fetchData()
    }

    fetchData() {
        api.getEmployee().then(res => {
            this.setState({
                results: res.data.results
            });
        })
        return this.state.results
    }

    handleInputChange = event => {
        this.setState({ input: event.target.value })
    }

    handleSearch = (event) => {
        event.preventDefault();
        const item = this.state.input;
        const res = this.state.results.filter(val => val.name.first === item);

        this.setState({
            results: res
        });
    }

    render() {
        const employees = this.state.results;
        return (
            <div>
                <form className='search-form form-inline'>
                    <div>
                        <input onChange={this.handleInputChange} className='employeeSearch' placeholder='Search here' />
                        <button onClick={this.handleSearch}>Search</button>
                    </div>
                </form>
                <Container>
                    <Row>
                        {
                            employees.map((employee, i) => (
                                <Column key={i}>
                                    <Card
                                        image={employee.picture.large}
                                        firstName={employee.name.first}
                                        lastName={employee.name.last}
                                        fullname={`${employee.name.first} ${employee.name.last}`}
                                        age={employee.dob.age}
                                        email={employee.email}
                                        phone={employee.phone}
                                    />
                                </Column>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Employee;