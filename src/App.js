import React from 'react';

import 'App.css';
import { Button } from 'antd';
import PropTypes from "prop-types"
import ThemedButton from "ThemedButton";


class PostDetail extends React.Component {
  static propTypes = {
    postId: PropTypes.number.isRequired,
  }

  state = {
    PostDetail: null,
  }

  componentDidMount() {
    const { postId } = this.props;
    this.requestPost(postId);
  }
  componentDidUpdate(prevProps) {
    const { postId } = this.props;
    if ( postId !== prevProps.postId ){
      this.requestPost(postId);
    }
  }

  requestPost(postId){
    console.log(`request post #${postId}`)
    // axios (http client) => this.setState를 통한 반영
    this.setState({
      postDetail: null
    });
    setTimeout(() => {
      this.setState({
        postDetail: `로딩된 post #${postId}`
      })
    }, 3000);
  }

  render () {
    const { postId } = this.props;
    const { postDetail } = this.state;
    return (
      <div>
        포스팅 #{postId}
        <hr />
        {!postDetail && "로딩 중 ..."}
        {postDetail}
      </div>
    )
  }
}


class App extends React.Component{
  state = {
    postId: 10,
  }
  render() {
    return (
      <div>
        <ThemedButton theme="success" label="Say Hello"></ThemedButton>
        <PostDetail postId={this.state.postId}></PostDetail>
        <button onClick={() => this.setState({ postId: 20 })}>변경하기</button>
      </div>
    );
  }
}

export default App;
