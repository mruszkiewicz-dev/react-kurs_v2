import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Details from 'components/organism/Details/Details';
import widthContext from 'hoc/withContext';

class DetailsTemplate extends React.Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    const { context } = this.props;

    switch (true) {
      case context.includes('twitters'):
        this.setState({ pageType: 'twitters' });
        break;
      case context.includes('notes'):
        this.setState({ pageType: 'notes' });
        break;

      case context.includes('articles'):
        this.setState({ pageType: 'articles' });
        break;
      default:
        console.log('this.state.pageType');
    }
  }

  render() {
    const { pageType } = this.state;

    return (
      <UserPageTemplate>
        <p>{`is ${pageType}`}</p>
        {/* <Details pageType={pageType} /> */}
      </UserPageTemplate>
    );
  }
}

export default widthContext(DetailsTemplate);
