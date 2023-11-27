import '../login/login.css'

function Login() {
    return(
        <div class="box">
        <div class="frame"></div>  
        <div class="signup-box">
          <h1>REGISTRAR</h1>
          <form>
            <label>Nome inteiro</label>
            <input type="text" placeholder="" />
            <label>Email</label>
            <input type="email" placeholder="" />
            <label>Senha</label>
            <input type="password" placeholder="" />
            <a href="principal/principal.html"><input type="button" value="Registrar-se" /></a>
        </form>
          <p>
            Ao clicar no botão de registrar você irá concordar com os <br />
            <a href="#">Termos e Condições</a> e nossa <a href="#">Política de Privacidade</a>
          </p>
        </div>
        <p class="para-2">
          Já tem uma conta? <a href="index2.html">Entre Aqui</a>
        </p>
      </div> 
    )
}

export default Login