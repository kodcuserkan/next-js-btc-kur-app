import React, { Component } from 'react'

export default class Kurlar extends Component {
    state = {
        kur: "USD"
    }
    render() {

        let list = '';

        if (this.state.kur === "USD") {
            list = (<li className="list-group-item">
                CoinDesk verilerine göre ABD Doları cinsinden BTC fiyatı :
                <strong>{this.props.bpi.USD.rate}</strong>
                <span className="badge badge-primary">-{this.props.bpi.USD.code}-</span>

            </li>)
        }
        else if (this.state.kur === "EUR") {
            list = (<li className="list-group-item">
                CoinDesk verilerine göre {this.props.bpi.EUR.description} cinsinden BTC fiyatı :
                <strong>{this.props.bpi.EUR.rate}</strong>
                <span className="badge badge-primary"> -{this.props.bpi.EUR.code}- </span>
            </li>)
        }
        else if (this.state.kur === "GBP") {
            list = (<li className="list-group-item">
                CoinDesk verilerine göre İngiliz Sterlini cinsinden BTC fiyatı :
                <strong>{this.props.bpi.GBP.rate}</strong>
                <span className="badge badge-primary"> -{this.props.bpi.GBP.code}- </span>
            </li>)
        }

        return (
            <div>
                <ul className="list-group">
                    {list}
                </ul>
                <br/>
                <select onChange={e=> this.setState({kur : e.target.value})} className="form-control">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                </select>
            </div>
        )
    }
}
