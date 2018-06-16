jest.unmock('../../src/components/LoadingModal/index');

import '../testutils/jest';
import ReactNativeTesting from '../../src/components/LoadingModal/index';

describe('ReactNativeTesting', () => {
  let component;
  let textInput;
  const defaultState = {text: ''};

  test('renders correctly', () => {
    const snapshot = renderer.create(<ReactNativeTesting />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  beforeEach(() => {
    component = shallow(<ReactNativeTesting />);
    textInput = component.find('TextInput');
  });

  it('has default state', () => {
    expect(component.state()).toEqual(defaultState);
  });

  it('renders welcome text', () => {
    const expectedText = 'Welcome to React Native testing demo app';
    const text = component.find('Text').children().text();
    expect(text).toEqual(expectedText);
  });

  it('renders input field with placeholder', () => {
    const expectedPlaceholder = 'write something';
    expect(textInput.length).toBe(1);
    expect(textInput.props().placeholder).toEqual(expectedPlaceholder);
  });

  describe('when text changes', () => {
    const newTextValue = 'random string';
    beforeEach(() => {
      textInput.simulate('changeText', newTextValue);
    });

    it('updates component state', () => {
      expect(component.state().text).toEqual(newTextValue);
    });
  });
});
