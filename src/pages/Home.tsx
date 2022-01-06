/* eslint-disable react/jsx-no-target-blank */
import { useHistory } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.gif'
import logoImg from '../assets/images/logo.png'
import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'
// import { getStripeJs } from '../services/stripe-js'
// import { api } from '../services/api'
// import { signIn, useSession } from 'next-auth/client'

interface SubscribeButtonProps{
  priceId: string;
}


export function Home({ priceId }: SubscribeButtonProps) {
  const history = useHistory();
  const { user, signInWithGogle } = useAuth()
  // const [session] = useSession()

  async function handleCreateRoom() {
    if(!user) {
      await signInWithGogle()
    }
    history.push('/home')
    //window.location.assign('MapView.html')
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
        <p>👏 Hey, Bem-vindo(a) ao</p>
        <strong>Pet Food Publications</strong>
      </aside>
      <main>
      <div className="main-content">
        <img src={logoImg} alt="Letmeask"/>
        <button onClick={handleCreateRoom} className="create-room">
        <img src={googleIconImg} alt="Logo do Google"/>
          Entrar com o Google
        </button>
        <div className="separator">Acumule mensalmente</div>
          <Button type="submit">
          <a href="https://buy.stripe.com/test_dR614weIV5Czc7u3cc" target="_blank">Participar</a>
          </Button>
      </div>
      </main>
    </div>
  )
}

// export const getStaticProps: GetStaticProps = async() => {
//   const price = await stripe.prices.retrieve('price_1JHYaTCKYyhjp8iTpkhl1YQ8')

//   const product = {
//     priceId: price.id,
//     amount: new Intl.NumberFormat('en-US',{
//       style: 'currency',
//       currency: 'USD',
//     }).format((price.unit_amount / 100)),
//   }

//   return {
//     props: {
//       product
//     },
//     revalidate: 60 * 60 * 24, //24 hours
//   }
// }