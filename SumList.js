
import { Component } from "react";
import { identifier } from "@babel/types";

class SumList extends Component {
    constructor() {
        super()
        this.state = {
            numbers: [5, 4, 3, 4],
            listItem: null,
            sum: 0
        }

        this.state.listItem = this.state.numbers.map((i) =>
        this.state.sum = parseInt(this.state.sum)+parseInt(i));

        // getSum = (e) => {
        //     this.setState({
        //         sum: parseInt(this.state.sum) + 1
        //     });
        // };
    }
    render() {
        return (
            <div>
                sum:{this.state.sum}
            </div>
        );
    }
}
export default SumList;
