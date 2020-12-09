import React, { useEffect, useState } from 'react';

// SERVICES
import api from '../../services/api';

// ICONS
import {
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa';

// STYLED-COMPONENTS
import {
  Container,
  Logomarca,
  Body,
  Icons,
  Version
} from './styles';

// ASSETS
import logomarca from '../../assets/img/logo.png';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import { addPostRequest } from '../../store/modules/post/actions';

export default function Homepage() {

  const posts = useSelector(state => state.post.data);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [version, setVersion] = useState('');
  const [postAdd, setPostAdd] = useState('');

  async function loadVersion(){
    const response = await api.get(`/`);
    setTitle(response.data.title);
    setVersion(response.data.version);
  }

  useEffect(()=>{
    loadVersion();
  }, [])

  function handleAddPost(){
    dispatch(addPostRequest(postAdd));
    setPostAdd('');
  }

  useEffect(()=>{
    console.log(posts);
  }, [posts])

  return (
    <Container>
      <Logomarca src={logomarca} alt="Logo" />
      <Body>
        <span>POWERED BY</span>
        <span className="title">
          Input
          <b>On</b>
        </span>
      </Body>
      <Version>
        <span><b>Title:</b> {title}</span>
        <span><b>Version:</b> {version}</span>
      </Version>
      <ul>
        { 
          posts &&
          posts.map(post => <li key={post}>{post}</li>)
        }
      </ul>
      <input type="text" value={postAdd} onChange={e => setPostAdd(e.target.value)}/>
      <button onClick={handleAddPost}>
        Adicionar Post
      </button>
      <Icons>
        <FaGithub className="icon" onClick={() => window.open('https://github.com/dennergazevedo')} />
        <FaLinkedinIn className="icon" onClick={() => window.open('https://www.linkedin.com/in/denner-azevedo-6b7b97199/')} />
      </Icons>
    </Container>
  );
}
