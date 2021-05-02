import { useState } from 'react';
import { withAuthUser, AuthAction } from 'next-firebase-auth'
import CKEditor from 'ckeditor4-react';

function CreatePost(params) {
  const [content, setContent] = useState({
    title: undefined,
    body: undefined,
  })
  const onChange = (e) => {
    const { value, name } = e.target;
    setContent(prevState => ({ ...prevState, [name]: value }));
  }
  const onChangeCKEditor = (e) => {
    const { editor, name } = e;
    setContent(prevState => ({ ...prevState, [name]: editor.getData() }));
  }
  const onSubmit = async () => {
    const { title, body, slug, created_at } = content;
    
  }

  return (<div>
    <div class="container">
      <hr />
      <h2 class="text-center">
        Crie o seu melhor post!
      </h2>
      <div class="row">
        <div class="col-12">
          <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            <label class="form-check-label" for="flexSwitchCheckDefault">Publicado?</label>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label>Título</label>
            <input type="text" 
              name="title" 
              class="form-control" 
              value={content.title} 
              onChange={onChange}/>
          </div>
        </div>
      </div>
  
      <div class="row">
        <div class="col-10">
          <div class="form-group">
            <label>Slug</label>
            <input type="text" 
              name="slug" 
              class="form-control" 
              readOnly="readOnly" 
              value={content.slug} 
              onChange={onChange}/>
          </div>
        </div>

        <div class="col-2">
          <div class="form-group">
            <label>Data de Criação</label>
            <input type="date" 
              name="created_at" 
              class="form-control" 
              value={content.created_at} 
              onChange={onChange}/>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="form-group mt-2">
            <label>Conteúdo</label>
            <CKEditor
              name="body" 
              type="classic"
              data={content.body} 
              onChange={onChangeCKEditor} />
          </div>
        </div>
      </div>

      <br />
      <div class="row">
        <div class="col-12">
          <div class="d-grid gap-2">
            <button type="button" 
              class="btn btn-primary btn-sm" 
              onClick={onSubmit}>Salvar POST</button>
          </div>
        </div>
      </div>

    </div>
  </div>)  
}

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  authPageURL: '/auth'
})(CreatePost)