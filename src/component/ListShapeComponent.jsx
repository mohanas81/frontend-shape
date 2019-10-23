import React, { Component } from 'react'
import ShapeDataService from '../service/ShapeDataService.js';
class ListShapeComponent extends Component {
constructor(props) {
        super(props)
        this.state = {
            shapes: [],
            message: null
 
        
    }
    this.refreshShape = this.refreshShape.bind(this)
}

    componentDidMount() {
        this.refreshShape();
    }

    refreshShape() {
        ShapeDataService.retrieveAllShape()//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ shapes: response.data })
 
                }
            )
    }
 
    render() {
        return (
            <div className="container">
                <h3>All Shapes</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Category</th>
                                <th>Requirement</th>
                                <th>Area</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.shapes.map(
                                    shape =>
                                        <tr key={shape.id}>
                                            <td>{shape.categoryId}</td>
                                            <td>{shape.requirement}</td>
                                            <td>{shape.area}</td>
                                            
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default ListShapeComponent
