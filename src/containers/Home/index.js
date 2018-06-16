import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Button, Text, Body, Title } from 'native-base';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as action from '../../actions/data';
import * as loadingModalAction from '../../actions/loadingModal';
import SearchBar from 'react-native-searchbar';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            ids: []
        }
    }

    componentDidMount() {
        this.props.action.fetchDummyData();
        this.props.loadingModalAction.openLoadingModal('Fetching Stores.....');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.store.data) {
            const storeIds = nextProps.store.data.map((data) => data.id)
            this.setState({ data: nextProps.store.data, ids: storeIds });
            this.props.loadingModalAction.closeLoadingModal();
        }
    }

    renderStore = () => {
        this.state.data.map((data) => {
            return (
                <ListItem>
                    <Text>Store {data.id}</Text>
                </ListItem>
            )
        })
    }

    _handleResults(results) {
        this.setState({ ids: results });
    }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Codeln App Store</Title>
          </Body>
        </Header>
        {/* <SearchBar
          ref={(ref) => this.searchBar = ref}
          data={items}
          handleResults={this._handleResults}
          showOnLoad
        /> */}
        <Content>
          <List>
          {this.state.data.map((data) => {
            return (
                <ListItem onPress={() => this.props.navigation.navigate('Details', { 'id': data.id, 'desc': data.body })}>
                    <Text>Store {data.id}</Text>
                </ListItem>
                
            )
        })}
          </List>
        </Content>
      </Container>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        store: state.store
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        loadingModalAction: bindActionCreators(loadingModalAction, dispatch),
        action: bindActionCreators(action, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);