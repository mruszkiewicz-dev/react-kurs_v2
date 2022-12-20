import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';

class DetailsTemplate extends React.Component {
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    const { match } = this.props;

    switch (true) {
      case match.pathname.includes('twitters'):
        this.setState({ pageType: 'twitter' });
        break;
      case match.pathname.includes('notes'):
        this.setState({ pageType: 'note' });
        break;

      case match.pathname.includes('articles'):
        this.setState({ pageType: 'article' });
        break;
      default:
        console.log('this.state.pageType');
    }
  }

  render() {
    const { pageType } = this.state;
    return (
      <UserPageTemplate pageType={pageType}>
        <p>{`is twi: ${pageType}`}</p>
      </UserPageTemplate>
    );
  }
}

export default DetailsTemplate;
