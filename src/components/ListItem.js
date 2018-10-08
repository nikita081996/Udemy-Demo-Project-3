import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { CardSection } from './common';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return <Text>{library.item.description}</Text>;
    }
  }
  render() {
    const { titleStyle } = styles;
    const { title, id } = this.props.library.item;

    //console.log(this.props.library);
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectedLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return { expanded };
};

export default connect(
  mapStateToProps,
  actions
)(ListItem);
