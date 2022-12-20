import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Details from 'components/organism/Details/Details';

class DetailsTemplate extends React.Component {
  state = {
    pageType: 'note',
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
        {console.log(this.props)}
        <Details pageType={pageType} />
      </UserPageTemplate>
    );
  }
}

export default DetailsTemplate;
