import React, { Component, Fragment } from 'react';
import ChipInput from 'material-ui-chip-input';

class ChipInputExample extends Component {
    constructor() {
        super();
        this.state = {
            sessionData: {
                language: [],
                skills: []
            }
        }
        this.addChip = this.addChip.bind(this);
        this.removeChip = this.removeChip.bind(this);
    }
    componentDidMount = () => {
    }

    addChip = (value, name) => {
        const { sessionData } = this.state;
        sessionData[name].push(value.charAt(0).toUpperCase() + value.slice(1));
        this.setState({ sessionData });
    };
    removeChip = (chip, index, name) => {
        const { sessionData } = this.state;
        sessionData[name].splice(index, 1);
        this.setState({ sessionData });
    };

    render() {
        const { sessionData } = this.state;
        return (
            <Fragment>
                <h3 align="center">Demo of material ui chip input</h3>
                <div className="row">
                    <div className="col-lg-6  col-md-6 col-sm-12">
                        <div style={{ margin: '1rem' }}>
                            <label htmlFor="uname1">Languages Used</label>
                            <div className="commonInputField">
                                <ChipInput
                                    value={sessionData.language}
                                    onAdd={value => this.addChip(value, "language")}
                                    onDelete={(chip, index) => this.removeChip(chip, index, "language")}
                                    variant="outlined"
                                    newChipKeyCodes={[9, 13, 187, 188]}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6  col-md-6 col-sm-12">
                        <div style={{ margin: '1rem' }}>
                            <label htmlFor="uname1">Used Skills</label>
                            <div className="commonInputField">
                                <ChipInput
                                    value={sessionData.skills}
                                    onAdd={value => this.addChip(value, "skills")}
                                    onDelete={(chip, index) => this.removeChip(chip, index, "skills")}
                                    variant="outlined"
                                    newChipKeyCodes={[9, 13, 187, 188]}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default (ChipInputExample)