import './index.scss'
import Icon from '../../atoms/icon'

const Main = () => {

  return (
    <main>
      <div className="section pitch">
        <div className="callout">
          <div className="badge">We’re hiring</div>
          <a>Visit our careers page</a>
          <button className="chevron" >          
            <Icon type='chevron' className=''/>
          </button>
        </div>
        <h1>A better way to<br/><span className="highlight">ship web apps</span></h1>
        <p>
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
        </p>
      </div>
      <div className="section start">
        <form className="inline-form" onSubmit={()=> undefined}>
          <input type="text" name="email" placeholder="Enter your email" />
          <input type="submit" value="Start free trial" />
        </form>
        <p>Start your free 14-day trial, no credit card necessary. By providing your email, you agree to our terms or service.</p>
      </div>
    </main>
  )
}

export default Main
