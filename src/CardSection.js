import React from 'react';
import CardSummary from './CardSummary.js';
import CardFull from './CardFull.js';
import DropDown from './DropDown.js';


class CardSection extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  };

  render() {
    return(
      <div>
        <DropDown />
        <CardSummary />
        {/* { !this.showFullCard ? <CardFull /> : "Nothing to see here"} */}
        <CardFull />
      </div>
    );
  }
}

export default CardSection;



