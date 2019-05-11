import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Steps from '../../../features/shipping-label-maker/steps';

export class Wizard extends Component {
    
    // Button click action
    onAction = (which) => {
        //const WizardAction = { prev: 1, next: 2, end: 3};
        switch (which) {
            case 'prev':
                this.props.goback();
                break;
            case 'next':
                this.props.goforward();
                break;
            case 'end':
                this.props.onComplete();
                break;
            default:
                //
                break;
        }
    };
    
    render() {
        return (
            <React.Fragment>
                {this.props.header()}
                <Steps
                    wizardContext={this.props.wizardContext}
                    onAction={this.onAction}
                    handleInputChange={this.props.handleInputChange}
                />
            </React.Fragment>
        )
      }
}

Wizard.propTypes = {
  header: PropTypes.func.isRequired,
  steps: PropTypes.array.isRequired,
  wizardContext: PropTypes.object.isRequired,
  onComplete: PropTypes.func.isRequired
};

export default Wizard;