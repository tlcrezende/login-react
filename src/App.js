import jpIMG from './assets/jp.svg'
import './styles.css'

function App() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Bem Vindo!</span>

            <span className="login-form-title">
              <img src={jpIMG} alt="Programdor Thiago"></img>
            </span>

            <div className="wrap-input">
              <input type="email" />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input">
              <input type="password" />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div classNome="Container-login-form-btn">
              <button className="login-form-btn">Login</button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta?</span>
              <a className="txt2" href="#">Criar conta.</a>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
