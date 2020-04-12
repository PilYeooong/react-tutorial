import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';
import queryString from "query-string";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>App10</h1>
        <ul>
          <li>
            <NavLink exact to="/about/" activeStyle={NavActiveStyle}>
              about
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/about/company/" activeStyle={NavActiveStyle}>
              about company
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile/" activeStyle={NavActiveStyle}>
              profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog/" activeStyle={NavActiveStyle}>
              blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/hello/" activeStyle={NavActiveStyle}>
              hello
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/about/" component={AboutPage} />
          <Route exact path="/about/company/" component={AboutCompanyPage} />
          <Route exact path="/profile/" component={ProfilePage} />
          <Route path="/blog/:post_id/" component={PostDetail} />
          <Route path="/blog/" component={PostList} />
          <Route component={RouteNoMatch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

const NavActiveStyle = {
  fontWeight: 'bold',
  backgroundColor: 'yellow',
};

const AboutPage = () => {
  return (
    <div>
      <h2>About Page</h2>
    </div>
  );
};

const AboutCompanyPage = () => {
  return (
    <div>
      <h2>About Company</h2>
    </div>
  );
};

const ProfilePage = ({ location }) => {
  const { aa } = queryString.parse(location.search);
  console.log(aa);
  return (
    <div>
      <h2>Profile</h2>
      aa: {aa}
    </div>
  );
};

const PostList = ({ match }) => {
  return (
    <div>
      <h2>PostList</h2>
      <ul>
        <li>
          <Link to={`${match.url}100/`}>100번포스팅</Link>
        </li>
        <li>
          <Link to={`${match.url}101/`}>101번포스팅</Link>
        </li>
      </ul>
    </div>
  );
};

const PostDetail = ({ match }) => {
  const {
    params: { post_id },
  } = match;

  const [post, setPost] = useState();

  useEffect(() => {
    console.log(`get post detail api 호출: ${post_id}`);
    setPost({ title: `포스팅 ${post_id}`, content: `포스팅 ${post_id} 내용` });
  }, [post_id]);

  return (
    <div>
      <h2>PostDetail #:{post_id}</h2>
      {JSON.stringify(post)}
    </div>
  );
};
const RouteNoMatch = ({ location }) => {
  return <div>잘못된 경로입니다. ({location.pathname})</div>;
};

export default App;
