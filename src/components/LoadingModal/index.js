import React, { Component } from 'react';
import { Container, Spinner, Text } from 'native-base';
import { Modal, View } from 'react-native';
import PropTypes from 'prop-types';

import { noop } from '../../utils';
import LoadingStyles from './styles';


type Props = {};
export default class LoadingModal extends Component {
    static propTypes = {
        visible: PropTypes.bool,
        message: PropTypes.string
    };

    renderLoadingMessage = () => {
        let message = null;

        if (this.props.message) {
            message = (
                <Text style={LoadingStyles.spinnerText}>
                    {this.props.message}
                </Text>
            );
        }

        return message;
    };

    render() {
        return (
            <Container>
                <Modal animationType={'fade'}
                       visible={this.props.visible}
                       transparent
                       onRequestClose={noop}
                >
                    <View style={LoadingStyles.container}>
                        <View style={LoadingStyles.innerContainer}>
                            <View style={LoadingStyles.spinner}>
                                <Spinner size="large" color={'#3C7B8D'} />
                                {this.renderLoadingMessage()}
                            </View>
                        </View>
                    </View>
                </Modal>
            </Container>
        );
    }
}